export const networkApiDefs = [
  {
    method: "POST",
    endpoint: "/api/network/forwardProxy",
    en: "forwardProxy",
    zh_cn: undefined,
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  }
];
