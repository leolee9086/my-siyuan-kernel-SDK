export const accountApiDefs = [
  {
    method: "POST",
    endpoint: "/api/account/checkActivationcode",
    en: "checkActivationcode",
    zh_cn: "检查激活码",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    description: "检查用户输入的激活码是否有效。",
    zodRequestSchema: (z) => ({ data: z.string() }),
    zodResponseSchema: (z) => ({ Code: z.number(), Msg: z.string(), Data: z.any().nullable() })
  },
  {
    method: "POST",
    endpoint: "/api/account/deactivate",
    en: "deactivateUser",
    zh_cn: "注销账号",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    description: "注销当前用户账号。",
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({ Code: z.number(), Msg: z.string(), Data: z.any().nullable() })
  },
  {
    method: "POST",
    endpoint: "/api/account/login",
    en: "login",
    zh_cn: "登录账号",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    description: "用户登录，需要提供用户名、密码、验证码和云端区域。",
    zodRequestSchema: (z) => ({ userName: z.string(), userPassword: z.string(), captcha: z.string(), cloudRegion: z.number() }),
    zodResponseSchema: (z) => ({ Code: z.number(), Msg: z.string(), Data: z.any().nullable() })
  },
  {
    method: "POST",
    endpoint: "/api/account/startFreeTrial",
    en: "startFreeTrial",
    zh_cn: "开始免费试用",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    description: "为当前用户开启免费试用。",
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({ Code: z.number(), Msg: z.string(), Data: z.any().nullable() })
  },
  {
    method: "POST",
    endpoint: "/api/account/useActivationcode",
    en: "useActivationcode",
    zh_cn: "使用激活码",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    description: "使用激活码激活账户。",
    zodRequestSchema: (z) => ({ data: z.string() }),
    zodResponseSchema: (z) => ({ Code: z.number(), Msg: z.string(), Data: z.any().nullable() })
  }
];
