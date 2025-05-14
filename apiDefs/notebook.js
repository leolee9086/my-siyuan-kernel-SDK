export const notebookApiDefs = [
  {
    method: "POST",
    endpoint: "/api/notebook/changeSortNotebook",
    en: "changeSortNotebook",
    zh_cn: "改变笔记本排序",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/notebook/closeNotebook",
    en: "closeNotebook",
    zh_cn: "关闭笔记本",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/notebook/createNotebook",
    en: "createNotebook",
    zh_cn: "创建笔记本",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/notebook/getNotebookConf",
    en: "getNotebookConf",
    zh_cn: "获取笔记本配置",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/notebook/getNotebookInfo",
    en: "getNotebookInfo",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: true,
    zh_cn: undefined,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/notebook/lsNotebooks",
    en: "lsNotebooks",
    zh_cn: "获取笔记本列表",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/notebook/openNotebook",
    en: "openNotebook",
    zh_cn: "打开笔记本",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/notebook/removeNotebook",
    en: "removeNotebook",
    zh_cn: "删除笔记本",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/notebook/renameNotebook",
    en: "renameNotebook",
    zh_cn: "重命名笔记本",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/notebook/setNotebookConf",
    en: "setNotebookConf",
    zh_cn: "设置笔记本配置",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/notebook/setNotebookIcon",
    en: "setNotebookIcon",
    zh_cn: "设置笔记本图标",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  }
];
