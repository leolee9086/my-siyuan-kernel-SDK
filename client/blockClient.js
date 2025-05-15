// Generated client for API group block
// TODO: Implement or import a common HTTP request wrapper function (e.g., fetchWrapper)
async function fetchWrapper(method, endpoint, params, needAuth) {
  const SiyuanKernelPrefix = typeof window === 'object' ? '' : 'http://127.0.0.1:6806';
  const url = SiyuanKernelPrefix + endpoint;
  const options = { method, headers: {} };
  if (method === 'POST' && params && Object.keys(params).length > 0) { // Only add body if params exist and are not empty
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(params);
  }
  if (needAuth) {
    // Example: Retrieve and add auth token
    // const token = localStorage.getItem('siyuan-auth-token'); 
    // if (token) options.headers['Authorization'] = `Token ${token}`;
    options.headers['Authorization'] = 'Bearer YOUR_TOKEN_HERE'; // Placeholder
  }
  const response = await fetch(url, options);
  if (!response.ok) {
    let errorData = 'Failed to parse error response';
    try { errorData = await response.json(); } catch (e) { try {errorData = await response.text(); } catch (e2) { /* ignore secondary error */ }}    console.error('API Error:', response.status, errorData); 
    throw new Error(`API Error ${response.status}: ${JSON.stringify(errorData)}`);
  }
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return response.json();
  } 
  return response.text(); // Or handle other content types
}

/**
 * 在指定父块的末尾插入新的子块。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<AppendBlockResponse>}
 * @param {string} params.data 要插入的内容，可以是 Markdown 或 DOM 字符串
 * @param {'markdown'} params.dataType 指定 data 参数的类型
 * @param {string} params.parentID 父块的 ID
 */
export async function appendBlock(params) {
  return fetchWrapper('POST', '/api/block/appendBlock', params, true);
}

/**
 * 向指定笔记本的当日日记文档末尾追加新的内容块。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<AppendDailyNoteBlockResponse>}
 * @param {string} params.data 要追加的内容，可以是 Markdown 或 DOM 字符串
 * @param {'markdown'} params.dataType 指定 data 参数的类型
 * @param {string} params.notebook 目标笔记本的 ID
 */
export async function appendDailyNoteBlock(params) {
  return fetchWrapper('POST', '/api/block/appendDailyNoteBlock', params, true);
}

/**
 * 批量更新多个块的内容。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<BatchUpdateBlockResponse>}
 * @param {Array<BatchUpdateBlockParamsBlocksItem>} params.blocks 包含多个待更新块信息的数组
 */
export async function batchUpdateBlock(params) {
  return fetchWrapper('POST', '/api/block/batchUpdateBlock', params, true);
}

/**
 * 检查指定的块ID是否存在。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<CheckBlockExistResponse>}
 * @param {string} params.id 要检查的块 ID
 */
export async function checkBlockExist(params) {
  return fetchWrapper('POST', '/api/block/checkBlockExist', params, true);
}

/**
 * 检查指定的块ID是否已折叠，并返回其是否为根块。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<CheckBlockFoldResponse>}
 * @param {string} params.id 要检查的块 ID
 */
export async function checkBlockFold(params) {
  return fetchWrapper('POST', '/api/block/checkBlockFold', params, true);
}

/**
 * 检查一批块ID的引用状态（例如，是否被其他块引用，是否定义了其他块等）。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<CheckBlockRefResponse>}
 * @param {Array<string>} params.ids 要检查的块 ID 数组
 */
export async function checkBlockRef(params) {
  return fetchWrapper('POST', '/api/block/checkBlockRef', params, true);
}

/**
 * 删除指定的块ID。此操作通过事务完成。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<DeleteBlockResponse>}
 * @param {string} params.id 要删除的块 ID
 */
export async function deleteBlock(params) {
  return fetchWrapper('POST', '/api/block/deleteBlock', params, true);
}

/**
 * 折叠指定的块ID。对于标题块，执行 foldHeading 操作；对于其他类型的块，设置其 fold 属性。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<FoldBlockResponse>}
 * @param {string} params.id 要折叠的块 ID
 */
export async function foldBlock(params) {
  return fetchWrapper('POST', '/api/block/foldBlock', params, true);
}

/**
 * 获取指定块ID到其根块（通常是文档块）的面包屑路径，可以排除特定类型的块。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetBlockBreadcrumbResponse>}
 * @param {string} params.id 目标块的 ID
 * @param {Array<string>} [params.excludeTypes] excludeTypes
 */
export async function getBlockBreadcrumb(params) {
  return fetchWrapper('POST', '/api/block/getBlockBreadcrumb', params, true);
}

/**
 * 获取指定块ID的DOM表示（HTML字符串）。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetBlockDOMResponse>}
 * @param {string} params.id 要获取 DOM 的块 ID
 */
export async function getBlockDOM(params) {
  return fetchWrapper('POST', '/api/block/getBlockDOM', params, true);
}

/**
 * 根据引用文本（锚文本）搜索并返回其可能指向的块定义ID列表。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetBlockDefIDsByRefTextResponse>}
 * @param {string} params.anchor 要搜索的引用锚文本
 * @param {Array<string>} [params.excludeIDs] excludeIDs
 */
export async function getBlockDefIDsByRefText(params) {
  return fetchWrapper('POST', '/api/block/getBlockDefIDsByRefText', params, true);
}

/**
 * 获取指定块ID在其父级块的子块列表中的位置索引（从0开始）。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetBlockIndexResponse>}
 * @param {string} params.id 要获取索引的块 ID
 */
export async function getBlockIndex(params) {
  return fetchWrapper('POST', '/api/block/getBlockIndex', params, true);
}

/**
 * 获取指定块ID的详细信息，包括其所在的笔记本ID(box)、路径(path)、根块ID(rootID)、根块标题(rootTitle)、根块图标(rootIcon)以及其在根块下的直接子块ID(rootChildID)。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetBlockInfoResponse>}
 * @param {string} params.id 要获取信息的块 ID
 */
export async function getBlockInfo(params) {
  return fetchWrapper('POST', '/api/block/getBlockInfo', params, true);
}

/**
 * 获取指定块ID的Kramdown源码表示。可选模式：'md'（Markdown标记符模式，默认）或 'textmark'（文本标记模式，使用span标签）。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetBlockKramdownResponse>}
 * @param {string} params.id 要获取 Kramdown 源码的块 ID
 * @param {'md'} [params.mode] mode
 */
export async function getBlockKramdown(params) {
  return fetchWrapper('POST', '/api/block/getBlockKramdown', params, true);
}

/**
 * 获取指定块ID的父块ID、上一个同级块ID和下一个同级块ID。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetBlockSiblingIDResponse>}
 * @param {string} params.id 目标块的 ID
 */
export async function getBlockSiblingID(params) {
  return fetchWrapper('POST', '/api/block/getBlockSiblingID', params, true);
}

/**
 * 批量获取指定块ID列表对应的块树（BlockTree）信息。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetBlockTreeInfosResponse>}
 * @param {Array<string>} params.ids 要获取块树信息的块 ID 数组
 */
export async function getBlockTreeInfos(params) {
  return fetchWrapper('POST', '/api/block/getBlockTreeInfos', params, true);
}

/**
 * 批量获取指定块ID列表各自在其父级块的子块列表中的位置索引。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetBlocksIndexesResponse>}
 * @param {Array<string>} params.ids 要获取索引的块 ID 数组
 */
export async function getBlocksIndexes(params) {
  return fetchWrapper('POST', '/api/block/getBlocksIndexes', params, true);
}

/**
 * 获取指定块ID列表的总字数、字符数和链接数统计信息。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetBlocksWordCountResponse>}
 * @param {Array<string>} params.ids 要统计字数的块 ID 数组
 * @param {string} [params.reqId] reqId
 */
export async function getBlocksWordCount(params) {
  return fetchWrapper('POST', '/api/block/getBlocksWordCount', params, true);
}

/**
 * 获取指定块ID的所有直接子块的基本信息列表（仅包含ID和类型）。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetChildBlocksResponse>}
 * @param {string} params.id 父块的 ID
 */
export async function getChildBlocks(params) {
  return fetchWrapper('POST', '/api/block/getChildBlocks', params, true);
}

/**
 * 获取给定内容字符串的字数、字符数和链接数统计信息。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetContentWordCountResponse>}
 * @param {string} params.content 要统计字数的文本内容
 * @param {string} [params.reqId] reqId
 */
export async function getContentWordCount(params) {
  return fetchWrapper('POST', '/api/block/getContentWordCount', params, true);
}

/**
 * 提取给定DOM字符串中的纯文本内容。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetDOMTextResponse>}
 * @param {string} params.dom 包含 HTML 标签的 DOM 字符串
 */
export async function getDOMText(params) {
  return fetchWrapper('POST', '/api/block/getDOMText', params, true);
}

/**
 * 获取指定文档块ID的信息，包括其内容（DOM）、标题、图标、面包屑路径和是否为模板。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetDocInfoResponse>}
 * @param {string} params.id 目标文档块的 ID
 */
export async function getDocInfo(params) {
  return fetchWrapper('POST', '/api/block/getDocInfo', params, true);
}

/**
 * 批量获取多个指定文档块ID的信息。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetDocsInfoResponse>}
 * @param {Array<string>} params.ids 包含多个文档块 ID 的数组
 */
export async function getDocsInfo(params) {
  return fetchWrapper('POST', '/api/block/getDocsInfo', params, true);
}

/**
 * 获取指定标题块ID下的所有子孙块的DOM内容。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetHeadingChildrenDOMResponse>}
 * @param {string} params.id 目标标题块的 ID
 */
export async function getHeadingChildrenDOM(params) {
  return fetchWrapper('POST', '/api/block/getHeadingChildrenDOM', params, true);
}

/**
 * 获取指定标题块ID下的所有子孙块的ID列表。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetHeadingChildrenIDsResponse>}
 * @param {string} params.id 目标标题块的 ID
 */
export async function getHeadingChildrenIDs(params) {
  return fetchWrapper('POST', '/api/block/getHeadingChildrenIDs', params, true);
}

/**
 * 获取删除指定标题块（及其所有子孙块）所需的事务操作列表。此接口仅返回事务，不实际执行删除。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetHeadingDeleteTransactionResponse>}
 * @param {string} params.id 要获取删除事务的标题块 ID
 */
export async function getHeadingDeleteTransaction(params) {
  return fetchWrapper('POST', '/api/block/getHeadingDeleteTransaction', params, true);
}

/**
 * 获取调整指定标题块级别所需的事务操作列表。此接口仅返回事务，不实际执行调整。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetHeadingLevelTransactionResponse>}
 * @param {string} params.id 要调整级别的标题块 ID
 * @param {number} params.level 新的标题级别 (1-6)
 */
export async function getHeadingLevelTransaction(params) {
  return fetchWrapper('POST', '/api/block/getHeadingLevelTransaction', params, true);
}

/**
 * 获取最近更新的块列表，按更新时间倒序排列。
 * (Requires authentication)
 * @returns {Promise<GetRecentUpdatedBlocksResponse>}
 */
export async function getRecentUpdatedBlocks() {
  return fetchWrapper('POST', '/api/block/getRecentUpdatedBlocks', undefined, true);
}

/**
 * 获取指定块ID所引用的所有定义块的ID列表。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetRefIDsResponse>}
 * @param {string} params.id 发起引用的块 ID
 */
export async function getRefIDs(params) {
  return fetchWrapper('POST', '/api/block/getRefIDs', params, true);
}

/**
 * 根据文件注解块的ID，查找与该注解相关的引用块ID和定义块ID。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetRefIDsByFileAnnotationIDResponse>}
 * @param {string} params.id 文件注解块的 ID
 */
export async function getRefIDsByFileAnnotationID(params) {
  return fetchWrapper('POST', '/api/block/getRefIDsByFileAnnotationID', params, true);
}

/**
 * 获取指定引用块ID的锚文本内容。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetRefTextResponse>}
 * @param {string} params.id 引用块的 ID
 */
export async function getRefText(params) {
  return fetchWrapper('POST', '/api/block/getRefText', params, true);
}

/**
 * 获取指定块ID的尾部（最后）指定数量的直接子块的基本信息。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetTailChildBlocksResponse>}
 * @param {string} params.id 父块的 ID
 * @param {number} params.size 要获取的尾部子块数量
 */
export async function getTailChildBlocks(params) {
  return fetchWrapper('POST', '/api/block/getTailChildBlocks', params, true);
}

/**
 * 获取指定块ID（通常是文档块）的树结构统计信息，如各种类型子块的数量等。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetTreeStatResponse>}
 * @param {string} params.id 目标块的 ID，通常为文档块
 */
export async function getTreeStat(params) {
  return fetchWrapper('POST', '/api/block/getTreeStat', params, true);
}

/**
 * 向上查找指定块ID的父块链，返回最近的一个已展开（未折叠）的父块ID。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetUnfoldedParentIDResponse>}
 * @param {string} params.id 起始块的 ID
 */
export async function getUnfoldedParentID(params) {
  return fetchWrapper('POST', '/api/block/getUnfoldedParentID', params, true);
}

/**
 * 在指定的锚点块（anchorID）之前或之后插入新的内容块。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<InsertBlockResponse>}
 * @param {string} params.anchorID 锚点块的 ID
 * @param {string} params.data 要插入的内容，可以是 Markdown 或 DOM 字符串
 * @param {'markdown'} params.dataType 指定 data 参数的类型
 * @param {boolean} params.isBefore 是否在锚点块之前插入 (true: 之前, false: 之后)
 */
export async function insertBlock(params) {
  return fetchWrapper('POST', '/api/block/insertBlock', params, true);
}

/**
 * 在指定父块的开头插入新的子块。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<PrependBlockResponse>}
 * @param {string} params.data 要插入的内容，可以是 Markdown 或 DOM 字符串
 * @param {'markdown'} params.dataType 指定 data 参数的类型
 * @param {string} params.parentID 父块的 ID
 */
export async function prependBlock(params) {
  return fetchWrapper('POST', '/api/block/prependBlock', params, true);
}

/**
 * 为指定的块ID设置一个提醒时间。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetBlockReminderResponse>}
 * @param {string} params.id 要设置提醒的块 ID
 * @param {string} params.timed 提醒时间，格式为 yyyyMMddHHmmss (例如: 20230815103000)
 */
export async function setBlockReminder(params) {
  return fetchWrapper('POST', '/api/block/setBlockReminder', params, true);
}

/**
 * 交换指定的引用块和其指向的定义块的角色。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SwapBlockRefResponse>}
 * @param {string} params.refID 原引用块的 ID
 * @param {string} params.defID 原定义块的 ID
 * @param {boolean} params.includeChildren 是否包含子块进行交换 (通常用于嵌入块)
 */
export async function swapBlockRef(params) {
  return fetchWrapper('POST', '/api/block/swapBlockRef', params, true);
}

/**
 * 将原块（fromID）的所有引用关系（或指定的引用关系 refIDs）转移到目标块（toID）。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<TransferBlockRefResponse>}
 * @param {string} params.fromID 原块的 ID，其引用关系将被转移
 * @param {string} params.toID 目标块的 ID，将接收引用关系
 * @param {Array<string>} [params.refIDs] refIDs
 * @param {boolean} [params.reloadUI] reloadUI
 */
export async function transferBlockRef(params) {
  return fetchWrapper('POST', '/api/block/transferBlockRef', params, true);
}

/**
 * 展开指定的块ID。对于标题块，执行 unfoldHeading 操作；对于其他类型的块，设置其 fold 属性为 false。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<UnfoldBlockResponse>}
 * @param {string} params.id 要展开的块 ID
 */
export async function unfoldBlock(params) {
  return fetchWrapper('POST', '/api/block/unfoldBlock', params, true);
}

/**
 * 更新指定块ID的内容。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<UpdateBlockResponse>}
 * @param {string} params.id 要更新的块 ID
 * @param {string} params.data 新的块内容，可以是 Markdown 或 DOM 字符串
 * @param {'markdown'} params.dataType 指定 data 参数的类型
 */
export async function updateBlock(params) {
  return fetchWrapper('POST', '/api/block/updateBlock', params, true);
}

/**
 * 在指定笔记本的当日日记文档开头追加新的内容块。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<PrependDailyNoteBlockResponse>}
 * @param {string} params.data 要追加的内容，可以是 Markdown 或 DOM 字符串。如果 dataType 为 'markdown'，内容会先转换为 DOM。注意：后端实现中此接口行为类似 appendDailyNoteBlock，均在末尾追加，但定义保留 prepend 以匹配接口名和潜在的未来行为调整。建议使用 appendDailyNoteBlock 以获得明确的末尾追加行为。后端 action 为 prependInsert。 
 * @param {'markdown'} params.dataType 指定 data 参数的类型 ('markdown' 或 'dom')。 
 * @param {string} params.notebook 目标笔记本的 ID。
 */
export async function prependDailyNoteBlock(params) {
  return fetchWrapper('POST', '/api/block/prependDailyNoteBlock', params, true);
}

/**
 * 将指定的块移动到新的父块下或同级块的特定位置。移动后会触发相关文档编辑器的重载。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<MoveBlockResponse>}
 * @param {string} params.id 要移动的块的 ID。
 * @param {string} [params.parentID] parentID
 * @param {string} [params.previousID] previousID
 */
export async function moveBlock(params) {
  return fetchWrapper('POST', '/api/block/moveBlock', params, true);
}

/**
 * 移动大纲中的标题块到新的父级或同级位置。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<MoveOutlineHeadingResponse>}
 * @param {string} params.id 要移动的大纲标题块的 ID。
 * @param {string} [params.parentID] parentID
 * @param {string} [params.previousID] previousID
 */
export async function moveOutlineHeading(params) {
  return fetchWrapper('POST', '/api/block/moveOutlineHeading', params, true);
}

