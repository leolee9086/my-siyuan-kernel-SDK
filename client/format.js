// Generated client for API group format
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
 * 为指定块ID的内容（Markdown原文）在中文与英文、数字之间自动添加空格，以优化排版。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<AutoSpaceResponse>}
 * @param {string} params.id 要处理的块 ID。
 */
export async function autoSpace(params) {
  return fetchWrapper('POST', '/api/format/autoSpace', params, true);
}

/**
 * 将指定块ID内的所有外部网络资源（如图片、附件等，但不包括仅被引用的网络图片链接）下载并转存为本地资源。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<NetAssets2LocalAssetsResponse>}
 * @param {string} params.id 要处理的块 ID，该块内的网络资源将被转存。
 */
export async function netAssets2LocalAssets(params) {
  return fetchWrapper('POST', '/api/format/netAssets2LocalAssets', params, true);
}

/**
 * 将指定块ID内的网络图片（Markdown中实际嵌入的图片，非普通链接）转存为本地资源。可以指定单个图片URL进行转存，或留空以转存块内所有网络图片。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<NetImg2LocalAssetsResponse>}
 * @param {string} params.id 要处理的块 ID。块内的网络图片将被转存。
 * @param {string} [params.url] url
 */
export async function netImg2LocalAssets(params) {
  return fetchWrapper('POST', '/api/format/netImg2LocalAssets', params, true);
}

