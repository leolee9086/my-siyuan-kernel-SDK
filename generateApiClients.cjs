const fs = require('fs').promises;
const path = require('path');
const { pathToFileURL } = require('url');
const z = require('zod');

const API_DEFS_DIR = path.join(__dirname, 'apiDefs');
const OUTPUT_CLIENT_DIR = path.join(__dirname, 'client');
const OUTPUT_DTS_FILE = path.join(OUTPUT_CLIENT_DIR, 'index.d.ts');

const GENERATED_TYPES = {};

// Helper to check if an object is a Zod schema (ZodRawShape)
const isZodRawShape = (obj) => {
    if (typeof obj !== "object" || obj === null) return false;
    if (Object.keys(obj).length === 0) return false; // Empty object is not a raw shape with Zod types
    // Check that at least one property is a ZodType instance
    return Object.values(obj).some(v => v?._def?.typeName);
};

function capitalizeFirstLetter(string) {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getApiNameFromDef(apiDef) {
    return apiDef.en || apiDef.endpoint.split('/').pop().replace(/-/g, '_');
}

function parseZodSchemaDef(schemaDef, baseTypeNameForTs) {
    let currentDef = schemaDef;
    let isOptional = false;
    let isNullable = false;

    while (
        currentDef.typeName === z.ZodFirstPartyTypeKind.ZodOptional ||
        currentDef.typeName === z.ZodFirstPartyTypeKind.ZodNullable ||
        currentDef.typeName === z.ZodFirstPartyTypeKind.ZodDefault
    ) {
        if (currentDef.typeName === z.ZodFirstPartyTypeKind.ZodOptional) {
            isOptional = true;
        } else if (currentDef.typeName === z.ZodFirstPartyTypeKind.ZodNullable) {
            isNullable = true;
        }
        
        if (currentDef.innerType && currentDef.innerType._def) {
             currentDef = currentDef.innerType._def;
        } else {
            console.warn(`[parseZodSchemaDef] Encountered ${currentDef.typeName} without a valid innerType._def for ${baseTypeNameForTs}`);
            break; 
        }
    }
    const mainDef = currentDef;
    const description = mainDef.description || '';
    let jsDocType = 'any';
    let tsType = 'any';
    let properties = null;
    let itemType = null;
    let enumValues = null;
    let unionOptions = null;
    let literalValue = null;
    let recordKeyType = null;
    let recordValueType = null;

    switch (mainDef.typeName) {
        case z.ZodFirstPartyTypeKind.ZodString:
            jsDocType = 'string'; tsType = 'string';
            break;
        case z.ZodFirstPartyTypeKind.ZodNumber:
            jsDocType = 'number'; tsType = 'number';
            break;
        case z.ZodFirstPartyTypeKind.ZodBoolean:
            jsDocType = 'boolean'; tsType = 'boolean';
            break;
        case z.ZodFirstPartyTypeKind.ZodAny:
            jsDocType = 'any'; tsType = 'any';
            break;
        case z.ZodFirstPartyTypeKind.ZodNull:
            jsDocType = 'null'; tsType = 'null';
            break;
        case z.ZodFirstPartyTypeKind.ZodUnknown:
            jsDocType = 'unknown'; tsType = 'unknown';
            break;
        case z.ZodFirstPartyTypeKind.ZodVoid:
            jsDocType = 'void'; tsType = 'void';
            if (mainDef.shape && Object.keys(mainDef.shape()).length === 0) {
                jsDocType = 'object'; tsType = 'Record<string, never>';
            }
            break;
        case z.ZodFirstPartyTypeKind.ZodArray:
            itemType = parseZodSchemaDef(mainDef.type._def, `${baseTypeNameForTs}Item`);
            jsDocType = `Array<${itemType.jsDocType.split(' ')[0].replace('?', '')}>`;
            tsType = `Array<${itemType.tsType}>`;
            break;
        case z.ZodFirstPartyTypeKind.ZodObject:
            jsDocType = 'object';
            properties = {};
            const shape = mainDef.shape();
            if (Object.keys(shape).length === 0) {
                tsType = 'Record<string, never>';
            } else {
                for (const key in shape) {
                    properties[key] = parseZodSchemaDef(shape[key]._def, `${baseTypeNameForTs}${capitalizeFirstLetter(key)}`);
                }
                if (baseTypeNameForTs && !GENERATED_TYPES[baseTypeNameForTs]) {
                    let tsProps = '';
                    for (const key in properties) {
                        const propInfo = properties[key];
                        const optMarker = propInfo.isOptional ? '?' : '';
                        const descComment = propInfo.description ? ` // ${propInfo.description.replace(/\\r\\n|\\r|\\n/g, ' ')}` : '';
                        tsProps += `  ${key}${optMarker}: ${propInfo.tsType};${descComment}\\n`;
                    }
                    if (mainDef.catchall && mainDef.catchall._def.typeName !== z.ZodFirstPartyTypeKind.ZodNever) {
                        const catchallTypeInfo = parseZodSchemaDef(mainDef.catchall._def, `${baseTypeNameForTs}Catchall`);
                        tsProps += `  [key: string]: ${catchallTypeInfo.tsType}; // From .catchall()\\n`;
                    }
                    GENERATED_TYPES[baseTypeNameForTs] = `interface ${baseTypeNameForTs} {\\n${tsProps}}`;
                    tsType = baseTypeNameForTs;
                } else if (baseTypeNameForTs && GENERATED_TYPES[baseTypeNameForTs]) {
                    tsType = baseTypeNameForTs;
                } else {
                    let inlineProps = '';
                    for (const key in properties) {
                        const propInfo = properties[key];
                        const optMarker = propInfo.isOptional ? '?' : '';
                        inlineProps += `  ${key}${optMarker}: ${propInfo.tsType};\\n`;
                    }
                    if (mainDef.catchall && mainDef.catchall._def.typeName !== z.ZodFirstPartyTypeKind.ZodNever) {
                        const catchallTypeInfo = parseZodSchemaDef(mainDef.catchall._def, `${baseTypeNameForTs}Catchall`);
                        inlineProps += `  [key: string]: ${catchallTypeInfo.tsType};\\n`;
                    }
                    tsType = `{\\n${inlineProps}}`;
                }
            }
            break;
        case z.ZodFirstPartyTypeKind.ZodEnum:
            enumValues = mainDef.values;
            jsDocType = enumValues.map(v => typeof v === 'string' ? `'${v}'` : v).join(' | ');
            tsType = jsDocType;
            break;
        case z.ZodFirstPartyTypeKind.ZodUnion:
            unionOptions = mainDef.options.map((optSchema, i) =>
                parseZodSchemaDef(optSchema._def, `${baseTypeNameForTs}Option${i}`)
            );
            jsDocType = unionOptions.map(opt => opt.jsDocType.split(' ')[0]).join(' | ');
            tsType = unionOptions.map(opt => opt.tsType).join(' | ');
            break;
        case z.ZodFirstPartyTypeKind.ZodLiteral:
            literalValue = mainDef.value;
            jsDocType = typeof literalValue === 'string' ? `'${literalValue}'` : String(literalValue);
            tsType = jsDocType;
            break;
        case z.ZodFirstPartyTypeKind.ZodRecord:
            recordKeyType = parseZodSchemaDef(mainDef.keyType._def, `${baseTypeNameForTs}Key`);
            recordValueType = parseZodSchemaDef(mainDef.valueType._def, `${baseTypeNameForTs}Value`);
            jsDocType = `Object<${recordKeyType.jsDocType.split(' ')[0]}, ${recordValueType.jsDocType.split(' ')[0]}>`;
            tsType = `Record<${recordKeyType.tsType}, ${recordValueType.tsType}>`;
            break;
        case z.ZodFirstPartyTypeKind.ZodLazy:
            if (baseTypeNameForTs && GENERATED_TYPES[baseTypeNameForTs] && !GENERATED_TYPES[baseTypeNameForTs].startsWith('// Recursive type')) {
                // Already processed this lazy type and it has a full definition
                tsType = baseTypeNameForTs;
                jsDocType = baseTypeNameForTs; 
            } else {
                const getter = mainDef.getter;
                if (typeof getter === 'function') {
                    // Check if we are already trying to resolve this exact lazy type name to prevent infinite recursion
                    // in case the baseTypeNameForTs is the same in a direct recursive call.
                    if (baseTypeNameForTs && GENERATED_TYPES[baseTypeNameForTs] && GENERATED_TYPES[baseTypeNameForTs].startsWith('// Recursive type')) {
                        // We are in a recursive loop for this name, just return the name
                        // The actual definition will be filled once the initial call unwinds.
                        tsType = baseTypeNameForTs;
                        jsDocType = baseTypeNameForTs;
                    } else {
                        const internalSchema = getter();
                        if (internalSchema && internalSchema._def) {
                            let placeholderReplaced = false;
                            if (baseTypeNameForTs && !GENERATED_TYPES[baseTypeNameForTs]) {
                                GENERATED_TYPES[baseTypeNameForTs] = `// Recursive type ${baseTypeNameForTs} (processing)`;
                            }

                            const internalTypeInfo = parseZodSchemaDef(internalSchema._def, baseTypeNameForTs);
                            tsType = internalTypeInfo.tsType;
                            jsDocType = internalTypeInfo.jsDocType;

                            // If the recursive call resulted in generating an interface with baseTypeNameForTs,
                            // it would have updated GENERATED_TYPES[baseTypeNameForTs].
                            // If tsType is different from baseTypeNameForTs (e.g., it's an array of baseTypeNameForTs, or a primitive),
                            // and we had set a placeholder, we should remove it if the type is not self-referential by name.
                            if (baseTypeNameForTs && 
                                GENERATED_TYPES[baseTypeNameForTs] && 
                                GENERATED_TYPES[baseTypeNameForTs].startsWith('// Recursive type') && 
                                tsType !== baseTypeNameForTs) {
                                // If the internal type resolved to something that isn't directly the named interface
                                // (e.g. `Array<MyRecursiveInterface>` instead of just `MyRecursiveInterface`),
                                // then the placeholder for `MyRecursiveInterface` itself (if it was an object)
                                // should have been replaced by the actual interface definition by the recursive call.
                                // If tsType is different, it means the lazy type didn't resolve to an object of its own name.
                                // This check might need refinement depending on how object generation works.
                                if (!GENERATED_TYPES[baseTypeNameForTs].includes('interface')) {
                                     delete GENERATED_TYPES[baseTypeNameForTs];
                                }
                            }
                        } else {
                            console.warn(`[parseZodSchemaDef] ZodLazy for ${baseTypeNameForTs} has a getter that did not return a valid schema.`);
                            tsType = 'any'; jsDocType = 'any';
                            if (baseTypeNameForTs && GENERATED_TYPES[baseTypeNameForTs] && GENERATED_TYPES[baseTypeNameForTs].startsWith('// Recursive type')) {
                                delete GENERATED_TYPES[baseTypeNameForTs]; // Clean up placeholder on error
                            }
                        }
                    }
                } else {
                    console.warn(`[parseZodSchemaDef] ZodLazy for ${baseTypeNameForTs} has no getter function.`);
                    tsType = 'any'; jsDocType = 'any';
                    if (baseTypeNameForTs && GENERATED_TYPES[baseTypeNameForTs] && GENERATED_TYPES[baseTypeNameForTs].startsWith('// Recursive type')) {
                        delete GENERATED_TYPES[baseTypeNameForTs]; // Clean up placeholder on error
                    }
                }
            }
            break;
        default:
            console.warn(`[parseZodSchemaDef] Unhandled Zod type: ${mainDef.typeName} for ${baseTypeNameForTs}`);
            jsDocType = 'any'; tsType = 'any';
    }

    return {
        typeName: mainDef.typeName,
        description: description,
        isOptional: isOptional,
        isNullable: isNullable,
        jsDocType: `${jsDocType}${isNullable ? ' | null' : ''}`,
        tsType: `${tsType}${isNullable ? ' | null' : ''}`,
        properties: properties,
        itemType: itemType,
        enumValues: enumValues,
        unionOptions: unionOptions,
        literalValue: literalValue,
        recordKeyType: recordKeyType,
        recordValueType: recordValueType,
    };
}

function parseSchema(schemaFn, apiNameForContext, baseTypeNameForTs) {
    if (typeof schemaFn !== 'function') {
        // Handle cases where schemaFn is not a function (e.g., a direct object or Zod instance)
        if (schemaFn && typeof schemaFn === 'object') {
            if (schemaFn._def && schemaFn._def.typeName === z.ZodFirstPartyTypeKind.ZodObject) {
                console.error(`[parseSchema] ERROR: Schema for ${apiNameForContext} was a direct z.object() instance. It should be a raw shape or a function returning one. Please fix the API definition.`);
                return parseZodSchemaDef(z.any().describe(`ERROR: API def ${apiNameForContext} is a direct z.object() instance.`)._def, baseTypeNameForTs);
            } else if (isZodRawShape(schemaFn)) {
                try {
                    const zodSchemaInstance = z.object(schemaFn);
                    return parseZodSchemaDef(zodSchemaInstance._def, baseTypeNameForTs);
                } catch (e) {
                    console.error(`[parseSchema] Error wrapping raw shape object for ${apiNameForContext} with z.object(): ${e.message}.`);
                    return parseZodSchemaDef(z.any().describe(`Error in raw shape: ${e.message}`)._def, baseTypeNameForTs);
                }
            } else if (schemaFn._def && schemaFn._def.typeName) { // Other Zod type instance
                 return parseZodSchemaDef(schemaFn._def, baseTypeNameForTs);
            } else if (Object.keys(schemaFn).length === 0) { // Empty object {}
                 return parseZodSchemaDef(z.object({})._def, baseTypeNameForTs);
            }
        }
        console.warn(`[parseSchema] Schema for ${apiNameForContext} is not a function and not a recognized schema object/instance. Defaulting to z.any().`);
        return parseZodSchemaDef(z.any().describe('Schema was not a function or recognized object/instance')._def, baseTypeNameForTs);
    }

    // schemaFn IS a function
    try {
        const returnedValue = schemaFn(z);

        if (returnedValue && returnedValue._def && returnedValue._def.typeName === z.ZodFirstPartyTypeKind.ZodObject) {
            console.error(`[parseSchema] ERROR: Schema function for ${apiNameForContext} directly returned a z.object() instance. It should return a raw shape (e.g., { key: z.string() }). Please fix the API definition.`);
            return parseZodSchemaDef(z.any().describe(`ERROR: API def ${apiNameForContext} returns z.object() directly.`)._def, baseTypeNameForTs);
        } else if (isZodRawShape(returnedValue)) {
            try {
                const zodSchemaInstance = z.object(returnedValue);
                return parseZodSchemaDef(zodSchemaInstance._def, baseTypeNameForTs);
            } catch (e) {
                 console.error(`[parseSchema] Error wrapping raw shape from function for ${apiNameForContext} with z.object(): ${e.message}.`);
                 return parseZodSchemaDef(z.any().describe(`Error wrapping raw shape: ${e.message}`)._def, baseTypeNameForTs);
            }
        } else if (returnedValue && returnedValue._def && returnedValue._def.typeName) {
            // schemaFn returned another Zod type (e.g., z.string, z.array, z.lazy, z.void)
            return parseZodSchemaDef(returnedValue._def, baseTypeNameForTs);
        } else if (returnedValue && typeof returnedValue === 'object' && Object.keys(returnedValue).length === 0) {
            // schemaFn returned an empty object {} -> treat as z.object({})
            return parseZodSchemaDef(z.object({})._def, baseTypeNameForTs);
        } else {
            // This handles cases like `() => z.void()` if we consider z.void() without _def or other direct Zod types without _def (though unlikely with zod v3)
            // More likely: returnedValue is undefined, null, or a primitive, or an object not recognizable
            if (returnedValue && returnedValue.constructor && returnedValue.constructor.name === 'ZodVoid') { // Special check for ZodVoid if it doesn't always have a typical _def
                 return parseZodSchemaDef(z.void()._def, baseTypeNameForTs); // Ensure we process it as a ZodVoid type
            }
            console.error(`[parseSchema] Schema function for ${apiNameForContext} did not return a Zod schema, a raw shape, or an empty object. Returned: ${JSON.stringify(returnedValue)}. Defaulting to z.any().`);
            return parseZodSchemaDef(z.any().describe('Invalid schema from function')._def, baseTypeNameForTs);
        }
    } catch (e) {
        console.error(`[parseSchema] Error executing schema function for ${apiNameForContext}: ${e.message}. Defaulting to z.any().`);
        if (e.stack) console.error(e.stack);
        return parseZodSchemaDef(z.any().describe(`Error in schema function: ${e.message}`)._def, baseTypeNameForTs);
    }
}

function generateJsDocPropertiesForObject(properties, baseParamName, forReturn = false, indent = ' * ') {
    let propLines = [];
    if (!properties) return propLines;

    for (const key in properties) {
        const propInfo = properties[key];
        const actualType = propInfo.jsDocType.split(' ')[0];
        const description = propInfo.description || key;

        if (forReturn) {
            const optionalMarker = propInfo.isOptional ? '?' : '';
            propLines.push(`${indent}@property {${actualType}} ${key}${optionalMarker} ${description}`);
        } else {
            const paramOptionalSyntax = propInfo.isOptional ? `[${baseParamName}.${key}]` : `${baseParamName}.${key}`;
            propLines.push(`${indent}@param {${actualType}} ${paramOptionalSyntax} ${description}`);
        }

        if (propInfo.typeName === z.ZodFirstPartyTypeKind.ZodObject && propInfo.properties && !forReturn) {
            propLines = propLines.concat(generateJsDocPropertiesForObject(propInfo.properties, `${baseParamName}.${key}`, false, indent));
        }
    }
    return propLines;
}

async function generateClient() {
    try {
        await fs.mkdir(OUTPUT_CLIENT_DIR, { recursive: true });
    } catch (e) { /* ignore if exists */ }

    const apiDefFiles = (await fs.readdir(API_DEFS_DIR)).filter(f => f.endsWith('.js') && !f.startsWith('AInote') && !f.startsWith('validateApiDefs'));
    let allModuleDtsEntries = [];

    for (const defFile of apiDefFiles) {
        const groupName = defFile.replace('.js', '');
        const defFilePath = path.join(API_DEFS_DIR, defFile);
        const fileUrl = pathToFileURL(defFilePath).href + '?t=' + Date.now();

        let apiDefsInFile;
        try {
            const module = await import(fileUrl);
            const variableName = `${groupName}ApiDefs`;
            apiDefsInFile = module[variableName];
            if (!Array.isArray(apiDefsInFile)) {
                console.warn(`[Warning] ${variableName} in ${defFile} is not an array. Skipping.`);
                continue;
            }
        } catch (error) {
            console.error(`[Error] Failed to import API definitions from ${defFile}: ${error.message}`);
            console.error(error.stack);
            continue;
        }

        let jsModuleContent = `// Generated client for API group ${groupName}\\n`;
        jsModuleContent += `// TODO: Implement or import a common HTTP request wrapper function (e.g., fetchWrapper)\\n`;
        jsModuleContent += `/*\\nasync function fetchWrapper(method, endpoint, params, needAuth) {\\n  const SiyuanKernelPrefix = typeof window === 'object' ? '' : 'http://127.0.0.1:6806';\\n  const url = SiyuanKernelPrefix + endpoint;\\n  const options = { method, headers: {} };\\n  if (method === 'POST' && params && Object.keys(params).length > 0) { // Only add body if params exist and are not empty\\n    options.headers['Content-Type'] = 'application/json';\\n    options.body = JSON.stringify(params);\\n  }\\n  if (needAuth) {\\n    // Example: Retrieve and add auth token\\n    // const token = localStorage.getItem('siyuan-auth-token'); \\n    // if (token) options.headers['Authorization'] = \`Token \${token}\`;\\n    options.headers['Authorization'] = 'Bearer YOUR_TOKEN_HERE'; // Placeholder\\n  }\\n  const response = await fetch(url, options);\\n  if (!response.ok) {\\n    let errorData = 'Failed to parse error response';\\n    try { errorData = await response.json(); } catch (e) { try {errorData = await response.text(); } catch (e2) { /* ignore secondary error */ }}\\n    console.error('API Error:', response.status, errorData); \\n    throw new Error(\`API Error \${response.status}: \${JSON.stringify(errorData)}\`);\\n  }\\n  const contentType = response.headers.get('content-type');\\n  if (contentType && contentType.includes('application/json')) {\\n    return response.json();\\n  } \\n  return response.text(); // Or handle other content types\\n}\\n*/\\n\\n`;

        let tsModuleFuncDeclarations = '';

        for (const apiDef of apiDefsInFile) {
            const apiName = getApiNameFromDef(apiDef);
            if (!apiName) {
                console.warn(`[Warning] Could not determine API name for endpoint ${apiDef.endpoint} in group ${groupName}. Skipping.`);
                continue;
            }

            const reqInterfaceName = `${capitalizeFirstLetter(apiName)}Params`;
            const resInterfaceName = `${capitalizeFirstLetter(apiName)}Response`;

            const parsedReqInfo = parseSchema(apiDef.zodRequestSchema, `${apiName} Request`, reqInterfaceName);
            const parsedResInfo = parseSchema(apiDef.zodResponseSchema, `${apiName} Response`, resInterfaceName);

            let jsDoc = '/**\\n';
            jsDoc += ` * ${apiDef.description || apiName}\\n`;
            let authNotes = [];
            if (apiDef.needAuth) authNotes.push('Requires authentication');
            if (apiDef.needAdminRole) authNotes.push('Requires admin role');
            if (apiDef.unavailableIfReadonly) authNotes.push('Unavailable in read-only mode');
            if (authNotes.length > 0) jsDoc += ` * (${authNotes.join(', ')})\\n`;
            if (apiDef.deprecated) jsDoc += ` * @deprecated\\n`;

            let hasRequestPayload = parsedReqInfo.typeName !== z.ZodFirstPartyTypeKind.ZodVoid &&
                                !(parsedReqInfo.typeName === z.ZodFirstPartyTypeKind.ZodObject && (!parsedReqInfo.properties || Object.keys(parsedReqInfo.properties).length === 0));
            const jsDocParamLines = [];
            let paramsArgumentNameForJs = '';

            if (hasRequestPayload) {
                if (parsedReqInfo.typeName === z.ZodFirstPartyTypeKind.ZodObject && parsedReqInfo.properties && Object.keys(parsedReqInfo.properties).length > 0) {
                    paramsArgumentNameForJs = 'params';
                    jsDoc += ` * @param {object} params - Request parameters.\\n`;
                    jsDocParamLines.push(...generateJsDocPropertiesForObject(parsedReqInfo.properties, 'params', false, ' * '));
                } else {
                    paramsArgumentNameForJs = 'payload';
                    const paramTypeBase = parsedReqInfo.jsDocType.split(' ')[0];
                    jsDoc += ` * @param {${paramTypeBase}} payload ${parsedReqInfo.description ? '- ' + parsedReqInfo.description : ''}\\n`;
                }
            }

            const resJsDocTypeBase = parsedResInfo.jsDocType.split(' ')[0];
            jsDoc += ` * @returns {Promise<${resJsDocTypeBase}>}${parsedResInfo.description ? ' ' + parsedResInfo.description : ''}\\n`;
            if (parsedResInfo.typeName === z.ZodFirstPartyTypeKind.ZodObject && parsedResInfo.properties) {
                jsDocParamLines.push(...generateJsDocPropertiesForObject(parsedResInfo.properties, '', true, ' * '));
            }
            if(jsDocParamLines.length > 0) jsDoc += jsDocParamLines.join('\n') + '\n';
            jsDoc += ` */\\n`;

            jsModuleContent += `${jsDoc}export async function ${apiName}(${paramsArgumentNameForJs}) {\\n`;
            jsModuleContent += `  // Example: return fetchWrapper('${apiDef.method}', '${apiDef.endpoint}', ${paramsArgumentNameForJs || 'undefined'}, ${!!apiDef.needAuth});\\n`;
            jsModuleContent += `  console.log('Mock call to ${apiName} with:', ${paramsArgumentNameForJs || "\"'no params'\""});\\n`;
            jsModuleContent += `  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<${parsedResInfo.tsType}>\\n}\\n\\n`;

            let tsReqParamType = 'void';
            let paramsArgumentNameForTs = '';

            if (hasRequestPayload) {
                if (parsedReqInfo.typeName === z.ZodFirstPartyTypeKind.ZodObject && parsedReqInfo.properties && Object.keys(parsedReqInfo.properties).length > 0) {
                    tsReqParamType = reqInterfaceName;
                    paramsArgumentNameForTs = 'params';
                } else {
                    tsReqParamType = parsedReqInfo.tsType;
                    paramsArgumentNameForTs = 'payload';
                }
            }

            let tsResType = parsedResInfo.tsType;
            if (parsedResInfo.typeName === z.ZodFirstPartyTypeKind.ZodObject && (!parsedResInfo.properties || Object.keys(parsedResInfo.properties).length === 0) && tsResType !== 'Record<string, never>') {
                tsResType = 'Record<string, never>';
            } else if (tsResType === 'void' && parsedResInfo.typeName !== z.ZodFirstPartyTypeKind.ZodVoid) {
                tsResType = 'void';
            }

            const tsParamsList = [];
            if (paramsArgumentNameForTs) {
                tsParamsList.push(`${paramsArgumentNameForTs}: ${tsReqParamType}`);
            }

            tsModuleFuncDeclarations += `  /**\\n`;
            tsModuleFuncDeclarations += `   * ${apiDef.description || apiName}\\n`;
            if (authNotes.length > 0) tsModuleFuncDeclarations += `   * (${authNotes.join(', ')})\\n`;
            if (apiDef.deprecated) tsModuleFuncDeclarations += `   * @deprecated\\n`;
            if (paramsArgumentNameForTs === 'params') {
                tsModuleFuncDeclarations += `   * @param params Request parameters (${reqInterfaceName})\\n`;
            } else if (paramsArgumentNameForTs === 'payload') {
                tsModuleFuncDeclarations += `   * @param payload Request payload (${tsReqParamType})\\n`;
            }
            tsModuleFuncDeclarations += `   * @returns Promise<${tsResType}> ${parsedResInfo.description || ''}\\n`;
            tsModuleFuncDeclarations += `   */\\n`;
            tsModuleFuncDeclarations += `  export function ${apiName}(${tsParamsList.join(', ')}): Promise<${tsResType}>;\\n\\n`;
        }

        const clientModulePath = path.join(OUTPUT_CLIENT_DIR, `${groupName}Client.js`);
        await fs.writeFile(clientModulePath, jsModuleContent);
        console.log(`Generated JS client: client/${groupName}Client.js`);

        if (tsModuleFuncDeclarations) {
            allModuleDtsEntries.push(`declare module './${groupName}Client' {\\n${tsModuleFuncDeclarations}}`);
        }
    }

    let finalDtsContent = "// TypeScript definitions for generated API clients\\n\\n";
    finalDtsContent += "import { ZodFirstPartyTypeKind } from 'zod'; // Optional: for type safety if you inspect these types\\n\\n";

    for (const typeName in GENERATED_TYPES) {
        finalDtsContent += `${GENERATED_TYPES[typeName]}\\n\\n`;
    }
    finalDtsContent += allModuleDtsEntries.join('\\n\\n');

    await fs.writeFile(OUTPUT_DTS_FILE, finalDtsContent);
    console.log(`Generated TypeScript definitions file: ${OUTPUT_DTS_FILE.replace(__dirname, '')}`);

    console.log("\\nGeneration complete! Please ensure you have 'zod' installed in your project (`npm install zod` or `yarn add zod`).");
}

generateClient().catch(err => {
    console.error("Error during client generation:", err);
});