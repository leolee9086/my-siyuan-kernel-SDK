// Generated client for API group sync
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
 * 在云端存储中创建一个新的同步目录。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<CreateCloudSyncDirResponse>}
 * @param {string} params.name 要创建的云端同步目录的名称。
 */
export async function createCloudSyncDir(params) {
  return fetchWrapper('POST', '/api/sync/createCloudSyncDir', params, true);
}

/**
 * 将会话中当前的 S3 同步配置加密并打包成 .zip 文件供导出。
 * (Requires authentication, Requires admin role)
 * @returns {Promise<ExportSyncProviderS3Response>}
 */
export async function exportSyncProviderS3() {
  return fetchWrapper('POST', '/api/sync/exportSyncProviderS3', undefined, true);
}

/**
 * 将会话中当前的 WebDAV 同步配置加密并打包成 .zip 文件供导出。
 * (Requires authentication, Requires admin role)
 * @returns {Promise<ExportSyncProviderWebDAVResponse>}
 */
export async function exportSyncProviderWebDAV() {
  return fetchWrapper('POST', '/api/sync/exportSyncProviderWebDAV', undefined, true);
}

/**
 * 检查应用启动时数据同步是否成功完成。此接口仅在管理员角色下，且同步已启用且成功时返回特定提示。
 * (Requires authentication)
 * @returns {Promise<GetBootSyncResponse>}
 */
export async function getBootSync() {
  return fetchWrapper('POST', '/api/sync/getBootSync', undefined, true);
}

/**
 * 获取当前的同步状态、最后同步时间、以及当前在线的内核实例等信息。
 * (Requires authentication, Requires admin role)
 * @returns {Promise<GetSyncInfoResponse>}
 */
export async function getSyncInfo() {
  return fetchWrapper('POST', '/api/sync/getSyncInfo', undefined, true);
}

/**
 * 通过上传的 .zip 或 .json 文件导入 S3 同步配置。导入的配置会经过解密和验证。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @returns {Promise<ImportSyncProviderS3Response>}
 */
export async function importSyncProviderS3() {
  return fetchWrapper('POST', '/api/sync/importSyncProviderS3', undefined, true);
}

/**
 * 通过上传的 .zip 或 .json 文件导入 WebDAV 同步配置。导入的配置会经过解密和验证。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @returns {Promise<ImportSyncProviderWebDAVResponse>}
 */
export async function importSyncProviderWebDAV() {
  return fetchWrapper('POST', '/api/sync/importSyncProviderWebDAV', undefined, true);
}

/**
 * 列出当前配置的云端存储中可用的同步目录及其大小信息。
 * (Requires authentication, Requires admin role)
 * @returns {Promise<ListCloudSyncDirResponse>}
 */
export async function listCloudSyncDir() {
  return fetchWrapper('POST', '/api/sync/listCloudSyncDir', undefined, true);
}

/**
 * 执行启动时的数据同步流程。此接口会触发 model.BootSyncData()。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @returns {Promise<PerformBootSyncResponse>}
 */
export async function performBootSync() {
  return fetchWrapper('POST', '/api/sync/performBootSync', undefined, true);
}

/**
 * 执行数据同步操作。对于非云端同步模式 (mode != 3)，将触发 model.SyncData(true)。对于云端同步模式 (mode === 3)，需要明确指定同步方向 (upload: true/false)。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<PerformSyncResponse>}
 * @param {boolean} [params.mobileSwitch] mobileSwitch
 * @param {boolean} [params.upload] upload
 */
export async function performSync(params) {
  return fetchWrapper('POST', '/api/sync/performSync', params, true);
}

/**
 * 从云端存储中移除指定的同步目录。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RemoveCloudSyncDirResponse>}
 * @param {string} params.name 要移除的云端同步目录的名称。
 */
export async function removeCloudSyncDir(params) {
  return fetchWrapper('POST', '/api/sync/removeCloudSyncDir', params, true);
}

/**
 * 设置当前内核实例使用的云端同步目录。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetCloudSyncDirResponse>}
 * @param {string} params.name 要设置为当前同步目录的云端目录名称。
 */
export async function setCloudSyncDir(params) {
  return fetchWrapper('POST', '/api/sync/setCloudSyncDir', params, true);
}

/**
 * 设置是否启用数据同步功能。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetSyncEnableResponse>}
 * @param {boolean} params.enabled 是否启用同步。true 为启用，false 为禁用。
 */
export async function setSyncEnable(params) {
  return fetchWrapper('POST', '/api/sync/setSyncEnable', params, true);
}

/**
 * 设置在数据同步过程中发生内容冲突时，是否自动生成冲突副本文件。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetSyncGenerateConflictDocResponse>}
 * @param {boolean} params.generateConflictDoc 是否生成冲突文档。true 为生成，false 为不生成。
 */
export async function setSyncGenerateConflictDoc(params) {
  return fetchWrapper('POST', '/api/sync/setSyncGenerateConflictDoc', params, true);
}

/**
 * 设置自动数据同步的时间间隔（单位：分钟）。设置后会重置同步计时器。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetSyncIntervalResponse>}
 * @param {number} params.syncInterval 自动同步的时间间隔，单位为分钟。例如，输入 5 表示每5分钟同步一次。最小值为1分钟。
 */
export async function setSyncInterval(params) {
  return fetchWrapper('POST', '/api/sync/setSyncInterval', params, true);
}

/**
 * 设置数据同步的模式。例如：0 表示自动同步，1 表示手动同步，3 表示云端双向同步时需手动触发单向同步。设置后会重置同步计时器。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetSyncModeResponse>}
 * @param {number} params.syncMode 同步模式。例如：0-自动, 1-手动, 3-云端完全手动。具体可用值请参考内核实现或相关文档。
 */
export async function setSyncMode(params) {
  return fetchWrapper('POST', '/api/sync/setSyncMode', params, true);
}

/**
 * 设置是否启用同步感知功能。启用后，当检测到远程数据更新时，可能会有相应的提示或行为。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetSyncPerceptionResponse>}
 * @param {boolean} params.syncPerception 是否启用同步感知。true 为启用，false 为禁用。
 */
export async function setSyncPerception(params) {
  return fetchWrapper('POST', '/api/sync/setSyncPerception', params, true);
}

/**
 * 设置当前使用的数据同步服务提供商，例如 S3、WebDAV 或本地文件夹。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetSyncProviderResponse>}
 * @param {string} params.syncProvider 同步服务提供商的标识符。例如：'S3', 'WebDAV', 'LocalFolder'。具体可用值请参考内核实现。
 */
export async function setSyncProvider(params) {
  return fetchWrapper('POST', '/api/sync/setSyncProvider', params, true);
}

/**
 * 设置当同步服务提供商为本地文件夹时，所使用的本地文件夹路径。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetSyncProviderLocalResponse>}
 * @param {string} params.syncProviderLocalPath 本地同步文件夹的绝对路径。
 */
export async function setSyncProviderLocal(params) {
  return fetchWrapper('POST', '/api/sync/setSyncProviderLocal', params, true);
}

/**
 * 设置使用 S3作为同步服务提供商时的详细配置信息，如 Access Key, Secret Key, Endpoint, Bucket 等。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetSyncProviderS3Response>}
 * @param {string} params.s3AccessKeyID S3 Access Key ID.
 * @param {string} params.s3SecretAccessKey S3 Secret Access Key.
 * @param {string} params.s3Endpoint S3 服务的 Endpoint。例如：s3.amazonaws.com
 * @param {string} params.s3Region S3 Bucket 所在区域。例如：us-east-1
 * @param {string} params.s3Bucket S3 Bucket 名称。
 * @param {string} [params.s3CDN] s3CDN
 */
export async function setSyncProviderS3(params) {
  return fetchWrapper('POST', '/api/sync/setSyncProviderS3', params, true);
}

/**
 * 设置使用 WebDAV 作为同步服务提供商时的详细配置信息，如 Endpoint, 用户名和密码。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetSyncProviderWebDAVResponse>}
 * @param {string} params.webdavEndpoint WebDAV 服务的 URL。例如：https://dav.example.com/remote.php/dav
 * @param {string} params.webdavUsername WebDAV 用户名。
 * @param {string} params.webdavPassword WebDAV 密码。
 */
export async function setSyncProviderWebDAV(params) {
  return fetchWrapper('POST', '/api/sync/setSyncProviderWebDAV', params, true);
}

