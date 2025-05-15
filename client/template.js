// Generated client for API group template
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
 * 将指定 ID 的文档内容保存为一个模板。可以指定模板名称，以及是否覆盖同名模板。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<DocSaveAsTemplateResponse>}
 * @param {string} params.id 要作为模板保存的文档ID。
 * @param {string} params.name 模板的名称。
 * @param {boolean} params.overwrite 如果已存在同名模板，是否覆盖。
 */
export async function docSaveAsTemplate(params) {
  return fetchWrapper('POST', '/api/template/docSaveAsTemplate', params, true);
}

/**
 * 根据给定的模板文件路径和可选的上下文块ID，渲染模板内容。可以指定是否为预览模式。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RenderTemplateResponse>}
 * @param {string} params.path 模板文件的绝对路径。
 * @param {string} params.id 可选的上下文块ID，用于模板内获取该块的信息。
 * @param {boolean} [params.preview] preview
 */
export async function renderTemplate(params) {
  return fetchWrapper('POST', '/api/template/render', params, true);
}

/**
 * 使用 Go 的 Sprig 模板函数库渲染给定的模板字符串。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<RenderSprigResponse>}
 * @param {string} params.template 包含 Sprig 模板语法的字符串。
 */
export async function renderSprig(params) {
  return fetchWrapper('POST', '/api/template/renderSprig', params, true);
}

