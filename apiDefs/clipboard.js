export const clipboardApiDefs = [
  {
    method: "POST",
    endpoint: "/api/clipboard/readFilePaths",
    en: "readFilePaths",
    zh_cn: undefined,
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  }
];
