// Generated client for API group snippet
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
 * 获取已保存的代码片段列表。可以根据类型（js/css/all）、启用状态（0-禁用, 1-启用, 2-全部）和关键字进行过滤。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetSnippetResponse>}
 * @param {'js'} params.type 要获取的代码片段类型：'js', 'css', 或 'all'。
 * @param {number} params.enabled 根据启用状态进行过滤：0-仅禁用, 1-仅启用, 2-全部。
 * @param {string} [params.keyword] keyword
 */
export async function getSnippet(params) {
  return fetchWrapper('POST', '/api/snippet/getSnippet', params, true);
}

/**
 * 设置全新的代码片段列表。这是一个全量替换操作，提供的 snippets 数组将完全覆盖当前所有的代码片段。如果只想修改或添加单个片段，需要先获取所有现有片段，在本地修改/添加后，将修改后的完整列表通过此API发送。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetSnippetResponse>}
 * @param {Array<SetSnippetParamsSnippetsItem>} params.snippets 包含一个或多个代码片段对象的数组。此数组将成为操作完成后系统中全新的、完整的代码片段列表。
 */
export async function setSnippet(params) {
  return fetchWrapper('POST', '/api/snippet/setSnippet', params, true);
}

/**
 * 根据ID移除指定的代码片段。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RemoveSnippetResponse>}
 * @param {string} params.id 要移除的代码片段的唯一ID。
 */
export async function removeSnippet(params) {
  return fetchWrapper('POST', '/api/snippet/removeSnippet', params, true);
}

