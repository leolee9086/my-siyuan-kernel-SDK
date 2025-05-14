export const tagApiDefs = [
  {
    method: "POST",
    endpoint: "/api/tag/getTag",
    en: "getTag",
    zh_cn: "获取标签",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/tag/removeTag",
    en: "removeTag",
    zh_cn: "删除标签",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/tag/renameTag",
    en: "renameTag",
    zh_cn: "重命名标签",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  }
];
