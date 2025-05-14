export const sqliteApiDefs = [
  {
    method: "POST",
    endpoint: "/api/sqlite/flushTransaction",
    en: "flushTransaction",
    zh_cn: "提交事务",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  }
];
