export const uiApiDefs = [
  {
    method: "POST",
    endpoint: "/api/ui/reloadAttributeView",
    en: "reloadAttributeView",
    zh_cn: undefined,
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/ui/reloadFiletree",
    en: "reloadFiletree",
    zh_cn: undefined,
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/ui/reloadProtyle",
    en: "reloadProtyle",
    zh_cn: undefined,
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/ui/reloadTag",
    en: "reloadTag",
    zh_cn: undefined,
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/ui/reloadUI",
    en: "reloadUI",
    zh_cn: undefined,
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  }
];
