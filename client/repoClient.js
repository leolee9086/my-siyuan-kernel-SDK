// Generated client for API group repo
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
 * 将当前工作区内容回滚到指定的仓库快照版本。这是一个危险操作，会导致当前未保存的更改丢失，请谨慎操作。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<CheckoutRepoResponse>}
 * @param {string} params.id 必需。要检出的快照的唯一标识符 (ID)。
 */
export async function checkoutRepo(params) {
  return fetchWrapper('POST', '/api/repo/checkoutRepo', params, true);
}

/**
 * 为当前工作区创建一个新的快照。可以附带备注信息和标签。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<CreateSnapshotResponse>}
 * @param {string} [params.memo] memo
 * @param {string} [params.tag] tag
 */
export async function createSnapshot(params) {
  return fetchWrapper('POST', '/api/repo/createSnapshot', params, true);
}

/**
 * 比较两个指定的本地快照之间的差异，列出新增、修改和删除的文档。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<DiffRepoSnapshotsResponse>}
 * @param {string} params.left 必需。左侧快照的 ID，作为比较基准的旧版本。
 * @param {string} params.right 必需。右侧快照的 ID，作为比较目标的新版本。
 */
export async function diffRepoSnapshots(params) {
  return fetchWrapper('POST', '/api/repo/diffRepoSnapshots', params, true);
}

/**
 * 从云端下载指定的快照到本地。如果本地已存在同名快照，可能会被覆盖或操作失败。下载的是标签快照时需要提供标签名。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<DownloadCloudSnapshotResponse>}
 * @param {string} params.id 必需。要下载的云端快照的 ID。
 * @param {string} [params.tag] tag
 */
export async function downloadCloudSnapshot(params) {
  return fetchWrapper('POST', '/api/repo/downloadCloudSnapshot', params, true);
}

/**
 * 分页获取当前用户在云端存储的所有普通快照列表。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetCloudRepoSnapshotsResponse>}
 * @param {number} params.page 必需。页码，从 1 开始。
 */
export async function getCloudRepoSnapshots(params) {
  return fetchWrapper('POST', '/api/repo/getCloudRepoSnapshots', params, true);
}

/**
 * 分页获取当前用户在云端存储的所有标签快照列表。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetCloudRepoTagSnapshotsResponse>}
 * @param {number} params.page 必需。页码，从 1 开始。
 */
export async function getCloudRepoTagSnapshots(params) {
  return fetchWrapper('POST', '/api/repo/getCloudRepoTagSnapshots', params, true);
}

/**
 * 获取指定快照中特定文件的原始内容。此接口直接返回文件数据流，不返回标准JSON结构。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<any>} 此接口不返回标准 JSON。成功时直接返回文件数据流 (HTTP 200)，Content-Type 根据文件类型确定。失败时返回标准 JSON 错误结构。
 * @param {string} params.id 必需。快照的 ID。
 * @param {string} [params.path] path
 */
export async function getRepoFile(params) {
  return fetchWrapper('POST', '/api/repo/getRepoFile', params, true);
}

/**
 * 分页获取当前工作区本地存储的所有普通快照列表。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetRepoSnapshotsResponse>}
 * @param {number} params.page 必需。页码，从 1 开始。
 */
export async function getRepoSnapshots(params) {
  return fetchWrapper('POST', '/api/repo/getRepoSnapshots', params, true);
}

/**
 * 分页获取当前工作区本地存储的所有标签快照列表。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetRepoTagSnapshotsResponse>}
 * @param {number} params.page 必需。页码，从 1 开始。
 */
export async function getRepoTagSnapshots(params) {
  return fetchWrapper('POST', '/api/repo/getRepoTagSnapshots', params, true);
}

/**
 * 导入仓库加密密钥。这是一个危险操作，错误的密钥可能导致数据无法解密。导入的密钥文件通常是 .sykey 后缀。此操作通过 FormData 接收文件。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @returns {Promise<ImportRepoKeyResponse>}
 */
export async function importRepoKey() {
  return fetchWrapper('POST', '/api/repo/importRepoKey', undefined, true);
}

/**
 * 为当前工作区初始化一个新的随机加密密钥。此操作通常在首次设置加密或重置密钥时使用。旧密钥将被覆盖。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @returns {Promise<InitRepoKeyResponse>}
 */
export async function initRepoKey() {
  return fetchWrapper('POST', '/api/repo/initRepoKey', undefined, true);
}

/**
 * 通过用户提供的口令生成并初始化仓库加密密钥。旧密钥将被覆盖。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<InitRepoKeyFromPassphraseResponse>}
 * @param {string} params.passphrase 必需。用于生成密钥的用户口令。
 */
export async function initRepoKeyFromPassphrase(params) {
  return fetchWrapper('POST', '/api/repo/initRepoKeyFromPassphrase', params, true);
}

/**
 * 获取并打开指定快照中特定文档的内容，用于预览历史版本。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<OpenRepoSnapshotDocResponse>}
 * @param {string} params.id 必需。快照中文档的唯一标识符 (通常是 `快照ID/文档ID.sy`)。
 */
export async function openRepoSnapshotDoc(params) {
  return fetchWrapper('POST', '/api/repo/openRepoSnapshotDoc', params, true);
}

/**
 * 彻底删除用户在云端的所有仓库数据，包括所有快照和标签快照。这是一个非常危险且不可逆的操作，执行前通常会有二次确认。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @returns {Promise<PurgeCloudRepoResponse>}
 */
export async function purgeCloudRepo() {
  return fetchWrapper('POST', '/api/repo/purgeCloudRepo', undefined, true);
}

/**
 * 彻底删除当前工作区的本地仓库数据，包括所有快照和标签快照。这是一个非常危险且不可逆的操作，执行前通常会有二次确认。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @returns {Promise<PurgeRepoResponse>}
 */
export async function purgeRepo() {
  return fetchWrapper('POST', '/api/repo/purgeRepo', undefined, true);
}

/**
 * 从云端移除指定的标签快照。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RemoveCloudRepoTagSnapshotResponse>}
 * @param {string} params.id 必需。要移除的云端标签快照的 ID。
 * @param {string} params.tag 必需。要移除的云端标签快照的标签名。
 */
export async function removeCloudRepoTagSnapshot(params) {
  return fetchWrapper('POST', '/api/repo/removeCloudRepoTagSnapshot', params, true);
}

/**
 * 从本地仓库移除指定的标签快照。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RemoveRepoTagSnapshotResponse>}
 * @param {string} params.id 必需。要移除的本地标签快照的 ID。
 * @param {string} params.tag 必需。要移除的本地标签快照的标签名。
 */
export async function removeRepoTagSnapshot(params) {
  return fetchWrapper('POST', '/api/repo/removeRepoTagSnapshot', params, true);
}

/**
 * 重置本地仓库，会清空所有快照和标签，并重新初始化仓库密钥。这是一个危险操作，执行前通常会有二次确认。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @returns {Promise<ResetRepoResponse>}
 */
export async function resetRepo() {
  return fetchWrapper('POST', '/api/repo/resetRepo', undefined, true);
}

/**
 * 设置本地仓库快照索引的保留天数。过期的索引将被自动清理。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetRepoIndexRetentionDaysResponse>}
 * @param {number} params.days 必需。快照索引保留的天数，必须为正整数。
 */
export async function setRepoIndexRetentionDays(params) {
  return fetchWrapper('POST', '/api/repo/setRepoIndexRetentionDays', params, true);
}

/**
 * 设置每日自动创建的快照在本地的保留数量。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<SetRetentionIndexesDailyResponse>}
 * @param {number} params.indexes 必需。每日快照的保留数量，必须为正整数。
 */
export async function setRetentionIndexesDaily(params) {
  return fetchWrapper('POST', '/api/repo/setRetentionIndexesDaily', params, true);
}

/**
 * 为指定的本地快照打上标签，使其成为一个标签快照。可以同时提供备注，如果提供会覆盖快照原有的备注。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<TagSnapshotResponse>}
 * @param {string} params.id 必需。要标记的快照的 ID。
 * @param {string} params.tag 必需。要打上的标签名。
 * @param {string} [params.memo] memo
 */
export async function tagSnapshot(params) {
  return fetchWrapper('POST', '/api/repo/tagSnapshot', params, true);
}

/**
 * 将指定的本地快照上传到云端。如果是标签快照，需要提供标签名。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<UploadCloudSnapshotResponse>}
 * @param {string} params.id 必需。要上传的本地快照的 ID。
 * @param {string} [params.tag] tag
 */
export async function uploadCloudSnapshot(params) {
  return fetchWrapper('POST', '/api/repo/uploadCloudSnapshot', params, true);
}

