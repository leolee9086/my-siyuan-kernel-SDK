// Generated client for API group petal
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
 * 加载指定前端界面的所有已启用且兼容的插件（Petals）及其代码和配置信息。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<LoadPetalsResponse>}
 * @param {string} params.frontend 必需。指定要加载插件的前端界面，例如 'desktop', 'mobile', 'browser-extension'。
 */
export async function loadPetals(params) {
  return fetchWrapper('POST', '/api/petal/loadPetals', params, true);
}

/**
 * 设置指定前端界面中特定插件（由包名识别）的启用或禁用状态。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetPetalEnabledResponse>}
 * @param {string} params.packageName 必需。要设置启用状态的插件的包名 (唯一标识符)。
 * @param {boolean} params.enabled 必需。设置插件的启用状态，true 表示启用，false 表示禁用。
 * @param {string} params.frontend 必需。指定要设置插件状态的前端界面，例如 'desktop', 'mobile'。
 */
export async function setPetalEnabled(params) {
  return fetchWrapper('POST', '/api/petal/setPetalEnabled', params, true);
}

