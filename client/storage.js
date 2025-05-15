// Generated client for API group storage
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
 * 获取所有用户已保存的搜索标准（过滤条件）列表。
 * (Requires authentication)
 * @returns {Promise<GetCriteriaResponse>}
 */
export async function getCriteria() {
  return fetchWrapper('POST', '/api/storage/getCriteria', undefined, true);
}

/**
 * 获取浏览器 LocalStorage 中的所有键值对。
 * (Requires authentication)
 * @returns {Promise<GetLocalStorageResponse>}
 */
export async function getLocalStorage() {
  return fetchWrapper('POST', '/api/storage/getLocalStorage', undefined, true);
}

/**
 * 获取用户最近打开过的文档列表。这些文档按最近打开时间排序。
 * (Requires authentication)
 * @returns {Promise<GetRecentDocsResponse>}
 */
export async function getRecentDocs() {
  return fetchWrapper('POST', '/api/storage/getRecentDocs', undefined, true);
}

/**
 * 根据名称移除一个已保存的搜索标准（过滤条件）。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RemoveCriterionResponse>}
 * @param {string} params.name 要移除的搜索标准的名称。
 */
export async function removeCriterion(params) {
  return fetchWrapper('POST', '/api/storage/removeCriterion', params, true);
}

/**
 * 根据提供的键名列表，批量移除浏览器 LocalStorage 中的项目。同时会广播事件通知其他客户端同步移除。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RemoveLocalStorageValsResponse>}
 * @param {Array<string>} params.keys 要移除的 LocalStorage 项目的键名数组。
 * @param {string} params.app 发起操作的 App ID，用于事件广播。
 */
export async function removeLocalStorageVals(params) {
  return fetchWrapper('POST', '/api/storage/removeLocalStorageVals', params, true);
}

/**
 * 保存或更新一个搜索标准（过滤条件）。搜索标准可用于后续的文档或内容搜索。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetCriterionResponse>}
 * @param {SetCriterionParamsCriterion} params.criterion 要保存或更新的搜索标准对象。具体字段请参考思源笔记内核 model.Criterion 结构。
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
 */
export async function setCriterion(params) {
  return fetchWrapper('POST', '/api/storage/setCriterion', params, true);
}

/**
 * 使用一个完整的对象来覆盖整个浏览器 LocalStorage 的内容。通常用于导入或恢复 LocalStorage 数据。同时会广播事件通知其他客户端同步设置。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetLocalStorageResponse>}
 * @param {Record<string,} params.val 一个对象，其键值对将完全替换现有的 LocalStorage 内容。
 * @param {string} params.app 发起操作的 App ID，用于事件广播。
 */
export async function setLocalStorage(params) {
  return fetchWrapper('POST', '/api/storage/setLocalStorage', params, true);
}

/**
 * 设置浏览器 LocalStorage 中的单个键值对。同时会广播事件通知其他客户端同步设置。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetLocalStorageValResponse>}
 * @param {string} params.key 要设置的 LocalStorage 项目的键名。
 * @param {any} params.val 要设置的 LocalStorage 项目的值，可以是任意类型，但最终会序列化为字符串存储。
 * @param {string} params.app 发起操作的 App ID，用于事件广播。
 */
export async function setLocalStorageVal(params) {
  return fetchWrapper('POST', '/api/storage/setLocalStorageVal', params, true);
}

