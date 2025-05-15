// Generated client for API group repo\n// TODO: Implement or import a common HTTP request wrapper function (e.g., fetchWrapper)\n/*\nasync function fetchWrapper(method, endpoint, params, needAuth) {\n  const SiyuanKernelPrefix = typeof window === 'object' ? '' : 'http://127.0.0.1:6806';\n  const url = SiyuanKernelPrefix + endpoint;\n  const options = { method, headers: {} };\n  if (method === 'POST' && params && Object.keys(params).length > 0) { // Only add body if params exist and are not empty\n    options.headers['Content-Type'] = 'application/json';\n    options.body = JSON.stringify(params);\n  }\n  if (needAuth) {\n    // Example: Retrieve and add auth token\n    // const token = localStorage.getItem('siyuan-auth-token'); \n    // if (token) options.headers['Authorization'] = `Token ${token}`;\n    options.headers['Authorization'] = 'Bearer YOUR_TOKEN_HERE'; // Placeholder\n  }\n  const response = await fetch(url, options);\n  if (!response.ok) {\n    let errorData = 'Failed to parse error response';\n    try { errorData = await response.json(); } catch (e) { try {errorData = await response.text(); } catch (e2) { /* ignore secondary error */ }}\n    console.error('API Error:', response.status, errorData); \n    throw new Error(`API Error ${response.status}: ${JSON.stringify(errorData)}`);\n  }\n  const contentType = response.headers.get('content-type');\n  if (contentType && contentType.includes('application/json')) {\n    return response.json();\n  } \n  return response.text(); // Or handle other content types\n}\n*/\n\n/**\n * 将当前工作区内容回滚到指定的仓库快照版本。这是一个危险操作，会导致当前未保存的更改丢失，请谨慎操作。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 必需。要检出的快照的唯一标识符 (ID)。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data 成功时 Data 固定为 null。
 */\nexport async function checkoutRepo(params) {\n  // Example: return fetchWrapper('POST', '/api/repo/checkoutRepo', params, true);\n  console.log('Mock call to checkoutRepo with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<CheckoutRepoResponse>\n}\n\n/**\n * 为当前工作区创建一个新的快照。可以附带备注信息和标签。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} [params.memo] memo
 * @param {string} [params.tag] tag
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data 包含新快照ID的对象。
 */\nexport async function createSnapshot(params) {\n  // Example: return fetchWrapper('POST', '/api/repo/createSnapshot', params, true);\n  console.log('Mock call to createSnapshot with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<CreateSnapshotResponse>\n}\n\n/**\n * 比较两个指定的本地快照之间的差异，列出新增、修改和删除的文档。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.left 必需。左侧快照的 ID，作为比较基准的旧版本。
 * @param {string} params.right 必需。右侧快照的 ID，作为比较目标的新版本。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data 包含两个快照差异详情的对象。
 */\nexport async function diffRepoSnapshots(params) {\n  // Example: return fetchWrapper('POST', '/api/repo/diffRepoSnapshots', params, true);\n  console.log('Mock call to diffRepoSnapshots with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<DiffRepoSnapshotsResponse>\n}\n\n/**\n * 从云端下载指定的快照到本地。如果本地已存在同名快照，可能会被覆盖或操作失败。下载的是标签快照时需要提供标签名。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 必需。要下载的云端快照的 ID。
 * @param {string} [params.tag] tag
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data 成功时 Data 固定为 null。
 */\nexport async function downloadCloudSnapshot(params) {\n  // Example: return fetchWrapper('POST', '/api/repo/downloadCloudSnapshot', params, true);\n  console.log('Mock call to downloadCloudSnapshot with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<DownloadCloudSnapshotResponse>\n}\n\n/**\n * 分页获取当前用户在云端存储的所有普通快照列表。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {number} params.page 必需。页码，从 1 开始。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data 包含云端快照列表、总页数和总数量的对象。
 */\nexport async function getCloudRepoSnapshots(params) {\n  // Example: return fetchWrapper('POST', '/api/repo/getCloudRepoSnapshots', params, true);\n  console.log('Mock call to getCloudRepoSnapshots with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetCloudRepoSnapshotsResponse>\n}\n\n/**\n * 分页获取当前用户在云端存储的所有标签快照列表。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {number} params.page 必需。页码，从 1 开始。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data 包含云端标签快照列表、总页数和总数量的对象。
 */\nexport async function getCloudRepoTagSnapshots(params) {\n  // Example: return fetchWrapper('POST', '/api/repo/getCloudRepoTagSnapshots', params, true);\n  console.log('Mock call to getCloudRepoTagSnapshots with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetCloudRepoTagSnapshotsResponse>\n}\n\n/**\n * 获取指定快照中特定文件的原始内容。此接口直接返回文件数据流，不返回标准JSON结构。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<any>} 此接口不返回标准 JSON。成功时直接返回文件数据流 (HTTP 200)，Content-Type 根据文件类型确定。失败时返回标准 JSON 错误结构。\n * @param {string} params.id 必需。快照的 ID。
 * @param {string} [params.path] path
 */\nexport async function getRepoFile(params) {\n  // Example: return fetchWrapper('POST', '/api/repo/getRepoFile', params, true);\n  console.log('Mock call to getRepoFile with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<any>\n}\n\n/**\n * 分页获取当前工作区本地存储的所有普通快照列表。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {number} params.page 必需。页码，从 1 开始。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data 包含本地快照列表、总页数和总数量的对象。
 */\nexport async function getRepoSnapshots(params) {\n  // Example: return fetchWrapper('POST', '/api/repo/getRepoSnapshots', params, true);\n  console.log('Mock call to getRepoSnapshots with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetRepoSnapshotsResponse>\n}\n\n/**\n * 分页获取当前工作区本地存储的所有标签快照列表。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {number} params.page 必需。页码，从 1 开始。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data 包含本地标签快照列表、总页数和总数量的对象。
 */\nexport async function getRepoTagSnapshots(params) {\n  // Example: return fetchWrapper('POST', '/api/repo/getRepoTagSnapshots', params, true);\n  console.log('Mock call to getRepoTagSnapshots with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetRepoTagSnapshotsResponse>\n}\n\n/**\n * 导入仓库加密密钥。这是一个危险操作，错误的密钥可能导致数据无法解密。导入的密钥文件通常是 .sykey 后缀。此操作通过 FormData 接收文件。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @returns {Promise<object>}\n * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data 成功时 Data 固定为 null。
 */\nexport async function importRepoKey() {\n  // Example: return fetchWrapper('POST', '/api/repo/importRepoKey', undefined, true);\n  console.log('Mock call to importRepoKey with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ImportRepoKeyResponse>\n}\n\n/**\n * 为当前工作区初始化一个新的随机加密密钥。此操作通常在首次设置加密或重置密钥时使用。旧密钥将被覆盖。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @returns {Promise<object>}\n * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data 成功时 Data 固定为 null。
 */\nexport async function initRepoKey() {\n  // Example: return fetchWrapper('POST', '/api/repo/initRepoKey', undefined, true);\n  console.log('Mock call to initRepoKey with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<InitRepoKeyResponse>\n}\n\n/**\n * 通过用户提供的口令生成并初始化仓库加密密钥。旧密钥将被覆盖。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.passphrase 必需。用于生成密钥的用户口令。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data 成功时 Data 固定为 null。
 */\nexport async function initRepoKeyFromPassphrase(params) {\n  // Example: return fetchWrapper('POST', '/api/repo/initRepoKeyFromPassphrase', params, true);\n  console.log('Mock call to initRepoKeyFromPassphrase with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<InitRepoKeyFromPassphraseResponse>\n}\n\n/**\n * 获取并打开指定快照中特定文档的内容，用于预览历史版本。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 必需。快照中文档的唯一标识符 (通常是 `快照ID/文档ID.sy`)。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data Data
 */\nexport async function openRepoSnapshotDoc(params) {\n  // Example: return fetchWrapper('POST', '/api/repo/openRepoSnapshotDoc', params, true);\n  console.log('Mock call to openRepoSnapshotDoc with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<OpenRepoSnapshotDocResponse>\n}\n\n/**\n * 彻底删除用户在云端的所有仓库数据，包括所有快照和标签快照。这是一个非常危险且不可逆的操作，执行前通常会有二次确认。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @returns {Promise<object>}\n * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data 成功时 Data 固定为 null。
 */\nexport async function purgeCloudRepo() {\n  // Example: return fetchWrapper('POST', '/api/repo/purgeCloudRepo', undefined, true);\n  console.log('Mock call to purgeCloudRepo with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<PurgeCloudRepoResponse>\n}\n\n/**\n * 彻底删除当前工作区的本地仓库数据，包括所有快照和标签快照。这是一个非常危险且不可逆的操作，执行前通常会有二次确认。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @returns {Promise<object>}\n * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data 成功时 Data 固定为 null。
 */\nexport async function purgeRepo() {\n  // Example: return fetchWrapper('POST', '/api/repo/purgeRepo', undefined, true);\n  console.log('Mock call to purgeRepo with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<PurgeRepoResponse>\n}\n\n/**\n * 从云端移除指定的标签快照。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 必需。要移除的云端标签快照的 ID。
 * @param {string} params.tag 必需。要移除的云端标签快照的标签名。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data 成功时 Data 固定为 null。
 */\nexport async function removeCloudRepoTagSnapshot(params) {\n  // Example: return fetchWrapper('POST', '/api/repo/removeCloudRepoTagSnapshot', params, true);\n  console.log('Mock call to removeCloudRepoTagSnapshot with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RemoveCloudRepoTagSnapshotResponse>\n}\n\n/**\n * 从本地仓库移除指定的标签快照。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 必需。要移除的本地标签快照的 ID。
 * @param {string} params.tag 必需。要移除的本地标签快照的标签名。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data 成功时 Data 固定为 null。
 */\nexport async function removeRepoTagSnapshot(params) {\n  // Example: return fetchWrapper('POST', '/api/repo/removeRepoTagSnapshot', params, true);\n  console.log('Mock call to removeRepoTagSnapshot with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RemoveRepoTagSnapshotResponse>\n}\n\n/**\n * 重置本地仓库，会清空所有快照和标签，并重新初始化仓库密钥。这是一个危险操作，执行前通常会有二次确认。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @returns {Promise<object>}\n * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data 成功时 Data 固定为 null。
 */\nexport async function resetRepo() {\n  // Example: return fetchWrapper('POST', '/api/repo/resetRepo', undefined, true);\n  console.log('Mock call to resetRepo with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ResetRepoResponse>\n}\n\n/**\n * 设置本地仓库快照索引的保留天数。过期的索引将被自动清理。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {number} params.days 必需。快照索引保留的天数，必须为正整数。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data 成功时 Data 固定为 null。
 */\nexport async function setRepoIndexRetentionDays(params) {\n  // Example: return fetchWrapper('POST', '/api/repo/setRepoIndexRetentionDays', params, true);\n  console.log('Mock call to setRepoIndexRetentionDays with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetRepoIndexRetentionDaysResponse>\n}\n\n/**\n * 设置每日自动创建的快照在本地的保留数量。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {number} params.indexes 必需。每日快照的保留数量，必须为正整数。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data 成功时 Data 固定为 null。
 */\nexport async function setRetentionIndexesDaily(params) {\n  // Example: return fetchWrapper('POST', '/api/repo/setRetentionIndexesDaily', params, true);\n  console.log('Mock call to setRetentionIndexesDaily with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SetRetentionIndexesDailyResponse>\n}\n\n/**\n * 为指定的本地快照打上标签，使其成为一个标签快照。可以同时提供备注，如果提供会覆盖快照原有的备注。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 必需。要标记的快照的 ID。
 * @param {string} params.tag 必需。要打上的标签名。
 * @param {string} [params.memo] memo
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data 成功时 Data 固定为 null。
 */\nexport async function tagSnapshot(params) {\n  // Example: return fetchWrapper('POST', '/api/repo/tagSnapshot', params, true);\n  console.log('Mock call to tagSnapshot with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<TagSnapshotResponse>\n}\n\n/**\n * 将指定的本地快照上传到云端。如果是标签快照，需要提供标签名。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 必需。要上传的本地快照的 ID。
 * @param {string} [params.tag] tag
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data 成功时 Data 固定为 null。
 */\nexport async function uploadCloudSnapshot(params) {\n  // Example: return fetchWrapper('POST', '/api/repo/uploadCloudSnapshot', params, true);\n  console.log('Mock call to uploadCloudSnapshot with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<UploadCloudSnapshotResponse>\n}\n\n