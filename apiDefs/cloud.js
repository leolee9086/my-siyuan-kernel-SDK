export const cloudApiDefs = [
  {
    method: "POST",
    endpoint: "/api/cloud/getCloudSpace",
    en: "getCloudSpace",
    zh_cn: "获取云端空间",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  }
];
