// Generated client for API group history
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
 * 清空当前工作空间下的所有历史记录。这是一个耗时操作，执行前会有提示。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @returns {Promise<ClearWorkspaceHistoryResponse>}
 */
export async function clearWorkspaceHistory() {
  return fetchWrapper('POST', '/api/history/clearWorkspaceHistory', undefined, true);
}

/**
 * 获取指定文档历史版本的内容和相关信息。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetDocHistoryContentResponse>}
 * @param {string} params.historyPath 文档历史版本的路径，通常从其他历史记录接口获取
 * @param {string} [params.k] k
 * @param {boolean} [params.highlight] highlight
 */
export async function getDocHistoryContent(params) {
  return fetchWrapper('POST', '/api/history/getDocHistoryContent', params, true);
}

/**
 * 根据创建日期、关键词等条件获取历史记录中的具体条目列表。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetHistoryItemsResponse>}
 * @param {string} params.created 创建日期，格式如 'YYYYMMDD'
 * @param {string} [params.notebook] notebook
 * @param {number} [params.type] type
 * @param {string} params.query 搜索关键词
 * @param {string} [params.op] op
 */
export async function getHistoryItems(params) {
  return fetchWrapper('POST', '/api/history/getHistoryItems', params, true);
}

/**
 * 获取所有笔记本的历史记录信息。
 * (Requires authentication, Requires admin role)
 * @returns {Promise<GetNotebookHistoryResponse>}
 */
export async function getNotebookHistory() {
  return fetchWrapper('POST', '/api/history/getNotebookHistory', undefined, true);
}

/**
 * 重建整个工作空间的历史记录索引。这是一个后台异步操作。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @returns {Promise<ReindexHistoryResponse>}
 */
export async function reindexHistory() {
  return fetchWrapper('POST', '/api/history/reindexHistory', undefined, true);
}

/**
 * 将资源文件回滚到指定的历史版本。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RollbackAssetsHistoryResponse>}
 * @param {string} params.historyPath 资源文件历史版本的路径，通常从其他历史记录接口获取
 */
export async function rollbackAssetsHistory(params) {
  return fetchWrapper('POST', '/api/history/rollbackAssetsHistory', params, true);
}

/**
 * 将单个文档回滚到指定的历史版本。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RollbackDocHistoryResponse>}
 * @param {string} params.notebook 文档所属的笔记本 ID
 * @param {string} params.historyPath 文档历史版本的路径，通常从其他历史记录接口获取
 */
export async function rollbackDocHistory(params) {
  return fetchWrapper('POST', '/api/history/rollbackDocHistory', params, true);
}

/**
 * 将整个笔记本回滚到指定的历史版本。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RollbackNotebookHistoryResponse>}
 * @param {string} params.historyPath 笔记本历史版本的路径，通常从 getNotebookHistory 接口获取
 */
export async function rollbackNotebookHistory(params) {
  return fetchWrapper('POST', '/api/history/rollbackNotebookHistory', params, true);
}

/**
 * 根据关键词、笔记本、类型等分页搜索历史记录。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<SearchHistoryResponse>}
 * @param {string} [params.notebook] notebook
 * @param {number} [params.type] type
 * @param {string} params.query 搜索关键词
 * @param {number} [params.page] page
 * @param {string} [params.op] op
 */
export async function searchHistory(params) {
  return fetchWrapper('POST', '/api/history/searchHistory', params, true);
}

