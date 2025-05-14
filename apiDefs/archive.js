export const archiveApiDefs = [
  {
    method: "POST",
    endpoint: "/api/archive/unzip",
    en: "unzip",
    zh_cn: "解压文件",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    description: "将指定的 .zip 文件解压到指定路径。",
    zodRequestSchema: (z) => ({ zipPath: z.string(), path: z.string() }),
    zodResponseSchema: (z) => ({ Code: z.number(), Msg: z.string(), Data: z.any().nullable() })
  },
  {
    method: "POST",
    endpoint: "/api/archive/zip",
    en: "zip",
    zh_cn: "压缩文件/目录",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    description: "将指定路径的文件或目录压缩到指定的 .zip 文件。",
    zodRequestSchema: (z) => ({ path: z.string(), zipPath: z.string() }),
    zodResponseSchema: (z) => ({ Code: z.number(), Msg: z.string(), Data: z.any().nullable() })
  }
];
