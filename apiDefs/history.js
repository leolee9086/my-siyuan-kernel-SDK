export const historyApiDefs = [
  {
    method: "POST",
    endpoint: "/api/history/clearWorkspaceHistory",
    en: "clearWorkspaceHistory",
    zh_cn: "清空工作区历史",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/history/getDocHistoryContent",
    en: "getDocHistoryContent",
    zh_cn: "获取历史文档内容",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/history/getHistoryItems",
    en: "getHistoryItems",
    zh_cn: "获取历史条目",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/history/getNotebookHistory",
    en: "getNotebookHistory",
    zh_cn: "获取笔记本历史",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/history/reindexHistory",
    en: "reindexHistory",
    zh_cn: "重建历史索引",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/history/rollbackAssetsHistory",
    en: "rollbackAssetsHistory",
    zh_cn: "回滚资源文件",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/history/rollbackDocHistory",
    en: "rollbackDocHistory",
    zh_cn: "回滚文档历史",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/history/rollbackNotebookHistory",
    en: "rollbackNotebookHistory",
    zh_cn: "回滚笔记本",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/history/searchHistory",
    en: "searchHistory",
    zh_cn: "搜索历史",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  }
];
