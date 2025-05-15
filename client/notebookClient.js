// Generated client for API group notebook\n// TODO: Implement or import a common HTTP request wrapper function (e.g., fetchWrapper)\n/*\nasync function fetchWrapper(method, endpoint, params, needAuth) {\n  const SiyuanKernelPrefix = typeof window === 'object' ? '' : 'http://127.0.0.1:6806';\n  const url = SiyuanKernelPrefix + endpoint;\n  const options = { method, headers: {} };\n  if (method === 'POST' && params && Object.keys(params).length > 0) { // Only add body if params exist and are not empty\n    options.headers['Content-Type'] = 'application/json';\n    options.body = JSON.stringify(params);\n  }\n  if (needAuth) {\n    // Example: Retrieve and add auth token\n    // const token = localStorage.getItem('siyuan-auth-token'); \n    // if (token) options.headers['Authorization'] = `Token ${token}`;\n    options.headers['Authorization'] = 'Bearer YOUR_TOKEN_HERE'; // Placeholder\n  }\n  const response = await fetch(url, options);\n  if (!response.ok) {\n    let errorData = 'Failed to parse error response';\n    try { errorData = await response.json(); } catch (e) { try {errorData = await response.text(); } catch (e2) { /* ignore secondary error */ }}\n    console.error('API Error:', response.status, errorData); \n    throw new Error(`API Error ${response.status}: ${JSON.stringify(errorData)}`);\n  }\n  const contentType = response.headers.get('content-type');\n  if (contentType && contentType.includes('application/json')) {\n    return response.json();\n  } \n  return response.text(); // Or handle other content types\n}\n*/\n\n/**\n * 批量更改笔记本的显示顺序。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {Array<string>} params.notebooks 按新的期望顺序排列的笔记本 ID 数组。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data? Data
 */\nexport async function changeSortNotebook(params) {\n  // Example: return fetchWrapper('POST', '/api/notebook/changeSortNotebook', params, true);\n  console.log('Mock call to changeSortNotebook with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ChangeSortNotebookResponse>\n}\n\n/**\n * 关闭一个指定的笔记本。关闭后，笔记本内容将不再可访问，直到再次打开。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.notebook 要关闭的笔记本的唯一标识符 (ID)。
 * @param {string} [params.callback] callback
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data? Data
 */\nexport async function closeNotebook(params) {\n  // Example: return fetchWrapper('POST', '/api/notebook/closeNotebook', params, true);\n  console.log('Mock call to closeNotebook with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<CloseNotebookResponse>\n}\n\n/**\n * 创建一个新的笔记本。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.name 新笔记本的名称，不能为空。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data 包含新创建笔记本信息的对象。
 */\nexport async function createNotebook(params) {\n  // Example: return fetchWrapper('POST', '/api/notebook/createNotebook', params, true);\n  console.log('Mock call to createNotebook with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<CreateNotebookResponse>\n}\n\n/**\n * 获取指定笔记本的配置信息。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.notebook 要获取配置的笔记本的唯一标识符 (ID)。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data 包含笔记本配置的对象。
 */\nexport async function getNotebookConf(params) {\n  // Example: return fetchWrapper('POST', '/api/notebook/getNotebookConf', params, true);\n  console.log('Mock call to getNotebookConf with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetNotebookConfResponse>\n}\n\n/**\n * 获取指定笔记本的详细信息，包括其配置和统计数据。\n * (Requires authentication, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.notebook 要获取信息的笔记本的唯一标识符 (ID)。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data 包含笔记本详细信息的对象。
 */\nexport async function getNotebookInfo(params) {\n  // Example: return fetchWrapper('POST', '/api/notebook/getNotebookInfo', params, true);\n  console.log('Mock call to getNotebookInfo with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetNotebookInfoResponse>\n}\n\n/**\n * 获取当前工作空间中所有笔记本的列表，包含已打开和未打开的笔记本。\n * (Requires authentication)\n * @returns {Promise<object>}\n * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data 包含笔记本列表的对象。
 */\nexport async function lsNotebooks() {\n  // Example: return fetchWrapper('POST', '/api/notebook/lsNotebooks', undefined, true);\n  console.log('Mock call to lsNotebooks with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<LsNotebooksResponse>\n}\n\n/**\n * 打开一个指定的笔记本。如果笔记本已经是打开状态，此操作可能仅刷新其状态。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.notebook 要打开的笔记本的唯一标识符 (ID)。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data Data
 */\nexport async function openNotebook(params) {\n  // Example: return fetchWrapper('POST', '/api/notebook/openNotebook', params, true);\n  console.log('Mock call to openNotebook with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<OpenNotebookResponse>\n}\n\n/**\n * 删除一个指定的笔记本。此操作会从工作空间移除笔记本及其所有内容。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.notebook 要删除的笔记本的唯一标识符 (ID)。
 * @param {string} [params.callback] callback
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data? Data
 */\nexport async function removeNotebook(params) {\n  // Example: return fetchWrapper('POST', '/api/notebook/removeNotebook', params, true);\n  console.log('Mock call to removeNotebook with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RemoveNotebookResponse>\n}\n\n/**\n * 重命名一个指定的笔记本。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.notebook 要重命名的笔记本的唯一标识符 (ID)。
 * @param {string} params.name 笔记本的新名称，不能为空。
 * @property {number} Code 返回码，0 表示成功, -1 表示失败 (例如名称冲突)。
 * @property {string} Msg 错误信息，成功时为空字符串。
 * @property {object} Data Data
 */\nexport async function renameNotebook(params) {\n  // Example: return fetchWrapper('POST', '/api/notebook/renameNotebook', params, true);\n  console.log('Mock call to renameNotebook with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RenameNotebookResponse>\n}\n\n/**\n * 更新指定笔记本的配置信息。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.notebook 要设置配置的笔记本的唯一标识符 (ID)。
 * @param {object} params.conf 要更新的配置项对象。只提供需要修改的字段。
 * @param {string} [params.conf.name] name
 * @param {string} [params.conf.icon] icon
 * @param {number} [params.conf.sortMode] sortMode
 * @param {string} [params.conf.refCreateSavePath] refCreateSavePath
 * @param {string} [params.conf.docCreateSavePath] docCreateSavePath
 * @param {string} [params.conf.dailyNoteSavePath] dailyNoteSavePath
 * @param {string} [params.conf.dailyNoteTemplatePath] dailyNoteTemplatePath
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data? Data
 */\nexport async function setNotebookConf(params) {\n  // Example: return fetchWrapper('POST', '/api/notebook/setNotebookConf', params, true);\n  console.log('Mock call to setNotebookConf with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetNotebookConfResponse>\n}\n\n/**\n * 设置指定笔记本的显示图标。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.notebook 要设置图标的笔记本的唯一标识符 (ID)。
 * @param {string} params.icon 笔记本的新图标，可以是 Emoji 字符或图片的 Base64 编码字符串。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data? Data
 */\nexport async function setNotebookIcon(params) {\n  // Example: return fetchWrapper('POST', '/api/notebook/setNotebookIcon', params, true);\n  console.log('Mock call to setNotebookIcon with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetNotebookIconResponse>\n}\n\n