export const convertApiDefs = [
  {
    method: "POST",
    endpoint: "/api/convert/pandoc",
    en: "pandoc",
    zh_cn: undefined,
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  }
];
