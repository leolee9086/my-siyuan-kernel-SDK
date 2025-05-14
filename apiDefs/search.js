export const searchApiDefs = [
  {
    method: "POST",
    endpoint: "/api/search/findReplace",
    en: "findReplace",
    zh_cn: "查找替换",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/search/fullTextSearchAssetContent",
    en: "fullTextSearchAssetContent",
    zh_cn: "全文搜索资源文件内容",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/search/fullTextSearchBlock",
    en: "fullTextSearchBlock",
    zh_cn: "全文搜索",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/search/getAssetContent",
    en: "getAssetContent",
    zh_cn: "获取资源文件内容",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/search/getEmbedBlock",
    en: "getEmbedBlock",
    zh_cn: "获取嵌入块",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/search/listInvalidBlockRefs",
    en: "listInvalidBlockRefs",
    zh_cn: "获取无效的块引用",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/search/removeTemplate",
    en: "removeTemplate",
    zh_cn: "移除模板",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/search/searchAsset",
    en: "searchAsset",
    zh_cn: "搜索资源文件",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/search/searchEmbedBlock",
    en: "searchEmbedBlock",
    zh_cn: "搜索嵌入块",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/search/searchRefBlock",
    en: "searchRefBlock",
    zh_cn: "搜索引用块",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/search/searchTag",
    en: "searchTag",
    zh_cn: "搜索标签",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/search/searchTemplate",
    en: "searchTemplate",
    zh_cn: "搜索模板",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/search/searchWidget",
    en: "searchWidget",
    zh_cn: "搜索挂件",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/search/updateEmbedBlock",
    en: "updateEmbedBlock",
    zh_cn: "更新嵌入块",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  }
];
