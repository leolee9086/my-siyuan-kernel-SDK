// Generated client for API group ref\n// TODO: Implement or import a common HTTP request wrapper function (e.g., fetchWrapper)\n/*\nasync function fetchWrapper(method, endpoint, params, needAuth) {\n  const SiyuanKernelPrefix = typeof window === 'object' ? '' : 'http://127.0.0.1:6806';\n  const url = SiyuanKernelPrefix + endpoint;\n  const options = { method, headers: {} };\n  if (method === 'POST' && params && Object.keys(params).length > 0) { // Only add body if params exist and are not empty\n    options.headers['Content-Type'] = 'application/json';\n    options.body = JSON.stringify(params);\n  }\n  if (needAuth) {\n    // Example: Retrieve and add auth token\n    // const token = localStorage.getItem('siyuan-auth-token'); \n    // if (token) options.headers['Authorization'] = `Token ${token}`;\n    options.headers['Authorization'] = 'Bearer YOUR_TOKEN_HERE'; // Placeholder\n  }\n  const response = await fetch(url, options);\n  if (!response.ok) {\n    let errorData = 'Failed to parse error response';\n    try { errorData = await response.json(); } catch (e) { try {errorData = await response.text(); } catch (e2) { /* ignore secondary error */ }}\n    console.error('API Error:', response.status, errorData); \n    throw new Error(`API Error ${response.status}: ${JSON.stringify(errorData)}`);\n  }\n  const contentType = response.headers.get('content-type');\n  if (contentType && contentType.includes('application/json')) {\n    return response.json();\n  } \n  return response.text(); // Or handle other content types\n}\n*/\n\n/**\n * 获取指定块ID的反向链接和反向提及列表。此接口为旧版，建议使用 /api/ref/getBacklink2。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 必需。要查询反向链接和提及的目标块的 ID。
 * @param {string} params.k 用于筛选反向链接结果的关键词。
 * @param {string} params.mk 用于筛选反向提及结果的关键词。
 * @param {number} [params.beforeLen] beforeLen
 * @param {boolean} [params.containChildren] containChildren
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data Data
 */\nexport async function getBacklink(params) {\n  // Example: return fetchWrapper('POST', '/api/ref/getBacklink', params, true);\n  console.log('Mock call to getBacklink with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetBacklinkResponse>\n}\n\n/**\n * 获取指定块ID的反向链接和反向提及列表，支持排序。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 必需。要查询反向链接和提及的目标块的 ID。
 * @param {string} params.k 用于筛选反向链接结果的关键词。
 * @param {string} params.mk 用于筛选反向提及结果的关键词。
 * @param {string} [params.sort] sort
 * @param {string} [params.mSort] mSort
 * @param {boolean} [params.containChildren] containChildren
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data Data
 */\nexport async function getBacklink2(params) {\n  // Example: return fetchWrapper('POST', '/api/ref/getBacklink2', params, true);\n  console.log('Mock call to getBacklink2 with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetBacklink2Response>\n}\n\n/**\n * 获取指定 定义块 在某个特定 文档树 内的反向链接列表。用于在打开一个文档时，显示该文档中有哪些块引用了当前面板的文档。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.defID 必需。定义块的 ID (即被其他块引用的块)。
 * @param {string} params.refTreeID 必需。引用块所在文档树的根块 ID (通常是当前打开的文档的根块 ID)。
 * @param {string} params.keyword 用于筛选结果的关键词。
 * @param {boolean} [params.containChildren] containChildren
 * @param {boolean} [params.highlight] highlight
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data Data
 */\nexport async function getBacklinkDoc(params) {\n  // Example: return fetchWrapper('POST', '/api/ref/getBacklinkDoc', params, true);\n  console.log('Mock call to getBacklinkDoc with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetBacklinkDocResponse>\n}\n\n/**\n * 获取指定 定义块 在某个特定 文档树 内的反向提及列表 (提及了定义块的名称或别名，但未直接引用的块)。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.defID 必需。定义块的 ID (即被其他块提及的块)。
 * @param {string} params.refTreeID 必需。提及块所在文档树的根块 ID (通常是当前打开的文档的根块 ID)。
 * @param {string} params.keyword 用于筛选结果的关键词。
 * @param {boolean} [params.containChildren] containChildren
 * @param {boolean} [params.highlight] highlight
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data Data
 */\nexport async function getBackmentionDoc(params) {\n  // Example: return fetchWrapper('POST', '/api/ref/getBackmentionDoc', params, true);\n  console.log('Mock call to getBackmentionDoc with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetBackmentionDocResponse>\n}\n\n/**\n * 手动触发指定块的反向链接和提及关系的刷新计算。通常在数据发生变更后，系统会自动更新，但此接口可用于强制刷新。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 必需。要刷新反向链接和提及信息的目标块的 ID。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data 成功时 Data 固定为 null。
 */\nexport async function refreshBacklink(params) {\n  // Example: return fetchWrapper('POST', '/api/ref/refreshBacklink', params, true);\n  console.log('Mock call to refreshBacklink with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RefreshBacklinkResponse>\n}\n\n