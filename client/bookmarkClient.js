// Generated client for API group bookmark
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
 * 构建并返回当前工作空间的所有书签列表。书签是为块设置的特定名称，方便快速访问。
 * (Requires authentication)
 * @returns {Promise<GetBookmarkResponse>}
 */
export async function getBookmark() {
  return fetchWrapper('POST', '/api/bookmark/getBookmark', undefined, true);
}

/**
 * 根据书签名称（即块的 IAL 中 bookmark 属性的值）移除一个或多个书签。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RemoveBookmarkResponse>}
 * @param {string} params.bookmark 要移除的书签的名称 (块 IAL 中 bookmark 属性的值)
 */
export async function removeBookmark(params) {
  return fetchWrapper('POST', '/api/bookmark/removeBookmark', params, true);
}

/**
 * 将具有特定旧书签名称（块 IAL 中 bookmark 属性的旧值）的所有书签重命名为一个新的书签名称。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RenameBookmarkResponse>}
 * @param {string} params.oldBookmark 要重命名的旧书签名称 (块 IAL 中 bookmark 属性的当前值)
 * @param {string} params.newBookmark 新的书签名称 (将写入块 IAL 中 bookmark 属性的新值)
 */
export async function renameBookmark(params) {
  return fetchWrapper('POST', '/api/bookmark/renameBookmark', params, true);
}

