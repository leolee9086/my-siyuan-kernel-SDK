export const petalApiDefs = [
  {
    method: "POST",
    endpoint: "/api/petal/loadPetals",
    en: "loadPetals",
    zh_cn: undefined,
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/petal/setPetalEnabled",
    en: "setPetalEnabled",
    zh_cn: undefined,
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  }
];
