// Generated client for API group search
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
 * 在指定的块ID范围、路径、笔记本、类型中查找内容并进行替换。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<FindReplaceResponse>}
 * @param {string} params.k 必需。要查找的关键词。
 * @param {string} params.r 必需。要替换的字符串。
 * @param {Array<string>} params.ids 必需。要进行查找替换操作的块 ID 数组。
 * @param {Array<string>} [params.paths] paths
 * @param {Array<string>} [params.boxes] boxes
 * @param {Record<string,} [params.types] types
 * @param {number} [params.method] method
 * @param {number} [params.orderBy] orderBy
 * @param {number} [params.groupBy] groupBy
 * @param {Record<string,} [params.replaceTypes] replaceTypes
 */
export async function findReplace(params) {
  return fetchWrapper('POST', '/api/search/findReplace', params, true);
}

/**
 * 对资源文件内容进行全文搜索（此功能需要付费订阅）。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<FullTextSearchAssetContentResponse>}
 * @param {string} params.query 必需。搜索查询语句。
 * @param {number} [params.page] page
 * @param {number} [params.pageSize] pageSize
 * @param {Record<string,} [params.types] types
 * @param {number} [params.method] method
 * @param {number} [params.orderBy] orderBy
 */
export async function fullTextSearchAssetContent(params) {
  return fetchWrapper('POST', '/api/search/fullTextSearchAssetContent', params, true);
}

/**
 * 对块内容进行全文搜索，支持多种搜索方式和过滤条件。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<FullTextSearchBlockResponse>}
 * @param {string} params.query 必需。搜索查询语句。
 * @param {number} [params.page] page
 * @param {number} [params.pageSize] pageSize
 * @param {Array<string>} [params.paths] paths
 * @param {Array<string>} [params.boxes] boxes
 * @param {Record<string,} [params.types] types
 * @param {number} [params.method] method
 * @param {number} [params.orderBy] orderBy
 * @param {number} [params.groupBy] groupBy
 */
export async function fullTextSearchBlock(params) {
  return fetchWrapper('POST', '/api/search/fullTextSearchBlock', params, true);
}

/**
 * 获取资源文件内容中，与指定查询相关的片段。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetAssetContentResponse>}
 * @param {string} params.id 必需。资源文件块的 ID。
 * @param {string} params.query 必需。查询关键词。
 * @param {number} params.queryMethod 必需。查询方法：0：关键字，1：查询语法，2：SQL，3：正则表达式。
 */
export async function getAssetContent(params) {
  return fetchWrapper('POST', '/api/search/getAssetContent', params, true);
}

/**
 * 获取指定嵌入块的渲染内容，支持包含其子块或显示面包屑。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetEmbedBlockResponse>}
 * @param {string} params.embedBlockID 必需。嵌入块（通常是 `((块ID))` 引用的块）的 ID。
 * @param {Array<string>} params.includeIDs 必需。要实际嵌入显示的块 ID 数组（通常只包含 embedBlockID，但在特殊情况下可能包含其子块）。
 * @param {number} [params.headingMode] headingMode
 * @param {boolean} [params.breadcrumb] breadcrumb
 */
export async function getEmbedBlock(params) {
  return fetchWrapper('POST', '/api/search/getEmbedBlock', params, true);
}

/**
 * 分页列出在当前工作空间中所有无效的块引用（例如，引用的块已被删除）。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<ListInvalidBlockRefsResponse>}
 * @param {number} [params.page] page
 * @param {number} [params.pageSize] pageSize
 */
export async function listInvalidBlockRefs(params) {
  return fetchWrapper('POST', '/api/search/listInvalidBlockRefs', params, true);
}

/**
 * 根据路径移除指定的模板文件。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RemoveTemplateResponse>}
 * @param {string} params.path 必需。要移除的模板文件的相对路径（相对于模板文件夹）。
 */
export async function removeTemplate(params) {
  return fetchWrapper('POST', '/api/search/removeTemplate', params, true);
}

/**
 * 根据文件名关键词和可选的文件扩展名搜索资源文件。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<SearchAssetResponse>}
 * @param {string} params.k 必需。搜索关键词。
 * @param {Array<string>} [params.exts] exts
 */
export async function searchAsset(params) {
  return fetchWrapper('POST', '/api/search/searchAsset', params, true);
}

/**
 * 在指定的嵌入块（及其可能的子块）中使用 SQL 语句进行内容搜索。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<SearchEmbedBlockResponse>}
 * @param {string} params.embedBlockID 必需。作为搜索范围根的嵌入块 ID。
 * @param {string} params.stmt 必需。用于搜索的 SQL 语句。查询的表名通常为 'blocks'，可查询的字段如 id, content, markdown, type 等。
 * @param {Array<string>} [params.excludeIDs] excludeIDs
 * @param {number} [params.headingMode] headingMode
 * @param {boolean} [params.breadcrumb] breadcrumb
 */
export async function searchEmbedBlock(params) {
  return fetchWrapper('POST', '/api/search/searchEmbedBlock', params, true);
}

/**
 * 在输入引用（例如 `((` 或 `[[`）时，根据关键词动态搜索可能的引用块建议。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<SearchRefBlockResponse>}
 * @param {string} params.id 必需。当前正在编辑的块的 ID。
 * @param {string} params.rootID 必需。当前文档的根块 ID。
 * @param {string} params.k 必需。用户输入的搜索关键词。
 * @param {number} [params.beforeLen] beforeLen
 * @param {boolean} [params.isSquareBrackets] isSquareBrackets
 * @param {boolean} [params.isDatabase] isDatabase
 * @param {any} [params.reqId] reqId
 */
export async function searchRefBlock(params) {
  return fetchWrapper('POST', '/api/search/searchRefBlock', params, true);
}

/**
 * 根据关键词搜索已存在的标签。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<SearchTagResponse>}
 * @param {string} params.k 必需。搜索关键词。
 */
export async function searchTag(params) {
  return fetchWrapper('POST', '/api/search/searchTag', params, true);
}

/**
 * 根据关键词搜索模板（通常是模板文件名或内容）。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<SearchTemplateResponse>}
 * @param {string} params.k 必需。搜索关键词。
 */
export async function searchTemplate(params) {
  return fetchWrapper('POST', '/api/search/searchTemplate', params, true);
}

/**
 * 根据关键词搜索挂件块。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<SearchWidgetResponse>}
 * @param {string} params.k 必需。搜索关键词。
 */
export async function searchWidget(params) {
  return fetchWrapper('POST', '/api/search/searchWidget', params, true);
}

/**
 * 更新指定**查询嵌入块（`query_embed` 类型）**的原始查询语句或脚本内容。此接口专门用于处理查询嵌入块，不适用于普通块的自定义属性更新。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<UpdateEmbedBlockResponse>}
 * @param {string} params.id 必需。要更新的查询嵌入块的 ID。
 * @param {string} params.content 必需。查询嵌入块新的原始 Markdown 内容，通常是 SQL 查询语句或 JavaScript 脚本。
 */
export async function updateEmbedBlock(params) {
  return fetchWrapper('POST', '/api/search/updateEmbedBlock', params, true);
}

