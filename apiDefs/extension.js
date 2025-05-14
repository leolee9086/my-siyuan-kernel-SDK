export const extensionApiDefs = [
  {
    method: "POST",
    endpoint: "/api/extension/copy",
    en: "extensionCopy",
    zh_cn: undefined,
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  }
];
