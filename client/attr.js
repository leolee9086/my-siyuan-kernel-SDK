// Generated client for API group attr
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
 * 根据提供的块 ID 列表，批量获取这些块的所有自定义属性。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<BatchGetBlockAttrsResponse>}
 * @param {Array<string>} params.ids 要获取属性的块 ID 数组
 */
export async function batchGetBlockAttrs(params) {
  return fetchWrapper('POST', '/api/attr/batchGetBlockAttrs', params, true);
}

/**
 * 根据提供的块 ID 和对应的属性集，批量为这些块设置自定义属性。如果属性值为 null，则表示删除该属性。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<BatchSetBlockAttrsResponse>}
 * @param {Array<BatchSetBlockAttrsParamsBlockAttrsItem>} params.blockAttrs 包含多个块属性设置的对象数组
 */
export async function batchSetBlockAttrs(params) {
  return fetchWrapper('POST', '/api/attr/batchSetBlockAttrs', params, true);
}

/**
 * 获取指定块 ID 的所有自定义属性。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetBlockAttrsResponse>}
 * @param {string} params.id 要获取属性的块 ID
 */
export async function getBlockAttrs(params) {
  return fetchWrapper('POST', '/api/attr/getBlockAttrs', params, true);
}

/**
 * 获取当前工作空间中所有书签使用过的标签列表。
 * (Requires authentication)
 * @returns {Promise<GetBookmarkLabelsResponse>}
 */
export async function getBookmarkLabels() {
  return fetchWrapper('POST', '/api/attr/getBookmarkLabels', undefined, true);
}

/**
 * 重置指定块的若干属性。此操作通常用于删除属性，但需要提供属性的当前期望值进行匹配后才会执行。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<ResetBlockAttrsResponse>}
 * @param {string} params.id 要重置属性的块 ID
 * @param {Record<string,} params.attrs 要重置的属性对象 (属性名: 期望的当前属性值)。只有当块的属性值与此处提供的值匹配时，该属性才会被移除。
 */
export async function resetBlockAttrs(params) {
  return fetchWrapper('POST', '/api/attr/resetBlockAttrs', params, true);
}

/**
 * 为指定的单个块设置自定义属性。如果属性值为 null，则表示删除该属性。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetBlockAttrsResponse>}
 * @param {string} params.id 要设置属性的块 ID
 * @param {Record<string,} params.attrs 要设置的属性对象 (属性名: 属性值)。如果属性值为 null，则删除该属性。
 */
export async function setBlockAttrs(params) {
  return fetchWrapper('POST', '/api/attr/setBlockAttrs', params, true);
}

