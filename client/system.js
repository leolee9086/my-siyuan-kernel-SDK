// Generated client for API group system
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
 * 将思源笔记相关目录添加到 Microsoft Defender 的排除项中，以避免潜在的性能问题或冲突。此操作仅在 Windows 系统上有效。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @returns {Promise<AddMicrosoftDefenderExclusionResponse>}
 */
export async function addMicrosoftDefenderExclusion() {
  return fetchWrapper('POST', '/api/system/addMicrosoftDefenderExclusion', undefined, true);
}

/**
 * 获取思源笔记内核的启动进度。此接口也接受 POST 请求。
 * @returns {Promise<BootProgressResponse>}
 */
export async function bootProgress() {
  return fetchWrapper('GET', '/api/system/bootProgress', undefined, false);
}

/**
 * 获取思源笔记内核的启动进度。此接口也接受 GET 请求。
 * @returns {Promise<BootProgressResponse>}
 */
export async function bootProgress() {
  return fetchWrapper('POST', '/api/system/bootProgress', undefined, false);
}

/**
 * 检查思源笔记是否有新版本。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<CheckUpdateResponse>}
 * @param {boolean} params.showMsg 是否在检查后显示提示消息给用户
 */
export async function checkUpdate(params) {
  return fetchWrapper('POST', '/api/system/checkUpdate', params, true);
}

/**
 * 检查指定路径是否可以作为思源笔记的工作空间目录。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<CheckWorkspaceDirResponse>}
 * @param {string} params.path 要检查的目录绝对路径
 */
export async function checkWorkspaceDir(params) {
  return fetchWrapper('POST', '/api/system/checkWorkspaceDir', params, true);
}

/**
 * 在指定路径创建一个新的思源笔记工作空间。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<CreateWorkspaceDirResponse>}
 * @param {string} params.path 要创建工作空间的目录绝对路径
 */
export async function createWorkspaceDir(params) {
  return fetchWrapper('POST', '/api/system/createWorkspaceDir', params, true);
}

/**
 * 获取思源笔记服务器当前的 Unix 时间戳 (毫秒)。
 * @returns {Promise<CurrentTimeResponse>}
 */
export async function currentTime() {
  return fetchWrapper('POST', '/api/system/currentTime', undefined, false);
}

/**
 * 关闭并退出思源笔记程序。
 * (Requires authentication, Requires admin role)
 * @returns {Promise<ExitResponse>}
 */
export async function exit() {
  return fetchWrapper('POST', '/api/system/exit', undefined, true);
}

/**
 * 导出一份包含当前用户所有配置的 JSON 文件。
 * (Requires authentication, Requires admin role)
 * @returns {Promise<ExportConfResponse>}
 */
export async function exportConf() {
  return fetchWrapper('POST', '/api/system/exportConf', undefined, true);
}

/**
 * 导出包含系统运行日志的压缩文件。
 * (Requires authentication, Requires admin role)
 * @returns {Promise<ExportLogResponse>}
 */
export async function exportLog() {
  return fetchWrapper('POST', '/api/system/exportLog', undefined, true);
}

/**
 * 获取用于登录验证的图片验证码。
 * @returns {Promise<GetCaptchaResponse>}
 */
export async function GetCaptcha() {
  return fetchWrapper('GET', '/api/system/getCaptcha', undefined, false);
}

/**
 * 获取当前版本的更新日志内容 (Markdown 格式转换为 HTML)。
 * (Requires authentication)
 * @returns {Promise<GetChangelogResponse>}
 */
export async function getChangelog() {
  return fetchWrapper('POST', '/api/system/getChangelog', undefined, true);
}

/**
 * 获取思源笔记的全部配置信息。配置项繁多，具体结构请参考 `siyuan/kernel/conf/conf.go` 中的 `Conf` 结构体。
 * (Requires authentication)
 * @returns {Promise<GetConfResponse>}
 */
export async function getConf() {
  return fetchWrapper('POST', '/api/system/getConf', undefined, true);
}

/**
 * 获取内置及自定义 Emoji 的配置信息，用于 Emoji 选择器等功能。
 * (Requires authentication)
 * @returns {Promise<GetEmojiConfResponse>}
 */
export async function getEmojiConf() {
  return fetchWrapper('POST', '/api/system/getEmojiConf', undefined, true);
}

/**
 * 获取用于移动端同步的工作空间列表。
 * (Requires authentication, Requires admin role)
 * @returns {Promise<GetMobileWorkspacesResponse>}
 */
export async function getMobileWorkspaces() {
  return fetchWrapper('POST', '/api/system/getMobileWorkspaces', undefined, true);
}

/**
 * 获取当前的网络代理等配置信息。
 * (Requires authentication, Requires admin role)
 * @returns {Promise<GetNetworkResponse>}
 */
export async function getNetwork() {
  return fetchWrapper('POST', '/api/system/getNetwork', undefined, true);
}

/**
 * 获取当前操作系统上安装的可用字体列表。
 * (Requires authentication, Requires admin role)
 * @returns {Promise<GetSysFontsResponse>}
 */
export async function getSysFonts() {
  return fetchWrapper('POST', '/api/system/getSysFonts', undefined, true);
}

/**
 * 获取当前打开的工作空间目录路径和思源版本号。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @returns {Promise<GetWorkspaceInfoResponse>}
 */
export async function getWorkspaceInfo() {
  return fetchWrapper('POST', '/api/system/getWorkspaceInfo', undefined, true);
}

/**
 * 获取所有已配置或曾经打开过的工作空间列表。
 * (Requires authentication)
 * @returns {Promise<GetWorkspacesResponse>}
 */
export async function getWorkspaces() {
  return fetchWrapper('POST', '/api/system/getWorkspaces', undefined, true);
}

/**
 * 设置不再提示用户添加 Microsoft Defender 排除项。此操作仅在 Windows 系统上有效。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @returns {Promise<IgnoreAddMicrosoftDefenderExclusionResponse>}
 */
export async function ignoreAddMicrosoftDefenderExclusion() {
  return fetchWrapper('POST', '/api/system/ignoreAddMicrosoftDefenderExclusion', undefined, true);
}

/**
 * 通过上传 `conf.json` 文件来导入用户配置。导入成功后通常需要重启或刷新UI生效。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<ImportConfResponse>}
 * @param {any} params.file 上传的 `conf.json` 文件。通常通过 FormData 提交。`z.instanceof(File)` 在此场景不适用，因为这是后端定义。前端应使用 `FormData`。
 */
export async function importConf(params) {
  return fetchWrapper('POST', '/api/system/importConf', params, true);
}

/**
 * 使用访问授权码或用户名密码进行登录验证。
 * @param {object} params - Request parameters.
 * @returns {Promise<LoginAuthResponse>}
 * @param {string} [params.authcode] authcode
 * @param {string} [params.captcha] captcha
 */
export async function LoginAuth(params) {
  return fetchWrapper('POST', '/api/system/loginAuth', params, false);
}

/**
 * 清除当前的登录授权状态。
 * @returns {Promise<LogoutAuthResponse>}
 */
export async function LogoutAuth() {
  return fetchWrapper('POST', '/api/system/logoutAuth', undefined, false);
}

/**
 * 命令客户端重新加载思源笔记的用户界面。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @returns {Promise<ReloadUIResponse>}
 */
export async function reloadUI() {
  return fetchWrapper('POST', '/api/system/reloadUI', undefined, true);
}

/**
 * 从工作空间列表中移除指定的目录（逻辑删除，不删除物理文件）。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RemoveWorkspaceDirResponse>}
 * @param {string} params.path 要移除的工作空间的绝对路径
 */
export async function removeWorkspaceDir(params) {
  return fetchWrapper('POST', '/api/system/removeWorkspaceDir', params, true);
}

/**
 * 从工作空间列表中移除并物理删除指定目录及其所有内容。这是一个危险操作！
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RemoveWorkspaceDirPhysicallyResponse>}
 * @param {Array<string>} params.paths 要物理删除的工作空间的绝对路径列表
 */
export async function removeWorkspaceDirPhysically(params) {
  return fetchWrapper('POST', '/api/system/removeWorkspaceDirPhysically', params, true);
}

/**
 * 设置或清空 API 访问令牌 (token)。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetAPITokenResponse>}
 * @param {string} params.token 新的 API 令牌。如果为空字符串，则表示清空令牌。
 */
export async function setAPIToken(params) {
  return fetchWrapper('POST', '/api/system/setAPIToken', params, true);
}

/**
 * 设置或清空访问思源笔记的授权码。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetAccessAuthCodeResponse>}
 * @param {string} params.code 新的访问授权码。如果为空字符串，则表示清空授权码。
 * @param {boolean} [params.permanent] permanent
 */
export async function setAccessAuthCode(params) {
  return fetchWrapper('POST', '/api/system/setAccessAuthCode', params, true);
}

/**
 * 设置思源笔记的外观模式 (亮色/暗色)。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetAppearanceModeResponse>}
 * @param {number} params.mode 外观模式：0 表示亮色 (Light)，1 表示暗色 (Dark)
 */
export async function setAppearanceMode(params) {
  return fetchWrapper('POST', '/api/system/setAppearanceMode', params, true);
}

/**
 * 设置思源笔记是否开机自启动 (仅对桌面客户端有效)。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetAutoLaunchResponse>}
 * @param {boolean} params.autoLaunch 是否开机自启动
 */
export async function setAutoLaunch(params) {
  return fetchWrapper('POST', '/api/system/setAutoLaunch', params, true);
}

/**
 * 设置是否在检测到新版本后自动下载并安装更新包。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetDownloadInstallPkgResponse>}
 * @param {boolean} params.downloadInstallPkg 是否自动下载并安装更新包
 */
export async function setDownloadInstallPkg(params) {
  return fetchWrapper('POST', '/api/system/setDownloadInstallPkg', params, true);
}

/**
 * 设置思源笔记是否在系统锁屏时自动锁定 (仅对桌面客户端有效)。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetFollowSystemLockScreenResponse>}
 * @param {boolean} params.follow 是否跟随系统锁屏
 */
export async function setFollowSystemLockScreen(params) {
  return fetchWrapper('POST', '/api/system/setFollowSystemLockScreen', params, true);
}

/**
 * 启用或禁用 Google Analytics 数据追踪。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetGoogleAnalyticsResponse>}
 * @param {boolean} params.enabled 是否启用 Google Analytics
 */
export async function setGoogleAnalytics(params) {
  return fetchWrapper('POST', '/api/system/setGoogleAnalytics', params, true);
}

/**
 * 设置网络连接时使用的代理服务器。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetNetworkProxyResponse>}
 * @param {string} params.proxy 代理服务器地址，例如 'http://127.0.0.1:7890', 'socks5://127.0.0.1:1080'。如果为空字符串，则表示清除代理设置。
 */
export async function setNetworkProxy(params) {
  return fetchWrapper('POST', '/api/system/setNetworkProxy', params, true);
}

/**
 * 配置思源笔记的网络服务，如服务端口、是否允许其他设备访问等。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetNetworkServeResponse>}
 * @param {boolean} params.serve 是否启用网络服务
 * @param {string} params.port 网络服务端口号，字符串形式，例如 '6806'
 * @param {string} params.accessPermission 网络访问权限：'lan' (仅局域网), 'wan' (允许公网，需谨慎), 'localhost' (仅本机)
 */
export async function setNetworkServe(params) {
  return fetchWrapper('POST', '/api/system/setNetworkServe', params, true);
}

/**
 * 设置用户界面的布局模式，例如左右布局、顶部分栏等。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetUILayoutResponse>}
 * @param {string} params.layout UI 布局模式的标识符字符串
 */
export async function setUILayout(params) {
  return fetchWrapper('POST', '/api/system/setUILayout', params, true);
}

/**
 * 切换到指定路径的工作空间。成功后通常需要重启或刷新 UI。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetWorkspaceDirResponse>}
 * @param {string} params.path 要切换到的工作空间的绝对路径
 */
export async function setWorkspaceDir(params) {
  return fetchWrapper('POST', '/api/system/setWorkspaceDir', params, true);
}

/**
 * （内部接口）用于桌面端添加 UI 进程的相关信息，如 PID。通常不由普通用户或第三方应用直接调用。
 * @param {object} params - Request parameters.
 * @returns {Promise<AddUIProcessResponse>}
 * @param {number} [params.pid] pid
 */
export async function addUIProcess(params) {
  return fetchWrapper('POST', '/api/system/uiproc', params, false);
}

/**
 * 获取当前思源笔记内核的版本号。此接口也接受 POST 请求。
 * @returns {Promise<VersionResponse>}
 */
export async function version() {
  return fetchWrapper('GET', '/api/system/version', undefined, false);
}

/**
 * 获取当前思源笔记内核的版本号。此接口也接受 GET 请求。
 * @returns {Promise<VersionResponse>}
 */
export async function version() {
  return fetchWrapper('POST', '/api/system/version', undefined, false);
}

