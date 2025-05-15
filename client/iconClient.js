// Generated client for API group icon
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
 * 根据参数动态生成一个SVG格式的日期或文字图标。此接口直接返回 SVG 图像数据。
 * @param {object} params - Request parameters.
 * @returns {Promise<any>} 此接口不返回 JSON。成功时直接返回 image/svg+xml 类型的 SVG 图像数据 (HTTP 200)。失败时可能返回其他 HTTP 错误状态码。
 * @param {string} [params.type] type
 * @param {string} [params.color] color
 * @param {string} [params.date] date
 * @param {string} [params.lang] lang
 * @param {string} [params.weekdayType] weekdayType
 * @param {string} [params.content] content
 * @param {string} [params.id] id
 */
export async function getDynamicIcon(params) {
  return fetchWrapper('GET', '/api/icon/getDynamicIcon', params, false);
}

