// Generated client for API group bazaar\n// TODO: Implement or import a common HTTP request wrapper function (e.g., fetchWrapper)\n/*\nasync function fetchWrapper(method, endpoint, params, needAuth) {\n  const SiyuanKernelPrefix = typeof window === 'object' ? '' : 'http://127.0.0.1:6806';\n  const url = SiyuanKernelPrefix + endpoint;\n  const options = { method, headers: {} };\n  if (method === 'POST' && params && Object.keys(params).length > 0) { // Only add body if params exist and are not empty\n    options.headers['Content-Type'] = 'application/json';\n    options.body = JSON.stringify(params);\n  }\n  if (needAuth) {\n    // Example: Retrieve and add auth token\n    // const token = localStorage.getItem('siyuan-auth-token'); \n    // if (token) options.headers['Authorization'] = `Token ${token}`;\n    options.headers['Authorization'] = 'Bearer YOUR_TOKEN_HERE'; // Placeholder\n  }\n  const response = await fetch(url, options);\n  if (!response.ok) {\n    let errorData = 'Failed to parse error response';\n    try { errorData = await response.json(); } catch (e) { try {errorData = await response.text(); } catch (e2) { /* ignore secondary error */ }}\n    console.error('API Error:', response.status, errorData); \n    throw new Error(`API Error ${response.status}: ${JSON.stringify(errorData)}`);\n  }\n  const contentType = response.headers.get('content-type');\n  if (contentType && contentType.includes('application/json')) {\n    return response.json();\n  } \n  return response.text(); // Or handle other content types\n}\n*/\n\n/**\n * 根据指定的客户端类型（如 'frontend'）批量更新思源笔记本地缓存的集市包信息。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.frontend 客户端类型，通常为 'frontend' 或 'app'
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {any} Data Data
 */\nexport async function batchUpdatePackage(params) {\n  // Example: return fetchWrapper('POST', '/api/bazaar/batchUpdatePackage', params, true);\n  console.log('Mock call to batchUpdatePackage with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<BatchUpdatePackageResponse>\n}\n\n/**\n * 从集市获取所有可用的图标包列表，支持关键词筛选。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} [params.keyword] keyword
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function getBazaarIcon(params) {\n  // Example: return fetchWrapper('POST', '/api/bazaar/getBazaarIcon', params, true);\n  console.log('Mock call to getBazaarIcon with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetBazaarIconResponse>\n}\n\n/**\n * 获取指定集市包（通过仓库URL、哈希和类型指定）的 README 文件内容 (HTML格式)。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.repoURL 包所在的仓库 URL
 * @param {string} params.repoHash 包在仓库中的特定提交哈希或版本标签
 * @param {string} params.packageType 包类型 (例如 'icons', 'plugins', 'themes', 'templates', 'widgets')
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function getBazaarPackageREAME(params) {\n  // Example: return fetchWrapper('POST', '/api/bazaar/getBazaarPackageREAME', params, true);\n  console.log('Mock call to getBazaarPackageREAME with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetBazaarPackageREAMEResponse>\n}\n\n/**\n * 从集市获取所有可用的插件列表，支持按前端类型和关键词筛选。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.frontend 客户端类型，通常为 'frontend' 或 'app'
 * @param {string} [params.keyword] keyword
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function getBazaarPlugin(params) {\n  // Example: return fetchWrapper('POST', '/api/bazaar/getBazaarPlugin', params, true);\n  console.log('Mock call to getBazaarPlugin with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetBazaarPluginResponse>\n}\n\n/**\n * 从集市获取所有可用的模板列表，支持关键词筛选。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} [params.keyword] keyword
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function getBazaarTemplate(params) {\n  // Example: return fetchWrapper('POST', '/api/bazaar/getBazaarTemplate', params, true);\n  console.log('Mock call to getBazaarTemplate with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetBazaarTemplateResponse>\n}\n\n/**\n * 从集市获取所有可用的主题列表，支持关键词筛选。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} [params.keyword] keyword
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function getBazaarTheme(params) {\n  // Example: return fetchWrapper('POST', '/api/bazaar/getBazaarTheme', params, true);\n  console.log('Mock call to getBazaarTheme with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetBazaarThemeResponse>\n}\n\n/**\n * 从集市获取所有可用的挂件列表，支持关键词筛选。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} [params.keyword] keyword
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function getBazaarWidget(params) {\n  // Example: return fetchWrapper('POST', '/api/bazaar/getBazaarWidget', params, true);\n  console.log('Mock call to getBazaarWidget with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetBazaarWidgetResponse>\n}\n\n/**\n * 获取本地已安装的图标包列表，支持关键词筛选。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} [params.keyword] keyword
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function getInstalledIcon(params) {\n  // Example: return fetchWrapper('POST', '/api/bazaar/getInstalledIcon', params, true);\n  console.log('Mock call to getInstalledIcon with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetInstalledIconResponse>\n}\n\n/**\n * 获取本地已安装的插件列表，支持按前端类型和关键词筛选。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.frontend 客户端类型，通常为 'frontend' 或 'app'
 * @param {string} [params.keyword] keyword
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function getInstalledPlugin(params) {\n  // Example: return fetchWrapper('POST', '/api/bazaar/getInstalledPlugin', params, true);\n  console.log('Mock call to getInstalledPlugin with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetInstalledPluginResponse>\n}\n\n/**\n * 获取本地已安装的模板列表，支持关键词筛选。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} [params.keyword] keyword
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function getInstalledTemplate(params) {\n  // Example: return fetchWrapper('POST', '/api/bazaar/getInstalledTemplate', params, true);\n  console.log('Mock call to getInstalledTemplate with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetInstalledTemplateResponse>\n}\n\n/**\n * 获取本地已安装的主题列表，支持关键词筛选。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} [params.keyword] keyword
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function getInstalledTheme(params) {\n  // Example: return fetchWrapper('POST', '/api/bazaar/getInstalledTheme', params, true);\n  console.log('Mock call to getInstalledTheme with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetInstalledThemeResponse>\n}\n\n/**\n * 获取本地已安装的挂件列表，支持关键词筛选。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} [params.keyword] keyword
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function getInstalledWidget(params) {\n  // Example: return fetchWrapper('POST', '/api/bazaar/getInstalledWidget', params, true);\n  console.log('Mock call to getInstalledWidget with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetInstalledWidgetResponse>\n}\n\n/**\n * 检查并返回所有已安装且存在更新的集市包（插件、挂件、图标、主题、模板）。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.frontend 客户端类型，通常为 'frontend' 或 'app'
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function getUpdatedPackage(params) {\n  // Example: return fetchWrapper('POST', '/api/bazaar/getUpdatedPackage', params, true);\n  console.log('Mock call to getUpdatedPackage with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetUpdatedPackageResponse>\n}\n\n/**\n * 从集市安装指定的图标包。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.repoURL 图标包所在的仓库 URL
 * @param {string} params.repoHash 图标包在仓库中的特定提交哈希或版本标签
 * @param {string} params.packageName 图标包的名称 (通常是仓库名)
 * @param {string} [params.keyword] keyword
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function installBazaarIcon(params) {\n  // Example: return fetchWrapper('POST', '/api/bazaar/installBazaarIcon', params, true);\n  console.log('Mock call to installBazaarIcon with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<InstallBazaarIconResponse>\n}\n\n/**\n * 从集市安装指定的插件。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.repoURL 插件所在的仓库 URL
 * @param {string} params.repoHash 插件在仓库中的特定提交哈希或版本标签
 * @param {string} params.packageName 插件的名称 (通常是仓库名)
 * @param {string} params.frontend 客户端类型，通常为 'frontend' 或 'app'
 * @param {string} [params.keyword] keyword
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function installBazaarPlugin(params) {\n  // Example: return fetchWrapper('POST', '/api/bazaar/installBazaarPlugin', params, true);\n  console.log('Mock call to installBazaarPlugin with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<InstallBazaarPluginResponse>\n}\n\n/**\n * 从集市安装指定的模板。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.repoURL 模板所在的仓库 URL
 * @param {string} params.repoHash 模板在仓库中的特定提交哈希或版本标签
 * @param {string} params.packageName 模板的名称 (通常是仓库名)
 * @param {string} [params.keyword] keyword
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function installBazaarTemplate(params) {\n  // Example: return fetchWrapper('POST', '/api/bazaar/installBazaarTemplate', params, true);\n  console.log('Mock call to installBazaarTemplate with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<InstallBazaarTemplateResponse>\n}\n\n/**\n * 从集市安装指定的主题，并可指定主题模式 (mode) 和是否为更新 (update)。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.repoURL 主题所在的仓库 URL
 * @param {string} params.repoHash 主题在仓库中的特定提交哈希或版本标签
 * @param {string} params.packageName 主题的名称 (通常是仓库名)
 * @param {number} params.mode 主题模式 (0: 亮色, 1: 暗色, 2: 根据系统)
 * @param {boolean} [params.update] update
 * @param {string} [params.keyword] keyword
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function installBazaarTheme(params) {\n  // Example: return fetchWrapper('POST', '/api/bazaar/installBazaarTheme', params, true);\n  console.log('Mock call to installBazaarTheme with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<InstallBazaarThemeResponse>\n}\n\n/**\n * 从集市安装指定的挂件。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.repoURL 挂件所在的仓库 URL
 * @param {string} params.repoHash 挂件在仓库中的特定提交哈希或版本标签
 * @param {string} params.packageName 挂件的名称 (通常是仓库名)
 * @param {string} [params.keyword] keyword
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function installBazaarWidget(params) {\n  // Example: return fetchWrapper('POST', '/api/bazaar/installBazaarWidget', params, true);\n  console.log('Mock call to installBazaarWidget with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<InstallBazaarWidgetResponse>\n}\n\n/**\n * 卸载本地已安装的指定图标包。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.packageName 要卸载的图标包的名称
 * @param {string} [params.keyword] keyword
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function uninstallBazaarIcon(params) {\n  // Example: return fetchWrapper('POST', '/api/bazaar/uninstallBazaarIcon', params, true);\n  console.log('Mock call to uninstallBazaarIcon with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<UninstallBazaarIconResponse>\n}\n\n/**\n * 卸载本地已安装的指定插件。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.packageName 要卸载的插件的名称
 * @param {string} params.frontend 客户端类型，通常为 'frontend' 或 'app'
 * @param {string} [params.keyword] keyword
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function uninstallBazaarPlugin(params) {\n  // Example: return fetchWrapper('POST', '/api/bazaar/uninstallBazaarPlugin', params, true);\n  console.log('Mock call to uninstallBazaarPlugin with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<UninstallBazaarPluginResponse>\n}\n\n/**\n * 卸载本地已安装的指定模板。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.packageName 要卸载的模板的名称
 * @param {string} [params.keyword] keyword
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function uninstallBazaarTemplate(params) {\n  // Example: return fetchWrapper('POST', '/api/bazaar/uninstallBazaarTemplate', params, true);\n  console.log('Mock call to uninstallBazaarTemplate with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<UninstallBazaarTemplateResponse>\n}\n\n/**\n * 卸载本地已安装的指定主题。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.packageName 要卸载的主题的名称
 * @param {number} params.mode 主题模式 (0: 亮色, 1: 暗色, 2: 根据系统)，用于确定要卸载哪个模式下的主题或重置相关配置
 * @param {string} [params.keyword] keyword
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function uninstallBazaarTheme(params) {\n  // Example: return fetchWrapper('POST', '/api/bazaar/uninstallBazaarTheme', params, true);\n  console.log('Mock call to uninstallBazaarTheme with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<UninstallBazaarThemeResponse>\n}\n\n/**\n * 卸载本地已安装的指定挂件。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.packageName 要卸载的挂件的名称
 * @param {string} [params.keyword] keyword
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 返回消息
 * @property {object} Data Data
 */\nexport async function uninstallBazaarWidget(params) {\n  // Example: return fetchWrapper('POST', '/api/bazaar/uninstallBazaarWidget', params, true);\n  console.log('Mock call to uninstallBazaarWidget with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<UninstallBazaarWidgetResponse>\n}\n\n