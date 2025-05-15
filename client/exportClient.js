// Generated client for API group export\n// TODO: Implement or import a common HTTP request wrapper function (e.g., fetchWrapper)\n/*\nasync function fetchWrapper(method, endpoint, params, needAuth) {\n  const SiyuanKernelPrefix = typeof window === 'object' ? '' : 'http://127.0.0.1:6806';\n  const url = SiyuanKernelPrefix + endpoint;\n  const options = { method, headers: {} };\n  if (method === 'POST' && params && Object.keys(params).length > 0) { // Only add body if params exist and are not empty\n    options.headers['Content-Type'] = 'application/json';\n    options.body = JSON.stringify(params);\n  }\n  if (needAuth) {\n    // Example: Retrieve and add auth token\n    // const token = localStorage.getItem('siyuan-auth-token'); \n    // if (token) options.headers['Authorization'] = `Token ${token}`;\n    options.headers['Authorization'] = 'Bearer YOUR_TOKEN_HERE'; // Placeholder\n  }\n  const response = await fetch(url, options);\n  if (!response.ok) {\n    let errorData = 'Failed to parse error response';\n    try { errorData = await response.json(); } catch (e) { try {errorData = await response.text(); } catch (e2) { /* ignore secondary error */ }}\n    console.error('API Error:', response.status, errorData); \n    throw new Error(`API Error ${response.status}: ${JSON.stringify(errorData)}`);\n  }\n  const contentType = response.headers.get('content-type');\n  if (contentType && contentType.includes('application/json')) {\n    return response.json();\n  } \n  return response.text(); // Or handle other content types\n}\n*/\n\n/**\n * 将指定的文档内容导出到链滴社区。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要导出到链滴的文档ID
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {null} Data? Data
 */\nexport async function export2Liandi(params) {\n  // Example: return fetchWrapper('POST', '/api/export/export2Liandi', params, true);\n  console.log('Mock call to export2Liandi with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<Export2LiandiResponse>\n}\n\n/**\n * 接收上传的文件，将其保存到临时导出目录，并返回处理后的文件名及可访问路径。通常用于'另存为'等场景。文件通过 FormData 的 'file' 字段上传。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.type 上传文件的MIME类型
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回的数据
 */\nexport async function exportAsFile(params) {\n  // Example: return fetchWrapper('POST', '/api/export/exportAsFile', params, true);\n  console.log('Mock call to exportAsFile with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportAsFileResponse>\n}\n\n/**\n * 将指定的文档导出为 AsciiDoc 格式的压缩文件。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要导出的文档ID
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回的数据
 */\nexport async function exportAsciiDoc(params) {\n  // Example: return fetchWrapper('POST', '/api/export/exportAsciiDoc', params, true);\n  console.log('Mock call to exportAsciiDoc with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportAsciiDocResponse>\n}\n\n/**\n * 将指定的属性视图导出为 CSV 压缩文件。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 属性视图的ID (avID)
 * @param {string} params.blockID 包含该属性视图的块ID
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回的数据
 */\nexport async function exportAttributeView(params) {\n  // Example: return fetchWrapper('POST', '/api/export/exportAttributeView', params, true);\n  console.log('Mock call to exportAttributeView with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportAttributeViewResponse>\n}\n\n/**\n * 导出当前工作空间的全部数据为一个 .zip 压缩文件。\n * (Requires authentication, Requires admin role)\n * @param {any} payload - Error in schema function: {}.describe is not a function\n * @returns {Promise<object>}\n * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回的数据
 */\nexport async function exportData(payload) {\n  // Example: return fetchWrapper('POST', '/api/export/exportData', payload, true);\n  console.log('Mock call to exportData with:', payload);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportDataResponse>\n}\n\n/**\n * 导出指定文件夹内的所有数据为一个压缩包。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.folder 要导出数据的文件夹路径 (相对于工作空间data目录)
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回的数据
 */\nexport async function exportDataInFolder(params) {\n  // Example: return fetchWrapper('POST', '/api/export/exportDataInFolder', params, true);\n  console.log('Mock call to exportDataInFolder with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportDataInFolderResponse>\n}\n\n/**\n * 将指定的文档导出为 DOCX (.docx) 文件。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要导出的文档ID
 * @param {string} params.savePath 服务器上保存 .docx 文件的绝对路径
 * @param {boolean} params.removeAssets 是否移除导出的 Word 文件中包含的资源文件（如图片）的原始文件
 * @param {boolean} [params.merge] merge
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回的数据
 */\nexport async function exportDocx(params) {\n  // Example: return fetchWrapper('POST', '/api/export/exportDocx', params, true);\n  console.log('Mock call to exportDocx with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportDocxResponse>\n}\n\n/**\n * 将指定的文档导出为 EPUB 格式的压缩文件。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要导出的文档ID
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回的数据
 */\nexport async function exportEPUB(params) {\n  // Example: return fetchWrapper('POST', '/api/export/exportEPUB', params, true);\n  console.log('Mock call to exportEPUB with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportEPUBResponse>\n}\n\n/**\n * 将指定文档导出为标准的、包含完整思源主题样式和脚本的 HTML 内容，通常用于生成可独立浏览的 HTML 文件或作为导出 PDF 的中间步骤。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要导出的文档ID
 * @param {boolean} params.pdf 是否为导出 PDF 进行预处理（例如，处理链接和资源路径以适应 PDF 生成环境）
 * @param {string} params.savePath 服务器上保存 HTML 文件的绝对路径 (如果 pdf 为 true，则此路径可能用于临时存储)
 * @param {boolean} [params.keepFold] keepFold
 * @param {boolean} [params.merge] merge
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回的数据
 */\nexport async function exportHTML(params) {\n  // Example: return fetchWrapper('POST', '/api/export/exportHTML', params, true);\n  console.log('Mock call to exportHTML with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportHTMLResponse>\n}\n\n/**\n * 将指定的单个文档导出为 Markdown 文件，并打包成一个 .zip 压缩文件。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要导出的文档ID
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回的数据
 */\nexport async function exportMd(params) {\n  // Example: return fetchWrapper('POST', '/api/export/exportMd', params, true);\n  console.log('Mock call to exportMd with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportMdResponse>\n}\n\n/**\n * 获取指定文档的 Markdown 文本内容，可自定义块引用和嵌入块的处理方式以及是否包含 YAML Front Matter。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要导出 Markdown 内容的文档ID
 * @param {number} [params.refMode] refMode
 * @param {number} [params.embedMode] embedMode
 * @param {boolean} [params.yfm] yfm
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回的数据
 */\nexport async function exportMdContent(params) {\n  // Example: return fetchWrapper('POST', '/api/export/exportMdContent', params, true);\n  console.log('Mock call to exportMdContent with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportMdContentResponse>\n}\n\n/**\n * 获取指定文档渲染后的纯 HTML 内容（不包含完整主题样式和脚本，主要用于内容嵌入）。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要导出 HTML 内容的文档ID
 * @param {string} params.savePath 服务器上保存 HTML 文件的绝对路径 (此参数在后端代码中存在但似乎未实际用于此接口，可能为遗留或通用逻辑)
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回的数据
 */\nexport async function exportMdHTML(params) {\n  // Example: return fetchWrapper('POST', '/api/export/exportMdHTML', params, true);\n  console.log('Mock call to exportMdHTML with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportMdHTMLResponse>\n}\n\n/**\n * 将指定的多个文档分别导出为 Markdown 文件，并打包成一个 .zip 压缩文件。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {Array<string>} params.ids 要导出的文档ID数组
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回的数据
 */\nexport async function exportMds(params) {\n  // Example: return fetchWrapper('POST', '/api/export/exportMds', params, true);\n  console.log('Mock call to exportMds with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportMdsResponse>\n}\n\n/**\n * 将指定的文档导出为 MediaWiki 格式的压缩文件。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要导出的文档ID
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回的数据
 */\nexport async function exportMediaWiki(params) {\n  // Example: return fetchWrapper('POST', '/api/export/exportMediaWiki', params, true);\n  console.log('Mock call to exportMediaWiki with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportMediaWikiResponse>\n}\n\n/**\n * 将指定的笔记本导出为 Markdown 格式的 .zip 压缩文件。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.notebook 要导出的笔记本ID
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回的数据
 */\nexport async function exportNotebookMd(params) {\n  // Example: return fetchWrapper('POST', '/api/export/exportNotebookMd', params, true);\n  console.log('Mock call to exportNotebookMd with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportNotebookMdResponse>\n}\n\n/**\n * 将指定的笔记本导出为思源原生 .sy 格式的压缩包。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要导出的笔记本ID
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回的数据
 */\nexport async function exportNotebookSY(params) {\n  // Example: return fetchWrapper('POST', '/api/export/exportNotebookSY', params, true);\n  console.log('Mock call to exportNotebookSY with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportNotebookSYResponse>\n}\n\n/**\n * 将指定的文档导出为 ODT 格式的压缩文件。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要导出的文档ID
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回的数据
 */\nexport async function exportODT(params) {\n  // Example: return fetchWrapper('POST', '/api/export/exportODT', params, true);\n  console.log('Mock call to exportODT with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportODTResponse>\n}\n\n/**\n * 将指定的文档导出为 OPML 格式的压缩文件。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要导出的文档ID
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回的数据
 */\nexport async function exportOPML(params) {\n  // Example: return fetchWrapper('POST', '/api/export/exportOPML', params, true);\n  console.log('Mock call to exportOPML with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportOPMLResponse>\n}\n\n/**\n * 将指定的文档导出为 Org-mode 格式的压缩文件。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要导出的文档ID
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回的数据
 */\nexport async function exportOrgMode(params) {\n  // Example: return fetchWrapper('POST', '/api/export/exportOrgMode', params, true);\n  console.log('Mock call to exportOrgMode with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportOrgModeResponse>\n}\n\n/**\n * 获取指定文档用于预览的 HTML 内容，包含块属性、类型等更丰富的上下文信息，并处理了块引链接。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要导出预览 HTML 的文档ID
 * @param {boolean} [params.keepFold] keepFold
 * @param {boolean} [params.merge] merge
 * @param {boolean} [params.image] image
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回的数据
 */\nexport async function exportPreviewHTML(params) {\n  // Example: return fetchWrapper('POST', '/api/export/exportPreviewHTML', params, true);\n  console.log('Mock call to exportPreviewHTML with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportPreviewHTMLResponse>\n}\n\n/**\n * 将指定的文档导出为 RTF 格式的压缩文件。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要导出的文档ID
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回的数据
 */\nexport async function exportRTF(params) {\n  // Example: return fetchWrapper('POST', '/api/export/exportRTF', params, true);\n  console.log('Mock call to exportRTF with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportRTFResponse>\n}\n\n/**\n * 将指定的文档导出为 reStructuredText 格式的压缩文件。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要导出的文档ID
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回的数据
 */\nexport async function exportReStructuredText(params) {\n  // Example: return fetchWrapper('POST', '/api/export/exportReStructuredText', params, true);\n  console.log('Mock call to exportReStructuredText with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportReStructuredTextResponse>\n}\n\n/**\n * 将指定路径列表的文件或文件夹打包导出为一个 .zip 压缩文件。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} [params.name] name
 * @param {Array<string>} params.paths 要导出的文件或文件夹在工作空间中的相对路径数组 (相对于data目录)
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回的数据
 */\nexport async function exportResources(params) {\n  // Example: return fetchWrapper('POST', '/api/export/exportResources', params, true);\n  console.log('Mock call to exportResources with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportResourcesResponse>\n}\n\n/**\n * 将指定的单个文档导出为思源原生 .sy 格式的压缩包。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要导出的文档ID
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回的数据
 */\nexport async function exportSY(params) {\n  // Example: return fetchWrapper('POST', '/api/export/exportSY', params, true);\n  console.log('Mock call to exportSY with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportSYResponse>\n}\n\n/**\n * 将传入的 Markdown 内容保存为临时文件，并根据参数生成预览（HTML/PDF/图片），返回预览的 URL。注意：此接口在 `export.go` 中并未完整实现所有参数的逻辑（如 mode, theme, title, type, css, js 均未实际使用），主要实现了 content 的临时保存和URL返回。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.content 要导出预览的 Markdown 内容字符串
 * @param {number} [params.mode] mode
 * @param {string} [params.theme] theme
 * @param {string} [params.title] title
 * @param {string} [params.type] type
 * @param {string} [params.css] css
 * @param {string} [params.js] js
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回的数据
 */\nexport async function exportTempContent(params) {\n  // Example: return fetchWrapper('POST', '/api/export/exportTempContent', params, true);\n  console.log('Mock call to exportTempContent with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportTempContentResponse>\n}\n\n/**\n * 将指定的文档导出为 Textile 格式的压缩文件。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要导出的文档ID
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回的数据
 */\nexport async function exportTextile(params) {\n  // Example: return fetchWrapper('POST', '/api/export/exportTextile', params, true);\n  console.log('Mock call to exportTextile with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportTextileResponse>\n}\n\n/**\n * 获取指定文档的完整 HTML 预览内容，包含标准主题和脚本，可直接用于浏览器展示。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 要获取 HTML 预览的文档ID
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {object} Data 成功时返回的数据
 */\nexport async function exportPreview(params) {\n  // Example: return fetchWrapper('POST', '/api/export/preview', params, true);\n  console.log('Mock call to exportPreview with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportPreviewResponse>\n}\n\n/**\n * 对已生成的用于 PDF 导出的 HTML 文件进行后处理，如添加水印等。通常在调用 exportHTML (pdf=true) 之后使用。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 相关文档的ID (用于日志记录或上下文关联)
 * @param {string} params.path 已生成的 HTML 文件的绝对路径 (该文件将被用于生成或处理 PDF)
 * @param {boolean} [params.merge] merge
 * @param {boolean} params.removeAssets 处理完成后是否移除相关资源文件
 * @param {boolean} params.watermark 是否添加水印
 * @property {number} Code 响应状态码，0 表示成功
 * @property {string} Msg 响应消息
 * @property {null} Data? Data
 */\nexport async function processPDF(params) {\n  // Example: return fetchWrapper('POST', '/api/export/processPDF', params, true);\n  console.log('Mock call to processPDF with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ProcessPDFResponse>\n}\n\n