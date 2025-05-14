export const inboxApiDefs = [
  {
    method: "POST",
    endpoint: "/api/inbox/getShorthand",
    en: "getShorthand",
    zh_cn: undefined,
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/inbox/getShorthands",
    en: "getShorthands",
    zh_cn: undefined,
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/inbox/removeShorthands",
    en: "removeShorthands",
    zh_cn: undefined,
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  }
];
