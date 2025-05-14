export const storageApiDefs = [
  {
    method: "POST",
    endpoint: "/api/storage/getCriteria",
    en: "getCriteria",
    zh_cn: "获取标准",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/storage/getLocalStorage",
    en: "getLocalStorage",
    zh_cn: "获取存储",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/storage/getRecentDocs",
    en: "getRecentDocs",
    zh_cn: "获取最近文档",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/storage/removeCriterion",
    en: "removeCriterion",
    zh_cn: "移除标准",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/storage/removeLocalStorageVals",
    en: "removeLocalStorageVals",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zh_cn: undefined,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/storage/setCriterion",
    en: "setCriterion",
    zh_cn: "设置标准",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/storage/setLocalStorage",
    en: "setLocalStorage",
    zh_cn: "设置存储",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/storage/setLocalStorageVal",
    en: "setLocalStorageVal",
    zh_cn: "设置存储项",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  }
];
