// Generated client for API group export
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
 * 将指定的文档内容导出到链滴社区。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<Export2LiandiResponse>}
 * @param {string} params.id 要导出到链滴的文档ID
 */
export async function export2Liandi(params) {
  return fetchWrapper('POST', '/api/export/export2Liandi', params, true);
}

/**
 * 接收上传的文件，将其保存到临时导出目录，并返回处理后的文件名及可访问路径。通常用于'另存为'等场景。文件通过 FormData 的 'file' 字段上传。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<ExportAsFileResponse>}
 * @param {string} params.type 上传文件的MIME类型
 */
export async function exportAsFile(params) {
  return fetchWrapper('POST', '/api/export/exportAsFile', params, true);
}

/**
 * 将指定的文档导出为 AsciiDoc 格式的压缩文件。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<ExportAsciiDocResponse>}
 * @param {string} params.id 要导出的文档ID
 */
export async function exportAsciiDoc(params) {
  return fetchWrapper('POST', '/api/export/exportAsciiDoc', params, true);
}

/**
 * 将指定的属性视图导出为 CSV 压缩文件。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<ExportAttributeViewResponse>}
 * @param {string} params.id 属性视图的ID (avID)
 * @param {string} params.blockID 包含该属性视图的块ID
 */
export async function exportAttributeView(params) {
  return fetchWrapper('POST', '/api/export/exportAttributeView', params, true);
}

/**
 * 导出当前工作空间的全部数据为一个 .zip 压缩文件。
 * (Requires authentication, Requires admin role)
 * @returns {Promise<ExportDataResponse>}
 */
export async function exportData() {
  return fetchWrapper('POST', '/api/export/exportData', undefined, true);
}

/**
 * 导出指定文件夹内的所有数据为一个压缩包。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<ExportDataInFolderResponse>}
 * @param {string} params.folder 要导出数据的文件夹路径 (相对于工作空间data目录)
 */
export async function exportDataInFolder(params) {
  return fetchWrapper('POST', '/api/export/exportDataInFolder', params, true);
}

/**
 * 将指定的文档导出为 DOCX (.docx) 文件。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<ExportDocxResponse>}
 * @param {string} params.id 要导出的文档ID
 * @param {string} params.savePath 服务器上保存 .docx 文件的绝对路径
 * @param {boolean} params.removeAssets 是否移除导出的 Word 文件中包含的资源文件（如图片）的原始文件
 * @param {boolean} [params.merge] merge
 */
export async function exportDocx(params) {
  return fetchWrapper('POST', '/api/export/exportDocx', params, true);
}

/**
 * 将指定的文档导出为 EPUB 格式的压缩文件。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<ExportEPUBResponse>}
 * @param {string} params.id 要导出的文档ID
 */
export async function exportEPUB(params) {
  return fetchWrapper('POST', '/api/export/exportEPUB', params, true);
}

/**
 * 将指定文档导出为标准的、包含完整思源主题样式和脚本的 HTML 内容，通常用于生成可独立浏览的 HTML 文件或作为导出 PDF 的中间步骤。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<ExportHTMLResponse>}
 * @param {string} params.id 要导出的文档ID
 * @param {boolean} params.pdf 是否为导出 PDF 进行预处理（例如，处理链接和资源路径以适应 PDF 生成环境）
 * @param {string} params.savePath 服务器上保存 HTML 文件的绝对路径 (如果 pdf 为 true，则此路径可能用于临时存储)
 * @param {boolean} [params.keepFold] keepFold
 * @param {boolean} [params.merge] merge
 */
export async function exportHTML(params) {
  return fetchWrapper('POST', '/api/export/exportHTML', params, true);
}

/**
 * 将指定的单个文档导出为 Markdown 文件，并打包成一个 .zip 压缩文件。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<ExportMdResponse>}
 * @param {string} params.id 要导出的文档ID
 */
export async function exportMd(params) {
  return fetchWrapper('POST', '/api/export/exportMd', params, true);
}

/**
 * 获取指定文档的 Markdown 文本内容，可自定义块引用和嵌入块的处理方式以及是否包含 YAML Front Matter。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<ExportMdContentResponse>}
 * @param {string} params.id 要导出 Markdown 内容的文档ID
 * @param {number} [params.refMode] refMode
 * @param {number} [params.embedMode] embedMode
 * @param {boolean} [params.yfm] yfm
 */
export async function exportMdContent(params) {
  return fetchWrapper('POST', '/api/export/exportMdContent', params, true);
}

/**
 * 获取指定文档渲染后的纯 HTML 内容（不包含完整主题样式和脚本，主要用于内容嵌入）。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<ExportMdHTMLResponse>}
 * @param {string} params.id 要导出 HTML 内容的文档ID
 * @param {string} params.savePath 服务器上保存 HTML 文件的绝对路径 (此参数在后端代码中存在但似乎未实际用于此接口，可能为遗留或通用逻辑)
 */
export async function exportMdHTML(params) {
  return fetchWrapper('POST', '/api/export/exportMdHTML', params, true);
}

/**
 * 将指定的多个文档分别导出为 Markdown 文件，并打包成一个 .zip 压缩文件。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<ExportMdsResponse>}
 * @param {Array<string>} params.ids 要导出的文档ID数组
 */
export async function exportMds(params) {
  return fetchWrapper('POST', '/api/export/exportMds', params, true);
}

/**
 * 将指定的文档导出为 MediaWiki 格式的压缩文件。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<ExportMediaWikiResponse>}
 * @param {string} params.id 要导出的文档ID
 */
export async function exportMediaWiki(params) {
  return fetchWrapper('POST', '/api/export/exportMediaWiki', params, true);
}

/**
 * 将指定的笔记本导出为 Markdown 格式的 .zip 压缩文件。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<ExportNotebookMdResponse>}
 * @param {string} params.notebook 要导出的笔记本ID
 */
export async function exportNotebookMd(params) {
  return fetchWrapper('POST', '/api/export/exportNotebookMd', params, true);
}

/**
 * 将指定的笔记本导出为思源原生 .sy 格式的压缩包。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<ExportNotebookSYResponse>}
 * @param {string} params.id 要导出的笔记本ID
 */
export async function exportNotebookSY(params) {
  return fetchWrapper('POST', '/api/export/exportNotebookSY', params, true);
}

/**
 * 将指定的文档导出为 ODT 格式的压缩文件。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<ExportODTResponse>}
 * @param {string} params.id 要导出的文档ID
 */
export async function exportODT(params) {
  return fetchWrapper('POST', '/api/export/exportODT', params, true);
}

/**
 * 将指定的文档导出为 OPML 格式的压缩文件。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<ExportOPMLResponse>}
 * @param {string} params.id 要导出的文档ID
 */
export async function exportOPML(params) {
  return fetchWrapper('POST', '/api/export/exportOPML', params, true);
}

/**
 * 将指定的文档导出为 Org-mode 格式的压缩文件。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<ExportOrgModeResponse>}
 * @param {string} params.id 要导出的文档ID
 */
export async function exportOrgMode(params) {
  return fetchWrapper('POST', '/api/export/exportOrgMode', params, true);
}

/**
 * 获取指定文档用于预览的 HTML 内容，包含块属性、类型等更丰富的上下文信息，并处理了块引链接。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<ExportPreviewHTMLResponse>}
 * @param {string} params.id 要导出预览 HTML 的文档ID
 * @param {boolean} [params.keepFold] keepFold
 * @param {boolean} [params.merge] merge
 * @param {boolean} [params.image] image
 */
export async function exportPreviewHTML(params) {
  return fetchWrapper('POST', '/api/export/exportPreviewHTML', params, true);
}

/**
 * 将指定的文档导出为 RTF 格式的压缩文件。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<ExportRTFResponse>}
 * @param {string} params.id 要导出的文档ID
 */
export async function exportRTF(params) {
  return fetchWrapper('POST', '/api/export/exportRTF', params, true);
}

/**
 * 将指定的文档导出为 reStructuredText 格式的压缩文件。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<ExportReStructuredTextResponse>}
 * @param {string} params.id 要导出的文档ID
 */
export async function exportReStructuredText(params) {
  return fetchWrapper('POST', '/api/export/exportReStructuredText', params, true);
}

/**
 * 将指定路径列表的文件或文件夹打包导出为一个 .zip 压缩文件。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<ExportResourcesResponse>}
 * @param {string} [params.name] name
 * @param {Array<string>} params.paths 要导出的文件或文件夹在工作空间中的相对路径数组 (相对于data目录)
 */
export async function exportResources(params) {
  return fetchWrapper('POST', '/api/export/exportResources', params, true);
}

/**
 * 将指定的单个文档导出为思源原生 .sy 格式的压缩包。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<ExportSYResponse>}
 * @param {string} params.id 要导出的文档ID
 */
export async function exportSY(params) {
  return fetchWrapper('POST', '/api/export/exportSY', params, true);
}

/**
 * 将传入的 Markdown 内容保存为临时文件，并根据参数生成预览（HTML/PDF/图片），返回预览的 URL。注意：此接口在 `export.go` 中并未完整实现所有参数的逻辑（如 mode, theme, title, type, css, js 均未实际使用），主要实现了 content 的临时保存和URL返回。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<ExportTempContentResponse>}
 * @param {string} params.content 要导出预览的 Markdown 内容字符串
 * @param {number} [params.mode] mode
 * @param {string} [params.theme] theme
 * @param {string} [params.title] title
 * @param {string} [params.type] type
 * @param {string} [params.css] css
 * @param {string} [params.js] js
 */
export async function exportTempContent(params) {
  return fetchWrapper('POST', '/api/export/exportTempContent', params, true);
}

/**
 * 将指定的文档导出为 Textile 格式的压缩文件。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<ExportTextileResponse>}
 * @param {string} params.id 要导出的文档ID
 */
export async function exportTextile(params) {
  return fetchWrapper('POST', '/api/export/exportTextile', params, true);
}

/**
 * 获取指定文档的完整 HTML 预览内容，包含标准主题和脚本，可直接用于浏览器展示。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<ExportPreviewResponse>}
 * @param {string} params.id 要获取 HTML 预览的文档ID
 */
export async function exportPreview(params) {
  return fetchWrapper('POST', '/api/export/preview', params, true);
}

/**
 * 对已生成的用于 PDF 导出的 HTML 文件进行后处理，如添加水印等。通常在调用 exportHTML (pdf=true) 之后使用。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<ProcessPDFResponse>}
 * @param {string} params.id 相关文档的ID (用于日志记录或上下文关联)
 * @param {string} params.path 已生成的 HTML 文件的绝对路径 (该文件将被用于生成或处理 PDF)
 * @param {boolean} [params.merge] merge
 * @param {boolean} params.removeAssets 处理完成后是否移除相关资源文件
 * @param {boolean} params.watermark 是否添加水印
 */
export async function processPDF(params) {
  return fetchWrapper('POST', '/api/export/processPDF', params, true);
}

