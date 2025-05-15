// Generated client for API group graph\n// TODO: Implement or import a common HTTP request wrapper function (e.g., fetchWrapper)\n/*\nasync function fetchWrapper(method, endpoint, params, needAuth) {\n  const SiyuanKernelPrefix = typeof window === 'object' ? '' : 'http://127.0.0.1:6806';\n  const url = SiyuanKernelPrefix + endpoint;\n  const options = { method, headers: {} };\n  if (method === 'POST' && params && Object.keys(params).length > 0) { // Only add body if params exist and are not empty\n    options.headers['Content-Type'] = 'application/json';\n    options.body = JSON.stringify(params);\n  }\n  if (needAuth) {\n    // Example: Retrieve and add auth token\n    // const token = localStorage.getItem('siyuan-auth-token'); \n    // if (token) options.headers['Authorization'] = `Token ${token}`;\n    options.headers['Authorization'] = 'Bearer YOUR_TOKEN_HERE'; // Placeholder\n  }\n  const response = await fetch(url, options);\n  if (!response.ok) {\n    let errorData = 'Failed to parse error response';\n    try { errorData = await response.json(); } catch (e) { try {errorData = await response.text(); } catch (e2) { /* ignore secondary error */ }}\n    console.error('API Error:', response.status, errorData); \n    throw new Error(`API Error ${response.status}: ${JSON.stringify(errorData)}`);\n  }\n  const contentType = response.headers.get('content-type');\n  if (contentType && contentType.includes('application/json')) {\n    return response.json();\n  } \n  return response.text(); // Or handle other content types\n}\n*/\n\n/**\n * 根据关键词和配置获取全局关系图的节点和边数据。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {any} params.reqId 请求 ID，用于跟踪异步请求
 * @param {string} params.k 搜索关键词，用于筛选关系图中的节点
 * @param {object} params.conf 全局关系图配置项
 * @param {number} params.conf.minRefs 节点最少被引用次数（低于此值将被隐藏）
 * @param {boolean} params.conf.dailyNote 是否包含日记节点
 * @param {object} params.conf.type 节点类型筛选配置
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
 * @param {object} params.conf.d3 D3力导向图配置
 * @param {number} params.conf.d3.nodeSize 节点大小
 * @param {number} params.conf.d3.linkWidth 连线宽度
 * @param {number} params.conf.d3.lineOpacity 连线不透明度
 * @param {number} params.conf.d3.centerStrength 中心力强度
 * @param {number} params.conf.d3.collideRadius 碰撞半径
 * @param {number} params.conf.d3.collideStrength 碰撞力强度
 * @param {number} params.conf.d3.linkDistance 连线距离
 * @param {boolean} params.conf.d3.arrow 是否显示箭头
 * @property {Array<object>} nodes 关系图中的节点列表
 * @property {Array<object>} links 关系图中的边列表
 * @property {object} conf 更新后的全局关系图配置项
 * @property {string} box 当前知识空间（笔记本组）ID
 * @property {any} reqId 请求 ID，与请求参数中的 reqId 一致
 */\nexport async function getGraph(params) {\n  // Example: return fetchWrapper('POST', '/api/graph/getGraph', params, true);\n  console.log('Mock call to getGraph with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetGraphResponse>\n}\n\n/**\n * 根据指定的文档 ID、关键词和配置获取局部关系图（如文档关系图、反链关系图等）的节点和边数据。\n * (Requires authentication)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {any} params.reqId 请求 ID，用于跟踪异步请求
 * @param {string} params.id 文档 ID，用于构建局部关系图的中心节点
 * @param {string} params.k 搜索关键词，用于筛选关系图中的节点
 * @param {object} params.conf 局部关系图配置项
 * @param {boolean} params.conf.dailyNote 是否包含日记节点
 * @param {object} params.conf.type 节点类型筛选配置
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
 * @param {object} params.conf.d3 D3力导向图配置
 * @param {number} params.conf.d3.nodeSize 节点大小
 * @param {number} params.conf.d3.linkWidth 连线宽度
 * @param {number} params.conf.d3.lineOpacity 连线不透明度
 * @param {number} params.conf.d3.centerStrength 中心力强度
 * @param {number} params.conf.d3.collideRadius 碰撞半径
 * @param {number} params.conf.d3.collideStrength 碰撞力强度
 * @param {number} params.conf.d3.linkDistance 连线距离
 * @param {boolean} params.conf.d3.arrow 是否显示箭头
 * @property {string} id 请求的文档 ID
 * @property {string} box 当前知识空间（笔记本组）ID
 * @property {Array<object>} nodes 关系图中的节点列表
 * @property {Array<object>} links 关系图中的边列表
 * @property {object} conf 更新后的局部关系图配置项
 * @property {any} reqId 请求 ID，与请求参数中的 reqId 一致
 */\nexport async function getLocalGraph(params) {\n  // Example: return fetchWrapper('POST', '/api/graph/getLocalGraph', params, true);\n  console.log('Mock call to getLocalGraph with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetLocalGraphResponse>\n}\n\n/**\n * 将全局关系图的配置恢复为默认设置。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {any} payload - ERROR: API def resetGraph Request returns z.object() directly.\n * @returns {Promise<object>}\n * @property {object} conf 重置后的全局关系图配置项
 */\nexport async function resetGraph(payload) {\n  // Example: return fetchWrapper('POST', '/api/graph/resetGraph', payload, true);\n  console.log('Mock call to resetGraph with:', payload);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ResetGraphResponse>\n}\n\n/**\n * 将局部关系图的配置恢复为默认设置。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {any} payload - ERROR: API def resetLocalGraph Request returns z.object() directly.\n * @returns {Promise<object>}\n * @property {object} conf 重置后的局部关系图配置项
 */\nexport async function resetLocalGraph(payload) {\n  // Example: return fetchWrapper('POST', '/api/graph/resetLocalGraph', payload, true);\n  console.log('Mock call to resetLocalGraph with:', payload);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ResetLocalGraphResponse>\n}\n\n