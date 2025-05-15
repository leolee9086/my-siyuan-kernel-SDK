// Generated client for API group graph
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
 * 根据关键词和配置获取全局关系图的节点和边数据。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetGraphResponse>}
 * @param {any} params.reqId 请求 ID，用于跟踪异步请求
 * @param {string} params.k 搜索关键词，用于筛选关系图中的节点
 * @param {GetGraphParamsConf} params.conf 全局关系图配置项
 * @param {number} params.conf.minRefs 节点最少被引用次数（低于此值将被隐藏）
 * @param {boolean} params.conf.dailyNote 是否包含日记节点
 * @param {GetGraphParamsConfType} params.conf.type 节点类型筛选配置
 * @param {boolean} params.conf.type.tag 是否显示标签节点
 * @param {boolean} params.conf.type.paragraph 是否显示段落块节点
 * @param {boolean} params.conf.type.heading 是否显示标题块节点
 * @param {boolean} params.conf.type.math 是否显示数学公式块节点
 * @param {boolean} params.conf.type.code 是否显示代码块节点
 * @param {boolean} params.conf.type.table 是否显示表格块节点
 * @param {boolean} params.conf.type.list 是否显示列表块节点
 * @param {boolean} params.conf.type.listItem 是否显示列表项块节点
 * @param {boolean} params.conf.type.blockquote 是否显示引述块节点
 * @param {boolean} params.conf.type.super 是否显示超级块节点
 * @param {GetGraphParamsConfD3} params.conf.d3 D3力导向图配置
 * @param {number} params.conf.d3.nodeSize 节点大小
 * @param {number} params.conf.d3.linkWidth 连线宽度
 * @param {number} params.conf.d3.lineOpacity 连线不透明度
 * @param {number} params.conf.d3.centerStrength 中心力强度
 * @param {number} params.conf.d3.collideRadius 碰撞半径
 * @param {number} params.conf.d3.collideStrength 碰撞力强度
 * @param {number} params.conf.d3.linkDistance 连线距离
 * @param {boolean} params.conf.d3.arrow 是否显示箭头
 */
export async function getGraph(params) {
  return fetchWrapper('POST', '/api/graph/getGraph', params, true);
}

/**
 * 根据指定的文档 ID、关键词和配置获取局部关系图（如文档关系图、反链关系图等）的节点和边数据。
 * (Requires authentication)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetLocalGraphResponse>}
 * @param {any} params.reqId 请求 ID，用于跟踪异步请求
 * @param {string} params.id 文档 ID，用于构建局部关系图的中心节点
 * @param {string} params.k 搜索关键词，用于筛选关系图中的节点
 * @param {GetLocalGraphParamsConf} params.conf 局部关系图配置项
 * @param {boolean} params.conf.dailyNote 是否包含日记节点
 * @param {GetLocalGraphParamsConfType} params.conf.type 节点类型筛选配置
 * @param {boolean} params.conf.type.tag 是否显示标签节点
 * @param {boolean} params.conf.type.paragraph 是否显示段落块节点
 * @param {boolean} params.conf.type.heading 是否显示标题块节点
 * @param {boolean} params.conf.type.math 是否显示数学公式块节点
 * @param {boolean} params.conf.type.code 是否显示代码块节点
 * @param {boolean} params.conf.type.table 是否显示表格块节点
 * @param {boolean} params.conf.type.list 是否显示列表块节点
 * @param {boolean} params.conf.type.listItem 是否显示列表项块节点
 * @param {boolean} params.conf.type.blockquote 是否显示引述块节点
 * @param {boolean} params.conf.type.super 是否显示超级块节点
 * @param {GetLocalGraphParamsConfD3} params.conf.d3 D3力导向图配置
 * @param {number} params.conf.d3.nodeSize 节点大小
 * @param {number} params.conf.d3.linkWidth 连线宽度
 * @param {number} params.conf.d3.lineOpacity 连线不透明度
 * @param {number} params.conf.d3.centerStrength 中心力强度
 * @param {number} params.conf.d3.collideRadius 碰撞半径
 * @param {number} params.conf.d3.collideStrength 碰撞力强度
 * @param {number} params.conf.d3.linkDistance 连线距离
 * @param {boolean} params.conf.d3.arrow 是否显示箭头
 */
export async function getLocalGraph(params) {
  return fetchWrapper('POST', '/api/graph/getLocalGraph', params, true);
}

/**
 * 将全局关系图的配置恢复为默认设置。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @returns {Promise<ResetGraphResponse>}
 */
export async function resetGraph() {
  return fetchWrapper('POST', '/api/graph/resetGraph', undefined, true);
}

/**
 * 将局部关系图的配置恢复为默认设置。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @returns {Promise<ResetLocalGraphResponse>}
 */
export async function resetLocalGraph() {
  return fetchWrapper('POST', '/api/graph/resetLocalGraph', undefined, true);
}

