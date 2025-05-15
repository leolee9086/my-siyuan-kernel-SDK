// Generated client for API group notification
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
 * 向前端推送一条错误类型的消息通知，通常用于显示操作失败或异常情况。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<PushErrMsgResponse>}
 * @param {string} params.msg 必需。要推送的错误消息内容。
 * @param {number} [params.timeout] timeout
 */
export async function pushErrMsg(params) {
  return fetchWrapper('POST', '/api/notification/pushErrMsg', params, true);
}

/**
 * 向前端推送一条普通类型的消息通知，通常用于显示操作成功或提示信息。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<PushMsgResponse>}
 * @param {string} params.msg 必需。要推送的普通消息内容。
 * @param {number} [params.timeout] timeout
 */
export async function pushMsg(params) {
  return fetchWrapper('POST', '/api/notification/pushMsg', params, true);
}

