// Generated client for API group notebook
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
 * 批量更改笔记本的显示顺序。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<ChangeSortNotebookResponse>}
 * @param {Array<string>} params.notebooks 按新的期望顺序排列的笔记本 ID 数组。
 */
export async function changeSortNotebook(params) {
  return fetchWrapper('POST', '/api/notebook/changeSortNotebook', params, true);
}

/**
 * 关闭一个指定的笔记本。关闭后，笔记本内容将不再可访问，直到再次打开。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<CloseNotebookResponse>}
 * @param {string} params.notebook 要关闭的笔记本的唯一标识符 (ID)。
 * @param {string} [params.callback] callback
 */
export async function closeNotebook(params) {
  return fetchWrapper('POST', '/api/notebook/closeNotebook', params, true);
}

/**
 * 创建一个新的笔记本。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<CreateNotebookResponse>}
 * @param {string} params.name 新笔记本的名称，不能为空。
 */
export async function createNotebook(params) {
  return fetchWrapper('POST', '/api/notebook/createNotebook', params, true);
}

/**
 * 获取指定笔记本的配置信息。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetNotebookConfResponse>}
 * @param {string} params.notebook 要获取配置的笔记本的唯一标识符 (ID)。
 */
export async function getNotebookConf(params) {
  return fetchWrapper('POST', '/api/notebook/getNotebookConf', params, true);
}

/**
 * 获取指定笔记本的详细信息，包括其配置和统计数据。
 * (Requires authentication, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetNotebookInfoResponse>}
 * @param {string} params.notebook 要获取信息的笔记本的唯一标识符 (ID)。
 */
export async function getNotebookInfo(params) {
  return fetchWrapper('POST', '/api/notebook/getNotebookInfo', params, true);
}

/**
 * 获取当前工作空间中所有笔记本的列表，包含已打开和未打开的笔记本。
 * (Requires authentication)
 * @returns {Promise<LsNotebooksResponse>}
 */
export async function lsNotebooks() {
  return fetchWrapper('POST', '/api/notebook/lsNotebooks', undefined, true);
}

/**
 * 打开一个指定的笔记本。如果笔记本已经是打开状态，此操作可能仅刷新其状态。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<OpenNotebookResponse>}
 * @param {string} params.notebook 要打开的笔记本的唯一标识符 (ID)。
 */
export async function openNotebook(params) {
  return fetchWrapper('POST', '/api/notebook/openNotebook', params, true);
}

/**
 * 删除一个指定的笔记本。此操作会从工作空间移除笔记本及其所有内容。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RemoveNotebookResponse>}
 * @param {string} params.notebook 要删除的笔记本的唯一标识符 (ID)。
 * @param {string} [params.callback] callback
 */
export async function removeNotebook(params) {
  return fetchWrapper('POST', '/api/notebook/removeNotebook', params, true);
}

/**
 * 重命名一个指定的笔记本。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RenameNotebookResponse>}
 * @param {string} params.notebook 要重命名的笔记本的唯一标识符 (ID)。
 * @param {string} params.name 笔记本的新名称，不能为空。
 */
export async function renameNotebook(params) {
  return fetchWrapper('POST', '/api/notebook/renameNotebook', params, true);
}

/**
 * 更新指定笔记本的配置信息。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetNotebookConfResponse>}
 * @param {string} params.notebook 要设置配置的笔记本的唯一标识符 (ID)。
 * @param {SetNotebookConfParamsConf} params.conf 要更新的配置项对象。只提供需要修改的字段。
 * @param {string} [params.conf.name] name
 * @param {string} [params.conf.icon] icon
 * @param {number} [params.conf.sortMode] sortMode
 * @param {string} [params.conf.refCreateSavePath] refCreateSavePath
 * @param {string} [params.conf.docCreateSavePath] docCreateSavePath
 * @param {string} [params.conf.dailyNoteSavePath] dailyNoteSavePath
 * @param {string} [params.conf.dailyNoteTemplatePath] dailyNoteTemplatePath
 */
export async function setNotebookConf(params) {
  return fetchWrapper('POST', '/api/notebook/setNotebookConf', params, true);
}

/**
 * 设置指定笔记本的显示图标。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetNotebookIconResponse>}
 * @param {string} params.notebook 要设置图标的笔记本的唯一标识符 (ID)。
 * @param {string} params.icon 笔记本的新图标，可以是 Emoji 字符或图片的 Base64 编码字符串。
 */
export async function setNotebookIcon(params) {
  return fetchWrapper('POST', '/api/notebook/setNotebookIcon', params, true);
}

