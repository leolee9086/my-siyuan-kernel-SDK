// Generated client for API group bazaar
// TODO: Implement or import a common HTTP request wrapper function (e.g., fetchWrapper)
async function fetchWrapper(method, endpoint, params, needAuth) {
  const SiyuanKernelPrefix = typeof window === 'object' ? '' : 'http://127.0.0.1:6806';
  const url = SiyuanKernelPrefix + endpoint;
  const options = { method, headers: {} };
  if (method === 'POST' && params && Object.keys(params).length > 0) { // Only add body if params exist and are not empty
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(params);
  }
  if (needAuth) {
    // Example: Retrieve and add auth token
    // const token = localStorage.getItem('siyuan-auth-token'); 
    // if (token) options.headers['Authorization'] = `Token ${token}`;
    options.headers['Authorization'] = 'Bearer YOUR_TOKEN_HERE'; // Placeholder
  }
  const response = await fetch(url, options);
  if (!response.ok) {
    let errorData = 'Failed to parse error response';
    try { errorData = await response.json(); } catch (e) { try {errorData = await response.text(); } catch (e2) { /* ignore secondary error */ }}    console.error('API Error:', response.status, errorData); 
    throw new Error(`API Error ${response.status}: ${JSON.stringify(errorData)}`);
  }
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return response.json();
  } 
  return response.text(); // Or handle other content types
}

/**
 * 根据指定的客户端类型（如 'frontend'）批量更新思源笔记本地缓存的集市包信息。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<BatchUpdatePackageResponse>}
 * @param {string} params.frontend 客户端类型，通常为 'frontend' 或 'app'
 */
export async function batchUpdatePackage(params) {
  return fetchWrapper('POST', '/api/bazaar/batchUpdatePackage', params, true);
}

/**
 * 从集市获取所有可用的图标包列表，支持关键词筛选。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetBazaarIconResponse>}
 * @param {string} [params.keyword] keyword
 */
export async function getBazaarIcon(params) {
  return fetchWrapper('POST', '/api/bazaar/getBazaarIcon', params, true);
}

/**
 * 获取指定集市包（通过仓库URL、哈希和类型指定）的 README 文件内容 (HTML格式)。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetBazaarPackageREAMEResponse>}
 * @param {string} params.repoURL 包所在的仓库 URL
 * @param {string} params.repoHash 包在仓库中的特定提交哈希或版本标签
 * @param {string} params.packageType 包类型 (例如 'icons', 'plugins', 'themes', 'templates', 'widgets')
 */
export async function getBazaarPackageREAME(params) {
  return fetchWrapper('POST', '/api/bazaar/getBazaarPackageREAME', params, true);
}

/**
 * 从集市获取所有可用的插件列表，支持按前端类型和关键词筛选。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetBazaarPluginResponse>}
 * @param {string} params.frontend 客户端类型，通常为 'frontend' 或 'app'
 * @param {string} [params.keyword] keyword
 */
export async function getBazaarPlugin(params) {
  return fetchWrapper('POST', '/api/bazaar/getBazaarPlugin', params, true);
}

/**
 * 从集市获取所有可用的模板列表，支持关键词筛选。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetBazaarTemplateResponse>}
 * @param {string} [params.keyword] keyword
 */
export async function getBazaarTemplate(params) {
  return fetchWrapper('POST', '/api/bazaar/getBazaarTemplate', params, true);
}

/**
 * 从集市获取所有可用的主题列表，支持关键词筛选。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetBazaarThemeResponse>}
 * @param {string} [params.keyword] keyword
 */
export async function getBazaarTheme(params) {
  return fetchWrapper('POST', '/api/bazaar/getBazaarTheme', params, true);
}

/**
 * 从集市获取所有可用的挂件列表，支持关键词筛选。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetBazaarWidgetResponse>}
 * @param {string} [params.keyword] keyword
 */
export async function getBazaarWidget(params) {
  return fetchWrapper('POST', '/api/bazaar/getBazaarWidget', params, true);
}

/**
 * 获取本地已安装的图标包列表，支持关键词筛选。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetInstalledIconResponse>}
 * @param {string} [params.keyword] keyword
 */
export async function getInstalledIcon(params) {
  return fetchWrapper('POST', '/api/bazaar/getInstalledIcon', params, true);
}

/**
 * 获取本地已安装的插件列表，支持按前端类型和关键词筛选。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetInstalledPluginResponse>}
 * @param {string} params.frontend 客户端类型，通常为 'frontend' 或 'app'
 * @param {string} [params.keyword] keyword
 */
export async function getInstalledPlugin(params) {
  return fetchWrapper('POST', '/api/bazaar/getInstalledPlugin', params, true);
}

/**
 * 获取本地已安装的模板列表，支持关键词筛选。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetInstalledTemplateResponse>}
 * @param {string} [params.keyword] keyword
 */
export async function getInstalledTemplate(params) {
  return fetchWrapper('POST', '/api/bazaar/getInstalledTemplate', params, true);
}

/**
 * 获取本地已安装的主题列表，支持关键词筛选。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetInstalledThemeResponse>}
 * @param {string} [params.keyword] keyword
 */
export async function getInstalledTheme(params) {
  return fetchWrapper('POST', '/api/bazaar/getInstalledTheme', params, true);
}

/**
 * 获取本地已安装的挂件列表，支持关键词筛选。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetInstalledWidgetResponse>}
 * @param {string} [params.keyword] keyword
 */
export async function getInstalledWidget(params) {
  return fetchWrapper('POST', '/api/bazaar/getInstalledWidget', params, true);
}

/**
 * 检查并返回所有已安装且存在更新的集市包（插件、挂件、图标、主题、模板）。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetUpdatedPackageResponse>}
 * @param {string} params.frontend 客户端类型，通常为 'frontend' 或 'app'
 */
export async function getUpdatedPackage(params) {
  return fetchWrapper('POST', '/api/bazaar/getUpdatedPackage', params, true);
}

/**
 * 从集市安装指定的图标包。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<InstallBazaarIconResponse>}
 * @param {string} params.repoURL 图标包所在的仓库 URL
 * @param {string} params.repoHash 图标包在仓库中的特定提交哈希或版本标签
 * @param {string} params.packageName 图标包的名称 (通常是仓库名)
 * @param {string} [params.keyword] keyword
 */
export async function installBazaarIcon(params) {
  return fetchWrapper('POST', '/api/bazaar/installBazaarIcon', params, true);
}

/**
 * 从集市安装指定的插件。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<InstallBazaarPluginResponse>}
 * @param {string} params.repoURL 插件所在的仓库 URL
 * @param {string} params.repoHash 插件在仓库中的特定提交哈希或版本标签
 * @param {string} params.packageName 插件的名称 (通常是仓库名)
 * @param {string} params.frontend 客户端类型，通常为 'frontend' 或 'app'
 * @param {string} [params.keyword] keyword
 */
export async function installBazaarPlugin(params) {
  return fetchWrapper('POST', '/api/bazaar/installBazaarPlugin', params, true);
}

/**
 * 从集市安装指定的模板。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<InstallBazaarTemplateResponse>}
 * @param {string} params.repoURL 模板所在的仓库 URL
 * @param {string} params.repoHash 模板在仓库中的特定提交哈希或版本标签
 * @param {string} params.packageName 模板的名称 (通常是仓库名)
 * @param {string} [params.keyword] keyword
 */
export async function installBazaarTemplate(params) {
  return fetchWrapper('POST', '/api/bazaar/installBazaarTemplate', params, true);
}

/**
 * 从集市安装指定的主题，并可指定主题模式 (mode) 和是否为更新 (update)。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<InstallBazaarThemeResponse>}
 * @param {string} params.repoURL 主题所在的仓库 URL
 * @param {string} params.repoHash 主题在仓库中的特定提交哈希或版本标签
 * @param {string} params.packageName 主题的名称 (通常是仓库名)
 * @param {number} params.mode 主题模式 (0: 亮色, 1: 暗色, 2: 根据系统)
 * @param {boolean} [params.update] update
 * @param {string} [params.keyword] keyword
 */
export async function installBazaarTheme(params) {
  return fetchWrapper('POST', '/api/bazaar/installBazaarTheme', params, true);
}

/**
 * 从集市安装指定的挂件。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<InstallBazaarWidgetResponse>}
 * @param {string} params.repoURL 挂件所在的仓库 URL
 * @param {string} params.repoHash 挂件在仓库中的特定提交哈希或版本标签
 * @param {string} params.packageName 挂件的名称 (通常是仓库名)
 * @param {string} [params.keyword] keyword
 */
export async function installBazaarWidget(params) {
  return fetchWrapper('POST', '/api/bazaar/installBazaarWidget', params, true);
}

/**
 * 卸载本地已安装的指定图标包。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<UninstallBazaarIconResponse>}
 * @param {string} params.packageName 要卸载的图标包的名称
 * @param {string} [params.keyword] keyword
 */
export async function uninstallBazaarIcon(params) {
  return fetchWrapper('POST', '/api/bazaar/uninstallBazaarIcon', params, true);
}

/**
 * 卸载本地已安装的指定插件。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<UninstallBazaarPluginResponse>}
 * @param {string} params.packageName 要卸载的插件的名称
 * @param {string} params.frontend 客户端类型，通常为 'frontend' 或 'app'
 * @param {string} [params.keyword] keyword
 */
export async function uninstallBazaarPlugin(params) {
  return fetchWrapper('POST', '/api/bazaar/uninstallBazaarPlugin', params, true);
}

/**
 * 卸载本地已安装的指定模板。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<UninstallBazaarTemplateResponse>}
 * @param {string} params.packageName 要卸载的模板的名称
 * @param {string} [params.keyword] keyword
 */
export async function uninstallBazaarTemplate(params) {
  return fetchWrapper('POST', '/api/bazaar/uninstallBazaarTemplate', params, true);
}

/**
 * 卸载本地已安装的指定主题。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<UninstallBazaarThemeResponse>}
 * @param {string} params.packageName 要卸载的主题的名称
 * @param {number} params.mode 主题模式 (0: 亮色, 1: 暗色, 2: 根据系统)，用于确定要卸载哪个模式下的主题或重置相关配置
 * @param {string} [params.keyword] keyword
 */
export async function uninstallBazaarTheme(params) {
  return fetchWrapper('POST', '/api/bazaar/uninstallBazaarTheme', params, true);
}

/**
 * 卸载本地已安装的指定挂件。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<UninstallBazaarWidgetResponse>}
 * @param {string} params.packageName 要卸载的挂件的名称
 * @param {string} [params.keyword] keyword
 */
export async function uninstallBazaarWidget(params) {
  return fetchWrapper('POST', '/api/bazaar/uninstallBazaarWidget', params, true);
}

