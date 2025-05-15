// Generated client for API group riff
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
 * 将指定的块添加为闪卡到指定的闪卡包中。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<AddRiffCardsResponse>}
 * @param {string} params.deckID 必需。目标闪卡包的 ID。
 * @param {Array<string>} params.blockIDs 必需。要添加为闪卡的块 ID 数组。
 */
export async function addRiffCards(params) {
  return fetchWrapper('POST', '/api/riff/addRiffCards', params, true);
}

/**
 * 批量设置闪卡的到期时间。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<BatchSetRiffCardsDueTimeResponse>}
 * @param {Array<BatchSetRiffCardsDueTimeParamsCardDuesItem>} params.cardDues 必需。包含闪卡 ID 和对应新到期时间的数组。
 */
export async function batchSetRiffCardsDueTime(params) {
  return fetchWrapper('POST', '/api/riff/batchSetRiffCardsDueTime', params, true);
}

/**
 * 创建一个新的闪卡包。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<CreateRiffDeckResponse>}
 * @param {string} params.name 必需。新闪卡包的名称。
 */
export async function createRiffDeck(params) {
  return fetchWrapper('POST', '/api/riff/createRiffDeck', params, true);
}

/**
 * 获取指定笔记本下的所有闪卡块 ID，支持分页。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetNotebookRiffCardsResponse>}
 * @param {string} params.id 必需。笔记本 ID。
 * @param {number} params.page 必需。页码，从 1 开始。
 * @param {number} [params.pageSize] pageSize
 */
export async function getNotebookRiffCards(params) {
  return fetchWrapper('POST', '/api/riff/getNotebookRiffCards', params, true);
}

/**
 * 获取指定笔记本下所有到期应复习的闪卡。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetNotebookRiffDueCardsResponse>}
 * @param {string} params.notebook 必需。笔记本 ID。
 * @param {Array<GetNotebookRiffDueCardsParamsReviewedCardsItem>} [params.reviewedCards] reviewedCards
 */
export async function getNotebookRiffDueCards(params) {
  return fetchWrapper('POST', '/api/riff/getNotebookRiffDueCards', params, true);
}

/**
 * 获取指定闪卡包中的所有闪卡块 ID，支持分页。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetRiffCardsResponse>}
 * @param {string} params.id 必需。闪卡包 ID。
 * @param {number} params.page 必需。页码，从 1 开始。
 * @param {number} [params.pageSize] pageSize
 */
export async function getRiffCards(params) {
  return fetchWrapper('POST', '/api/riff/getRiffCards', params, true);
}

/**
 * 根据一组块 ID 批量获取它们对应的闪卡信息。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetRiffCardsByBlockIDsResponse>}
 * @param {Array<string>} params.blockIDs 必需。块 ID 数组。
 */
export async function getRiffCardsByBlockIDs(params) {
  return fetchWrapper('POST', '/api/riff/getRiffCardsByBlockIDs', params, true);
}

/**
 * 获取当前工作空间中所有的闪卡包列表。
 * (Requires authentication, Requires admin role)
 * @returns {Promise<GetRiffDecksResponse>}
 */
export async function getRiffDecks() {
  return fetchWrapper('POST', '/api/riff/getRiffDecks', undefined, true);
}

/**
 * 获取指定闪卡包中所有到期应复习的闪卡。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetRiffDueCardsResponse>}
 * @param {string} params.deckID 必需。闪卡包 ID。
 * @param {Array<GetRiffDueCardsParamsReviewedCardsItem>} [params.reviewedCards] reviewedCards
 */
export async function getRiffDueCards(params) {
  return fetchWrapper('POST', '/api/riff/getRiffDueCards', params, true);
}

/**
 * 获取指定文档树（根块）下的所有闪卡块 ID，支持分页。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetTreeRiffCardsResponse>}
 * @param {string} params.id 必需。文档树的根块 ID。
 * @param {number} params.page 必需。页码，从 1 开始。
 * @param {number} [params.pageSize] pageSize
 */
export async function getTreeRiffCards(params) {
  return fetchWrapper('POST', '/api/riff/getTreeRiffCards', params, true);
}

/**
 * 获取指定文档树（根块）下所有到期应复习的闪卡。
 * (Requires authentication, Requires admin role)
 * @param {object} params - Request parameters.
 * @returns {Promise<GetTreeRiffDueCardsResponse>}
 * @param {string} params.rootID 必需。文档树的根块 ID。
 * @param {Array<GetTreeRiffDueCardsParamsReviewedCardsItem>} [params.reviewedCards] reviewedCards
 */
export async function getTreeRiffDueCards(params) {
  return fetchWrapper('POST', '/api/riff/getTreeRiffDueCards', params, true);
}

/**
 * 从指定的闪卡包中移除指定的闪卡。如果 deckID 为空字符串，则从所有闪卡包中移除。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RemoveRiffCardsResponse>}
 * @param {string} params.deckID 必需。目标闪卡包的 ID。如果为空字符串，则表示从所有卡包中移除这些卡片（通常用于"All"卡包的操作场景，但后端实际是根据 blockID 移除）。
 * @param {Array<string>} params.blockIDs 必需。要移除的闪卡块 ID 数组。
 */
export async function removeRiffCards(params) {
  return fetchWrapper('POST', '/api/riff/removeRiffCards', params, true);
}

/**
 * 移除指定的闪卡包及其包含的所有闪卡。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RemoveRiffDeckResponse>}
 * @param {string} params.deckID 必需。要移除的闪卡包 ID。
 */
export async function removeRiffDeck(params) {
  return fetchWrapper('POST', '/api/riff/removeRiffDeck', params, true);
}

/**
 * 重命名指定的闪卡包。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<RenameRiffDeckResponse>}
 * @param {string} params.deckID 必需。要重命名的闪卡包 ID。
 * @param {string} params.name 必需。新的闪卡包名称。
 */
export async function renameRiffDeck(params) {
  return fetchWrapper('POST', '/api/riff/renameRiffDeck', params, true);
}

/**
 * 重置指定范围内的闪卡的学习进度。可以按笔记本、文档树或闪卡包进行重置，也可以指定具体的块 ID 列表。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<ResetRiffCardsResponse>}
 * @param {'notebook'} params.type 必需。重置类型：'notebook' (笔记本), 'tree' (文档树), 'deck' (闪卡包)。
 * @param {string} params.id 必需。对应类型的 ID：笔记本 ID、文档树根块 ID 或闪卡包 ID。
 * @param {string} params.deckID 必需。闪卡包 ID。即使 type 是 'notebook' 或 'tree'，也需要指定一个 deckID 来确定操作范围，通常可以是这些卡片实际所属的卡包 ID，或者是全局的卡片操作。具体逻辑需参照后端 model.ResetFlashcards 实现。从 riff.go L89 看，此参数未被直接使用，但model层可能需要。暂时保留。
 * @param {Array<string>} [params.blockIDs] blockIDs
 */
export async function resetRiffCards(params) {
  return fetchWrapper('POST', '/api/riff/resetRiffCards', params, true);
}

/**
 * 对指定的闪卡进行一次复习，并根据评分更新其下次到期时间等学习状态。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<ReviewRiffCardResponse>}
 * @param {string} params.deckID 必需。闪卡所属的卡包 ID。
 * @param {string} params.cardID 必需。要复习的闪卡块 ID。
 * @param {number} params.rating 必需。评分，通常为 0 (Again), 1 (Hard), 2 (Good), 3 (Easy), 4 (Soon)。具体数值对应关系可能依赖于底层的 SM-2 算法实现。参照 riff.Rating 定义，0:Again, 1:Hard, 2:Good, 3:Easy, 4:Soon, (SM2 的0-5 对应这里的0-4?)
 * @param {Array<ReviewRiffCardParamsReviewedCardsItem>} [params.reviewedCards] reviewedCards
 */
export async function reviewRiffCard(params) {
  return fetchWrapper('POST', '/api/riff/reviewRiffCard', params, true);
}

/**
 * 跳过当前闪卡的复习，通常是将其推迟到当前学习队列的末尾或稍后。
 * (Requires authentication, Requires admin role, Unavailable in read-only mode)
 * @param {object} params - Request parameters.
 * @returns {Promise<SkipReviewRiffCardResponse>}
 * @param {string} params.deckID 必需。闪卡所属的卡包 ID。
 * @param {string} params.cardID 必需。要跳过复习的闪卡块 ID。
 */
export async function skipReviewRiffCard(params) {
  return fetchWrapper('POST', '/api/riff/skipReviewRiffCard', params, true);
}

