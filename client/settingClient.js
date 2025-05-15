// Generated client for API group setting
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
 * 将指定的关键字列表添加到虚拟块引用的全局排除列表中。这些关键字将不会用于生成虚拟引用。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<AddVirtualBlockRefExcludeResponse>}
 * @param {Array<string>} params.keywords 要添加到排除列表的关键字数组。
 */
export async function addVirtualBlockRefExclude(params) {
  return fetchWrapper('POST', '/api/setting/addVirtualBlockRefExclude', params, true);
}

/**
 * 将指定的关键字列表添加到虚拟块引用的全局包含列表中。只有这些关键字才可能用于生成虚拟引用（如果全局虚拟引用开关已打开）。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<AddVirtualBlockRefIncludeResponse>}
 * @param {Array<string>} params.keywords 要添加到包含列表的关键字数组。
 */
export async function addVirtualBlockRefInclude(params) {
  return fetchWrapper('POST', '/api/setting/addVirtualBlockRefInclude', params, true);
}

/**
 * 刷新并获取当前登录的思源云端账户信息。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetCloudUserResponse>}
 * @param {string} [params.token] token
 */
export async function getCloudUser(params) {
  return fetchWrapper('POST', '/api/setting/getCloudUser', params, true);
}

/**
 * 获取当前的发布服务配置信息，包括端口和具体的发布设置。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @returns {Promise<GetPublishResponse>}
 */
export async function getPublish() {
  return fetchWrapper('POST', '/api/setting/getPublish', undefined, true);
}

/**
 * 使用令牌和两步验证码完成云端用户的登录过程。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<Login2faCloudUserResponse>}
 * @param {string} params.token 登录过程中的临时令牌。
 * @param {string} params.code 6位数字的两步验证码。
 */
export async function login2faCloudUser(params) {
  return fetchWrapper('POST', '/api/setting/login2faCloudUser', params, true);
}

/**
 * 登出当前已登录的思源云端账户。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @returns {Promise<LogoutCloudUserResponse>}
 */
export async function logoutCloudUser() {
  return fetchWrapper('POST', '/api/setting/logoutCloudUser', undefined, true);
}

/**
 * 清除并重建虚拟块引用的缓存。当虚拟引用的相关配置（如包含/排除列表、编辑器中的开关）发生变化后，可能需要调用此接口。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @returns {Promise<RefreshVirtualBlockRefResponse>}
 */
export async function refreshVirtualBlockRef() {
  return fetchWrapper('POST', '/api/setting/refreshVirtualBlockRef', undefined, true);
}

/**
 * 更新AI相关的配置，主要针对OpenAI服务。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetAIResponse>}
 * @param {SetAIParamsOpenAI} params.openAI OpenAI 相关配置。
 * @param {string} [params.openAI.apiKey] apiKey
 * @param {number} [params.openAI.apiTimeout] apiTimeout
 * @param {string} [params.openAI.apiProxy] apiProxy
 * @param {string} [params.openAI.apiModel] apiModel
 * @param {number} [params.openAI.apiMaxTokens] apiMaxTokens
 * @param {number} [params.openAI.apiTemperature] apiTemperature
 * @param {number} [params.openAI.apiMaxContexts] apiMaxContexts
 * @param {string} [params.openAI.apiBaseURL] apiBaseURL
 * @param {string} [params.openAI.apiUserAgent] apiUserAgent
 * @param {string} [params.openAI.apiProvider] apiProvider
 * @param {string} [params.openAI.apiVersion] apiVersion
 */
export async function setAI(params) {
  return fetchWrapper('POST', '/api/setting/setAI', params, true);
}

/**
 * 更新用户账户相关的显示配置。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetAccountResponse>}
 * @param {boolean} [params.displayTitle] displayTitle
 * @param {boolean} [params.displayVIP] displayVIP
 */
export async function setAccount(params) {
  return fetchWrapper('POST', '/api/setting/setAccount', params, true);
}

/**
 * 更新应用的外观相关配置，如主题、字体、语言等。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetAppearanceResponse>}
 * @param {number} [params.mode] mode
 * @param {string} [params.themeDark] themeDark
 * @param {string} [params.themeLight] themeLight
 * @param {Array<string>} [params.darkThemes] darkThemes
 * @param {Array<string>} [params.lightThemes] lightThemes
 * @param {Array<string>} [params.icons] icons
 * @param {string} [params.lang] lang
 * @param {string} [params.codeFontFamily] codeFontFamily
 * @param {number} [params.fontSize] fontSize
 * @param {string} [params.fontFamily] fontFamily
 * @param {boolean} [params.hideStatusBar] hideStatusBar
 * @param {string} [params.customCSS] customCSS
 */
export async function setAppearance(params) {
  return fetchWrapper('POST', '/api/setting/setAppearance', params, true);
}

/**
 * 更新与集市相关的配置。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetBazaarResponse>}
 * @param {boolean} [params.trust] trust
 * @param {boolean} [params.petalDisabled] petalDisabled
 */
export async function setBazaar(params) {
  return fetchWrapper('POST', '/api/setting/setBazaar', params, true);
}

/**
 * 更新编辑器相关的各种配置。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetEditorResponse>}
 * @param {boolean} [params.allowHTMLBLockScript] allowHTMLBLockScript
 * @param {number} [params.fontSize] fontSize
 * @param {boolean} [params.fontSizeScrollZoom] fontSizeScrollZoom
 * @param {string} [params.fontFamily] fontFamily
 * @param {boolean} [params.codeSyntaxHighlightLineNum] codeSyntaxHighlightLineNum
 * @param {number} [params.codeTabSpaces] codeTabSpaces
 * @param {boolean} [params.codeLineWrap] codeLineWrap
 * @param {boolean} [params.codeLigatures] codeLigatures
 * @param {boolean} [params.displayBookmarkIcon] displayBookmarkIcon
 * @param {boolean} [params.displayNetImgMark] displayNetImgMark
 * @param {number} [params.generateHistoryInterval] generateHistoryInterval
 * @param {number} [params.historyRetentionDays] historyRetentionDays
 * @param {Array<string>} [params.emoji] emoji
 * @param {boolean} [params.virtualBlockRef] virtualBlockRef
 * @param {string} [params.virtualBlockRefExclude] virtualBlockRefExclude
 * @param {string} [params.virtualBlockRefInclude] virtualBlockRefInclude
 * @param {number} [params.blockRefDynamicAnchorTextMaxLen] blockRefDynamicAnchorTextMaxLen
 * @param {string} [params.plantUMLServePath] plantUMLServePath
 * @param {boolean} [params.fullWidth] fullWidth
 * @param {string} [params.katexMacros] katexMacros
 * @param {boolean} [params.readOnly] readOnly
 * @param {boolean} [params.embedBlockBreadcrumb] embedBlockBreadcrumb
 * @param {boolean} [params.listLogicalOutdent] listLogicalOutdent
 * @param {boolean} [params.listItemDotNumberClickFocus] listItemDotNumberClickFocus
 * @param {number} [params.floatWindowMode] floatWindowMode
 * @param {number} [params.dynamicLoadBlocks] dynamicLoadBlocks
 * @param {boolean} [params.justify] justify
 * @param {boolean} [params.rtl] rtl
 * @param {boolean} [params.spellcheck] spellcheck
 * @param {boolean} [params.onlySearchForDoc] onlySearchForDoc
 * @param {number} [params.backlinkExpandCount] backlinkExpandCount
 * @param {number} [params.backmentionExpandCount] backmentionExpandCount
 * @param {boolean} [params.backlinkContainChildren] backlinkContainChildren
 * @param {any} [params.markdown] markdown
 */
export async function setEditor(params) {
  return fetchWrapper('POST', '/api/setting/setEditor', params, true);
}

/**
 * 单独设置整个编辑器的只读状态。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetEditorReadOnlyResponse>}
 * @param {boolean} params.readonly 是否将编辑器设置为只读模式。
 */
export async function setEditorReadOnly(params) {
  return fetchWrapper('POST', '/api/setting/setEditorReadOnly', params, true);
}

/**
 * 更新编辑器配置中的常用表情列表。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetEmojiResponse>}
 * @param {Array<string>} params.emoji 新的常用表情符号列表。
 */
export async function setEmoji(params) {
  return fetchWrapper('POST', '/api/setting/setEmoji', params, true);
}

/**
 * 更新与导出功能相关的配置。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetExportResponse>}
 * @param {boolean} [params.paragraphBeginningSpace] paragraphBeginningSpace
 * @param {boolean} [params.addTitle] addTitle
 * @param {number} [params.blockRefMode] blockRefMode
 * @param {number} [params.blockEmbedMode] blockEmbedMode
 * @param {string} [params.blockRefTextLeft] blockRefTextLeft
 * @param {string} [params.blockRefTextRight] blockRefTextRight
 * @param {string} [params.tagOpenMarker] tagOpenMarker
 * @param {string} [params.tagCloseMarker] tagCloseMarker
 * @param {number} [params.fileAnnotationRefMode] fileAnnotationRefMode
 * @param {string} [params.pandocBin] pandocBin
 * @param {boolean} [params.markdownYFM] markdownYFM
 * @param {boolean} [params.inlineMemo] inlineMemo
 * @param {string} [params.pdfFooter] pdfFooter
 * @param {string} [params.docxTemplate] docxTemplate
 * @param {string} [params.pdfWatermarkStr] pdfWatermarkStr
 * @param {string} [params.pdfWatermarkDesc] pdfWatermarkDesc
 * @param {string} [params.imageWatermarkStr] imageWatermarkStr
 * @param {string} [params.imageWatermarkDesc] imageWatermarkDesc
 */
export async function setExport(params) {
  return fetchWrapper('POST', '/api/setting/setExport', params, true);
}

/**
 * 更新文件树（文档列表）相关的配置。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetFiletreeResponse>}
 * @param {boolean} [params.alwaysSelectOpenedFile] alwaysSelectOpenedFile
 * @param {boolean} [params.openFilesUseCurrentTab] openFilesUseCurrentTab
 * @param {string} [params.refCreateSaveBox] refCreateSaveBox
 * @param {string} [params.refCreateSavePath] refCreateSavePath
 * @param {string} [params.docCreateSaveBox] docCreateSaveBox
 * @param {string} [params.docCreateSavePath] docCreateSavePath
 * @param {number} [params.maxListCount] maxListCount
 * @param {number} [params.maxOpenTabCount] maxOpenTabCount
 * @param {boolean} [params.allowCreateDeeper] allowCreateDeeper
 * @param {boolean} [params.removeDocWithoutConfirm] removeDocWithoutConfirm
 * @param {boolean} [params.closeTabsOnStart] closeTabsOnStart
 * @param {boolean} [params.useSingleLineSave] useSingleLineSave
 * @param {number} [params.sort] sort
 */
export async function setFiletree(params) {
  return fetchWrapper('POST', '/api/setting/setFiletree', params, true);
}

/**
 * 更新与闪卡（FSRS算法）相关的配置。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetFlashcardResponse>}
 * @param {number} [params.newCardLimit] newCardLimit
 * @param {number} [params.reviewCardLimit] reviewCardLimit
 * @param {number} [params.requestRetention] requestRetention
 * @param {number} [params.maximumInterval] maximumInterval
 * @param {number} [params.easyBonus] easyBonus
 * @param {number} [params.hardInterval] hardInterval
 * @param {number} [params.lapseInterval] lapseInterval
 * @param {number} [params.againInterval] againInterval
 */
export async function setFlashcard(params) {
  return fetchWrapper('POST', '/api/setting/setFlashcard', params, true);
}

/**
 * 更新用户自定义的快捷键映射。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetKeymapResponse>}
 * @param {SetKeymapParamsData} params.data 包含各类快捷键映射的对象。
 * @param {Record<string,} [params.data.editor] editor
 * @param {Record<string,} [params.data.protyleIR] protyleIR
 * @param {Record<string,} [params.data.protyleSV] protyleSV
 * @param {Record<string,} [params.data.protyleWYSIWYG] protyleWYSIWYG
 * @param {Record<string,} [params.data.fileTree] fileTree
 * @param {Record<string,} [params.data.notebook] notebook
 * @param {Record<string,} [params.data.global] global
 */
export async function setKeymap(params) {
  return fetchWrapper('POST', '/api/setting/setKeymap', params, true);
}

/**
 * 更新发布服务的配置，并尝试根据新配置初始化（或重启）发布服务。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetPublishResponse>}
 * @param {boolean} params.enable 是否启用发布服务。
 * @param {number} params.port 发布服务监听的端口号。
 * @param {SetPublishParamsAuth} params.auth Basic 认证配置。
 * @param {boolean} params.auth.enable 是否启用 Basic 认证。
 * @param {Array<SetPublishParamsAuthAccountsItem>} params.auth.accounts Basic 认证账户列表。
 */
export async function setPublish(params) {
  return fetchWrapper('POST', '/api/setting/setPublish', params, true);
}

/**
 * 更新与搜索功能相关的配置，部分配置更改可能触发重建索引。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetSearchResponse>}
 * @param {boolean} [params.document] document
 * @param {boolean} [params.heading] heading
 * @param {boolean} [params.list] list
 * @param {boolean} [params.listItem] listItem
 * @param {boolean} [params.codeBlock] codeBlock
 * @param {boolean} [params.mathBlock] mathBlock
 * @param {boolean} [params.table] table
 * @param {boolean} [params.blockquote] blockquote
 * @param {boolean} [params.superBlock] superBlock
 * @param {boolean} [params.paragraph] paragraph
 * @param {boolean} [params.htmlBlock] htmlBlock
 * @param {boolean} [params.embedBlock] embedBlock
 * @param {boolean} [params.databaseBlock] databaseBlock
 * @param {boolean} [params.audioBlock] audioBlock
 * @param {boolean} [params.videoBlock] videoBlock
 * @param {boolean} [params.iframeBlock] iframeBlock
 * @param {boolean} [params.widgetBlock] widgetBlock
 * @param {number} [params.limit] limit
 * @param {boolean} [params.caseSensitive] caseSensitive
 * @param {boolean} [params.name] name
 * @param {boolean} [params.alias] alias
 * @param {boolean} [params.memo] memo
 * @param {boolean} [params.ial] ial
 * @param {boolean} [params.indexAssetPath] indexAssetPath
 * @param {boolean} [params.backlinkMentionName] backlinkMentionName
 * @param {boolean} [params.backlinkMentionAlias] backlinkMentionAlias
 * @param {boolean} [params.backlinkMentionAnchor] backlinkMentionAnchor
 * @param {boolean} [params.backlinkMentionDoc] backlinkMentionDoc
 * @param {number} [params.backlinkMentionKeywordsLimit] backlinkMentionKeywordsLimit
 * @param {boolean} [params.virtualRefName] virtualRefName
 * @param {boolean} [params.virtualRefAlias] virtualRefAlias
 * @param {boolean} [params.virtualRefAnchor] virtualRefAnchor
 * @param {boolean} [params.virtualRefDoc] virtualRefDoc
 */
export async function setSearch(params) {
  return fetchWrapper('POST', '/api/setting/setSearch', params, true);
}

/**
 * 更新代码片段（Snippets）的启用状态，如是否启用自定义CSS和JS。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetConfSnippetResponse>}
 * @param {boolean} [params.enabledCSS] enabledCSS
 * @param {boolean} [params.enabledJS] enabledJS
 */
export async function setConfSnippet(params) {
  return fetchWrapper('POST', '/api/setting/setSnippet', params, true);
}

