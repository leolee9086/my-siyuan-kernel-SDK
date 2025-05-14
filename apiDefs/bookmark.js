export const bookmarkApiDefs = [
  {
    method: "POST",
    endpoint: "/api/bookmark/getBookmark",
    en: "getBookmark",
    zh_cn: "获取书签",
    needAuth: true,
    needAdminRole: false,
    unavailableIfReadonly: false,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/bookmark/removeBookmark",
    en: "removeBookmark",
    zh_cn: "移除书签",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  },
  {
    method: "POST",
    endpoint: "/api/bookmark/renameBookmark",
    en: "renameBookmark",
    zh_cn: "重命名书签",
    needAuth: true,
    needAdminRole: true,
    unavailableIfReadonly: true,
    zodRequestSchema: (z) => ({}),
    zodResponseSchema: (z) => ({})
  }
];
