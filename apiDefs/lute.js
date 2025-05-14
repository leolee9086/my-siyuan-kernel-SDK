export const luteApiDefs = [
  {
    method: "POST",
    endpoint: "/api/lute/copyStdMarkdown",
    en: "copyStdMarkdown",
    zh_cn: "导出标准markdown",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/lute/html2BlockDOM",
    en: "html2BlockDOM",
    zh_cn: "html转blockDOM",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/lute/spinBlockDOM",
    en: "spinBlockDOM",
    zh_cn: "原生渲染",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  }
];
