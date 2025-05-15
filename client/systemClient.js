// Generated client for API group system\n// TODO: Implement or import a common HTTP request wrapper function (e.g., fetchWrapper)\n/*\nasync function fetchWrapper(method, endpoint, params, needAuth) {\n  const SiyuanKernelPrefix = typeof window === 'object' ? '' : 'http://127.0.0.1:6806';\n  const url = SiyuanKernelPrefix + endpoint;\n  const options = { method, headers: {} };\n  if (method === 'POST' && params && Object.keys(params).length > 0) { // Only add body if params exist and are not empty\n    options.headers['Content-Type'] = 'application/json';\n    options.body = JSON.stringify(params);\n  }\n  if (needAuth) {\n    // Example: Retrieve and add auth token\n    // const token = localStorage.getItem('siyuan-auth-token'); \n    // if (token) options.headers['Authorization'] = `Token ${token}`;\n    options.headers['Authorization'] = 'Bearer YOUR_TOKEN_HERE'; // Placeholder\n  }\n  const response = await fetch(url, options);\n  if (!response.ok) {\n    let errorData = 'Failed to parse error response';\n    try { errorData = await response.json(); } catch (e) { try {errorData = await response.text(); } catch (e2) { /* ignore secondary error */ }}\n    console.error('API Error:', response.status, errorData); \n    throw new Error(`API Error ${response.status}: ${JSON.stringify(errorData)}`);\n  }\n  const contentType = response.headers.get('content-type');\n  if (contentType && contentType.includes('application/json')) {\n    return response.json();\n  } \n  return response.text(); // Or handle other content types\n}\n*/\n\n/**\n * 将思源笔记相关目录添加到 Microsoft Defender 的排除项中，以避免潜在的性能问题或冲突。此操作仅在 Windows 系统上有效。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @returns {Promise<object>}\n * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {null} data 成功时总是为 null
 */\nexport async function addMicrosoftDefenderExclusion() {\n  // Example: return fetchWrapper('POST', '/api/system/addMicrosoftDefenderExclusion', undefined, true);\n  console.log('Mock call to addMicrosoftDefenderExclusion with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<AddMicrosoftDefenderExclusionResponse>\n}\n\n/**\n * 获取思源笔记内核的启动进度。此接口也接受 POST 请求。\n * @returns {Promise<object>}\n * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {object} data data
 */\nexport async function bootProgress() {\n  // Example: return fetchWrapper('GET', '/api/system/bootProgress', undefined, false);\n  console.log('Mock call to bootProgress with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<BootProgressResponse>\n}\n\n/**\n * 获取思源笔记内核的启动进度。此接口也接受 GET 请求。\n * @returns {Promise<object>}\n * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {object} data data
 */\nexport async function bootProgress() {\n  // Example: return fetchWrapper('POST', '/api/system/bootProgress', undefined, false);\n  console.log('Mock call to bootProgress with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<BootProgressResponse>\n}\n\n/**\n * 检查思源笔记是否有新版本。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {boolean} params.showMsg 是否在检查后显示提示消息给用户
 * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {null} data 成功时总是为 null，更新信息通过 WebSocket 推送或直接在 UI 弹出
 */\nexport async function checkUpdate(params) {\n  // Example: return fetchWrapper('POST', '/api/system/checkUpdate', params, true);\n  console.log('Mock call to checkUpdate with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<CheckUpdateResponse>\n}\n\n/**\n * 检查指定路径是否可以作为思源笔记的工作空间目录。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.path 要检查的目录绝对路径
 * @property {number} code 错误码，0 表示成功，-1 表示无效路径或检查失败
 * @property {string} msg 错误或提示信息
 * @property {object} data data
 */\nexport async function checkWorkspaceDir(params) {\n  // Example: return fetchWrapper('POST', '/api/system/checkWorkspaceDir', params, true);\n  console.log('Mock call to checkWorkspaceDir with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<CheckWorkspaceDirResponse>\n}\n\n/**\n * 在指定路径创建一个新的思源笔记工作空间。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.path 要创建工作空间的目录绝对路径
 * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {null} data 成功时总是为 null
 */\nexport async function createWorkspaceDir(params) {\n  // Example: return fetchWrapper('POST', '/api/system/createWorkspaceDir', params, true);\n  console.log('Mock call to createWorkspaceDir with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<CreateWorkspaceDirResponse>\n}\n\n/**\n * 获取思源笔记服务器当前的 Unix 时间戳 (毫秒)。\n * @returns {Promise<object>}\n * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {number} data 当前的 Unix 时间戳 (毫秒)
 */\nexport async function currentTime() {\n  // Example: return fetchWrapper('POST', '/api/system/currentTime', undefined, false);\n  console.log('Mock call to currentTime with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<CurrentTimeResponse>\n}\n\n/**\n * 关闭并退出思源笔记程序。\n * (Requires authentication, Requires admin role)\n * @returns {Promise<object>}\n * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {null} data 成功时总是为 null
 */\nexport async function exit() {\n  // Example: return fetchWrapper('POST', '/api/system/exit', undefined, true);\n  console.log('Mock call to exit with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExitResponse>\n}\n\n/**\n * 导出一份包含当前用户所有配置的 JSON 文件。\n * (Requires authentication, Requires admin role)\n * @returns {Promise<object>}\n * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {object} data data
 */\nexport async function exportConf() {\n  // Example: return fetchWrapper('POST', '/api/system/exportConf', undefined, true);\n  console.log('Mock call to exportConf with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportConfResponse>\n}\n\n/**\n * 导出包含系统运行日志的压缩文件。\n * (Requires authentication, Requires admin role)\n * @returns {Promise<object>}\n * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {object} data data
 */\nexport async function exportLog() {\n  // Example: return fetchWrapper('POST', '/api/system/exportLog', undefined, true);\n  console.log('Mock call to exportLog with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportLogResponse>\n}\n\n/**\n * 获取用于登录验证的图片验证码。\n * @returns {Promise<object>}\n * @property {number} code? code
 * @property {string} msg? msg
 * @property {string} data? data
 */\nexport async function GetCaptcha() {\n  // Example: return fetchWrapper('GET', '/api/system/getCaptcha', undefined, false);\n  console.log('Mock call to GetCaptcha with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetCaptchaResponse>\n}\n\n/**\n * 获取当前版本的更新日志内容 (Markdown 格式转换为 HTML)。\n * (Requires authentication)\n * @returns {Promise<object>}\n * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {object} data data
 */\nexport async function getChangelog() {\n  // Example: return fetchWrapper('POST', '/api/system/getChangelog', undefined, true);\n  console.log('Mock call to getChangelog with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetChangelogResponse>\n}\n\n/**\n * 获取思源笔记的全部配置信息。配置项繁多，具体结构请参考 `siyuan/kernel/conf/conf.go` 中的 `Conf` 结构体。\n * (Requires authentication)\n * @returns {Promise<object>}\n * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {any} data 包含所有配置项的对象，结构复杂，请参考 `siyuan/kernel/conf/conf.go` 中的 `Conf` 结构体。例如 `data.appearance.mode` 等。
 */\nexport async function getConf() {\n  // Example: return fetchWrapper('POST', '/api/system/getConf', undefined, true);\n  console.log('Mock call to getConf with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetConfResponse>\n}\n\n/**\n * 获取内置及自定义 Emoji 的配置信息，用于 Emoji 选择器等功能。\n * (Requires authentication)\n * @returns {Promise<object>}\n * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {Array<object>} data Emoji 配置数组，每个元素是一个 Emoji 分组
 */\nexport async function getEmojiConf() {\n  // Example: return fetchWrapper('POST', '/api/system/getEmojiConf', undefined, true);\n  console.log('Mock call to getEmojiConf with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetEmojiConfResponse>\n}\n\n/**\n * 获取用于移动端同步的工作空间列表。\n * (Requires authentication, Requires admin role)\n * @returns {Promise<object>}\n * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {Array<object>} data 移动端工作空间列表
 */\nexport async function getMobileWorkspaces() {\n  // Example: return fetchWrapper('POST', '/api/system/getMobileWorkspaces', undefined, true);\n  console.log('Mock call to getMobileWorkspaces with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetMobileWorkspacesResponse>\n}\n\n/**\n * 获取当前的网络代理等配置信息。\n * (Requires authentication, Requires admin role)\n * @returns {Promise<object>}\n * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {object} data data
 */\nexport async function getNetwork() {\n  // Example: return fetchWrapper('POST', '/api/system/getNetwork', undefined, true);\n  console.log('Mock call to getNetwork with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetNetworkResponse>\n}\n\n/**\n * 获取当前操作系统上安装的可用字体列表。\n * (Requires authentication, Requires admin role)\n * @returns {Promise<object>}\n * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {Array<object>} data 系统字体列表
 */\nexport async function getSysFonts() {\n  // Example: return fetchWrapper('POST', '/api/system/getSysFonts', undefined, true);\n  console.log('Mock call to getSysFonts with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetSysFontsResponse>\n}\n\n/**\n * 获取当前打开的工作空间目录路径和思源版本号。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @returns {Promise<object>}\n * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {object} data data
 */\nexport async function getWorkspaceInfo() {\n  // Example: return fetchWrapper('POST', '/api/system/getWorkspaceInfo', undefined, true);\n  console.log('Mock call to getWorkspaceInfo with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetWorkspaceInfoResponse>\n}\n\n/**\n * 获取所有已配置或曾经打开过的工作空间列表。\n * (Requires authentication)\n * @returns {Promise<object>}\n * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {Array<object>} data 工作空间列表
 */\nexport async function getWorkspaces() {\n  // Example: return fetchWrapper('POST', '/api/system/getWorkspaces', undefined, true);\n  console.log('Mock call to getWorkspaces with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetWorkspacesResponse>\n}\n\n/**\n * 设置不再提示用户添加 Microsoft Defender 排除项。此操作仅在 Windows 系统上有效。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @returns {Promise<object>}\n * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {null} data 成功时总是为 null
 */\nexport async function ignoreAddMicrosoftDefenderExclusion() {\n  // Example: return fetchWrapper('POST', '/api/system/ignoreAddMicrosoftDefenderExclusion', undefined, true);\n  console.log('Mock call to ignoreAddMicrosoftDefenderExclusion with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<IgnoreAddMicrosoftDefenderExclusionResponse>\n}\n\n/**\n * 通过上传 `conf.json` 文件来导入用户配置。导入成功后通常需要重启或刷新UI生效。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {any} params.file 上传的 `conf.json` 文件。通常通过 FormData 提交。`z.instanceof(File)` 在此场景不适用，因为这是后端定义。前端应使用 `FormData`。
 * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {null} data 成功时总是为 null
 */\nexport async function importConf(params) {\n  // Example: return fetchWrapper('POST', '/api/system/importConf', params, true);\n  console.log('Mock call to importConf with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ImportConfResponse>\n}\n\n/**\n * 使用访问授权码或用户名密码进行登录验证。\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} [params.authcode] authcode
 * @param {string} [params.captcha] captcha
 * @property {number} code 错误码，0 表示成功，其他表示失败 (如授权码错误、验证码错误等)
 * @property {string} msg 错误或提示信息
 * @property {null} data 成功时为 null，失败时也可能为 null
 */\nexport async function LoginAuth(params) {\n  // Example: return fetchWrapper('POST', '/api/system/loginAuth', params, false);\n  console.log('Mock call to LoginAuth with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<LoginAuthResponse>\n}\n\n/**\n * 清除当前的登录授权状态。\n * @returns {Promise<object>}\n * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {null} data 成功时总是为 null
 */\nexport async function LogoutAuth() {\n  // Example: return fetchWrapper('POST', '/api/system/logoutAuth', undefined, false);\n  console.log('Mock call to LogoutAuth with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<LogoutAuthResponse>\n}\n\n/**\n * 命令客户端重新加载思源笔记的用户界面。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @returns {Promise<object>}\n * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {null} data 成功时总是为 null
 */\nexport async function reloadUI() {\n  // Example: return fetchWrapper('POST', '/api/system/reloadUI', undefined, true);\n  console.log('Mock call to reloadUI with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ReloadUIResponse>\n}\n\n/**\n * 从工作空间列表中移除指定的目录（逻辑删除，不删除物理文件）。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.path 要移除的工作空间的绝对路径
 * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {null} data 成功时总是为 null
 */\nexport async function removeWorkspaceDir(params) {\n  // Example: return fetchWrapper('POST', '/api/system/removeWorkspaceDir', params, true);\n  console.log('Mock call to removeWorkspaceDir with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RemoveWorkspaceDirResponse>\n}\n\n/**\n * 从工作空间列表中移除并物理删除指定目录及其所有内容。这是一个危险操作！\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {Array<string>} params.paths 要物理删除的工作空间的绝对路径列表
 * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {null} data 成功时总是为 null
 */\nexport async function removeWorkspaceDirPhysically(params) {\n  // Example: return fetchWrapper('POST', '/api/system/removeWorkspaceDirPhysically', params, true);\n  console.log('Mock call to removeWorkspaceDirPhysically with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RemoveWorkspaceDirPhysicallyResponse>\n}\n\n/**\n * 设置或清空 API 访问令牌 (token)。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.token 新的 API 令牌。如果为空字符串，则表示清空令牌。
 * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {null} data 成功时总是为 null
 */\nexport async function setAPIToken(params) {\n  // Example: return fetchWrapper('POST', '/api/system/setAPIToken', params, true);\n  console.log('Mock call to setAPIToken with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetAPITokenResponse>\n}\n\n/**\n * 设置或清空访问思源笔记的授权码。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.code 新的访问授权码。如果为空字符串，则表示清空授权码。
 * @param {boolean} [params.permanent] permanent
 * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {null} data 成功时总是为 null
 */\nexport async function setAccessAuthCode(params) {\n  // Example: return fetchWrapper('POST', '/api/system/setAccessAuthCode', params, true);\n  console.log('Mock call to setAccessAuthCode with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetAccessAuthCodeResponse>\n}\n\n/**\n * 设置思源笔记的外观模式 (亮色/暗色)。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {number} params.mode 外观模式：0 表示亮色 (Light)，1 表示暗色 (Dark)
 * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {null} data 成功时总是为 null
 */\nexport async function setAppearanceMode(params) {\n  // Example: return fetchWrapper('POST', '/api/system/setAppearanceMode', params, true);\n  console.log('Mock call to setAppearanceMode with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetAppearanceModeResponse>\n}\n\n/**\n * 设置思源笔记是否开机自启动 (仅对桌面客户端有效)。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {boolean} params.autoLaunch 是否开机自启动
 * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {null} data 成功时总是为 null
 */\nexport async function setAutoLaunch(params) {\n  // Example: return fetchWrapper('POST', '/api/system/setAutoLaunch', params, true);\n  console.log('Mock call to setAutoLaunch with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetAutoLaunchResponse>\n}\n\n/**\n * 设置是否在检测到新版本后自动下载并安装更新包。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {boolean} params.downloadInstallPkg 是否自动下载并安装更新包
 * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {null} data 成功时总是为 null
 */\nexport async function setDownloadInstallPkg(params) {\n  // Example: return fetchWrapper('POST', '/api/system/setDownloadInstallPkg', params, true);\n  console.log('Mock call to setDownloadInstallPkg with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetDownloadInstallPkgResponse>\n}\n\n/**\n * 设置思源笔记是否在系统锁屏时自动锁定 (仅对桌面客户端有效)。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {boolean} params.follow 是否跟随系统锁屏
 * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {null} data 成功时总是为 null
 */\nexport async function setFollowSystemLockScreen(params) {\n  // Example: return fetchWrapper('POST', '/api/system/setFollowSystemLockScreen', params, true);\n  console.log('Mock call to setFollowSystemLockScreen with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetFollowSystemLockScreenResponse>\n}\n\n/**\n * 启用或禁用 Google Analytics 数据追踪。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {boolean} params.enabled 是否启用 Google Analytics
 * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {null} data 成功时总是为 null
 */\nexport async function setGoogleAnalytics(params) {\n  // Example: return fetchWrapper('POST', '/api/system/setGoogleAnalytics', params, true);\n  console.log('Mock call to setGoogleAnalytics with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetGoogleAnalyticsResponse>\n}\n\n/**\n * 设置网络连接时使用的代理服务器。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.proxy 代理服务器地址，例如 'http://127.0.0.1:7890', 'socks5://127.0.0.1:1080'。如果为空字符串，则表示清除代理设置。
 * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {null} data 成功时总是为 null
 */\nexport async function setNetworkProxy(params) {\n  // Example: return fetchWrapper('POST', '/api/system/setNetworkProxy', params, true);\n  console.log('Mock call to setNetworkProxy with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetNetworkProxyResponse>\n}\n\n/**\n * 配置思源笔记的网络服务，如服务端口、是否允许其他设备访问等。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {boolean} params.serve 是否启用网络服务
 * @param {string} params.port 网络服务端口号，字符串形式，例如 '6806'
 * @param {string} params.accessPermission 网络访问权限：'lan' (仅局域网), 'wan' (允许公网，需谨慎), 'localhost' (仅本机)
 * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {null} data 成功时总是为 null
 */\nexport async function setNetworkServe(params) {\n  // Example: return fetchWrapper('POST', '/api/system/setNetworkServe', params, true);\n  console.log('Mock call to setNetworkServe with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetNetworkServeResponse>\n}\n\n/**\n * 设置用户界面的布局模式，例如左右布局、顶部分栏等。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.layout UI 布局模式的标识符字符串
 * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {null} data 成功时总是为 null
 */\nexport async function setUILayout(params) {\n  // Example: return fetchWrapper('POST', '/api/system/setUILayout', params, true);\n  console.log('Mock call to setUILayout with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetUILayoutResponse>\n}\n\n/**\n * 切换到指定路径的工作空间。成功后通常需要重启或刷新 UI。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.path 要切换到的工作空间的绝对路径
 * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {null} data 成功时总是为 null
 */\nexport async function setWorkspaceDir(params) {\n  // Example: return fetchWrapper('POST', '/api/system/setWorkspaceDir', params, true);\n  console.log('Mock call to setWorkspaceDir with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetWorkspaceDirResponse>\n}\n\n/**\n * （内部接口）用于桌面端添加 UI 进程的相关信息，如 PID。通常不由普通用户或第三方应用直接调用。\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {number} [params.pid] pid
 * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {null} data 成功时总是为 null
 */\nexport async function addUIProcess(params) {\n  // Example: return fetchWrapper('POST', '/api/system/uiproc', params, false);\n  console.log('Mock call to addUIProcess with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<AddUIProcessResponse>\n}\n\n/**\n * 获取当前思源笔记内核的版本号。此接口也接受 POST 请求。\n * @returns {Promise<object>}\n * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {string} data 当前思源笔记的版本号字符串，例如 '2.10.0'
 */\nexport async function version() {\n  // Example: return fetchWrapper('GET', '/api/system/version', undefined, false);\n  console.log('Mock call to version with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<VersionResponse>\n}\n\n/**\n * 获取当前思源笔记内核的版本号。此接口也接受 GET 请求。\n * @returns {Promise<object>}\n * @property {number} code 错误码，0 表示成功
 * @property {string} msg 错误信息
 * @property {string} data 当前思源笔记的版本号字符串，例如 '2.10.0'
 */\nexport async function version() {\n  // Example: return fetchWrapper('POST', '/api/system/version', undefined, false);\n  console.log('Mock call to version with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<VersionResponse>\n}\n\n