export class kernelApiList {
	constructor(option = {
		思源伺服ip: globalThis.location.hostname,
		思源伺服端口: '',
		思源伺服协议: "http",
		apitoken: ""

	}) {
		let 思源伺服ip = option.思源伺服ip || option.siYuanIp || '127.0.0.1'
		let 思源伺服端口 = option.思源伺服端口 || option.siYuanPort || ''
		let 思源伺服协议 = option.思源伺服协议 || option.siYuanScheme || "http"
		this.apitoken = option.apitoken || ""
		this.思源伺服地址 = 思源伺服协议 + "://" + 思源伺服ip + ":" + 思源伺服端口
		if (option.siYuanServiceURL) { this.思源伺服地址 = option.siYuanServiceURL }
		if (option.思源伺服地址) { this.思源伺服地址 = option.思源伺服地址 }
		this.sql = (...args) => { return this.SQL(...args) }








		// 不需要鉴权

		this.set("GET", "/api/system/bootProgress", "bootProgress", "获取启动进度")
		this.set("POST", "/api/system/bootProgress", "bootProgress", "获取启动进度")
		this.set("GET", "/api/system/version", "version", "获取软件版本")
		this.set("POST", "/api/system/version", "version", "获取软件版本")
		this.set("POST", "/api/system/currentTime", "currentTime", "获取当前时间")
		this.set("POST", "/api/system/uiproc", "addUIProcess", "UI生成进度")
		this.set("POST", "/api/system/loginAuth", "LoginAuth", "登录鉴权")
		this.set("POST", "/api/system/logoutAuth", "LogoutAuth", "退出登录")
		this.set("GET", "/api/system/getCaptcha", "GetCaptcha", "获取验证码")
		this.set("GET", "/api/icon/getDynamicIcon", "getDynamicIcon")//仅生成函数,尚未定义

		// 需要鉴权

		this.set("POST", "/api/system/getEmojiConf", "getEmojiConf", "获取emoji配置")
		this.set("POST", "/api/system/setAPIToken", "setAPIToken")//仅生成函数,尚未定义
		this.set("POST", "/api/system/setAccessAuthCode", "setAccessAuthCode", "设置鉴权码")
		this.set("POST", "/api/system/setFollowSystemLockScreen", "setFollowSystemLockScreen")//仅生成函数,尚未定义
		this.set("POST", "/api/system/setNetworkServe", "setNetworkServe", "设置网络服务器")
		this.set("POST", "/api/system/setAutoLaunch", "setAutoLaunch", "设置自动启动")
		this.set("POST", "/api/system/setGoogleAnalytics", "setGoogleAnalytics", "设置谷歌数据分析")
		this.set("POST", "/api/system/setDownloadInstallPkg", "setDownloadInstallPkg", "设置是否下载安装包")
		this.set("POST", "/api/system/setNetworkProxy", "setNetworkProxy", "设置网络代理")
		this.set("POST", "/api/system/setWorkspaceDir", "setWorkspaceDir", "设置工作空间目录")
		this.set("POST", "/api/system/getWorkspaces", "getWorkspaces", "获取工作空间目录")
		this.set("POST", "/api/system/getMobileWorkspaces", "getMobileWorkspaces", "获取移动端工作空间目录")
		this.set("POST", "/api/system/checkWorkspaceDir", "checkWorkspaceDir")//仅生成函数,尚未定义
		this.set("POST", "/api/system/createWorkspaceDir", "createWorkspaceDir", "创建工作空间")
		this.set("POST", "/api/system/removeWorkspaceDir", "removeWorkspaceDir", "移除动作空间")
		this.set("POST", "/api/system/removeWorkspaceDirPhysically", "removeWorkspaceDirPhysically")//仅生成函数,尚未定义
		this.set("POST", "/api/system/setAppearanceMode", "setAppearanceMode", "设置外观模式")
		this.set("POST", "/api/system/setUILayout", "setUILayout", "设置UI布局")
		this.set("POST", "/api/system/getSysFonts", "getSysFonts", "获取系统字体")
		this.set("POST", "/api/system/exit", "exit", "退出")
		this.set("POST", "/api/system/getConf", "getConf", "获取配置")
		this.set("POST", "/api/system/checkUpdate", "checkUpdate", "检查更新")
		this.set("POST", "/api/system/exportLog", "exportLog", "导出日志")
		this.set("POST", "/api/system/getChangelog", "getChangelog", "获取更新日志")
		this.set("POST", "/api/system/getNetwork", "getNetwork")//仅生成函数,尚未定义
		this.set("POST", "/api/system/exportConf", "exportConf")//仅生成函数,尚未定义
		this.set("POST", "/api/system/importConf", "importConf")//仅生成函数,尚未定义
		this.set("POST", "/api/system/getWorkspaceInfo", "getWorkspaceInfo")//仅生成函数,尚未定义
		this.set("POST", "/api/system/reloadUI", "reloadUI")//仅生成函数,尚未定义
		this.set("POST", "/api/system/addMicrosoftDefenderExclusion", "addMicrosoftDefenderExclusion")//仅生成函数,尚未定义
		this.set("POST", "/api/system/ignoreAddMicrosoftDefenderExclusion", "ignoreAddMicrosoftDefenderExclusion")//仅生成函数,尚未定义

		this.set("POST", "/api/storage/setLocalStorage", "setLocalStorage", "设置存储")
		this.set("POST", "/api/storage/getLocalStorage", "getLocalStorage", "获取存储")
		this.set("POST", "/api/storage/setLocalStorageVal", "setLocalStorageVal", "设置存储项")
		this.set("POST", "/api/storage/removeLocalStorageVals", "removeLocalStorageVals")
		this.set("POST", "/api/storage/setCriterion", "setCriterion", "设置标准")
		this.set("POST", "/api/storage/getCriteria", "getCriteria", "获取标准")
		this.set("POST", "/api/storage/removeCriterion", "removeCriterion", "移除标准")
		this.set("POST", "/api/storage/getRecentDocs", "getRecentDocs", "获取最近文档")

		this.set("POST", "/api/account/login", "login", "登录账号")
		this.set("POST", "/api/account/checkActivationcode", "checkActivationcode", "检查激活码")
		this.set("POST", "/api/account/useActivationcode", "useActivationcode", "使用激活码")
		this.set("POST", "/api/account/deactivate", "deactivateUser", "注销账号")
		this.set("POST", "/api/account/startFreeTrial", "startFreeTrial", "开始免费试用")

		this.set("POST", "/api/notebook/lsNotebooks", "lsNotebooks", "获取笔记本列表")
		this.set("POST", "/api/notebook/openNotebook", "openNotebook", "打开笔记本")
		this.set("POST", "/api/notebook/closeNotebook", "closeNotebook", "关闭笔记本")
		this.set("POST", "/api/notebook/getNotebookConf", "getNotebookConf", "获取笔记本配置")
		this.set("POST", "/api/notebook/setNotebookConf", "setNotebookConf", "设置笔记本配置")
		this.set("POST", "/api/notebook/createNotebook", "createNotebook", "创建笔记本")
		this.set("POST", "/api/notebook/removeNotebook", "removeNotebook", "删除笔记本")
		this.set("POST", "/api/notebook/renameNotebook", "renameNotebook", "重命名笔记本")
		this.set("POST", "/api/notebook/changeSortNotebook", "changeSortNotebook", "改变笔记本排序")
		this.set("POST", "/api/notebook/setNotebookIcon", "setNotebookIcon", "设置笔记本图标")
		this.set("POST", "/api/notebook/getNotebookInfo", "getNotebookInfo")//仅生成函数,尚未定义

		this.set("POST", "/api/filetree/searchDocs", "searchDocs", "搜索文档")
		this.set("POST", "/api/filetree/listDocsByPath", "listDocsByPath", "获取路径下文档列表")
		this.set("POST", "/api/filetree/getDoc", "getDoc", "获取文档")
		this.set("POST", "/api/filetree/getDocCreateSavePath", "getDocCreateSavePath", "获取文档创建路径")
		this.set("POST", "/api/filetree/getRefCreateSavePath", "getRefCreateSavePath", "获取块引创建路径")
		this.set("POST", "/api/filetree/changeSort", "changeSort", "更改排序")
		this.set("POST", "/api/filetree/createDocWithMd", "createDocWithMd", "创建文档-md")
		this.set("POST", "/api/filetree/createDailyNote", "createDailyNote", "创建日记")
		this.set("POST", "/api/filetree/createDoc", "createDoc", "创建文档")
		this.set("POST", "/api/filetree/renameDoc", "renameDoc", "重命名文档")
		this.set("POST", "/api/filetree/renameDocByID", "renameDocByID")//仅生成函数,尚未定义
		this.set("POST", "/api/filetree/removeDoc", "removeDoc", "移除文档")
		this.set("POST", "/api/filetree/removeDocByID", "removeDocByID")//仅生成函数,尚未定义
		this.set("POST", "/api/filetree/removeDocs", "removeDocs", "批量删除文档")
		this.set("POST", "/api/filetree/moveDocs", "moveDocs", "批量移动文档")
		this.set("POST", "/api/filetree/moveDocsByID", "moveDocsByID")//仅生成函数,尚未定义
		this.set("POST", "/api/filetree/duplicateDoc", "duplicateDoc", "复制文档")
		this.set("POST", "/api/filetree/getHPathByPath", "getHPathByPath", "通过路径获取层级路径")
		this.set("POST", "/api/filetree/getHPathsByPaths", "getHPathsByPaths", "批量通过路径获取层级路径")
		this.set("POST", "/api/filetree/getHPathByID", "getHPathByID", "通过id获取层级路径")
		this.set("POST", "/api/filetree/getPathByID", "getPathByID", "根据id获取路径")
		this.set("POST", "/api/filetree/getFullHPathByID", "getFullHPathByID", "根据id获取完整层级路径")
		this.set("POST", "/api/filetree/getIDsByHPath", "getIDsByHPath", "根据层级路径获取id")
		this.set("POST", "/api/filetree/doc2Heading", "doc2Heading", "文档转换为标题")
		this.set("POST", "/api/filetree/heading2Doc", "heading2Doc", "标题转换为文档")
		this.set("POST", "/api/filetree/li2Doc", "li2Doc", "列表转换为文档")
		this.set("POST", "/api/filetree/refreshFiletree", "refreshFiletree", "刷新文档树")
		this.set("POST", "/api/filetree/upsertIndexes", "upsertIndexes", "创建/更新索引")
		this.set("POST", "/api/filetree/removeIndexes", "removeIndexes", "删除索引")
		this.set("POST", "/api/filetree/listDocTree", "listDocTree", "树形列出 doc")
		this.set("POST", "/api/filetree/moveLocalShorthands", "moveLocalShorthands")//仅生成函数,尚未定义

		this.set("POST", "/api/format/autoSpace", "autoSpace", "自动空格")
		this.set("POST", "/api/format/netImg2LocalAssets", "netImg2LocalAssets", "网络图片转本地资源")
		this.set("POST", "/api/format/netAssets2LocalAssets", "netAssets2LocalAssets", "网络资源转本地资源")

		this.set("POST", "/api/history/getNotebookHistory", "getNotebookHistory", "获取笔记本历史")
		this.set("POST", "/api/history/rollbackNotebookHistory", "rollbackNotebookHistory", "回滚笔记本")
		this.set("POST", "/api/history/rollbackAssetsHistory", "rollbackAssetsHistory", "回滚资源文件")
		this.set("POST", "/api/history/getDocHistoryContent", "getDocHistoryContent", "获取历史文档内容")
		this.set("POST", "/api/history/rollbackDocHistory", "rollbackDocHistory", "回滚文档历史")
		this.set("POST", "/api/history/clearWorkspaceHistory", "clearWorkspaceHistory", "清空工作区历史")
		this.set("POST", "/api/history/reindexHistory", "reindexHistory", "重建历史索引")
		this.set("POST", "/api/history/searchHistory", "searchHistory", "搜索历史")
		this.set("POST", "/api/history/getHistoryItems", "getHistoryItems", "获取历史条目")

		this.set("POST", "/api/outline/getDocOutline", "getDocOutline", "获取文档大纲")
		this.set("POST", "/api/bookmark/getBookmark", "getBookmark", "获取书签")
		this.set("POST", "/api/bookmark/renameBookmark", "renameBookmark", "重命名书签")
		this.set("POST", "/api/bookmark/removeBookmark", "removeBookmark", "移除书签")
		this.set("POST", "/api/tag/getTag", "getTag", "获取标签")
		this.set("POST", "/api/tag/renameTag", "renameTag", "重命名标签")
		this.set("POST", "/api/tag/removeTag", "removeTag", "删除标签")

		this.set("POST", "/api/lute/spinBlockDOM", "spinBlockDOM", "原生渲染")
		this.set("POST", "/api/lute/html2BlockDOM", "html2BlockDOM", "html转blockDOM")
		this.set("POST", "/api/lute/copyStdMarkdown", "copyStdMarkdown", "导出标准markdown")

		this.set("POST", "/api/query/sql", "SQL", "SQL查询")
		this.set("POST", "/api/sqlite/flushTransaction", "flushTransaction", "提交事务")

		this.set("POST", "/api/search/searchTag", "searchTag", "搜索标签")
		this.set("POST", "/api/search/searchTemplate", "searchTemplate", "搜索模板")
		this.set("POST", "/api/search/removeTemplate", "removeTemplate", "移除模板")
		this.set("POST", "/api/search/searchWidget", "searchWidget", "搜索挂件")
		this.set("POST", "/api/search/searchRefBlock", "searchRefBlock", "搜索引用块")
		this.set("POST", "/api/search/searchEmbedBlock", "searchEmbedBlock", "搜索嵌入块")
		this.set("POST", "/api/search/getEmbedBlock", "getEmbedBlock", "获取嵌入块")
		this.set("POST", "/api/search/updateEmbedBlock", "updateEmbedBlock", "更新嵌入块")
		this.set("POST", "/api/search/fullTextSearchBlock", "fullTextSearchBlock", "全文搜索")
		this.set("POST", "/api/search/searchAsset", "searchAsset", "搜索资源文件")
		this.set("POST", "/api/search/findReplace", "findReplace", "查找替换")
		this.set("POST", "/api/search/fullTextSearchAssetContent", "fullTextSearchAssetContent", "全文搜索资源文件内容")
		this.set("POST", "/api/search/getAssetContent", "getAssetContent", "获取资源文件内容")
		this.set("POST", "/api/search/listInvalidBlockRefs", "listInvalidBlockRefs", "获取无效的块引用")

		this.set("POST", "/api/block/getBlockInfo", "getBlockInfo", "获取块信息")
		this.set("POST", "/api/block/getBlockDOM", "getBlockDOM", "获取块DOM")
		this.set("POST", "/api/block/getBlockKramdown", "getBlockKramdown", "获取块kramdown")
		this.set("POST", "/api/block/getChildBlocks", "getChildBlocks", "获取子块")
		this.set("POST", "/api/block/getTailChildBlocks", "getTailChildBlocks", "获取尾部子块")
		this.set("POST", "/api/block/getBlockBreadcrumb", "getBlockBreadcrumb", "获取块面包屑")
		this.set("POST", "/api/block/getBlockIndex", "getBlockIndex", "获取块索引")
		this.set("POST", "/api/block/getBlocksIndexes", "getBlocksIndexes", "获取块索引")
		this.set("POST", "/api/block/getRefIDs", "getRefIDs", "获取引用id")
		this.set("POST", "/api/block/getRefIDsByFileAnnotationID", "getRefIDsByFileAnnotationID", "根据文件标注id获取引用id")
		this.set("POST", "/api/block/getBlockDefIDsByRefText", "getBlockDefIDsByRefText", "根据引用文本获取块定义id")
		this.set("POST", "/api/block/getRefText", "getRefText", "获取引用文本")
		this.set("POST", "/api/block/getDOMText", "getDOMText", "获取DOM文本")
		this.set("POST", "/api/block/getTreeStat", "getTreeStat", "获取树状态")
		this.set("POST", "/api/block/getBlocksWordCount", "getBlocksWordCount", "获取块字数")
		this.set("POST", "/api/block/getContentWordCount", "getContentWordCount", "获取内容字数")
		this.set("POST", "/api/block/getRecentUpdatedBlocks", "getRecentUpdatedBlocks", "获取最近更新的块")
		this.set("POST", "/api/block/getDocInfo", "getDocInfo", "获取文档信息")
		this.set("POST", "/api/block/getDocsInfo", "getDocsInfo")//仅生成函数,尚未定义
		this.set("POST", "/api/block/checkBlockExist", "checkBlockExist", "检查块是否存在")
		this.set("POST", "/api/block/getUnfoldedParentID", "getUnfoldedParentID")//仅生成函数,尚未定义
		this.set("POST", "/api/block/checkBlockFold", "checkBlockFold", "检查块是否折叠")
		this.set("POST", "/api/block/insertBlock", "insertBlock", "插入块")
		this.set("POST", "/api/block/prependBlock", "prependBlock", "插入前置子块")
		this.set("POST", "/api/block/appendBlock", "appendBlock", "插入后置子块")
		this.set("POST", "/api/block/appendDailyNoteBlock", "appendDailyNoteBlock", "追加日记块")
		this.set("POST", "/api/block/prependDailyNoteBlock", "prependDailyNoteBlock", "插入日记块")
		this.set("POST", "/api/block/updateBlock", "updateBlock", "更新块")
		this.set("POST", "/api/block/batchUpdateBlock", "batchUpdateBlock")//仅生成函数,尚未定义
		this.set("POST", "/api/block/deleteBlock", "deleteBlock", "删除块")
		this.set("POST", "/api/block/moveBlock", "moveBlock", "移动块")
		this.set("POST", "/api/block/moveOutlineHeading", "moveOutlineHeading", "移动大纲标题")
		this.set("POST", "/api/block/foldBlock", "foldBlock", "折叠块")
		this.set("POST", "/api/block/unfoldBlock", "unfoldBlock", "展开块")
		this.set("POST", "/api/block/setBlockReminder", "setBlockReminder", "设置块提醒")
		this.set("POST", "/api/block/getHeadingLevelTransaction", "getHeadingLevelTransaction", "获取标题级别事务")
		this.set("POST", "/api/block/getHeadingDeleteTransaction", "getHeadingDeleteTransaction", "获取标题删除事务")
		this.set("POST", "/api/block/getHeadingChildrenIDs", "getHeadingChildrenIDs", "获取标题子块id")
		this.set("POST", "/api/block/getHeadingChildrenDOM", "getHeadingChildrenDOM", "获取标题子块DOM")
		this.set("POST", "/api/block/swapBlockRef", "swapBlockRef", "交换块引用")
		this.set("POST", "/api/block/transferBlockRef", "transferBlockRef", "转移块引用")
		this.set("POST", "/api/block/getBlockSiblingID", "getBlockSiblingID", "获取块同级id")
		this.set("POST", "/api/block/getBlockTreeInfos", "getBlockTreeInfos", "获取块树信息")
		this.set("POST", "/api/block/checkBlockRef", "checkBlockRef")//仅生成函数,尚未定义

		this.set("POST", "/api/file/getFile", "getFile", "获取文件")
		this.set("POST", "/api/file/putFile", "putFile", "上传文件")
		this.set("POST", "/api/file/copyFile", "copyFile", "复制文件")
		this.set("POST", "/api/file/globalCopyFiles", "globalCopyFiles", "全局复制文件")
		this.set("POST", "/api/file/removeFile", "removeFile", "移除文件")
		this.set("POST", "/api/file/renameFile", "renameFile", "重命名文件")
		this.set("POST", "/api/file/readDir", "readDir", "获取文件夹")
		this.set("POST", "/api/file/getUniqueFilename", "getUniqueFilename", "获取文件唯一名")

		this.set("POST", "/api/ref/refreshBacklink", "refreshBacklink", "刷新反向链接")
		this.set("POST", "/api/ref/getBacklink", "getBacklink", "获取反向链接")
		this.set("POST", "/api/ref/getBacklink2", "getBacklink2", "获取反向链接2")
		this.set("POST", "/api/ref/getBacklinkDoc", "getBacklinkDoc", "获取反向链接文档")
		this.set("POST", "/api/ref/getBackmentionDoc", "getBackmentionDoc", "获取反向提及文档")

		this.set("POST", "/api/attr/getBookmarkLabels", "getBookmarkLabels", "获取书签标签")
		this.set("POST", "/api/attr/resetBlockAttrs", "resetBlockAttrs", "重置块属性")
		this.set("POST", "/api/attr/setBlockAttrs", "setBlockAttrs", "设置块属性")
		this.set("POST", "/api/attr/batchSetBlockAttrs", "batchSetBlockAttrs", "批量设置块属性")
		this.set("POST", "/api/attr/getBlockAttrs", "getBlockAttrs", "获取块属性")
		this.set("POST", "/api/attr/batchGetBlockAttrs", "batchGetBlockAttrs", "批量获取块属性")

		this.set("POST", "/api/cloud/getCloudSpace", "getCloudSpace", "获取云端空间")

		this.set("POST", "/api/sync/setSyncEnable", "setSyncEnable", "设置是否启用同步")
		this.set("POST", "/api/sync/setSyncInterval", "setSyncInterval")//仅生成函数,尚未定义
		this.set("POST", "/api/sync/setSyncPerception", "setSyncPerception", "设置同步感知")
		this.set("POST", "/api/sync/setSyncGenerateConflictDoc", "setSyncGenerateConflictDoc", "设置同步是否生成冲突文档")
		this.set("POST", "/api/sync/setSyncMode", "setSyncMode", "设置同步模式")
		this.set("POST", "/api/sync/setSyncProvider", "setSyncProvider", "设置同步供应商")
		this.set("POST", "/api/sync/setSyncProviderS3", "setSyncProviderS3", "设置S3同步")
		this.set("POST", "/api/sync/setSyncProviderWebDAV", "setSyncProviderWebDAV", "设置webdav同步")
		this.set("POST", "/api/sync/setSyncProviderLocal", "setSyncProviderLocal")//仅生成函数,尚未定义
		this.set("POST", "/api/sync/setCloudSyncDir", "setCloudSyncDir", "设置云端同步目录")
		this.set("POST", "/api/sync/createCloudSyncDir", "createCloudSyncDir", "创建云端同步目录")
		this.set("POST", "/api/sync/removeCloudSyncDir", "removeCloudSyncDir", "删除云端同步目录")
		this.set("POST", "/api/sync/listCloudSyncDir", "listCloudSyncDir", "获取云端同步目录")
		this.set("POST", "/api/sync/performSync", "performSync", "执行同步")
		this.set("POST", "/api/sync/performBootSync", "performBootSync", "执行启动同步")
		this.set("POST", "/api/sync/getBootSync", "getBootSync", "获取启动同步")
		this.set("POST", "/api/sync/getSyncInfo", "getSyncInfo", "获取同步信息")
		this.set("POST", "/api/sync/exportSyncProviderS3", "exportSyncProviderS3", "导出 S3 同步")
		this.set("POST", "/api/sync/importSyncProviderS3", "importSyncProviderS3", "导入 S3 同步")
		this.set("POST", "/api/sync/exportSyncProviderWebDAV", "exportSyncProviderWebDAV", "导出 WebDAV")
		this.set("POST", "/api/sync/importSyncProviderWebDAV", "importSyncProviderWebDAV", "导入 WebDAV")

		this.set("POST", "/api/inbox/getShorthands", "getShorthands")//仅生成函数,尚未定义
		this.set("POST", "/api/inbox/getShorthand", "getShorthand")//仅生成函数,尚未定义
		this.set("POST", "/api/inbox/removeShorthands", "removeShorthands")//仅生成函数,尚未定义

		this.set("POST", "/api/extension/copy", "extensionCopy")//仅生成函数,尚未定义

		this.set("POST", "/api/clipboard/readFilePaths", "readFilePaths")//仅生成函数,尚未定义

		this.set("POST", "/api/asset/uploadCloud", "uploadCloud")//仅生成函数,尚未定义
		this.set("POST", "/api/asset/insertLocalAssets", "insertLocalAssets")//仅生成函数,尚未定义
		this.set("POST", "/api/asset/resolveAssetPath", "resolveAssetPath")//仅生成函数,尚未定义
		this.set("POST", "/api/asset/upload", "Upload")//仅生成函数,尚未定义
		this.set("POST", "/api/asset/setFileAnnotation", "setFileAnnotation")//仅生成函数,尚未定义
		this.set("POST", "/api/asset/getFileAnnotation", "getFileAnnotation")//仅生成函数,尚未定义
		this.set("POST", "/api/asset/getUnusedAssets", "getUnusedAssets")//仅生成函数,尚未定义
		this.set("POST", "/api/asset/getMissingAssets", "getMissingAssets")//仅生成函数,尚未定义
		this.set("POST", "/api/asset/removeUnusedAsset", "removeUnusedAsset")//仅生成函数,尚未定义
		this.set("POST", "/api/asset/removeUnusedAssets", "removeUnusedAssets")//仅生成函数,尚未定义
		this.set("POST", "/api/asset/getDocImageAssets", "getDocImageAssets")//仅生成函数,尚未定义
		this.set("POST", "/api/asset/getDocAssets", "getDocAssets")//仅生成函数,尚未定义
		this.set("POST", "/api/asset/renameAsset", "renameAsset")//仅生成函数,尚未定义
		this.set("POST", "/api/asset/getImageOCRText", "getImageOCRText")//仅生成函数,尚未定义
		this.set("POST", "/api/asset/setImageOCRText", "setImageOCRText")//仅生成函数,尚未定义
		this.set("POST", "/api/asset/ocr", "ocr")//仅生成函数,尚未定义
		this.set("POST", "/api/asset/fullReindexAssetContent", "fullReindexAssetContent")//仅生成函数,尚未定义
		this.set("POST", "/api/asset/statAsset", "statAsset")//仅生成函数,尚未定义

		this.set("POST", "/api/export/exportNotebookMd", "exportNotebookMd")//仅生成函数,尚未定义
		this.set("POST", "/api/export/exportMds", "exportMds")//仅生成函数,尚未定义
		this.set("POST", "/api/export/exportMd", "exportMd")//仅生成函数,尚未定义
		this.set("POST", "/api/export/exportSY", "exportSY")//仅生成函数,尚未定义
		this.set("POST", "/api/export/exportNotebookSY", "exportNotebookSY")//仅生成函数,尚未定义
		this.set("POST", "/api/export/exportMdContent", "exportMdContent")//仅生成函数,尚未定义
		this.set("POST", "/api/export/exportHTML", "exportHTML")//仅生成函数,尚未定义
		this.set("POST", "/api/export/exportPreviewHTML", "exportPreviewHTML")//仅生成函数,尚未定义
		this.set("POST", "/api/export/exportMdHTML", "exportMdHTML")//仅生成函数,尚未定义
		this.set("POST", "/api/export/exportDocx", "exportDocx")//仅生成函数,尚未定义
		this.set("POST", "/api/export/processPDF", "processPDF")//仅生成函数,尚未定义
		this.set("POST", "/api/export/preview", "exportPreview")//仅生成函数,尚未定义
		this.set("POST", "/api/export/exportResources", "exportResources")//仅生成函数,尚未定义
		this.set("POST", "/api/export/exportAsFile", "exportAsFile")//仅生成函数,尚未定义
		this.set("POST", "/api/export/exportData", "exportData")//仅生成函数,尚未定义
		this.set("POST", "/api/export/exportDataInFolder", "exportDataInFolder")//仅生成函数,尚未定义
		this.set("POST", "/api/export/exportTempContent", "exportTempContent")//仅生成函数,尚未定义
		this.set("POST", "/api/export/export2Liandi", "export2Liandi")//仅生成函数,尚未定义
		this.set("POST", "/api/export/exportReStructuredText", "exportReStructuredText")//仅生成函数,尚未定义
		this.set("POST", "/api/export/exportAsciiDoc", "exportAsciiDoc")//仅生成函数,尚未定义
		this.set("POST", "/api/export/exportTextile", "exportTextile")//仅生成函数,尚未定义
		this.set("POST", "/api/export/exportOPML", "exportOPML")//仅生成函数,尚未定义
		this.set("POST", "/api/export/exportOrgMode", "exportOrgMode")//仅生成函数,尚未定义
		this.set("POST", "/api/export/exportMediaWiki", "exportMediaWiki")//仅生成函数,尚未定义
		this.set("POST", "/api/export/exportODT", "exportODT")//仅生成函数,尚未定义
		this.set("POST", "/api/export/exportRTF", "exportRTF")//仅生成函数,尚未定义
		this.set("POST", "/api/export/exportEPUB", "exportEPUB")//仅生成函数,尚未定义
		this.set("POST", "/api/export/exportAttributeView", "exportAttributeView")//仅生成函数,尚未定义

		this.set("POST", "/api/import/importStdMd", "importStdMd")//仅生成函数,尚未定义
		this.set("POST", "/api/import/importData", "importData")//仅生成函数,尚未定义
		this.set("POST", "/api/import/importSY", "importSY")//仅生成函数,尚未定义

		this.set("POST", "/api/convert/pandoc", "pandoc")//仅生成函数,尚未定义

		this.set("POST", "/api/template/render", "renderTemplate")//仅生成函数,尚未定义
		this.set("POST", "/api/template/docSaveAsTemplate", "docSaveAsTemplate")//仅生成函数,尚未定义
		this.set("POST", "/api/template/renderSprig", "renderSprig")//仅生成函数,尚未定义

		this.set("POST", "/api/transactions", "performTransactions")//仅生成函数,尚未定义

		this.set("POST", "/api/setting/setAccount", "setAccount")//仅生成函数,尚未定义
		this.set("POST", "/api/setting/setEditor", "setEditor")//仅生成函数,尚未定义
		this.set("POST", "/api/setting/setExport", "setExport")//仅生成函数,尚未定义
		this.set("POST", "/api/setting/setFiletree", "setFiletree")//仅生成函数,尚未定义
		this.set("POST", "/api/setting/setSearch", "setSearch")//仅生成函数,尚未定义
		this.set("POST", "/api/setting/setKeymap", "setKeymap")//仅生成函数,尚未定义
		this.set("POST", "/api/setting/setAppearance", "setAppearance")//仅生成函数,尚未定义
		this.set("POST", "/api/setting/getCloudUser", "getCloudUser")//仅生成函数,尚未定义
		this.set("POST", "/api/setting/logoutCloudUser", "logoutCloudUser")//仅生成函数,尚未定义
		this.set("POST", "/api/setting/login2faCloudUser", "login2faCloudUser")//仅生成函数,尚未定义
		this.set("POST", "/api/setting/setEmoji", "setEmoji")//仅生成函数,尚未定义
		this.set("POST", "/api/setting/setFlashcard", "setFlashcard")//仅生成函数,尚未定义
		this.set("POST", "/api/setting/setAI", "setAI")//仅生成函数,尚未定义
		this.set("POST", "/api/setting/setBazaar", "setBazaar")//仅生成函数,尚未定义
		this.set("POST", "/api/setting/setPublish", "setPublish")//仅生成函数,尚未定义
		this.set("POST", "/api/setting/getPublish", "getPublish")//仅生成函数,尚未定义
		this.set("POST", "/api/setting/refreshVirtualBlockRef", "refreshVirtualBlockRef")//仅生成函数,尚未定义
		this.set("POST", "/api/setting/addVirtualBlockRefInclude", "addVirtualBlockRefInclude")//仅生成函数,尚未定义
		this.set("POST", "/api/setting/addVirtualBlockRefExclude", "addVirtualBlockRefExclude")//仅生成函数,尚未定义
		this.set("POST", "/api/setting/setSnippet", "setConfSnippet")//仅生成函数,尚未定义
		this.set("POST", "/api/setting/setEditorReadOnly", "setEditorReadOnly")//仅生成函数,尚未定义

		this.set("POST", "/api/graph/resetGraph", "resetGraph")//仅生成函数,尚未定义
		this.set("POST", "/api/graph/resetLocalGraph", "resetLocalGraph")//仅生成函数,尚未定义
		this.set("POST", "/api/graph/getGraph", "getGraph")//仅生成函数,尚未定义
		this.set("POST", "/api/graph/getLocalGraph", "getLocalGraph")//仅生成函数,尚未定义

		this.set("POST", "/api/bazaar/getBazaarPlugin", "getBazaarPlugin")//仅生成函数,尚未定义
		this.set("POST", "/api/bazaar/getInstalledPlugin", "getInstalledPlugin")//仅生成函数,尚未定义
		this.set("POST", "/api/bazaar/installBazaarPlugin", "installBazaarPlugin")//仅生成函数,尚未定义
		this.set("POST", "/api/bazaar/uninstallBazaarPlugin", "uninstallBazaarPlugin")//仅生成函数,尚未定义
		this.set("POST", "/api/bazaar/getBazaarWidget", "getBazaarWidget")//仅生成函数,尚未定义
		this.set("POST", "/api/bazaar/getInstalledWidget", "getInstalledWidget")//仅生成函数,尚未定义
		this.set("POST", "/api/bazaar/installBazaarWidget", "installBazaarWidget")//仅生成函数,尚未定义
		this.set("POST", "/api/bazaar/uninstallBazaarWidget", "uninstallBazaarWidget")//仅生成函数,尚未定义
		this.set("POST", "/api/bazaar/getBazaarIcon", "getBazaarIcon")//仅生成函数,尚未定义
		this.set("POST", "/api/bazaar/getInstalledIcon", "getInstalledIcon")//仅生成函数,尚未定义
		this.set("POST", "/api/bazaar/installBazaarIcon", "installBazaarIcon")//仅生成函数,尚未定义
		this.set("POST", "/api/bazaar/uninstallBazaarIcon", "uninstallBazaarIcon")//仅生成函数,尚未定义
		this.set("POST", "/api/bazaar/getBazaarTemplate", "getBazaarTemplate")//仅生成函数,尚未定义
		this.set("POST", "/api/bazaar/getInstalledTemplate", "getInstalledTemplate")//仅生成函数,尚未定义
		this.set("POST", "/api/bazaar/installBazaarTemplate", "installBazaarTemplate")//仅生成函数,尚未定义
		this.set("POST", "/api/bazaar/uninstallBazaarTemplate", "uninstallBazaarTemplate")//仅生成函数,尚未定义
		this.set("POST", "/api/bazaar/getBazaarTheme", "getBazaarTheme")//仅生成函数,尚未定义
		this.set("POST", "/api/bazaar/getInstalledTheme", "getInstalledTheme")//仅生成函数,尚未定义
		this.set("POST", "/api/bazaar/installBazaarTheme", "installBazaarTheme")//仅生成函数,尚未定义
		this.set("POST", "/api/bazaar/uninstallBazaarTheme", "uninstallBazaarTheme")//仅生成函数,尚未定义
		this.set("POST", "/api/bazaar/getBazaarPackageREAME", "getBazaarPackageREAME")//仅生成函数,尚未定义
		this.set("POST", "/api/bazaar/getUpdatedPackage", "getUpdatedPackage")//仅生成函数,尚未定义
		this.set("POST", "/api/bazaar/batchUpdatePackage", "batchUpdatePackage")//仅生成函数,尚未定义

		this.set("POST", "/api/repo/initRepoKey", "initRepoKey")//仅生成函数,尚未定义
		this.set("POST", "/api/repo/initRepoKeyFromPassphrase", "initRepoKeyFromPassphrase")//仅生成函数,尚未定义
		this.set("POST", "/api/repo/resetRepo", "resetRepo")//仅生成函数,尚未定义
		this.set("POST", "/api/repo/purgeRepo", "purgeRepo")//仅生成函数,尚未定义
		this.set("POST", "/api/repo/purgeCloudRepo", "purgeCloudRepo")//仅生成函数,尚未定义
		this.set("POST", "/api/repo/importRepoKey", "importRepoKey")//仅生成函数,尚未定义
		this.set("POST", "/api/repo/createSnapshot", "createSnapshot")//仅生成函数,尚未定义
		this.set("POST", "/api/repo/tagSnapshot", "tagSnapshot")//仅生成函数,尚未定义
		this.set("POST", "/api/repo/checkoutRepo", "checkoutRepo")//仅生成函数,尚未定义
		this.set("POST", "/api/repo/getRepoSnapshots", "getRepoSnapshots")//仅生成函数,尚未定义
		this.set("POST", "/api/repo/getRepoTagSnapshots", "getRepoTagSnapshots")//仅生成函数,尚未定义
		this.set("POST", "/api/repo/removeRepoTagSnapshot", "removeRepoTagSnapshot")//仅生成函数,尚未定义
		this.set("POST", "/api/repo/getCloudRepoTagSnapshots", "getCloudRepoTagSnapshots")//仅生成函数,尚未定义
		this.set("POST", "/api/repo/getCloudRepoSnapshots", "getCloudRepoSnapshots")//仅生成函数,尚未定义
		this.set("POST", "/api/repo/removeCloudRepoTagSnapshot", "removeCloudRepoTagSnapshot")//仅生成函数,尚未定义
		this.set("POST", "/api/repo/uploadCloudSnapshot", "uploadCloudSnapshot")//仅生成函数,尚未定义
		this.set("POST", "/api/repo/downloadCloudSnapshot", "downloadCloudSnapshot")//仅生成函数,尚未定义
		this.set("POST", "/api/repo/diffRepoSnapshots", "diffRepoSnapshots")//仅生成函数,尚未定义
		this.set("POST", "/api/repo/openRepoSnapshotDoc", "openRepoSnapshotDoc")//仅生成函数,尚未定义
		this.set("POST", "/api/repo/getRepoFile", "getRepoFile")//仅生成函数,尚未定义
		this.set("POST", "/api/repo/setRepoIndexRetentionDays", "setRepoIndexRetentionDays")//仅生成函数,尚未定义
		this.set("POST", "/api/repo/setRetentionIndexesDaily", "setRetentionIndexesDaily")//仅生成函数,尚未定义

		this.set("POST", "/api/riff/createRiffDeck", "createRiffDeck")//仅生成函数,尚未定义
		this.set("POST", "/api/riff/renameRiffDeck", "renameRiffDeck")//仅生成函数,尚未定义
		this.set("POST", "/api/riff/removeRiffDeck", "removeRiffDeck")//仅生成函数,尚未定义
		this.set("POST", "/api/riff/getRiffDecks", "getRiffDecks")//仅生成函数,尚未定义
		this.set("POST", "/api/riff/addRiffCards", "addRiffCards")//仅生成函数,尚未定义
		this.set("POST", "/api/riff/removeRiffCards", "removeRiffCards")//仅生成函数,尚未定义
		this.set("POST", "/api/riff/getRiffDueCards", "getRiffDueCards")//仅生成函数,尚未定义
		this.set("POST", "/api/riff/getTreeRiffDueCards", "getTreeRiffDueCards")//仅生成函数,尚未定义
		this.set("POST", "/api/riff/getNotebookRiffDueCards", "getNotebookRiffDueCards")//仅生成函数,尚未定义
		this.set("POST", "/api/riff/reviewRiffCard", "reviewRiffCard")//仅生成函数,尚未定义
		this.set("POST", "/api/riff/skipReviewRiffCard", "skipReviewRiffCard")//仅生成函数,尚未定义
		this.set("POST", "/api/riff/getRiffCards", "getRiffCards")//仅生成函数,尚未定义
		this.set("POST", "/api/riff/getTreeRiffCards", "getTreeRiffCards")//仅生成函数,尚未定义
		this.set("POST", "/api/riff/getNotebookRiffCards", "getNotebookRiffCards")//仅生成函数,尚未定义
		this.set("POST", "/api/riff/resetRiffCards", "resetRiffCards")//仅生成函数,尚未定义
		this.set("POST", "/api/riff/batchSetRiffCardsDueTime", "batchSetRiffCardsDueTime")//仅生成函数,尚未定义
		this.set("POST", "/api/riff/getRiffCardsByBlockIDs", "getRiffCardsByBlockIDs")//仅生成函数,尚未定义

		this.set("POST", "/api/notification/pushMsg", "pushMsg")//仅生成函数,尚未定义
		this.set("POST", "/api/notification/pushErrMsg", "pushErrMsg")//仅生成函数,尚未定义

		this.set("POST", "/api/snippet/getSnippet", "getSnippet")//仅生成函数,尚未定义
		this.set("POST", "/api/snippet/setSnippet", "setSnippet")//仅生成函数,尚未定义
		this.set("POST", "/api/snippet/removeSnippet", "removeSnippet")//仅生成函数,尚未定义

		this.set("POST", "/api/av/renderAttributeView", "renderAttributeView")//仅生成函数,尚未定义
		this.set("POST", "/api/av/renderHistoryAttributeView", "renderHistoryAttributeView")//仅生成函数,尚未定义
		this.set("POST", "/api/av/renderSnapshotAttributeView", "renderSnapshotAttributeView")//仅生成函数,尚未定义
		this.set("POST", "/api/av/getAttributeViewKeys", "getAttributeViewKeys")//仅生成函数,尚未定义
		this.set("POST", "/api/av/setAttributeViewBlockAttr", "setAttributeViewBlockAttr")//仅生成函数,尚未定义
		this.set("POST", "/api/av/searchAttributeView", "searchAttributeView")//仅生成函数,尚未定义
		this.set("POST", "/api/av/getAttributeView", "getAttributeView")//仅生成函数,尚未定义
		this.set("POST", "/api/av/searchAttributeViewRelationKey", "searchAttributeViewRelationKey")//仅生成函数,尚未定义
		this.set("POST", "/api/av/searchAttributeViewNonRelationKey", "searchAttributeViewNonRelationKey")//仅生成函数,尚未定义
		this.set("POST", "/api/av/getAttributeViewFilterSort", "getAttributeViewFilterSort")//仅生成函数,尚未定义
		this.set("POST", "/api/av/addAttributeViewKey", "addAttributeViewKey")//仅生成函数,尚未定义
		this.set("POST", "/api/av/removeAttributeViewKey", "removeAttributeViewKey")//仅生成函数,尚未定义
		this.set("POST", "/api/av/sortAttributeViewViewKey", "sortAttributeViewViewKey")//仅生成函数,尚未定义
		this.set("POST", "/api/av/sortAttributeViewKey", "sortAttributeViewKey")//仅生成函数,尚未定义
		this.set("POST", "/api/av/addAttributeViewBlocks", "addAttributeViewBlocks")//仅生成函数,尚未定义
		this.set("POST", "/api/av/removeAttributeViewBlocks", "removeAttributeViewBlocks")//仅生成函数,尚未定义
		this.set("POST", "/api/av/getAttributeViewPrimaryKeyValues", "getAttributeViewPrimaryKeyValues")//仅生成函数,尚未定义
		this.set("POST", "/api/av/setDatabaseBlockView", "setDatabaseBlockView")//仅生成函数,尚未定义
		this.set("POST", "/api/av/getMirrorDatabaseBlocks", "getMirrorDatabaseBlocks")//仅生成函数,尚未定义
		this.set("POST", "/api/av/getAttributeViewKeysByAvID", "getAttributeViewKeysByAvID")//仅生成函数,尚未定义
		this.set("POST", "/api/av/duplicateAttributeViewBlock", "duplicateAttributeViewBlock")//仅生成函数,尚未定义
		this.set("POST", "/api/av/appendAttributeViewDetachedBlocksWithValues", "appendAttributeViewDetachedBlocksWithValues")//仅生成函数,尚未定义

		this.set("POST", "/api/ai/chatGPT", "chatGPT")//仅生成函数,尚未定义
		this.set("POST", "/api/ai/chatGPTWithAction", "chatGPTWithAction")//仅生成函数,尚未定义

		this.set("POST", "/api/petal/loadPetals", "loadPetals")//仅生成函数,尚未定义
		this.set("POST", "/api/petal/setPetalEnabled", "setPetalEnabled")//仅生成函数,尚未定义


		this.set("POST", "/api/network/forwardProxy", "forwardProxy")//仅生成函数,尚未定义

		this.set("GET", "/ws/broadcast", "broadcast")//仅生成函数,尚未定义
		this.set("GET", "/es/broadcast/subscribe", "broadcastSubscribe")//仅生成函数,尚未定义

		this.set("POST", "/api/broadcast/publish", "broadcastPublish")//仅生成函数,尚未定义
		this.set("POST", "/api/broadcast/postMessage", "postMessage")//仅生成函数,尚未定义
		this.set("POST", "/api/broadcast/getChannels", "getChannels")//仅生成函数,尚未定义
		this.set("POST", "/api/broadcast/getChannelInfo", "getChannelInfo")//仅生成函数,尚未定义

		this.set("POST", "/api/archive/zip", "zip")//仅生成函数,尚未定义
		this.set("POST", "/api/archive/unzip", "unzip")//仅生成函数,尚未定义

		this.set("POST", "/api/ui/reloadUI", "reloadUI")//仅生成函数,尚未定义
		this.set("POST", "/api/ui/reloadAttributeView", "reloadAttributeView")//仅生成函数,尚未定义
		this.set("POST", "/api/ui/reloadProtyle", "reloadProtyle")//仅生成函数,尚未定义
		this.set("POST", "/api/ui/reloadFiletree", "reloadFiletree")//仅生成函数,尚未定义
		this.set("POST", "/api/ui/reloadTag", "reloadTag")//仅生成函数,尚未定义
	}

	async set(方法, 路径, 英文名, 中文名) {
		this[英文名] = this.生成方法(方法, 路径).bind(this);
		this[英文名]["raw"] = this.生成方法(方法, 路径, true).bind(this);
		this[英文名]["sync"] = this.生成同步方法(方法, 路径, true).bind(this);
		中文名 ? (this[中文名] = this[英文名]) : null;
		this[路径] = this[英文名];
	}
	async set(方法, 路径, 英文名, 中文名) {
		this[英文名] = this.生成方法(方法, 路径).bind(this);
		this[英文名]["raw"] = this.生成方法(方法, 路径, true).bind(this);
		this[英文名]["sync"] = this.生成同步方法(方法, 路径, true).bind(this);
		中文名 ? (this[中文名] = this[英文名]) : null;
		this[路径] = this[英文名];
	}
	生成同步方法(方法, 路径, flag) {
		return (data) => {
			const xhr = new XMLHttpRequest();
			xhr.open(方法, this.思源伺服地址 + 路径, false);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send(JSON.stringify(data));
			return JSON.parse(xhr.responseText)["data"];
		};
	}
	生成方法(方法, 路径, flag) {
		return async function (data, apitoken = "", callback) {
			let resData = null
			if (data instanceof FormData) {
				data = data;
			} else {
				data = JSON.stringify(data);
			}
			let head = {
				'Authorization': 'Token ' + this.apitoken,

				'user-agent': 'Mozilla Mobile/4.0 MDN Example',
			}
			if (!this.apitoken) {
				head = {
					'user-agent': 'Mozilla Mobile/4.0 MDN Example',

				}
			}
			await fetch(this.思源伺服地址 + 路径, {
				body: data,
				method: 方法,
				headers: head,
			}).then(function (response) { resData = response.json() })
			let realData = await resData
			if (!flag) {
				if (callback) { callback(realData.data ? realData.data : null) }
				return realData.data ? realData.data : null
			}
			else {
				if (callback) { callback(realData ? realData : null) }
				return realData ? realData : null
			}
		}
	}
}

export default new kernelApiList({
	思源伺服ip: globalThis.location.hostname,
	思源伺服端口: globalThis.location.port,
	思源伺服协议: "http",
	apitoken: ""
})

// 从思源的后端接口文件计算而来
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
