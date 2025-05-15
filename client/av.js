// Generated client for API group av
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
 * 向指定的属性视图中添加一个或多个数据块。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<AddAttributeViewBlocksResponse>}
 * @param {string} params.avID 属性视图的 ID
 * @param {string} [params.blockID] blockID
 * @param {string} [params.previousID] previousID
 * @param {boolean} [params.ignoreFillFilter] ignoreFillFilter
 * @param {Array<Record<string,>} params.srcs 要添加的源数据块信息数组，具体结构取决于源类型
 */
export async function addAttributeViewBlocks(params) {
  return fetchWrapper('POST', '/api/av/addAttributeViewBlocks', params, true);
}

/**
 * 向指定的属性视图添加一个新的列定义。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<AddAttributeViewKeyResponse>}
 * @param {string} params.avID 属性视图的 ID
 * @param {string} params.keyID 新列的 ID，如果为空则自动生成
 * @param {string} params.keyName 新列的名称
 * @param {string} params.keyType 新列的类型 (e.g., 'text', 'number', 'select')
 * @param {string} params.keyIcon 新列的图标 (Emoji 或思源图标名)
 * @param {string} params.previousKeyID 新列将插入到此列 ID 之前
 */
export async function addAttributeViewKey(params) {
  return fetchWrapper('POST', '/api/av/addAttributeViewKey', params, true);
}

/**
 * 向属性视图追加多个新的独立块，并为这些块设置初始值。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<AppendAttributeViewDetachedBlocksWithValuesResponse>}
 * @param {string} params.avID 属性视图的 ID
 * @param {Array<Array<any>>} params.blocksValues 二维数组，外层数组代表多个新块，内层数组代表每个块对应各列的初始值
 */
export async function appendAttributeViewDetachedBlocksWithValues(params) {
  return fetchWrapper('POST', '/api/av/appendAttributeViewDetachedBlocksWithValues', params, true);
}

/**
 * 复制一个属性视图块（数据库块）。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<DuplicateAttributeViewBlockResponse>}
 * @param {string} params.avID 要复制的属性视图块的 ID
 */
export async function duplicateAttributeViewBlock(params) {
  return fetchWrapper('POST', '/api/av/duplicateAttributeViewBlock', params, true);
}

/**
 * 获取指定ID的属性视图的详细信息。
 * (Requires authentication, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetAttributeViewResponse>}
 * @param {string} params.id 属性视图的 ID
 */
export async function getAttributeView(params) {
  return fetchWrapper('POST', '/api/av/getAttributeView', params, true);
}

/**
 * 获取指定属性视图（或其关联块）的筛选条件和排序规则。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetAttributeViewFilterSortResponse>}
 * @param {string} params.id 属性视图的 ID
 * @param {string} params.blockID 属性视图关联的块 ID (通常与属性视图ID相同)
 */
export async function getAttributeViewFilterSort(params) {
  return fetchWrapper('POST', '/api/av/getAttributeViewFilterSort', params, true);
}

/**
 * 获取指定属性视图ID的所有列定义 (keys)。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetAttributeViewKeysResponse>}
 * @param {string} params.id 属性视图的 ID
 */
export async function getAttributeViewKeys(params) {
  return fetchWrapper('POST', '/api/av/getAttributeViewKeys', params, true);
}

/**
 * 通过属性视图ID获取其所有列定义 (keys)。(此接口功能上可能与 getAttributeViewKeys 重复，需确认)
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetAttributeViewKeysByAvIDResponse>}
 * @param {string} params.avID 属性视图的 ID
 */
export async function getAttributeViewKeysByAvID(params) {
  return fetchWrapper('POST', '/api/av/getAttributeViewKeysByAvID', params, true);
}

/**
 * 获取指定属性视图的主键列的值，支持分页和关键词搜索。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetAttributeViewPrimaryKeyValuesResponse>}
 * @param {string} params.id 属性视图的 ID
 * @param {string} [params.keyword] keyword
 * @param {number} [params.page] page
 * @param {number} [params.pageSize] pageSize
 */
export async function getAttributeViewPrimaryKeyValues(params) {
  return fetchWrapper('POST', '/api/av/getAttributeViewPrimaryKeyValues', params, true);
}

/**
 * 获取指定属性视图ID的镜像数据库块ID列表。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetMirrorDatabaseBlocksResponse>}
 * @param {string} params.avID 属性视图的 ID
 */
export async function getMirrorDatabaseBlocks(params) {
  return fetchWrapper('POST', '/api/av/getMirrorDatabaseBlocks', params, true);
}

/**
 * 从指定的属性视图中移除一个或多个数据块。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RemoveAttributeViewBlocksResponse>}
 * @param {string} params.avID 属性视图的 ID
 * @param {Array<string>} params.srcIDs 要移除的源数据块的 ID 数组
 */
export async function removeAttributeViewBlocks(params) {
  return fetchWrapper('POST', '/api/av/removeAttributeViewBlocks', params, true);
}

/**
 * 从指定的属性视图移除一个列定义。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RemoveAttributeViewKeyResponse>}
 * @param {string} params.avID 属性视图的 ID
 * @param {string} params.keyID 要移除的列的 ID
 * @param {boolean} [params.removeRelationDest] removeRelationDest
 */
export async function removeAttributeViewKey(params) {
  return fetchWrapper('POST', '/api/av/removeAttributeViewKey', params, true);
}

/**
 * 渲染属性视图，获取其名称、视图类型、视图ID、所有视图、当前视图详情以及是否为镜像等信息。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<RenderAttributeViewResponse>}
 * @param {string} params.id 属性视图的 ID
 * @param {string} [params.viewID] viewID
 * @param {string} [params.query] query
 * @param {number} [params.page] page
 * @param {number} [params.pageSize] pageSize
 */
export async function renderAttributeView(params) {
  return fetchWrapper('POST', '/api/av/renderAttributeView', params, true);
}

/**
 * 渲染指定历史版本的属性视图。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<RenderHistoryAttributeViewResponse>}
 * @param {string} params.id 属性视图的 ID
 * @param {string} params.created 历史版本创建的时间戳字符串 (毫秒级)
 */
export async function renderHistoryAttributeView(params) {
  return fetchWrapper('POST', '/api/av/renderHistoryAttributeView', params, true);
}

/**
 * 渲染指定快照索引的属性视图。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<RenderSnapshotAttributeViewResponse>}
 * @param {string} params.snapshot 快照的路径或标识
 * @param {string} params.id 属性视图的 ID
 */
export async function renderSnapshotAttributeView(params) {
  return fetchWrapper('POST', '/api/av/renderSnapshotAttributeView', params, true);
}

/**
 * 根据关键词搜索属性视图，可排除指定ID。
 * (Requires authentication, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SearchAttributeViewResponse>}
 * @param {string} params.keyword 搜索关键词
 * @param {Array<string>} [params.excludes] excludes
 */
export async function searchAttributeView(params) {
  return fetchWrapper('POST', '/api/av/searchAttributeView', params, true);
}

/**
 * 根据关键词搜索指定属性视图的非关联列 (Non-relation Key)。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SearchAttributeViewNonRelationKeyResponse>}
 * @param {string} params.avID 属性视图的 ID
 * @param {string} params.keyword 搜索关键词
 */
export async function searchAttributeViewNonRelationKey(params) {
  return fetchWrapper('POST', '/api/av/searchAttributeViewNonRelationKey', params, true);
}

/**
 * 根据关键词搜索指定属性视图的关联列 (Relation Key)。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SearchAttributeViewRelationKeyResponse>}
 * @param {string} params.avID 属性视图的 ID
 * @param {string} params.keyword 搜索关键词
 */
export async function searchAttributeViewRelationKey(params) {
  return fetchWrapper('POST', '/api/av/searchAttributeViewRelationKey', params, true);
}

/**
 * 更新属性视图中指定行（块ID）、指定列（KeyID）的单元格的值。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetAttributeViewBlockAttrResponse>}
 * @param {string} params.avID 属性视图的 ID
 * @param {string} params.keyID 列的 ID (Key ID)
 * @param {string} params.rowID 行的 ID (通常是数据块的 ID)
 * @param {any} params.value 要设置的新值，具体类型取决于列的类型
 */
export async function setAttributeViewBlockAttr(params) {
  return fetchWrapper('POST', '/api/av/setAttributeViewBlockAttr', params, true);
}

/**
 * 设置指定数据库块（属性视图块）的默认视图ID。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetDatabaseBlockViewResponse>}
 * @param {string} params.id 数据库块（属性视图块）的 ID
 * @param {string} params.viewID 要设置为默认视图的视图 ID
 */
export async function setDatabaseBlockView(params) {
  return fetchWrapper('POST', '/api/av/setDatabaseBlockView', params, true);
}

/**
 * 对属性视图的列进行排序。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SortAttributeViewKeyResponse>}
 * @param {string} params.avID 属性视图的 ID
 * @param {string} params.keyID 要移动的列的 ID
 * @param {string} params.previousKeyID 目标位置：将列移动到此列 ID 之前
 */
export async function sortAttributeViewKey(params) {
  return fetchWrapper('POST', '/api/av/sortAttributeViewKey', params, true);
}

/**
 * 对属性视图中某个特定视图（如图表、看板等）的列进行排序。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SortAttributeViewViewKeyResponse>}
 * @param {string} params.avID 属性视图的 ID
 * @param {string} params.viewID 特定视图的 ID
 * @param {string} params.keyID 要移动的列的 ID
 * @param {string} params.previousKeyID 目标位置：将列移动到此列 ID 之前
 */
export async function sortAttributeViewViewKey(params) {
  return fetchWrapper('POST', '/api/av/sortAttributeViewViewKey', params, true);
}

