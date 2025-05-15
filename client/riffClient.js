// Generated client for API group riff\n// TODO: Implement or import a common HTTP request wrapper function (e.g., fetchWrapper)\n/*\nasync function fetchWrapper(method, endpoint, params, needAuth) {\n  const SiyuanKernelPrefix = typeof window === 'object' ? '' : 'http://127.0.0.1:6806';\n  const url = SiyuanKernelPrefix + endpoint;\n  const options = { method, headers: {} };\n  if (method === 'POST' && params && Object.keys(params).length > 0) { // Only add body if params exist and are not empty\n    options.headers['Content-Type'] = 'application/json';\n    options.body = JSON.stringify(params);\n  }\n  if (needAuth) {\n    // Example: Retrieve and add auth token\n    // const token = localStorage.getItem('siyuan-auth-token'); \n    // if (token) options.headers['Authorization'] = `Token ${token}`;\n    options.headers['Authorization'] = 'Bearer YOUR_TOKEN_HERE'; // Placeholder\n  }\n  const response = await fetch(url, options);\n  if (!response.ok) {\n    let errorData = 'Failed to parse error response';\n    try { errorData = await response.json(); } catch (e) { try {errorData = await response.text(); } catch (e2) { /* ignore secondary error */ }}\n    console.error('API Error:', response.status, errorData); \n    throw new Error(`API Error ${response.status}: ${JSON.stringify(errorData)}`);\n  }\n  const contentType = response.headers.get('content-type');\n  if (contentType && contentType.includes('application/json')) {\n    return response.json();\n  } \n  return response.text(); // Or handle other content types\n}\n*/\n\n/**\n * 将指定的块添加为闪卡到指定的闪卡包中。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.deckID 必需。目标闪卡包的 ID。
 * @param {Array<string>} params.blockIDs 必需。要添加为闪卡的块 ID 数组。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data Data
 */\nexport async function addRiffCards(params) {\n  // Example: return fetchWrapper('POST', '/api/riff/addRiffCards', params, true);\n  console.log('Mock call to addRiffCards with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<AddRiffCardsResponse>\n}\n\n/**\n * 批量设置闪卡的到期时间。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {Array<object>} params.cardDues 必需。包含闪卡 ID 和对应新到期时间的数组。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data 成功时 Data 固定为 null。
 */\nexport async function batchSetRiffCardsDueTime(params) {\n  // Example: return fetchWrapper('POST', '/api/riff/batchSetRiffCardsDueTime', params, true);\n  console.log('Mock call to batchSetRiffCardsDueTime with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<BatchSetRiffCardsDueTimeResponse>\n}\n\n/**\n * 创建一个新的闪卡包。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.name 必需。新闪卡包的名称。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data 成功时返回新创建的闪卡包信息。
 */\nexport async function createRiffDeck(params) {\n  // Example: return fetchWrapper('POST', '/api/riff/createRiffDeck', params, true);\n  console.log('Mock call to createRiffDeck with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<CreateRiffDeckResponse>\n}\n\n/**\n * 获取指定笔记本下的所有闪卡块 ID，支持分页。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 必需。笔记本 ID。
 * @param {number} params.page 必需。页码，从 1 开始。
 * @param {number} [params.pageSize] pageSize
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data 成功时返回分页的闪卡块 ID 及分页信息。
 */\nexport async function getNotebookRiffCards(params) {\n  // Example: return fetchWrapper('POST', '/api/riff/getNotebookRiffCards', params, true);\n  console.log('Mock call to getNotebookRiffCards with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetNotebookRiffCardsResponse>\n}\n\n/**\n * 获取指定笔记本下所有到期应复习的闪卡。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.notebook 必需。笔记本 ID。
 * @param {Array<object>} [params.reviewedCards] reviewedCards
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data 成功时返回到期闪卡列表及统计信息。
 */\nexport async function getNotebookRiffDueCards(params) {\n  // Example: return fetchWrapper('POST', '/api/riff/getNotebookRiffDueCards', params, true);\n  console.log('Mock call to getNotebookRiffDueCards with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetNotebookRiffDueCardsResponse>\n}\n\n/**\n * 获取指定闪卡包中的所有闪卡块 ID，支持分页。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 必需。闪卡包 ID。
 * @param {number} params.page 必需。页码，从 1 开始。
 * @param {number} [params.pageSize] pageSize
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data 成功时返回分页的闪卡对象及分页信息。
 */\nexport async function getRiffCards(params) {\n  // Example: return fetchWrapper('POST', '/api/riff/getRiffCards', params, true);\n  console.log('Mock call to getRiffCards with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetRiffCardsResponse>\n}\n\n/**\n * 根据一组块 ID 批量获取它们对应的闪卡信息。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {Array<string>} params.blockIDs 必需。块 ID 数组。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data 成功时返回闪卡信息。
 */\nexport async function getRiffCardsByBlockIDs(params) {\n  // Example: return fetchWrapper('POST', '/api/riff/getRiffCardsByBlockIDs', params, true);\n  console.log('Mock call to getRiffCardsByBlockIDs with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetRiffCardsByBlockIDsResponse>\n}\n\n/**\n * 获取当前工作空间中所有的闪卡包列表。\n * (Requires authentication, Requires admin role)\n * @returns {Promise<object>}\n * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {Array<object>} Data 成功时返回所有闪卡包的信息数组。如果没有闪卡包，则返回空数组。
 */\nexport async function getRiffDecks() {\n  // Example: return fetchWrapper('POST', '/api/riff/getRiffDecks', undefined, true);\n  console.log('Mock call to getRiffDecks with:', "'no params'");\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetRiffDecksResponse>\n}\n\n/**\n * 获取指定闪卡包中所有到期应复习的闪卡。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.deckID 必需。闪卡包 ID。
 * @param {Array<object>} [params.reviewedCards] reviewedCards
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data 成功时返回到期闪卡列表及统计信息。
 */\nexport async function getRiffDueCards(params) {\n  // Example: return fetchWrapper('POST', '/api/riff/getRiffDueCards', params, true);\n  console.log('Mock call to getRiffDueCards with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetRiffDueCardsResponse>\n}\n\n/**\n * 获取指定文档树（根块）下的所有闪卡块 ID，支持分页。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.id 必需。文档树的根块 ID。
 * @param {number} params.page 必需。页码，从 1 开始。
 * @param {number} [params.pageSize] pageSize
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data 成功时返回分页的闪卡块 ID 及分页信息。
 */\nexport async function getTreeRiffCards(params) {\n  // Example: return fetchWrapper('POST', '/api/riff/getTreeRiffCards', params, true);\n  console.log('Mock call to getTreeRiffCards with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetTreeRiffCardsResponse>\n}\n\n/**\n * 获取指定文档树（根块）下所有到期应复习的闪卡。\n * (Requires authentication, Requires admin role)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.rootID 必需。文档树的根块 ID。
 * @param {Array<object>} [params.reviewedCards] reviewedCards
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data 成功时返回到期闪卡列表及统计信息。
 */\nexport async function getTreeRiffDueCards(params) {\n  // Example: return fetchWrapper('POST', '/api/riff/getTreeRiffDueCards', params, true);\n  console.log('Mock call to getTreeRiffDueCards with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<GetTreeRiffDueCardsResponse>\n}\n\n/**\n * 从指定的闪卡包中移除指定的闪卡。如果 deckID 为空字符串，则从所有闪卡包中移除。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.deckID 必需。目标闪卡包的 ID。如果为空字符串，则表示从所有卡包中移除这些卡片（通常用于"All"卡包的操作场景，但后端实际是根据 blockID 移除）。
 * @param {Array<string>} params.blockIDs 必需。要移除的闪卡块 ID 数组。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {object} Data Data
 */\nexport async function removeRiffCards(params) {\n  // Example: return fetchWrapper('POST', '/api/riff/removeRiffCards', params, true);\n  console.log('Mock call to removeRiffCards with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RemoveRiffCardsResponse>\n}\n\n/**\n * 移除指定的闪卡包及其包含的所有闪卡。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.deckID 必需。要移除的闪卡包 ID。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data 成功时 Data 固定为 null。
 */\nexport async function removeRiffDeck(params) {\n  // Example: return fetchWrapper('POST', '/api/riff/removeRiffDeck', params, true);\n  console.log('Mock call to removeRiffDeck with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RemoveRiffDeckResponse>\n}\n\n/**\n * 重命名指定的闪卡包。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.deckID 必需。要重命名的闪卡包 ID。
 * @param {string} params.name 必需。新的闪卡包名称。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data 成功时 Data 固定为 null。
 */\nexport async function renameRiffDeck(params) {\n  // Example: return fetchWrapper('POST', '/api/riff/renameRiffDeck', params, true);\n  console.log('Mock call to renameRiffDeck with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<RenameRiffDeckResponse>\n}\n\n/**\n * 重置指定范围内的闪卡的学习进度。可以按笔记本、文档树或闪卡包进行重置，也可以指定具体的块 ID 列表。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {'notebook'} params.type 必需。重置类型：'notebook' (笔记本), 'tree' (文档树), 'deck' (闪卡包)。
 * @param {string} params.id 必需。对应类型的 ID：笔记本 ID、文档树根块 ID 或闪卡包 ID。
 * @param {string} params.deckID 必需。闪卡包 ID。即使 type 是 'notebook' 或 'tree'，也需要指定一个 deckID 来确定操作范围，通常可以是这些卡片实际所属的卡包 ID，或者是全局的卡片操作。具体逻辑需参照后端 model.ResetFlashcards 实现。从 riff.go L89 看，此参数未被直接使用，但model层可能需要。暂时保留。
 * @param {Array<string>} [params.blockIDs] blockIDs
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data 成功时 Data 固定为 null。
 */\nexport async function resetRiffCards(params) {\n  // Example: return fetchWrapper('POST', '/api/riff/resetRiffCards', params, true);\n  console.log('Mock call to resetRiffCards with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ResetRiffCardsResponse>\n}\n\n/**\n * 对指定的闪卡进行一次复习，并根据评分更新其下次到期时间等学习状态。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.deckID 必需。闪卡所属的卡包 ID。
 * @param {string} params.cardID 必需。要复习的闪卡块 ID。
 * @param {number} params.rating 必需。评分，通常为 0 (Again), 1 (Hard), 2 (Good), 3 (Easy), 4 (Soon)。具体数值对应关系可能依赖于底层的 SM-2 算法实现。参照 riff.Rating 定义，0:Again, 1:Hard, 2:Good, 3:Easy, 4:Soon, (SM2 的0-5 对应这里的0-4?)
 * @param {Array<object>} [params.reviewedCards] reviewedCards
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data 成功时 Data 固定为 null。
 */\nexport async function reviewRiffCard(params) {\n  // Example: return fetchWrapper('POST', '/api/riff/reviewRiffCard', params, true);\n  console.log('Mock call to reviewRiffCard with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<ReviewRiffCardResponse>\n}\n\n/**\n * 跳过当前闪卡的复习，通常是将其推迟到当前学习队列的末尾或稍后。\n * (Requires authentication, Requires admin role, Unavailable in read-only mode)\n * @param {object} params - Request parameters.\n * @returns {Promise<object>}\n * @param {string} params.deckID 必需。闪卡所属的卡包 ID。
 * @param {string} params.cardID 必需。要跳过复习的闪卡块 ID。
 * @property {number} Code 返回码，0 表示成功
 * @property {string} Msg 错误信息，成功时为空字符串
 * @property {null} Data 成功时 Data 固定为 null。
 */\nexport async function skipReviewRiffCard(params) {\n  // Example: return fetchWrapper('POST', '/api/riff/skipReviewRiffCard', params, true);\n  console.log('Mock call to skipReviewRiffCard with:', params);\n  return Promise.resolve({}); // TODO: Ensure mock response matches Promise<SkipReviewRiffCardResponse>\n}\n\n