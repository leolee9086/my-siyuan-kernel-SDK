export const attrApiDefs = [
  {
    method: "POST",
    endpoint: "/api/attr/batchGetBlockAttrs",
    en: "batchGetBlockAttrs",
    zh_cn: "批量获取块属性",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/attr/batchSetBlockAttrs",
    en: "batchSetBlockAttrs",
    zh_cn: "批量设置块属性",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/attr/getBlockAttrs",
    en: "getBlockAttrs",
    zh_cn: "获取块属性",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/attr/getBookmarkLabels",
    en: "getBookmarkLabels",
    zh_cn: "获取书签标签",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/attr/resetBlockAttrs",
    en: "resetBlockAttrs",
    zh_cn: "重置块属性",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/attr/setBlockAttrs",
    en: "setBlockAttrs",
    zh_cn: "设置块属性",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  }
];
