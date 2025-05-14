export const miscApiDefs = [
  {
    method: "GET",
    endpoint: "/es/broadcast/subscribe",
    en: "broadcastSubscribe",
    zh_cn: undefined,
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "GET",
    endpoint: "/ws/broadcast",
    en: "broadcast",
    zh_cn: undefined,
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  }
];
