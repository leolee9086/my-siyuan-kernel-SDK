// Generated client for API group filetree\n// TODO: Implement or import a common HTTP request wrapper function (e.g., fetchWrapper)\n/*\nasync function fetchWrapper(method, endpoint, params, needAuth) {\n  const SiyuanKernelPrefix = typeof window === 'object' ? '' : 'http://127.0.0.1:6806';\n  const url = SiyuanKernelPrefix + endpoint;\n  const options = { method, headers: {} };\n  if (method === 'POST' && params && Object.keys(params).length > 0) { // Only add body if params exist and are not empty\n    options.headers['Content-Type'] = 'application/json';\n    options.body = JSON.stringify(params);\n  }\n  if (needAuth) {\n    // Example: Retrieve and add auth token\n    // const token = localStorage.getItem('siyuan-auth-token'); \n    // if (token) options.headers['Authorization'] = `Token ${token}`;\n    options.headers['Authorization'] = 'Bearer YOUR_TOKEN_HERE'; // Placeholder\n  }\n  const response = await fetch(url, options);\n  if (!response.ok) {\n    let errorData = 'Failed to parse error response';\n    try { errorData = await response.json(); } catch (e) { try {errorData = await response.text(); } catch (e2) { /* ignore secondary error */ }}\n    console.error('API Error:', response.status, errorData); \n    throw new Error(`API Error ${response.status}: ${JSON.stringify(errorData)}`);\n  }\n  const contentType = response.headers.get('content-type');\n  if (contentType && contentType.includes('application/json')) {\n    return response.json();\n  } \n  return response.text(); // Or handle other content types\n}\n*/\n\n/**\n * 更改指定笔记本下，特定路径列表的文档树排序方式。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.notebook 要更改排序的笔记本ID。
 * @param {Array<string>} params.paths 需要调整排序的文档路径列表。这些路径通常是文档在其笔记本内的相对路径。后端会根据这些路径的顺序来更新文档树的排序。
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {null} Data? Data
 */\nexport async function changeSort(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/changeSort', params, true);\n  console.log('Mock call to changeSort with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ChangeSortResponse>\n}\n\n/**\n * 根据用户配置的日记模板创建今日的日记文档。如果今日的日记已存在，则直接返回该日记的信息。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.notebook 要在哪个笔记本下创建日记的ID。
 * @param {string} [params.app] app
 * @param {string} [params.callback] callback
 * @property {number} Code 响应状态码。0 表示成功创建或获取；1 表示笔记本未找到；-1 表示其他错误。
 * @property {string} Msg 响应消息。
 * @property {object} Data? Data
 */\nexport async function createDailyNote(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/createDailyNote', params, true);\n  console.log('Mock call to createDailyNote with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<CreateDailyNoteResponse>\n}\n\n/**\n * 在指定的笔记本和路径下创建一个新的文档，并可以附带初始Markdown内容和排序信息。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.notebook 文档所属的笔记本ID。
 * @param {string} params.path 文档的存储路径 (相对于笔记本根目录，例如 '/folder/documentName')。
 * @param {string} params.title 文档的标题。
 * @param {string} params.md 文档的初始 Markdown 内容。
 * @param {Array<string>} [params.sorts] sorts
 * @param {boolean} [params.listDocTree] listDocTree
 * @param {string} [params.callback] callback
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回新文档的ID；失败时可能包含 closeTimeout。
 */\nexport async function createDoc(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/createDoc', params, true);\n  console.log('Mock call to createDoc with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<CreateDocResponse>\n}\n\n/**\n * 在指定笔记本、路径下，使用提供的Markdown内容创建一个新文档。可以指定父文档ID、新文档ID、标签等。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.notebook 文档所属的笔记本ID。
 * @param {string} params.path 文档的人类可读路径 (HPath)，例如 '/My Notes/New Document'。后端会处理路径中的非法字符和长度限制。
 * @param {string} params.markdown 新文档的Markdown内容。
 * @param {string} [params.parentID] parentID
 * @param {string} [params.id] id
 * @param {string} [params.tags] tags
 * @param {boolean} [params.withMath] withMath
 * @param {string} [params.clippingHref] clippingHref
 * @param {boolean} [params.listDocTree] listDocTree
 * @param {string} [params.callback] callback
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {string} Data? Data
 */\nexport async function createDocWithMd(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/createDocWithMd', params, true);\n  console.log('Mock call to createDocWithMd with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<CreateDocWithMdResponse>\n}\n\n/**\n * 将一个源文档的内容转换为一个标题块，并将其插入到目标文档的指定标题块之后或之前。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.srcID 要转换的源文档的ID。
 * @param {string} params.targetID 目标文档中，新标题块将插入到其后的那个标题块的ID。如果 after 为 false，则插入其前。
 * @param {boolean} params.after 是否将源文档内容插入到 targetID 块之后 (true) 或之前 (false)。
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回源文档的笔记本和路径信息；失败时可能包含 closeTimeout。
 */\nexport async function doc2Heading(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/doc2Heading', params, true);\n  console.log('Mock call to doc2Heading with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<Doc2HeadingResponse>\n}\n\n/**\n * 复制（克隆）一个指定的文档。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要复制的源文档的ID。
 * @param {boolean} [params.listDocTree] listDocTree
 * @param {string} [params.callback] callback
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回新文档的相关信息；失败时可能包含 closeTimeout。
 */\nexport async function duplicateDoc(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/duplicateDoc', params, true);\n  console.log('Mock call to duplicateDoc with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<DuplicateDocResponse>\n}\n\n/**\n * 获取指定文档（或文档中的一部分内容）的详细信息，包括块内容、结构、属性等。支持多种加载模式和查询参数。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要获取的文档或块的ID。
 * @param {number} [params.index] index
 * @param {string} [params.query] query
 * @param {number} [params.queryMethod] queryMethod
 * @param {Object<string,} [params.queryTypes] queryTypes
 * @param {number} [params.mode] mode
 * @param {number} [params.size] size
 * @param {string} [params.startID] startID
 * @param {string} [params.endID] endID
 * @param {boolean} [params.isBacklink] isBacklink
 * @param {Object<string,} [params.originalRefBlockIDs] originalRefBlockIDs
 * @param {boolean} [params.highlight] highlight
 * @param {string} [params.reqId] reqId
 * @property {number} Code 响应状态码。0: 成功；1: 通用错误；3: 块未找到。
 * @property {string} Msg 响应消息。
 * @property {object} Data? Data
 */\nexport async function getDoc(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/getDoc', params, true);\n  console.log('Mock call to getDoc with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetDocResponse>\n}\n\n/**\n * 根据当前笔记本和全局配置，计算并返回创建新文档时应使用的默认笔记本ID和保存路径 (HPath)。路径支持Go模板。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.notebook 当前操作的笔记本ID。计算默认保存位置时会参考此笔记本的配置及全局配置。
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data? Data
 */\nexport async function getDocCreateSavePath(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/getDocCreateSavePath', params, true);\n  console.log('Mock call to getDocCreateSavePath with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetDocCreateSavePathResponse>\n}\n\n/**\n * 根据文档或块的ID，获取其在笔记本中的完整层级标题路径 (HPath)，例如 '/父文档标题/子文档标题/当前文档标题'。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要查询的文档或块的ID。
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {string} Data? Data
 */\nexport async function getFullHPathByID(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/getFullHPathByID', params, true);\n  console.log('Mock call to getFullHPathByID with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetFullHPathByIDResponse>\n}\n\n/**\n * 根据文档或块的ID，获取其在笔记本中的人类可读路径 (HPath)，即文件路径形式的标题路径，例如 '/父文档标题/子文档标题/当前文档标题.sy' 的 Sy 文件名部分。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要查询的文档或块的ID。
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {string} Data? Data
 */\nexport async function getHPathByID(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/getHPathByID', params, true);\n  console.log('Mock call to getHPathByID with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetHPathByIDResponse>\n}\n\n/**\n * 根据文档在笔记本中的实际存储路径 (相对于笔记本根目录)，获取其人类可读路径 (HPath)。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.notebook 文档所在的笔记本ID。
 * @param {string} params.path 文档的实际存储路径 (相对于笔记本根目录，例如 '/folderName/documentName.sy')。
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {string} Data? Data
 */\nexport async function getHPathByPath(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/getHPathByPath', params, true);\n  console.log('Mock call to getHPathByPath with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetHPathByPathResponse>\n}\n\n/**\n * 根据一组文档的实际存储路径 (包含笔记本ID和文档相对路径)，批量获取它们对应的人类可读路径 (HPath)。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {Array<object>} params.paths 包含笔记本ID和文档路径的对象数组。
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {Array<string>} Data? Data
 */\nexport async function getHPathsByPaths(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/getHPathsByPaths', params, true);\n  console.log('Mock call to getHPathsByPaths with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetHPathsByPathsResponse>\n}\n\n/**\n * 根据文档的人类可读路径 (HPath) 和其所在的笔记本ID，获取所有匹配该路径的文档的ID列表。因为HPath可能不唯一，所以返回的是数组。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.notebook 文档所在的笔记本ID。
 * @param {string} params.path 要查询的文档的人类可读路径 (HPath)，例如 '/My Notes/Topic'。
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {Array<string>} Data? Data
 */\nexport async function getIDsByHPath(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/getIDsByHPath', params, true);\n  console.log('Mock call to getIDsByHPath with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetIDsByHPathResponse>\n}\n\n/**\n * 根据文档或块的ID，获取其在工作空间中的实际存储路径 (相对于笔记本根目录) 和所在的笔记本ID。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要查询的文档或块的ID。
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data? Data
 */\nexport async function getPathByID(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/getPathByID', params, true);\n  console.log('Mock call to getPathByID with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetPathByIDResponse>\n}\n\n/**\n * 根据当前笔记本和全局配置，计算并返回创建新块引文档时应使用的默认笔记本ID和保存路径 (HPath)。路径支持Go模板。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.notebook 当前操作的笔记本ID。计算默认保存位置时会参考此笔记本的配置及全局配置。
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data? Data
 */\nexport async function getRefCreateSavePath(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/getRefCreateSavePath', params, true);\n  console.log('Mock call to getRefCreateSavePath with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetRefCreateSavePathResponse>\n}\n\n/**\n * 将源文档中的一个标题块及其后续同级内容，转换为一个新的独立文档。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.srcHeadingID 源文档中要转换为新文档的标题块的ID。
 * @param {string} params.targetNoteBook 新文档将要创建在哪个笔记本的ID。
 * @param {string} [params.targetPath] targetPath
 * @param {string} [params.previousPath] previousPath
 * @param {string} [params.callback] callback
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回新文档的ID和路径；失败时可能包含 closeTimeout。
 */\nexport async function heading2Doc(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/heading2Doc', params, true);\n  console.log('Mock call to heading2Doc with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<Heading2DocResponse>\n}\n\n/**\n * 将源文档中的一个列表项（及其所有子项）转换为一个新的独立文档。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.srcListItemID 源文档中要转换为新文档的列表项的ID。
 * @param {string} params.targetNoteBook 新文档将要创建在哪个笔记本的ID。
 * @param {string} [params.targetPath] targetPath
 * @param {string} [params.previousPath] previousPath
 * @param {string} [params.callback] callback
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回新文档的ID和路径；失败时可能包含 closeTimeout。
 */\nexport async function li2Doc(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/li2Doc', params, true);\n  console.log('Mock call to li2Doc with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<Li2DocResponse>\n}\n\n/**\n * 列出指定笔记本的文档树结构，支持过滤、排序等。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.notebook 要列出文档树的笔记本ID。
 * @param {string} params.path 要列出文档树的起始路径 (相对于笔记本根目录，例如 '/folderName')。通常用于列出某个文件夹下的文档结构。
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data? Data
 */\nexport async function listDocTree(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/listDocTree', params, true);\n  console.log('Mock call to listDocTree with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ListDocTreeResponse>\n}\n\n/**\n * 获取指定笔记本和路径下的文档及子文件夹列表，支持排序、闪卡过滤和数量限制。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.notebook 笔记本ID。
 * @param {string} params.path 要列出文档的路径 (相对于笔记本根目录，例如 '/folderName')。空字符串表示笔记本根目录。
 * @param {number} [params.sort] sort
 * @param {boolean} [params.flashcard] flashcard
 * @param {number} [params.maxListCount] maxListCount
 * @param {boolean} [params.showHidden] showHidden
 * @param {boolean} [params.ignoreMaxListHint] ignoreMaxListHint
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data? Data
 */\nexport async function listDocsByPath(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/listDocsByPath', params, true);\n  console.log('Mock call to listDocsByPath with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ListDocsByPathResponse>\n}\n\n/**\n * 将一组源文档（通过其在各自笔记本中的相对路径指定）移动到目标笔记本的指定路径下。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {Array<string>} params.fromPaths 要移动的源文档路径数组。每个路径字符串应为 '笔记本ID/文档相对路径.sy' 或 '笔记本ID/文档相对路径' 的形式。后端会处理。例如：['box123/notes/docA.sy', 'box456/folder/docB']
 * @param {string} params.toNotebook 目标笔记本的ID。
 * @param {string} params.toPath 目标路径 (HPath 或实际路径均可，后端会尝试解析)。文档将被移动到此路径下。例如 '/Target Folder' 或 '/Target Folder/NewName.sy' (如果只移动一个文件且想重命名)。
 * @param {string} [params.callback] callback
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data Data
 */\nexport async function moveDocs(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/moveDocs', params, true);\n  console.log('Mock call to moveDocs with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<MoveDocsResponse>\n}\n\n/**\n * 将一组源文档（通过其ID指定）移动到目标文档（通过其ID指定）的目录下或成为其子文档（取决于目标ID是文件夹还是文件）。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {Array<string>} params.fromIDs 要移动的源文档ID数组。
 * @param {string} params.toID 目标文档或目录的ID。如果 toID 是一个文档，则 fromIDs 中的文档会成为其子文档（如果内核逻辑支持）；如果 toID 是一个目录（通常是一个文档的HPath的父级），则 fromIDs 中的文档会被移动到该目录下。具体行为需参考内核实现细节。后台实现中，会先通过 toID 获取其 toNotebook 和 toPath，然后调用 model.MoveDocs。
 * @param {string} [params.callback] callback
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data Data
 */\nexport async function moveDocsByID(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/moveDocsByID', params, true);\n  console.log('Mock call to moveDocsByID with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<MoveDocsByIDResponse>\n}\n\n/**\n * 将指定笔记本中的本地闪念速记（通常是未整理的、直接记录在本地的摘录或想法）移动到配置的闪念速记存放位置。这是一个待改进的旧接口，未来可能基于文档树配置实现。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.notebook 要处理闪念速记的笔记本ID。
 * @param {string} [params.path] path
 * @param {string} [params.parentID] parentID
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {null} Data? Data
 */\nexport async function moveLocalShorthands(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/moveLocalShorthands', params, true);\n  console.log('Mock call to moveLocalShorthands with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<MoveLocalShorthandsResponse>\n}\n\n/**\n * 触发一次全局的文档树刷新和全量索引重建。这是一个耗时操作，请谨慎调用。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {any} payload - Error in schema function: {}.describe is not a function\n * @returns {Promise<object>}\n * @property {number} Code 响应状态码，0 表示成功（操作已异步启动）
 * @property {string} Msg 响应消息
 * @property {null} Data? Data
 */\nexport async function refreshFiletree(payload) {\n  // Example: return fetchWrapper('POST', '/api/filetree/refreshFiletree', payload, true);\n  console.log('Mock call to refreshFiletree with:', payload);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RefreshFiletreeResponse>\n}\n\n/**\n * 根据指定的笔记本ID和文档相对路径，移除（删除）该文档。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.notebook 文档所在的笔记本ID。
 * @param {string} params.path 要移除的文档的相对路径 (相对于笔记本根目录，例如 '/notes/docToRemove.sy')。
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {null} Data? Data
 */\nexport async function removeDoc(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/removeDoc', params, true);\n  console.log('Mock call to removeDoc with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RemoveDocResponse>\n}\n\n/**\n * 根据指定的文档ID，移除（删除）该文档。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要移除的文档的ID。
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data Data
 */\nexport async function removeDocByID(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/removeDocByID', params, true);\n  console.log('Mock call to removeDocByID with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RemoveDocByIDResponse>\n}\n\n/**\n * 根据一组复合路径（包含笔记本ID和文档相对路径）批量移除（删除）文档。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {Array<string>} params.paths 要移除的文档的复合路径数组。每个路径字符串应为 '笔记本ID/文档相对路径.sy' 或 '笔记本ID/文档相对路径' 的形式。例如：['box123/notes/docA.sy', 'box456/folder/docB']
 * @property {number} Code 响应状态码，0 表示成功（即使部分路径无效也可能返回0，具体需看Msg）
 * @property {string} Msg 响应消息。如果部分文档移除失败，Msg中可能会有提示。
 * @property {null} Data? Data
 */\nexport async function removeDocs(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/removeDocs', params, true);\n  console.log('Mock call to removeDocs with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RemoveDocsResponse>\n}\n\n/**\n * 根据指定的文档路径列表（通常是 .sy 文件路径），从搜索引擎中移除这些文档的索引。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {Array<string>} params.paths 需要移除索引的文档绝对路径列表。这些路径通常指向 data 目录下的 .sy 文件，例如 '/data/notebookId/path/to/doc.sy'。
 * @property {number} Code 响应状态码，0 表示成功（操作已接受）
 * @property {string} Msg 响应消息
 * @property {null} Data? Data
 */\nexport async function removeIndexes(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/removeIndexes', params, true);\n  console.log('Mock call to removeIndexes with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RemoveIndexesResponse>\n}\n\n/**\n * 根据指定的笔记本ID、旧文档相对路径和新标题，重命名该文档。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.notebook 文档所在的笔记本ID。
 * @param {string} params.path 要重命名的文档的当前相对路径 (相对于笔记本根目录，例如 '/notes/oldName.sy')。
 * @param {string} params.title 文档的新标题 (不需要带 .sy 后缀)。
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {null} Data? Data
 */\nexport async function renameDoc(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/renameDoc', params, true);\n  console.log('Mock call to renameDoc with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RenameDocResponse>\n}\n\n/**\n * 根据指定的文档ID和新标题，重命名该文档。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要重命名的文档的ID。
 * @param {string} params.title 文档的新标题 (不需要带 .sy 后缀)。
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data Data
 */\nexport async function renameDocByID(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/renameDocByID', params, true);\n  console.log('Mock call to renameDocByID with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RenameDocByIDResponse>\n}\n\n/**\n * 根据关键词搜索匹配的文档标题和别名。主要用于快速查找文档，不支持全文搜索。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.k 搜索关键词。
 * @param {boolean} [params.flashcard] flashcard
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {Array<object>} Data? Data
 */\nexport async function searchDocs(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/searchDocs', params, true);\n  console.log('Mock call to searchDocs with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SearchDocsResponse>\n}\n\n/**\n * 根据指定的文档路径列表（通常是 .sy 文件路径），更新或插入这些文档在搜索引擎中的索引。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {Array<string>} params.paths 需要更新/插入索引的文档绝对路径列表。这些路径通常指向 data 目录下的 .sy 文件，例如 '/data/notebookId/path/to/doc.sy'。
 * @property {number} Code 响应状态码，0 表示成功（操作已接受）
 * @property {string} Msg 响应消息
 * @property {null} Data? Data
 */\nexport async function upsertIndexes(params) {\n  // Example: return fetchWrapper('POST', '/api/filetree/upsertIndexes', params, true);\n  console.log('Mock call to upsertIndexes with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<UpsertIndexesResponse>\n}\n\n