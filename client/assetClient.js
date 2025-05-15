// Generated client for API group asset
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
 * 完全重新索引工作空间中所有资源文件的内容，用于搜索。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @returns {Promise<FullReindexAssetContentResponse>}
 */
export async function fullReindexAssetContent() {
  return fetchWrapper('POST', '/api/asset/fullReindexAssetContent', undefined, true);
}

/**
 * 获取指定文档块所引用的所有资源文件列表。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetDocAssetsResponse>}
 * @param {string} params.id 文档块的 ID
 */
export async function getDocAssets(params) {
  return fetchWrapper('POST', '/api/asset/getDocAssets', params, true);
}

/**
 * 获取指定文档块所引用的所有图片类型资源文件列表。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetDocImageAssetsResponse>}
 * @param {string} params.id 文档块的 ID
 */
export async function getDocImageAssets(params) {
  return fetchWrapper('POST', '/api/asset/getDocImageAssets', params, true);
}

/**
 * 获取指定资源文件的标注信息（通常是 XFDF 格式的 PDF 标注）。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetFileAnnotationResponse>}
 * @param {string} params.path 资源文件的路径 (例如 assets/xxx.pdf)
 */
export async function getFileAnnotation(params) {
  return fetchWrapper('POST', '/api/asset/getFileAnnotation', params, true);
}

/**
 * 获取指定图片资源文件后台 OCR 识别的文本内容。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetImageOCRTextResponse>}
 * @param {string} params.path 图片资源文件的路径 (例如 assets/xxx.png)
 */
export async function getImageOCRText(params) {
  return fetchWrapper('POST', '/api/asset/getImageOCRText', params, true);
}

/**
 * 获取所有在文档中被引用但实际资源文件已不存在的资源路径列表。
 * (Requires authentication)
 * @returns {Promise<GetMissingAssetsResponse>}
 */
export async function getMissingAssets() {
  return fetchWrapper('POST', '/api/asset/getMissingAssets', undefined, true);
}

/**
 * 获取工作空间中存在但未被任何文档引用的资源文件列表（最多返回512条）。
 * (Requires authentication)
 * @returns {Promise<GetUnusedAssetsResponse>}
 */
export async function getUnusedAssets() {
  return fetchWrapper('POST', '/api/asset/getUnusedAssets', undefined, true);
}

/**
 * 将指定的本地文件复制到当前笔记本的 assets 文件夹中，并在指定文档中插入对这些资源的引用。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<InsertLocalAssetsResponse>}
 * @param {Array<string>} params.assetPaths 本地资源文件的绝对路径数组
 * @param {string} params.id 要插入资源引用的目标文档块 ID
 * @param {boolean} [params.isUpload] isUpload
 */
export async function insertLocalAssets(params) {
  return fetchWrapper('POST', '/api/asset/insertLocalAssets', params, true);
}

/**
 * 对指定的图片资源文件执行光学字符识别，并返回识别出的文本及原始 OCR 结果。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<OcrResponse>}
 * @param {string} params.path path
 */
export async function ocr(params) {
  return fetchWrapper('POST', '/api/asset/ocr', params, true);
}

/**
 * 删除工作空间中指定的单个未使用（未被任何文档引用）的资源文件。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RemoveUnusedAssetResponse>}
 * @param {string} params.path path
 */
export async function removeUnusedAsset(params) {
  return fetchWrapper('POST', '/api/asset/removeUnusedAsset', params, true);
}

/**
 * 删除工作空间中所有未被任何文档引用的资源文件。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @returns {Promise<RemoveUnusedAssetsResponse>}
 */
export async function removeUnusedAssets() {
  return fetchWrapper('POST', '/api/asset/removeUnusedAssets', undefined, true);
}

/**
 * 重命名指定的资源文件，并自动更新所有文档中对该资源的引用。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RenameAssetResponse>}
 * @param {string} params.oldPath 资源文件的当前路径 (例如 assets/old_name.png)
 * @param {string} params.newName 资源文件的新名称 (不含路径，例如 new_name.png)
 */
export async function renameAsset(params) {
  return fetchWrapper('POST', '/api/asset/renameAsset', params, true);
}

/**
 * 将资源文件在思源笔记中的相对路径（如 'assets/image.png'）转换为其在文件系统中的绝对路径。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<ResolveAssetPathResponse>}
 * @param {string} params.path 思源笔记中的资源相对路径 (例如 assets/image.png)
 */
export async function resolveAssetPath(params) {
  return fetchWrapper('POST', '/api/asset/resolveAssetPath', params, true);
}

/**
 * 为指定的资源文件（通常是 PDF）保存或更新其标注信息（通常是 XFDF 格式）。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetFileAnnotationResponse>}
 * @param {string} params.path 资源文件的路径 (例如 assets/xxx.pdf)
 * @param {string} params.data 要设置的标注数据 (通常为 XFDF 格式的字符串)
 */
export async function setFileAnnotation(params) {
  return fetchWrapper('POST', '/api/asset/setFileAnnotation', params, true);
}

/**
 * 手动为指定的图片资源文件设置或更新其 OCR 文本内容，并刷新到数据库。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetImageOCRTextResponse>}
 * @param {string} params.path 图片资源文件的路径 (例如 assets/xxx.png)
 * @param {string} params.text 要设置的 OCR 文本内容
 */
export async function setImageOCRText(params) {
  return fetchWrapper('POST', '/api/asset/setImageOCRText', params, true);
}

/**
 * 获取指定资源文件（assets/ 路径）或本地文件（file:/// 路径）的大小、创建及修改时间等元信息。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<StatAssetResponse>}
 * @param {string} params.path 资源文件的 assets/ 路径或本地文件的 file:/// 绝对路径
 */
export async function statAsset(params) {
  return fetchWrapper('POST', '/api/asset/statAsset', params, true);
}

/**
 * 处理文件上传。通常用于将文件上传到服务器的临时目录或直接作为资源插入。参数通过 FormData 传递，如 assetPath (可选，指定保存路径) 和 id (可选，关联的文档ID)。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<UploadResponse>}
 * @param {string} [params.assetPath] assetPath
 * @param {string} [params.id] id
 * @param {any} params.files 通过 FormData 上传的文件对象或文件对象列表，此字段仅用于类型提示，实际通过 FormData 传递
 */
export async function Upload(params) {
  return fetchWrapper('POST', '/api/asset/upload', params, true);
}

/**
 * 将指定文档（及其子文档中）引用的所有本地资源文件上传到用户配置的云存储服务。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<UploadCloudResponse>}
 * @param {string} params.id 文档块的 ID，将上传此文档及其子文档中引用的所有本地资源
 */
export async function uploadCloud(params) {
  return fetchWrapper('POST', '/api/asset/uploadCloud', params, true);
}

