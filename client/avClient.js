// Generated client for API group av\n// TODO: Implement or import a common HTTP request wrapper function (e.g., fetchWrapper)\n/*\nasync function fetchWrapper(method, endpoint, params, needAuth) {\n  const SiyuanKernelPrefix = typeof window === 'object' ? '' : 'http://127.0.0.1:6806';\n  const url = SiyuanKernelPrefix + endpoint;\n  const options = { method, headers: {} };\n  if (method === 'POST' && params && Object.keys(params).length > 0) { // Only add body if params exist and are not empty\n    options.headers['Content-Type'] = 'application/json';\n    options.body = JSON.stringify(params);\n  }\n  if (needAuth) {\n    // Example: Retrieve and add auth token\n    // const token = localStorage.getItem('siyuan-auth-token'); \n    // if (token) options.headers['Authorization'] = `Token ${token}`;\n    options.headers['Authorization'] = 'Bearer YOUR_TOKEN_HERE'; // Placeholder\n  }\n  const response = await fetch(url, options);\n  if (!response.ok) {\n    let errorData = 'Failed to parse error response';\n    try { errorData = await response.json(); } catch (e) { try {errorData = await response.text(); } catch (e2) { /* ignore secondary error */ }}\n    console.error('API Error:', response.status, errorData); \n    throw new Error(`API Error ${response.status}: ${JSON.stringify(errorData)}`);\n  }\n  const contentType = response.headers.get('content-type');\n  if (contentType && contentType.includes('application/json')) {\n    return response.json();\n  } \n  return response.text(); // Or handle other content types\n}\n*/\n\n/**\n * 向指定的属性视图中添加一个或多个数据块。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.avID 属性视图的 ID
 * @param {string} [params.blockID] blockID
 * @param {string} [params.previousID] previousID
 * @param {boolean} [params.ignoreFillFilter] ignoreFillFilter
 * @param {Array<Object<string,>} params.srcs 要添加的源数据块信息数组，具体结构取决于源类型
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {any} Data Data
 */\nexport async function addAttributeViewBlocks(params) {\n  // Example: return fetchWrapper('POST', '/api/av/addAttributeViewBlocks', params, true);\n  console.log('Mock call to addAttributeViewBlocks with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<AddAttributeViewBlocksResponse>\n}\n\n/**\n * 向指定的属性视图添加一个新的列定义。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.avID 属性视图的 ID
 * @param {string} params.keyID 新列的 ID，如果为空则自动生成
 * @param {string} params.keyName 新列的名称
 * @param {string} params.keyType 新列的类型 (e.g., 'text', 'number', 'select')
 * @param {string} params.keyIcon 新列的图标 (Emoji 或思源图标名)
 * @param {string} params.previousKeyID 新列将插入到此列 ID 之前
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {any} Data Data
 */\nexport async function addAttributeViewKey(params) {\n  // Example: return fetchWrapper('POST', '/api/av/addAttributeViewKey', params, true);\n  console.log('Mock call to addAttributeViewKey with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<AddAttributeViewKeyResponse>\n}\n\n/**\n * 向属性视图追加多个新的独立块，并为这些块设置初始值。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.avID 属性视图的 ID
 * @param {Array<Array<any>>} params.blocksValues 二维数组，外层数组代表多个新块，内层数组代表每个块对应各列的初始值
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {any} Data Data
 */\nexport async function appendAttributeViewDetachedBlocksWithValues(params) {\n  // Example: return fetchWrapper('POST', '/api/av/appendAttributeViewDetachedBlocksWithValues', params, true);\n  console.log('Mock call to appendAttributeViewDetachedBlocksWithValues with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<AppendAttributeViewDetachedBlocksWithValuesResponse>\n}\n\n/**\n * 复制一个属性视图块（数据库块）。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.avID 要复制的属性视图块的 ID
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function duplicateAttributeViewBlock(params) {\n  // Example: return fetchWrapper('POST', '/api/av/duplicateAttributeViewBlock', params, true);\n  console.log('Mock call to duplicateAttributeViewBlock with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<DuplicateAttributeViewBlockResponse>\n}\n\n/**\n * 获取指定ID的属性视图的详细信息。\n * (Requires authentication, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 属性视图的 ID
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function getAttributeView(params) {\n  // Example: return fetchWrapper('POST', '/api/av/getAttributeView', params, true);\n  console.log('Mock call to getAttributeView with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetAttributeViewResponse>\n}\n\n/**\n * 获取指定属性视图（或其关联块）的筛选条件和排序规则。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 属性视图的 ID
 * @param {string} params.blockID 属性视图关联的块 ID (通常与属性视图ID相同)
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function getAttributeViewFilterSort(params) {\n  // Example: return fetchWrapper('POST', '/api/av/getAttributeViewFilterSort', params, true);\n  console.log('Mock call to getAttributeViewFilterSort with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetAttributeViewFilterSortResponse>\n}\n\n/**\n * 获取指定属性视图ID的所有列定义 (keys)。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 属性视图的 ID
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {Array<any>} Data Data
 */\nexport async function getAttributeViewKeys(params) {\n  // Example: return fetchWrapper('POST', '/api/av/getAttributeViewKeys', params, true);\n  console.log('Mock call to getAttributeViewKeys with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetAttributeViewKeysResponse>\n}\n\n/**\n * 通过属性视图ID获取其所有列定义 (keys)。(此接口功能上可能与 getAttributeViewKeys 重复，需确认)\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.avID 属性视图的 ID
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {Array<any>} Data Data
 */\nexport async function getAttributeViewKeysByAvID(params) {\n  // Example: return fetchWrapper('POST', '/api/av/getAttributeViewKeysByAvID', params, true);\n  console.log('Mock call to getAttributeViewKeysByAvID with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetAttributeViewKeysByAvIDResponse>\n}\n\n/**\n * 获取指定属性视图的主键列的值，支持分页和关键词搜索。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 属性视图的 ID
 * @param {string} [params.keyword] keyword
 * @param {number} [params.page] page
 * @param {number} [params.pageSize] pageSize
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function getAttributeViewPrimaryKeyValues(params) {\n  // Example: return fetchWrapper('POST', '/api/av/getAttributeViewPrimaryKeyValues', params, true);\n  console.log('Mock call to getAttributeViewPrimaryKeyValues with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetAttributeViewPrimaryKeyValuesResponse>\n}\n\n/**\n * 获取指定属性视图ID的镜像数据库块ID列表。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.avID 属性视图的 ID
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function getMirrorDatabaseBlocks(params) {\n  // Example: return fetchWrapper('POST', '/api/av/getMirrorDatabaseBlocks', params, true);\n  console.log('Mock call to getMirrorDatabaseBlocks with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetMirrorDatabaseBlocksResponse>\n}\n\n/**\n * 从指定的属性视图中移除一个或多个数据块。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.avID 属性视图的 ID
 * @param {Array<string>} params.srcIDs 要移除的源数据块的 ID 数组
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {any} Data Data
 */\nexport async function removeAttributeViewBlocks(params) {\n  // Example: return fetchWrapper('POST', '/api/av/removeAttributeViewBlocks', params, true);\n  console.log('Mock call to removeAttributeViewBlocks with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RemoveAttributeViewBlocksResponse>\n}\n\n/**\n * 从指定的属性视图移除一个列定义。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.avID 属性视图的 ID
 * @param {string} params.keyID 要移除的列的 ID
 * @param {boolean} [params.removeRelationDest] removeRelationDest
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {any} Data Data
 */\nexport async function removeAttributeViewKey(params) {\n  // Example: return fetchWrapper('POST', '/api/av/removeAttributeViewKey', params, true);\n  console.log('Mock call to removeAttributeViewKey with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RemoveAttributeViewKeyResponse>\n}\n\n/**\n * 渲染属性视图，获取其名称、视图类型、视图ID、所有视图、当前视图详情以及是否为镜像等信息。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 属性视图的 ID
 * @param {string} [params.viewID] viewID
 * @param {string} [params.query] query
 * @param {number} [params.page] page
 * @param {number} [params.pageSize] pageSize
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function renderAttributeView(params) {\n  // Example: return fetchWrapper('POST', '/api/av/renderAttributeView', params, true);\n  console.log('Mock call to renderAttributeView with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RenderAttributeViewResponse>\n}\n\n/**\n * 渲染指定历史版本的属性视图。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 属性视图的 ID
 * @param {string} params.created 历史版本创建的时间戳字符串 (毫秒级)
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function renderHistoryAttributeView(params) {\n  // Example: return fetchWrapper('POST', '/api/av/renderHistoryAttributeView', params, true);\n  console.log('Mock call to renderHistoryAttributeView with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RenderHistoryAttributeViewResponse>\n}\n\n/**\n * 渲染指定快照索引的属性视图。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.snapshot 快照的路径或标识
 * @param {string} params.id 属性视图的 ID
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function renderSnapshotAttributeView(params) {\n  // Example: return fetchWrapper('POST', '/api/av/renderSnapshotAttributeView', params, true);\n  console.log('Mock call to renderSnapshotAttributeView with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RenderSnapshotAttributeViewResponse>\n}\n\n/**\n * 根据关键词搜索属性视图，可排除指定ID。\n * (Requires authentication, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.keyword 搜索关键词
 * @param {Array<string>} [params.excludes] excludes
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function searchAttributeView(params) {\n  // Example: return fetchWrapper('POST', '/api/av/searchAttributeView', params, true);\n  console.log('Mock call to searchAttributeView with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SearchAttributeViewResponse>\n}\n\n/**\n * 根据关键词搜索指定属性视图的非关联列 (Non-relation Key)。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.avID 属性视图的 ID
 * @param {string} params.keyword 搜索关键词
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function searchAttributeViewNonRelationKey(params) {\n  // Example: return fetchWrapper('POST', '/api/av/searchAttributeViewNonRelationKey', params, true);\n  console.log('Mock call to searchAttributeViewNonRelationKey with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SearchAttributeViewNonRelationKeyResponse>\n}\n\n/**\n * 根据关键词搜索指定属性视图的关联列 (Relation Key)。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.avID 属性视图的 ID
 * @param {string} params.keyword 搜索关键词
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function searchAttributeViewRelationKey(params) {\n  // Example: return fetchWrapper('POST', '/api/av/searchAttributeViewRelationKey', params, true);\n  console.log('Mock call to searchAttributeViewRelationKey with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SearchAttributeViewRelationKeyResponse>\n}\n\n/**\n * 更新属性视图中指定行（块ID）、指定列（KeyID）的单元格的值。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.avID 属性视图的 ID
 * @param {string} params.keyID 列的 ID (Key ID)
 * @param {string} params.rowID 行的 ID (通常是数据块的 ID)
 * @param {any} params.value 要设置的新值，具体类型取决于列的类型
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function setAttributeViewBlockAttr(params) {\n  // Example: return fetchWrapper('POST', '/api/av/setAttributeViewBlockAttr', params, true);\n  console.log('Mock call to setAttributeViewBlockAttr with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetAttributeViewBlockAttrResponse>\n}\n\n/**\n * 设置指定数据库块（属性视图块）的默认视图ID。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 数据库块（属性视图块）的 ID
 * @param {string} params.viewID 要设置为默认视图的视图 ID
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {any} Data Data
 */\nexport async function setDatabaseBlockView(params) {\n  // Example: return fetchWrapper('POST', '/api/av/setDatabaseBlockView', params, true);\n  console.log('Mock call to setDatabaseBlockView with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetDatabaseBlockViewResponse>\n}\n\n/**\n * 对属性视图的列进行排序。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.avID 属性视图的 ID
 * @param {string} params.keyID 要移动的列的 ID
 * @param {string} params.previousKeyID 目标位置：将列移动到此列 ID 之前
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {any} Data Data
 */\nexport async function sortAttributeViewKey(params) {\n  // Example: return fetchWrapper('POST', '/api/av/sortAttributeViewKey', params, true);\n  console.log('Mock call to sortAttributeViewKey with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SortAttributeViewKeyResponse>\n}\n\n/**\n * 对属性视图中某个特定视图（如图表、看板等）的列进行排序。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.avID 属性视图的 ID
 * @param {string} params.viewID 特定视图的 ID
 * @param {string} params.keyID 要移动的列的 ID
 * @param {string} params.previousKeyID 目标位置：将列移动到此列 ID 之前
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {any} Data Data
 */\nexport async function sortAttributeViewViewKey(params) {\n  // Example: return fetchWrapper('POST', '/api/av/sortAttributeViewViewKey', params, true);\n  console.log('Mock call to sortAttributeViewViewKey with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SortAttributeViewViewKeyResponse>\n}\n\n