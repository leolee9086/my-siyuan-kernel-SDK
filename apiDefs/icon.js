export const iconApiDefs = [
  {
    method: "GET",
    endpoint: "/api/icon/getDynamicIcon",
    en: "getDynamicIcon",
    zh_cn: undefined,
    needAuth: false,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  }
];
