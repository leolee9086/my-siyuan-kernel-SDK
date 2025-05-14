export const transactionsApiDefs = [
  {
    method: "POST",
    endpoint: "/api/transactions",
    en: "performTransactions",
    zh_cn: undefined,
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  }
];
