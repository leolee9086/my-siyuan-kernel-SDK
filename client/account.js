// Generated client for API group account
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
 * 检查用户输入的激活码是否有效。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<CheckActivationcodeResponse>}
 * @param {string} params.data 要检查的激活码
 */
export async function checkActivationcode(params) {
  return fetchWrapper('POST', '/api/account/checkActivationcode', params, true);
}

/**
 * 注销当前用户账号。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @returns {Promise<DeactivateUserResponse>}
 */
export async function deactivateUser() {
  return fetchWrapper('POST', '/api/account/deactivate', undefined, true);
}

/**
 * 用户登录，需要提供用户名、密码、验证码和云端区域。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<LoginResponse>}
 * @param {string} params.userName 用户名
 * @param {string} params.userPassword 用户密码
 * @param {string} params.captcha 验证码
 * @param {number} params.cloudRegion 云端区域代码，例如 0 表示中国区
 */
export async function login(params) {
  return fetchWrapper('POST', '/api/account/login', params, true);
}

/**
 * 为当前用户开启免费试用。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @returns {Promise<StartFreeTrialResponse>}
 */
export async function startFreeTrial() {
  return fetchWrapper('POST', '/api/account/startFreeTrial', undefined, true);
}

/**
 * 使用激活码激活账户。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<UseActivationcodeResponse>}
 * @param {string} params.data 要使用的激活码
 */
export async function useActivationcode(params) {
  return fetchWrapper('POST', '/api/account/useActivationcode', params, true);
}

