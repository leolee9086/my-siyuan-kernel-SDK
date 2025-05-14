export const outlineApiDefs = [
  {
    method: "POST",
    endpoint: "/api/outline/getDocOutline",
    en: "getDocOutline",
    zh_cn: "获取文档大纲",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  }
];
