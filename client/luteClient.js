// Generated client for API group lute
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
 * 将指定ID的块内容导出为标准 Markdown 格式的字符串。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<CopyStdMarkdownResponse>}
 * @param {string} params.id 要导出内容的块的ID
 */
export async function copyStdMarkdown(params) {
  return fetchWrapper('POST', '/api/lute/copyStdMarkdown', params, true);
}

/**
 * 将输入的 HTML 字符串转换为思源笔记的块级 DOM 结构 (仍为HTML字符串，但经过Lute处理)。会处理本地资源路径、空列表项、单列表格转段落等情况。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<Html2BlockDOMResponse>}
 * @param {string} params.dom 要转换的 HTML 字符串
 */
export async function html2BlockDOM(params) {
  return fetchWrapper('POST', '/api/lute/html2BlockDOM', params, true);
}

/**
 * 对传入的块级 DOM 字符串执行 Lute 引擎的 SpinBlockDOM 处理，进行原生渲染相关的优化。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<SpinBlockDOMResponse>}
 * @param {string} params.dom 要处理的块级 DOM 字符串 (HTML 格式)
 */
export async function spinBlockDOM(params) {
  return fetchWrapper('POST', '/api/lute/spinBlockDOM', params, true);
}

