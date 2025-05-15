// Generated client for API group broadcast
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
 * 获取指定名称的广播频道的详细信息，如订阅者数量。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetChannelInfoResponse>}
 * @param {string} params.name 要查询的广播频道名称
 */
export async function getChannelInfo(params) {
  return fetchWrapper('POST', '/api/broadcast/getChannelInfo', params, true);
}

/**
 * 获取当前所有活跃的广播频道及其订阅者数量的列表。
 * (Requires authentication, Requires admin role)
 * @returns {Promise<GetChannelsResponse>}
 */
export async function getChannels() {
  return fetchWrapper('POST', '/api/broadcast/getChannels', undefined, true);
}

/**
 * 向指定的广播频道发送文本消息。也可以用于发送特定命令 (cmd)。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<PostMessageResponse>}
 * @param {string} params.channel 目标广播频道的名称
 * @param {string} [params.cmd] cmd
 * @param {string} params.data 要发送的消息内容或命令参数 (JSON 字符串)
 */
export async function postMessage(params) {
  return fetchWrapper('POST', '/api/broadcast/postMessage', params, true);
}

/**
 * 向指定的广播频道发布消息。可以是文本消息，也可以通过上传文件发布二进制消息。请求体应为 multipart/form-data。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<BroadcastPublishResponse>}
 * @param {string} params.channel 目标广播频道的名称
 * @param {'string'} params.type 消息类型：'string' (文本) 或 'binary' (二进制文件)
 * @param {string} [params.data] data
 * @param {any} [params.file] file
 */
export async function broadcastPublish(params) {
  return fetchWrapper('POST', '/api/broadcast/publish', params, true);
}

