// Generated client for API group archive
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
 * 将指定的 .zip 文件解压到指定路径。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<UnzipResponse>}
 * @param {string} params.zipPath 要解压的 .zip 文件的绝对路径或相对于工作空间的路径
 * @param {string} params.path 解压到目标目录的绝对路径或相对于工作空间的路径
 */
export async function unzip(params) {
  return fetchWrapper('POST', '/api/archive/unzip', params, true);
}

/**
 * 将指定路径的文件或目录压缩到指定的 .zip 文件。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<ZipResponse>}
 * @param {string} params.path 要压缩的文件或目录的绝对路径或相对于工作空间的路径
 * @param {string} params.zipPath 生成的 .zip 文件保存的绝对路径或相对于工作空间的路径
 */
export async function zip(params) {
  return fetchWrapper('POST', '/api/archive/zip', params, true);
}

