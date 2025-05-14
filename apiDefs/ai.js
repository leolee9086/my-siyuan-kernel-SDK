export const aiApiDefs = [
  {
    method: "POST",
    endpoint: "/api/ai/chatGPT",
    en: "chatGPT",
    zh_cn: "与 ChatGPT 对话",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: false,
    description: "与 ChatGPT 进行简单对话。",
    zodRequestSchema: (z) => ({ msg: z.string() }),
    zodResponseSchema: (z) => ({ Code: z.number(), Msg: z.string(), Data: z.any() })
  },
  {
    method: "POST",
    endpoint: "/api/ai/chatGPTWithAction",
    en: "chatGPTWithAction",
    zh_cn: "调用 ChatGPT 执行动作",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: false,
    description: "调用 ChatGPT 对指定的块ID列表执行特定动作。",
    zodRequestSchema: (z) => ({ ids: z.array(z.string()), action: z.string() }),
    zodResponseSchema: (z) => ({ Code: z.number(), Msg: z.string(), Data: z.any() })
  }
];
