// Generated client for API group storage\n// TODO: Implement or import a common HTTP request wrapper function (e.g., fetchWrapper)\n/*\nasync function fetchWrapper(method, endpoint, params, needAuth) {\n  const SiyuanKernelPrefix = typeof window === 'object' ? '' : 'http://127.0.0.1:6806';\n  const url = SiyuanKernelPrefix + endpoint;\n  const options = { method, headers: {} };\n  if (method === 'POST' && params && Object.keys(params).length > 0) { // Only add body if params exist and are not empty\n    options.headers['Content-Type'] = 'application/json';\n    options.body = JSON.stringify(params);\n  }\n  if (needAuth) {\n    // Example: Retrieve and add auth token\n    // const token = localStorage.getItem('siyuan-auth-token'); \n    // if (token) options.headers['Authorization'] = `Token ${token}`;\n    options.headers['Authorization'] = 'Bearer YOUR_TOKEN_HERE'; // Placeholder\n  }\n  const response = await fetch(url, options);\n  if (!response.ok) {\n    let errorData = 'Failed to parse error response';\n    try { errorData = await response.json(); } catch (e) { try {errorData = await response.text(); } catch (e2) { /* ignore secondary error */ }}\n    console.error('API Error:', response.status, errorData); \n    throw new Error(`API Error ${response.status}: ${JSON.stringify(errorData)}`);\n  }\n  const contentType = response.headers.get('content-type');\n  if (contentType && contentType.includes('application/json')) {\n    return response.json();\n  } \n  return response.text(); // Or handle other content types\n}\n*/\n\n/**\n * 获取所有用户已保存的搜索标准（过滤条件）列表。\n * (Requires authentication)\n * @returns {Promise<object>}\n * @property {number} Code 错误码，0 表示成功，其他表示失败。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串。
 * @property {Array<object>} Data 已保存的搜索标准列表。每个元素代表一个搜索标准，具体字段请参考思源笔记内核 model.Criterion 结构。
 */\nexport async function getCriteria() {\n  // Example: return fetchWrapper('POST', '/api/storage/getCriteria', undefined, true);\n  console.log('Mock call to getCriteria with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetCriteriaResponse>\n}\n\n/**\n * 获取浏览器 LocalStorage 中的所有键值对。\n * (Requires authentication)\n * @returns {Promise<object>}\n * @property {number} Code 错误码，0 表示成功，其他表示失败。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串。
 * @property {Object<string,} Data 包含 LocalStorage 所有键值对的对象。值的类型可能多样，取决于存储时的数据。
 */\nexport async function getLocalStorage() {\n  // Example: return fetchWrapper('POST', '/api/storage/getLocalStorage', undefined, true);\n  console.log('Mock call to getLocalStorage with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetLocalStorageResponse>\n}\n\n/**\n * 获取用户最近打开过的文档列表。这些文档按最近打开时间排序。\n * (Requires authentication)\n * @returns {Promise<object>}\n * @property {number} Code 错误码，0 表示成功，其他表示失败。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串。
 * @property {Array<object>} Data 最近打开的文档列表。
 */\nexport async function getRecentDocs() {\n  // Example: return fetchWrapper('POST', '/api/storage/getRecentDocs', undefined, true);\n  console.log('Mock call to getRecentDocs with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetRecentDocsResponse>\n}\n\n/**\n * 根据名称移除一个已保存的搜索标准（过滤条件）。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.name 要移除的搜索标准的名称。
 * @property {number} Code 错误码，0 表示成功，其他表示失败。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串。
 * @property {null} Data 接口成功执行时，Data 固定为 null。
 */\nexport async function removeCriterion(params) {\n  // Example: return fetchWrapper('POST', '/api/storage/removeCriterion', params, true);\n  console.log('Mock call to removeCriterion with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RemoveCriterionResponse>\n}\n\n/**\n * 根据提供的键名列表，批量移除浏览器 LocalStorage 中的项目。同时会广播事件通知其他客户端同步移除。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {Array<string>} params.keys 要移除的 LocalStorage 项目的键名数组。
 * @param {string} params.app 发起操作的 App ID，用于事件广播。
 * @property {number} Code 错误码，0 表示成功，其他表示失败。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串。
 * @property {null} Data 接口成功执行时，Data 固定为 null。
 */\nexport async function removeLocalStorageVals(params) {\n  // Example: return fetchWrapper('POST', '/api/storage/removeLocalStorageVals', params, true);\n  console.log('Mock call to removeLocalStorageVals with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RemoveLocalStorageValsResponse>\n}\n\n/**\n * 保存或更新一个搜索标准（过滤条件）。搜索标准可用于后续的文档或内容搜索。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {object} params.criterion 要保存或更新的搜索标准对象。具体字段请参考思源笔记内核 model.Criterion 结构。
 * @param {string} params.criterion.name 搜索标准的唯一名称。
 * @param {string} [params.criterion.id] id
 * @param {string} [params.criterion.box] box
 * @param {string} [params.criterion.type] type
 * @param {string} [params.criterion.query] query
 * @param {number} [params.criterion.sort] sort
 * @param {number} [params.criterion.group] group
 * @param {any} [params.criterion.types] types
 * @param {Array<any>} [params.criterion.customSort] customSort
 * @param {number} [params.criterion.filter] filter
 * @param {Array<string>} [params.criterion.docIDs] docIDs
 * @param {Array<string>} [params.criterion.blockIDs] blockIDs
 * @param {Array<string>} [params.criterion.tagIDs] tagIDs
 * @param {Array<string>} [params.criterion.attrIDs] attrIDs
 * @param {Array<string>} [params.criterion.refs] refs
 * @param {string} [params.criterion.parentID] parentID
 * @param {string} [params.criterion.rootID] rootID
 * @param {string} [params.criterion.kwd] kwd
 * @property {number} Code 错误码，0 表示成功，其他表示失败。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串。
 * @property {null} Data 接口成功执行时，Data 固定为 null。
 */\nexport async function setCriterion(params) {\n  // Example: return fetchWrapper('POST', '/api/storage/setCriterion', params, true);\n  console.log('Mock call to setCriterion with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetCriterionResponse>\n}\n\n/**\n * 使用一个完整的对象来覆盖整个浏览器 LocalStorage 的内容。通常用于导入或恢复 LocalStorage 数据。同时会广播事件通知其他客户端同步设置。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {Object<string,} params.val 一个对象，其键值对将完全替换现有的 LocalStorage 内容。
 * @param {string} params.app 发起操作的 App ID，用于事件广播。
 * @property {number} Code 错误码，0 表示成功，其他表示失败。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串。
 * @property {null} Data 接口成功执行时，Data 固定为 null。
 */\nexport async function setLocalStorage(params) {\n  // Example: return fetchWrapper('POST', '/api/storage/setLocalStorage', params, true);\n  console.log('Mock call to setLocalStorage with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetLocalStorageResponse>\n}\n\n/**\n * 设置浏览器 LocalStorage 中的单个键值对。同时会广播事件通知其他客户端同步设置。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.key 要设置的 LocalStorage 项目的键名。
 * @param {any} params.val 要设置的 LocalStorage 项目的值，可以是任意类型，但最终会序列化为字符串存储。
 * @param {string} params.app 发起操作的 App ID，用于事件广播。
 * @property {number} Code 错误码，0 表示成功，其他表示失败。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串。
 * @property {null} Data 接口成功执行时，Data 固定为 null。
 */\nexport async function setLocalStorageVal(params) {\n  // Example: return fetchWrapper('POST', '/api/storage/setLocalStorageVal', params, true);\n  console.log('Mock call to setLocalStorageVal with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetLocalStorageValResponse>\n}\n\n