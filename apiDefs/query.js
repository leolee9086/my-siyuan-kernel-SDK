export const queryApiDefs = [
  {
    method: "POST",
    endpoint: "/api/query/sql",
    en: "SQL",
    zh_cn: "SQL查询",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  }
];
