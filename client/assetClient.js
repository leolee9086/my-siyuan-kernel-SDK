// Generated client for API group asset\n// TODO: Implement or import a common HTTP request wrapper function (e.g., fetchWrapper)\n/*\nasync function fetchWrapper(method, endpoint, params, needAuth) {\n  const SiyuanKernelPrefix = typeof window === 'object' ? '' : 'http://127.0.0.1:6806';\n  const url = SiyuanKernelPrefix + endpoint;\n  const options = { method, headers: {} };\n  if (method === 'POST' && params && Object.keys(params).length > 0) { // Only add body if params exist and are not empty\n    options.headers['Content-Type'] = 'application/json';\n    options.body = JSON.stringify(params);\n  }\n  if (needAuth) {\n    // Example: Retrieve and add auth token\n    // const token = localStorage.getItem('siyuan-auth-token'); \n    // if (token) options.headers['Authorization'] = `Token ${token}`;\n    options.headers['Authorization'] = 'Bearer YOUR_TOKEN_HERE'; // Placeholder\n  }\n  const response = await fetch(url, options);\n  if (!response.ok) {\n    let errorData = 'Failed to parse error response';\n    try { errorData = await response.json(); } catch (e) { try {errorData = await response.text(); } catch (e2) { /* ignore secondary error */ }}\n    console.error('API Error:', response.status, errorData); \n    throw new Error(`API Error ${response.status}: ${JSON.stringify(errorData)}`);\n  }\n  const contentType = response.headers.get('content-type');\n  if (contentType && contentType.includes('application/json')) {\n    return response.json();\n  } \n  return response.text(); // Or handle other content types\n}\n*/\n\n/**\n * 完全重新索引工作空间中所有资源文件的内容，用于搜索。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @returns {Promise<object>}\n * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {any} Data Data
 */\nexport async function fullReindexAssetContent() {\n  // Example: return fetchWrapper('POST', '/api/asset/fullReindexAssetContent', undefined, true);\n  console.log('Mock call to fullReindexAssetContent with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<FullReindexAssetContentResponse>\n}\n\n/**\n * 获取指定文档块所引用的所有资源文件列表。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 文档块的 ID
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {any} Data 资源文件对象数组，具体结构未定义
 */\nexport async function getDocAssets(params) {\n  // Example: return fetchWrapper('POST', '/api/asset/getDocAssets', params, true);\n  console.log('Mock call to getDocAssets with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetDocAssetsResponse>\n}\n\n/**\n * 获取指定文档块所引用的所有图片类型资源文件列表。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 文档块的 ID
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {any} Data 图片资源文件对象数组，具体结构未定义
 */\nexport async function getDocImageAssets(params) {\n  // Example: return fetchWrapper('POST', '/api/asset/getDocImageAssets', params, true);\n  console.log('Mock call to getDocImageAssets with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetDocImageAssetsResponse>\n}\n\n/**\n * 获取指定资源文件的标注信息（通常是 XFDF 格式的 PDF 标注）。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.path 资源文件的路径 (例如 assets/xxx.pdf)
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function getFileAnnotation(params) {\n  // Example: return fetchWrapper('POST', '/api/asset/getFileAnnotation', params, true);\n  console.log('Mock call to getFileAnnotation with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetFileAnnotationResponse>\n}\n\n/**\n * 获取指定图片资源文件后台 OCR 识别的文本内容。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.path 图片资源文件的路径 (例如 assets/xxx.png)
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function getImageOCRText(params) {\n  // Example: return fetchWrapper('POST', '/api/asset/getImageOCRText', params, true);\n  console.log('Mock call to getImageOCRText with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetImageOCRTextResponse>\n}\n\n/**\n * 获取所有在文档中被引用但实际资源文件已不存在的资源路径列表。\n * (Requires authentication)\n * @returns {Promise<object>}\n * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function getMissingAssets() {\n  // Example: return fetchWrapper('POST', '/api/asset/getMissingAssets', undefined, true);\n  console.log('Mock call to getMissingAssets with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetMissingAssetsResponse>\n}\n\n/**\n * 获取工作空间中存在但未被任何文档引用的资源文件列表（最多返回512条）。\n * (Requires authentication)\n * @returns {Promise<object>}\n * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function getUnusedAssets() {\n  // Example: return fetchWrapper('POST', '/api/asset/getUnusedAssets', undefined, true);\n  console.log('Mock call to getUnusedAssets with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetUnusedAssetsResponse>\n}\n\n/**\n * 将指定的本地文件复制到当前笔记本的 assets 文件夹中，并在指定文档中插入对这些资源的引用。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {Array<string>} params.assetPaths 本地资源文件的绝对路径数组
 * @param {string} params.id 要插入资源引用的目标文档块 ID
 * @param {boolean} [params.isUpload] isUpload
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function insertLocalAssets(params) {\n  // Example: return fetchWrapper('POST', '/api/asset/insertLocalAssets', params, true);\n  console.log('Mock call to insertLocalAssets with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<InsertLocalAssetsResponse>\n}\n\n/**\n * 对指定的图片资源文件执行光学字符识别，并返回识别出的文本及原始 OCR 结果。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.path path
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function ocr(params) {\n  // Example: return fetchWrapper('POST', '/api/asset/ocr', params, true);\n  console.log('Mock call to ocr with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<OcrResponse>\n}\n\n/**\n * 删除工作空间中指定的单个未使用（未被任何文档引用）的资源文件。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.path path
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function removeUnusedAsset(params) {\n  // Example: return fetchWrapper('POST', '/api/asset/removeUnusedAsset', params, true);\n  console.log('Mock call to removeUnusedAsset with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RemoveUnusedAssetResponse>\n}\n\n/**\n * 删除工作空间中所有未被任何文档引用的资源文件。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @returns {Promise<object>}\n * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function removeUnusedAssets() {\n  // Example: return fetchWrapper('POST', '/api/asset/removeUnusedAssets', undefined, true);\n  console.log('Mock call to removeUnusedAssets with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RemoveUnusedAssetsResponse>\n}\n\n/**\n * 重命名指定的资源文件，并自动更新所有文档中对该资源的引用。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.oldPath 资源文件的当前路径 (例如 assets/old_name.png)
 * @param {string} params.newName 资源文件的新名称 (不含路径，例如 new_name.png)
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function renameAsset(params) {\n  // Example: return fetchWrapper('POST', '/api/asset/renameAsset', params, true);\n  console.log('Mock call to renameAsset with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RenameAssetResponse>\n}\n\n/**\n * 将资源文件在思源笔记中的相对路径（如 'assets/image.png'）转换为其在文件系统中的绝对路径。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.path 思源笔记中的资源相对路径 (例如 assets/image.png)
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {string} Data 资源文件在文件系统中的绝对路径
 */\nexport async function resolveAssetPath(params) {\n  // Example: return fetchWrapper('POST', '/api/asset/resolveAssetPath', params, true);\n  console.log('Mock call to resolveAssetPath with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ResolveAssetPathResponse>\n}\n\n/**\n * 为指定的资源文件（通常是 PDF）保存或更新其标注信息（通常是 XFDF 格式）。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.path 资源文件的路径 (例如 assets/xxx.pdf)
 * @param {string} params.data 要设置的标注数据 (通常为 XFDF 格式的字符串)
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {any} Data Data
 */\nexport async function setFileAnnotation(params) {\n  // Example: return fetchWrapper('POST', '/api/asset/setFileAnnotation', params, true);\n  console.log('Mock call to setFileAnnotation with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetFileAnnotationResponse>\n}\n\n/**\n * 手动为指定的图片资源文件设置或更新其 OCR 文本内容，并刷新到数据库。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.path 图片资源文件的路径 (例如 assets/xxx.png)
 * @param {string} params.text 要设置的 OCR 文本内容
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {any} Data Data
 */\nexport async function setImageOCRText(params) {\n  // Example: return fetchWrapper('POST', '/api/asset/setImageOCRText', params, true);\n  console.log('Mock call to setImageOCRText with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetImageOCRTextResponse>\n}\n\n/**\n * 获取指定资源文件（assets/ 路径）或本地文件（file:/// 路径）的大小、创建及修改时间等元信息。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.path 资源文件的 assets/ 路径或本地文件的 file:/// 绝对路径
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function statAsset(params) {\n  // Example: return fetchWrapper('POST', '/api/asset/statAsset', params, true);\n  console.log('Mock call to statAsset with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<StatAssetResponse>\n}\n\n/**\n * 处理文件上传。通常用于将文件上传到服务器的临时目录或直接作为资源插入。参数通过 FormData 传递，如 assetPath (可选，指定保存路径) 和 id (可选，关联的文档ID)。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {any} payload - ERROR: API def Upload Request returns z.object() directly.\n * @returns {Promise<object>}\n * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function Upload(payload) {\n  // Example: return fetchWrapper('POST', '/api/asset/upload', payload, true);\n  console.log('Mock call to Upload with:', payload);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<UploadResponse>\n}\n\n/**\n * 将指定文档（及其子文档中）引用的所有本地资源文件上传到用户配置的云存储服务。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 文档块的 ID，将上传此文档及其子文档中引用的所有本地资源
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {any} Data Data
 */\nexport async function uploadCloud(params) {\n  // Example: return fetchWrapper('POST', '/api/asset/uploadCloud', params, true);\n  console.log('Mock call to uploadCloud with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<UploadCloudResponse>\n}\n\n