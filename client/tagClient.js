// Generated client for API group tag
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
 * 获取当前工作空间的所有标签列表。可以提供一个可选的排序参数来即时更新并应用全局标签排序设置。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetTagResponse>}
 * @param {number} [params.sort] sort
 */
export async function getTag(params) {
  return fetchWrapper('POST', '/api/tag/getTag', params, true);
}

/**
 * 根据标签名称移除一个标签。这会从所有关联的块中移除该标签。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RemoveTagResponse>}
 * @param {string} params.label 要移除的标签的名称。
 */
export async function removeTag(params) {
  return fetchWrapper('POST', '/api/tag/removeTag', params, true);
}

/**
 * 将一个旧标签名称重命名为一个新标签名称。所有关联块中的标签引用都会被更新。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RenameTagResponse>}
 * @param {string} params.oldLabel 要重命名的旧标签名称。
 * @param {string} params.newLabel 新的标签名称。
 */
export async function renameTag(params) {
  return fetchWrapper('POST', '/api/tag/renameTag', params, true);
}

