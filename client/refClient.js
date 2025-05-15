// Generated client for API group ref
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
 * 获取指定块ID的反向链接和反向提及列表。此接口为旧版，建议使用 /api/ref/getBacklink2。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetBacklinkResponse>}
 * @param {string} params.id 必需。要查询反向链接和提及的目标块的 ID。
 * @param {string} params.k 用于筛选反向链接结果的关键词。
 * @param {string} params.mk 用于筛选反向提及结果的关键词。
 * @param {number} [params.beforeLen] beforeLen
 * @param {boolean} [params.containChildren] containChildren
 */
export async function getBacklink(params) {
  return fetchWrapper('POST', '/api/ref/getBacklink', params, true);
}

/**
 * 获取指定块ID的反向链接和反向提及列表，支持排序。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetBacklink2Response>}
 * @param {string} params.id 必需。要查询反向链接和提及的目标块的 ID。
 * @param {string} params.k 用于筛选反向链接结果的关键词。
 * @param {string} params.mk 用于筛选反向提及结果的关键词。
 * @param {string} [params.sort] sort
 * @param {string} [params.mSort] mSort
 * @param {boolean} [params.containChildren] containChildren
 */
export async function getBacklink2(params) {
  return fetchWrapper('POST', '/api/ref/getBacklink2', params, true);
}

/**
 * 获取指定 定义块 在某个特定 文档树 内的反向链接列表。用于在打开一个文档时，显示该文档中有哪些块引用了当前面板的文档。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetBacklinkDocResponse>}
 * @param {string} params.defID 必需。定义块的 ID (即被其他块引用的块)。
 * @param {string} params.refTreeID 必需。引用块所在文档树的根块 ID (通常是当前打开的文档的根块 ID)。
 * @param {string} params.keyword 用于筛选结果的关键词。
 * @param {boolean} [params.containChildren] containChildren
 * @param {boolean} [params.highlight] highlight
 */
export async function getBacklinkDoc(params) {
  return fetchWrapper('POST', '/api/ref/getBacklinkDoc', params, true);
}

/**
 * 获取指定 定义块 在某个特定 文档树 内的反向提及列表 (提及了定义块的名称或别名，但未直接引用的块)。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetBackmentionDocResponse>}
 * @param {string} params.defID 必需。定义块的 ID (即被其他块提及的块)。
 * @param {string} params.refTreeID 必需。提及块所在文档树的根块 ID (通常是当前打开的文档的根块 ID)。
 * @param {string} params.keyword 用于筛选结果的关键词。
 * @param {boolean} [params.containChildren] containChildren
 * @param {boolean} [params.highlight] highlight
 */
export async function getBackmentionDoc(params) {
  return fetchWrapper('POST', '/api/ref/getBackmentionDoc', params, true);
}

/**
 * 手动触发指定块的反向链接和提及关系的刷新计算。通常在数据发生变更后，系统会自动更新，但此接口可用于强制刷新。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<RefreshBacklinkResponse>}
 * @param {string} params.id 必需。要刷新反向链接和提及信息的目标块的 ID。
 */
export async function refreshBacklink(params) {
  return fetchWrapper('POST', '/api/ref/refreshBacklink', params, true);
}

