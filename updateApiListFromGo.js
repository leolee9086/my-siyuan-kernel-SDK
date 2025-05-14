import { writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const GITHUB_ROUTER_GO_URL = 'https://raw.githubusercontent.com/siyuan-note/siyuan/master/kernel/api/router.go';
const OUTPUT_FILENAME = 'rawApiList.json';

async function fetchRouterGoContent() {
  try {
    const response = await fetch(GITHUB_ROUTER_GO_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch router.go: ${response.status} ${response.statusText}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error fetching router.go:', error);
    throw error;
  }
}

function parseGoCode(goContent) {
  const rawApis = [];
  const lines = goContent.split('\n');

  const serveApiFuncStart = lines.findIndex(line => line.includes("func ServeAPI(ginServer *gin.Engine)"));
  const confApiRouteFuncStart = lines.findIndex(line => line.includes("func ConfAPIRoute(ginServer *gin.Engine)"));
  const apiRouteV2FuncStart = lines.findIndex(line => line.includes("func APIRouteV2(ginServer *gin.Engine)"));

  const processLines = (startIndex, apiArray) => {
    if (startIndex === -1) return;

    for (let i = startIndex; i < lines.length; i++) {
      let line = lines[i].trim();
      if (i > startIndex && (line.startsWith("func ") || line.startsWith("}"))) break;
      if (line.startsWith('//') || !line.includes('ginServer.Handle(')) continue;
      line = line.split('//')[0].trim();
      if (!line) continue;

      // Revised Regex:
      // match[1]: METHOD
      // match[2]: PATH
      // match[3]: Optional auth checks string, e.g., ", model.CheckAuth, model.CheckAdminRole"
      // match[4]: HANDLER
      const handleRegex = /ginServer\.Handle\(\s*"([A-Z]+)"\s*,\s*"([^"]+)"((?:\s*,\s*(?:[a-zA-Z0-9_]+\.)?[a-zA-Z0-9_]+)*)?\s*,\s*([a-zA-Z0-9_\.]+)\s*\)/;
      const match = line.match(handleRegex);

      if (match) {
        const method = match[1];
        const endpoint = match[2];
        const authChecksRawString = match[3]; // This will be like ", mw1, mw2" or undefined
        let en = match[4];

        const enParts = en.split('.');
        en = enParts[enParts.length - 1];

        // This secondary check for commas in 'en' might still be relevant if a handler name itself has a dot and then comma, though unlikely.
        if (en.includes(",")) {
            const enCommaParts = en.split(",");
            en = enCommaParts[enCommaParts.length -1].trim();
        }

        let needAuth = false;
        let needAdminRole = false;
        let unavailableIfReadonly = false;
        let otherAuthChecks = [];

        if (authChecksRawString) {
          // Remove leading comma and then split
          const checks = authChecksRawString.substring(1).split(/\s*,\s*/).map(s => s.trim()).filter(s => s);
          checks.forEach(check => {
            if (check === "model.CheckAuth") {
              needAuth = true;
            } else if (check === "model.CheckAdminRole") {
              needAdminRole = true;
            } else if (check === "model.CheckReadonly") {
              unavailableIfReadonly = true;
            } else {
              otherAuthChecks.push(check);
            }
          });
        }

        if (!apiArray.some(api => api.endpoint === endpoint && api.method === method)) {
          apiArray.push({
            method,
            endpoint,
            en,
            needAuth,
            needAdminRole,
            unavailableIfReadonly,
            otherAuthChecks
          });
        }
      } else {
        // console.warn(`Skipping line, new regex could not parse API: ${line}`);
      }
    }
  };

  console.log("Processing APIs from ServeAPI...");
  processLines(serveApiFuncStart, rawApis);
  console.log("Processing APIs from ConfAPIRoute...");
  processLines(confApiRouteFuncStart, rawApis);
  console.log("Processing APIs from APIRouteV2...");
  processLines(apiRouteV2FuncStart, rawApis);

  return rawApis;
}


async function main() {
  console.log('Fetching router.go from GitHub...');
  const goContent = await fetchRouterGoContent();
  console.log('Parsing router.go content...');
  const rawApiList = parseGoCode(goContent);
  
  // 去重逻辑需要更新以正确处理新的布尔属性和 otherAuthChecks 数组
  const uniqueApiList = rawApiList.filter((api, index, self) => 
    index === self.findIndex(t => (
      t.method === api.method && 
      t.endpoint === api.endpoint && 
      t.en === api.en &&
      t.needAuth === api.needAuth &&
      t.needAdminRole === api.needAdminRole &&
      t.unavailableIfReadonly === api.unavailableIfReadonly &&
      JSON.stringify(t.otherAuthChecks.sort()) === JSON.stringify(api.otherAuthChecks.sort())
    ))
  );

  console.log(`Found ${uniqueApiList.length} unique APIs after parsing.`);

  const outputPath = join(__dirname, OUTPUT_FILENAME);
  try {
    await writeFile(outputPath, JSON.stringify(uniqueApiList, null, 2), 'utf8');
    console.log(`Successfully generated ${OUTPUT_FILENAME} with ${uniqueApiList.length} APIs at ${outputPath}`);
  } catch (error) {
    console.error(`Error writing ${OUTPUT_FILENAME}:`, error);
  }
}

main().catch(err => {
  console.error('Script execution failed:', err);
  process.exit(1);
}); 