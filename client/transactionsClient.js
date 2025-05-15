// Generated client for API group transactions
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
 * 执行一个或多个事务操作，每个事务可以包含多个具体的数据修改动作。这是思源笔记中进行数据修改最核心的接口之一。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<PerformTransactionsResponse>}
 * @param {Array<PerformTransactionsParamsTransactionsItem>} params.transactions 一个或多个事务对象的数组，至少包含一个事务。
 * @param {number} params.reqId 必需，请求的唯一ID (通常是客户端生成的时间戳，毫秒级)。
 * @param {string} params.app 必需，发起请求的应用标识 (例如 "SiYuan")。
 * @param {string} params.session 必需，当前会话ID (例如前端的 WebSocket clientID)。
 */
export async function performTransactions(params) {
  return fetchWrapper('POST', '/api/transactions', params, true);
}

