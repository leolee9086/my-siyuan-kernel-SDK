// Generated client for API group filetree
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
 * 更改指定笔记本下，特定路径列表的文档树排序方式。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<ChangeSortResponse>}
 * @param {string} params.notebook 要更改排序的笔记本ID。
 * @param {Array<string>} params.paths 需要调整排序的文档路径列表。这些路径通常是文档在其笔记本内的相对路径。后端会根据这些路径的顺序来更新文档树的排序。
 */
export async function changeSort(params) {
  return fetchWrapper('POST', '/api/filetree/changeSort', params, true);
}

/**
 * 根据用户配置的日记模板创建今日的日记文档。如果今日的日记已存在，则直接返回该日记的信息。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<CreateDailyNoteResponse>}
 * @param {string} params.notebook 要在哪个笔记本下创建日记的ID。
 * @param {string} [params.app] app
 * @param {string} [params.callback] callback
 */
export async function createDailyNote(params) {
  return fetchWrapper('POST', '/api/filetree/createDailyNote', params, true);
}

/**
 * 在指定的笔记本和路径下创建一个新的文档，并可以附带初始Markdown内容和排序信息。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<CreateDocResponse>}
 * @param {string} params.notebook 文档所属的笔记本ID。
 * @param {string} params.path 文档的存储路径 (相对于笔记本根目录，例如 '/folder/documentName')。
 * @param {string} params.title 文档的标题。
 * @param {string} params.md 文档的初始 Markdown 内容。
 * @param {Array<string>} [params.sorts] sorts
 * @param {boolean} [params.listDocTree] listDocTree
 * @param {string} [params.callback] callback
 */
export async function createDoc(params) {
  return fetchWrapper('POST', '/api/filetree/createDoc', params, true);
}

/**
 * 在指定笔记本、路径下，使用提供的Markdown内容创建一个新文档。可以指定父文档ID、新文档ID、标签等。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<CreateDocWithMdResponse>}
 * @param {string} params.notebook 文档所属的笔记本ID。
 * @param {string} params.path 文档的人类可读路径 (HPath)，例如 '/My Notes/New Document'。后端会处理路径中的非法字符和长度限制。
 * @param {string} params.markdown 新文档的Markdown内容。
 * @param {string} [params.parentID] parentID
 * @param {string} [params.id] id
 * @param {string} [params.tags] tags
 * @param {boolean} [params.withMath] withMath
 * @param {string} [params.clippingHref] clippingHref
 * @param {boolean} [params.listDocTree] listDocTree
 * @param {string} [params.callback] callback
 */
export async function createDocWithMd(params) {
  return fetchWrapper('POST', '/api/filetree/createDocWithMd', params, true);
}

/**
 * 将一个源文档的内容转换为一个标题块，并将其插入到目标文档的指定标题块之后或之前。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<Doc2HeadingResponse>}
 * @param {string} params.srcID 要转换的源文档的ID。
 * @param {string} params.targetID 目标文档中，新标题块将插入到其后的那个标题块的ID。如果 after 为 false，则插入其前。
 * @param {boolean} params.after 是否将源文档内容插入到 targetID 块之后 (true) 或之前 (false)。
 */
export async function doc2Heading(params) {
  return fetchWrapper('POST', '/api/filetree/doc2Heading', params, true);
}

/**
 * 复制（克隆）一个指定的文档。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<DuplicateDocResponse>}
 * @param {string} params.id 要复制的源文档的ID。
 * @param {boolean} [params.listDocTree] listDocTree
 * @param {string} [params.callback] callback
 */
export async function duplicateDoc(params) {
  return fetchWrapper('POST', '/api/filetree/duplicateDoc', params, true);
}

/**
 * 获取指定文档（或文档中的一部分内容）的详细信息，包括块内容、结构、属性等。支持多种加载模式和查询参数。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetDocResponse>}
 * @param {string} params.id 要获取的文档或块的ID。
 * @param {number} [params.index] index
 * @param {string} [params.query] query
 * @param {number} [params.queryMethod] queryMethod
 * @param {Record<string,} [params.queryTypes] queryTypes
 * @param {number} [params.mode] mode
 * @param {number} [params.size] size
 * @param {string} [params.startID] startID
 * @param {string} [params.endID] endID
 * @param {boolean} [params.isBacklink] isBacklink
 * @param {Record<string,} [params.originalRefBlockIDs] originalRefBlockIDs
 * @param {boolean} [params.highlight] highlight
 * @param {string} [params.reqId] reqId
 */
export async function getDoc(params) {
  return fetchWrapper('POST', '/api/filetree/getDoc', params, true);
}

/**
 * 根据当前笔记本和全局配置，计算并返回创建新文档时应使用的默认笔记本ID和保存路径 (HPath)。路径支持Go模板。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetDocCreateSavePathResponse>}
 * @param {string} params.notebook 当前操作的笔记本ID。计算默认保存位置时会参考此笔记本的配置及全局配置。
 */
export async function getDocCreateSavePath(params) {
  return fetchWrapper('POST', '/api/filetree/getDocCreateSavePath', params, true);
}

/**
 * 根据文档或块的ID，获取其在笔记本中的完整层级标题路径 (HPath)，例如 '/父文档标题/子文档标题/当前文档标题'。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetFullHPathByIDResponse>}
 * @param {string} params.id 要查询的文档或块的ID。
 */
export async function getFullHPathByID(params) {
  return fetchWrapper('POST', '/api/filetree/getFullHPathByID', params, true);
}

/**
 * 根据文档或块的ID，获取其在笔记本中的人类可读路径 (HPath)，即文件路径形式的标题路径，例如 '/父文档标题/子文档标题/当前文档标题.sy' 的 Sy 文件名部分。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetHPathByIDResponse>}
 * @param {string} params.id 要查询的文档或块的ID。
 */
export async function getHPathByID(params) {
  return fetchWrapper('POST', '/api/filetree/getHPathByID', params, true);
}

/**
 * 根据文档在笔记本中的实际存储路径 (相对于笔记本根目录)，获取其人类可读路径 (HPath)。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetHPathByPathResponse>}
 * @param {string} params.notebook 文档所在的笔记本ID。
 * @param {string} params.path 文档的实际存储路径 (相对于笔记本根目录，例如 '/folderName/documentName.sy')。
 */
export async function getHPathByPath(params) {
  return fetchWrapper('POST', '/api/filetree/getHPathByPath', params, true);
}

/**
 * 根据一组文档的实际存储路径 (包含笔记本ID和文档相对路径)，批量获取它们对应的人类可读路径 (HPath)。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetHPathsByPathsResponse>}
 * @param {Array<GetHPathsByPathsParamsPathsItem>} params.paths 包含笔记本ID和文档路径的对象数组。
 */
export async function getHPathsByPaths(params) {
  return fetchWrapper('POST', '/api/filetree/getHPathsByPaths', params, true);
}

/**
 * 根据文档的人类可读路径 (HPath) 和其所在的笔记本ID，获取所有匹配该路径的文档的ID列表。因为HPath可能不唯一，所以返回的是数组。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetIDsByHPathResponse>}
 * @param {string} params.notebook 文档所在的笔记本ID。
 * @param {string} params.path 要查询的文档的人类可读路径 (HPath)，例如 '/My Notes/Topic'。
 */
export async function getIDsByHPath(params) {
  return fetchWrapper('POST', '/api/filetree/getIDsByHPath', params, true);
}

/**
 * 根据文档或块的ID，获取其在工作空间中的实际存储路径 (相对于笔记本根目录) 和所在的笔记本ID。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetPathByIDResponse>}
 * @param {string} params.id 要查询的文档或块的ID。
 */
export async function getPathByID(params) {
  return fetchWrapper('POST', '/api/filetree/getPathByID', params, true);
}

/**
 * 根据当前笔记本和全局配置，计算并返回创建新块引文档时应使用的默认笔记本ID和保存路径 (HPath)。路径支持Go模板。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetRefCreateSavePathResponse>}
 * @param {string} params.notebook 当前操作的笔记本ID。计算默认保存位置时会参考此笔记本的配置及全局配置。
 */
export async function getRefCreateSavePath(params) {
  return fetchWrapper('POST', '/api/filetree/getRefCreateSavePath', params, true);
}

/**
 * 将源文档中的一个标题块及其后续同级内容，转换为一个新的独立文档。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<Heading2DocResponse>}
 * @param {string} params.srcHeadingID 源文档中要转换为新文档的标题块的ID。
 * @param {string} params.targetNoteBook 新文档将要创建在哪个笔记本的ID。
 * @param {string} [params.targetPath] targetPath
 * @param {string} [params.previousPath] previousPath
 * @param {string} [params.callback] callback
 */
export async function heading2Doc(params) {
  return fetchWrapper('POST', '/api/filetree/heading2Doc', params, true);
}

/**
 * 将源文档中的一个列表项（及其所有子项）转换为一个新的独立文档。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<Li2DocResponse>}
 * @param {string} params.srcListItemID 源文档中要转换为新文档的列表项的ID。
 * @param {string} params.targetNoteBook 新文档将要创建在哪个笔记本的ID。
 * @param {string} [params.targetPath] targetPath
 * @param {string} [params.previousPath] previousPath
 * @param {string} [params.callback] callback
 */
export async function li2Doc(params) {
  return fetchWrapper('POST', '/api/filetree/li2Doc', params, true);
}

/**
 * 列出指定笔记本的文档树结构，支持过滤、排序等。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<ListDocTreeResponse>}
 * @param {string} params.notebook 要列出文档树的笔记本ID。
 * @param {string} params.path 要列出文档树的起始路径 (相对于笔记本根目录，例如 '/folderName')。通常用于列出某个文件夹下的文档结构。
 */
export async function listDocTree(params) {
  return fetchWrapper('POST', '/api/filetree/listDocTree', params, true);
}

/**
 * 获取指定笔记本和路径下的文档及子文件夹列表，支持排序、闪卡过滤和数量限制。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<ListDocsByPathResponse>}
 * @param {string} params.notebook 笔记本ID。
 * @param {string} params.path 要列出文档的路径 (相对于笔记本根目录，例如 '/folderName')。空字符串表示笔记本根目录。
 * @param {number} [params.sort] sort
 * @param {boolean} [params.flashcard] flashcard
 * @param {number} [params.maxListCount] maxListCount
 * @param {boolean} [params.showHidden] showHidden
 * @param {boolean} [params.ignoreMaxListHint] ignoreMaxListHint
 */
export async function listDocsByPath(params) {
  return fetchWrapper('POST', '/api/filetree/listDocsByPath', params, true);
}

/**
 * 将一组源文档（通过其在各自笔记本中的相对路径指定）移动到目标笔记本的指定路径下。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<MoveDocsResponse>}
 * @param {Array<string>} params.fromPaths 要移动的源文档路径数组。每个路径字符串应为 '笔记本ID/文档相对路径.sy' 或 '笔记本ID/文档相对路径' 的形式。后端会处理。例如：['box123/notes/docA.sy', 'box456/folder/docB']
 * @param {string} params.toNotebook 目标笔记本的ID。
 * @param {string} params.toPath 目标路径 (HPath 或实际路径均可，后端会尝试解析)。文档将被移动到此路径下。例如 '/Target Folder' 或 '/Target Folder/NewName.sy' (如果只移动一个文件且想重命名)。
 * @param {string} [params.callback] callback
 */
export async function moveDocs(params) {
  return fetchWrapper('POST', '/api/filetree/moveDocs', params, true);
}

/**
 * 将一组源文档（通过其ID指定）移动到目标文档（通过其ID指定）的目录下或成为其子文档（取决于目标ID是文件夹还是文件）。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<MoveDocsByIDResponse>}
 * @param {Array<string>} params.fromIDs 要移动的源文档ID数组。
 * @param {string} params.toID 目标文档或目录的ID。如果 toID 是一个文档，则 fromIDs 中的文档会成为其子文档（如果内核逻辑支持）；如果 toID 是一个目录（通常是一个文档的HPath的父级），则 fromIDs 中的文档会被移动到该目录下。具体行为需参考内核实现细节。后台实现中，会先通过 toID 获取其 toNotebook 和 toPath，然后调用 model.MoveDocs。
 * @param {string} [params.callback] callback
 */
export async function moveDocsByID(params) {
  return fetchWrapper('POST', '/api/filetree/moveDocsByID', params, true);
}

/**
 * 将指定笔记本中的本地闪念速记（通常是未整理的、直接记录在本地的摘录或想法）移动到配置的闪念速记存放位置。这是一个待改进的旧接口，未来可能基于文档树配置实现。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<MoveLocalShorthandsResponse>}
 * @param {string} params.notebook 要处理闪念速记的笔记本ID。
 * @param {string} [params.path] path
 * @param {string} [params.parentID] parentID
 */
export async function moveLocalShorthands(params) {
  return fetchWrapper('POST', '/api/filetree/moveLocalShorthands', params, true);
}

/**
 * 触发一次全局的文档树刷新和全量索引重建。这是一个耗时操作，请谨慎调用。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @returns {Promise<RefreshFiletreeResponse>}
 */
export async function refreshFiletree() {
  return fetchWrapper('POST', '/api/filetree/refreshFiletree', undefined, true);
}

/**
 * 根据指定的笔记本ID和文档相对路径，移除（删除）该文档。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RemoveDocResponse>}
 * @param {string} params.notebook 文档所在的笔记本ID。
 * @param {string} params.path 要移除的文档的相对路径 (相对于笔记本根目录，例如 '/notes/docToRemove.sy')。
 */
export async function removeDoc(params) {
  return fetchWrapper('POST', '/api/filetree/removeDoc', params, true);
}

/**
 * 根据指定的文档ID，移除（删除）该文档。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RemoveDocByIDResponse>}
 * @param {string} params.id 要移除的文档的ID。
 */
export async function removeDocByID(params) {
  return fetchWrapper('POST', '/api/filetree/removeDocByID', params, true);
}

/**
 * 根据一组复合路径（包含笔记本ID和文档相对路径）批量移除（删除）文档。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RemoveDocsResponse>}
 * @param {Array<string>} params.paths 要移除的文档的复合路径数组。每个路径字符串应为 '笔记本ID/文档相对路径.sy' 或 '笔记本ID/文档相对路径' 的形式。例如：['box123/notes/docA.sy', 'box456/folder/docB']
 */
export async function removeDocs(params) {
  return fetchWrapper('POST', '/api/filetree/removeDocs', params, true);
}

/**
 * 根据指定的文档路径列表（通常是 .sy 文件路径），从搜索引擎中移除这些文档的索引。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RemoveIndexesResponse>}
 * @param {Array<string>} params.paths 需要移除索引的文档绝对路径列表。这些路径通常指向 data 目录下的 .sy 文件，例如 '/data/notebookId/path/to/doc.sy'。
 */
export async function removeIndexes(params) {
  return fetchWrapper('POST', '/api/filetree/removeIndexes', params, true);
}

/**
 * 根据指定的笔记本ID、旧文档相对路径和新标题，重命名该文档。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RenameDocResponse>}
 * @param {string} params.notebook 文档所在的笔记本ID。
 * @param {string} params.path 要重命名的文档的当前相对路径 (相对于笔记本根目录，例如 '/notes/oldName.sy')。
 * @param {string} params.title 文档的新标题 (不需要带 .sy 后缀)。
 */
export async function renameDoc(params) {
  return fetchWrapper('POST', '/api/filetree/renameDoc', params, true);
}

/**
 * 根据指定的文档ID和新标题，重命名该文档。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RenameDocByIDResponse>}
 * @param {string} params.id 要重命名的文档的ID。
 * @param {string} params.title 文档的新标题 (不需要带 .sy 后缀)。
 */
export async function renameDocByID(params) {
  return fetchWrapper('POST', '/api/filetree/renameDocByID', params, true);
}

/**
 * 根据关键词搜索匹配的文档标题和别名。主要用于快速查找文档，不支持全文搜索。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<SearchDocsResponse>}
 * @param {string} params.k 搜索关键词。
 * @param {boolean} [params.flashcard] flashcard
 */
export async function searchDocs(params) {
  return fetchWrapper('POST', '/api/filetree/searchDocs', params, true);
}

/**
 * 根据指定的文档路径列表（通常是 .sy 文件路径），更新或插入这些文档在搜索引擎中的索引。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<UpsertIndexesResponse>}
 * @param {Array<string>} params.paths 需要更新/插入索引的文档绝对路径列表。这些路径通常指向 data 目录下的 .sy 文件，例如 '/data/notebookId/path/to/doc.sy'。
 */
export async function upsertIndexes(params) {
  return fetchWrapper('POST', '/api/filetree/upsertIndexes', params, true);
}

