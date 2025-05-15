// Generated client for API group search\n// TODO: Implement or import a common HTTP request wrapper function (e.g., fetchWrapper)\n/*\nasync function fetchWrapper(method, endpoint, params, needAuth) {\n  const SiyuanKernelPrefix = typeof window === 'object' ? '' : 'http://127.0.0.1:6806';\n  const url = SiyuanKernelPrefix + endpoint;\n  const options = { method, headers: {} };\n  if (method === 'POST' && params && Object.keys(params).length > 0) { // Only add body if params exist and are not empty\n    options.headers['Content-Type'] = 'application/json';\n    options.body = JSON.stringify(params);\n  }\n  if (needAuth) {\n    // Example: Retrieve and add auth token\n    // const token = localStorage.getItem('siyuan-auth-token'); \n    // if (token) options.headers['Authorization'] = `Token ${token}`;\n    options.headers['Authorization'] = 'Bearer YOUR_TOKEN_HERE'; // Placeholder\n  }\n  const response = await fetch(url, options);\n  if (!response.ok) {\n    let errorData = 'Failed to parse error response';\n    try { errorData = await response.json(); } catch (e) { try {errorData = await response.text(); } catch (e2) { /* ignore secondary error */ }}\n    console.error('API Error:', response.status, errorData); \n    throw new Error(`API Error ${response.status}: ${JSON.stringify(errorData)}`);\n  }\n  const contentType = response.headers.get('content-type');\n  if (contentType && contentType.includes('application/json')) {\n    return response.json();\n  } \n  return response.text(); // Or handle other content types\n}\n*/\n\n/**\n * 在指定的块ID范围、路径、笔记本、类型中查找内容并进行替换。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.k 必需。要查找的关键词。
 * @param {string} params.r 必需。要替换的字符串。
 * @param {Array<string>} params.ids 必需。要进行查找替换操作的块 ID 数组。
 * @param {Array<string>} [params.paths] paths
 * @param {Array<string>} [params.boxes] boxes
 * @param {Object<string,} [params.types] types
 * @param {number} [params.method] method
 * @param {number} [params.orderBy] orderBy
 * @param {number} [params.groupBy] groupBy
 * @param {Object<string,} [params.replaceTypes] replaceTypes
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data Data
 */\nexport async function findReplace(params) {\n  // Example: return fetchWrapper('POST', '/api/search/findReplace', params, true);\n  console.log('Mock call to findReplace with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<FindReplaceResponse>\n}\n\n/**\n * 对资源文件内容进行全文搜索（此功能需要付费订阅）。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.query 必需。搜索查询语句。
 * @param {number} [params.page] page
 * @param {number} [params.pageSize] pageSize
 * @param {Object<string,} [params.types] types
 * @param {number} [params.method] method
 * @param {number} [params.orderBy] orderBy
 * @property {number} Code 返回码，0 表示成功。如果未付费，Code 为 1。
 * @property {string} Msg 错误信息，成功时为空字符串。
 * @property {object} Data Data
 */\nexport async function fullTextSearchAssetContent(params) {\n  // Example: return fetchWrapper('POST', '/api/search/fullTextSearchAssetContent', params, true);\n  console.log('Mock call to fullTextSearchAssetContent with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<FullTextSearchAssetContentResponse>\n}\n\n/**\n * 对块内容进行全文搜索，支持多种搜索方式和过滤条件。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.query 必需。搜索查询语句。
 * @param {number} [params.page] page
 * @param {number} [params.pageSize] pageSize
 * @param {Array<string>} [params.paths] paths
 * @param {Array<string>} [params.boxes] boxes
 * @param {Object<string,} [params.types] types
 * @param {number} [params.method] method
 * @param {number} [params.orderBy] orderBy
 * @param {number} [params.groupBy] groupBy
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data Data
 */\nexport async function fullTextSearchBlock(params) {\n  // Example: return fetchWrapper('POST', '/api/search/fullTextSearchBlock', params, true);\n  console.log('Mock call to fullTextSearchBlock with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<FullTextSearchBlockResponse>\n}\n\n/**\n * 获取资源文件内容中，与指定查询相关的片段。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 必需。资源文件块的 ID。
 * @param {string} params.query 必需。查询关键词。
 * @param {number} params.queryMethod 必需。查询方法：0：关键字，1：查询语法，2：SQL，3：正则表达式。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data Data
 */\nexport async function getAssetContent(params) {\n  // Example: return fetchWrapper('POST', '/api/search/getAssetContent', params, true);\n  console.log('Mock call to getAssetContent with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetAssetContentResponse>\n}\n\n/**\n * 获取指定嵌入块的渲染内容，支持包含其子块或显示面包屑。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.embedBlockID 必需。嵌入块（通常是 `((块ID))` 引用的块）的 ID。
 * @param {Array<string>} params.includeIDs 必需。要实际嵌入显示的块 ID 数组（通常只包含 embedBlockID，但在特殊情况下可能包含其子块）。
 * @param {number} [params.headingMode] headingMode
 * @param {boolean} [params.breadcrumb] breadcrumb
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data Data
 */\nexport async function getEmbedBlock(params) {\n  // Example: return fetchWrapper('POST', '/api/search/getEmbedBlock', params, true);\n  console.log('Mock call to getEmbedBlock with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetEmbedBlockResponse>\n}\n\n/**\n * 分页列出在当前工作空间中所有无效的块引用（例如，引用的块已被删除）。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {number} [params.page] page
 * @param {number} [params.pageSize] pageSize
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data Data
 */\nexport async function listInvalidBlockRefs(params) {\n  // Example: return fetchWrapper('POST', '/api/search/listInvalidBlockRefs', params, true);\n  console.log('Mock call to listInvalidBlockRefs with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ListInvalidBlockRefsResponse>\n}\n\n/**\n * 根据路径移除指定的模板文件。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.path 必需。要移除的模板文件的相对路径（相对于模板文件夹）。
 * @property {number} Code 返回码，0 表示成功，-1 表示失败
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data 成功或失败时 Data 均为 null。
 */\nexport async function removeTemplate(params) {\n  // Example: return fetchWrapper('POST', '/api/search/removeTemplate', params, true);\n  console.log('Mock call to removeTemplate with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RemoveTemplateResponse>\n}\n\n/**\n * 根据文件名关键词和可选的文件扩展名搜索资源文件。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.k 必需。搜索关键词。
 * @param {Array<string>} [params.exts] exts
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {Array<object>} Data 匹配到的资源文件列表。如果没有结果，则为空数组。
 */\nexport async function searchAsset(params) {\n  // Example: return fetchWrapper('POST', '/api/search/searchAsset', params, true);\n  console.log('Mock call to searchAsset with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SearchAssetResponse>\n}\n\n/**\n * 在指定的嵌入块（及其可能的子块）中使用 SQL 语句进行内容搜索。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.embedBlockID 必需。作为搜索范围根的嵌入块 ID。
 * @param {string} params.stmt 必需。用于搜索的 SQL 语句。查询的表名通常为 'blocks'，可查询的字段如 id, content, markdown, type 等。
 * @param {Array<string>} [params.excludeIDs] excludeIDs
 * @param {number} [params.headingMode] headingMode
 * @param {boolean} [params.breadcrumb] breadcrumb
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data Data
 */\nexport async function searchEmbedBlock(params) {\n  // Example: return fetchWrapper('POST', '/api/search/searchEmbedBlock', params, true);\n  console.log('Mock call to searchEmbedBlock with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SearchEmbedBlockResponse>\n}\n\n/**\n * 在输入引用（例如 `((` 或 `[[`）时，根据关键词动态搜索可能的引用块建议。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 必需。当前正在编辑的块的 ID。
 * @param {string} params.rootID 必需。当前文档的根块 ID。
 * @param {string} params.k 必需。用户输入的搜索关键词。
 * @param {number} [params.beforeLen] beforeLen
 * @param {boolean} [params.isSquareBrackets] isSquareBrackets
 * @param {boolean} [params.isDatabase] isDatabase
 * @param {any} [params.reqId] reqId
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data Data
 */\nexport async function searchRefBlock(params) {\n  // Example: return fetchWrapper('POST', '/api/search/searchRefBlock', params, true);\n  console.log('Mock call to searchRefBlock with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SearchRefBlockResponse>\n}\n\n/**\n * 根据关键词搜索已存在的标签。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.k 必需。搜索关键词。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data Data
 */\nexport async function searchTag(params) {\n  // Example: return fetchWrapper('POST', '/api/search/searchTag', params, true);\n  console.log('Mock call to searchTag with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SearchTagResponse>\n}\n\n/**\n * 根据关键词搜索模板（通常是模板文件名或内容）。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.k 必需。搜索关键词。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data Data
 */\nexport async function searchTemplate(params) {\n  // Example: return fetchWrapper('POST', '/api/search/searchTemplate', params, true);\n  console.log('Mock call to searchTemplate with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SearchTemplateResponse>\n}\n\n/**\n * 根据关键词搜索挂件块。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.k 必需。搜索关键词。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data Data
 */\nexport async function searchWidget(params) {\n  // Example: return fetchWrapper('POST', '/api/search/searchWidget', params, true);\n  console.log('Mock call to searchWidget with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SearchWidgetResponse>\n}\n\n/**\n * 更新指定**查询嵌入块（`query_embed` 类型）**的原始查询语句或脚本内容。此接口专门用于处理查询嵌入块，不适用于普通块的自定义属性更新。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 必需。要更新的查询嵌入块的 ID。
 * @param {string} params.content 必需。查询嵌入块新的原始 Markdown 内容，通常是 SQL 查询语句或 JavaScript 脚本。
 * @property {number} Code 返回码，0 表示成功，-1 表示失败
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data 成功或失败时 Data 均为 null。
 */\nexport async function updateEmbedBlock(params) {\n  // Example: return fetchWrapper('POST', '/api/search/updateEmbedBlock', params, true);\n  console.log('Mock call to updateEmbedBlock with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<UpdateEmbedBlockResponse>\n}\n\n