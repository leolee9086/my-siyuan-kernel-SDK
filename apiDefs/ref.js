export const refApiDefs = [
  {
    method: "POST",
    endpoint: "/api/ref/getBacklink",
    en: "getBacklink",
    zh_cn: "获取反向链接",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/ref/getBacklink2",
    en: "getBacklink2",
    zh_cn: "获取反向链接2",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/ref/getBacklinkDoc",
    en: "getBacklinkDoc",
    zh_cn: "获取反向链接文档",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/ref/getBackmentionDoc",
    en: "getBackmentionDoc",
    zh_cn: "获取反向提及文档",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/ref/refreshBacklink",
    en: "refreshBacklink",
    zh_cn: "刷新反向链接",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  }
];
