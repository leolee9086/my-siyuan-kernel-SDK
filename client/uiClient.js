// Generated client for API group ui
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
 * 重新加载指定的属性视图。通常在属性视图的结构或数据发生变化后调用，以刷新显示。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<ReloadAttributeViewResponse>}
 * @param {string} params.id 要重新加载的属性视图的 ID。
 */
export async function reloadAttributeView(params) {
  return fetchWrapper('POST', '/api/ui/reloadAttributeView', params, true);
}

/**
 * 重新加载文件树。当文档结构发生变化（如创建、删除、移动文档或笔记本）后，调用此接口以刷新文件树显示。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @returns {Promise<ReloadFiletreeResponse>}
 */
export async function reloadFiletree() {
  return fetchWrapper('POST', '/api/ui/reloadFiletree', undefined, true);
}

/**
 * 重新加载指定的 Protyle 编辑器实例。通常在编辑器内容或状态在后端被修改后调用，以刷新前端显示。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<ReloadProtyleResponse>}
 * @param {string} params.id 要重新加载的 Protyle 编辑器实例对应的块 ID 或文档 ID。
 */
export async function reloadProtyle(params) {
  return fetchWrapper('POST', '/api/ui/reloadProtyle', params, true);
}

/**
 * 重新加载标签列表。当标签被创建、删除、重命名或引用发生变化后，调用此接口以刷新标签面板的显示。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @returns {Promise<ReloadTagResponse>}
 */
export async function reloadTag() {
  return fetchWrapper('POST', '/api/ui/reloadTag', undefined, true);
}

/**
 * 触发整个用户界面的重新加载。这是一个比较重的操作，通常在发生可能影响全局UI状态的重大变更后使用，或者作为一种通用的刷新手段。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @returns {Promise<ReloadUIResponse>}
 */
export async function reloadUI() {
  return fetchWrapper('POST', '/api/ui/reloadUI', undefined, true);
}

