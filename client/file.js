// Generated client for API group file
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
 * 复制工作空间内的单个文件或资源文件。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<CopyFileResponse>}
 * @param {string} params.src 源文件路径。如果是资源文件，则为相对于 assets 目录的路径；如果是普通工作空间文件，则为相对于工作空间根目录的路径。后端会尝试将其解析为绝对路径。注意：此接口不能直接复制目录。后台实现会先尝试将其作为资源文件解析，如果失败则作为工作空间普通文件解析。若要复制普通文件，建议使用 /api/file/globalCopyFiles。 
 * @param {string} params.dest 目标文件绝对路径。
 */
export async function copyFile(params) {
  return fetchWrapper('POST', '/api/file/copyFile', params, true);
}

/**
 * 获取指定路径的文件内容。注意：此接口不通过JSON返回文件内容，而是直接在HTTP响应体中返回文件数据流，Content-Type 根据文件类型确定。因此，zodResponseSchema 仅用于描述可能的错误情况下的JSON响应。成功获取文件时，HTTP状态码为200，响应体为文件内容。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetFileResponse>}
 * @param {string} params.path 要获取内容的文件路径 (相对于工作空间根目录)。
 */
export async function getFile(params) {
  return fetchWrapper('POST', '/api/file/getFile', params, true);
}

/**
 * 根据输入的文件路径，生成一个在目标位置唯一的、不冲突的文件名版本。例如，输入 'assets/image.png'，如果已存在，则可能返回 'assets/image_1.png'。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetUniqueFilenameResponse>}
 * @param {string} params.path 原始文件路径 (通常包含期望的文件名和扩展名)。
 */
export async function getUniqueFilename(params) {
  return fetchWrapper('POST', '/api/file/getUniqueFilename', params, true);
}

/**
 * 将多个源文件复制到指定的目标目录 (相对于工作空间)。源文件路径必须是绝对路径。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<GlobalCopyFilesResponse>}
 * @param {Array<string>} params.srcs 要复制的源文件绝对路径数组。如果任何一个文件不存在，操作将失败。注意：不能是目录。
 * @param {string} params.destDir 目标目录路径 (相对于工作空间根目录)。
 */
export async function globalCopyFiles(params) {
  return fetchWrapper('POST', '/api/file/globalCopyFiles', params, true);
}

/**
 * 上传文件或创建目录。这是一个 multipart/form-data 请求。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<PutFileResponse>}
 * @param {string} params.path 目标文件或目录在工作空间内的相对路径。文件名需要符合规范，否则请求失败。
 * @param {boolean} params.isDir 是否创建目录。如果为 true，则创建目录；如果为 false 或未提供，则上传文件。
 * @param {string} [params.modTime] modTime
 */
export async function putFile(params) {
  return fetchWrapper('POST', '/api/file/putFile', params, true);
}

/**
 * 读取指定目录下的文件和子目录列表。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<ReadDirResponse>}
 * @param {string} params.path 要读取的目录路径 (相对于工作空间根目录)。
 */
export async function readDir(params) {
  return fetchWrapper('POST', '/api/file/readDir', params, true);
}

/**
 * 移除指定路径的文件或目录。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RemoveFileResponse>}
 * @param {string} params.path 要移除的文件或目录路径 (相对于工作空间根目录)。
 */
export async function removeFile(params) {
  return fetchWrapper('POST', '/api/file/removeFile', params, true);
}

/**
 * 重命名指定路径的文件或目录。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RenameFileResponse>}
 * @param {string} params.path 原始文件或目录路径 (相对于工作空间根目录)。
 * @param {string} params.newPath 新的文件或目录路径 (相对于工作空间根目录)。
 */
export async function renameFile(params) {
  return fetchWrapper('POST', '/api/file/renameFile', params, true);
}

