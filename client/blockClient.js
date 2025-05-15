// Generated client for API group block\n// TODO: Implement or import a common HTTP request wrapper function (e.g., fetchWrapper)\n/*\nasync function fetchWrapper(method, endpoint, params, needAuth) {\n  const SiyuanKernelPrefix = typeof window === 'object' ? '' : 'http://127.0.0.1:6806';\n  const url = SiyuanKernelPrefix + endpoint;\n  const options = { method, headers: {} };\n  if (method === 'POST' && params && Object.keys(params).length > 0) { // Only add body if params exist and are not empty\n    options.headers['Content-Type'] = 'application/json';\n    options.body = JSON.stringify(params);\n  }\n  if (needAuth) {\n    // Example: Retrieve and add auth token\n    // const token = localStorage.getItem('siyuan-auth-token'); \n    // if (token) options.headers['Authorization'] = `Token ${token}`;\n    options.headers['Authorization'] = 'Bearer YOUR_TOKEN_HERE'; // Placeholder\n  }\n  const response = await fetch(url, options);\n  if (!response.ok) {\n    let errorData = 'Failed to parse error response';\n    try { errorData = await response.json(); } catch (e) { try {errorData = await response.text(); } catch (e2) { /* ignore secondary error */ }}\n    console.error('API Error:', response.status, errorData); \n    throw new Error(`API Error ${response.status}: ${JSON.stringify(errorData)}`);\n  }\n  const contentType = response.headers.get('content-type');\n  if (contentType && contentType.includes('application/json')) {\n    return response.json();\n  } \n  return response.text(); // Or handle other content types\n}\n*/\n\n/**\n * 在指定父块的末尾插入新的子块。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.data 要插入的内容，可以是 Markdown 或 DOM 字符串
 * @param {'markdown'} params.dataType 指定 data 参数的类型
 * @param {string} params.parentID 父块的 ID
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {Array<object>} Data Data
 */\nexport async function appendBlock(params) {\n  // Example: return fetchWrapper('POST', '/api/block/appendBlock', params, true);\n  console.log('Mock call to appendBlock with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<AppendBlockResponse>\n}\n\n/**\n * 向指定笔记本的当日日记文档末尾追加新的内容块。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.data 要追加的内容，可以是 Markdown 或 DOM 字符串
 * @param {'markdown'} params.dataType 指定 data 参数的类型
 * @param {string} params.notebook 目标笔记本的 ID
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {Array<object>} Data Data
 */\nexport async function appendDailyNoteBlock(params) {\n  // Example: return fetchWrapper('POST', '/api/block/appendDailyNoteBlock', params, true);\n  console.log('Mock call to appendDailyNoteBlock with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<AppendDailyNoteBlockResponse>\n}\n\n/**\n * 批量更新多个块的内容。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {Array<object>} params.blocks 包含多个待更新块信息的数组
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {Array<object>} Data Data
 */\nexport async function batchUpdateBlock(params) {\n  // Example: return fetchWrapper('POST', '/api/block/batchUpdateBlock', params, true);\n  console.log('Mock call to batchUpdateBlock with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<BatchUpdateBlockResponse>\n}\n\n/**\n * 检查指定的块ID是否存在。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要检查的块 ID
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {boolean} Data 块是否存在
 */\nexport async function checkBlockExist(params) {\n  // Example: return fetchWrapper('POST', '/api/block/checkBlockExist', params, true);\n  console.log('Mock call to checkBlockExist with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<CheckBlockExistResponse>\n}\n\n/**\n * 检查指定的块ID是否已折叠，并返回其是否为根块。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要检查的块 ID
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {object} Data 包含折叠状态和是否为根块的信息
 */\nexport async function checkBlockFold(params) {\n  // Example: return fetchWrapper('POST', '/api/block/checkBlockFold', params, true);\n  console.log('Mock call to checkBlockFold with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<CheckBlockFoldResponse>\n}\n\n/**\n * 检查一批块ID的引用状态（例如，是否被其他块引用，是否定义了其他块等）。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {Array<string>} params.ids 要检查的块 ID 数组
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {Object<string,} Data 一个记录对象，键为块 ID，值为该块的引用统计信息
 */\nexport async function checkBlockRef(params) {\n  // Example: return fetchWrapper('POST', '/api/block/checkBlockRef', params, true);\n  console.log('Mock call to checkBlockRef with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<CheckBlockRefResponse>\n}\n\n/**\n * 删除指定的块ID。此操作通过事务完成。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要删除的块 ID
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {Array<any>} Data Data
 */\nexport async function deleteBlock(params) {\n  // Example: return fetchWrapper('POST', '/api/block/deleteBlock', params, true);\n  console.log('Mock call to deleteBlock with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<DeleteBlockResponse>\n}\n\n/**\n * 折叠指定的块ID。对于标题块，执行 foldHeading 操作；对于其他类型的块，设置其 fold 属性。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要折叠的块 ID
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {Array<any>} Data Data
 */\nexport async function foldBlock(params) {\n  // Example: return fetchWrapper('POST', '/api/block/foldBlock', params, true);\n  console.log('Mock call to foldBlock with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<FoldBlockResponse>\n}\n\n/**\n * 获取指定块ID到其根块（通常是文档块）的面包屑路径，可以排除特定类型的块。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 目标块的 ID
 * @param {Array<string>} [params.excludeTypes] excludeTypes
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {Array<object>} Data 面包屑路径数组，从根到目标块的父块
 */\nexport async function getBlockBreadcrumb(params) {\n  // Example: return fetchWrapper('POST', '/api/block/getBlockBreadcrumb', params, true);\n  console.log('Mock call to getBlockBreadcrumb with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetBlockBreadcrumbResponse>\n}\n\n/**\n * 获取指定块ID的DOM表示（HTML字符串）。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要获取 DOM 的块 ID
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {object} Data 包含块 ID 和其 DOM 内容的对象
 */\nexport async function getBlockDOM(params) {\n  // Example: return fetchWrapper('POST', '/api/block/getBlockDOM', params, true);\n  console.log('Mock call to getBlockDOM with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetBlockDOMResponse>\n}\n\n/**\n * 根据引用文本（锚文本）搜索并返回其可能指向的块定义ID列表。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.anchor 要搜索的引用锚文本
 * @param {Array<string>} [params.excludeIDs] excludeIDs
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {object} Data 包含引用定义对列表的对象
 */\nexport async function getBlockDefIDsByRefText(params) {\n  // Example: return fetchWrapper('POST', '/api/block/getBlockDefIDsByRefText', params, true);\n  console.log('Mock call to getBlockDefIDsByRefText with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetBlockDefIDsByRefTextResponse>\n}\n\n/**\n * 获取指定块ID在其父级块的子块列表中的位置索引（从0开始）。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要获取索引的块 ID
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {number} Data 块在其父块子节点中的索引位置，-1 表示未找到或出错
 */\nexport async function getBlockIndex(params) {\n  // Example: return fetchWrapper('POST', '/api/block/getBlockIndex', params, true);\n  console.log('Mock call to getBlockIndex with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetBlockIndexResponse>\n}\n\n/**\n * 获取指定块ID的详细信息，包括其所在的笔记本ID(box)、路径(path)、根块ID(rootID)、根块标题(rootTitle)、根块图标(rootIcon)以及其在根块下的直接子块ID(rootChildID)。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要获取信息的块 ID
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {object} Data 包含块的详细路径和上下文信息的对象
 */\nexport async function getBlockInfo(params) {\n  // Example: return fetchWrapper('POST', '/api/block/getBlockInfo', params, true);\n  console.log('Mock call to getBlockInfo with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetBlockInfoResponse>\n}\n\n/**\n * 获取指定块ID的Kramdown源码表示。可选模式：'md'（Markdown标记符模式，默认）或 'textmark'（文本标记模式，使用span标签）。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要获取 Kramdown 源码的块 ID
 * @param {'md'} [params.mode] mode
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {object} Data 包含块 ID 和其 Kramdown 源码的对象
 */\nexport async function getBlockKramdown(params) {\n  // Example: return fetchWrapper('POST', '/api/block/getBlockKramdown', params, true);\n  console.log('Mock call to getBlockKramdown with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetBlockKramdownResponse>\n}\n\n/**\n * 获取指定块ID的父块ID、上一个同级块ID和下一个同级块ID。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 目标块的 ID
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {object} Data 包含父块、上一个和下一个同级块 ID 的对象
 */\nexport async function getBlockSiblingID(params) {\n  // Example: return fetchWrapper('POST', '/api/block/getBlockSiblingID', params, true);\n  console.log('Mock call to getBlockSiblingID with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetBlockSiblingIDResponse>\n}\n\n/**\n * 批量获取指定块ID列表对应的块树（BlockTree）信息。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {Array<string>} params.ids 要获取块树信息的块 ID 数组
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {Array<object>} Data 一个包含多个块树信息的数组，每个对象代表一个块及其详细信息和可能的子节点
 */\nexport async function getBlockTreeInfos(params) {\n  // Example: return fetchWrapper('POST', '/api/block/getBlockTreeInfos', params, true);\n  console.log('Mock call to getBlockTreeInfos with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetBlockTreeInfosResponse>\n}\n\n/**\n * 批量获取指定块ID列表各自在其父级块的子块列表中的位置索引。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {Array<string>} params.ids 要获取索引的块 ID 数组
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {Object<string,} Data 一个记录对象，键为块 ID，值为该块在其父块中的索引
 */\nexport async function getBlocksIndexes(params) {\n  // Example: return fetchWrapper('POST', '/api/block/getBlocksIndexes', params, true);\n  console.log('Mock call to getBlocksIndexes with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetBlocksIndexesResponse>\n}\n\n/**\n * 获取指定块ID列表的总字数、字符数和链接数统计信息。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {Array<string>} params.ids 要统计字数的块 ID 数组
 * @param {string} [params.reqId] reqId
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {object} Data 包含字数统计结果和可选请求 ID 的对象
 */\nexport async function getBlocksWordCount(params) {\n  // Example: return fetchWrapper('POST', '/api/block/getBlocksWordCount', params, true);\n  console.log('Mock call to getBlocksWordCount with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetBlocksWordCountResponse>\n}\n\n/**\n * 获取指定块ID的所有直接子块的基本信息列表（仅包含ID和类型）。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 父块的 ID
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {Array<object>} Data 直接子块的基本信息数组
 */\nexport async function getChildBlocks(params) {\n  // Example: return fetchWrapper('POST', '/api/block/getChildBlocks', params, true);\n  console.log('Mock call to getChildBlocks with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetChildBlocksResponse>\n}\n\n/**\n * 获取给定内容字符串的字数、字符数和链接数统计信息。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.content 要统计字数的文本内容
 * @param {string} [params.reqId] reqId
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {object} Data 包含字数统计结果和可选请求 ID 的对象
 */\nexport async function getContentWordCount(params) {\n  // Example: return fetchWrapper('POST', '/api/block/getContentWordCount', params, true);\n  console.log('Mock call to getContentWordCount with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetContentWordCountResponse>\n}\n\n/**\n * 提取给定DOM字符串中的纯文本内容。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.dom 包含 HTML 标签的 DOM 字符串
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {string} Data 从 DOM 中提取的纯文本内容
 */\nexport async function getDOMText(params) {\n  // Example: return fetchWrapper('POST', '/api/block/getDOMText', params, true);\n  console.log('Mock call to getDOMText with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetDOMTextResponse>\n}\n\n/**\n * 获取指定文档块ID的信息，包括其内容（DOM）、标题、图标、面包屑路径和是否为模板。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 目标文档块的 ID
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {object} Data 包含文档详细信息的对象
 */\nexport async function getDocInfo(params) {\n  // Example: return fetchWrapper('POST', '/api/block/getDocInfo', params, true);\n  console.log('Mock call to getDocInfo with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetDocInfoResponse>\n}\n\n/**\n * 批量获取多个指定文档块ID的信息。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {Array<string>} params.ids 包含多个文档块 ID 的数组
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {Array<object>} Data 包含多个文档详细信息的数组
 */\nexport async function getDocsInfo(params) {\n  // Example: return fetchWrapper('POST', '/api/block/getDocsInfo', params, true);\n  console.log('Mock call to getDocsInfo with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetDocsInfoResponse>\n}\n\n/**\n * 获取指定标题块ID下的所有子孙块的DOM内容。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 目标标题块的 ID
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {string} Data 标题块下所有子孙块合并的 DOM (HTML 字符串)
 */\nexport async function getHeadingChildrenDOM(params) {\n  // Example: return fetchWrapper('POST', '/api/block/getHeadingChildrenDOM', params, true);\n  console.log('Mock call to getHeadingChildrenDOM with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetHeadingChildrenDOMResponse>\n}\n\n/**\n * 获取指定标题块ID下的所有子孙块的ID列表。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 目标标题块的 ID
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {Array<string>} Data 标题块下所有子孙块的 ID 数组
 */\nexport async function getHeadingChildrenIDs(params) {\n  // Example: return fetchWrapper('POST', '/api/block/getHeadingChildrenIDs', params, true);\n  console.log('Mock call to getHeadingChildrenIDs with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetHeadingChildrenIDsResponse>\n}\n\n/**\n * 获取删除指定标题块（及其所有子孙块）所需的事务操作列表。此接口仅返回事务，不实际执行删除。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要获取删除事务的标题块 ID
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {object} Data 包含删除操作的事务对象
 */\nexport async function getHeadingDeleteTransaction(params) {\n  // Example: return fetchWrapper('POST', '/api/block/getHeadingDeleteTransaction', params, true);\n  console.log('Mock call to getHeadingDeleteTransaction with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetHeadingDeleteTransactionResponse>\n}\n\n/**\n * 获取调整指定标题块级别所需的事务操作列表。此接口仅返回事务，不实际执行调整。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要调整级别的标题块 ID
 * @param {number} params.level 新的标题级别 (1-6)
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {object} Data 包含调整级别操作的事务对象
 */\nexport async function getHeadingLevelTransaction(params) {\n  // Example: return fetchWrapper('POST', '/api/block/getHeadingLevelTransaction', params, true);\n  console.log('Mock call to getHeadingLevelTransaction with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetHeadingLevelTransactionResponse>\n}\n\n/**\n * 获取最近更新的块列表，按更新时间倒序排列。\n * (Requires authentication)\n * @returns {Promise<object>}\n * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {Array<object>} Data 最近更新的块信息数组
 */\nexport async function getRecentUpdatedBlocks() {\n  // Example: return fetchWrapper('POST', '/api/block/getRecentUpdatedBlocks', undefined, true);\n  console.log('Mock call to getRecentUpdatedBlocks with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetRecentUpdatedBlocksResponse>\n}\n\n/**\n * 获取指定块ID所引用的所有定义块的ID列表。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 发起引用的块 ID
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {Array<string>} Data 该块引用的所有定义块的 ID 数组
 */\nexport async function getRefIDs(params) {\n  // Example: return fetchWrapper('POST', '/api/block/getRefIDs', params, true);\n  console.log('Mock call to getRefIDs with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetRefIDsResponse>\n}\n\n/**\n * 根据文件注解块的ID，查找与该注解相关的引用块ID和定义块ID。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 文件注解块的 ID
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {object} Data 包含相关引用ID和定义ID的对象
 */\nexport async function getRefIDsByFileAnnotationID(params) {\n  // Example: return fetchWrapper('POST', '/api/block/getRefIDsByFileAnnotationID', params, true);\n  console.log('Mock call to getRefIDsByFileAnnotationID with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetRefIDsByFileAnnotationIDResponse>\n}\n\n/**\n * 获取指定引用块ID的锚文本内容。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 引用块的 ID
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {string} Data 引用块的锚文本
 */\nexport async function getRefText(params) {\n  // Example: return fetchWrapper('POST', '/api/block/getRefText', params, true);\n  console.log('Mock call to getRefText with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetRefTextResponse>\n}\n\n/**\n * 获取指定块ID的尾部（最后）指定数量的直接子块的基本信息。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 父块的 ID
 * @param {number} params.size 要获取的尾部子块数量
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {Array<object>} Data 尾部子块的基本信息数组
 */\nexport async function getTailChildBlocks(params) {\n  // Example: return fetchWrapper('POST', '/api/block/getTailChildBlocks', params, true);\n  console.log('Mock call to getTailChildBlocks with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetTailChildBlocksResponse>\n}\n\n/**\n * 获取指定块ID（通常是文档块）的树结构统计信息，如各种类型子块的数量等。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 目标块的 ID，通常为文档块
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {object} Data 块树的统计信息对象
 */\nexport async function getTreeStat(params) {\n  // Example: return fetchWrapper('POST', '/api/block/getTreeStat', params, true);\n  console.log('Mock call to getTreeStat with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetTreeStatResponse>\n}\n\n/**\n * 向上查找指定块ID的父块链，返回最近的一个已展开（未折叠）的父块ID。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 起始块的 ID
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {string} Data 最近的已展开父块的 ID，如果无此类父块或出错则为空字符串
 */\nexport async function getUnfoldedParentID(params) {\n  // Example: return fetchWrapper('POST', '/api/block/getUnfoldedParentID', params, true);\n  console.log('Mock call to getUnfoldedParentID with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetUnfoldedParentIDResponse>\n}\n\n/**\n * 在指定的锚点块（anchorID）之前或之后插入新的内容块。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.anchorID 锚点块的 ID
 * @param {string} params.data 要插入的内容，可以是 Markdown 或 DOM 字符串
 * @param {'markdown'} params.dataType 指定 data 参数的类型
 * @param {boolean} params.isBefore 是否在锚点块之前插入 (true: 之前, false: 之后)
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {Array<object>} Data Data
 */\nexport async function insertBlock(params) {\n  // Example: return fetchWrapper('POST', '/api/block/insertBlock', params, true);\n  console.log('Mock call to insertBlock with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<InsertBlockResponse>\n}\n\n/**\n * 在指定父块的开头插入新的子块。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.data 要插入的内容，可以是 Markdown 或 DOM 字符串
 * @param {'markdown'} params.dataType 指定 data 参数的类型
 * @param {string} params.parentID 父块的 ID
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {Array<object>} Data Data
 */\nexport async function prependBlock(params) {\n  // Example: return fetchWrapper('POST', '/api/block/prependBlock', params, true);\n  console.log('Mock call to prependBlock with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<PrependBlockResponse>\n}\n\n/**\n * 为指定的块ID设置一个提醒时间。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要设置提醒的块 ID
 * @param {string} params.timed 提醒时间，格式为 yyyyMMddHHmmss (例如: 20230815103000)
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {null} Data 成功时为 null
 */\nexport async function setBlockReminder(params) {\n  // Example: return fetchWrapper('POST', '/api/block/setBlockReminder', params, true);\n  console.log('Mock call to setBlockReminder with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetBlockReminderResponse>\n}\n\n/**\n * 交换指定的引用块和其指向的定义块的角色。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.refID 原引用块的 ID
 * @param {string} params.defID 原定义块的 ID
 * @param {boolean} params.includeChildren 是否包含子块进行交换 (通常用于嵌入块)
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {null} Data 成功时为 null
 */\nexport async function swapBlockRef(params) {\n  // Example: return fetchWrapper('POST', '/api/block/swapBlockRef', params, true);\n  console.log('Mock call to swapBlockRef with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SwapBlockRefResponse>\n}\n\n/**\n * 将原块（fromID）的所有引用关系（或指定的引用关系 refIDs）转移到目标块（toID）。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.fromID 原块的 ID，其引用关系将被转移
 * @param {string} params.toID 目标块的 ID，将接收引用关系
 * @param {Array<string>} [params.refIDs] refIDs
 * @param {boolean} [params.reloadUI] reloadUI
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {null} Data 成功时为 null
 */\nexport async function transferBlockRef(params) {\n  // Example: return fetchWrapper('POST', '/api/block/transferBlockRef', params, true);\n  console.log('Mock call to transferBlockRef with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<TransferBlockRefResponse>\n}\n\n/**\n * 展开指定的块ID。对于标题块，执行 unfoldHeading 操作；对于其他类型的块，设置其 fold 属性为 false。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要展开的块 ID
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {Array<any>} Data Data
 */\nexport async function unfoldBlock(params) {\n  // Example: return fetchWrapper('POST', '/api/block/unfoldBlock', params, true);\n  console.log('Mock call to unfoldBlock with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<UnfoldBlockResponse>\n}\n\n/**\n * 更新指定块ID的内容。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要更新的块 ID
 * @param {string} params.data 新的块内容，可以是 Markdown 或 DOM 字符串
 * @param {'markdown'} params.dataType 指定 data 参数的类型
 * @property {number} Code API 调用返回码，0 表示成功
 * @property {string} Msg API 调用返回消息
 * @property {Array<object>} Data Data
 */\nexport async function updateBlock(params) {\n  // Example: return fetchWrapper('POST', '/api/block/updateBlock', params, true);\n  console.log('Mock call to updateBlock with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<UpdateBlockResponse>\n}\n\n/**\n * 在指定笔记本的当日日记文档开头追加新的内容块。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {any} payload - ERROR: API def prependDailyNoteBlock Request returns z.object() directly.\n * @returns {Promise<any>} ERROR: API def prependDailyNoteBlock Response returns z.object() directly.\n */\nexport async function prependDailyNoteBlock(payload) {\n  // Example: return fetchWrapper('POST', '/api/block/prependDailyNoteBlock', payload, true);\n  console.log('Mock call to prependDailyNoteBlock with:', payload);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<any>\n}\n\n/**\n * 将指定的块移动到新的父块下或同级块的特定位置。移动后会触发相关文档编辑器的重载。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {any} payload - ERROR: API def moveBlock Request returns z.object() directly.\n * @returns {Promise<any>} ERROR: API def moveBlock Response returns z.object() directly.\n */\nexport async function moveBlock(payload) {\n  // Example: return fetchWrapper('POST', '/api/block/moveBlock', payload, true);\n  console.log('Mock call to moveBlock with:', payload);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<any>\n}\n\n/**\n * 移动大纲中的标题块到新的父级或同级位置。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {any} payload - ERROR: API def moveOutlineHeading Request returns z.object() directly.\n * @returns {Promise<any>} ERROR: API def moveOutlineHeading Response returns z.object() directly.\n */\nexport async function moveOutlineHeading(payload) {\n  // Example: return fetchWrapper('POST', '/api/block/moveOutlineHeading', payload, true);\n  console.log('Mock call to moveOutlineHeading with:', payload);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<any>\n}\n\n