// Generated client for API group sync\n// TODO: Implement or import a common HTTP request wrapper function (e.g., fetchWrapper)\n/*\nasync function fetchWrapper(method, endpoint, params, needAuth) {\n  const SiyuanKernelPrefix = typeof window === 'object' ? '' : 'http://127.0.0.1:6806';\n  const url = SiyuanKernelPrefix + endpoint;\n  const options = { method, headers: {} };\n  if (method === 'POST' && params && Object.keys(params).length > 0) { // Only add body if params exist and are not empty\n    options.headers['Content-Type'] = 'application/json';\n    options.body = JSON.stringify(params);\n  }\n  if (needAuth) {\n    // Example: Retrieve and add auth token\n    // const token = localStorage.getItem('siyuan-auth-token'); \n    // if (token) options.headers['Authorization'] = `Token ${token}`;\n    options.headers['Authorization'] = 'Bearer YOUR_TOKEN_HERE'; // Placeholder\n  }\n  const response = await fetch(url, options);\n  if (!response.ok) {\n    let errorData = 'Failed to parse error response';\n    try { errorData = await response.json(); } catch (e) { try {errorData = await response.text(); } catch (e2) { /* ignore secondary error */ }}\n    console.error('API Error:', response.status, errorData); \n    throw new Error(`API Error ${response.status}: ${JSON.stringify(errorData)}`);\n  }\n  const contentType = response.headers.get('content-type');\n  if (contentType && contentType.includes('application/json')) {\n    return response.json();\n  } \n  return response.text(); // Or handle other content types\n}\n*/\n\n/**\n * 在云端存储中创建一个新的同步目录。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.name 要创建的云端同步目录的名称。
 * @property {number} Code 错误码，0 表示成功，其他表示失败。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串。
 * @property {null} Data 接口成功执行时，Data 固定为 null。如果创建失败，Data 可能包含 { closeTimeout: 5000 }。
 */\nexport async function createCloudSyncDir(params) {\n  // Example: return fetchWrapper('POST', '/api/sync/createCloudSyncDir', params, true);\n  console.log('Mock call to createCloudSyncDir with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<CreateCloudSyncDirResponse>\n}\n\n/**\n * 将会话中当前的 S3 同步配置加密并打包成 .zip 文件供导出。\n * (Requires authentication, Requires admin role)\n * @returns {Promise<object>}\n * @property {number} Code 错误码，0 表示成功，其他表示失败。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串。
 * @property {object} Data Data
 */\nexport async function exportSyncProviderS3() {\n  // Example: return fetchWrapper('POST', '/api/sync/exportSyncProviderS3', undefined, true);\n  console.log('Mock call to exportSyncProviderS3 with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportSyncProviderS3Response>\n}\n\n/**\n * 将会话中当前的 WebDAV 同步配置加密并打包成 .zip 文件供导出。\n * (Requires authentication, Requires admin role)\n * @returns {Promise<object>}\n * @property {number} Code 错误码，0 表示成功，其他表示失败。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串。
 * @property {object} Data Data
 */\nexport async function exportSyncProviderWebDAV() {\n  // Example: return fetchWrapper('POST', '/api/sync/exportSyncProviderWebDAV', undefined, true);\n  console.log('Mock call to exportSyncProviderWebDAV with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ExportSyncProviderWebDAVResponse>\n}\n\n/**\n * 检查应用启动时数据同步是否成功完成。此接口仅在管理员角色下，且同步已启用且成功时返回特定提示。\n * (Requires authentication)\n * @returns {Promise<object>}\n * @property {number} Code 错误码。0 表示未满足特定条件（非管理员、同步未启用、启动时同步未成功），1 表示启动时同步成功。其他值表示失败。注意这里的 Code 含义比较特殊。 
 * @property {string} Msg 接口返回的消息。Code 为 1 时，Msg 为提示信息（如 '启动时同步数据完毕'）。Code 为 0 时通常为空。 
 * @property {null} Data 此接口不通过 Data 返回数据。
 */\nexport async function getBootSync() {\n  // Example: return fetchWrapper('POST', '/api/sync/getBootSync', undefined, true);\n  console.log('Mock call to getBootSync with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetBootSyncResponse>\n}\n\n/**\n * 获取当前的同步状态、最后同步时间、以及当前在线的内核实例等信息。\n * (Requires authentication, Requires admin role)\n * @returns {Promise<object>}\n * @property {number} Code 错误码，0 表示成功，其他表示失败。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串。
 * @property {object} Data Data
 */\nexport async function getSyncInfo() {\n  // Example: return fetchWrapper('POST', '/api/sync/getSyncInfo', undefined, true);\n  console.log('Mock call to getSyncInfo with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetSyncInfoResponse>\n}\n\n/**\n * 通过上传的 .zip 或 .json 文件导入 S3 同步配置。导入的配置会经过解密和验证。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @returns {Promise<object>}\n * @property {number} Code 错误码，0 表示成功，其他表示失败。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串。
 * @property {object} Data Data
 */\nexport async function importSyncProviderS3() {\n  // Example: return fetchWrapper('POST', '/api/sync/importSyncProviderS3', undefined, true);\n  console.log('Mock call to importSyncProviderS3 with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ImportSyncProviderS3Response>\n}\n\n/**\n * 通过上传的 .zip 或 .json 文件导入 WebDAV 同步配置。导入的配置会经过解密和验证。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @returns {Promise<object>}\n * @property {number} Code 错误码，0 表示成功，其他表示失败。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串。
 * @property {object} Data Data
 */\nexport async function importSyncProviderWebDAV() {\n  // Example: return fetchWrapper('POST', '/api/sync/importSyncProviderWebDAV', undefined, true);\n  console.log('Mock call to importSyncProviderWebDAV with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ImportSyncProviderWebDAVResponse>\n}\n\n/**\n * 列出当前配置的云端存储中可用的同步目录及其大小信息。\n * (Requires authentication, Requires admin role)\n * @returns {Promise<object>}\n * @property {number} Code 错误码，0 表示成功，1 表示获取失败（如网络错误、配置错误）。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串，失败时包含错误信息。
 * @property {object} Data Data
 */\nexport async function listCloudSyncDir() {\n  // Example: return fetchWrapper('POST', '/api/sync/listCloudSyncDir', undefined, true);\n  console.log('Mock call to listCloudSyncDir with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ListCloudSyncDirResponse>\n}\n\n/**\n * 执行启动时的数据同步流程。此接口会触发 model.BootSyncData()。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @returns {Promise<object>}\n * @property {number} Code 错误码。model.BootSyncSucc (通常为0或1，表示启动同步的结果) 会被赋给 Code。具体含义需参考内核实现。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串。
 * @property {null} Data 此接口不通过 Data 返回具体数据。
 */\nexport async function performBootSync() {\n  // Example: return fetchWrapper('POST', '/api/sync/performBootSync', undefined, true);\n  console.log('Mock call to performBootSync with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<PerformBootSyncResponse>\n}\n\n/**\n * 执行数据同步操作。对于非云端同步模式 (mode != 3)，将触发 model.SyncData(true)。对于云端同步模式 (mode === 3)，需要明确指定同步方向 (upload: true/false)。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {boolean} [params.mobileSwitch] mobileSwitch
 * @param {boolean} [params.upload] upload
 * @property {number} Code 错误码，0 表示成功接收请求并开始处理（同步是异步过程），其他表示接收参数错误等。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串。
 * @property {null} Data 此接口不通过 Data 返回具体数据。
 */\nexport async function performSync(params) {\n  // Example: return fetchWrapper('POST', '/api/sync/performSync', params, true);\n  console.log('Mock call to performSync with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<PerformSyncResponse>\n}\n\n/**\n * 从云端存储中移除指定的同步目录。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.name 要移除的云端同步目录的名称。
 * @property {number} Code 错误码，0 表示成功，其他表示失败。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串。
 * @property {null} Data 接口成功执行时，Data 固定为 null。如果移除失败，Data 可能包含 { closeTimeout: 5000 }。
 */\nexport async function removeCloudSyncDir(params) {\n  // Example: return fetchWrapper('POST', '/api/sync/removeCloudSyncDir', params, true);\n  console.log('Mock call to removeCloudSyncDir with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RemoveCloudSyncDirResponse>\n}\n\n/**\n * 设置当前内核实例使用的云端同步目录。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.name 要设置为当前同步目录的云端目录名称。
 * @property {number} Code 错误码，0 表示成功，其他表示失败。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串。
 * @property {null} Data 接口成功执行时，Data 固定为 null。如果设置失败，Data 可能包含 { closeTimeout: 5000 }。
 */\nexport async function setCloudSyncDir(params) {\n  // Example: return fetchWrapper('POST', '/api/sync/setCloudSyncDir', params, true);\n  console.log('Mock call to setCloudSyncDir with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetCloudSyncDirResponse>\n}\n\n/**\n * 设置是否启用数据同步功能。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {boolean} params.enabled 是否启用同步。true 为启用，false 为禁用。
 * @property {number} Code 错误码，0 表示成功，其他表示失败。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串。
 * @property {null} Data 接口成功执行时，Data 固定为 null。
 */\nexport async function setSyncEnable(params) {\n  // Example: return fetchWrapper('POST', '/api/sync/setSyncEnable', params, true);\n  console.log('Mock call to setSyncEnable with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetSyncEnableResponse>\n}\n\n/**\n * 设置在数据同步过程中发生内容冲突时，是否自动生成冲突副本文件。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {boolean} params.generateConflictDoc 是否生成冲突文档。true 为生成，false 为不生成。
 * @property {number} Code 错误码，0 表示成功，其他表示失败。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串。
 * @property {null} Data 接口成功执行时，Data 固定为 null。
 */\nexport async function setSyncGenerateConflictDoc(params) {\n  // Example: return fetchWrapper('POST', '/api/sync/setSyncGenerateConflictDoc', params, true);\n  console.log('Mock call to setSyncGenerateConflictDoc with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetSyncGenerateConflictDocResponse>\n}\n\n/**\n * 设置自动数据同步的时间间隔（单位：分钟）。设置后会重置同步计时器。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {number} params.syncInterval 自动同步的时间间隔，单位为分钟。例如，输入 5 表示每5分钟同步一次。最小值为1分钟。
 * @property {number} Code 错误码，0 表示成功，其他表示失败。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串。
 * @property {null} Data 接口成功执行时，Data 固定为 null。
 */\nexport async function setSyncInterval(params) {\n  // Example: return fetchWrapper('POST', '/api/sync/setSyncInterval', params, true);\n  console.log('Mock call to setSyncInterval with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetSyncIntervalResponse>\n}\n\n/**\n * 设置数据同步的模式。例如：0 表示自动同步，1 表示手动同步，3 表示云端双向同步时需手动触发单向同步。设置后会重置同步计时器。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {number} params.syncMode 同步模式。例如：0-自动, 1-手动, 3-云端完全手动。具体可用值请参考内核实现或相关文档。
 * @property {number} Code 错误码，0 表示成功，其他表示失败。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串。
 * @property {null} Data 接口成功执行时，Data 固定为 null。
 */\nexport async function setSyncMode(params) {\n  // Example: return fetchWrapper('POST', '/api/sync/setSyncMode', params, true);\n  console.log('Mock call to setSyncMode with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetSyncModeResponse>\n}\n\n/**\n * 设置是否启用同步感知功能。启用后，当检测到远程数据更新时，可能会有相应的提示或行为。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {boolean} params.syncPerception 是否启用同步感知。true 为启用，false 为禁用。
 * @property {number} Code 错误码，0 表示成功，其他表示失败。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串。
 * @property {null} Data 接口成功执行时，Data 固定为 null。
 */\nexport async function setSyncPerception(params) {\n  // Example: return fetchWrapper('POST', '/api/sync/setSyncPerception', params, true);\n  console.log('Mock call to setSyncPerception with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetSyncPerceptionResponse>\n}\n\n/**\n * 设置当前使用的数据同步服务提供商，例如 S3、WebDAV 或本地文件夹。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.syncProvider 同步服务提供商的标识符。例如：'S3', 'WebDAV', 'LocalFolder'。具体可用值请参考内核实现。
 * @property {number} Code 错误码，0 表示成功，其他表示失败。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串。
 * @property {null} Data 接口成功执行时，Data 固定为 null。
 */\nexport async function setSyncProvider(params) {\n  // Example: return fetchWrapper('POST', '/api/sync/setSyncProvider', params, true);\n  console.log('Mock call to setSyncProvider with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetSyncProviderResponse>\n}\n\n/**\n * 设置当同步服务提供商为本地文件夹时，所使用的本地文件夹路径。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.syncProviderLocalPath 本地同步文件夹的绝对路径。
 * @property {number} Code 错误码，0 表示成功，其他表示失败。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串。
 * @property {null} Data 接口成功执行时，Data 固定为 null。
 */\nexport async function setSyncProviderLocal(params) {\n  // Example: return fetchWrapper('POST', '/api/sync/setSyncProviderLocal', params, true);\n  console.log('Mock call to setSyncProviderLocal with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetSyncProviderLocalResponse>\n}\n\n/**\n * 设置使用 S3作为同步服务提供商时的详细配置信息，如 Access Key, Secret Key, Endpoint, Bucket 等。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.s3AccessKeyID S3 Access Key ID.
 * @param {string} params.s3SecretAccessKey S3 Secret Access Key.
 * @param {string} params.s3Endpoint S3 服务的 Endpoint。例如：s3.amazonaws.com
 * @param {string} params.s3Region S3 Bucket 所在区域。例如：us-east-1
 * @param {string} params.s3Bucket S3 Bucket 名称。
 * @param {string} [params.s3CDN] s3CDN
 * @property {number} Code 错误码，0 表示成功，其他表示失败。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串。
 * @property {null} Data 接口成功执行时，Data 固定为 null。
 */\nexport async function setSyncProviderS3(params) {\n  // Example: return fetchWrapper('POST', '/api/sync/setSyncProviderS3', params, true);\n  console.log('Mock call to setSyncProviderS3 with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetSyncProviderS3Response>\n}\n\n/**\n * 设置使用 WebDAV 作为同步服务提供商时的详细配置信息，如 Endpoint, 用户名和密码。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.webdavEndpoint WebDAV 服务的 URL。例如：https://dav.example.com/remote.php/dav
 * @param {string} params.webdavUsername WebDAV 用户名。
 * @param {string} params.webdavPassword WebDAV 密码。
 * @property {number} Code 错误码，0 表示成功，其他表示失败。
 * @property {string} Msg 接口返回的消息，成功时通常为空字符串。
 * @property {null} Data 接口成功执行时，Data 固定为 null。
 */\nexport async function setSyncProviderWebDAV(params) {\n  // Example: return fetchWrapper('POST', '/api/sync/setSyncProviderWebDAV', params, true);\n  console.log('Mock call to setSyncProviderWebDAV with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetSyncProviderWebDAVResponse>\n}\n\n