export const formatApiDefs = [
  {
    method: "POST",
    endpoint: "/api/format/autoSpace",
    en: "autoSpace",
    zh_cn: "自动空格",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/format/netAssets2LocalAssets",
    en: "netAssets2LocalAssets",
    zh_cn: "网络资源转本地资源",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/format/netImg2LocalAssets",
    en: "netImg2LocalAssets",
    zh_cn: "网络图片转本地资源",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  }
];
