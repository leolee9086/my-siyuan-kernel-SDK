export const inboxApiDefs = [
  {
    method: "POST",
    endpoint: "/api/inbox/getShorthand",
    en: "getShorthand",
    zh_cn: "获取单个速记",
    description: "根据ID获取单个云端速记条目的详细内容。",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({ id: z.string() }),
    zodResponseSchema: (z) => ({ Code: z.number(), Msg: z.string(), Data: z.any() })
  },
  {
    method: "POST",
    endpoint: "/api/inbox/getShorthands",
    en: "getShorthands",
    zh_cn: "获取速记列表",
    description: "分页获取云端速记条目列表。",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({ page: z.number().int().min(1) }),
    zodResponseSchema: (z) => ({ Code: z.number(), Msg: z.string(), Data: z.array(z.any()) })
  },
  {
    method: "POST",
    endpoint: "/api/inbox/removeShorthands",
    en: "removeShorthands",
    zh_cn: "移除速记",
    description: "根据ID列表移除云端速记条目。",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({ ids: z.array(z.string()) }),
    zodResponseSchema: (z) => ({ Code: z.number(), Msg: z.string(), Data: z.null().optional() })
  }
];
