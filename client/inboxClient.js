// Generated client for API group inbox
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
 * 根据ID获取单个云端速记条目的详细内容。速记内容会从 Markdown 转换为 HTML。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetShorthandResponse>}
 * @param {string} params.id 要获取的速记的唯一标识符 (通常为时间戳字符串)
 */
export async function getShorthand(params) {
  return fetchWrapper('POST', '/api/inbox/getShorthand', params, true);
}

/**
 * 分页获取云端速记条目列表。速记内容会从 Markdown 转换为 HTML，描述会做简化处理。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetShorthandsResponse>}
 * @param {number} params.page 要获取的速记列表的页码，从 1 开始
 */
export async function getShorthands(params) {
  return fetchWrapper('POST', '/api/inbox/getShorthands', params, true);
}

/**
 * 根据ID列表批量移除云端速记条目。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RemoveShorthandsResponse>}
 * @param {Array<string>} params.ids 要移除的速记的唯一标识符数组
 */
export async function removeShorthands(params) {
  return fetchWrapper('POST', '/api/inbox/removeShorthands', params, true);
}

