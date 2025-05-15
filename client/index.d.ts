// TypeScript definitions for generated API clients

import { ZodFirstPartyTypeKind } from 'zod'; // Optional: for type safety if you inspect these types

interface CheckActivationcodeParams {
  data: string; // 要检查的激活码
}

interface CheckActivationcodeResponse {
  Code: number; // 返回码，0 表示成功，其他表示失败
  Msg: string; // 返回消息
  Data: any | null;
}

interface DeactivateUserResponse {
  Code: number; // 返回码，0 表示成功，其他表示失败
  Msg: string; // 返回消息
  Data: any | null;
}

interface LoginParams {
  userName: string; // 用户名
  userPassword: string; // 用户密码
  captcha: string; // 验证码
  cloudRegion: number; // 云端区域代码，例如 0 表示中国区
}

interface LoginResponse {
  Code: number; // 返回码，0 表示成功，其他表示失败
  Msg: string; // 返回消息
  Data: any | null;
}

interface StartFreeTrialResponse {
  Code: number; // 返回码，0 表示成功，其他表示失败
  Msg: string; // 返回消息
  Data: any | null;
}

interface UseActivationcodeParams {
  data: string; // 要使用的激活码
}

interface UseActivationcodeResponse {
  Code: number; // 返回码，0 表示成功，其他表示失败
  Msg: string; // 返回消息
  Data: any | null;
}

interface ChatGPTParams {
  msg: string; // 发送给 ChatGPT 的消息内容
}

interface ChatGPTResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: any; // ChatGPT 的回复内容
}

interface ChatGPTWithActionParams {
  ids: Array<string>; // 要操作的块 ID 列表
  action: string; // 要执行的动作指令
}

interface ChatGPTWithActionResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: any; // ChatGPT 执行动作后的返回结果
}

interface UnzipParams {
  zipPath: string; // 要解压的 .zip 文件的绝对路径或相对于工作空间的路径
  path: string; // 解压到目标目录的绝对路径或相对于工作空间的路径
}

interface UnzipResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: any | null;
}

interface ZipParams {
  path: string; // 要压缩的文件或目录的绝对路径或相对于工作空间的路径
  zipPath: string; // 生成的 .zip 文件保存的绝对路径或相对于工作空间的路径
}

interface ZipResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: any | null;
}

interface FullReindexAssetContentResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: any | null;
}

interface GetDocAssetsParams {
  id: string; // 文档块的 ID
}

interface GetDocAssetsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: any; // 资源文件对象数组，具体结构未定义
}

interface GetDocImageAssetsParams {
  id: string; // 文档块的 ID
}

interface GetDocImageAssetsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: any; // 图片资源文件对象数组，具体结构未定义
}

interface GetFileAnnotationParams {
  path: string; // 资源文件的路径 (例如 assets/xxx.pdf)
}

interface GetFileAnnotationResponseData {
  path: string; // 资源文件的路径
  data: string; // 标注数据 (通常为 XFDF 格式的字符串)
}

interface GetFileAnnotationResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: GetFileAnnotationResponseData;
}

interface GetImageOCRTextParams {
  path: string; // 图片资源文件的路径 (例如 assets/xxx.png)
}

interface GetImageOCRTextResponseData {
  text: string; // OCR 识别出的文本内容
  ocrJSON: any; // 原始 OCR 结果，通常为 JSON 对象，具体结构取决于 OCR 引擎
}

interface GetImageOCRTextResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: GetImageOCRTextResponseData;
}

interface GetMissingAssetsResponseData {
  missingAssets: Array<any>; // 丢失的资源路径列表，具体元素结构未定义
}

interface GetMissingAssetsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: GetMissingAssetsResponseData;
}

interface GetUnusedAssetsResponseData {
  unusedAssets: Array<any>; // 未使用的资源文件对象列表，具体元素结构未定义
}

interface GetUnusedAssetsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: GetUnusedAssetsResponseData;
}

interface InsertLocalAssetsParams {
  assetPaths: Array<string>; // 本地资源文件的绝对路径数组
  id: string; // 要插入资源引用的目标文档块 ID
  isUpload?: boolean;
}

interface InsertLocalAssetsResponseData {
  succMap: Record<string, string>; // 成功插入的资源映射，键为原始文件名，值为在思源中的新资源路径
}

interface InsertLocalAssetsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: InsertLocalAssetsResponseData;
}

interface OcrParams {
  path: string;
}

interface OcrResponseData {
  text: string; // OCR 识别出的文本内容
  ocrJSON: any; // 原始 OCR 结果，通常为 JSON 对象，具体结构取决于 OCR 引擎
}

interface OcrResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: OcrResponseData;
}

interface RemoveUnusedAssetParams {
  path: string;
}

interface RemoveUnusedAssetResponseData {
  path: string; // 被成功移除的资源文件的路径
}

interface RemoveUnusedAssetResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: RemoveUnusedAssetResponseData;
}

interface RemoveUnusedAssetsResponseData {
  paths: Array<string>; // 被成功移除的所有未使用资源文件的路径列表
}

interface RemoveUnusedAssetsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: RemoveUnusedAssetsResponseData;
}

interface RenameAssetParams {
  oldPath: string; // 资源文件的当前路径 (例如 assets/old_name.png)
  newName: string; // 资源文件的新名称 (不含路径，例如 new_name.png)
}

interface RenameAssetResponseData {
  newPath: string; // 资源文件重命名后的新路径 (例如 assets/new_name.png)
}

interface RenameAssetResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: RenameAssetResponseData;
}

interface ResolveAssetPathParams {
  path: string; // 思源笔记中的资源相对路径 (例如 assets/image.png)
}

interface ResolveAssetPathResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: string; // 资源文件在文件系统中的绝对路径
}

interface SetFileAnnotationParams {
  path: string; // 资源文件的路径 (例如 assets/xxx.pdf)
  data: string; // 要设置的标注数据 (通常为 XFDF 格式的字符串)
}

interface SetFileAnnotationResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: any | null;
}

interface SetImageOCRTextParams {
  path: string; // 图片资源文件的路径 (例如 assets/xxx.png)
  text: string; // 要设置的 OCR 文本内容
}

interface SetImageOCRTextResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: any | null;
}

interface StatAssetParams {
  path: string; // 资源文件的 assets/ 路径或本地文件的 file:/// 绝对路径
}

interface StatAssetResponseData {
  size: number; // 文件大小（字节）
  hSize: string; // 人类可读的文件大小 (例如 1.2MB)
  created: number; // 文件创建时间戳 (毫秒)
  hCreated: string; // 人类可读的文件创建时间
  updated: number; // 文件最后修改时间戳 (毫秒)
  hUpdated: string; // 人类可读的文件最后修改时间
}

interface StatAssetResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: StatAssetResponseData;
}

interface UploadParams {
  assetPath?: string;
  id?: string;
  files: any; // 通过 FormData 上传的文件对象或文件对象列表，此字段仅用于类型提示，实际通过 FormData 传递
}

interface UploadResponseData {
  errFiles: Array<string>; // 上传失败的文件名列表
  succMap: Record<string, string>; // 上传成功的文件映射，键为原始文件名，值为在思源中的新资源路径 (例如 assets/image.png)
}

interface UploadResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: UploadResponseData;
}

interface UploadCloudParams {
  id: string; // 文档块的 ID，将上传此文档及其子文档中引用的所有本地资源
}

interface UploadCloudResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: any | null;
}

interface BatchGetBlockAttrsParams {
  ids: Array<string>; // 要获取属性的块 ID 数组
}

interface BatchGetBlockAttrsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: Record<string, Record<string, string>>; // 一个对象，键为块 ID，值为该块的属性对象 (属性名: 属性值)
}

interface BatchSetBlockAttrsParamsBlockAttrsItem {
  id: string; // 块 ID
  attrs: Record<string, string | null>; // 要设置的属性对象 (属性名: 属性值)。如果属性值为 null，则删除该属性。
}

interface BatchSetBlockAttrsParams {
  blockAttrs: Array<BatchSetBlockAttrsParamsBlockAttrsItem>; // 包含多个块属性设置的对象数组
}

interface BatchSetBlockAttrsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: any | null;
}

interface GetBlockAttrsParams {
  id: string; // 要获取属性的块 ID
}

interface GetBlockAttrsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: Record<string, string>; // 该块的属性对象 (属性名: 属性值)
}

interface GetBookmarkLabelsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: Array<string>; // 书签标签字符串数组
}

interface ResetBlockAttrsParams {
  id: string; // 要重置属性的块 ID
  attrs: Record<string, string>; // 要重置的属性对象 (属性名: 期望的当前属性值)。只有当块的属性值与此处提供的值匹配时，该属性才会被移除。
}

interface ResetBlockAttrsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: any | null;
}

interface SetBlockAttrsParams {
  id: string; // 要设置属性的块 ID
  attrs: Record<string, string | null>; // 要设置的属性对象 (属性名: 属性值)。如果属性值为 null，则删除该属性。
}

interface SetBlockAttrsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: any | null;
}

interface AddAttributeViewBlocksParams {
  avID: string; // 属性视图的 ID
  blockID?: string;
  previousID?: string;
  ignoreFillFilter?: boolean;
  srcs: Array<Record<string, any>>; // 要添加的源数据块信息数组，具体结构取决于源类型
}

interface AddAttributeViewBlocksResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: any | null;
}

interface AddAttributeViewKeyParams {
  avID: string; // 属性视图的 ID
  keyID: string; // 新列的 ID，如果为空则自动生成
  keyName: string; // 新列的名称
  keyType: string; // 新列的类型 (e.g., 'text', 'number', 'select')
  keyIcon: string; // 新列的图标 (Emoji 或思源图标名)
  previousKeyID: string; // 新列将插入到此列 ID 之前
}

interface AddAttributeViewKeyResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: any | null;
}

interface AppendAttributeViewDetachedBlocksWithValuesParams {
  avID: string; // 属性视图的 ID
  blocksValues: Array<Array<any>>; // 二维数组，外层数组代表多个新块，内层数组代表每个块对应各列的初始值
}

interface AppendAttributeViewDetachedBlocksWithValuesResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: any | null;
}

interface DuplicateAttributeViewBlockParams {
  avID: string; // 要复制的属性视图块的 ID
}

interface DuplicateAttributeViewBlockResponseData {
  avID: string; // 新复制的属性视图的 ID
  blockID: string; // 新复制的属性视图块的 ID
}

interface DuplicateAttributeViewBlockResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: DuplicateAttributeViewBlockResponseData | null;
}

interface GetAttributeViewParams {
  id: string; // 属性视图的 ID
}

interface GetAttributeViewResponseData {
  av: any; // 属性视图对象的详细信息，具体结构复杂，参考前端实际使用或Go源码 `kernel.AttributeView`
}

interface GetAttributeViewResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: GetAttributeViewResponseData | null;
}

interface GetAttributeViewFilterSortParams {
  id: string; // 属性视图的 ID
  blockID: string; // 属性视图关联的块 ID (通常与属性视图ID相同)
}

interface GetAttributeViewFilterSortResponseData {
  filters: Array<any>; // 筛选条件对象数组，具体结构参考 `kernel.AVFilter`
  sorts: Array<any>; // 排序规则对象数组，具体结构参考 `kernel.AVSort`
}

interface GetAttributeViewFilterSortResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: GetAttributeViewFilterSortResponseData | null;
}

interface GetAttributeViewKeysParams {
  id: string; // 属性视图的 ID
}

interface GetAttributeViewKeysResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: Array<any> | null;
}

interface GetAttributeViewKeysByAvIDParams {
  avID: string; // 属性视图的 ID
}

interface GetAttributeViewKeysByAvIDResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: Array<any> | null;
}

interface GetAttributeViewPrimaryKeyValuesParams {
  id: string; // 属性视图的 ID
  keyword?: string;
  page?: number;
  pageSize?: number;
}

interface GetAttributeViewPrimaryKeyValuesResponseData {
  name: string; // 主键列的名称
  blockIDs: Array<string>; // 匹配的主键值对应的块 ID 列表
  rows: Array<any>; // 匹配的行数据数组，具体结构可能包含主键值和其他相关信息
}

interface GetAttributeViewPrimaryKeyValuesResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: GetAttributeViewPrimaryKeyValuesResponseData | null;
}

interface GetMirrorDatabaseBlocksParams {
  avID: string; // 属性视图的 ID
}

interface GetMirrorDatabaseBlocksResponseDataRefDefsItem {
  RefID: string; // 引用的块ID (通常是属性视图本身)
  DefIDs: Array<string>; // 被引用的定义块ID列表 (镜像块)
}

interface GetMirrorDatabaseBlocksResponseData {
  refDefs: Array<GetMirrorDatabaseBlocksResponseDataRefDefsItem>; // 引用定义对象数组
}

interface GetMirrorDatabaseBlocksResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: GetMirrorDatabaseBlocksResponseData | null;
}

interface RemoveAttributeViewBlocksParams {
  avID: string; // 属性视图的 ID
  srcIDs: Array<string>; // 要移除的源数据块的 ID 数组
}

interface RemoveAttributeViewBlocksResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: any | null;
}

interface RemoveAttributeViewKeyParams {
  avID: string; // 属性视图的 ID
  keyID: string; // 要移除的列的 ID
  removeRelationDest?: boolean;
}

interface RemoveAttributeViewKeyResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: any | null;
}

interface RenderAttributeViewParams {
  id: string; // 属性视图的 ID
  viewID?: string;
  query?: string;
  page?: number;
  pageSize?: number;
}

interface RenderAttributeViewResponseData {
  name: string; // 属性视图的名称
  id: string; // 属性视图的 ID
  viewType: any; // 当前视图的类型 (具体类型需查阅 kernel.AVViewType)
  viewID: any; // 当前视图的 ID (具体类型需查阅 kernel.AVViewID)
  views: Array<any>; // 属性视图包含的所有视图定义数组，元素结构参考 `kernel.AVView`
  view: any; // 当前渲染的视图的详细数据，结构复杂，取决于视图类型
  isMirror: boolean; // 是否为镜像属性视图
}

interface RenderAttributeViewResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: RenderAttributeViewResponseData | null;
}

interface RenderHistoryAttributeViewParams {
  id: string; // 属性视图的 ID
  created: string; // 历史版本创建的时间戳字符串 (毫秒级)
}

interface RenderHistoryAttributeViewResponseData {
  name: string; // 属性视图的名称
  id: string; // 属性视图的 ID
  viewType: any; // 视图的类型
  viewID: any; // 视图的 ID
  views: Array<any>; // 所有视图定义数组
  view: any; // 当前渲染的视图的详细数据
  isMirror: boolean; // 是否为镜像
}

interface RenderHistoryAttributeViewResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: RenderHistoryAttributeViewResponseData | null;
}

interface RenderSnapshotAttributeViewParams {
  snapshot: string; // 快照的路径或标识
  id: string; // 属性视图的 ID
}

interface RenderSnapshotAttributeViewResponseData {
  name: string; // 属性视图的名称
  id: string; // 属性视图的 ID
  viewType: any; // 视图的类型
  viewID: any; // 视图的 ID
  views: Array<any>; // 所有视图定义数组
  view: any; // 当前渲染的视图的详细数据
  isMirror: boolean; // 是否为镜像
}

interface RenderSnapshotAttributeViewResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: RenderSnapshotAttributeViewResponseData | null;
}

interface SearchAttributeViewParams {
  keyword: string; // 搜索关键词
  excludes?: Array<string>;
}

interface SearchAttributeViewResponseData {
  results: Array<any>; // 搜索结果对象数组，每个对象包含属性视图的基本信息 (如 id, name)
}

interface SearchAttributeViewResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: SearchAttributeViewResponseData | null;
}

interface SearchAttributeViewNonRelationKeyParams {
  avID: string; // 属性视图的 ID
  keyword: string; // 搜索关键词
}

interface SearchAttributeViewNonRelationKeyResponseData {
  keys: Array<any>; // 匹配的非关联列定义对象数组，结构参考 `kernel.AVKey`
}

interface SearchAttributeViewNonRelationKeyResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: SearchAttributeViewNonRelationKeyResponseData | null;
}

interface SearchAttributeViewRelationKeyParams {
  avID: string; // 属性视图的 ID
  keyword: string; // 搜索关键词
}

interface SearchAttributeViewRelationKeyResponseData {
  keys: Array<any>; // 匹配的关联列定义对象数组，结构参考 `kernel.AVKey`
}

interface SearchAttributeViewRelationKeyResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: SearchAttributeViewRelationKeyResponseData | null;
}

interface SetAttributeViewBlockAttrParams {
  avID: string; // 属性视图的 ID
  keyID: string; // 列的 ID (Key ID)
  rowID: string; // 行的 ID (通常是数据块的 ID)
  value: any; // 要设置的新值，具体类型取决于列的类型
}

interface SetAttributeViewBlockAttrResponseData {
  value: any; // 成功设置后的值，可能经过转换或处理
}

interface SetAttributeViewBlockAttrResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: SetAttributeViewBlockAttrResponseData | null;
}

interface SetDatabaseBlockViewParams {
  id: string; // 数据库块（属性视图块）的 ID
  viewID: string; // 要设置为默认视图的视图 ID
}

interface SetDatabaseBlockViewResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: any | null;
}

interface SortAttributeViewKeyParams {
  avID: string; // 属性视图的 ID
  keyID: string; // 要移动的列的 ID
  previousKeyID: string; // 目标位置：将列移动到此列 ID 之前
}

interface SortAttributeViewKeyResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: any | null;
}

interface SortAttributeViewViewKeyParams {
  avID: string; // 属性视图的 ID
  viewID: string; // 特定视图的 ID
  keyID: string; // 要移动的列的 ID
  previousKeyID: string; // 目标位置：将列移动到此列 ID 之前
}

interface SortAttributeViewViewKeyResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: any | null;
}

interface BatchUpdatePackageParams {
  frontend: string; // 客户端类型，通常为 'frontend' 或 'app'
}

interface BatchUpdatePackageResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: any | null;
}

interface GetBazaarIconParams {
  keyword?: string;
}

interface GetBazaarIconResponseData {
  packages: Array<any>; // 集市图标包对象数组，具体结构参考 `kernel.BazaarPackage`
}

interface GetBazaarIconResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: GetBazaarIconResponseData | null;
}

interface GetBazaarPackageREAMEParams {
  repoURL: string; // 包所在的仓库 URL
  repoHash: string; // 包在仓库中的特定提交哈希或版本标签
  packageType: string; // 包类型 (例如 'icons', 'plugins', 'themes', 'templates', 'widgets')
}

interface GetBazaarPackageREAMEResponseData {
  html: string; // README 文件的 HTML 内容
}

interface GetBazaarPackageREAMEResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: GetBazaarPackageREAMEResponseData | null;
}

interface GetBazaarPluginParams {
  frontend: string; // 客户端类型，通常为 'frontend' 或 'app'
  keyword?: string;
}

interface GetBazaarPluginResponseData {
  packages: Array<any>; // 集市插件包对象数组，具体结构参考 `kernel.BazaarPackage`
}

interface GetBazaarPluginResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: GetBazaarPluginResponseData | null;
}

interface GetBazaarTemplateParams {
  keyword?: string;
}

interface GetBazaarTemplateResponseData {
  packages: Array<any>; // 集市模板包对象数组，具体结构参考 `kernel.BazaarPackage`
}

interface GetBazaarTemplateResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: GetBazaarTemplateResponseData | null;
}

interface GetBazaarThemeParams {
  keyword?: string;
}

interface GetBazaarThemeResponseData {
  packages: Array<any>; // 集市主题包对象数组，具体结构参考 `kernel.BazaarPackage`
}

interface GetBazaarThemeResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: GetBazaarThemeResponseData | null;
}

interface GetBazaarWidgetParams {
  keyword?: string;
}

interface GetBazaarWidgetResponseData {
  packages: Array<any>; // 集市挂件包对象数组，具体结构参考 `kernel.BazaarPackage`
}

interface GetBazaarWidgetResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: GetBazaarWidgetResponseData | null;
}

interface GetInstalledIconParams {
  keyword?: string;
}

interface GetInstalledIconResponseData {
  packages: Array<any>; // 已安装图标包对象数组，具体结构参考 `kernel.BazaarPackage`
}

interface GetInstalledIconResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: GetInstalledIconResponseData | null;
}

interface GetInstalledPluginParams {
  frontend: string; // 客户端类型，通常为 'frontend' 或 'app'
  keyword?: string;
}

interface GetInstalledPluginResponseData {
  packages: Array<any>; // 已安装插件对象数组，具体结构参考 `kernel.BazaarPackage`
}

interface GetInstalledPluginResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: GetInstalledPluginResponseData | null;
}

interface GetInstalledTemplateParams {
  keyword?: string;
}

interface GetInstalledTemplateResponseData {
  packages: Array<any>; // 已安装模板对象数组，具体结构参考 `kernel.BazaarPackage`
}

interface GetInstalledTemplateResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: GetInstalledTemplateResponseData | null;
}

interface GetInstalledThemeParams {
  keyword?: string;
}

interface GetInstalledThemeResponseData {
  packages: Array<any>; // 已安装主题对象数组，具体结构参考 `kernel.BazaarPackage`
}

interface GetInstalledThemeResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: GetInstalledThemeResponseData | null;
}

interface GetInstalledWidgetParams {
  keyword?: string;
}

interface GetInstalledWidgetResponseData {
  packages: Array<any>; // 已安装挂件对象数组，具体结构参考 `kernel.BazaarPackage`
}

interface GetInstalledWidgetResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: GetInstalledWidgetResponseData | null;
}

interface GetUpdatedPackageParams {
  frontend: string; // 客户端类型，通常为 'frontend' 或 'app'
}

interface GetUpdatedPackageResponseData {
  plugins: Array<any>; // 可更新的插件列表，元素结构参考 `kernel.BazaarPackage`
  widgets: Array<any>; // 可更新的挂件列表，元素结构参考 `kernel.BazaarPackage`
  icons: Array<any>; // 可更新的图标包列表，元素结构参考 `kernel.BazaarPackage`
  themes: Array<any>; // 可更新的主题列表，元素结构参考 `kernel.BazaarPackage`
  templates: Array<any>; // 可更新的模板列表，元素结构参考 `kernel.BazaarPackage`
}

interface GetUpdatedPackageResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: GetUpdatedPackageResponseData | null;
}

interface InstallBazaarIconParams {
  repoURL: string; // 图标包所在的仓库 URL
  repoHash: string; // 图标包在仓库中的特定提交哈希或版本标签
  packageName: string; // 图标包的名称 (通常是仓库名)
  keyword?: string;
}

interface InstallBazaarIconResponseData {
  packages: Array<any>; // 更新后的已安装图标包列表，元素结构参考 `kernel.BazaarPackage`
  appearance: any; // 更新后的外观设置对象，具体结构参考 `conf.Appearance`
}

interface InstallBazaarIconResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: InstallBazaarIconResponseData | null;
}

interface InstallBazaarPluginParams {
  repoURL: string; // 插件所在的仓库 URL
  repoHash: string; // 插件在仓库中的特定提交哈希或版本标签
  packageName: string; // 插件的名称 (通常是仓库名)
  frontend: string; // 客户端类型，通常为 'frontend' 或 'app'
  keyword?: string;
}

interface InstallBazaarPluginResponseData {
  packages: Array<any>; // 更新后的已安装插件列表，元素结构参考 `kernel.BazaarPackage`
}

interface InstallBazaarPluginResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: InstallBazaarPluginResponseData | null;
}

interface InstallBazaarTemplateParams {
  repoURL: string; // 模板所在的仓库 URL
  repoHash: string; // 模板在仓库中的特定提交哈希或版本标签
  packageName: string; // 模板的名称 (通常是仓库名)
  keyword?: string;
}

interface InstallBazaarTemplateResponseData {
  packages: Array<any>; // 更新后的已安装模板列表，元素结构参考 `kernel.BazaarPackage`
}

interface InstallBazaarTemplateResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: InstallBazaarTemplateResponseData | null;
}

interface InstallBazaarThemeParams {
  repoURL: string; // 主题所在的仓库 URL
  repoHash: string; // 主题在仓库中的特定提交哈希或版本标签
  packageName: string; // 主题的名称 (通常是仓库名)
  mode: number; // 主题模式 (0: 亮色, 1: 暗色, 2: 根据系统)
  update?: boolean;
  keyword?: string;
}

interface InstallBazaarThemeResponseData {
  packages: Array<any>; // 更新后的已安装主题列表，元素结构参考 `kernel.BazaarPackage`
  appearance: any; // 更新后的外观设置对象，具体结构参考 `conf.Appearance`
}

interface InstallBazaarThemeResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: InstallBazaarThemeResponseData | null;
}

interface InstallBazaarWidgetParams {
  repoURL: string; // 挂件所在的仓库 URL
  repoHash: string; // 挂件在仓库中的特定提交哈希或版本标签
  packageName: string; // 挂件的名称 (通常是仓库名)
  keyword?: string;
}

interface InstallBazaarWidgetResponseData {
  packages: Array<any>; // 更新后的已安装挂件列表，元素结构参考 `kernel.BazaarPackage`
}

interface InstallBazaarWidgetResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: InstallBazaarWidgetResponseData | null;
}

interface UninstallBazaarIconParams {
  packageName: string; // 要卸载的图标包的名称
  keyword?: string;
}

interface UninstallBazaarIconResponseData {
  packages: Array<any>; // 更新后的已安装图标包列表，元素结构参考 `kernel.BazaarPackage`
  appearance: any; // 更新后的外观设置对象，具体结构参考 `conf.Appearance`
}

interface UninstallBazaarIconResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: UninstallBazaarIconResponseData | null;
}

interface UninstallBazaarPluginParams {
  packageName: string; // 要卸载的插件的名称
  frontend: string; // 客户端类型，通常为 'frontend' 或 'app'
  keyword?: string;
}

interface UninstallBazaarPluginResponseData {
  packages: Array<any>; // 更新后的已安装插件列表，元素结构参考 `kernel.BazaarPackage`
}

interface UninstallBazaarPluginResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: UninstallBazaarPluginResponseData | null;
}

interface UninstallBazaarTemplateParams {
  packageName: string; // 要卸载的模板的名称
  keyword?: string;
}

interface UninstallBazaarTemplateResponseData {
  packages: Array<any>; // 更新后的已安装模板列表，元素结构参考 `kernel.BazaarPackage`
}

interface UninstallBazaarTemplateResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: UninstallBazaarTemplateResponseData | null;
}

interface UninstallBazaarThemeParams {
  packageName: string; // 要卸载的主题的名称
  mode: number; // 主题模式 (0: 亮色, 1: 暗色, 2: 根据系统)，用于确定要卸载哪个模式下的主题或重置相关配置
  keyword?: string;
}

interface UninstallBazaarThemeResponseData {
  packages: Array<any>; // 更新后的已安装主题列表，元素结构参考 `kernel.BazaarPackage`
  appearance: any; // 更新后的外观设置对象，具体结构参考 `conf.Appearance`
}

interface UninstallBazaarThemeResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: UninstallBazaarThemeResponseData | null;
}

interface UninstallBazaarWidgetParams {
  packageName: string; // 要卸载的挂件的名称
  keyword?: string;
}

interface UninstallBazaarWidgetResponseData {
  packages: Array<any>; // 更新后的已安装挂件列表，元素结构参考 `kernel.BazaarPackage`
}

interface UninstallBazaarWidgetResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 返回消息
  Data: UninstallBazaarWidgetResponseData | null;
}

interface AppendBlockParams {
  data: string; // 要插入的内容，可以是 Markdown 或 DOM 字符串
  dataType: 'markdown' | 'dom'; // 指定 data 参数的类型
  parentID: string; // 父块的 ID
}

interface AppendBlockResponseDataItem {
  id: string; // 新创建块的 ID
}

interface AppendBlockResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: Array<AppendBlockResponseDataItem> | null;
}

interface AppendDailyNoteBlockParams {
  data: string; // 要追加的内容，可以是 Markdown 或 DOM 字符串
  dataType: 'markdown' | 'dom'; // 指定 data 参数的类型
  notebook: string; // 目标笔记本的 ID
}

interface AppendDailyNoteBlockResponseDataItem {
  id: string; // 新创建块的 ID
}

interface AppendDailyNoteBlockResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: Array<AppendDailyNoteBlockResponseDataItem> | null;
}

interface BatchUpdateBlockParamsBlocksItem {
  id: string; // 要更新的块 ID
  data: string; // 新的块内容，可以是 Markdown 或 DOM 字符串
  dataType: 'markdown' | 'dom'; // 指定 data 参数的类型
}

interface BatchUpdateBlockParams {
  blocks: Array<BatchUpdateBlockParamsBlocksItem>; // 包含多个待更新块信息的数组
}

interface BatchUpdateBlockResponseDataItem {
  id: string; // 已更新块的 ID
}

interface BatchUpdateBlockResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: Array<BatchUpdateBlockResponseDataItem> | null;
}

interface CheckBlockExistParams {
  id: string; // 要检查的块 ID
}

interface CheckBlockExistResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: boolean; // 块是否存在
}

interface CheckBlockFoldParams {
  id: string; // 要检查的块 ID
}

interface CheckBlockFoldResponseData {
  isFolded: boolean; // 块是否已折叠
  isRoot: boolean; // 块是否为根块（通常指文档块）
}

interface CheckBlockFoldResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: CheckBlockFoldResponseData; // 包含折叠状态和是否为根块的信息
}

interface CheckBlockRefParams {
  ids: Array<string>; // 要检查的块 ID 数组
}

interface CheckBlockRefResponseDataValue {
  defCount: number; // 该块作为定义块被引用的次数
  refCount: number; // 该块作为引用块引用其他块的次数
}

interface CheckBlockRefResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: Record<string, CheckBlockRefResponseDataValue>; // 一个记录对象，键为块 ID，值为该块的引用统计信息
}

interface DeleteBlockParams {
  id: string; // 要删除的块 ID
}

interface DeleteBlockResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: Array<any> | null;
}

interface FoldBlockParams {
  id: string; // 要折叠的块 ID
}

interface FoldBlockResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: Array<any> | null;
}

interface GetBlockBreadcrumbParams {
  id: string; // 目标块的 ID
  excludeTypes?: Array<string>;
}

interface GetBlockBreadcrumbResponseDataItem {
  id: string; // 面包屑项的块 ID
  name: string; // 面包屑项的名称（通常是块内容或标题）
  type: string; // 面包屑项的块类型
  icon?: string;
}

interface GetBlockBreadcrumbResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: Array<GetBlockBreadcrumbResponseDataItem>; // 面包屑路径数组，从根到目标块的父块
}

interface GetBlockDOMParams {
  id: string; // 要获取 DOM 的块 ID
}

interface GetBlockDOMResponseData {
  id: string; // 块 ID
  dom: string; // 块的 DOM 内容 (HTML 字符串)
  isFullWidth?: boolean;
}

interface GetBlockDOMResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: GetBlockDOMResponseData; // 包含块 ID 和其 DOM 内容的对象
}

interface GetBlockDefIDsByRefTextParams {
  anchor: string; // 要搜索的引用锚文本
  excludeIDs?: Array<string>;
}

interface GetBlockDefIDsByRefTextResponseDataRefDefsItem {
  RefID: string; // 引用块的ID (发起引用的块)
  DefIDs: Array<string>; // 被引用的定义块ID列表
}

interface GetBlockDefIDsByRefTextResponseData {
  refDefs: Array<GetBlockDefIDsByRefTextResponseDataRefDefsItem>; // 引用定义对的列表
}

interface GetBlockDefIDsByRefTextResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: GetBlockDefIDsByRefTextResponseData; // 包含引用定义对列表的对象
}

interface GetBlockIndexParams {
  id: string; // 要获取索引的块 ID
}

interface GetBlockIndexResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: number; // 块在其父块子节点中的索引位置，-1 表示未找到或出错
}

interface GetBlockInfoParams {
  id: string; // 要获取信息的块 ID
}

interface GetBlockInfoResponseData {
  box: string; // 块所在的笔记本 ID
  path: string; // 块在笔记本中的绝对路径
  rootID: string; // 块所属的根文档块 ID
  rootTitle: string; // 根文档块的标题
  rootChildID: string; // 该块在根文档块下的一级子块ID (如果自身不是一级子块，则为空)
  rootIcon: string; // 根文档块的图标
}

interface GetBlockInfoResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: GetBlockInfoResponseData; // 包含块的详细路径和上下文信息的对象
}

interface GetBlockKramdownParams {
  id: string; // 要获取 Kramdown 源码的块 ID
  mode?: 'md' | 'textmark';
}

interface GetBlockKramdownResponseData {
  id: string; // 块 ID
  kramdown: string; // 块的 Kramdown 源码
}

interface GetBlockKramdownResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: GetBlockKramdownResponseData; // 包含块 ID 和其 Kramdown 源码的对象
}

interface GetBlockSiblingIDParams {
  id: string; // 目标块的 ID
}

interface GetBlockSiblingIDResponseData {
  parent: string; // 父块 ID，如果目标块是根块则为空字符串
  previous: string; // 上一个同级块 ID，如果没有则为空字符串
  next: string; // 下一个同级块 ID，如果没有则为空字符串
}

interface GetBlockSiblingIDResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: GetBlockSiblingIDResponseData; // 包含父块、上一个和下一个同级块 ID 的对象
}

interface GetBlockTreeInfosParams {
  ids: Array<string>; // 要获取块树信息的块 ID 数组
}

interface GetBlockTreeInfosResponseDataItem {
  id: string; // 块 ID
  box: string; // 笔记本 ID
  path: string; // 块的路径
  hPath: string; // 块的人类可读路径
  name: string; // 块的名称（通常是内容的前缀）
  alias: string; // 块的别名
  memo: string; // 块的备注
  tag: string; // 块的标签
  bookmark: string; // 块的书签内容
  type: string; // 块的类型
  subType: string; // 块的子类型
  depth: number; // 块在树中的深度
  sort: number; // 块的排序值
  created: string; // 块的创建时间 (Unix 时间戳字符串)
  updated: string; // 块的更新时间 (Unix 时间戳字符串)
  'f Suprema': string; // 块的 F Suprema 值，用途未知
  fcontent: string; // 块的 FContent 值，可能是格式化内容预览
  markdown: string; // 块的 Markdown 内容
  length: number; // 块内容的长度
  refCount: number; // 块的引用计数
  defCount: number; // 块的定义计数
  refID: string; // 块的引用目标 ID (如果该块是引用块)
  parentID: string; // 父块 ID
  parent2ID: string; // 祖父块 ID
  rootID: string; // 根块 ID (文档块 ID)
  childrenCount: number; // 直接子块数量
  codeBlockCount: number; // 代码块数量
  avCount: number; // 属性视图数量
  docSize: number; // 文档大小 (如果该块是文档块)
  subFileCount: number; // 子文件数量 (如果该块是文档块)
  headingCount: number; // 标题数量
  listCount: number; // 列表数量
  listItemCount: number; // 列表项数量
  mathBlockCount: number; // 数学公式块数量
  htmlBlockCount: number; // HTML 块数量
  tableCount: number; // 表格数量
  quoteCount: number; // 引述块数量
  superBlockCount: number; // 超级块数量
  paragraphCount: number; // 段落数量
  todoCount: number; // 待办事项数量
  imageCount: number; // 图片数量
  audioCount: number; // 音频数量
  videoCount: number; // 视频数量
  otherAssetCount: number; // 其他资源数量
  isBacklink: boolean; // 是否为反向链接提及
  isRef: boolean; // 是否为引用
  isDef: boolean; // 是否为定义
  isComment: boolean; // 是否为评论
  hasMemo: boolean; // 是否有备注
  hasTag: boolean; // 是否有标签
  hasBookmark: boolean; // 是否有书签
  hasAlias: boolean; // 是否有别名
  hidden: boolean; // 是否隐藏
  folded: boolean; // 是否折叠
  refText: string; // 引用文本 (如果该块是引用块)
  refPath: string; // 引用路径 (如果该块是引用块)
  refPath2: string; // 引用路径2 (如果该块是引用块)
  refCreate: string; // 引用创建时间 (如果该块是引用块, Unix 时间戳字符串)
  refUpdate: string; // 引用更新时间 (如果该块是引用块, Unix 时间戳字符串)
  defPath: string; // 定义路径 (如果该块是定义块)
  defPath2: string; // 定义路径2 (如果该块是定义块)
  ial: Record<string, string>; // 块的 IAL 属性键值对
  children?: Array<any>;
  attrs?: Record<string, string>;
}

interface GetBlockTreeInfosResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: Array<GetBlockTreeInfosResponseDataItem>; // 一个包含多个块树信息的数组，每个对象代表一个块及其详细信息和可能的子节点
}

interface GetBlocksIndexesParams {
  ids: Array<string>; // 要获取索引的块 ID 数组
}

interface GetBlocksIndexesResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: Record<string, number>; // 一个记录对象，键为块 ID，值为该块在其父块中的索引
}

interface GetBlocksWordCountParams {
  ids: Array<string>; // 要统计字数的块 ID 数组
  reqId?: string;
}

interface GetBlocksWordCountResponseDataStat {
  wordCount: number; // 总字数
  charCount: number; // 总字符数
  linkCount: number; // 总链接数
}

interface GetBlocksWordCountResponseData {
  reqId?: string;
  stat: GetBlocksWordCountResponseDataStat; // 字数统计结果
}

interface GetBlocksWordCountResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: GetBlocksWordCountResponseData; // 包含字数统计结果和可选请求 ID 的对象
}

interface GetChildBlocksParams {
  id: string; // 父块的 ID
}

interface GetChildBlocksResponseDataItem {
  id: string; // 子块的 ID
  type: string; // 子块的类型
}

interface GetChildBlocksResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: Array<GetChildBlocksResponseDataItem>; // 直接子块的基本信息数组
}

interface GetContentWordCountParams {
  content: string; // 要统计字数的文本内容
  reqId?: string;
}

interface GetContentWordCountResponseDataStat {
  wordCount: number; // 总字数
  charCount: number; // 总字符数
  linkCount: number; // 总链接数
}

interface GetContentWordCountResponseData {
  reqId?: string;
  stat: GetContentWordCountResponseDataStat; // 字数统计结果
}

interface GetContentWordCountResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: GetContentWordCountResponseData; // 包含字数统计结果和可选请求 ID 的对象
}

interface GetDOMTextParams {
  dom: string; // 包含 HTML 标签的 DOM 字符串
}

interface GetDOMTextResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: string; // 从 DOM 中提取的纯文本内容
}

interface GetDocInfoParams {
  id: string; // 目标文档块的 ID
}

interface GetDocInfoResponseData {
  id: string; // 文档块 ID
  box: string; // 笔记本 ID
  path: string; // 文档的存储路径
  dom: string; // 文档内容的 DOM (HTML 字符串)
  title: string; // 文档标题
  icon: string; // 文档图标的 Base64 编码或 Emoji
  iconURL: string; // 文档图标的 URL
  breadcrumb: string; // 文档的面包屑路径 (HTML 字符串)
  isTemplate: boolean; // 该文档是否为模板
  updated: string; // 文档更新时间 (yyyyMMddHHmmss格式)
}

interface GetDocInfoResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: GetDocInfoResponseData; // 包含文档详细信息的对象
}

interface GetDocsInfoParams {
  ids: Array<string>; // 包含多个文档块 ID 的数组
}

interface GetDocsInfoResponseDataItem {
  id: string; // 文档块 ID
  box: string; // 笔记本 ID
  path: string; // 文档的存储路径
  title: string; // 文档标题
  icon: string; // 文档图标的 Base64 编码或 Emoji
  iconURL: string; // 文档图标的 URL
  isTemplate: boolean; // 该文档是否为模板
  updated: string; // 文档更新时间 (yyyyMMddHHmmss格式)
}

interface GetDocsInfoResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: Array<GetDocsInfoResponseDataItem>; // 包含多个文档详细信息的数组
}

interface GetHeadingChildrenDOMParams {
  id: string; // 目标标题块的 ID
}

interface GetHeadingChildrenDOMResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: string; // 标题块下所有子孙块合并的 DOM (HTML 字符串)
}

interface GetHeadingChildrenIDsParams {
  id: string; // 目标标题块的 ID
}

interface GetHeadingChildrenIDsResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: Array<string>; // 标题块下所有子孙块的 ID 数组
}

interface GetHeadingDeleteTransactionParams {
  id: string; // 要获取删除事务的标题块 ID
}

interface GetHeadingDeleteTransactionResponseDataDoOperationsItem {
  action: string; // 操作类型 (例如: delete, update, insert等)
  id?: string;
  data?: string;
  parentID?: string;
  previousID?: string;
  dataType?: string;
}

interface GetHeadingDeleteTransactionResponseData {
  doOperations: Array<GetHeadingDeleteTransactionResponseDataDoOperationsItem>; // 正向操作列表
}

interface GetHeadingDeleteTransactionResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: GetHeadingDeleteTransactionResponseData; // 包含删除操作的事务对象
}

interface GetHeadingLevelTransactionParams {
  id: string; // 要调整级别的标题块 ID
  level: number; // 新的标题级别 (1-6)
}

interface GetHeadingLevelTransactionResponseDataDoOperationsItem {
  action: string; // 操作类型 (例如: updateial)
  id: string; // 操作的块 ID
  data?: string;
}

interface GetHeadingLevelTransactionResponseData {
  doOperations: Array<GetHeadingLevelTransactionResponseDataDoOperationsItem>; // 正向操作列表
}

interface GetHeadingLevelTransactionResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: GetHeadingLevelTransactionResponseData; // 包含调整级别操作的事务对象
}

interface GetRecentUpdatedBlocksResponseDataItem {
  id: string; // 块 ID
  box: string; // 笔记本 ID
  path: string; // 块所在文档的路径
  hPath: string; // 块所在文档的人类可读路径
  name: string; // 块的名称/内容预览
  bookmark: string; // 块的书签内容
  memo: string; // 块的备注内容
  alias: string; // 块的别名
  type: string; // 块类型
  updated: string; // 块更新时间 (yyyyMMddHHmmss 格式)
}

interface GetRecentUpdatedBlocksResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: Array<GetRecentUpdatedBlocksResponseDataItem>; // 最近更新的块信息数组
}

interface GetRefIDsParams {
  id: string; // 发起引用的块 ID
}

interface GetRefIDsResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: Array<string>; // 该块引用的所有定义块的 ID 数组
}

interface GetRefIDsByFileAnnotationIDParams {
  id: string; // 文件注解块的 ID
}

interface GetRefIDsByFileAnnotationIDResponseData {
  refID: string; // 相关的引用块 ID
  defID: string; // 相关的定义块 ID
}

interface GetRefIDsByFileAnnotationIDResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: GetRefIDsByFileAnnotationIDResponseData; // 包含相关引用ID和定义ID的对象
}

interface GetRefTextParams {
  id: string; // 引用块的 ID
}

interface GetRefTextResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: string; // 引用块的锚文本
}

interface GetTailChildBlocksParams {
  id: string; // 父块的 ID
  size: number; // 要获取的尾部子块数量
}

interface GetTailChildBlocksResponseDataItem {
  id: string; // 子块的 ID
  type: string; // 子块的类型
}

interface GetTailChildBlocksResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: Array<GetTailChildBlocksResponseDataItem>; // 尾部子块的基本信息数组
}

interface GetTreeStatParams {
  id: string; // 目标块的 ID，通常为文档块
}

interface GetTreeStatResponseData {
  id: string; // 块 ID
  box: string; // 笔记本 ID
  path: string; // 块路径
  refCount: number; // 引用数量
  defCount: number; // 定义数量
  childrenCount: number; // 直接子块数量
  codeBlockCount: number; // 代码块数量
  avCount: number; // 属性视图数量
  docSize: number; // 文档大小 (字节)
  subFileCount: number; // 子文件数量 (文档内文档)
  headingCount: number; // 标题块数量
  listCount: number; // 列表块数量
  listItemCount: number; // 列表项数量
  mathBlockCount: number; // 数学公式块数量
  htmlBlockCount: number; // HTML块数量
  tableCount: number; // 表格块数量
  quoteCount: number; // 引述块数量
  superBlockCount: number; // 超级块数量
  paragraphCount: number; // 段落数量
  todoCount: number; // 待办事项数量 (已完成或未完成)
  imageCount: number; // 图片资源数量
  audioCount: number; // 音频资源数量
  videoCount: number; // 视频资源数量
  otherAssetCount: number; // 其他资源数量
}

interface GetTreeStatResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: GetTreeStatResponseData; // 块树的统计信息对象
}

interface GetUnfoldedParentIDParams {
  id: string; // 起始块的 ID
}

interface GetUnfoldedParentIDResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: string; // 最近的已展开父块的 ID，如果无此类父块或出错则为空字符串
}

interface InsertBlockParams {
  anchorID: string; // 锚点块的 ID
  data: string; // 要插入的内容，可以是 Markdown 或 DOM 字符串
  dataType: 'markdown' | 'dom'; // 指定 data 参数的类型
  isBefore: boolean; // 是否在锚点块之前插入 (true: 之前, false: 之后)
}

interface InsertBlockResponseDataItem {
  id: string; // 新创建块的 ID
}

interface InsertBlockResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: Array<InsertBlockResponseDataItem> | null;
}

interface PrependBlockParams {
  data: string; // 要插入的内容，可以是 Markdown 或 DOM 字符串
  dataType: 'markdown' | 'dom'; // 指定 data 参数的类型
  parentID: string; // 父块的 ID
}

interface PrependBlockResponseDataItem {
  id: string; // 新创建块的 ID
}

interface PrependBlockResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: Array<PrependBlockResponseDataItem> | null;
}

interface SetBlockReminderParams {
  id: string; // 要设置提醒的块 ID
  timed: string; // 提醒时间，格式为 yyyyMMddHHmmss (例如: 20230815103000)
}

interface SetBlockReminderResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: null; // 成功时为 null
}

interface SwapBlockRefParams {
  refID: string; // 原引用块的 ID
  defID: string; // 原定义块的 ID
  includeChildren: boolean; // 是否包含子块进行交换 (通常用于嵌入块)
}

interface SwapBlockRefResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: null; // 成功时为 null
}

interface TransferBlockRefParams {
  fromID: string; // 原块的 ID，其引用关系将被转移
  toID: string; // 目标块的 ID，将接收引用关系
  refIDs?: Array<string>;
  reloadUI?: boolean;
}

interface TransferBlockRefResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: null; // 成功时为 null
}

interface UnfoldBlockParams {
  id: string; // 要展开的块 ID
}

interface UnfoldBlockResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: Array<any> | null;
}

interface UpdateBlockParams {
  id: string; // 要更新的块 ID
  data: string; // 新的块内容，可以是 Markdown 或 DOM 字符串
  dataType: 'markdown' | 'dom'; // 指定 data 参数的类型
}

interface UpdateBlockResponseDataItem {
  id: string; // 已更新块的 ID
}

interface UpdateBlockResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: Array<UpdateBlockResponseDataItem> | null;
}

interface PrependDailyNoteBlockParams {
  data: string; // 要追加的内容，可以是 Markdown 或 DOM 字符串。如果 dataType 为 'markdown'，内容会先转换为 DOM。注意：后端实现中此接口行为类似 appendDailyNoteBlock，均在末尾追加，但定义保留 prepend 以匹配接口名和潜在的未来行为调整。建议使用 appendDailyNoteBlock 以获得明确的末尾追加行为。后端 action 为 prependInsert。 
  dataType: 'markdown' | 'dom'; // 指定 data 参数的类型 ('markdown' 或 'dom')。 
  notebook: string; // 目标笔记本的 ID。
}

interface PrependDailyNoteBlockResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: Array<any> | null;
}

interface MoveBlockParams {
  id: string; // 要移动的块的 ID。
  parentID?: string;
  previousID?: string;
}

interface MoveBlockResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: null; // 此接口成功时不返回具体数据，UI 通常通过 WebSocket 消息更新。
}

interface MoveOutlineHeadingParams {
  id: string; // 要移动的大纲标题块的 ID。
  parentID?: string;
  previousID?: string;
}

interface MoveOutlineHeadingResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: Array<any> | null;
}

interface GetBookmarkResponseDataItemBlocksItem {
  id: string; // 块的 ID
  type: string; // 块的类型 (例如 Paragraph, Heading, List, Document 等)
  content: string; // 块的显示内容 (对于普通块可能是名称或概要，对于属性视图是其标题)
  markdown: string; // 块的 Markdown 源码
  name?: string;
  alias?: string;
  memo?: string;
  icon?: string;
  hPath: string; // 块所在文档的人类可读路径 (例如 '/文档名/子文档名')
  path: string; // 块所在文档的绝对存储路径
  box: string; // 块所属的笔记本 ID
  rootID: string; // 块所属的根文档块 ID
}

interface GetBookmarkResponseDataItem {
  name: string; // 书签的名称 (用户在 IAL 中为块设置的 bookmark 属性值)
  blocks: Array<GetBookmarkResponseDataItemBlocksItem>; // 属于此书签名称下的块对象列表
  type: string; // 固定为 'bookmark'，表示这是一个书签分组
  depth: number; // 层级深度，对于书签固定为 1
  count: number; // 此书签名称下包含的块的数量
}

interface GetBookmarkResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: Array<GetBookmarkResponseDataItem>; // 书签数据数组，每个元素是一个书签分组及其包含的书签块列表
}

interface RemoveBookmarkParams {
  bookmark: string; // 要移除的书签的名称 (块 IAL 中 bookmark 属性的值)
}

interface RemoveBookmarkResponseData {
  closeTimeout: number; // 一个建议的关闭超时时间 (毫秒)，通常在错误时提供以便UI提示
}

interface RemoveBookmarkResponse {
  Code: number; // API 调用返回码，0 表示成功，其他表示失败
  Msg: string; // API 调用返回消息
  Data?: RemoveBookmarkResponseData | null;
}

interface RenameBookmarkParams {
  oldBookmark: string; // 要重命名的旧书签名称 (块 IAL 中 bookmark 属性的当前值)
  newBookmark: string; // 新的书签名称 (将写入块 IAL 中 bookmark 属性的新值)
}

interface RenameBookmarkResponseData {
  closeTimeout: number; // 一个建议的关闭超时时间 (毫秒)，通常在错误时提供以便UI提示
}

interface RenameBookmarkResponse {
  Code: number; // API 调用返回码，0 表示成功，其他表示失败
  Msg: string; // API 调用返回消息
  Data?: RenameBookmarkResponseData | null;
}

interface GetChannelInfoParams {
  name: string; // 要查询的广播频道名称
}

interface GetChannelInfoResponseData {
  name: string; // 频道名称
  count: number; // 频道的总订阅者数量 (WebSocket + SSE)
}

interface GetChannelInfoResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: GetChannelInfoResponseData; // 频道信息对象
}

interface GetChannelsResponseDataItem {
  name: string; // 频道名称
  count: number; // 频道的总订阅者数量 (WebSocket + SSE)
}

interface GetChannelsResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: Array<GetChannelsResponseDataItem>; // 活跃频道信息对象数组
}

interface PostMessageParams {
  channel: string; // 目标广播频道的名称
  cmd?: string;
  data: string; // 要发送的消息内容或命令参数 (JSON 字符串)
}

interface PostMessageResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: any | null;
}

interface BroadcastPublishParams {
  channel: string; // 目标广播频道的名称
  type: 'string' | 'binary'; // 消息类型：'string' (文本) 或 'binary' (二进制文件)
  data?: string;
  file?: any;
}

interface BroadcastPublishResponseDataChannel {
  name: string; // 目标频道名称
  count: number; // 发布时频道的订阅者数量
}

interface BroadcastPublishResponseDataMessage {
  type: 'string' | 'binary'; // 发布的消息类型
  size: number; // 发布的消息大小 (字节)
  filename: string; // 发布的文件名 (如果 type 为 'binary')
}

interface BroadcastPublishResponseData {
  code: number; // 操作结果返回码，0 表示成功
  msg: string; // 操作结果消息
  channel: BroadcastPublishResponseDataChannel; // 频道信息
  message: BroadcastPublishResponseDataMessage; // 发布的消息详情
}

interface BroadcastPublishResponse {
  Code: number; // API 调用返回码 (外层)
  Msg: string; // API 调用返回消息 (外层)
  Data: BroadcastPublishResponseData; // 发布操作的结果详情
}

interface ReadFilePathsResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: Array<string>; // 从剪贴板中读取到的文件绝对路径列表。如果剪贴板中不是文件路径，或在 Linux 等受限情况下，可能返回空数组。
}

interface GetCloudSpaceResponseDataSync {
  size: number; // 云端同步数据的大小 (字节)
  hSize: string; // 人类可读的云端同步数据大小 (例如 '1.2 GB')，仅当服务商为思源官方时有效，其他为'-'
  updated: string; // 云端同步数据最后更新时间戳 (格式可能为 Unix 时间戳或特定日期字符串)
  cloudName: string; // 云端同步数据存放的目录名 (例如 'main')
  saveDir: string; // 本地同步数据实际存放的目录绝对路径
}

interface GetCloudSpaceResponseDataBackup {
  size: number; // 云端备份数据的大小 (字节)
  hSize: string; // 人类可读的云端备份数据大小 (例如 '500 MB')，仅当服务商为思源官方时有效，其他为'-'
  updated: string; // 云端备份数据最后更新时间戳 (格式可能为 Unix 时间戳或特定日期字符串)
  saveDir: string; // 本地备份数据实际存放的目录绝对路径
}

interface GetCloudSpaceResponseData {
  sync: GetCloudSpaceResponseDataSync; // 云同步相关信息
  backup: GetCloudSpaceResponseDataBackup; // 云备份相关信息
  hAssetSize: string; // 人类可读的云端资源文件总大小 (例如 '300 MB')，仅当服务商为思源官方时有效，其他为'-'
  hSize: string; // 人类可读的云端已用空间总大小 (同步数据 + 备份数据 + 资源文件，例如 '2 GB')，仅当服务商为思源官方时有效，其他为'-'
  hTotalSize: string; // 人类可读的云端总可用空间大小 (例如 '10 GB')，仅当服务商为思源官方时有效，其他为'-'
  hExchangeSize: string; // 人类可读的积分兑换云空间大小 (例如 '1 GB')，仅当服务商为思源官方时有效，其他为'-'
  hTrafficUploadSize: string; // 人类可读的当月已用上传流量 (例如 '5 GB')，仅当服务商为思源官方时有效，其他为'-'
  hTrafficDownloadSize: string; // 人类可读的当月已用下载流量 (例如 '12 GB')，仅当服务商为思源官方时有效，其他为'-'
  hTrafficAPIGet: string; // 人类可读的当月 API GET 请求次数 (例如 '1.5 k')，仅当服务商为思源官方时有效，其他为'-'
  hTrafficAPIPut: string; // 人类可读的当月 API PUT 请求次数 (例如 '800')，仅当服务商为思源官方时有效，其他为'-'
}

interface GetCloudSpaceResponse {
  Code: number; // API 调用返回码，0 表示成功，1 表示获取信息时发生错误
  Msg: string; // API 调用返回消息，错误时包含错误信息
  Data: GetCloudSpaceResponseData; // 云端空间和流量的详细信息
}

interface PandocParams {
  dir?: string;
  args: Array<string>; // Pandoc 命令行参数数组
}

interface PandocResponseData {
  path: string; // 转换后输出文件的路径
}

interface PandocResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: PandocResponseData; // 成功时返回的数据
}

interface Export2LiandiParams {
  id: string; // 要导出到链滴的文档ID
}

interface Export2LiandiResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data?: null;
}

interface ExportAsFileParams {
  type: string; // 上传文件的MIME类型
}

interface ExportAsFileResponseData {
  name: string; // 处理后的文件名
  file: string; // 文件在服务器上的可访问路径 (相对于/export/)
}

interface ExportAsFileResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: ExportAsFileResponseData; // 成功时返回的数据
}

interface ExportAsciiDocParams {
  id: string; // 要导出的文档ID
}

interface ExportAsciiDocResponseData {
  name: string; // 导出的 .zip 文件名
  zip: string; // 导出的 .zip 文件在服务器上的绝对路径
}

interface ExportAsciiDocResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: ExportAsciiDocResponseData; // 成功时返回的数据
}

interface ExportAttributeViewParams {
  id: string; // 属性视图的ID (avID)
  blockID: string; // 包含该属性视图的块ID
}

interface ExportAttributeViewResponseData {
  zip: string; // 导出的CSV压缩文件在服务器上的绝对路径
}

interface ExportAttributeViewResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: ExportAttributeViewResponseData; // 成功时返回的数据
}

interface ExportDataResponseData {
  zip: string; // 导出的 .zip 文件在服务器上的绝对路径
}

interface ExportDataResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: ExportDataResponseData; // 成功时返回的数据
}

interface ExportDataInFolderParams {
  folder: string; // 要导出数据的文件夹路径 (相对于工作空间data目录)
}

interface ExportDataInFolderResponseData {
  name: string; // 导出的压缩包文件名 (不含路径)
}

interface ExportDataInFolderResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: ExportDataInFolderResponseData; // 成功时返回的数据
}

interface ExportDocxParams {
  id: string; // 要导出的文档ID
  savePath: string; // 服务器上保存 .docx 文件的绝对路径
  removeAssets: boolean; // 是否移除导出的 Word 文件中包含的资源文件（如图片）的原始文件
  merge?: boolean;
}

interface ExportDocxResponseData {
  path: string; // 最终生成的 .docx 文件在服务器上的绝对路径
}

interface ExportDocxResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: ExportDocxResponseData; // 成功时返回的数据
}

interface ExportEPUBParams {
  id: string; // 要导出的文档ID
}

interface ExportEPUBResponseData {
  name: string; // 导出的 .zip 文件名
  zip: string; // 导出的 .zip 文件在服务器上的绝对路径
}

interface ExportEPUBResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: ExportEPUBResponseData; // 成功时返回的数据
}

interface ExportHTMLParams {
  id: string; // 要导出的文档ID
  pdf: boolean; // 是否为导出 PDF 进行预处理（例如，处理链接和资源路径以适应 PDF 生成环境）
  savePath: string; // 服务器上保存 HTML 文件的绝对路径 (如果 pdf 为 true，则此路径可能用于临时存储)
  keepFold?: boolean;
  merge?: boolean;
}

interface ExportHTMLResponseData {
  id: string; // 导出的文档ID
  name: string; // 文档的原始名称
  content: string; // 生成的 HTML 内容
}

interface ExportHTMLResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: ExportHTMLResponseData; // 成功时返回的数据
}

interface ExportMdParams {
  id: string; // 要导出的文档ID
}

interface ExportMdResponseData {
  name: string; // 导出的 .zip 文件名
  zip: string; // 导出的 .zip 文件在服务器上的绝对路径
}

interface ExportMdResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: ExportMdResponseData; // 成功时返回的数据
}

interface ExportMdContentParams {
  id: string; // 要导出 Markdown 内容的文档ID
  refMode?: number;
  embedMode?: number;
  yfm?: boolean;
}

interface ExportMdContentResponseData {
  hPath: string; // 文档的人类可读路径 (面包屑路径)
  content: string; // 导出的 Markdown 文本内容
}

interface ExportMdContentResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: ExportMdContentResponseData; // 成功时返回的数据
}

interface ExportMdHTMLParams {
  id: string; // 要导出 HTML 内容的文档ID
  savePath: string; // 服务器上保存 HTML 文件的绝对路径 (此参数在后端代码中存在但似乎未实际用于此接口，可能为遗留或通用逻辑)
}

interface ExportMdHTMLResponseData {
  id: string; // 导出的文档ID
  name: string; // 文档的原始名称
  content: string; // 生成的纯 HTML 内容
}

interface ExportMdHTMLResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: ExportMdHTMLResponseData; // 成功时返回的数据
}

interface ExportMdsParams {
  ids: Array<string>; // 要导出的文档ID数组
}

interface ExportMdsResponseData {
  name: string; // 导出的 .zip 文件名
  zip: string; // 导出的 .zip 文件在服务器上的绝对路径
}

interface ExportMdsResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: ExportMdsResponseData; // 成功时返回的数据
}

interface ExportMediaWikiParams {
  id: string; // 要导出的文档ID
}

interface ExportMediaWikiResponseData {
  name: string; // 导出的 .zip 文件名
  zip: string; // 导出的 .zip 文件在服务器上的绝对路径
}

interface ExportMediaWikiResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: ExportMediaWikiResponseData; // 成功时返回的数据
}

interface ExportNotebookMdParams {
  notebook: string; // 要导出的笔记本ID
}

interface ExportNotebookMdResponseData {
  name: string; // 导出的 .zip 文件名 (通常为笔记本名称)
  zip: string; // 导出的 .zip 文件在服务器上的绝对路径
}

interface ExportNotebookMdResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: ExportNotebookMdResponseData; // 成功时返回的数据
}

interface ExportNotebookSYParams {
  id: string; // 要导出的笔记本ID
}

interface ExportNotebookSYResponseData {
  zip: string; // 导出的 .sy 文件在服务器上的绝对路径
}

interface ExportNotebookSYResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: ExportNotebookSYResponseData; // 成功时返回的数据
}

interface ExportODTParams {
  id: string; // 要导出的文档ID
}

interface ExportODTResponseData {
  name: string; // 导出的 .zip 文件名
  zip: string; // 导出的 .zip 文件在服务器上的绝对路径
}

interface ExportODTResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: ExportODTResponseData; // 成功时返回的数据
}

interface ExportOPMLParams {
  id: string; // 要导出的文档ID
}

interface ExportOPMLResponseData {
  name: string; // 导出的 .zip 文件名
  zip: string; // 导出的 .zip 文件在服务器上的绝对路径
}

interface ExportOPMLResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: ExportOPMLResponseData; // 成功时返回的数据
}

interface ExportOrgModeParams {
  id: string; // 要导出的文档ID
}

interface ExportOrgModeResponseData {
  name: string; // 导出的 .zip 文件名
  zip: string; // 导出的 .zip 文件在服务器上的绝对路径
}

interface ExportOrgModeResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: ExportOrgModeResponseData; // 成功时返回的数据
}

interface ExportPreviewHTMLParams {
  id: string; // 要导出预览 HTML 的文档ID
  keepFold?: boolean;
  merge?: boolean;
  image?: boolean;
}

interface ExportPreviewHTMLResponseData {
  id: string; // 导出的文档ID
  name: string; // 文档的原始名称
  content: string; // 生成的预览 HTML 内容
  attrs: Record<string, string>; // 文档块的属性 (IAL)
  type: string; // 文档块的类型 (如 'd' 表示文档块)
}

interface ExportPreviewHTMLResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: ExportPreviewHTMLResponseData; // 成功时返回的数据
}

interface ExportRTFParams {
  id: string; // 要导出的文档ID
}

interface ExportRTFResponseData {
  name: string; // 导出的 .zip 文件名
  zip: string; // 导出的 .zip 文件在服务器上的绝对路径
}

interface ExportRTFResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: ExportRTFResponseData; // 成功时返回的数据
}

interface ExportReStructuredTextParams {
  id: string; // 要导出的文档ID
}

interface ExportReStructuredTextResponseData {
  name: string; // 导出的 .zip 文件名
  zip: string; // 导出的 .zip 文件在服务器上的绝对路径
}

interface ExportReStructuredTextResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: ExportReStructuredTextResponseData; // 成功时返回的数据
}

interface ExportResourcesParams {
  name?: string;
  paths: Array<string>; // 要导出的文件或文件夹在工作空间中的相对路径数组 (相对于data目录)
}

interface ExportResourcesResponseData {
  path: string; // 导出的 .zip 文件在服务器上的绝对路径
}

interface ExportResourcesResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: ExportResourcesResponseData; // 成功时返回的数据
}

interface ExportSYParams {
  id: string; // 要导出的文档ID
}

interface ExportSYResponseData {
  name: string; // 导出的 .sy 文件名
  zip: string; // 导出的 .sy 文件在服务器上的绝对路径
}

interface ExportSYResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: ExportSYResponseData; // 成功时返回的数据
}

interface ExportTempContentParams {
  content: string; // 要导出预览的 Markdown 内容字符串
  mode?: number;
  theme?: string;
  title?: string;
  type?: string;
  css?: string;
  js?: string;
}

interface ExportTempContentResponseData {
  url: string; // 生成的临时内容预览 URL (形如 http://localhost:6806/export/temp/xxxxxxx)
}

interface ExportTempContentResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: ExportTempContentResponseData; // 成功时返回的数据
}

interface ExportTextileParams {
  id: string; // 要导出的文档ID
}

interface ExportTextileResponseData {
  name: string; // 导出的 .zip 文件名
  zip: string; // 导出的 .zip 文件在服务器上的绝对路径
}

interface ExportTextileResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: ExportTextileResponseData; // 成功时返回的数据
}

interface ExportPreviewParams {
  id: string; // 要获取 HTML 预览的文档ID
}

interface ExportPreviewResponseData {
  html: string; // 生成的文档 HTML 预览内容
}

interface ExportPreviewResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: ExportPreviewResponseData; // 成功时返回的数据
}

interface ProcessPDFParams {
  id: string; // 相关文档的ID (用于日志记录或上下文关联)
  path: string; // 已生成的 HTML 文件的绝对路径 (该文件将被用于生成或处理 PDF)
  merge?: boolean;
  removeAssets: boolean; // 处理完成后是否移除相关资源文件
  watermark: boolean; // 是否添加水印
}

interface ProcessPDFResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data?: null;
}

interface ExtensionCopyParams {
  dom: string; // 要处理的 HTML DOM 内容字符串。这是必须的字段。注意：即使是从链滴剪藏（href 指向链滴文章），也需要传递一个 dom 参数，内容可以为空字符串。
  notebook?: string;
  href?: string;
}

interface ExtensionCopyResponseData {
  md: string; // 转换后或直接获取的 Markdown 内容
  withMath: boolean; // 指示转换后的 Markdown 内容中是否包含数学公式 (KaTeX)
}

interface ExtensionCopyResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息，失败时错误信息显示在这里
  Data: ExtensionCopyResponseData | null;
}

interface CopyFileParams {
  src: string; // 源文件路径。如果是资源文件，则为相对于 assets 目录的路径；如果是普通工作空间文件，则为相对于工作空间根目录的路径。后端会尝试将其解析为绝对路径。注意：此接口不能直接复制目录。后台实现会先尝试将其作为资源文件解析，如果失败则作为工作空间普通文件解析。若要复制普通文件，建议使用 /api/file/globalCopyFiles。 
  dest: string; // 目标文件绝对路径。
}

interface CopyFileResponseData {
  closeTimeout?: number;
}

interface CopyFileResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: CopyFileResponseData | null;
}

interface GetFileParams {
  path: string; // 要获取内容的文件路径 (相对于工作空间根目录)。
}

interface GetFileResponse {
  Code: number; // 错误状态码 (例如 403, 404, 500)
  Msg: string; // 错误消息
}

interface GetUniqueFilenameParams {
  path: string; // 原始文件路径 (通常包含期望的文件名和扩展名)。
}

interface GetUniqueFilenameResponseData {
  path: string; // 处理后的唯一文件路径。
}

interface GetUniqueFilenameResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: GetUniqueFilenameResponseData;
}

interface GlobalCopyFilesParams {
  srcs: Array<string>; // 要复制的源文件绝对路径数组。如果任何一个文件不存在，操作将失败。注意：不能是目录。
  destDir: string; // 目标目录路径 (相对于工作空间根目录)。
}

interface GlobalCopyFilesResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data?: null;
}

interface PutFileParams {
  path: string; // 目标文件或目录在工作空间内的相对路径。文件名需要符合规范，否则请求失败。
  isDir: boolean; // 是否创建目录。如果为 true，则创建目录；如果为 false 或未提供，则上传文件。
  modTime?: string;
}

interface PutFileResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data?: null;
}

interface ReadDirParams {
  path: string; // 要读取的目录路径 (相对于工作空间根目录)。
}

interface ReadDirResponseDataItem {
  name: string; // 文件名或目录名
  isDir: boolean; // 是否为目录
  isSymlink: boolean; // 是否为符号链接
  updated: number; // 最后修改时间的Unix时间戳 (秒)
}

interface ReadDirResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: Array<ReadDirResponseDataItem>; // 目录中的条目列表
}

interface RemoveFileParams {
  path: string; // 要移除的文件或目录路径 (相对于工作空间根目录)。
}

interface RemoveFileResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data?: null;
}

interface RenameFileParams {
  path: string; // 原始文件或目录路径 (相对于工作空间根目录)。
  newPath: string; // 新的文件或目录路径 (相对于工作空间根目录)。
}

interface RenameFileResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data?: null;
}

interface ChangeSortParams {
  notebook: string; // 要更改排序的笔记本ID。
  paths: Array<string>; // 需要调整排序的文档路径列表。这些路径通常是文档在其笔记本内的相对路径。后端会根据这些路径的顺序来更新文档树的排序。
}

interface ChangeSortResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data?: null;
}

interface CreateDailyNoteParams {
  notebook: string; // 要在哪个笔记本下创建日记的ID。
  app?: string;
  callback?: string;
}

interface CreateDailyNoteResponseData {
  id: string; // 创建或获取到的日记文档的根块ID。
}

interface CreateDailyNoteResponse {
  Code: number; // 响应状态码。0 表示成功创建或获取；1 表示笔记本未找到；-1 表示其他错误。
  Msg: string; // 响应消息。
  Data?: CreateDailyNoteResponseData;
}

interface CreateDocParams {
  notebook: string; // 文档所属的笔记本ID。
  path: string; // 文档的存储路径 (相对于笔记本根目录，例如 '/folder/documentName')。
  title: string; // 文档的标题。
  md: string; // 文档的初始 Markdown 内容。
  sorts?: Array<string>;
  listDocTree?: boolean;
  callback?: string;
}

interface CreateDocResponseData {
  id: string; // 新创建文档的根块ID。
  closeTimeout?: number;
}

interface CreateDocResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: CreateDocResponseData; // 成功时返回新文档的ID；失败时可能包含 closeTimeout。
}

interface CreateDocWithMdParams {
  notebook: string; // 文档所属的笔记本ID。
  path: string; // 文档的人类可读路径 (HPath)，例如 '/My Notes/New Document'。后端会处理路径中的非法字符和长度限制。
  markdown: string; // 新文档的Markdown内容。
  parentID?: string;
  id?: string;
  tags?: string;
  withMath?: boolean;
  clippingHref?: string;
  listDocTree?: boolean;
  callback?: string;
}

interface CreateDocWithMdResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data?: string;
}

interface Doc2HeadingParams {
  srcID: string; // 要转换的源文档的ID。
  targetID: string; // 目标文档中，新标题块将插入到其后的那个标题块的ID。如果 after 为 false，则插入其前。
  after: boolean; // 是否将源文档内容插入到 targetID 块之后 (true) 或之前 (false)。
}

interface Doc2HeadingResponseData {
  srcTreeBox: string; // 源文档所在的笔记本ID。
  srcTreePath: string; // 源文档的路径。
  closeTimeout?: number;
}

interface Doc2HeadingResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: Doc2HeadingResponseData; // 成功时返回源文档的笔记本和路径信息；失败时可能包含 closeTimeout。
}

interface DuplicateDocParams {
  id: string; // 要复制的源文档的ID。
  listDocTree?: boolean;
  callback?: string;
}

interface DuplicateDocResponseData {
  id: string; // 新复制出来的文档的根块ID。
  notebook: string; // 新文档所在的笔记本ID。
  path: string; // 新文档的存储路径。
  hPath: string; // 新文档的人类可读路径 (HPath)。
  closeTimeout?: number;
}

interface DuplicateDocResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: DuplicateDocResponseData; // 成功时返回新文档的相关信息；失败时可能包含 closeTimeout。
}

interface GetDocParams {
  id: string; // 要获取的文档或块的ID。
  index?: number;
  query?: string;
  queryMethod?: number;
  queryTypes?: Record<string, boolean>;
  mode?: number;
  size?: number;
  startID?: string;
  endID?: string;
  isBacklink?: boolean;
  originalRefBlockIDs?: Record<string, string>;
  highlight?: boolean;
  reqId?: string;
}

interface GetDocResponseData {
  id: string; // 请求的原始块ID。
  mode: number; // 请求的加载模式。
  parentID: string; // 父块ID。
  parent2ID: string; // 父父块ID。
  rootID: string; // 文档根块ID。
  type: number; // 块类型。
  content: string; // 块的DOM内容 (HTML字符串)。
  blockCount: number; // 返回的块数量。
  eof: boolean; // 是否已到达文档末尾 (在向下加载模式时)。
  scroll: boolean; // 是否需要滚动定位。
  box: string; // 文档所属的笔记本ID。
  path: string; // 文档的存储路径。
  isSyncing: boolean; // 文档当前是否正在同步中。
  isBacklinkExpand: boolean; // 是否为反链展开上下文。
  keywords?: Array<string>;
  reqId?: string;
}

interface GetDocResponse {
  Code: number; // 响应状态码。0: 成功；1: 通用错误；3: 块未找到。
  Msg: string; // 响应消息。
  Data?: GetDocResponseData;
}

interface GetDocCreateSavePathParams {
  notebook: string; // 当前操作的笔记本ID。计算默认保存位置时会参考此笔记本的配置及全局配置。
}

interface GetDocCreateSavePathResponseData {
  box: string; // 计算得出的用于保存新文档的笔记本ID。
  path: string; // 计算得出的用于保存新文档的人类可读路径 (HPath)。
}

interface GetDocCreateSavePathResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data?: GetDocCreateSavePathResponseData;
}

interface GetFullHPathByIDParams {
  id: string; // 要查询的文档或块的ID。
}

interface GetFullHPathByIDResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data?: string;
}

interface GetHPathByIDParams {
  id: string; // 要查询的文档或块的ID。
}

interface GetHPathByIDResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data?: string;
}

interface GetHPathByPathParams {
  notebook: string; // 文档所在的笔记本ID。
  path: string; // 文档的实际存储路径 (相对于笔记本根目录，例如 '/folderName/documentName.sy')。
}

interface GetHPathByPathResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data?: string;
}

interface GetHPathsByPathsParamsPathsItem {
  notebook: string; // 文档所在的笔记本ID。
  path: string; // 文档的实际存储路径 (相对于笔记本根目录)。
}

interface GetHPathsByPathsParams {
  paths: Array<GetHPathsByPathsParamsPathsItem>; // 包含笔记本ID和文档路径的对象数组。
}

interface GetHPathsByPathsResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data?: Array<string>;
}

interface GetIDsByHPathParams {
  notebook: string; // 文档所在的笔记本ID。
  path: string; // 要查询的文档的人类可读路径 (HPath)，例如 '/My Notes/Topic'。
}

interface GetIDsByHPathResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data?: Array<string>;
}

interface GetPathByIDParams {
  id: string; // 要查询的文档或块的ID。
}

interface GetPathByIDResponseData {
  path: string; // 文档的实际存储路径 (相对于笔记本根目录，例如 '/folderName/documentName.sy')。
  notebook: string; // 文档所在的笔记本ID。
}

interface GetPathByIDResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data?: GetPathByIDResponseData;
}

interface GetRefCreateSavePathParams {
  notebook: string; // 当前操作的笔记本ID。计算默认保存位置时会参考此笔记本的配置及全局配置。
}

interface GetRefCreateSavePathResponseData {
  box: string; // 计算得出的用于保存新块引文档的笔记本ID。
  path: string; // 计算得出的用于保存新块引文档的人类可读路径 (HPath)。
}

interface GetRefCreateSavePathResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data?: GetRefCreateSavePathResponseData;
}

interface Heading2DocParams {
  srcHeadingID: string; // 源文档中要转换为新文档的标题块的ID。
  targetNoteBook: string; // 新文档将要创建在哪个笔记本的ID。
  targetPath?: string;
  previousPath?: string;
  callback?: string;
}

interface Heading2DocResponseData {
  srcRootBlockID: string; // 转换后新文档的根块ID。
  path: string; // 新文档在目标笔记本中的实际存储路径。
  closeTimeout?: number;
}

interface Heading2DocResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: Heading2DocResponseData; // 成功时返回新文档的ID和路径；失败时可能包含 closeTimeout。
}

interface Li2DocParams {
  srcListItemID: string; // 源文档中要转换为新文档的列表项的ID。
  targetNoteBook: string; // 新文档将要创建在哪个笔记本的ID。
  targetPath?: string;
  previousPath?: string;
  callback?: string;
}

interface Li2DocResponseData {
  srcRootBlockID: string; // 转换后新文档的根块ID。
  path: string; // 新文档在目标笔记本中的实际存储路径。
  closeTimeout?: number;
}

interface Li2DocResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: Li2DocResponseData; // 成功时返回新文档的ID和路径；失败时可能包含 closeTimeout。
}

interface ListDocTreeParams {
  notebook: string; // 要列出文档树的笔记本ID。
  path: string; // 要列出文档树的起始路径 (相对于笔记本根目录，例如 '/folderName')。通常用于列出某个文件夹下的文档结构。
}

interface ListDocTreeResponseDataTreeItem {
  id: string; // 文档或目录的ID。
  children?: Array<any>;
}

interface ListDocTreeResponseData {
  tree: Array<ListDocTreeResponseDataTreeItem>; // 文档树结构数组。
}

interface ListDocTreeResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data?: ListDocTreeResponseData;
}

interface ListDocsByPathParams {
  notebook: string; // 笔记本ID。
  path: string; // 要列出文档的路径 (相对于笔记本根目录，例如 '/folderName')。空字符串表示笔记本根目录。
  sort?: number;
  flashcard?: boolean;
  maxListCount?: number;
  showHidden?: boolean;
  ignoreMaxListHint?: boolean;
}

interface ListDocsByPathResponseDataFilesItem {
  type: string; // 条目类型，'d' 表示目录 (doc file)，'f' 表示文件 (asset file)。在 filetree 上下文，通常都是文档，但 model.File 的定义更通用。
  name: string; // 文档名或目录名 (不含.sy后缀)。
  alias?: string;
  memo?: string;
  bookmark?: string;
  hPath: string; // 人类可读路径 (HPath)。
  id: string; // 文档ID。
  path: string; // 文档的实际存储路径 (相对于笔记本根目录)。
  nameCount?: number;
  updated: number; // 文档最后修改时间的Unix时间戳 (秒)。
  subFileCount: number; // 如果是目录，表示其下子文档/目录的数量。
  icon?: string;
  sort?: number;
  refCount?: number;
  newFlashcardCount?: number;
  dueFlashcardCount?: number;
  flashcardCount?: number;
  hidden?: boolean;
}

interface ListDocsByPathResponseData {
  box: string; // 请求的笔记本ID。
  path: string; // 请求的路径。
  files: Array<ListDocsByPathResponseDataFilesItem>; // 文档和子目录列表。
}

interface ListDocsByPathResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data?: ListDocsByPathResponseData;
}

interface MoveDocsParams {
  fromPaths: Array<string>; // 要移动的源文档路径数组。每个路径字符串应为 '笔记本ID/文档相对路径.sy' 或 '笔记本ID/文档相对路径' 的形式。后端会处理。例如：['box123/notes/docA.sy', 'box456/folder/docB']
  toNotebook: string; // 目标笔记本的ID。
  toPath: string; // 目标路径 (HPath 或实际路径均可，后端会尝试解析)。文档将被移动到此路径下。例如 '/Target Folder' 或 '/Target Folder/NewName.sy' (如果只移动一个文件且想重命名)。
  callback?: string;
}

interface MoveDocsResponseData {
  closeTimeout?: number;
}

interface MoveDocsResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: MoveDocsResponseData | null;
}

interface MoveDocsByIDParams {
  fromIDs: Array<string>; // 要移动的源文档ID数组。
  toID: string; // 目标文档或目录的ID。如果 toID 是一个文档，则 fromIDs 中的文档会成为其子文档（如果内核逻辑支持）；如果 toID 是一个目录（通常是一个文档的HPath的父级），则 fromIDs 中的文档会被移动到该目录下。具体行为需参考内核实现细节。后台实现中，会先通过 toID 获取其 toNotebook 和 toPath，然后调用 model.MoveDocs。
  callback?: string;
}

interface MoveDocsByIDResponseData {
  closeTimeout?: number;
}

interface MoveDocsByIDResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: MoveDocsByIDResponseData | null;
}

interface MoveLocalShorthandsParams {
  notebook: string; // 要处理闪念速记的笔记本ID。
  path?: string;
  parentID?: string;
}

interface MoveLocalShorthandsResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data?: null;
}

interface RefreshFiletreeResponse {
  Code: number; // 响应状态码，0 表示成功（操作已异步启动）
  Msg: string; // 响应消息
  Data?: null;
}

interface RemoveDocParams {
  notebook: string; // 文档所在的笔记本ID。
  path: string; // 要移除的文档的相对路径 (相对于笔记本根目录，例如 '/notes/docToRemove.sy')。
}

interface RemoveDocResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data?: null;
}

interface RemoveDocByIDParams {
  id: string; // 要移除的文档的ID。
}

interface RemoveDocByIDResponseData {
  closeTimeout?: number;
}

interface RemoveDocByIDResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: RemoveDocByIDResponseData | null;
}

interface RemoveDocsParams {
  paths: Array<string>; // 要移除的文档的复合路径数组。每个路径字符串应为 '笔记本ID/文档相对路径.sy' 或 '笔记本ID/文档相对路径' 的形式。例如：['box123/notes/docA.sy', 'box456/folder/docB']
}

interface RemoveDocsResponse {
  Code: number; // 响应状态码，0 表示成功（即使部分路径无效也可能返回0，具体需看Msg）
  Msg: string; // 响应消息。如果部分文档移除失败，Msg中可能会有提示。
  Data?: null;
}

interface RemoveIndexesParams {
  paths: Array<string>; // 需要移除索引的文档绝对路径列表。这些路径通常指向 data 目录下的 .sy 文件，例如 '/data/notebookId/path/to/doc.sy'。
}

interface RemoveIndexesResponse {
  Code: number; // 响应状态码，0 表示成功（操作已接受）
  Msg: string; // 响应消息
  Data?: null;
}

interface RenameDocParams {
  notebook: string; // 文档所在的笔记本ID。
  path: string; // 要重命名的文档的当前相对路径 (相对于笔记本根目录，例如 '/notes/oldName.sy')。
  title: string; // 文档的新标题 (不需要带 .sy 后缀)。
}

interface RenameDocResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data?: null;
}

interface RenameDocByIDParams {
  id: string; // 要重命名的文档的ID。
  title: string; // 文档的新标题 (不需要带 .sy 后缀)。
}

interface RenameDocByIDResponseData {
  closeTimeout?: number;
}

interface RenameDocByIDResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: RenameDocByIDResponseData | null;
}

interface SearchDocsParams {
  k: string; // 搜索关键词。
  flashcard?: boolean;
}

interface SearchDocsResponseDataItem {
  box: string; // 文档所属的笔记本ID。
  path: string; // 文档的实际存储路径。
  hPath: string; // 文档的人类可读路径。
  id: string; // 文档ID。
  name: string; // 文档名。
  nameRaw: string; // 文档名原文（可能包含高亮标签）。
  alias?: string;
  aliasRaw?: string;
  memo?: string;
}

interface SearchDocsResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data?: Array<SearchDocsResponseDataItem>;
}

interface UpsertIndexesParams {
  paths: Array<string>; // 需要更新/插入索引的文档绝对路径列表。这些路径通常指向 data 目录下的 .sy 文件，例如 '/data/notebookId/path/to/doc.sy'。
}

interface UpsertIndexesResponse {
  Code: number; // 响应状态码，0 表示成功（操作已接受）
  Msg: string; // 响应消息
  Data?: null;
}

interface AutoSpaceParams {
  id: string; // 要处理的块 ID。
}

interface AutoSpaceResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: null; // 操作成功时为 null
}

interface NetAssets2LocalAssetsParams {
  id: string; // 要处理的块 ID，该块内的网络资源将被转存。
}

interface NetAssets2LocalAssetsResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: null; // 操作成功时为 null
}

interface NetImg2LocalAssetsParams {
  id: string; // 要处理的块 ID。块内的网络图片将被转存。
  url?: string;
}

interface NetImg2LocalAssetsResponse {
  Code: number; // API 调用返回码，0 表示成功
  Msg: string; // API 调用返回消息
  Data: null; // 操作成功时为 null
}

interface GetGraphParamsConfType {
  tag: boolean; // 是否显示标签节点
  paragraph: boolean; // 是否显示段落块节点
  heading: boolean; // 是否显示标题块节点
  math: boolean; // 是否显示数学公式块节点
  code: boolean; // 是否显示代码块节点
  table: boolean; // 是否显示表格块节点
  list: boolean; // 是否显示列表块节点
  listItem: boolean; // 是否显示列表项块节点
  blockquote: boolean; // 是否显示引述块节点
  super: boolean; // 是否显示超级块节点
}

interface GetGraphParamsConfD3 {
  nodeSize: number; // 节点大小
  linkWidth: number; // 连线宽度
  lineOpacity: number; // 连线不透明度
  centerStrength: number; // 中心力强度
  collideRadius: number; // 碰撞半径
  collideStrength: number; // 碰撞力强度
  linkDistance: number; // 连线距离
  arrow: boolean; // 是否显示箭头
}

interface GetGraphParamsConf {
  minRefs: number; // 节点最少被引用次数（低于此值将被隐藏）
  dailyNote: boolean; // 是否包含日记节点
  type: GetGraphParamsConfType; // 节点类型筛选配置
  d3: GetGraphParamsConfD3; // D3力导向图配置
}

interface GetGraphParams {
  reqId: any; // 请求 ID，用于跟踪异步请求
  k: string; // 搜索关键词，用于筛选关系图中的节点
  conf: GetGraphParamsConf; // 全局关系图配置项
}

interface GetGraphResponseNodesItem {
  id: string; // 节点 ID (通常是块 ID 或标签名)
  box: string; // 节点所属的笔记本 ID
  path: string; // 节点对应的文档路径
  size: number; // 节点在图中的显示大小
  title?: string;
  label: string; // 节点标签 (显示在节点上的文字)
  type: string; // 节点类型 (块类型或 'tag')
  refs: number; // 节点的引用数量
  defs: number; // 节点的被引用数量 (定义数量)
}

interface GetGraphResponseLinksItemArrowsTo {
  enabled: boolean; // 箭头是否启用
}

interface GetGraphResponseLinksItemArrows {
  to?: GetGraphResponseLinksItemArrowsTo;
}

interface GetGraphResponseLinksItem {
  from: string; // 起始节点 ID
  to: string; // 目标节点 ID
  ref: boolean; // 是否为引用关系 (true: 引用关系, false: 父子层级关系)
  arrows?: GetGraphResponseLinksItemArrows;
}

interface GetGraphResponseConfType {
  tag: boolean; // 是否显示标签节点
  paragraph: boolean; // 是否显示段落块节点
  heading: boolean; // 是否显示标题块节点
  math: boolean; // 是否显示数学公式块节点
  code: boolean; // 是否显示代码块节点
  table: boolean; // 是否显示表格块节点
  list: boolean; // 是否显示列表块节点
  listItem: boolean; // 是否显示列表项块节点
  blockquote: boolean; // 是否显示引述块节点
  super: boolean; // 是否显示超级块节点
}

interface GetGraphResponseConfD3 {
  nodeSize: number; // 节点大小
  linkWidth: number; // 连线宽度
  lineOpacity: number; // 连线不透明度
  centerStrength: number; // 中心力强度
  collideRadius: number; // 碰撞半径
  collideStrength: number; // 碰撞力强度
  linkDistance: number; // 连线距离
  arrow: boolean; // 是否显示箭头
}

interface GetGraphResponseConf {
  minRefs: number; // 节点最少被引用次数（低于此值将被隐藏）
  dailyNote: boolean; // 是否包含日记节点
  type: GetGraphResponseConfType; // 节点类型筛选配置
  d3: GetGraphResponseConfD3; // D3力导向图配置
}

interface GetGraphResponse {
  nodes: Array<GetGraphResponseNodesItem>; // 关系图中的节点列表
  links: Array<GetGraphResponseLinksItem>; // 关系图中的边列表
  conf: GetGraphResponseConf; // 更新后的全局关系图配置项
  box: string; // 当前知识空间（笔记本组）ID
  reqId: any; // 请求 ID，与请求参数中的 reqId 一致
}

interface GetLocalGraphParamsConfType {
  tag: boolean; // 是否显示标签节点
  paragraph: boolean; // 是否显示段落块节点
  heading: boolean; // 是否显示标题块节点
  math: boolean; // 是否显示数学公式块节点
  code: boolean; // 是否显示代码块节点
  table: boolean; // 是否显示表格块节点
  list: boolean; // 是否显示列表块节点
  listItem: boolean; // 是否显示列表项块节点
  blockquote: boolean; // 是否显示引述块节点
  super: boolean; // 是否显示超级块节点
}

interface GetLocalGraphParamsConfD3 {
  nodeSize: number; // 节点大小
  linkWidth: number; // 连线宽度
  lineOpacity: number; // 连线不透明度
  centerStrength: number; // 中心力强度
  collideRadius: number; // 碰撞半径
  collideStrength: number; // 碰撞力强度
  linkDistance: number; // 连线距离
  arrow: boolean; // 是否显示箭头
}

interface GetLocalGraphParamsConf {
  dailyNote: boolean; // 是否包含日记节点
  type: GetLocalGraphParamsConfType; // 节点类型筛选配置
  d3: GetLocalGraphParamsConfD3; // D3力导向图配置
}

interface GetLocalGraphParams {
  reqId: any; // 请求 ID，用于跟踪异步请求
  id: string; // 文档 ID，用于构建局部关系图的中心节点
  k: string; // 搜索关键词，用于筛选关系图中的节点
  conf: GetLocalGraphParamsConf; // 局部关系图配置项
}

interface GetLocalGraphResponseNodesItem {
  id: string; // 节点 ID (通常是块 ID 或标签名)
  box: string; // 节点所属的笔记本 ID
  path: string; // 节点对应的文档路径
  size: number; // 节点在图中的显示大小
  title?: string;
  label: string; // 节点标签 (显示在节点上的文字)
  type: string; // 节点类型 (块类型或 'tag')
  refs: number; // 节点的引用数量
  defs: number; // 节点的被引用数量 (定义数量)
}

interface GetLocalGraphResponseLinksItemArrowsTo {
  enabled: boolean; // 箭头是否启用
}

interface GetLocalGraphResponseLinksItemArrows {
  to?: GetLocalGraphResponseLinksItemArrowsTo;
}

interface GetLocalGraphResponseLinksItem {
  from: string; // 起始节点 ID
  to: string; // 目标节点 ID
  ref: boolean; // 是否为引用关系 (true: 引用关系, false: 父子层级关系)
  arrows?: GetLocalGraphResponseLinksItemArrows;
}

interface GetLocalGraphResponseConfType {
  tag: boolean; // 是否显示标签节点
  paragraph: boolean; // 是否显示段落块节点
  heading: boolean; // 是否显示标题块节点
  math: boolean; // 是否显示数学公式块节点
  code: boolean; // 是否显示代码块节点
  table: boolean; // 是否显示表格块节点
  list: boolean; // 是否显示列表块节点
  listItem: boolean; // 是否显示列表项块节点
  blockquote: boolean; // 是否显示引述块节点
  super: boolean; // 是否显示超级块节点
}

interface GetLocalGraphResponseConfD3 {
  nodeSize: number; // 节点大小
  linkWidth: number; // 连线宽度
  lineOpacity: number; // 连线不透明度
  centerStrength: number; // 中心力强度
  collideRadius: number; // 碰撞半径
  collideStrength: number; // 碰撞力强度
  linkDistance: number; // 连线距离
  arrow: boolean; // 是否显示箭头
}

interface GetLocalGraphResponseConf {
  dailyNote: boolean; // 是否包含日记节点
  type: GetLocalGraphResponseConfType; // 节点类型筛选配置
  d3: GetLocalGraphResponseConfD3; // D3力导向图配置
}

interface GetLocalGraphResponse {
  id: string; // 请求的文档 ID
  box: string; // 当前知识空间（笔记本组）ID
  nodes: Array<GetLocalGraphResponseNodesItem>; // 关系图中的节点列表
  links: Array<GetLocalGraphResponseLinksItem>; // 关系图中的边列表
  conf: GetLocalGraphResponseConf; // 更新后的局部关系图配置项
  reqId: any; // 请求 ID，与请求参数中的 reqId 一致
}

interface ResetGraphResponseConfType {
  tag: boolean; // 是否显示标签节点
  paragraph: boolean; // 是否显示段落块节点
  heading: boolean; // 是否显示标题块节点
  math: boolean; // 是否显示数学公式块节点
  code: boolean; // 是否显示代码块节点
  table: boolean; // 是否显示表格块节点
  list: boolean; // 是否显示列表块节点
  listItem: boolean; // 是否显示列表项块节点
  blockquote: boolean; // 是否显示引述块节点
  super: boolean; // 是否显示超级块节点
}

interface ResetGraphResponseConfD3 {
  nodeSize: number; // 节点大小
  linkWidth: number; // 连线宽度
  lineOpacity: number; // 连线不透明度
  centerStrength: number; // 中心力强度
  collideRadius: number; // 碰撞半径
  collideStrength: number; // 碰撞力强度
  linkDistance: number; // 连线距离
  arrow: boolean; // 是否显示箭头
}

interface ResetGraphResponseConf {
  minRefs: number; // 节点最少被引用次数（低于此值将被隐藏）
  dailyNote: boolean; // 是否包含日记节点
  type: ResetGraphResponseConfType; // 节点类型筛选配置
  d3: ResetGraphResponseConfD3; // D3力导向图配置
}

interface ResetGraphResponse {
  conf: ResetGraphResponseConf; // 重置后的全局关系图配置项
}

interface ResetLocalGraphResponseConfType {
  tag: boolean; // 是否显示标签节点
  paragraph: boolean; // 是否显示段落块节点
  heading: boolean; // 是否显示标题块节点
  math: boolean; // 是否显示数学公式块节点
  code: boolean; // 是否显示代码块节点
  table: boolean; // 是否显示表格块节点
  list: boolean; // 是否显示列表块节点
  listItem: boolean; // 是否显示列表项块节点
  blockquote: boolean; // 是否显示引述块节点
  super: boolean; // 是否显示超级块节点
}

interface ResetLocalGraphResponseConfD3 {
  nodeSize: number; // 节点大小
  linkWidth: number; // 连线宽度
  lineOpacity: number; // 连线不透明度
  centerStrength: number; // 中心力强度
  collideRadius: number; // 碰撞半径
  collideStrength: number; // 碰撞力强度
  linkDistance: number; // 连线距离
  arrow: boolean; // 是否显示箭头
}

interface ResetLocalGraphResponseConf {
  dailyNote: boolean; // 是否包含日记节点
  type: ResetLocalGraphResponseConfType; // 节点类型筛选配置
  d3: ResetLocalGraphResponseConfD3; // D3力导向图配置
}

interface ResetLocalGraphResponse {
  conf: ResetLocalGraphResponseConf; // 重置后的局部关系图配置项
}

interface ClearWorkspaceHistoryResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: null; // 成功时固定为 null
}

interface GetDocHistoryContentParams {
  historyPath: string; // 文档历史版本的路径，通常从其他历史记录接口获取
  k?: string;
  highlight?: boolean;
}

interface GetDocHistoryContentResponseData {
  id: string; // 文档的 ID
  rootID: string; // 文档的根块 ID
  content: string; // 文档历史版本的内容 (HTML 格式)
  isLargeDoc: boolean; // 是否为大文档
}

interface GetDocHistoryContentResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: GetDocHistoryContentResponseData | null;
}

interface GetHistoryItemsParams {
  created: string; // 创建日期，格式如 'YYYYMMDD'
  notebook?: string;
  type?: number;
  query: string; // 搜索关键词
  op?: string;
}

interface GetHistoryItemsResponseDataItemsItem {
  id: string; // 历史记录条目的唯一ID (通常为历史文件名或路径相关ID)
  title: string; // 历史记录条目的标题或名称
  content: string; // 历史记录条目的简要内容或描述
  notebookID: string; // 所属笔记本ID
  notebookName: string; // 所属笔记本名称
  path: string; // 相关文档或资源的路径
  type: number; // 历史记录类型
  created: string; // 创建时间 (Unix时间戳字符串或特定格式日期)
  updated: string; // 更新时间 (Unix时间戳字符串或特定格式日期)
  size: number; // 大小 (字节)
  hSize: string; // 人类可读的大小
  count: number; // 相关计数 (例如，如果是笔记本历史，可能表示包含的文档数)
  repoID?: string;
  historyName?: string;
  historyPath?: string;
  docID?: string;
}

interface GetHistoryItemsResponseData {
  items: Array<GetHistoryItemsResponseDataItemsItem>; // 符合条件的历史条目数组
}

interface GetHistoryItemsResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: GetHistoryItemsResponseData | null;
}

interface GetNotebookHistoryResponseDataHistoriesItem {
  id: string; // 历史记录的唯一ID (通常为历史文件名或路径相关ID)
  title: string; // 历史记录的标题 (通常是笔记本名称)
  type: number; // 历史类型 (应为2，代表笔记本历史)
  created: string; // 历史创建的时间戳 (格式：YYYYMMDDHHmmss)
  updated: string; // 历史更新的时间戳 (格式：YYYYMMDDHHmmss)
  count: number; // 该历史版本包含的文档数量
  size: number; // 历史版本占用的磁盘空间大小 (字节)
  hSize: string; // 人类可读的磁盘空间大小
  repoID: string; // 所属版本库ID (通常是笔记本ID)
  historyName: string; // 历史文件名 (例如 '20230315103000.json')
  historyPath: string; // 历史文件的完整存储路径
}

interface GetNotebookHistoryResponseData {
  histories: Array<GetNotebookHistoryResponseDataHistoriesItem>; // 笔记本历史记录数组
}

interface GetNotebookHistoryResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: GetNotebookHistoryResponseData | null;
}

interface ReindexHistoryResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: null; // 成功时固定为 null
}

interface RollbackAssetsHistoryParams {
  historyPath: string; // 资源文件历史版本的路径，通常从其他历史记录接口获取
}

interface RollbackAssetsHistoryResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: null; // 成功时固定为 null
}

interface RollbackDocHistoryParams {
  notebook: string; // 文档所属的笔记本 ID
  historyPath: string; // 文档历史版本的路径，通常从其他历史记录接口获取
}

interface RollbackDocHistoryResponseData {
  box: string; // 文档所属的笔记本 ID
}

interface RollbackDocHistoryResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: RollbackDocHistoryResponseData | null;
}

interface RollbackNotebookHistoryParams {
  historyPath: string; // 笔记本历史版本的路径，通常从 getNotebookHistory 接口获取
}

interface RollbackNotebookHistoryResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: null; // 成功时固定为 null
}

interface SearchHistoryParams {
  notebook?: string;
  type?: number;
  query: string; // 搜索关键词
  page?: number;
  op?: string;
}

interface SearchHistoryResponseDataHistoriesItemItemsItem {
  id: string; // 历史记录条目的唯一ID
  title: string; // 历史记录条目的标题或名称
  content: string; // 历史记录条目的简要内容或描述
  notebookID: string; // 所属笔记本ID
  notebookName: string; // 所属笔记本名称
  path: string; // 相关文档或资源的路径
  type: number; // 历史记录类型
  created: string; // 创建时间 (Unix时间戳字符串或特定格式日期)
  updated: string; // 更新时间 (Unix时间戳字符串或特定格式日期)
  size: number; // 大小 (字节)
  hSize: string; // 人类可读的大小
  count: number; // 相关计数
  repoID?: string;
  historyName?: string;
  historyPath?: string;
  docID?: string;
}

interface SearchHistoryResponseDataHistoriesItem {
  created: string; // 历史记录分组的创建日期 (格式：YYYYMMDD)
  count: number; // 该日期分组下的历史条目数量
  items?: Array<SearchHistoryResponseDataHistoriesItemItemsItem>;
}

interface SearchHistoryResponseData {
  histories: Array<SearchHistoryResponseDataHistoriesItem>; // 按日期分组的历史记录数组
  pageCount: number; // 总页数
  totalCount: number; // 符合条件的总历史记录条目数 (注意，这里可能指分组数量，不是单个item数量)
}

interface SearchHistoryResponse {
  Code: number; // 响应状态码，0 表示成功
  Msg: string; // 响应消息
  Data: SearchHistoryResponseData | null;
}

interface GetDynamicIconParams {
  type?: string;
  color?: string;
  date?: string;
  lang?: string;
  weekdayType?: string;
  content?: string;
  id?: string;
}

interface ImportDataResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data?: null;
}

interface ImportSYResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data?: null;
}

interface ImportStdMdParams {
  notebook: string; // 目标笔记本的 ID
  localPath: string; // 本地 Markdown 文件或文件夹的绝对路径
  toPath: string; // 导入到笔记本内的目标父路径，例如 '/' 表示笔记本根目录
}

interface ImportStdMdResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data?: null;
}

interface GetShorthandParams {
  id: string; // 要获取的速记的唯一标识符 (通常为时间戳字符串)
}

interface GetShorthandResponseData {
  id?: string;
  shorthandContent: string; // 速记内容 (经过 Lute 引擎处理后的 HTML 格式)
  shorthandMd: string; // 速记内容的原始 Markdown 格式
  hCreated: string; // 格式化后的创建时间 (YYYY-MM-DD HH:mm)
  [key: string]: any; // From .catchall()
}

interface GetShorthandResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: GetShorthandResponseData; // 包含速记详细信息的对象
}

interface GetShorthandsParams {
  page: number; // 要获取的速记列表的页码，从 1 开始
}

interface GetShorthandsResponseDataShorthandsItem {
  oId: string; // 速记的原始唯一标识符 (通常为时间戳字符串)
  shorthandContent: string; // 速记内容 (经过 Lute 引擎处理后的 HTML 格式)
  shorthandMd: string; // 速记内容的原始 Markdown 格式
  shorthandDesc: string; // 速记的描述 (经过处理，例如音视频标签被替换为文字)
  hCreated: string; // 格式化后的创建时间 (YYYY-MM-DD HH:mm)
  [key: string]: any; // From .catchall()
}

interface GetShorthandsResponseData {
  shorthands: Array<GetShorthandsResponseDataShorthandsItem>; // 速记对象列表
  [key: string]: any; // From .catchall()
}

interface GetShorthandsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: GetShorthandsResponseData; // 包含速记列表及可能的分页信息的对象
}

interface RemoveShorthandsParams {
  ids: Array<string>; // 要移除的速记的唯一标识符数组
}

interface RemoveShorthandsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data?: null;
}

interface CopyStdMarkdownParams {
  id: string; // 要导出内容的块的ID
}

interface CopyStdMarkdownResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: string; // 导出的标准 Markdown 内容
}

interface Html2BlockDOMParams {
  dom: string; // 要转换的 HTML 字符串
}

interface Html2BlockDOMResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: string; // 转换后的块级 DOM (HTML 格式的字符串)
}

interface SpinBlockDOMParams {
  dom: string; // 要处理的块级 DOM 字符串 (HTML 格式)
}

interface SpinBlockDOMResponseData {
  dom: string; // 经过 SpinBlockDOM 处理后的块级 DOM 字符串 (HTML 格式)
}

interface SpinBlockDOMResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: SpinBlockDOMResponseData;
}

interface BroadcastSubscribeParams {
  channel: string; // 要订阅的一个或多个广播频道名称，多个频道用逗号分隔。此参数通过 URL Query String 传递。
  retry?: number;
}

interface BroadcastParams {
  channel: string; // 要连接的广播频道名称。此参数通过 URL Query String 传递。
}

interface ForwardProxyParams {
  url: string; // 必需。要请求的目标 URL，必须是合法的 HTTP 或 HTTPS 地址。
  method?: string;
  timeout?: number;
  headers?: Array<Record<string, any>>;
  contentType?: string;
  payload?: any;
  payloadEncoding?: 'json' | 'text' | 'base64' | 'base64-std' | 'base64-url' | 'base32' | 'base32-std' | 'base32-hex' | 'hex';
}

interface ForwardProxyResponseDataCookiesItem {
  Name: string;
  Value: string;
  Path?: string;
  Domain?: string;
  Expires?: string;
  RawExpires?: string;
  MaxAge?: number;
  Secure?: boolean;
  HttpOnly?: boolean;
  SameSite?: 0 | 1 | 2 | 3 | 4;
  Raw?: string;
  Unparsed?: Array<string>;
}

interface ForwardProxyResponseData {
  status: string; // 目标服务器返回的 HTTP 状态文本，例如 '200 OK'。
  statusCode: number; // 目标服务器返回的 HTTP 状态码，例如 200。
  proto: string; // 目标服务器响应的 HTTP 协议版本，例如 'HTTP/1.1'。
  headers: Record<string, Array<string>>; // 目标服务器返回的 HTTP 响应头，键为头域名，值为字符串数组织。例如 {'Content-Type': ['application/json']}
  cookies?: Array<ForwardProxyResponseDataCookiesItem>;
  body: string; // 目标服务器返回的响应体内容，经过 Base64 编码。
  url: string; // 实际请求的最终 URL (可能经过重定向)。
  length: number; // 目标服务器返回的响应体原始长度 (解码前)。
  isText: boolean; // 指示目标服务器返回的响应体是否为文本类型。
}

interface ForwardProxyResponse {
  Code: number; // 返回码。0 表示代理请求成功（无论目标服务器返回何种状态码），非 0 表示代理请求本身失败。
  Msg: string; // 错误信息。代理请求成功时为空字符串。
  Data: ForwardProxyResponseData | null;
}

interface ChangeSortNotebookParams {
  notebooks: Array<string>; // 按新的期望顺序排列的笔记本 ID 数组。
}

interface ChangeSortNotebookResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data?: null;
}

interface CloseNotebookParams {
  notebook: string; // 要关闭的笔记本的唯一标识符 (ID)。
  callback?: string;
}

interface CloseNotebookResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data?: null;
}

interface CreateNotebookParams {
  name: string; // 新笔记本的名称，不能为空。
}

interface CreateNotebookResponseDataNotebook {
  id: string; // 新创建的笔记本ID
  name: string; // 新创建的笔记本名称
  icon: string; // 笔记本图标
  sort: number; // 笔记本排序值
  closed: boolean; // 笔记本是否关闭 (刚创建时应为 false)
  sortMode: number; // 文档排序模式
}

interface CreateNotebookResponseData {
  notebook: CreateNotebookResponseDataNotebook; // 新创建的笔记本对象信息。
}

interface CreateNotebookResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: CreateNotebookResponseData; // 包含新创建笔记本信息的对象。
}

interface GetNotebookConfParams {
  notebook: string; // 要获取配置的笔记本的唯一标识符 (ID)。
}

interface GetNotebookConfResponseDataConfBoxStat {
  docCount: number; // 文档数量
  assetCount: number; // 资源文件数量
  assetSize: number; // 资源文件总大小 (字节)
  refCount: number; // 引用数量
  headingCount: number; // 标题数量
  listCount: number; // 列表数量
  listItemCount: number; // 列表项数量
  codeBlockCount: number; // 代码块数量
  htmlBlockCount: number; // HTML块数量
  mathBlockCount: number; // 数学公式块数量
  tableCount: number; // 表格数量
  quoteCount: number; // 引述块数量
  superBlockCount: number; // 超级块数量
  paragraphCount: number; // 段落数量
  fileAnnotationCount: number; // 文件标注数量
  updated: number; // 最后更新时间 (Unix时间戳，秒)
}

interface GetNotebookConfResponseDataConf {
  name: string; // 笔记本名称
  sort: number; // 笔记本的排序值
  icon: string; // 笔记本图标 (Emoji 或 Base64)
  closed: boolean; // 笔记本是否关闭
  sortMode: number; // 文档排序模式: 0(自定义拖拽), 1(修改时间升序), 2(修改时间降序), 3(创建时间升序), 4(创建时间降序), 5(字母升序), 6(字母降序), 7(HPath升序), 8(HPath降序), 11(文档包含块升序), 12(文档包含块降序), 13(子文档数升序), 14(子文档数降序)
  refCreateSavePath: string; // 块引目标文档默认保存路径 (HPath)
  docCreateSavePath: string; // 新文档默认保存路径 (HPath)
  dailyNoteSavePath: string; // 日记默认保存路径 (HPath)
  dailyNoteTemplatePath: string; // 日记模板路径 (HPath)
  boxStat?: GetNotebookConfResponseDataConfBoxStat;
}

interface GetNotebookConfResponseData {
  conf: GetNotebookConfResponseDataConf; // 笔记本的配置对象。
}

interface GetNotebookConfResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: GetNotebookConfResponseData; // 包含笔记本配置的对象。
}

interface GetNotebookInfoParams {
  notebook: string; // 要获取信息的笔记本的唯一标识符 (ID)。
}

interface GetNotebookInfoResponseDataBoxInfoBoxStat {
  docCount: number; // 文档数量
  assetCount: number; // 资源文件数量
  assetSize: number; // 资源文件总大小 (字节)
  refCount: number; // 引用数量
  headingCount: number; // 标题数量
  listCount: number; // 列表数量
  listItemCount: number; // 列表项数量
  codeBlockCount: number; // 代码块数量
  htmlBlockCount: number; // HTML块数量
  mathBlockCount: number; // 数学公式块数量
  tableCount: number; // 表格数量
  quoteCount: number; // 引述块数量
  superBlockCount: number; // 超级块数量
  paragraphCount: number; // 段落数量
  fileAnnotationCount: number; // 文件标注数量
  updated: number; // 最后更新时间 (Unix时间戳，秒)
}

interface GetNotebookInfoResponseDataBoxInfo {
  id: string; // 笔记本ID
  name: string; // 笔记本名称
  icon: string; // 笔记本图标
  sort: number; // 笔记本排序值
  closed: boolean; // 笔记本是否关闭
  sortMode: number; // 文档排序模式
  refCreateSavePath: string; // 块引默认保存路径
  docCreateSavePath: string; // 新文档默认保存路径
  dailyNoteSavePath: string; // 日记默认保存路径
  dailyNoteTemplatePath: string; // 日记模板路径
  boxStat: GetNotebookInfoResponseDataBoxInfoBoxStat; // 笔记本统计信息。
}

interface GetNotebookInfoResponseData {
  boxInfo: GetNotebookInfoResponseDataBoxInfo; // 笔记本的详细信息对象。
}

interface GetNotebookInfoResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: GetNotebookInfoResponseData; // 包含笔记本详细信息的对象。
}

interface LsNotebooksResponseDataNotebooksItem {
  id: string; // 笔记本的唯一标识符 (ID)
  name: string; // 笔记本的名称
  icon: string; // 笔记本图标的 Base64 编码或 Emoji 字符
  sort: number; // 笔记本的排序值
  closed: boolean; // 笔记本是否已关闭
  sortMode?: number;
}

interface LsNotebooksResponseData {
  notebooks: Array<LsNotebooksResponseDataNotebooksItem>; // 笔记本对象数组。
}

interface LsNotebooksResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: LsNotebooksResponseData; // 包含笔记本列表的对象。
}

interface OpenNotebookParams {
  notebook: string; // 要打开的笔记本的唯一标识符 (ID)。
}

interface OpenNotebookResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: Record<string, never> | null;
}

interface RemoveNotebookParams {
  notebook: string; // 要删除的笔记本的唯一标识符 (ID)。
  callback?: string;
}

interface RemoveNotebookResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data?: null;
}

interface RenameNotebookParams {
  notebook: string; // 要重命名的笔记本的唯一标识符 (ID)。
  name: string; // 笔记本的新名称，不能为空。
}

interface RenameNotebookResponseData {
  closeTimeout?: number;
  [key: string]: any; // From .catchall()
}

interface RenameNotebookResponse {
  Code: number; // 返回码，0 表示成功, -1 表示失败 (例如名称冲突)。
  Msg: string; // 错误信息，成功时为空字符串。
  Data: RenameNotebookResponseData | null;
}

interface SetNotebookConfParamsConf {
  name?: string;
  icon?: string;
  sortMode?: number;
  refCreateSavePath?: string;
  docCreateSavePath?: string;
  dailyNoteSavePath?: string;
  dailyNoteTemplatePath?: string;
}

interface SetNotebookConfParams {
  notebook: string; // 要设置配置的笔记本的唯一标识符 (ID)。
  conf: SetNotebookConfParamsConf; // 要更新的配置项对象。只提供需要修改的字段。
}

interface SetNotebookConfResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data?: null;
}

interface SetNotebookIconParams {
  notebook: string; // 要设置图标的笔记本的唯一标识符 (ID)。
  icon: string; // 笔记本的新图标，可以是 Emoji 字符或图片的 Base64 编码字符串。
}

interface SetNotebookIconResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data?: null;
}

interface PushErrMsgParams {
  msg: string; // 必需。要推送的错误消息内容。
  timeout?: number;
}

interface PushErrMsgResponseData {
  id: string; // 推送的消息的唯一标识符。
}

interface PushErrMsgResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: PushErrMsgResponseData; // 包含消息ID的对象。
}

interface PushMsgParams {
  msg: string; // 必需。要推送的普通消息内容。
  timeout?: number;
}

interface PushMsgResponseData {
  id: string; // 推送的消息的唯一标识符。
}

interface PushMsgResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串。如果 msg 为空，则 Code 为 -1，Msg 为 'msg can't be empty'。
  Data: PushMsgResponseData | null;
}

interface GetDocOutlineParams {
  id: string; // 必需。要获取大纲的文档块的 ID。通常是文档的根块 ID。
  preview?: boolean;
}

// Recursive type GetDocOutlineResponseDataItem (processing)

interface GetDocOutlineResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: Array<GetDocOutlineResponseDataItem> | null;
}

interface LoadPetalsParams {
  frontend: string; // 必需。指定要加载插件的前端界面，例如 'desktop', 'mobile', 'browser-extension'。
}

interface LoadPetalsResponseDataItem {
  name: string; // 插件的包名 (唯一标识符)
  displayName: string; // 插件的显示名称 (来自 plugin.json)
  enabled: boolean; // 插件是否已在配置中启用
  incompatible: boolean; // 插件是否与当前前端版本不兼容
  js?: string;
  css?: string;
  i18n?: Record<string, any>;
}

interface LoadPetalsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: Array<LoadPetalsResponseDataItem> | null;
}

interface SetPetalEnabledParams {
  packageName: string; // 必需。要设置启用状态的插件的包名 (唯一标识符)。
  enabled: boolean; // 必需。设置插件的启用状态，true 表示启用，false 表示禁用。
  frontend: string; // 必需。指定要设置插件状态的前端界面，例如 'desktop', 'mobile'。
}

interface SetPetalEnabledResponseData {
  name: string; // 插件的包名
  displayName: string; // 插件的显示名称
  enabled: boolean; // 插件更新后的启用状态
  incompatible: boolean; // 插件是否不兼容
}

interface SetPetalEnabledResponse {
  Code: number; // 返回码，0 表示成功，-1 表示插件不兼容或其他错误
  Msg: string; // 错误信息，成功时为空字符串，失败时包含具体错误，如不兼容提示。
  Data: SetPetalEnabledResponseData | null;
}

interface SQLParams {
  stmt: string; // 必需。要执行的 SQL 查询语句。
}

interface SQLResponse {
  Code: number; // 返回码，0 表示成功，其他值表示失败。
  Msg: string; // 错误信息，成功时通常为空字符串。
  Data: Array<Record<string, any>> | null;
}

interface GetBacklinkParams {
  id: string; // 必需。要查询反向链接和提及的目标块的 ID。
  k: string; // 用于筛选反向链接结果的关键词。
  mk: string; // 用于筛选反向提及结果的关键词。
  beforeLen?: number;
  containChildren?: boolean;
}

interface GetBacklinkResponseData {
  backlinks: Array<any>; // 反向链接块的详细信息数组，具体结构复杂，参考 model.Backlink。
  linkRefsCount: number; // 反向链接的总数量。
  backmentions: Array<any>; // 反向提及块的详细信息数组，具体结构复杂，参考 model.Backmention。
  mentionsCount: number; // 反向提及的总数量。
  k: string; // 实际用于筛选反向链接的关键词。
  mk: string; // 实际用于筛选反向提及的关键词。
  box: string; // 目标块所在的笔记本 ID。
}

interface GetBacklinkResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: GetBacklinkResponseData | null;
}

interface GetBacklink2Params {
  id: string; // 必需。要查询反向链接和提及的目标块的 ID。
  k: string; // 用于筛选反向链接结果的关键词。
  mk: string; // 用于筛选反向提及结果的关键词。
  sort?: string;
  mSort?: string;
  containChildren?: boolean;
}

interface GetBacklink2ResponseData {
  backlinks: Array<any>; // 反向链接块的详细信息数组，具体结构复杂，参考 model.Backlink。
  linkRefsCount: number; // 反向链接的总数量。
  backmentions: Array<any>; // 反向提及块的详细信息数组，具体结构复杂，参考 model.Backmention。
  mentionsCount: number; // 反向提及的总数量。
  k: string; // 实际用于筛选反向链接的关键词。
  mk: string; // 实际用于筛选反向提及的关键词。
  box: string; // 目标块所在的笔记本 ID。
}

interface GetBacklink2Response {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: GetBacklink2ResponseData | null;
}

interface GetBacklinkDocParams {
  defID: string; // 必需。定义块的 ID (即被其他块引用的块)。
  refTreeID: string; // 必需。引用块所在文档树的根块 ID (通常是当前打开的文档的根块 ID)。
  keyword: string; // 用于筛选结果的关键词。
  containChildren?: boolean;
  highlight?: boolean;
}

interface GetBacklinkDocResponseData {
  backlinks: Array<any>; // 反向链接块的详细信息数组，具体结构复杂，参考 model.Backlink。
  keywords: Array<string>; // 实际用于高亮的关键词列表。
}

interface GetBacklinkDocResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: GetBacklinkDocResponseData | null;
}

interface GetBackmentionDocParams {
  defID: string; // 必需。定义块的 ID (即被其他块提及的块)。
  refTreeID: string; // 必需。提及块所在文档树的根块 ID (通常是当前打开的文档的根块 ID)。
  keyword: string; // 用于筛选结果的关键词。
  containChildren?: boolean;
  highlight?: boolean;
}

interface GetBackmentionDocResponseData {
  backmentions: Array<any>; // 反向提及块的详细信息数组，具体结构复杂，参考 model.Backmention。
  keywords: Array<string>; // 实际用于高亮的关键词列表。
}

interface GetBackmentionDocResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: GetBackmentionDocResponseData | null;
}

interface RefreshBacklinkParams {
  id: string; // 必需。要刷新反向链接和提及信息的目标块的 ID。
}

interface RefreshBacklinkResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: null; // 成功时 Data 固定为 null。
}

interface CheckoutRepoParams {
  id: string; // 必需。要检出的快照的唯一标识符 (ID)。
}

interface CheckoutRepoResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: null; // 成功时 Data 固定为 null。
}

interface CreateSnapshotParams {
  memo?: string;
  tag?: string;
}

interface CreateSnapshotResponseData {
  id: string; // 新创建的快照的唯一标识符 (ID)。
}

interface CreateSnapshotResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: CreateSnapshotResponseData; // 包含新快照ID的对象。
}

interface DiffRepoSnapshotsParams {
  left: string; // 必需。左侧快照的 ID，作为比较基准的旧版本。
  right: string; // 必需。右侧快照的 ID，作为比较目标的新版本。
}

interface DiffRepoSnapshotsResponseDataAddsLeftItem {
  id: string; // 文档ID
  hPath: string; // 文档HPath
}

interface DiffRepoSnapshotsResponseDataUpdatesLeftItem {
  id: string; // 文档ID
  hPath: string; // 文档HPath
}

interface DiffRepoSnapshotsResponseDataUpdatesRightItem {
  id: string; // 文档ID
  hPath: string; // 文档HPath
}

interface DiffRepoSnapshotsResponseDataRemovesRightItem {
  id: string; // 文档ID
  hPath: string; // 文档HPath
}

interface DiffRepoSnapshotsResponseDataLeft {
  id: string; // 快照ID
  created: string; // 创建时间戳 (Unix 毫秒)
  memo: string; // 备注
}

interface DiffRepoSnapshotsResponseDataRight {
  id: string; // 快照ID
  created: string; // 创建时间戳 (Unix 毫秒)
  memo: string; // 备注
}

interface DiffRepoSnapshotsResponseData {
  addsLeft: Array<DiffRepoSnapshotsResponseDataAddsLeftItem>; // 右侧快照相对于左侧快照新增的文档列表。
  updatesLeft: Array<DiffRepoSnapshotsResponseDataUpdatesLeftItem>; // 在左侧快照中存在，并在右侧快照中被修改的文档列表。
  updatesRight: Array<DiffRepoSnapshotsResponseDataUpdatesRightItem>; // 在右侧快照中存在，并在左侧快照中被修改的文档列表 (通常为空或与updatesLeft对称，具体含义需结合上下文)。
  removesRight: Array<DiffRepoSnapshotsResponseDataRemovesRightItem>; // 左侧快照中存在，但在右侧快照中被删除的文档列表。
  left: DiffRepoSnapshotsResponseDataLeft; // 左侧快照的元信息。
  right: DiffRepoSnapshotsResponseDataRight; // 右侧快照的元信息。
}

interface DiffRepoSnapshotsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: DiffRepoSnapshotsResponseData; // 包含两个快照差异详情的对象。
}

interface DownloadCloudSnapshotParams {
  id: string; // 必需。要下载的云端快照的 ID。
  tag?: string;
}

interface DownloadCloudSnapshotResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: null; // 成功时 Data 固定为 null。
}

interface GetCloudRepoSnapshotsParams {
  page: number; // 必需。页码，从 1 开始。
}

interface GetCloudRepoSnapshotsResponseDataSnapshotsItem {
  id: string; // 快照的唯一标识符 (ID)
  created: string; // 快照创建时间 (Unix 时间戳字符串，秒级)
  hCreated: string; // 快照创建时间 (格式化字符串)
  size: number; // 快照大小 (字节)
  hSize: string; // 快照大小 (格式化字符串)
  memo: string; // 快照备注信息
}

interface GetCloudRepoSnapshotsResponseData {
  snapshots: Array<GetCloudRepoSnapshotsResponseDataSnapshotsItem>; // 云端快照对象数组。
  pageCount: number; // 总页数。
  totalCount: number; // 快照总数量。
}

interface GetCloudRepoSnapshotsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: GetCloudRepoSnapshotsResponseData; // 包含云端快照列表、总页数和总数量的对象。
}

interface GetCloudRepoTagSnapshotsParams {
  page: number; // 必需。页码，从 1 开始。
}

interface GetCloudRepoTagSnapshotsResponseDataSnapshotsItem {
  id: string; // 快照的唯一标识符 (ID)
  tag: string; // 快照标签名。
  created: string; // 快照创建时间 (Unix 时间戳字符串，秒级)
  hCreated: string; // 快照创建时间 (格式化字符串)
  size: number; // 快照大小 (字节)
  hSize: string; // 快照大小 (格式化字符串)
  memo: string; // 快照备注信息
}

interface GetCloudRepoTagSnapshotsResponseData {
  snapshots: Array<GetCloudRepoTagSnapshotsResponseDataSnapshotsItem>; // 云端标签快照对象数组。
  pageCount: number; // 总页数。
  totalCount: number; // 标签快照总数量。
}

interface GetCloudRepoTagSnapshotsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: GetCloudRepoTagSnapshotsResponseData; // 包含云端标签快照列表、总页数和总数量的对象。
}

interface GetRepoFileParams {
  id: string; // 必需。快照的 ID。
  path?: string;
}

interface GetRepoSnapshotsParams {
  page: number; // 必需。页码，从 1 开始。
}

interface GetRepoSnapshotsResponseDataSnapshotsItem {
  id: string; // 快照的唯一标识符 (ID)
  created: string; // 快照创建时间 (Unix 时间戳字符串，秒级)
  hCreated: string; // 快照创建时间 (格式化字符串)
  size: number; // 快照大小 (字节)
  hSize: string; // 快照大小 (格式化字符串)
  memo: string; // 快照备注信息
}

interface GetRepoSnapshotsResponseData {
  snapshots: Array<GetRepoSnapshotsResponseDataSnapshotsItem>; // 本地快照对象数组。
  pageCount: number; // 总页数。
  totalCount: number; // 快照总数量。
}

interface GetRepoSnapshotsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: GetRepoSnapshotsResponseData; // 包含本地快照列表、总页数和总数量的对象。
}

interface GetRepoTagSnapshotsParams {
  page: number; // 必需。页码，从 1 开始。
}

interface GetRepoTagSnapshotsResponseDataSnapshotsItem {
  id: string; // 快照的唯一标识符 (ID)
  tag: string; // 快照标签名。
  created: string; // 快照创建时间 (Unix 时间戳字符串，秒级)
  hCreated: string; // 快照创建时间 (格式化字符串)
  size: number; // 快照大小 (字节)
  hSize: string; // 快照大小 (格式化字符串)
  memo: string; // 快照备注信息
}

interface GetRepoTagSnapshotsResponseData {
  snapshots: Array<GetRepoTagSnapshotsResponseDataSnapshotsItem>; // 本地标签快照对象数组。
  pageCount: number; // 总页数。
  totalCount: number; // 标签快照总数量。
}

interface GetRepoTagSnapshotsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: GetRepoTagSnapshotsResponseData; // 包含本地标签快照列表、总页数和总数量的对象。
}

interface ImportRepoKeyResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: null; // 成功时 Data 固定为 null。
}

interface InitRepoKeyResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: null; // 成功时 Data 固定为 null。
}

interface InitRepoKeyFromPassphraseParams {
  passphrase: string; // 必需。用于生成密钥的用户口令。
}

interface InitRepoKeyFromPassphraseResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: null; // 成功时 Data 固定为 null。
}

interface OpenRepoSnapshotDocParams {
  id: string; // 必需。快照中文档的唯一标识符 (通常是 `快照ID/文档ID.sy`)。
}

interface OpenRepoSnapshotDocResponseData {
  title: string; // 文档的标题。
  content: string; // 文档的内容 (HTML格式)。
  displayInText: boolean; // 是否应在纯文本模式下显示 (通常为 false)。
  updated: string; // 文档的最后更新时间 (Unix 时间戳字符串，秒级)。
}

interface OpenRepoSnapshotDocResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: OpenRepoSnapshotDocResponseData | null;
}

interface PurgeCloudRepoResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: null; // 成功时 Data 固定为 null。
}

interface PurgeRepoResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: null; // 成功时 Data 固定为 null。
}

interface RemoveCloudRepoTagSnapshotParams {
  id: string; // 必需。要移除的云端标签快照的 ID。
  tag: string; // 必需。要移除的云端标签快照的标签名。
}

interface RemoveCloudRepoTagSnapshotResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: null; // 成功时 Data 固定为 null。
}

interface RemoveRepoTagSnapshotParams {
  id: string; // 必需。要移除的本地标签快照的 ID。
  tag: string; // 必需。要移除的本地标签快照的标签名。
}

interface RemoveRepoTagSnapshotResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: null; // 成功时 Data 固定为 null。
}

interface ResetRepoResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: null; // 成功时 Data 固定为 null。
}

interface SetRepoIndexRetentionDaysParams {
  days: number; // 必需。快照索引保留的天数，必须为正整数。
}

interface SetRepoIndexRetentionDaysResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: null; // 成功时 Data 固定为 null。
}

interface SetRetentionIndexesDailyParams {
  indexes: number; // 必需。每日快照的保留数量，必须为正整数。
}

interface SetRetentionIndexesDailyResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: null; // 成功时 Data 固定为 null。
}

interface TagSnapshotParams {
  id: string; // 必需。要标记的快照的 ID。
  tag: string; // 必需。要打上的标签名。
  memo?: string;
}

interface TagSnapshotResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: null; // 成功时 Data 固定为 null。
}

interface UploadCloudSnapshotParams {
  id: string; // 必需。要上传的本地快照的 ID。
  tag?: string;
}

interface UploadCloudSnapshotResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: null; // 成功时 Data 固定为 null。
}

interface AddRiffCardsParams {
  deckID: string; // 必需。目标闪卡包的 ID。
  blockIDs: Array<string>; // 必需。要添加为闪卡的块 ID 数组。
}

interface AddRiffCardsResponseData {
  id: string; // 闪卡包 ID
  name: string; // 闪卡包名称
  size: number; // 闪卡包中的卡片数量
  created: string; // 闪卡包创建时间，格式 YYYY-MM-DD HH:mm:ss
  updated: string; // 闪卡包更新时间，格式 YYYY-MM-DD HH:mm:ss
}

interface AddRiffCardsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: AddRiffCardsResponseData | null;
}

interface BatchSetRiffCardsDueTimeParamsCardDuesItem {
  id: string; // 必需。闪卡块 ID。
  due: string; // 必需。新的到期时间，ISO 8601 格式的日期时间字符串。
}

interface BatchSetRiffCardsDueTimeParams {
  cardDues: Array<BatchSetRiffCardsDueTimeParamsCardDuesItem>; // 必需。包含闪卡 ID 和对应新到期时间的数组。
}

interface BatchSetRiffCardsDueTimeResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: null; // 成功时 Data 固定为 null。
}

interface CreateRiffDeckParams {
  name: string; // 必需。新闪卡包的名称。
}

interface CreateRiffDeckResponseData {
  id: string; // 新创建的闪卡包 ID
  name: string; // 新创建的闪卡包名称
  size: number; // 新创建的闪卡包中的卡片数量 (初始为0)
  created: string; // 闪卡包创建时间，格式 YYYY-MM-DD HH:mm:ss
  updated: string; // 闪卡包更新时间，格式 YYYY-MM-DD HH:mm:ss
}

interface CreateRiffDeckResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: CreateRiffDeckResponseData; // 成功时返回新创建的闪卡包信息。
}

interface GetNotebookRiffCardsParams {
  id: string; // 必需。笔记本 ID。
  page: number; // 必需。页码，从 1 开始。
  pageSize?: number;
}

interface GetNotebookRiffCardsResponseData {
  blocks: Array<string>; // 当前页的闪卡块 ID 数组。
  total: number; // 该笔记本下闪卡总数。
  pageCount: number; // 总页数。
}

interface GetNotebookRiffCardsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: GetNotebookRiffCardsResponseData; // 成功时返回分页的闪卡块 ID 及分页信息。
}

interface GetNotebookRiffDueCardsParamsReviewedCardsItem {
  cardID: string; // 已复习卡片的 ID
}

interface GetNotebookRiffDueCardsParams {
  notebook: string; // 必需。笔记本 ID。
  reviewedCards?: Array<GetNotebookRiffDueCardsParamsReviewedCardsItem>;
}

interface GetNotebookRiffDueCardsResponseDataCardsItem {
  id: string; // 闪卡块 ID
  deckID: string; // 所属闪卡包 ID
  blockID: string; // 原始块 ID
  created: string; // 创建时间戳 (毫秒)
  due: string; // 到期时间戳 (毫秒)
  interval: number; // 复习间隔 (天)
  easeFactor: number; // 易度因子
  reps: number; // 已复习次数
}

interface GetNotebookRiffDueCardsResponseData {
  cards: Array<GetNotebookRiffDueCardsResponseDataCardsItem>; // 到期闪卡列表。
  unreviewedCount: number; // 未复习卡片总数。
  unreviewedNewCardCount: number; // 未复习新卡片数量。
  unreviewedOldCardCount: number; // 未复习旧卡片数量。
}

interface GetNotebookRiffDueCardsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: GetNotebookRiffDueCardsResponseData; // 成功时返回到期闪卡列表及统计信息。
}

interface GetRiffCardsParams {
  id: string; // 必需。闪卡包 ID。
  page: number; // 必需。页码，从 1 开始。
  pageSize?: number;
}

interface GetRiffCardsResponseDataBlocksItem {
  id: string; // 闪卡块 ID
  deckID: string; // 所属闪卡包 ID
  blockID: string; // 原始块 ID
  created: string; // 创建时间戳 (毫秒)
  due: string; // 到期时间戳 (毫秒)
  interval: number; // 复习间隔 (天)
  easeFactor: number; // 易度因子
  reps: number; // 已复习次数
}

interface GetRiffCardsResponseData {
  blocks: Array<GetRiffCardsResponseDataBlocksItem>; // 当前页的闪卡对象数组。
  total: number; // 该闪卡包下闪卡总数。
  pageCount: number; // 总页数。
}

interface GetRiffCardsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: GetRiffCardsResponseData; // 成功时返回分页的闪卡对象及分页信息。
}

interface GetRiffCardsByBlockIDsParams {
  blockIDs: Array<string>; // 必需。块 ID 数组。
}

interface GetRiffCardsByBlockIDsResponseDataBlocksItem {
  id: string; // 闪卡块 ID
  deckID: string; // 所属闪卡包 ID
  blockID: string; // 原始块 ID
  created: string; // 创建时间戳 (毫秒)
  due: string; // 到期时间戳 (毫秒)
  interval: number; // 复习间隔 (天)
  easeFactor: number; // 易度因子
  reps: number; // 已复习次数
}

interface GetRiffCardsByBlockIDsResponseData {
  blocks: Array<GetRiffCardsByBlockIDsResponseDataBlocksItem>; // 对应的闪卡信息数组。如果某个 blockID 不是闪卡，则对应项可能缺失或为 null。
}

interface GetRiffCardsByBlockIDsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: GetRiffCardsByBlockIDsResponseData; // 成功时返回闪卡信息。
}

interface GetRiffDecksResponseDataItem {
  id: string; // 闪卡包 ID
  name: string; // 闪卡包名称
  size: number; // 闪卡包中的卡片数量
  created: string; // 闪卡包创建时间，格式 YYYY-MM-DD HH:mm:ss
  updated: string; // 闪卡包更新时间，格式 YYYY-MM-DD HH:mm:ss
}

interface GetRiffDecksResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: Array<GetRiffDecksResponseDataItem>; // 成功时返回所有闪卡包的信息数组。如果没有闪卡包，则返回空数组。
}

interface GetRiffDueCardsParamsReviewedCardsItem {
  cardID: string; // 已复习卡片的 ID
}

interface GetRiffDueCardsParams {
  deckID: string; // 必需。闪卡包 ID。
  reviewedCards?: Array<GetRiffDueCardsParamsReviewedCardsItem>;
}

interface GetRiffDueCardsResponseDataCardsItem {
  id: string; // 闪卡块 ID
  deckID: string; // 所属闪卡包 ID
  blockID: string; // 原始块 ID
  created: string; // 创建时间戳 (毫秒)
  due: string; // 到期时间戳 (毫秒)
  interval: number; // 复习间隔 (天)
  easeFactor: number; // 易度因子
  reps: number; // 已复习次数
}

interface GetRiffDueCardsResponseData {
  cards: Array<GetRiffDueCardsResponseDataCardsItem>; // 到期闪卡列表。
  unreviewedCount: number; // 未复习卡片总数。
  unreviewedNewCardCount: number; // 未复习新卡片数量。
  unreviewedOldCardCount: number; // 未复习旧卡片数量。
}

interface GetRiffDueCardsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: GetRiffDueCardsResponseData; // 成功时返回到期闪卡列表及统计信息。
}

interface GetTreeRiffCardsParams {
  id: string; // 必需。文档树的根块 ID。
  page: number; // 必需。页码，从 1 开始。
  pageSize?: number;
}

interface GetTreeRiffCardsResponseData {
  blocks: Array<string>; // 当前页的闪卡块 ID 数组。
  total: number; // 该文档树下闪卡总数。
  pageCount: number; // 总页数。
}

interface GetTreeRiffCardsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: GetTreeRiffCardsResponseData; // 成功时返回分页的闪卡块 ID 及分页信息。
}

interface GetTreeRiffDueCardsParamsReviewedCardsItem {
  cardID: string; // 已复习卡片的 ID
}

interface GetTreeRiffDueCardsParams {
  rootID: string; // 必需。文档树的根块 ID。
  reviewedCards?: Array<GetTreeRiffDueCardsParamsReviewedCardsItem>;
}

interface GetTreeRiffDueCardsResponseDataCardsItem {
  id: string; // 闪卡块 ID
  deckID: string; // 所属闪卡包 ID
  blockID: string; // 原始块 ID
  created: string; // 创建时间戳 (毫秒)
  due: string; // 到期时间戳 (毫秒)
  interval: number; // 复习间隔 (天)
  easeFactor: number; // 易度因子
  reps: number; // 已复习次数
}

interface GetTreeRiffDueCardsResponseData {
  cards: Array<GetTreeRiffDueCardsResponseDataCardsItem>; // 到期闪卡列表。
  unreviewedCount: number; // 未复习卡片总数。
  unreviewedNewCardCount: number; // 未复习新卡片数量。
  unreviewedOldCardCount: number; // 未复习旧卡片数量。
}

interface GetTreeRiffDueCardsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: GetTreeRiffDueCardsResponseData; // 成功时返回到期闪卡列表及统计信息。
}

interface RemoveRiffCardsParams {
  deckID: string; // 必需。目标闪卡包的 ID。如果为空字符串，则表示从所有卡包中移除这些卡片（通常用于"All"卡包的操作场景，但后端实际是根据 blockID 移除）。
  blockIDs: Array<string>; // 必需。要移除的闪卡块 ID 数组。
}

interface RemoveRiffCardsResponseData {
  id: string; // 闪卡包 ID
  name: string; // 闪卡包名称
  size: number; // 闪卡包中的卡片数量
  created: string; // 闪卡包创建时间，格式 YYYY-MM-DD HH:mm:ss
  updated: string; // 闪卡包更新时间，格式 YYYY-MM-DD HH:mm:ss
}

interface RemoveRiffCardsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: RemoveRiffCardsResponseData | null;
}

interface RemoveRiffDeckParams {
  deckID: string; // 必需。要移除的闪卡包 ID。
}

interface RemoveRiffDeckResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: null; // 成功时 Data 固定为 null。
}

interface RenameRiffDeckParams {
  deckID: string; // 必需。要重命名的闪卡包 ID。
  name: string; // 必需。新的闪卡包名称。
}

interface RenameRiffDeckResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: null; // 成功时 Data 固定为 null。
}

interface ResetRiffCardsParams {
  type: 'notebook' | 'tree' | 'deck'; // 必需。重置类型：'notebook' (笔记本), 'tree' (文档树), 'deck' (闪卡包)。
  id: string; // 必需。对应类型的 ID：笔记本 ID、文档树根块 ID 或闪卡包 ID。
  deckID: string; // 必需。闪卡包 ID。即使 type 是 'notebook' 或 'tree'，也需要指定一个 deckID 来确定操作范围，通常可以是这些卡片实际所属的卡包 ID，或者是全局的卡片操作。具体逻辑需参照后端 model.ResetFlashcards 实现。从 riff.go L89 看，此参数未被直接使用，但model层可能需要。暂时保留。
  blockIDs?: Array<string>;
}

interface ResetRiffCardsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: null; // 成功时 Data 固定为 null。
}

interface ReviewRiffCardParamsReviewedCardsItem {
  cardID: string; // 已复习卡片的 ID
}

interface ReviewRiffCardParams {
  deckID: string; // 必需。闪卡所属的卡包 ID。
  cardID: string; // 必需。要复习的闪卡块 ID。
  rating: number; // 必需。评分，通常为 0 (Again), 1 (Hard), 2 (Good), 3 (Easy), 4 (Soon)。具体数值对应关系可能依赖于底层的 SM-2 算法实现。参照 riff.Rating 定义，0:Again, 1:Hard, 2:Good, 3:Easy, 4:Soon, (SM2 的0-5 对应这里的0-4?)
  reviewedCards?: Array<ReviewRiffCardParamsReviewedCardsItem>;
}

interface ReviewRiffCardResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: null; // 成功时 Data 固定为 null。
}

interface SkipReviewRiffCardParams {
  deckID: string; // 必需。闪卡所属的卡包 ID。
  cardID: string; // 必需。要跳过复习的闪卡块 ID。
}

interface SkipReviewRiffCardResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: null; // 成功时 Data 固定为 null。
}

interface FindReplaceParams {
  k: string; // 必需。要查找的关键词。
  r: string; // 必需。要替换的字符串。
  ids: Array<string>; // 必需。要进行查找替换操作的块 ID 数组。
  paths?: Array<string>;
  boxes?: Array<string>;
  types?: Record<string, boolean>;
  method?: number;
  orderBy?: number;
  groupBy?: number;
  replaceTypes?: Record<string, boolean>;
}

interface FindReplaceResponseData {
  closeTimeout?: number;
}

interface FindReplaceResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: FindReplaceResponseData | null;
}

interface FullTextSearchAssetContentParams {
  query: string; // 必需。搜索查询语句。
  page?: number;
  pageSize?: number;
  types?: Record<string, boolean>;
  method?: number;
  orderBy?: number;
}

interface FullTextSearchAssetContentResponseDataAssetContentsItem {
  id: string; // 资源文件块 ID。
  box: string; // 笔记本 ID。
  docID: string; // 所属文档 ID。
  path: string; // 资源文件路径。
  name: string; // 资源文件名称。
  title: string; // 文档标题。
  updated: string; // 更新时间（YYYYMMDDHHmmss）。
  content: string; // 匹配到的内容片段。
  count: number; // 匹配数量。
}

interface FullTextSearchAssetContentResponseData {
  assetContents: Array<FullTextSearchAssetContentResponseDataAssetContentsItem>; // 当前页的搜索结果列表。
  matchedAssetCount: number; // 匹配到的资源文件总数。
  pageCount: number; // 总页数。
}

interface FullTextSearchAssetContentResponse {
  Code: number; // 返回码，0 表示成功。如果未付费，Code 为 1。
  Msg: string; // 错误信息，成功时为空字符串。
  Data: FullTextSearchAssetContentResponseData | null;
}

interface FullTextSearchBlockParams {
  query: string; // 必需。搜索查询语句。
  page?: number;
  pageSize?: number;
  paths?: Array<string>;
  boxes?: Array<string>;
  types?: Record<string, boolean>;
  method?: number;
  orderBy?: number;
  groupBy?: number;
}

interface FullTextSearchBlockResponseData {
  blocks: Array<any>; // 当前页的搜索结果块列表。每个块的结构根据其类型而定，通常包含 id, type, content, path, box, docID 等字段。
  matchedBlockCount: number; // 匹配到的块总数。
  matchedRootCount: number; // 匹配到的根块（文档）总数。
  pageCount: number; // 总页数。
  docMode: boolean; // 是否为文档模式搜索结果（groupBy=1 时为 true）。
}

interface FullTextSearchBlockResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: FullTextSearchBlockResponseData | null;
}

interface GetAssetContentParams {
  id: string; // 必需。资源文件块的 ID。
  query: string; // 必需。查询关键词。
  queryMethod: number; // 必需。查询方法：0：关键字，1：查询语法，2：SQL，3：正则表达式。
}

interface GetAssetContentResponseData {
  assetContent: string; // 匹配到的资源文件内容片段。
}

interface GetAssetContentResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: GetAssetContentResponseData | null;
}

interface GetEmbedBlockParams {
  embedBlockID: string; // 必需。嵌入块（通常是 `((块ID))` 引用的块）的 ID。
  includeIDs: Array<string>; // 必需。要实际嵌入显示的块 ID 数组（通常只包含 embedBlockID，但在特殊情况下可能包含其子块）。
  headingMode?: number;
  breadcrumb?: boolean;
}

interface GetEmbedBlockResponseData {
  blocks: Array<any>; // 渲染后的嵌入块内容数组。每个元素的具体结构取决于块类型。
}

interface GetEmbedBlockResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: GetEmbedBlockResponseData | null;
}

interface ListInvalidBlockRefsParams {
  page?: number;
  pageSize?: number;
}

interface ListInvalidBlockRefsResponseDataBlocksItem {
  id: string; // 包含无效引用的块的 ID。
  box: string; // 笔记本 ID。
  path: string; // 文档路径。
  hPath: string; // 文档层级路径。
  content: string; // 块内容预览。
  updated: string; // 块更新时间（YYYYMMDDHHmmss）。
}

interface ListInvalidBlockRefsResponseData {
  blocks: Array<ListInvalidBlockRefsResponseDataBlocksItem>; // 当前页的无效引用块列表。
  matchedBlockCount: number; // 匹配到的无效引用块总数。
  matchedRootCount: number; // 匹配到的包含无效引用的文档总数。
  pageCount: number; // 总页数。
}

interface ListInvalidBlockRefsResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: ListInvalidBlockRefsResponseData | null;
}

interface RemoveTemplateParams {
  path: string; // 必需。要移除的模板文件的相对路径（相对于模板文件夹）。
}

interface RemoveTemplateResponse {
  Code: number; // 返回码，0 表示成功，-1 表示失败
  Msg: string; // 错误信息，成功时为空字符串
  Data: null; // 成功或失败时 Data 均为 null。
}

interface SearchAssetParams {
  k: string; // 必需。搜索关键词。
  exts?: Array<string>;
}

interface SearchAssetResponseDataItem {
  id: string; // 资源文件块 ID。
  box: string; // 笔记本 ID。
  docID: string; // 所属文档 ID。
  path: string; // 资源文件路径。
  name: string; // 资源文件名称。
  title: string; // 文档标题。
  hPath: string; // 文档层级路径。
  updated: string; // 更新时间（YYYYMMDDHHmmss）。
}

interface SearchAssetResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: Array<SearchAssetResponseDataItem>; // 匹配到的资源文件列表。如果没有结果，则为空数组。
}

interface SearchEmbedBlockParams {
  embedBlockID: string; // 必需。作为搜索范围根的嵌入块 ID。
  stmt: string; // 必需。用于搜索的 SQL 语句。查询的表名通常为 'blocks'，可查询的字段如 id, content, markdown, type 等。
  excludeIDs?: Array<string>;
  headingMode?: number;
  breadcrumb?: boolean;
}

interface SearchEmbedBlockResponseData {
  blocks: Array<any>; // 满足 SQL 查询条件的块内容数组。每个元素的具体结构取决于块类型和查询语句。
}

interface SearchEmbedBlockResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: SearchEmbedBlockResponseData | null;
}

interface SearchRefBlockParams {
  id: string; // 必需。当前正在编辑的块的 ID。
  rootID: string; // 必需。当前文档的根块 ID。
  k: string; // 必需。用户输入的搜索关键词。
  beforeLen?: number;
  isSquareBrackets?: boolean;
  isDatabase?: boolean;
  reqId?: any;
}

interface SearchRefBlockResponseDataBlocksItem {
  id: string; // 建议引用的块 ID。
  type: string; // 块类型。
  content: string; // 块内容预览或标题。
  [key: string]: any; // From .catchall()
}

interface SearchRefBlockResponseData {
  blocks: Array<SearchRefBlockResponseDataBlocksItem>; // 引用建议块列表。
  newDoc: boolean; // 是否建议创建一个新文档（当搜索关键词在 `isSquareBrackets` 为 true 时可能触发）。
  k: string; // 原始搜索关键词 (HTML转义后)。
  reqId?: any;
}

interface SearchRefBlockResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: SearchRefBlockResponseData | null;
}

interface SearchTagParams {
  k: string; // 必需。搜索关键词。
}

interface SearchTagResponseData {
  tags: Array<string>; // 匹配到的标签列表。如果无结果则为空数组。
  k: string; // 原始搜索关键词。
}

interface SearchTagResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: SearchTagResponseData | null;
}

interface SearchTemplateParams {
  k: string; // 必需。搜索关键词。
}

interface SearchTemplateResponseDataBlocksItem {
  content: string; // 模板内容片段或文件名。
  path: string; // 模板文件的相对路径。
  docpath?: string;
  [key: string]: any; // From .catchall()
}

interface SearchTemplateResponseData {
  blocks: Array<SearchTemplateResponseDataBlocksItem>; // 匹配到的模板列表。
  k: string; // 原始搜索关键词。
}

interface SearchTemplateResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: SearchTemplateResponseData | null;
}

interface SearchWidgetParams {
  k: string; // 必需。搜索关键词。
}

interface SearchWidgetResponseDataBlocksItem {
  id: string; // 挂件块 ID。
  markdown: string; // 挂件块的 Markdown 内容。
  name: string; // 挂件块的名称 (ial中的name属性)。
  [key: string]: any; // From .catchall()
}

interface SearchWidgetResponseData {
  blocks: Array<SearchWidgetResponseDataBlocksItem>; // 匹配到的挂件块列表。
  k: string; // 原始搜索关键词。
}

interface SearchWidgetResponse {
  Code: number; // 返回码，0 表示成功
  Msg: string; // 错误信息，成功时为空字符串
  Data: SearchWidgetResponseData | null;
}

interface UpdateEmbedBlockParams {
  id: string; // 必需。要更新的查询嵌入块的 ID。
  content: string; // 必需。查询嵌入块新的原始 Markdown 内容，通常是 SQL 查询语句或 JavaScript 脚本。
}

interface UpdateEmbedBlockResponse {
  Code: number; // 返回码，0 表示成功，-1 表示失败
  Msg: string; // 错误信息，成功时为空字符串
  Data: null; // 成功或失败时 Data 均为 null。
}

interface AddVirtualBlockRefExcludeParams {
  keywords: Array<string>; // 要添加到排除列表的关键字数组。
}

interface AddVirtualBlockRefExcludeResponse {
  Code: number; // API 执行结果的状态码，0 表示成功，其他表示失败。
  Msg: string; // API 执行结果的描述信息。
  Data: null; // 此接口成功时不返回具体数据。
}

interface AddVirtualBlockRefIncludeParams {
  keywords: Array<string>; // 要添加到包含列表的关键字数组。
}

interface AddVirtualBlockRefIncludeResponse {
  Code: number; // API 执行结果的状态码，0 表示成功，其他表示失败。
  Msg: string; // API 执行结果的描述信息。
  Data: null; // 此接口成功时不返回具体数据。
}

interface GetCloudUserParams {
  token?: string;
}

interface GetCloudUserResponseDataUserTitlesItem {
  name: string; // 称号名称。
  icon: string; // 称号图标URL。
  url: string; // 称号链接URL。
}

interface GetCloudUserResponseData {
  userId: string; // 用户ID。
  userName: string; // 用户名。
  userAvatarURL: string; // 用户头像URL。
  userHomeBImgURL: string; // 用户主页背景图URL。
  userTitles: Array<GetCloudUserResponseDataUserTitlesItem>; // 用户获得的称号列表。
  userIntro: string; // 用户简介。
  userNickname: string; // 用户昵称。
  userCreateTime: string; // 用户账户创建时间。
  userSiYuanProExpireTime: number; // 思源笔记专业版到期时间戳 (毫秒)。
  userToken: string; // 用户访问令牌。
  userTokenExpireTime: string; // 用户访问令牌到期时间。
  userSiYuanRepoSize: number; // 思源笔记云端仓库已用空间大小 (字节)。
  userSiYuanPointExchangeRepoSize: number; // 通过积分兑换的云端仓库空间大小 (字节)。
  userSiYuanAssetSize: number; // 思源笔记云端资源文件已用空间大小 (字节)。
  userTrafficUpload: number; // 当月已用上传流量 (字节)。
  userTrafficDownload: number; // 当月已用下载流量 (字节)。
  userSiYuanProExpireDays: number; // 思源笔记专业版剩余天数。
  userSiYuanAIMaxFreeRequestCount: number; // AI功能免费版最大请求次数。
  userSiYuanAIMaxProRequestCount: number; // AI功能专业版最大请求次数。
  userSiYuanAIProRequestCount: number; // AI功能专业版当前已用请求次数。
  userSiYuanAISubscriptionPlan: number; // AI功能订阅计划类型。
  userSiYuanPro: boolean; // 是否为思源笔记专业版用户。
  userSiYuanLifetimePro: boolean; // 是否为思源笔记终身专业版用户。
  userSiYuanTeam: boolean; // 是否为思源笔记团队版用户。
}

interface GetCloudUserResponse {
  Code: number; // API 执行结果的状态码，0 表示成功，其他表示失败。
  Msg: string; // API 执行结果的描述信息。
  Data: GetCloudUserResponseData | null;
}

interface GetPublishResponseDataPublishAuthAccountsItem {
  username: string; // Basic 认证用户名。
  password: string; // Basic 认证密码。
  memo?: string;
}

interface GetPublishResponseDataPublishAuth {
  enable: boolean; // 是否启用 Basic 认证。
  accounts: Array<GetPublishResponseDataPublishAuthAccountsItem>; // Basic 认证账户列表。
}

interface GetPublishResponseDataPublish {
  enable: boolean; // 是否启用发布服务。
  port: number; // 发布服务配置的端口号。
  auth: GetPublishResponseDataPublishAuth; // Basic 认证配置。
}

interface GetPublishResponseData {
  port: number; // 发布服务当前监听的端口号。
  publish: GetPublishResponseDataPublish; // 详细的发布配置项。
}

interface GetPublishResponse {
  Code: number; // API 执行结果的状态码，0 表示成功，其他表示失败。
  Msg: string; // API 执行结果的描述信息。
  Data: GetPublishResponseData | null;
}

interface Login2faCloudUserParams {
  token: string; // 登录过程中的临时令牌。
  code: string; // 6位数字的两步验证码。
}

interface Login2faCloudUserResponse {
  Code: number; // API 执行结果的状态码，0 表示成功，其他表示失败。
  Msg: string; // API 执行结果的描述信息。
  Data: Record<string, any> | null;
}

interface LogoutCloudUserResponse {
  Code: number; // API 执行结果的状态码，0 表示成功，其他表示失败。
  Msg: string; // API 执行结果的描述信息。
  Data: null; // 此接口成功时不返回具体数据。
}

interface RefreshVirtualBlockRefResponse {
  Code: number; // API 执行结果的状态码，0 表示成功，其他表示失败。
  Msg: string; // API 执行结果的描述信息。
  Data: null; // 此接口成功时不返回具体数据。
}

interface SetAIParamsOpenAI {
  apiKey?: string;
  apiTimeout?: number;
  apiProxy?: string;
  apiModel?: string;
  apiMaxTokens?: number;
  apiTemperature?: number;
  apiMaxContexts?: number;
  apiBaseURL?: string;
  apiUserAgent?: string;
  apiProvider?: string;
  apiVersion?: string;
}

interface SetAIParams {
  openAI: SetAIParamsOpenAI; // OpenAI 相关配置。
}

interface SetAIResponseDataOpenAI {
  apiKey?: string;
  apiTimeout?: number;
  apiProxy?: string;
  apiModel?: string;
  apiMaxTokens?: number;
  apiTemperature?: number;
  apiMaxContexts?: number;
  apiBaseURL?: string;
  apiUserAgent?: string;
  apiProvider?: string;
  apiVersion?: string;
}

interface SetAIResponseData {
  openAI: SetAIResponseDataOpenAI; // OpenAI 相关配置。
}

interface SetAIResponse {
  Code: number; // API 执行结果的状态码，0 表示成功，其他表示失败。
  Msg: string; // API 执行结果的描述信息。
  Data: SetAIResponseData | null;
}

interface SetAccountParams {
  displayTitle?: boolean;
  displayVIP?: boolean;
}

interface SetAccountResponseData {
  displayTitle: boolean; // 是否在用户头像旁显示称号。
  displayVIP: boolean; // 是否在用户头像旁显示Pro标识。
}

interface SetAccountResponse {
  Code: number; // API 执行结果的状态码，0 表示成功，其他表示失败。
  Msg: string; // API 执行结果的描述信息。
  Data: SetAccountResponseData | null;
}

interface SetAppearanceParams {
  mode?: number;
  themeDark?: string;
  themeLight?: string;
  darkThemes?: Array<string>;
  lightThemes?: Array<string>;
  icons?: Array<string>;
  lang?: string;
  codeFontFamily?: string;
  fontSize?: number;
  fontFamily?: string;
  hideStatusBar?: boolean;
  customCSS?: string;
}

interface SetAppearanceResponseData {
  mode?: number;
  themeDark?: string;
  themeLight?: string;
  darkThemes?: Array<string>;
  lightThemes?: Array<string>;
  icons?: Array<string>;
  lang?: string;
  fontSize?: number;
  fontFamily?: string;
  codeFontFamily?: string;
  hideStatusBar?: boolean;
  customCSS?: string;
}

interface SetAppearanceResponse {
  Code: number; // API 执行结果的状态码，0 表示成功，其他表示失败。
  Msg: string; // API 执行结果的描述信息。
  Data: SetAppearanceResponseData | null;
}

interface SetBazaarParams {
  trust?: boolean;
  petalDisabled?: boolean;
}

interface SetBazaarResponseData {
  trust?: boolean;
  petalDisabled?: boolean;
}

interface SetBazaarResponse {
  Code: number; // API 执行结果的状态码，0 表示成功，其他表示失败。
  Msg: string; // API 执行结果的描述信息。
  Data: SetBazaarResponseData | null;
}

interface SetEditorParams {
  allowHTMLBLockScript?: boolean;
  fontSize?: number;
  fontSizeScrollZoom?: boolean;
  fontFamily?: string;
  codeSyntaxHighlightLineNum?: boolean;
  codeTabSpaces?: number;
  codeLineWrap?: boolean;
  codeLigatures?: boolean;
  displayBookmarkIcon?: boolean;
  displayNetImgMark?: boolean;
  generateHistoryInterval?: number;
  historyRetentionDays?: number;
  emoji?: Array<string>;
  virtualBlockRef?: boolean;
  virtualBlockRefExclude?: string;
  virtualBlockRefInclude?: string;
  blockRefDynamicAnchorTextMaxLen?: number;
  plantUMLServePath?: string;
  fullWidth?: boolean;
  katexMacros?: string;
  readOnly?: boolean;
  embedBlockBreadcrumb?: boolean;
  listLogicalOutdent?: boolean;
  listItemDotNumberClickFocus?: boolean;
  floatWindowMode?: number;
  dynamicLoadBlocks?: number;
  justify?: boolean;
  rtl?: boolean;
  spellcheck?: boolean;
  onlySearchForDoc?: boolean;
  backlinkExpandCount?: number;
  backmentionExpandCount?: number;
  backlinkContainChildren?: boolean;
  markdown?: any;
}

interface SetEditorResponse {
  Code: number; // API 执行结果的状态码，0 表示成功，其他表示失败。
  Msg: string; // API 执行结果的描述信息。
  Data: any | null;
}

interface SetEditorReadOnlyParams {
  readonly: boolean; // 是否将编辑器设置为只读模式。
}

interface SetEditorReadOnlyResponse {
  Code: number; // API 执行结果的状态码，0 表示成功，其他表示失败。
  Msg: string; // API 执行结果的描述信息。
  Data: null; // 此接口成功时不返回具体数据。
}

interface SetEmojiParams {
  emoji: Array<string>; // 新的常用表情符号列表。
}

interface SetEmojiResponse {
  Code: number; // API 执行结果的状态码，0 表示成功，其他表示失败。
  Msg: string; // API 执行结果的描述信息。
  Data: null; // 此接口成功时不返回具体数据，直接修改配置。
}

interface SetExportParams {
  paragraphBeginningSpace?: boolean;
  addTitle?: boolean;
  blockRefMode?: number;
  blockEmbedMode?: number;
  blockRefTextLeft?: string;
  blockRefTextRight?: string;
  tagOpenMarker?: string;
  tagCloseMarker?: string;
  fileAnnotationRefMode?: number;
  pandocBin?: string;
  markdownYFM?: boolean;
  inlineMemo?: boolean;
  pdfFooter?: string;
  docxTemplate?: string;
  pdfWatermarkStr?: string;
  pdfWatermarkDesc?: string;
  imageWatermarkStr?: string;
  imageWatermarkDesc?: string;
}

interface SetExportResponse {
  Code: number; // API 执行结果的状态码，0 表示成功，其他表示失败。
  Msg: string; // API 执行结果的描述信息。
  Data: any | null;
}

interface SetFiletreeParams {
  alwaysSelectOpenedFile?: boolean;
  openFilesUseCurrentTab?: boolean;
  refCreateSaveBox?: string;
  refCreateSavePath?: string;
  docCreateSaveBox?: string;
  docCreateSavePath?: string;
  maxListCount?: number;
  maxOpenTabCount?: number;
  allowCreateDeeper?: boolean;
  removeDocWithoutConfirm?: boolean;
  closeTabsOnStart?: boolean;
  useSingleLineSave?: boolean;
  sort?: number;
}

interface SetFiletreeResponse {
  Code: number; // API 执行结果的状态码，0 表示成功，其他表示失败。
  Msg: string; // API 执行结果的描述信息。
  Data: any | null;
}

interface SetFlashcardParams {
  newCardLimit?: number;
  reviewCardLimit?: number;
  requestRetention?: number;
  maximumInterval?: number;
  easyBonus?: number;
  hardInterval?: number;
  lapseInterval?: number;
  againInterval?: number;
}

interface SetFlashcardResponseData {
  newCardLimit: number; // 每日新建卡片上限。
  reviewCardLimit: number; // 每日复习卡片上限。
  requestRetention: number; // 期望记忆留存率。
  maximumInterval: number; // 最大复习间隔天数。
  easyBonus: number; // 简单奖励系数。
  hardInterval: number; // 困难间隔系数。
  lapseInterval: number; // 失误间隔系数。
  againInterval: number; // 重来间隔系数。
}

interface SetFlashcardResponse {
  Code: number; // API 执行结果的状态码，0 表示成功，其他表示失败。
  Msg: string; // API 执行结果的描述信息。
  Data: SetFlashcardResponseData | null;
}

interface SetKeymapParamsData {
  editor?: Record<string, string>;
  protyleIR?: Record<string, string>;
  protyleSV?: Record<string, string>;
  protyleWYSIWYG?: Record<string, string>;
  fileTree?: Record<string, string>;
  notebook?: Record<string, string>;
  global?: Record<string, string>;
}

interface SetKeymapParams {
  data: SetKeymapParamsData; // 包含各类快捷键映射的对象。
}

interface SetKeymapResponse {
  Code: number; // API 执行结果的状态码，0 表示成功，其他表示失败。
  Msg: string; // API 执行结果的描述信息。
  Data: null; // 此接口成功时不返回具体数据，直接修改配置。
}

interface SetPublishParamsAuthAccountsItem {
  username: string; // Basic 认证用户名。
  password: string; // Basic 认证密码。
  memo?: string;
}

interface SetPublishParamsAuth {
  enable: boolean; // 是否启用 Basic 认证。
  accounts: Array<SetPublishParamsAuthAccountsItem>; // Basic 认证账户列表。
}

interface SetPublishParams {
  enable: boolean; // 是否启用发布服务。
  port: number; // 发布服务监听的端口号。
  auth: SetPublishParamsAuth; // Basic 认证配置。
}

interface SetPublishResponseDataPublishAuthAccountsItem {
  username: string; // 用户名。
  password: string; // 密码。
  memo?: string;
}

interface SetPublishResponseDataPublishAuth {
  enable: boolean; // 是否启用 Basic 认证。
  accounts: Array<SetPublishResponseDataPublishAuthAccountsItem>; // 账户列表。
}

interface SetPublishResponseDataPublish {
  enable: boolean; // 是否启用发布服务。
  port: number; // 发布服务配置的端口号。
  auth: SetPublishResponseDataPublishAuth; // Basic 认证配置。
}

interface SetPublishResponseData {
  port: number; // 发布服务实际监听的端口号 (如果成功初始化)。
  publish: SetPublishResponseDataPublish; // 详细的发布配置项。
}

interface SetPublishResponse {
  Code: number; // API 执行结果的状态码，0 表示成功，其他表示失败。
  Msg: string; // API 执行结果的描述信息。
  Data: SetPublishResponseData | null;
}

interface SetSearchParams {
  document?: boolean;
  heading?: boolean;
  list?: boolean;
  listItem?: boolean;
  codeBlock?: boolean;
  mathBlock?: boolean;
  table?: boolean;
  blockquote?: boolean;
  superBlock?: boolean;
  paragraph?: boolean;
  htmlBlock?: boolean;
  embedBlock?: boolean;
  databaseBlock?: boolean;
  audioBlock?: boolean;
  videoBlock?: boolean;
  iframeBlock?: boolean;
  widgetBlock?: boolean;
  limit?: number;
  caseSensitive?: boolean;
  name?: boolean;
  alias?: boolean;
  memo?: boolean;
  ial?: boolean;
  indexAssetPath?: boolean;
  backlinkMentionName?: boolean;
  backlinkMentionAlias?: boolean;
  backlinkMentionAnchor?: boolean;
  backlinkMentionDoc?: boolean;
  backlinkMentionKeywordsLimit?: number;
  virtualRefName?: boolean;
  virtualRefAlias?: boolean;
  virtualRefAnchor?: boolean;
  virtualRefDoc?: boolean;
}

interface SetSearchResponse {
  Code: number; // API 执行结果的状态码，0 表示成功，其他表示失败。
  Msg: string; // API 执行结果的描述信息。
  Data: any | null;
}

interface SetConfSnippetParams {
  enabledCSS?: boolean;
  enabledJS?: boolean;
}

interface SetConfSnippetResponseData {
  enabledCSS: boolean; // 是否启用所有自定义CSS代码片段。
  enabledJS: boolean; // 是否启用所有自定义JS代码片段。
}

interface SetConfSnippetResponse {
  Code: number; // API 执行结果的状态码，0 表示成功，其他表示失败。
  Msg: string; // API 执行结果的描述信息。
  Data: SetConfSnippetResponseData | null;
}

interface GetSnippetParams {
  type: 'js' | 'css' | 'all'; // 要获取的代码片段类型：'js', 'css', 或 'all'。
  enabled: number; // 根据启用状态进行过滤：0-仅禁用, 1-仅启用, 2-全部。
  keyword?: string;
}

interface GetSnippetResponseDataSnippetsItem {
  id: string; // 代码片段的唯一ID。
  name: string; // 代码片段的名称。
  type: 'js' | 'css'; // 代码片段的类型：'js' 或 'css'。
  enabled: boolean; // 代码片段是否启用。
  content: string; // 代码片段的实际内容。
}

interface GetSnippetResponseData {
  snippets: Array<GetSnippetResponseDataSnippetsItem>; // 符合过滤条件的代码片段对象数组。
}

interface GetSnippetResponse {
  Code: number; // API 执行结果的状态码，0 表示成功，其他表示失败。
  Msg: string; // API 执行结果的描述信息。
  Data: GetSnippetResponseData | null;
}

interface SetSnippetParamsSnippetsItem {
  id: string; // 片段的唯一ID。对于新片段或希望系统生成ID的片段，可设置为空字符串。
  name: string; // 代码片段的名称。
  type: 'js' | 'css'; // 代码片段的类型，必须是 'js' 或 'css'。
  content: string; // 代码片段的实际内容（JavaScript 或 CSS 代码）。
  enabled: boolean; // 代码片段是否启用。
}

interface SetSnippetParams {
  snippets: Array<SetSnippetParamsSnippetsItem>; // 包含一个或多个代码片段对象的数组。此数组将成为操作完成后系统中全新的、完整的代码片段列表。
}

interface SetSnippetResponse {
  Code: number; // API 执行结果的状态码，0 表示成功，其他表示失败。
  Msg: string; // API 执行结果的描述信息。
  Data: null; // 此接口成功时不返回具体数据，直接修改配置。
}

interface RemoveSnippetParams {
  id: string; // 要移除的代码片段的唯一ID。
}

interface RemoveSnippetResponseData {
  id: string; // 被移除代码片段的唯一ID。
  name: string; // 被移除代码片段的名称。
  type: 'js' | 'css'; // 被移除代码片段的类型。
  enabled: boolean; // 被移除代码片段的启用状态。
  content: string; // 被移除代码片段的内容。
}

interface RemoveSnippetResponse {
  Code: number; // API 执行结果的状态码，0 表示成功，其他表示失败。
  Msg: string; // API 执行结果的描述信息。
  Data: RemoveSnippetResponseData | null;
}

interface FlushTransactionResponse {
  Code: number; // 错误码，0 表示成功，其他表示失败。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: null; // 接口成功执行时，Data 固定为 null。
}

interface GetCriteriaResponseDataItem {
  name: string; // 搜索标准的唯一名称。
  id?: string;
  box?: string;
  type?: string;
  query?: string;
  sort?: number;
  group?: number;
  types?: any;
  customSort?: Array<any>;
  filter?: number;
  docIDs?: Array<string>;
  blockIDs?: Array<string>;
  tagIDs?: Array<string>;
  attrIDs?: Array<string>;
  refs?: Array<string>;
  parentID?: string;
  rootID?: string;
  kwd?: string;
}

interface GetCriteriaResponse {
  Code: number; // 错误码，0 表示成功，其他表示失败。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: Array<GetCriteriaResponseDataItem>; // 已保存的搜索标准列表。每个元素代表一个搜索标准，具体字段请参考思源笔记内核 model.Criterion 结构。
}

interface GetLocalStorageResponse {
  Code: number; // 错误码，0 表示成功，其他表示失败。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: Record<string, any>; // 包含 LocalStorage 所有键值对的对象。值的类型可能多样，取决于存储时的数据。
}

interface GetRecentDocsResponseDataItem {
  id: string; // 文档的 ID。
  notebookID: string; // 文档所属笔记本的 ID。
  name: string; // 文档的名称。
  icon: string; // 文档的图标，如果设置了的话。
  hPath: string; // 文档的人类可读路径。
  path: string; // 文档的存储路径。
  sort: number; // 文档的排序值。
  type: string; // 文档的类型，例如 'd' 表示文档。
  subFileCount: number; // 子文件数量 (通常用于笔记本或文件夹)。
  updated: string; // 文档的最后更新时间 (ISO 8601 格式)。
}

interface GetRecentDocsResponse {
  Code: number; // 错误码，0 表示成功，其他表示失败。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: Array<GetRecentDocsResponseDataItem>; // 最近打开的文档列表。
}

interface RemoveCriterionParams {
  name: string; // 要移除的搜索标准的名称。
}

interface RemoveCriterionResponse {
  Code: number; // 错误码，0 表示成功，其他表示失败。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: null; // 接口成功执行时，Data 固定为 null。
}

interface RemoveLocalStorageValsParams {
  keys: Array<string>; // 要移除的 LocalStorage 项目的键名数组。
  app: string; // 发起操作的 App ID，用于事件广播。
}

interface RemoveLocalStorageValsResponse {
  Code: number; // 错误码，0 表示成功，其他表示失败。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: null; // 接口成功执行时，Data 固定为 null。
}

interface SetCriterionParamsCriterion {
  name: string; // 搜索标准的唯一名称。
  id?: string;
  box?: string;
  type?: string;
  query?: string;
  sort?: number;
  group?: number;
  types?: any;
  customSort?: Array<any>;
  filter?: number;
  docIDs?: Array<string>;
  blockIDs?: Array<string>;
  tagIDs?: Array<string>;
  attrIDs?: Array<string>;
  refs?: Array<string>;
  parentID?: string;
  rootID?: string;
  kwd?: string;
}

interface SetCriterionParams {
  criterion: SetCriterionParamsCriterion; // 要保存或更新的搜索标准对象。具体字段请参考思源笔记内核 model.Criterion 结构。
}

interface SetCriterionResponse {
  Code: number; // 错误码，0 表示成功，其他表示失败。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: null; // 接口成功执行时，Data 固定为 null。
}

interface SetLocalStorageParams {
  val: Record<string, any>; // 一个对象，其键值对将完全替换现有的 LocalStorage 内容。
  app: string; // 发起操作的 App ID，用于事件广播。
}

interface SetLocalStorageResponse {
  Code: number; // 错误码，0 表示成功，其他表示失败。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: null; // 接口成功执行时，Data 固定为 null。
}

interface SetLocalStorageValParams {
  key: string; // 要设置的 LocalStorage 项目的键名。
  val: any; // 要设置的 LocalStorage 项目的值，可以是任意类型，但最终会序列化为字符串存储。
  app: string; // 发起操作的 App ID，用于事件广播。
}

interface SetLocalStorageValResponse {
  Code: number; // 错误码，0 表示成功，其他表示失败。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: null; // 接口成功执行时，Data 固定为 null。
}

interface CreateCloudSyncDirParams {
  name: string; // 要创建的云端同步目录的名称。
}

interface CreateCloudSyncDirResponse {
  Code: number; // 错误码，0 表示成功，其他表示失败。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: null; // 接口成功执行时，Data 固定为 null。如果创建失败，Data 可能包含 { closeTimeout: 5000 }。
}

interface ExportSyncProviderS3ResponseData {
  name: string; // 导出的文件名 (不含 .zip 后缀)。
  zip: string; // 导出的 .zip 文件在服务端的临时路径，前端可据此下载。
}

interface ExportSyncProviderS3Response {
  Code: number; // 错误码，0 表示成功，其他表示失败。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: ExportSyncProviderS3ResponseData | null;
}

interface ExportSyncProviderWebDAVResponseData {
  name: string; // 导出的文件名 (不含 .zip 后缀)。
  zip: string; // 导出的 .zip 文件在服务端的临时路径，前端可据此下载。
}

interface ExportSyncProviderWebDAVResponse {
  Code: number; // 错误码，0 表示成功，其他表示失败。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: ExportSyncProviderWebDAVResponseData | null;
}

interface GetBootSyncResponse {
  Code: number; // 错误码。0 表示未满足特定条件（非管理员、同步未启用、启动时同步未成功），1 表示启动时同步成功。其他值表示失败。注意这里的 Code 含义比较特殊。 
  Msg: string; // 接口返回的消息。Code 为 1 时，Msg 为提示信息（如 '启动时同步数据完毕'）。Code 为 0 时通常为空。 
  Data: null; // 此接口不通过 Data 返回数据。
}

interface GetSyncInfoResponseData {
  synced: string; // 最后成功同步的时间戳 (格式如 'YYYY-MM-DD HH:mm:ss')，如果从未同步则为空字符串。
  stat: string; // 当前的同步状态文本描述。如果同步未启用，则为 '同步未启用' 或类似提示。
  kernels: Array<string>; // 当前在线的其他内核实例的 ID 列表。
  kernel: string; // 当前内核实例的 ID。
}

interface GetSyncInfoResponse {
  Code: number; // 错误码，0 表示成功，其他表示失败。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: GetSyncInfoResponseData | null;
}

interface ImportSyncProviderS3ResponseDataS3 {
  endpoint: string; // S3 服务的 Endpoint。如：s3.amazonaws.com
  accessKeyID: string; // S3 Access Key ID。敏感信息，通常前端不直接展示。
  secretAccessKey: string; // S3 Secret Access Key。敏感信息，通常前端不直接展示。
  bucket: string; // S3 Bucket 名称。
  region: string; // S3 Bucket 所在区域。如：us-east-1
  cdn?: string;
}

interface ImportSyncProviderS3ResponseData {
  s3: ImportSyncProviderS3ResponseDataS3; // 导入并应用成功的 S3 配置对象。部分敏感字段可能不会完整返回或不应直接展示。
}

interface ImportSyncProviderS3Response {
  Code: number; // 错误码，0 表示成功，其他表示失败。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: ImportSyncProviderS3ResponseData | null;
}

interface ImportSyncProviderWebDAVResponseDataWebdav {
  endpoint: string; // WebDAV 服务的 URL。如：https://dav.example.com/dav
  username: string; // WebDAV 用户名。敏感信息，通常前端不直接展示。
  password: string; // WebDAV 密码。敏感信息，通常前端不直接展示。
}

interface ImportSyncProviderWebDAVResponseData {
  webdav: ImportSyncProviderWebDAVResponseDataWebdav; // 导入并应用成功的 WebDAV 配置对象。部分敏感字段可能不会完整返回或不应直接展示。
}

interface ImportSyncProviderWebDAVResponse {
  Code: number; // 错误码，0 表示成功，其他表示失败。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: ImportSyncProviderWebDAVResponseData | null;
}

interface ListCloudSyncDirResponseDataSyncDirsItem {
  name: string; // 同步目录的名称。
  hSize: string; // 目录大小的人类可读格式 (例如 '1.2 MB')。
  size: number; // 目录大小，单位字节。
}

interface ListCloudSyncDirResponseData {
  syncDirs: Array<ListCloudSyncDirResponseDataSyncDirsItem>; // 云端同步目录列表。
  hSize: string; // 所有同步目录的总大小的人类可读格式。
  checkedSyncDir: string; // 当前内核配置中正在使用的云端同步目录名称。
}

interface ListCloudSyncDirResponse {
  Code: number; // 错误码，0 表示成功，1 表示获取失败（如网络错误、配置错误）。
  Msg: string; // 接口返回的消息，成功时通常为空字符串，失败时包含错误信息。
  Data: ListCloudSyncDirResponseData | null;
}

interface PerformBootSyncResponse {
  Code: number; // 错误码。model.BootSyncSucc (通常为0或1，表示启动同步的结果) 会被赋给 Code。具体含义需参考内核实现。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: null; // 此接口不通过 Data 返回具体数据。
}

interface PerformSyncParams {
  mobileSwitch?: boolean;
  upload?: boolean;
}

interface PerformSyncResponse {
  Code: number; // 错误码，0 表示成功接收请求并开始处理（同步是异步过程），其他表示接收参数错误等。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: null; // 此接口不通过 Data 返回具体数据。
}

interface RemoveCloudSyncDirParams {
  name: string; // 要移除的云端同步目录的名称。
}

interface RemoveCloudSyncDirResponse {
  Code: number; // 错误码，0 表示成功，其他表示失败。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: null; // 接口成功执行时，Data 固定为 null。如果移除失败，Data 可能包含 { closeTimeout: 5000 }。
}

interface SetCloudSyncDirParams {
  name: string; // 要设置为当前同步目录的云端目录名称。
}

interface SetCloudSyncDirResponse {
  Code: number; // 错误码，0 表示成功，其他表示失败。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: null; // 接口成功执行时，Data 固定为 null。如果设置失败，Data 可能包含 { closeTimeout: 5000 }。
}

interface SetSyncEnableParams {
  enabled: boolean; // 是否启用同步。true 为启用，false 为禁用。
}

interface SetSyncEnableResponse {
  Code: number; // 错误码，0 表示成功，其他表示失败。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: null; // 接口成功执行时，Data 固定为 null。
}

interface SetSyncGenerateConflictDocParams {
  generateConflictDoc: boolean; // 是否生成冲突文档。true 为生成，false 为不生成。
}

interface SetSyncGenerateConflictDocResponse {
  Code: number; // 错误码，0 表示成功，其他表示失败。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: null; // 接口成功执行时，Data 固定为 null。
}

interface SetSyncIntervalParams {
  syncInterval: number; // 自动同步的时间间隔，单位为分钟。例如，输入 5 表示每5分钟同步一次。最小值为1分钟。
}

interface SetSyncIntervalResponse {
  Code: number; // 错误码，0 表示成功，其他表示失败。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: null; // 接口成功执行时，Data 固定为 null。
}

interface SetSyncModeParams {
  syncMode: number; // 同步模式。例如：0-自动, 1-手动, 3-云端完全手动。具体可用值请参考内核实现或相关文档。
}

interface SetSyncModeResponse {
  Code: number; // 错误码，0 表示成功，其他表示失败。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: null; // 接口成功执行时，Data 固定为 null。
}

interface SetSyncPerceptionParams {
  syncPerception: boolean; // 是否启用同步感知。true 为启用，false 为禁用。
}

interface SetSyncPerceptionResponse {
  Code: number; // 错误码，0 表示成功，其他表示失败。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: null; // 接口成功执行时，Data 固定为 null。
}

interface SetSyncProviderParams {
  syncProvider: string; // 同步服务提供商的标识符。例如：'S3', 'WebDAV', 'LocalFolder'。具体可用值请参考内核实现。
}

interface SetSyncProviderResponse {
  Code: number; // 错误码，0 表示成功，其他表示失败。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: null; // 接口成功执行时，Data 固定为 null。
}

interface SetSyncProviderLocalParams {
  syncProviderLocalPath: string; // 本地同步文件夹的绝对路径。
}

interface SetSyncProviderLocalResponse {
  Code: number; // 错误码，0 表示成功，其他表示失败。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: null; // 接口成功执行时，Data 固定为 null。
}

interface SetSyncProviderS3Params {
  s3AccessKeyID: string; // S3 Access Key ID.
  s3SecretAccessKey: string; // S3 Secret Access Key.
  s3Endpoint: string; // S3 服务的 Endpoint。例如：s3.amazonaws.com
  s3Region: string; // S3 Bucket 所在区域。例如：us-east-1
  s3Bucket: string; // S3 Bucket 名称。
  s3CDN?: string;
}

interface SetSyncProviderS3Response {
  Code: number; // 错误码，0 表示成功，其他表示失败。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: null; // 接口成功执行时，Data 固定为 null。
}

interface SetSyncProviderWebDAVParams {
  webdavEndpoint: string; // WebDAV 服务的 URL。例如：https://dav.example.com/remote.php/dav
  webdavUsername: string; // WebDAV 用户名。
  webdavPassword: string; // WebDAV 密码。
}

interface SetSyncProviderWebDAVResponse {
  Code: number; // 错误码，0 表示成功，其他表示失败。
  Msg: string; // 接口返回的消息，成功时通常为空字符串。
  Data: null; // 接口成功执行时，Data 固定为 null。
}

interface AddMicrosoftDefenderExclusionResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: null; // 成功时总是为 null
}

interface BootProgressResponseData {
  progress: number; // 启动进度百分比，例如 89
  state: number; // 当前启动状态码
  details: string; // 当前启动状态的详细描述文本
}

interface BootProgressResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: BootProgressResponseData | null;
}

interface CheckUpdateParams {
  showMsg: boolean; // 是否在检查后显示提示消息给用户
}

interface CheckUpdateResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: null; // 成功时总是为 null，更新信息通过 WebSocket 推送或直接在 UI 弹出
}

interface CheckWorkspaceDirParams {
  path: string; // 要检查的目录绝对路径
}

interface CheckWorkspaceDirResponseData {
  isWorkspace: boolean; // 该路径是否已经是或可以成为一个有效的工作空间
}

interface CheckWorkspaceDirResponse {
  code: number; // 错误码，0 表示成功，-1 表示无效路径或检查失败
  msg: string; // 错误或提示信息
  data: CheckWorkspaceDirResponseData | null;
}

interface CreateWorkspaceDirParams {
  path: string; // 要创建工作空间的目录绝对路径
}

interface CreateWorkspaceDirResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: null; // 成功时总是为 null
}

interface CurrentTimeResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: number; // 当前的 Unix 时间戳 (毫秒)
}

interface ExitResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: null; // 成功时总是为 null
}

interface ExportConfResponseData {
  path: string; // 导出的配置文件 `conf.json` 所在临时目录的绝对路径。前端通常会触发下载此目录下的 `conf.json`。
  name: string; // 导出的配置文件名，通常是 `conf.json`
}

interface ExportConfResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: ExportConfResponseData;
}

interface ExportLogResponseData {
  zip: string; // 导出的日志压缩文件 `log.zip` 的绝对路径。前端通常会触发此文件的下载。
}

interface ExportLogResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: ExportLogResponseData;
}

interface GetCaptchaResponse {
  code?: number;
  msg?: string;
  data?: string;
}

interface GetChangelogResponseData {
  show: boolean; // 是否需要显示更新日志（例如，新版本首次启动后）
  html: string; // 更新日志的 HTML 内容
}

interface GetChangelogResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: GetChangelogResponseData;
}

interface GetConfResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: any; // 包含所有配置项的对象，结构复杂，请参考 `siyuan/kernel/conf/conf.go` 中的 `Conf` 结构体。例如 `data.appearance.mode` 等。
}

interface GetEmojiConfResponseDataItemItemsItem {
  unicode: string; // Emoji 的 Unicode 表示或自定义 Emoji 的文件名/路径
  description: string; // Emoji 描述 (英文)
  description_zh_cn?: string;
  description_ja_jp?: string;
  keywords?: string;
}

interface GetEmojiConfResponseDataItem {
  id: string; // Emoji 分组 ID，例如 'custom', 'people'
  title: string; // Emoji 分组标题 (英文)
  title_zh_cn?: string;
  title_ja_jp?: string;
  items: Array<GetEmojiConfResponseDataItemItemsItem>; // 该分组下的 Emoji项列表
}

interface GetEmojiConfResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: Array<GetEmojiConfResponseDataItem>; // Emoji 配置数组，每个元素是一个 Emoji 分组
}

interface GetMobileWorkspacesResponseDataItem {
  path: string; // 工作空间的绝对路径
  name: string; // 工作空间的名称 (目录名)
  title: string; // 工作空间的标题 (通常与名称相同)
  bookmark: string; // 工作空间的备注/书签
  closed: boolean; // 工作空间是否已关闭
}

interface GetMobileWorkspacesResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: Array<GetMobileWorkspacesResponseDataItem>; // 移动端工作空间列表
}

interface GetNetworkResponseData {
  proxy: string; // 网络代理配置字符串，例如 'socks5://127.0.0.1:1080' 或空字符串
}

interface GetNetworkResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: GetNetworkResponseData;
}

interface GetSysFontsResponseDataItem {
  label: string; // 字体名称，用于显示和选择
  value: string; // 字体族名称，用于 CSS font-family
}

interface GetSysFontsResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: Array<GetSysFontsResponseDataItem>; // 系统字体列表
}

interface GetWorkspaceInfoResponseData {
  workspaceDir: string; // 当前工作空间的绝对路径
  siyuanVer: string; // 当前思源笔记的版本号
}

interface GetWorkspaceInfoResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: GetWorkspaceInfoResponseData;
}

interface GetWorkspacesResponseDataItem {
  path: string; // 工作空间的绝对路径
  name: string; // 工作空间的名称 (目录名)
  title: string; // 工作空间的标题 (通常与名称相同，可由用户设置)
  bookmark: string; // 工作空间的备注/书签
  closed: boolean; // 工作空间当前是否处于关闭状态
}

interface GetWorkspacesResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: Array<GetWorkspacesResponseDataItem>; // 工作空间列表
}

interface IgnoreAddMicrosoftDefenderExclusionResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: null; // 成功时总是为 null
}

interface ImportConfParams {
  file: any; // 上传的 `conf.json` 文件。通常通过 FormData 提交。`z.instanceof(File)` 在此场景不适用，因为这是后端定义。前端应使用 `FormData`。
}

interface ImportConfResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: null; // 成功时总是为 null
}

interface LoginAuthParams {
  authcode?: string;
  captcha?: string;
}

interface LoginAuthResponse {
  code: number; // 错误码，0 表示成功，其他表示失败 (如授权码错误、验证码错误等)
  msg: string; // 错误或提示信息
  data: null; // 成功时为 null，失败时也可能为 null
}

interface LogoutAuthResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: null; // 成功时总是为 null
}

interface ReloadUIResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: null; // 成功时总是为 null
}

interface RemoveWorkspaceDirParams {
  path: string; // 要移除的工作空间的绝对路径
}

interface RemoveWorkspaceDirResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: null; // 成功时总是为 null
}

interface RemoveWorkspaceDirPhysicallyParams {
  paths: Array<string>; // 要物理删除的工作空间的绝对路径列表
}

interface RemoveWorkspaceDirPhysicallyResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: null; // 成功时总是为 null
}

interface SetAPITokenParams {
  token: string; // 新的 API 令牌。如果为空字符串，则表示清空令牌。
}

interface SetAPITokenResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: null; // 成功时总是为 null
}

interface SetAccessAuthCodeParams {
  code: string; // 新的访问授权码。如果为空字符串，则表示清空授权码。
  permanent?: boolean;
}

interface SetAccessAuthCodeResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: null; // 成功时总是为 null
}

interface SetAppearanceModeParams {
  mode: number; // 外观模式：0 表示亮色 (Light)，1 表示暗色 (Dark)
}

interface SetAppearanceModeResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: null; // 成功时总是为 null
}

interface SetAutoLaunchParams {
  autoLaunch: boolean; // 是否开机自启动
}

interface SetAutoLaunchResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: null; // 成功时总是为 null
}

interface SetDownloadInstallPkgParams {
  downloadInstallPkg: boolean; // 是否自动下载并安装更新包
}

interface SetDownloadInstallPkgResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: null; // 成功时总是为 null
}

interface SetFollowSystemLockScreenParams {
  follow: boolean; // 是否跟随系统锁屏
}

interface SetFollowSystemLockScreenResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: null; // 成功时总是为 null
}

interface SetGoogleAnalyticsParams {
  enabled: boolean; // 是否启用 Google Analytics
}

interface SetGoogleAnalyticsResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: null; // 成功时总是为 null
}

interface SetNetworkProxyParams {
  proxy: string; // 代理服务器地址，例如 'http://127.0.0.1:7890', 'socks5://127.0.0.1:1080'。如果为空字符串，则表示清除代理设置。
}

interface SetNetworkProxyResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: null; // 成功时总是为 null
}

interface SetNetworkServeParams {
  serve: boolean; // 是否启用网络服务
  port: string; // 网络服务端口号，字符串形式，例如 '6806'
  accessPermission: string; // 网络访问权限：'lan' (仅局域网), 'wan' (允许公网，需谨慎), 'localhost' (仅本机)
}

interface SetNetworkServeResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: null; // 成功时总是为 null
}

interface SetUILayoutParams {
  layout: string; // UI 布局模式的标识符字符串
}

interface SetUILayoutResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: null; // 成功时总是为 null
}

interface SetWorkspaceDirParams {
  path: string; // 要切换到的工作空间的绝对路径
}

interface SetWorkspaceDirResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: null; // 成功时总是为 null
}

interface AddUIProcessParams {
  pid?: number;
}

interface AddUIProcessResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: null; // 成功时总是为 null
}

interface VersionResponse {
  code: number; // 错误码，0 表示成功
  msg: string; // 错误信息
  data: string; // 当前思源笔记的版本号字符串，例如 '2.10.0'
}

interface GetTagParams {
  sort?: number;
}

interface GetTagResponseDataItem {
  label: string; // 标签的名称。
  count: number; // 标签关联的块数量（文档块+列表项块等）。
  blockCount: number; // 标签关联的文档块数量。
  hCreated: string; // 标签创建时间的人类可读格式。
  hUpdated: string; // 标签最后更新时间的人类可读格式。
}

interface GetTagResponse {
  code: number; // 错误码，0 表示成功。
  msg: string; // 错误信息，成功时为空字符串。
  data: Array<GetTagResponseDataItem> | null;
}

interface RemoveTagParams {
  label: string; // 要移除的标签的名称。
}

interface RemoveTagResponseData {
  closeTimeout?: number;
}

interface RemoveTagResponse {
  code: number; // 错误码，0 表示成功，-1 表示失败。
  msg: string; // 错误信息。
  data: RemoveTagResponseData | null;
}

interface RenameTagParams {
  oldLabel: string; // 要重命名的旧标签名称。
  newLabel: string; // 新的标签名称。
}

interface RenameTagResponseData {
  closeTimeout?: number;
}

interface RenameTagResponse {
  code: number; // 错误码，0 表示成功，-1 表示失败。
  msg: string; // 错误信息。
  data: RenameTagResponseData | null;
}

interface DocSaveAsTemplateParams {
  id: string; // 要作为模板保存的文档ID。
  name: string; // 模板的名称。
  overwrite: boolean; // 如果已存在同名模板，是否覆盖。
}

interface DocSaveAsTemplateResponse {
  code: number; // 错误码，0 表示成功，其他表示失败。
  msg: string; // 错误或成功信息。
  data: null; // 成功时总是为 null。
}

interface RenderTemplateParams {
  path: string; // 模板文件的绝对路径。
  id: string; // 可选的上下文块ID，用于模板内获取该块的信息。
  preview?: boolean;
}

interface RenderTemplateResponseData {
  path: string; // 渲染的模板文件路径。
  content: string; // 渲染后的模板内容 (HTML 字符串)。
}

interface RenderTemplateResponse {
  code: number; // 错误码，0 表示成功。
  msg: string; // 错误信息。
  data: RenderTemplateResponseData | null;
}

interface RenderSprigParams {
  template: string; // 包含 Sprig 模板语法的字符串。
}

interface RenderSprigResponse {
  code: number; // 错误码，0 表示成功。
  msg: string; // 错误信息。
  data: string | null;
}

interface PerformTransactionsParamsTransactionsItemDoOperationsItem {
  action: string; // 必需，具体的操作名称 (如 updateBlock, insertBlock, deleteBlock, setBlockAttrs, foldHeading, addFlashcards, setAttrViewName, updateAttrViewCell 等)。实际可用 action 请参考 kernel/model/transaction.go 中的 performTx 函数内 switch case 定义。
  id?: string;
  parentID?: string;
  previousID?: string;
  nextID?: string;
  data?: any;
  dataType?: string;
  isDetached?: boolean;
  box?: string;
  path?: string;
  name?: string;
  keyID?: string;
  avID?: string;
  blockIDs?: Array<string>;
  deckID?: string;
  rowID?: string;
  srcID?: string;
  targetID?: string;
  after?: boolean;
  srcHeadingID?: string;
  targetNoteBook?: string;
  targetPath?: string;
  previousPath?: string;
  srcListItemID?: string;
  fromPaths?: Array<string>;
  toNotebook?: string;
  toPath?: string;
  fromIDs?: Array<string>;
  toID?: string;
  title?: string;
  markdown?: string;
  tags?: string;
  withMath?: boolean;
  clippingHref?: string;
  listDocTree?: boolean;
  callback?: string;
  typ?: string;
  format?: string;
  removeDest?: boolean;
}

interface PerformTransactionsParamsTransactionsItemUndoOperationsItem {
  action: string; // 必需，具体的操作名称 (如 updateBlock, insertBlock, deleteBlock, setBlockAttrs, foldHeading, addFlashcards, setAttrViewName, updateAttrViewCell 等)。实际可用 action 请参考 kernel/model/transaction.go 中的 performTx 函数内 switch case 定义。
  id?: string;
  parentID?: string;
  previousID?: string;
  nextID?: string;
  data?: any;
  dataType?: string;
  isDetached?: boolean;
  box?: string;
  path?: string;
  name?: string;
  keyID?: string;
  avID?: string;
  blockIDs?: Array<string>;
  deckID?: string;
  rowID?: string;
  srcID?: string;
  targetID?: string;
  after?: boolean;
  srcHeadingID?: string;
  targetNoteBook?: string;
  targetPath?: string;
  previousPath?: string;
  srcListItemID?: string;
  fromPaths?: Array<string>;
  toNotebook?: string;
  toPath?: string;
  fromIDs?: Array<string>;
  toID?: string;
  title?: string;
  markdown?: string;
  tags?: string;
  withMath?: boolean;
  clippingHref?: string;
  listDocTree?: boolean;
  callback?: string;
  typ?: string;
  format?: string;
  removeDest?: boolean;
}

interface PerformTransactionsParamsTransactionsItem {
  timestamp: number; // 事务时间戳，通常由前端生成或后端使用 reqId 覆盖（毫秒级）。
  doOperations: Array<PerformTransactionsParamsTransactionsItemDoOperationsItem>; // 要执行的操作列表，至少包含一个操作。
  undoOperations?: Array<PerformTransactionsParamsTransactionsItemUndoOperationsItem>;
}

interface PerformTransactionsParams {
  transactions: Array<PerformTransactionsParamsTransactionsItem>; // 一个或多个事务对象的数组，至少包含一个事务。
  reqId: number; // 必需，请求的唯一ID (通常是客户端生成的时间戳，毫秒级)。
  app: string; // 必需，发起请求的应用标识 (例如 "SiYuan")。
  session: string; // 必需，当前会话ID (例如前端的 WebSocket clientID)。
}

interface PerformTransactionsResponseDataItemDoOperationsItem {
  action: string; // 必需，具体的操作名称。
  id?: string;
  parentID?: string;
  previousID?: string;
  nextID?: string;
  data?: any;
  dataType?: string;
  isDetached?: boolean;
  box?: string;
  path?: string;
  name?: string;
  keyID?: string;
  avID?: string;
  blockIDs?: Array<string>;
  deckID?: string;
  rowID?: string;
  srcID?: string;
  targetID?: string;
  after?: boolean;
  srcHeadingID?: string;
  targetNoteBook?: string;
  targetPath?: string;
  previousPath?: string;
  srcListItemID?: string;
  fromPaths?: Array<string>;
  toNotebook?: string;
  toPath?: string;
  fromIDs?: Array<string>;
  toID?: string;
  title?: string;
  markdown?: string;
  tags?: string;
  withMath?: boolean;
  clippingHref?: string;
  listDocTree?: boolean;
  callback?: string;
  typ?: string;
  format?: string;
  removeDest?: boolean;
  retData?: any;
}

interface PerformTransactionsResponseDataItemUndoOperationsItem {
  action: string; // 必需，具体的操作名称。
  id?: string;
  parentID?: string;
  previousID?: string;
  nextID?: string;
  data?: any;
  dataType?: string;
  isDetached?: boolean;
  box?: string;
  path?: string;
  name?: string;
  keyID?: string;
  avID?: string;
  blockIDs?: Array<string>;
  deckID?: string;
  rowID?: string;
  srcID?: string;
  targetID?: string;
  after?: boolean;
  srcHeadingID?: string;
  targetNoteBook?: string;
  targetPath?: string;
  previousPath?: string;
  srcListItemID?: string;
  fromPaths?: Array<string>;
  toNotebook?: string;
  toPath?: string;
  fromIDs?: Array<string>;
  toID?: string;
  title?: string;
  markdown?: string;
  tags?: string;
  withMath?: boolean;
  clippingHref?: string;
  listDocTree?: boolean;
  callback?: string;
  typ?: string;
  format?: string;
  removeDest?: boolean;
  retData?: any;
}

interface PerformTransactionsResponseDataItem {
  timestamp: number; // 事务时间戳，与请求中的 reqId 一致（毫秒级）。
  doOperations: Array<PerformTransactionsResponseDataItemDoOperationsItem>; // 已执行的操作列表，其中 retData 可能包含操作结果。
  undoOperations?: Array<PerformTransactionsResponseDataItemUndoOperationsItem>;
}

interface PerformTransactionsResponse {
  code: number; // 错误码，0 表示成功。其他值表示不同类型的错误。
  msg: string; // 错误或成功信息。成功时通常为空字符串。
  data: Array<PerformTransactionsResponseDataItem> | null;
}

interface ReloadAttributeViewParams {
  id: string; // 要重新加载的属性视图的 ID。
}

interface ReloadAttributeViewResponse {
  code: number; // 错误码，0 表示成功。
  msg: string; // 错误信息，成功时为空字符串。
  data: null; // 成功时总是为 null。
}

interface ReloadFiletreeResponse {
  code: number; // 错误码，0 表示成功。
  msg: string; // 错误信息，成功时为空字符串。
  data: null; // 成功时总是为 null。
}

interface ReloadProtyleParams {
  id: string; // 要重新加载的 Protyle 编辑器实例对应的块 ID 或文档 ID。
}

interface ReloadProtyleResponse {
  code: number; // 错误码，0 表示成功。
  msg: string; // 错误信息，成功时为空字符串。
  data: null; // 成功时总是为 null。
}

interface ReloadTagResponse {
  code: number; // 错误码，0 表示成功。
  msg: string; // 错误信息，成功时为空字符串。
  data: null; // 成功时总是为 null。
}

declare module './accountClient' {
  /**
   * 检查用户输入的激活码是否有效。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (CheckActivationcodeParams)
   * @returns Promise<CheckActivationcodeResponse> 
   */
  export function checkActivationcode(params: CheckActivationcodeParams): Promise<CheckActivationcodeResponse>;

  /**
   * 注销当前用户账号。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<DeactivateUserResponse> 
   */
  export function deactivateUser(): Promise<DeactivateUserResponse>;

  /**
   * 用户登录，需要提供用户名、密码、验证码和云端区域。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (LoginParams)
   * @returns Promise<LoginResponse> 
   */
  export function login(params: LoginParams): Promise<LoginResponse>;

  /**
   * 为当前用户开启免费试用。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<StartFreeTrialResponse> 
   */
  export function startFreeTrial(): Promise<StartFreeTrialResponse>;

  /**
   * 使用激活码激活账户。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (UseActivationcodeParams)
   * @returns Promise<UseActivationcodeResponse> 
   */
  export function useActivationcode(params: UseActivationcodeParams): Promise<UseActivationcodeResponse>;

}

declare module './aiClient' {
  /**
   * 与 ChatGPT 进行简单对话。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ChatGPTParams)
   * @returns Promise<ChatGPTResponse> 
   */
  export function chatGPT(params: ChatGPTParams): Promise<ChatGPTResponse>;

  /**
   * 调用 ChatGPT 对指定的块ID列表执行特定动作。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ChatGPTWithActionParams)
   * @returns Promise<ChatGPTWithActionResponse> 
   */
  export function chatGPTWithAction(params: ChatGPTWithActionParams): Promise<ChatGPTWithActionResponse>;

}

declare module './archiveClient' {
  /**
   * 将指定的 .zip 文件解压到指定路径。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (UnzipParams)
   * @returns Promise<UnzipResponse> 
   */
  export function unzip(params: UnzipParams): Promise<UnzipResponse>;

  /**
   * 将指定路径的文件或目录压缩到指定的 .zip 文件。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (ZipParams)
   * @returns Promise<ZipResponse> 
   */
  export function zip(params: ZipParams): Promise<ZipResponse>;

}

declare module './assetClient' {
  /**
   * 完全重新索引工作空间中所有资源文件的内容，用于搜索。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<FullReindexAssetContentResponse> 
   */
  export function fullReindexAssetContent(): Promise<FullReindexAssetContentResponse>;

  /**
   * 获取指定文档块所引用的所有资源文件列表。
   * (Requires authentication)
   * @param params Request parameters (GetDocAssetsParams)
   * @returns Promise<GetDocAssetsResponse> 
   */
  export function getDocAssets(params: GetDocAssetsParams): Promise<GetDocAssetsResponse>;

  /**
   * 获取指定文档块所引用的所有图片类型资源文件列表。
   * (Requires authentication)
   * @param params Request parameters (GetDocImageAssetsParams)
   * @returns Promise<GetDocImageAssetsResponse> 
   */
  export function getDocImageAssets(params: GetDocImageAssetsParams): Promise<GetDocImageAssetsResponse>;

  /**
   * 获取指定资源文件的标注信息（通常是 XFDF 格式的 PDF 标注）。
   * (Requires authentication)
   * @param params Request parameters (GetFileAnnotationParams)
   * @returns Promise<GetFileAnnotationResponse> 
   */
  export function getFileAnnotation(params: GetFileAnnotationParams): Promise<GetFileAnnotationResponse>;

  /**
   * 获取指定图片资源文件后台 OCR 识别的文本内容。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (GetImageOCRTextParams)
   * @returns Promise<GetImageOCRTextResponse> 
   */
  export function getImageOCRText(params: GetImageOCRTextParams): Promise<GetImageOCRTextResponse>;

  /**
   * 获取所有在文档中被引用但实际资源文件已不存在的资源路径列表。
   * (Requires authentication)
   * @returns Promise<GetMissingAssetsResponse> 
   */
  export function getMissingAssets(): Promise<GetMissingAssetsResponse>;

  /**
   * 获取工作空间中存在但未被任何文档引用的资源文件列表（最多返回512条）。
   * (Requires authentication)
   * @returns Promise<GetUnusedAssetsResponse> 
   */
  export function getUnusedAssets(): Promise<GetUnusedAssetsResponse>;

  /**
   * 将指定的本地文件复制到当前笔记本的 assets 文件夹中，并在指定文档中插入对这些资源的引用。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (InsertLocalAssetsParams)
   * @returns Promise<InsertLocalAssetsResponse> 
   */
  export function insertLocalAssets(params: InsertLocalAssetsParams): Promise<InsertLocalAssetsResponse>;

  /**
   * 对指定的图片资源文件执行光学字符识别，并返回识别出的文本及原始 OCR 结果。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (OcrParams)
   * @returns Promise<OcrResponse> 
   */
  export function ocr(params: OcrParams): Promise<OcrResponse>;

  /**
   * 删除工作空间中指定的单个未使用（未被任何文档引用）的资源文件。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RemoveUnusedAssetParams)
   * @returns Promise<RemoveUnusedAssetResponse> 
   */
  export function removeUnusedAsset(params: RemoveUnusedAssetParams): Promise<RemoveUnusedAssetResponse>;

  /**
   * 删除工作空间中所有未被任何文档引用的资源文件。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<RemoveUnusedAssetsResponse> 
   */
  export function removeUnusedAssets(): Promise<RemoveUnusedAssetsResponse>;

  /**
   * 重命名指定的资源文件，并自动更新所有文档中对该资源的引用。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RenameAssetParams)
   * @returns Promise<RenameAssetResponse> 
   */
  export function renameAsset(params: RenameAssetParams): Promise<RenameAssetResponse>;

  /**
   * 将资源文件在思源笔记中的相对路径（如 'assets/image.png'）转换为其在文件系统中的绝对路径。
   * (Requires authentication)
   * @param params Request parameters (ResolveAssetPathParams)
   * @returns Promise<ResolveAssetPathResponse> 
   */
  export function resolveAssetPath(params: ResolveAssetPathParams): Promise<ResolveAssetPathResponse>;

  /**
   * 为指定的资源文件（通常是 PDF）保存或更新其标注信息（通常是 XFDF 格式）。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetFileAnnotationParams)
   * @returns Promise<SetFileAnnotationResponse> 
   */
  export function setFileAnnotation(params: SetFileAnnotationParams): Promise<SetFileAnnotationResponse>;

  /**
   * 手动为指定的图片资源文件设置或更新其 OCR 文本内容，并刷新到数据库。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetImageOCRTextParams)
   * @returns Promise<SetImageOCRTextResponse> 
   */
  export function setImageOCRText(params: SetImageOCRTextParams): Promise<SetImageOCRTextResponse>;

  /**
   * 获取指定资源文件（assets/ 路径）或本地文件（file:/// 路径）的大小、创建及修改时间等元信息。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (StatAssetParams)
   * @returns Promise<StatAssetResponse> 
   */
  export function statAsset(params: StatAssetParams): Promise<StatAssetResponse>;

  /**
   * 处理文件上传。通常用于将文件上传到服务器的临时目录或直接作为资源插入。参数通过 FormData 传递，如 assetPath (可选，指定保存路径) 和 id (可选，关联的文档ID)。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (UploadParams)
   * @returns Promise<UploadResponse> 
   */
  export function Upload(params: UploadParams): Promise<UploadResponse>;

  /**
   * 将指定文档（及其子文档中）引用的所有本地资源文件上传到用户配置的云存储服务。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (UploadCloudParams)
   * @returns Promise<UploadCloudResponse> 
   */
  export function uploadCloud(params: UploadCloudParams): Promise<UploadCloudResponse>;

}

declare module './attrClient' {
  /**
   * 根据提供的块 ID 列表，批量获取这些块的所有自定义属性。
   * (Requires authentication)
   * @param params Request parameters (BatchGetBlockAttrsParams)
   * @returns Promise<BatchGetBlockAttrsResponse> 
   */
  export function batchGetBlockAttrs(params: BatchGetBlockAttrsParams): Promise<BatchGetBlockAttrsResponse>;

  /**
   * 根据提供的块 ID 和对应的属性集，批量为这些块设置自定义属性。如果属性值为 null，则表示删除该属性。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (BatchSetBlockAttrsParams)
   * @returns Promise<BatchSetBlockAttrsResponse> 
   */
  export function batchSetBlockAttrs(params: BatchSetBlockAttrsParams): Promise<BatchSetBlockAttrsResponse>;

  /**
   * 获取指定块 ID 的所有自定义属性。
   * (Requires authentication)
   * @param params Request parameters (GetBlockAttrsParams)
   * @returns Promise<GetBlockAttrsResponse> 
   */
  export function getBlockAttrs(params: GetBlockAttrsParams): Promise<GetBlockAttrsResponse>;

  /**
   * 获取当前工作空间中所有书签使用过的标签列表。
   * (Requires authentication)
   * @returns Promise<GetBookmarkLabelsResponse> 
   */
  export function getBookmarkLabels(): Promise<GetBookmarkLabelsResponse>;

  /**
   * 重置指定块的若干属性。此操作通常用于删除属性，但需要提供属性的当前期望值进行匹配后才会执行。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (ResetBlockAttrsParams)
   * @returns Promise<ResetBlockAttrsResponse> 
   */
  export function resetBlockAttrs(params: ResetBlockAttrsParams): Promise<ResetBlockAttrsResponse>;

  /**
   * 为指定的单个块设置自定义属性。如果属性值为 null，则表示删除该属性。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetBlockAttrsParams)
   * @returns Promise<SetBlockAttrsResponse> 
   */
  export function setBlockAttrs(params: SetBlockAttrsParams): Promise<SetBlockAttrsResponse>;

}

declare module './avClient' {
  /**
   * 向指定的属性视图中添加一个或多个数据块。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (AddAttributeViewBlocksParams)
   * @returns Promise<AddAttributeViewBlocksResponse> 
   */
  export function addAttributeViewBlocks(params: AddAttributeViewBlocksParams): Promise<AddAttributeViewBlocksResponse>;

  /**
   * 向指定的属性视图添加一个新的列定义。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (AddAttributeViewKeyParams)
   * @returns Promise<AddAttributeViewKeyResponse> 
   */
  export function addAttributeViewKey(params: AddAttributeViewKeyParams): Promise<AddAttributeViewKeyResponse>;

  /**
   * 向属性视图追加多个新的独立块，并为这些块设置初始值。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (AppendAttributeViewDetachedBlocksWithValuesParams)
   * @returns Promise<AppendAttributeViewDetachedBlocksWithValuesResponse> 
   */
  export function appendAttributeViewDetachedBlocksWithValues(params: AppendAttributeViewDetachedBlocksWithValuesParams): Promise<AppendAttributeViewDetachedBlocksWithValuesResponse>;

  /**
   * 复制一个属性视图块（数据库块）。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (DuplicateAttributeViewBlockParams)
   * @returns Promise<DuplicateAttributeViewBlockResponse> 
   */
  export function duplicateAttributeViewBlock(params: DuplicateAttributeViewBlockParams): Promise<DuplicateAttributeViewBlockResponse>;

  /**
   * 获取指定ID的属性视图的详细信息。
   * (Requires authentication, Unavailable in read-only mode)
   * @param params Request parameters (GetAttributeViewParams)
   * @returns Promise<GetAttributeViewResponse> 
   */
  export function getAttributeView(params: GetAttributeViewParams): Promise<GetAttributeViewResponse>;

  /**
   * 获取指定属性视图（或其关联块）的筛选条件和排序规则。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (GetAttributeViewFilterSortParams)
   * @returns Promise<GetAttributeViewFilterSortResponse> 
   */
  export function getAttributeViewFilterSort(params: GetAttributeViewFilterSortParams): Promise<GetAttributeViewFilterSortResponse>;

  /**
   * 获取指定属性视图ID的所有列定义 (keys)。
   * (Requires authentication)
   * @param params Request parameters (GetAttributeViewKeysParams)
   * @returns Promise<GetAttributeViewKeysResponse> 
   */
  export function getAttributeViewKeys(params: GetAttributeViewKeysParams): Promise<GetAttributeViewKeysResponse>;

  /**
   * 通过属性视图ID获取其所有列定义 (keys)。(此接口功能上可能与 getAttributeViewKeys 重复，需确认)
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (GetAttributeViewKeysByAvIDParams)
   * @returns Promise<GetAttributeViewKeysByAvIDResponse> 
   */
  export function getAttributeViewKeysByAvID(params: GetAttributeViewKeysByAvIDParams): Promise<GetAttributeViewKeysByAvIDResponse>;

  /**
   * 获取指定属性视图的主键列的值，支持分页和关键词搜索。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (GetAttributeViewPrimaryKeyValuesParams)
   * @returns Promise<GetAttributeViewPrimaryKeyValuesResponse> 
   */
  export function getAttributeViewPrimaryKeyValues(params: GetAttributeViewPrimaryKeyValuesParams): Promise<GetAttributeViewPrimaryKeyValuesResponse>;

  /**
   * 获取指定属性视图ID的镜像数据库块ID列表。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (GetMirrorDatabaseBlocksParams)
   * @returns Promise<GetMirrorDatabaseBlocksResponse> 
   */
  export function getMirrorDatabaseBlocks(params: GetMirrorDatabaseBlocksParams): Promise<GetMirrorDatabaseBlocksResponse>;

  /**
   * 从指定的属性视图中移除一个或多个数据块。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RemoveAttributeViewBlocksParams)
   * @returns Promise<RemoveAttributeViewBlocksResponse> 
   */
  export function removeAttributeViewBlocks(params: RemoveAttributeViewBlocksParams): Promise<RemoveAttributeViewBlocksResponse>;

  /**
   * 从指定的属性视图移除一个列定义。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RemoveAttributeViewKeyParams)
   * @returns Promise<RemoveAttributeViewKeyResponse> 
   */
  export function removeAttributeViewKey(params: RemoveAttributeViewKeyParams): Promise<RemoveAttributeViewKeyResponse>;

  /**
   * 渲染属性视图，获取其名称、视图类型、视图ID、所有视图、当前视图详情以及是否为镜像等信息。
   * (Requires authentication)
   * @param params Request parameters (RenderAttributeViewParams)
   * @returns Promise<RenderAttributeViewResponse> 
   */
  export function renderAttributeView(params: RenderAttributeViewParams): Promise<RenderAttributeViewResponse>;

  /**
   * 渲染指定历史版本的属性视图。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (RenderHistoryAttributeViewParams)
   * @returns Promise<RenderHistoryAttributeViewResponse> 
   */
  export function renderHistoryAttributeView(params: RenderHistoryAttributeViewParams): Promise<RenderHistoryAttributeViewResponse>;

  /**
   * 渲染指定快照索引的属性视图。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (RenderSnapshotAttributeViewParams)
   * @returns Promise<RenderSnapshotAttributeViewResponse> 
   */
  export function renderSnapshotAttributeView(params: RenderSnapshotAttributeViewParams): Promise<RenderSnapshotAttributeViewResponse>;

  /**
   * 根据关键词搜索属性视图，可排除指定ID。
   * (Requires authentication, Unavailable in read-only mode)
   * @param params Request parameters (SearchAttributeViewParams)
   * @returns Promise<SearchAttributeViewResponse> 
   */
  export function searchAttributeView(params: SearchAttributeViewParams): Promise<SearchAttributeViewResponse>;

  /**
   * 根据关键词搜索指定属性视图的非关联列 (Non-relation Key)。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SearchAttributeViewNonRelationKeyParams)
   * @returns Promise<SearchAttributeViewNonRelationKeyResponse> 
   */
  export function searchAttributeViewNonRelationKey(params: SearchAttributeViewNonRelationKeyParams): Promise<SearchAttributeViewNonRelationKeyResponse>;

  /**
   * 根据关键词搜索指定属性视图的关联列 (Relation Key)。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SearchAttributeViewRelationKeyParams)
   * @returns Promise<SearchAttributeViewRelationKeyResponse> 
   */
  export function searchAttributeViewRelationKey(params: SearchAttributeViewRelationKeyParams): Promise<SearchAttributeViewRelationKeyResponse>;

  /**
   * 更新属性视图中指定行（块ID）、指定列（KeyID）的单元格的值。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetAttributeViewBlockAttrParams)
   * @returns Promise<SetAttributeViewBlockAttrResponse> 
   */
  export function setAttributeViewBlockAttr(params: SetAttributeViewBlockAttrParams): Promise<SetAttributeViewBlockAttrResponse>;

  /**
   * 设置指定数据库块（属性视图块）的默认视图ID。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetDatabaseBlockViewParams)
   * @returns Promise<SetDatabaseBlockViewResponse> 
   */
  export function setDatabaseBlockView(params: SetDatabaseBlockViewParams): Promise<SetDatabaseBlockViewResponse>;

  /**
   * 对属性视图的列进行排序。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SortAttributeViewKeyParams)
   * @returns Promise<SortAttributeViewKeyResponse> 
   */
  export function sortAttributeViewKey(params: SortAttributeViewKeyParams): Promise<SortAttributeViewKeyResponse>;

  /**
   * 对属性视图中某个特定视图（如图表、看板等）的列进行排序。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SortAttributeViewViewKeyParams)
   * @returns Promise<SortAttributeViewViewKeyResponse> 
   */
  export function sortAttributeViewViewKey(params: SortAttributeViewViewKeyParams): Promise<SortAttributeViewViewKeyResponse>;

}

declare module './bazaarClient' {
  /**
   * 根据指定的客户端类型（如 'frontend'）批量更新思源笔记本地缓存的集市包信息。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (BatchUpdatePackageParams)
   * @returns Promise<BatchUpdatePackageResponse> 
   */
  export function batchUpdatePackage(params: BatchUpdatePackageParams): Promise<BatchUpdatePackageResponse>;

  /**
   * 从集市获取所有可用的图标包列表，支持关键词筛选。
   * (Requires authentication)
   * @param params Request parameters (GetBazaarIconParams)
   * @returns Promise<GetBazaarIconResponse> 
   */
  export function getBazaarIcon(params: GetBazaarIconParams): Promise<GetBazaarIconResponse>;

  /**
   * 获取指定集市包（通过仓库URL、哈希和类型指定）的 README 文件内容 (HTML格式)。
   * (Requires authentication)
   * @param params Request parameters (GetBazaarPackageREAMEParams)
   * @returns Promise<GetBazaarPackageREAMEResponse> 
   */
  export function getBazaarPackageREAME(params: GetBazaarPackageREAMEParams): Promise<GetBazaarPackageREAMEResponse>;

  /**
   * 从集市获取所有可用的插件列表，支持按前端类型和关键词筛选。
   * (Requires authentication)
   * @param params Request parameters (GetBazaarPluginParams)
   * @returns Promise<GetBazaarPluginResponse> 
   */
  export function getBazaarPlugin(params: GetBazaarPluginParams): Promise<GetBazaarPluginResponse>;

  /**
   * 从集市获取所有可用的模板列表，支持关键词筛选。
   * (Requires authentication)
   * @param params Request parameters (GetBazaarTemplateParams)
   * @returns Promise<GetBazaarTemplateResponse> 
   */
  export function getBazaarTemplate(params: GetBazaarTemplateParams): Promise<GetBazaarTemplateResponse>;

  /**
   * 从集市获取所有可用的主题列表，支持关键词筛选。
   * (Requires authentication)
   * @param params Request parameters (GetBazaarThemeParams)
   * @returns Promise<GetBazaarThemeResponse> 
   */
  export function getBazaarTheme(params: GetBazaarThemeParams): Promise<GetBazaarThemeResponse>;

  /**
   * 从集市获取所有可用的挂件列表，支持关键词筛选。
   * (Requires authentication)
   * @param params Request parameters (GetBazaarWidgetParams)
   * @returns Promise<GetBazaarWidgetResponse> 
   */
  export function getBazaarWidget(params: GetBazaarWidgetParams): Promise<GetBazaarWidgetResponse>;

  /**
   * 获取本地已安装的图标包列表，支持关键词筛选。
   * (Requires authentication)
   * @param params Request parameters (GetInstalledIconParams)
   * @returns Promise<GetInstalledIconResponse> 
   */
  export function getInstalledIcon(params: GetInstalledIconParams): Promise<GetInstalledIconResponse>;

  /**
   * 获取本地已安装的插件列表，支持按前端类型和关键词筛选。
   * (Requires authentication)
   * @param params Request parameters (GetInstalledPluginParams)
   * @returns Promise<GetInstalledPluginResponse> 
   */
  export function getInstalledPlugin(params: GetInstalledPluginParams): Promise<GetInstalledPluginResponse>;

  /**
   * 获取本地已安装的模板列表，支持关键词筛选。
   * (Requires authentication)
   * @param params Request parameters (GetInstalledTemplateParams)
   * @returns Promise<GetInstalledTemplateResponse> 
   */
  export function getInstalledTemplate(params: GetInstalledTemplateParams): Promise<GetInstalledTemplateResponse>;

  /**
   * 获取本地已安装的主题列表，支持关键词筛选。
   * (Requires authentication)
   * @param params Request parameters (GetInstalledThemeParams)
   * @returns Promise<GetInstalledThemeResponse> 
   */
  export function getInstalledTheme(params: GetInstalledThemeParams): Promise<GetInstalledThemeResponse>;

  /**
   * 获取本地已安装的挂件列表，支持关键词筛选。
   * (Requires authentication)
   * @param params Request parameters (GetInstalledWidgetParams)
   * @returns Promise<GetInstalledWidgetResponse> 
   */
  export function getInstalledWidget(params: GetInstalledWidgetParams): Promise<GetInstalledWidgetResponse>;

  /**
   * 检查并返回所有已安装且存在更新的集市包（插件、挂件、图标、主题、模板）。
   * (Requires authentication)
   * @param params Request parameters (GetUpdatedPackageParams)
   * @returns Promise<GetUpdatedPackageResponse> 
   */
  export function getUpdatedPackage(params: GetUpdatedPackageParams): Promise<GetUpdatedPackageResponse>;

  /**
   * 从集市安装指定的图标包。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (InstallBazaarIconParams)
   * @returns Promise<InstallBazaarIconResponse> 
   */
  export function installBazaarIcon(params: InstallBazaarIconParams): Promise<InstallBazaarIconResponse>;

  /**
   * 从集市安装指定的插件。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (InstallBazaarPluginParams)
   * @returns Promise<InstallBazaarPluginResponse> 
   */
  export function installBazaarPlugin(params: InstallBazaarPluginParams): Promise<InstallBazaarPluginResponse>;

  /**
   * 从集市安装指定的模板。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (InstallBazaarTemplateParams)
   * @returns Promise<InstallBazaarTemplateResponse> 
   */
  export function installBazaarTemplate(params: InstallBazaarTemplateParams): Promise<InstallBazaarTemplateResponse>;

  /**
   * 从集市安装指定的主题，并可指定主题模式 (mode) 和是否为更新 (update)。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (InstallBazaarThemeParams)
   * @returns Promise<InstallBazaarThemeResponse> 
   */
  export function installBazaarTheme(params: InstallBazaarThemeParams): Promise<InstallBazaarThemeResponse>;

  /**
   * 从集市安装指定的挂件。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (InstallBazaarWidgetParams)
   * @returns Promise<InstallBazaarWidgetResponse> 
   */
  export function installBazaarWidget(params: InstallBazaarWidgetParams): Promise<InstallBazaarWidgetResponse>;

  /**
   * 卸载本地已安装的指定图标包。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (UninstallBazaarIconParams)
   * @returns Promise<UninstallBazaarIconResponse> 
   */
  export function uninstallBazaarIcon(params: UninstallBazaarIconParams): Promise<UninstallBazaarIconResponse>;

  /**
   * 卸载本地已安装的指定插件。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (UninstallBazaarPluginParams)
   * @returns Promise<UninstallBazaarPluginResponse> 
   */
  export function uninstallBazaarPlugin(params: UninstallBazaarPluginParams): Promise<UninstallBazaarPluginResponse>;

  /**
   * 卸载本地已安装的指定模板。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (UninstallBazaarTemplateParams)
   * @returns Promise<UninstallBazaarTemplateResponse> 
   */
  export function uninstallBazaarTemplate(params: UninstallBazaarTemplateParams): Promise<UninstallBazaarTemplateResponse>;

  /**
   * 卸载本地已安装的指定主题。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (UninstallBazaarThemeParams)
   * @returns Promise<UninstallBazaarThemeResponse> 
   */
  export function uninstallBazaarTheme(params: UninstallBazaarThemeParams): Promise<UninstallBazaarThemeResponse>;

  /**
   * 卸载本地已安装的指定挂件。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (UninstallBazaarWidgetParams)
   * @returns Promise<UninstallBazaarWidgetResponse> 
   */
  export function uninstallBazaarWidget(params: UninstallBazaarWidgetParams): Promise<UninstallBazaarWidgetResponse>;

}

declare module './blockClient' {
  /**
   * 在指定父块的末尾插入新的子块。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (AppendBlockParams)
   * @returns Promise<AppendBlockResponse> 
   */
  export function appendBlock(params: AppendBlockParams): Promise<AppendBlockResponse>;

  /**
   * 向指定笔记本的当日日记文档末尾追加新的内容块。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (AppendDailyNoteBlockParams)
   * @returns Promise<AppendDailyNoteBlockResponse> 
   */
  export function appendDailyNoteBlock(params: AppendDailyNoteBlockParams): Promise<AppendDailyNoteBlockResponse>;

  /**
   * 批量更新多个块的内容。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (BatchUpdateBlockParams)
   * @returns Promise<BatchUpdateBlockResponse> 
   */
  export function batchUpdateBlock(params: BatchUpdateBlockParams): Promise<BatchUpdateBlockResponse>;

  /**
   * 检查指定的块ID是否存在。
   * (Requires authentication)
   * @param params Request parameters (CheckBlockExistParams)
   * @returns Promise<CheckBlockExistResponse> 
   */
  export function checkBlockExist(params: CheckBlockExistParams): Promise<CheckBlockExistResponse>;

  /**
   * 检查指定的块ID是否已折叠，并返回其是否为根块。
   * (Requires authentication)
   * @param params Request parameters (CheckBlockFoldParams)
   * @returns Promise<CheckBlockFoldResponse> 
   */
  export function checkBlockFold(params: CheckBlockFoldParams): Promise<CheckBlockFoldResponse>;

  /**
   * 检查一批块ID的引用状态（例如，是否被其他块引用，是否定义了其他块等）。
   * (Requires authentication)
   * @param params Request parameters (CheckBlockRefParams)
   * @returns Promise<CheckBlockRefResponse> 
   */
  export function checkBlockRef(params: CheckBlockRefParams): Promise<CheckBlockRefResponse>;

  /**
   * 删除指定的块ID。此操作通过事务完成。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (DeleteBlockParams)
   * @returns Promise<DeleteBlockResponse> 
   */
  export function deleteBlock(params: DeleteBlockParams): Promise<DeleteBlockResponse>;

  /**
   * 折叠指定的块ID。对于标题块，执行 foldHeading 操作；对于其他类型的块，设置其 fold 属性。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (FoldBlockParams)
   * @returns Promise<FoldBlockResponse> 
   */
  export function foldBlock(params: FoldBlockParams): Promise<FoldBlockResponse>;

  /**
   * 获取指定块ID到其根块（通常是文档块）的面包屑路径，可以排除特定类型的块。
   * (Requires authentication)
   * @param params Request parameters (GetBlockBreadcrumbParams)
   * @returns Promise<GetBlockBreadcrumbResponse> 
   */
  export function getBlockBreadcrumb(params: GetBlockBreadcrumbParams): Promise<GetBlockBreadcrumbResponse>;

  /**
   * 获取指定块ID的DOM表示（HTML字符串）。
   * (Requires authentication)
   * @param params Request parameters (GetBlockDOMParams)
   * @returns Promise<GetBlockDOMResponse> 
   */
  export function getBlockDOM(params: GetBlockDOMParams): Promise<GetBlockDOMResponse>;

  /**
   * 根据引用文本（锚文本）搜索并返回其可能指向的块定义ID列表。
   * (Requires authentication)
   * @param params Request parameters (GetBlockDefIDsByRefTextParams)
   * @returns Promise<GetBlockDefIDsByRefTextResponse> 
   */
  export function getBlockDefIDsByRefText(params: GetBlockDefIDsByRefTextParams): Promise<GetBlockDefIDsByRefTextResponse>;

  /**
   * 获取指定块ID在其父级块的子块列表中的位置索引（从0开始）。
   * (Requires authentication)
   * @param params Request parameters (GetBlockIndexParams)
   * @returns Promise<GetBlockIndexResponse> 
   */
  export function getBlockIndex(params: GetBlockIndexParams): Promise<GetBlockIndexResponse>;

  /**
   * 获取指定块ID的详细信息，包括其所在的笔记本ID(box)、路径(path)、根块ID(rootID)、根块标题(rootTitle)、根块图标(rootIcon)以及其在根块下的直接子块ID(rootChildID)。
   * (Requires authentication)
   * @param params Request parameters (GetBlockInfoParams)
   * @returns Promise<GetBlockInfoResponse> 
   */
  export function getBlockInfo(params: GetBlockInfoParams): Promise<GetBlockInfoResponse>;

  /**
   * 获取指定块ID的Kramdown源码表示。可选模式：'md'（Markdown标记符模式，默认）或 'textmark'（文本标记模式，使用span标签）。
   * (Requires authentication)
   * @param params Request parameters (GetBlockKramdownParams)
   * @returns Promise<GetBlockKramdownResponse> 
   */
  export function getBlockKramdown(params: GetBlockKramdownParams): Promise<GetBlockKramdownResponse>;

  /**
   * 获取指定块ID的父块ID、上一个同级块ID和下一个同级块ID。
   * (Requires authentication)
   * @param params Request parameters (GetBlockSiblingIDParams)
   * @returns Promise<GetBlockSiblingIDResponse> 
   */
  export function getBlockSiblingID(params: GetBlockSiblingIDParams): Promise<GetBlockSiblingIDResponse>;

  /**
   * 批量获取指定块ID列表对应的块树（BlockTree）信息。
   * (Requires authentication)
   * @param params Request parameters (GetBlockTreeInfosParams)
   * @returns Promise<GetBlockTreeInfosResponse> 
   */
  export function getBlockTreeInfos(params: GetBlockTreeInfosParams): Promise<GetBlockTreeInfosResponse>;

  /**
   * 批量获取指定块ID列表各自在其父级块的子块列表中的位置索引。
   * (Requires authentication)
   * @param params Request parameters (GetBlocksIndexesParams)
   * @returns Promise<GetBlocksIndexesResponse> 
   */
  export function getBlocksIndexes(params: GetBlocksIndexesParams): Promise<GetBlocksIndexesResponse>;

  /**
   * 获取指定块ID列表的总字数、字符数和链接数统计信息。
   * (Requires authentication)
   * @param params Request parameters (GetBlocksWordCountParams)
   * @returns Promise<GetBlocksWordCountResponse> 
   */
  export function getBlocksWordCount(params: GetBlocksWordCountParams): Promise<GetBlocksWordCountResponse>;

  /**
   * 获取指定块ID的所有直接子块的基本信息列表（仅包含ID和类型）。
   * (Requires authentication)
   * @param params Request parameters (GetChildBlocksParams)
   * @returns Promise<GetChildBlocksResponse> 
   */
  export function getChildBlocks(params: GetChildBlocksParams): Promise<GetChildBlocksResponse>;

  /**
   * 获取给定内容字符串的字数、字符数和链接数统计信息。
   * (Requires authentication)
   * @param params Request parameters (GetContentWordCountParams)
   * @returns Promise<GetContentWordCountResponse> 
   */
  export function getContentWordCount(params: GetContentWordCountParams): Promise<GetContentWordCountResponse>;

  /**
   * 提取给定DOM字符串中的纯文本内容。
   * (Requires authentication)
   * @param params Request parameters (GetDOMTextParams)
   * @returns Promise<GetDOMTextResponse> 
   */
  export function getDOMText(params: GetDOMTextParams): Promise<GetDOMTextResponse>;

  /**
   * 获取指定文档块ID的信息，包括其内容（DOM）、标题、图标、面包屑路径和是否为模板。
   * (Requires authentication)
   * @param params Request parameters (GetDocInfoParams)
   * @returns Promise<GetDocInfoResponse> 
   */
  export function getDocInfo(params: GetDocInfoParams): Promise<GetDocInfoResponse>;

  /**
   * 批量获取多个指定文档块ID的信息。
   * (Requires authentication)
   * @param params Request parameters (GetDocsInfoParams)
   * @returns Promise<GetDocsInfoResponse> 
   */
  export function getDocsInfo(params: GetDocsInfoParams): Promise<GetDocsInfoResponse>;

  /**
   * 获取指定标题块ID下的所有子孙块的DOM内容。
   * (Requires authentication)
   * @param params Request parameters (GetHeadingChildrenDOMParams)
   * @returns Promise<GetHeadingChildrenDOMResponse> 
   */
  export function getHeadingChildrenDOM(params: GetHeadingChildrenDOMParams): Promise<GetHeadingChildrenDOMResponse>;

  /**
   * 获取指定标题块ID下的所有子孙块的ID列表。
   * (Requires authentication)
   * @param params Request parameters (GetHeadingChildrenIDsParams)
   * @returns Promise<GetHeadingChildrenIDsResponse> 
   */
  export function getHeadingChildrenIDs(params: GetHeadingChildrenIDsParams): Promise<GetHeadingChildrenIDsResponse>;

  /**
   * 获取删除指定标题块（及其所有子孙块）所需的事务操作列表。此接口仅返回事务，不实际执行删除。
   * (Requires authentication)
   * @param params Request parameters (GetHeadingDeleteTransactionParams)
   * @returns Promise<GetHeadingDeleteTransactionResponse> 
   */
  export function getHeadingDeleteTransaction(params: GetHeadingDeleteTransactionParams): Promise<GetHeadingDeleteTransactionResponse>;

  /**
   * 获取调整指定标题块级别所需的事务操作列表。此接口仅返回事务，不实际执行调整。
   * (Requires authentication)
   * @param params Request parameters (GetHeadingLevelTransactionParams)
   * @returns Promise<GetHeadingLevelTransactionResponse> 
   */
  export function getHeadingLevelTransaction(params: GetHeadingLevelTransactionParams): Promise<GetHeadingLevelTransactionResponse>;

  /**
   * 获取最近更新的块列表，按更新时间倒序排列。
   * (Requires authentication)
   * @returns Promise<GetRecentUpdatedBlocksResponse> 
   */
  export function getRecentUpdatedBlocks(): Promise<GetRecentUpdatedBlocksResponse>;

  /**
   * 获取指定块ID所引用的所有定义块的ID列表。
   * (Requires authentication)
   * @param params Request parameters (GetRefIDsParams)
   * @returns Promise<GetRefIDsResponse> 
   */
  export function getRefIDs(params: GetRefIDsParams): Promise<GetRefIDsResponse>;

  /**
   * 根据文件注解块的ID，查找与该注解相关的引用块ID和定义块ID。
   * (Requires authentication)
   * @param params Request parameters (GetRefIDsByFileAnnotationIDParams)
   * @returns Promise<GetRefIDsByFileAnnotationIDResponse> 
   */
  export function getRefIDsByFileAnnotationID(params: GetRefIDsByFileAnnotationIDParams): Promise<GetRefIDsByFileAnnotationIDResponse>;

  /**
   * 获取指定引用块ID的锚文本内容。
   * (Requires authentication)
   * @param params Request parameters (GetRefTextParams)
   * @returns Promise<GetRefTextResponse> 
   */
  export function getRefText(params: GetRefTextParams): Promise<GetRefTextResponse>;

  /**
   * 获取指定块ID的尾部（最后）指定数量的直接子块的基本信息。
   * (Requires authentication)
   * @param params Request parameters (GetTailChildBlocksParams)
   * @returns Promise<GetTailChildBlocksResponse> 
   */
  export function getTailChildBlocks(params: GetTailChildBlocksParams): Promise<GetTailChildBlocksResponse>;

  /**
   * 获取指定块ID（通常是文档块）的树结构统计信息，如各种类型子块的数量等。
   * (Requires authentication)
   * @param params Request parameters (GetTreeStatParams)
   * @returns Promise<GetTreeStatResponse> 
   */
  export function getTreeStat(params: GetTreeStatParams): Promise<GetTreeStatResponse>;

  /**
   * 向上查找指定块ID的父块链，返回最近的一个已展开（未折叠）的父块ID。
   * (Requires authentication)
   * @param params Request parameters (GetUnfoldedParentIDParams)
   * @returns Promise<GetUnfoldedParentIDResponse> 
   */
  export function getUnfoldedParentID(params: GetUnfoldedParentIDParams): Promise<GetUnfoldedParentIDResponse>;

  /**
   * 在指定的锚点块（anchorID）之前或之后插入新的内容块。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (InsertBlockParams)
   * @returns Promise<InsertBlockResponse> 
   */
  export function insertBlock(params: InsertBlockParams): Promise<InsertBlockResponse>;

  /**
   * 在指定父块的开头插入新的子块。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (PrependBlockParams)
   * @returns Promise<PrependBlockResponse> 
   */
  export function prependBlock(params: PrependBlockParams): Promise<PrependBlockResponse>;

  /**
   * 为指定的块ID设置一个提醒时间。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetBlockReminderParams)
   * @returns Promise<SetBlockReminderResponse> 
   */
  export function setBlockReminder(params: SetBlockReminderParams): Promise<SetBlockReminderResponse>;

  /**
   * 交换指定的引用块和其指向的定义块的角色。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SwapBlockRefParams)
   * @returns Promise<SwapBlockRefResponse> 
   */
  export function swapBlockRef(params: SwapBlockRefParams): Promise<SwapBlockRefResponse>;

  /**
   * 将原块（fromID）的所有引用关系（或指定的引用关系 refIDs）转移到目标块（toID）。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (TransferBlockRefParams)
   * @returns Promise<TransferBlockRefResponse> 
   */
  export function transferBlockRef(params: TransferBlockRefParams): Promise<TransferBlockRefResponse>;

  /**
   * 展开指定的块ID。对于标题块，执行 unfoldHeading 操作；对于其他类型的块，设置其 fold 属性为 false。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (UnfoldBlockParams)
   * @returns Promise<UnfoldBlockResponse> 
   */
  export function unfoldBlock(params: UnfoldBlockParams): Promise<UnfoldBlockResponse>;

  /**
   * 更新指定块ID的内容。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (UpdateBlockParams)
   * @returns Promise<UpdateBlockResponse> 
   */
  export function updateBlock(params: UpdateBlockParams): Promise<UpdateBlockResponse>;

  /**
   * 在指定笔记本的当日日记文档开头追加新的内容块。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (PrependDailyNoteBlockParams)
   * @returns Promise<PrependDailyNoteBlockResponse> 
   */
  export function prependDailyNoteBlock(params: PrependDailyNoteBlockParams): Promise<PrependDailyNoteBlockResponse>;

  /**
   * 将指定的块移动到新的父块下或同级块的特定位置。移动后会触发相关文档编辑器的重载。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (MoveBlockParams)
   * @returns Promise<MoveBlockResponse> 
   */
  export function moveBlock(params: MoveBlockParams): Promise<MoveBlockResponse>;

  /**
   * 移动大纲中的标题块到新的父级或同级位置。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (MoveOutlineHeadingParams)
   * @returns Promise<MoveOutlineHeadingResponse> 
   */
  export function moveOutlineHeading(params: MoveOutlineHeadingParams): Promise<MoveOutlineHeadingResponse>;

}

declare module './bookmarkClient' {
  /**
   * 构建并返回当前工作空间的所有书签列表。书签是为块设置的特定名称，方便快速访问。
   * (Requires authentication)
   * @returns Promise<GetBookmarkResponse> 
   */
  export function getBookmark(): Promise<GetBookmarkResponse>;

  /**
   * 根据书签名称（即块的 IAL 中 bookmark 属性的值）移除一个或多个书签。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RemoveBookmarkParams)
   * @returns Promise<RemoveBookmarkResponse> 
   */
  export function removeBookmark(params: RemoveBookmarkParams): Promise<RemoveBookmarkResponse>;

  /**
   * 将具有特定旧书签名称（块 IAL 中 bookmark 属性的旧值）的所有书签重命名为一个新的书签名称。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RenameBookmarkParams)
   * @returns Promise<RenameBookmarkResponse> 
   */
  export function renameBookmark(params: RenameBookmarkParams): Promise<RenameBookmarkResponse>;

}

declare module './broadcastClient' {
  /**
   * 获取指定名称的广播频道的详细信息，如订阅者数量。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (GetChannelInfoParams)
   * @returns Promise<GetChannelInfoResponse> 
   */
  export function getChannelInfo(params: GetChannelInfoParams): Promise<GetChannelInfoResponse>;

  /**
   * 获取当前所有活跃的广播频道及其订阅者数量的列表。
   * (Requires authentication, Requires admin role)
   * @returns Promise<GetChannelsResponse> 
   */
  export function getChannels(): Promise<GetChannelsResponse>;

  /**
   * 向指定的广播频道发送文本消息。也可以用于发送特定命令 (cmd)。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (PostMessageParams)
   * @returns Promise<PostMessageResponse> 
   */
  export function postMessage(params: PostMessageParams): Promise<PostMessageResponse>;

  /**
   * 向指定的广播频道发布消息。可以是文本消息，也可以通过上传文件发布二进制消息。请求体应为 multipart/form-data。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (BroadcastPublishParams)
   * @returns Promise<BroadcastPublishResponse> 
   */
  export function broadcastPublish(params: BroadcastPublishParams): Promise<BroadcastPublishResponse>;

}

declare module './clipboardClient' {
  /**
   * 从系统剪贴板中读取文件路径列表。注意：在 Linux 上此功能可能受限或不可用。
   * (Requires authentication, Requires admin role)
   * @returns Promise<ReadFilePathsResponse> 
   */
  export function readFilePaths(): Promise<ReadFilePathsResponse>;

}

declare module './cloudClient' {
  /**
   * 获取用户的云端存储空间使用情况、流量消耗以及同步和备份状态等信息。
   * (Requires authentication, Requires admin role)
   * @returns Promise<GetCloudSpaceResponse> 
   */
  export function getCloudSpace(): Promise<GetCloudSpaceResponse>;

}

declare module './convertClient' {
  /**
   * 调用系统安装的 Pandoc 工具进行文档格式转换。需要提供 Pandoc 命令行参数。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (PandocParams)
   * @returns Promise<PandocResponse> 
   */
  export function pandoc(params: PandocParams): Promise<PandocResponse>;

}

declare module './exportClient' {
  /**
   * 将指定的文档内容导出到链滴社区。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (Export2LiandiParams)
   * @returns Promise<Export2LiandiResponse> 
   */
  export function export2Liandi(params: Export2LiandiParams): Promise<Export2LiandiResponse>;

  /**
   * 接收上传的文件，将其保存到临时导出目录，并返回处理后的文件名及可访问路径。通常用于'另存为'等场景。文件通过 FormData 的 'file' 字段上传。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ExportAsFileParams)
   * @returns Promise<ExportAsFileResponse> 
   */
  export function exportAsFile(params: ExportAsFileParams): Promise<ExportAsFileResponse>;

  /**
   * 将指定的文档导出为 AsciiDoc 格式的压缩文件。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ExportAsciiDocParams)
   * @returns Promise<ExportAsciiDocResponse> 
   */
  export function exportAsciiDoc(params: ExportAsciiDocParams): Promise<ExportAsciiDocResponse>;

  /**
   * 将指定的属性视图导出为 CSV 压缩文件。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ExportAttributeViewParams)
   * @returns Promise<ExportAttributeViewResponse> 
   */
  export function exportAttributeView(params: ExportAttributeViewParams): Promise<ExportAttributeViewResponse>;

  /**
   * 导出当前工作空间的全部数据为一个 .zip 压缩文件。
   * (Requires authentication, Requires admin role)
   * @returns Promise<ExportDataResponse> 
   */
  export function exportData(): Promise<ExportDataResponse>;

  /**
   * 导出指定文件夹内的所有数据为一个压缩包。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ExportDataInFolderParams)
   * @returns Promise<ExportDataInFolderResponse> 
   */
  export function exportDataInFolder(params: ExportDataInFolderParams): Promise<ExportDataInFolderResponse>;

  /**
   * 将指定的文档导出为 DOCX (.docx) 文件。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ExportDocxParams)
   * @returns Promise<ExportDocxResponse> 
   */
  export function exportDocx(params: ExportDocxParams): Promise<ExportDocxResponse>;

  /**
   * 将指定的文档导出为 EPUB 格式的压缩文件。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ExportEPUBParams)
   * @returns Promise<ExportEPUBResponse> 
   */
  export function exportEPUB(params: ExportEPUBParams): Promise<ExportEPUBResponse>;

  /**
   * 将指定文档导出为标准的、包含完整思源主题样式和脚本的 HTML 内容，通常用于生成可独立浏览的 HTML 文件或作为导出 PDF 的中间步骤。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ExportHTMLParams)
   * @returns Promise<ExportHTMLResponse> 
   */
  export function exportHTML(params: ExportHTMLParams): Promise<ExportHTMLResponse>;

  /**
   * 将指定的单个文档导出为 Markdown 文件，并打包成一个 .zip 压缩文件。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ExportMdParams)
   * @returns Promise<ExportMdResponse> 
   */
  export function exportMd(params: ExportMdParams): Promise<ExportMdResponse>;

  /**
   * 获取指定文档的 Markdown 文本内容，可自定义块引用和嵌入块的处理方式以及是否包含 YAML Front Matter。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ExportMdContentParams)
   * @returns Promise<ExportMdContentResponse> 
   */
  export function exportMdContent(params: ExportMdContentParams): Promise<ExportMdContentResponse>;

  /**
   * 获取指定文档渲染后的纯 HTML 内容（不包含完整主题样式和脚本，主要用于内容嵌入）。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ExportMdHTMLParams)
   * @returns Promise<ExportMdHTMLResponse> 
   */
  export function exportMdHTML(params: ExportMdHTMLParams): Promise<ExportMdHTMLResponse>;

  /**
   * 将指定的多个文档分别导出为 Markdown 文件，并打包成一个 .zip 压缩文件。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ExportMdsParams)
   * @returns Promise<ExportMdsResponse> 
   */
  export function exportMds(params: ExportMdsParams): Promise<ExportMdsResponse>;

  /**
   * 将指定的文档导出为 MediaWiki 格式的压缩文件。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ExportMediaWikiParams)
   * @returns Promise<ExportMediaWikiResponse> 
   */
  export function exportMediaWiki(params: ExportMediaWikiParams): Promise<ExportMediaWikiResponse>;

  /**
   * 将指定的笔记本导出为 Markdown 格式的 .zip 压缩文件。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ExportNotebookMdParams)
   * @returns Promise<ExportNotebookMdResponse> 
   */
  export function exportNotebookMd(params: ExportNotebookMdParams): Promise<ExportNotebookMdResponse>;

  /**
   * 将指定的笔记本导出为思源原生 .sy 格式的压缩包。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ExportNotebookSYParams)
   * @returns Promise<ExportNotebookSYResponse> 
   */
  export function exportNotebookSY(params: ExportNotebookSYParams): Promise<ExportNotebookSYResponse>;

  /**
   * 将指定的文档导出为 ODT 格式的压缩文件。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ExportODTParams)
   * @returns Promise<ExportODTResponse> 
   */
  export function exportODT(params: ExportODTParams): Promise<ExportODTResponse>;

  /**
   * 将指定的文档导出为 OPML 格式的压缩文件。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ExportOPMLParams)
   * @returns Promise<ExportOPMLResponse> 
   */
  export function exportOPML(params: ExportOPMLParams): Promise<ExportOPMLResponse>;

  /**
   * 将指定的文档导出为 Org-mode 格式的压缩文件。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ExportOrgModeParams)
   * @returns Promise<ExportOrgModeResponse> 
   */
  export function exportOrgMode(params: ExportOrgModeParams): Promise<ExportOrgModeResponse>;

  /**
   * 获取指定文档用于预览的 HTML 内容，包含块属性、类型等更丰富的上下文信息，并处理了块引链接。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ExportPreviewHTMLParams)
   * @returns Promise<ExportPreviewHTMLResponse> 
   */
  export function exportPreviewHTML(params: ExportPreviewHTMLParams): Promise<ExportPreviewHTMLResponse>;

  /**
   * 将指定的文档导出为 RTF 格式的压缩文件。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ExportRTFParams)
   * @returns Promise<ExportRTFResponse> 
   */
  export function exportRTF(params: ExportRTFParams): Promise<ExportRTFResponse>;

  /**
   * 将指定的文档导出为 reStructuredText 格式的压缩文件。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ExportReStructuredTextParams)
   * @returns Promise<ExportReStructuredTextResponse> 
   */
  export function exportReStructuredText(params: ExportReStructuredTextParams): Promise<ExportReStructuredTextResponse>;

  /**
   * 将指定路径列表的文件或文件夹打包导出为一个 .zip 压缩文件。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ExportResourcesParams)
   * @returns Promise<ExportResourcesResponse> 
   */
  export function exportResources(params: ExportResourcesParams): Promise<ExportResourcesResponse>;

  /**
   * 将指定的单个文档导出为思源原生 .sy 格式的压缩包。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ExportSYParams)
   * @returns Promise<ExportSYResponse> 
   */
  export function exportSY(params: ExportSYParams): Promise<ExportSYResponse>;

  /**
   * 将传入的 Markdown 内容保存为临时文件，并根据参数生成预览（HTML/PDF/图片），返回预览的 URL。注意：此接口在 `export.go` 中并未完整实现所有参数的逻辑（如 mode, theme, title, type, css, js 均未实际使用），主要实现了 content 的临时保存和URL返回。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ExportTempContentParams)
   * @returns Promise<ExportTempContentResponse> 
   */
  export function exportTempContent(params: ExportTempContentParams): Promise<ExportTempContentResponse>;

  /**
   * 将指定的文档导出为 Textile 格式的压缩文件。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ExportTextileParams)
   * @returns Promise<ExportTextileResponse> 
   */
  export function exportTextile(params: ExportTextileParams): Promise<ExportTextileResponse>;

  /**
   * 获取指定文档的完整 HTML 预览内容，包含标准主题和脚本，可直接用于浏览器展示。
   * (Requires authentication)
   * @param params Request parameters (ExportPreviewParams)
   * @returns Promise<ExportPreviewResponse> 
   */
  export function exportPreview(params: ExportPreviewParams): Promise<ExportPreviewResponse>;

  /**
   * 对已生成的用于 PDF 导出的 HTML 文件进行后处理，如添加水印等。通常在调用 exportHTML (pdf=true) 之后使用。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ProcessPDFParams)
   * @returns Promise<ProcessPDFResponse> 
   */
  export function processPDF(params: ProcessPDFParams): Promise<ProcessPDFResponse>;

}

declare module './extensionClient' {
  /**
   * 处理来自浏览器扩展（如剪藏）复制过来的内容。将 HTML DOM 转换为 Markdown，并处理其中包含的图片等资源，将其保存到指定的笔记本或默认的 assets 目录。支持从链滴剪藏时直接获取 Markdown。这是一个 multipart/form-data 请求，除了明确定义的字段外，还可以包含多个文件字段。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (ExtensionCopyParams)
   * @returns Promise<ExtensionCopyResponse> 
   */
  export function extensionCopy(params: ExtensionCopyParams): Promise<ExtensionCopyResponse>;

}

declare module './fileClient' {
  /**
   * 复制工作空间内的单个文件或资源文件。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (CopyFileParams)
   * @returns Promise<CopyFileResponse> 
   */
  export function copyFile(params: CopyFileParams): Promise<CopyFileResponse>;

  /**
   * 获取指定路径的文件内容。注意：此接口不通过JSON返回文件内容，而是直接在HTTP响应体中返回文件数据流，Content-Type 根据文件类型确定。因此，zodResponseSchema 仅用于描述可能的错误情况下的JSON响应。成功获取文件时，HTTP状态码为200，响应体为文件内容。
   * (Requires authentication)
   * @param params Request parameters (GetFileParams)
   * @returns Promise<GetFileResponse> 
   */
  export function getFile(params: GetFileParams): Promise<GetFileResponse>;

  /**
   * 根据输入的文件路径，生成一个在目标位置唯一的、不冲突的文件名版本。例如，输入 'assets/image.png'，如果已存在，则可能返回 'assets/image_1.png'。
   * (Requires authentication)
   * @param params Request parameters (GetUniqueFilenameParams)
   * @returns Promise<GetUniqueFilenameResponse> 
   */
  export function getUniqueFilename(params: GetUniqueFilenameParams): Promise<GetUniqueFilenameResponse>;

  /**
   * 将多个源文件复制到指定的目标目录 (相对于工作空间)。源文件路径必须是绝对路径。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (GlobalCopyFilesParams)
   * @returns Promise<GlobalCopyFilesResponse> 
   */
  export function globalCopyFiles(params: GlobalCopyFilesParams): Promise<GlobalCopyFilesResponse>;

  /**
   * 上传文件或创建目录。这是一个 multipart/form-data 请求。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (PutFileParams)
   * @returns Promise<PutFileResponse> 
   */
  export function putFile(params: PutFileParams): Promise<PutFileResponse>;

  /**
   * 读取指定目录下的文件和子目录列表。
   * (Requires authentication)
   * @param params Request parameters (ReadDirParams)
   * @returns Promise<ReadDirResponse> 
   */
  export function readDir(params: ReadDirParams): Promise<ReadDirResponse>;

  /**
   * 移除指定路径的文件或目录。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RemoveFileParams)
   * @returns Promise<RemoveFileResponse> 
   */
  export function removeFile(params: RemoveFileParams): Promise<RemoveFileResponse>;

  /**
   * 重命名指定路径的文件或目录。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RenameFileParams)
   * @returns Promise<RenameFileResponse> 
   */
  export function renameFile(params: RenameFileParams): Promise<RenameFileResponse>;

}

declare module './filetreeClient' {
  /**
   * 更改指定笔记本下，特定路径列表的文档树排序方式。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (ChangeSortParams)
   * @returns Promise<ChangeSortResponse> 
   */
  export function changeSort(params: ChangeSortParams): Promise<ChangeSortResponse>;

  /**
   * 根据用户配置的日记模板创建今日的日记文档。如果今日的日记已存在，则直接返回该日记的信息。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (CreateDailyNoteParams)
   * @returns Promise<CreateDailyNoteResponse> 
   */
  export function createDailyNote(params: CreateDailyNoteParams): Promise<CreateDailyNoteResponse>;

  /**
   * 在指定的笔记本和路径下创建一个新的文档，并可以附带初始Markdown内容和排序信息。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (CreateDocParams)
   * @returns Promise<CreateDocResponse> 
   */
  export function createDoc(params: CreateDocParams): Promise<CreateDocResponse>;

  /**
   * 在指定笔记本、路径下，使用提供的Markdown内容创建一个新文档。可以指定父文档ID、新文档ID、标签等。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (CreateDocWithMdParams)
   * @returns Promise<CreateDocWithMdResponse> 
   */
  export function createDocWithMd(params: CreateDocWithMdParams): Promise<CreateDocWithMdResponse>;

  /**
   * 将一个源文档的内容转换为一个标题块，并将其插入到目标文档的指定标题块之后或之前。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (Doc2HeadingParams)
   * @returns Promise<Doc2HeadingResponse> 
   */
  export function doc2Heading(params: Doc2HeadingParams): Promise<Doc2HeadingResponse>;

  /**
   * 复制（克隆）一个指定的文档。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (DuplicateDocParams)
   * @returns Promise<DuplicateDocResponse> 
   */
  export function duplicateDoc(params: DuplicateDocParams): Promise<DuplicateDocResponse>;

  /**
   * 获取指定文档（或文档中的一部分内容）的详细信息，包括块内容、结构、属性等。支持多种加载模式和查询参数。
   * (Requires authentication)
   * @param params Request parameters (GetDocParams)
   * @returns Promise<GetDocResponse> 
   */
  export function getDoc(params: GetDocParams): Promise<GetDocResponse>;

  /**
   * 根据当前笔记本和全局配置，计算并返回创建新文档时应使用的默认笔记本ID和保存路径 (HPath)。路径支持Go模板。
   * (Requires authentication)
   * @param params Request parameters (GetDocCreateSavePathParams)
   * @returns Promise<GetDocCreateSavePathResponse> 
   */
  export function getDocCreateSavePath(params: GetDocCreateSavePathParams): Promise<GetDocCreateSavePathResponse>;

  /**
   * 根据文档或块的ID，获取其在笔记本中的完整层级标题路径 (HPath)，例如 '/父文档标题/子文档标题/当前文档标题'。
   * (Requires authentication)
   * @param params Request parameters (GetFullHPathByIDParams)
   * @returns Promise<GetFullHPathByIDResponse> 
   */
  export function getFullHPathByID(params: GetFullHPathByIDParams): Promise<GetFullHPathByIDResponse>;

  /**
   * 根据文档或块的ID，获取其在笔记本中的人类可读路径 (HPath)，即文件路径形式的标题路径，例如 '/父文档标题/子文档标题/当前文档标题.sy' 的 Sy 文件名部分。
   * (Requires authentication)
   * @param params Request parameters (GetHPathByIDParams)
   * @returns Promise<GetHPathByIDResponse> 
   */
  export function getHPathByID(params: GetHPathByIDParams): Promise<GetHPathByIDResponse>;

  /**
   * 根据文档在笔记本中的实际存储路径 (相对于笔记本根目录)，获取其人类可读路径 (HPath)。
   * (Requires authentication)
   * @param params Request parameters (GetHPathByPathParams)
   * @returns Promise<GetHPathByPathResponse> 
   */
  export function getHPathByPath(params: GetHPathByPathParams): Promise<GetHPathByPathResponse>;

  /**
   * 根据一组文档的实际存储路径 (包含笔记本ID和文档相对路径)，批量获取它们对应的人类可读路径 (HPath)。
   * (Requires authentication)
   * @param params Request parameters (GetHPathsByPathsParams)
   * @returns Promise<GetHPathsByPathsResponse> 
   */
  export function getHPathsByPaths(params: GetHPathsByPathsParams): Promise<GetHPathsByPathsResponse>;

  /**
   * 根据文档的人类可读路径 (HPath) 和其所在的笔记本ID，获取所有匹配该路径的文档的ID列表。因为HPath可能不唯一，所以返回的是数组。
   * (Requires authentication)
   * @param params Request parameters (GetIDsByHPathParams)
   * @returns Promise<GetIDsByHPathResponse> 
   */
  export function getIDsByHPath(params: GetIDsByHPathParams): Promise<GetIDsByHPathResponse>;

  /**
   * 根据文档或块的ID，获取其在工作空间中的实际存储路径 (相对于笔记本根目录) 和所在的笔记本ID。
   * (Requires authentication)
   * @param params Request parameters (GetPathByIDParams)
   * @returns Promise<GetPathByIDResponse> 
   */
  export function getPathByID(params: GetPathByIDParams): Promise<GetPathByIDResponse>;

  /**
   * 根据当前笔记本和全局配置，计算并返回创建新块引文档时应使用的默认笔记本ID和保存路径 (HPath)。路径支持Go模板。
   * (Requires authentication)
   * @param params Request parameters (GetRefCreateSavePathParams)
   * @returns Promise<GetRefCreateSavePathResponse> 
   */
  export function getRefCreateSavePath(params: GetRefCreateSavePathParams): Promise<GetRefCreateSavePathResponse>;

  /**
   * 将源文档中的一个标题块及其后续同级内容，转换为一个新的独立文档。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (Heading2DocParams)
   * @returns Promise<Heading2DocResponse> 
   */
  export function heading2Doc(params: Heading2DocParams): Promise<Heading2DocResponse>;

  /**
   * 将源文档中的一个列表项（及其所有子项）转换为一个新的独立文档。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (Li2DocParams)
   * @returns Promise<Li2DocResponse> 
   */
  export function li2Doc(params: Li2DocParams): Promise<Li2DocResponse>;

  /**
   * 列出指定笔记本的文档树结构，支持过滤、排序等。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (ListDocTreeParams)
   * @returns Promise<ListDocTreeResponse> 
   */
  export function listDocTree(params: ListDocTreeParams): Promise<ListDocTreeResponse>;

  /**
   * 获取指定笔记本和路径下的文档及子文件夹列表，支持排序、闪卡过滤和数量限制。
   * (Requires authentication)
   * @param params Request parameters (ListDocsByPathParams)
   * @returns Promise<ListDocsByPathResponse> 
   */
  export function listDocsByPath(params: ListDocsByPathParams): Promise<ListDocsByPathResponse>;

  /**
   * 将一组源文档（通过其在各自笔记本中的相对路径指定）移动到目标笔记本的指定路径下。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (MoveDocsParams)
   * @returns Promise<MoveDocsResponse> 
   */
  export function moveDocs(params: MoveDocsParams): Promise<MoveDocsResponse>;

  /**
   * 将一组源文档（通过其ID指定）移动到目标文档（通过其ID指定）的目录下或成为其子文档（取决于目标ID是文件夹还是文件）。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (MoveDocsByIDParams)
   * @returns Promise<MoveDocsByIDResponse> 
   */
  export function moveDocsByID(params: MoveDocsByIDParams): Promise<MoveDocsByIDResponse>;

  /**
   * 将指定笔记本中的本地闪念速记（通常是未整理的、直接记录在本地的摘录或想法）移动到配置的闪念速记存放位置。这是一个待改进的旧接口，未来可能基于文档树配置实现。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (MoveLocalShorthandsParams)
   * @returns Promise<MoveLocalShorthandsResponse> 
   */
  export function moveLocalShorthands(params: MoveLocalShorthandsParams): Promise<MoveLocalShorthandsResponse>;

  /**
   * 触发一次全局的文档树刷新和全量索引重建。这是一个耗时操作，请谨慎调用。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<RefreshFiletreeResponse> 
   */
  export function refreshFiletree(): Promise<RefreshFiletreeResponse>;

  /**
   * 根据指定的笔记本ID和文档相对路径，移除（删除）该文档。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RemoveDocParams)
   * @returns Promise<RemoveDocResponse> 
   */
  export function removeDoc(params: RemoveDocParams): Promise<RemoveDocResponse>;

  /**
   * 根据指定的文档ID，移除（删除）该文档。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RemoveDocByIDParams)
   * @returns Promise<RemoveDocByIDResponse> 
   */
  export function removeDocByID(params: RemoveDocByIDParams): Promise<RemoveDocByIDResponse>;

  /**
   * 根据一组复合路径（包含笔记本ID和文档相对路径）批量移除（删除）文档。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RemoveDocsParams)
   * @returns Promise<RemoveDocsResponse> 
   */
  export function removeDocs(params: RemoveDocsParams): Promise<RemoveDocsResponse>;

  /**
   * 根据指定的文档路径列表（通常是 .sy 文件路径），从搜索引擎中移除这些文档的索引。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RemoveIndexesParams)
   * @returns Promise<RemoveIndexesResponse> 
   */
  export function removeIndexes(params: RemoveIndexesParams): Promise<RemoveIndexesResponse>;

  /**
   * 根据指定的笔记本ID、旧文档相对路径和新标题，重命名该文档。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RenameDocParams)
   * @returns Promise<RenameDocResponse> 
   */
  export function renameDoc(params: RenameDocParams): Promise<RenameDocResponse>;

  /**
   * 根据指定的文档ID和新标题，重命名该文档。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RenameDocByIDParams)
   * @returns Promise<RenameDocByIDResponse> 
   */
  export function renameDocByID(params: RenameDocByIDParams): Promise<RenameDocByIDResponse>;

  /**
   * 根据关键词搜索匹配的文档标题和别名。主要用于快速查找文档，不支持全文搜索。
   * (Requires authentication)
   * @param params Request parameters (SearchDocsParams)
   * @returns Promise<SearchDocsResponse> 
   */
  export function searchDocs(params: SearchDocsParams): Promise<SearchDocsResponse>;

  /**
   * 根据指定的文档路径列表（通常是 .sy 文件路径），更新或插入这些文档在搜索引擎中的索引。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (UpsertIndexesParams)
   * @returns Promise<UpsertIndexesResponse> 
   */
  export function upsertIndexes(params: UpsertIndexesParams): Promise<UpsertIndexesResponse>;

}

declare module './formatClient' {
  /**
   * 为指定块ID的内容（Markdown原文）在中文与英文、数字之间自动添加空格，以优化排版。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (AutoSpaceParams)
   * @returns Promise<AutoSpaceResponse> 
   */
  export function autoSpace(params: AutoSpaceParams): Promise<AutoSpaceResponse>;

  /**
   * 将指定块ID内的所有外部网络资源（如图片、附件等，但不包括仅被引用的网络图片链接）下载并转存为本地资源。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (NetAssets2LocalAssetsParams)
   * @returns Promise<NetAssets2LocalAssetsResponse> 
   */
  export function netAssets2LocalAssets(params: NetAssets2LocalAssetsParams): Promise<NetAssets2LocalAssetsResponse>;

  /**
   * 将指定块ID内的网络图片（Markdown中实际嵌入的图片，非普通链接）转存为本地资源。可以指定单个图片URL进行转存，或留空以转存块内所有网络图片。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (NetImg2LocalAssetsParams)
   * @returns Promise<NetImg2LocalAssetsResponse> 
   */
  export function netImg2LocalAssets(params: NetImg2LocalAssetsParams): Promise<NetImg2LocalAssetsResponse>;

}

declare module './graphClient' {
  /**
   * 根据关键词和配置获取全局关系图的节点和边数据。
   * (Requires authentication)
   * @param params Request parameters (GetGraphParams)
   * @returns Promise<GetGraphResponse> 
   */
  export function getGraph(params: GetGraphParams): Promise<GetGraphResponse>;

  /**
   * 根据指定的文档 ID、关键词和配置获取局部关系图（如文档关系图、反链关系图等）的节点和边数据。
   * (Requires authentication)
   * @param params Request parameters (GetLocalGraphParams)
   * @returns Promise<GetLocalGraphResponse> 
   */
  export function getLocalGraph(params: GetLocalGraphParams): Promise<GetLocalGraphResponse>;

  /**
   * 将全局关系图的配置恢复为默认设置。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<ResetGraphResponse> 
   */
  export function resetGraph(): Promise<ResetGraphResponse>;

  /**
   * 将局部关系图的配置恢复为默认设置。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<ResetLocalGraphResponse> 
   */
  export function resetLocalGraph(): Promise<ResetLocalGraphResponse>;

}

declare module './historyClient' {
  /**
   * 清空当前工作空间下的所有历史记录。这是一个耗时操作，执行前会有提示。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<ClearWorkspaceHistoryResponse> 
   */
  export function clearWorkspaceHistory(): Promise<ClearWorkspaceHistoryResponse>;

  /**
   * 获取指定文档历史版本的内容和相关信息。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (GetDocHistoryContentParams)
   * @returns Promise<GetDocHistoryContentResponse> 
   */
  export function getDocHistoryContent(params: GetDocHistoryContentParams): Promise<GetDocHistoryContentResponse>;

  /**
   * 根据创建日期、关键词等条件获取历史记录中的具体条目列表。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (GetHistoryItemsParams)
   * @returns Promise<GetHistoryItemsResponse> 
   */
  export function getHistoryItems(params: GetHistoryItemsParams): Promise<GetHistoryItemsResponse>;

  /**
   * 获取所有笔记本的历史记录信息。
   * (Requires authentication, Requires admin role)
   * @returns Promise<GetNotebookHistoryResponse> 
   */
  export function getNotebookHistory(): Promise<GetNotebookHistoryResponse>;

  /**
   * 重建整个工作空间的历史记录索引。这是一个后台异步操作。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<ReindexHistoryResponse> 
   */
  export function reindexHistory(): Promise<ReindexHistoryResponse>;

  /**
   * 将资源文件回滚到指定的历史版本。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RollbackAssetsHistoryParams)
   * @returns Promise<RollbackAssetsHistoryResponse> 
   */
  export function rollbackAssetsHistory(params: RollbackAssetsHistoryParams): Promise<RollbackAssetsHistoryResponse>;

  /**
   * 将单个文档回滚到指定的历史版本。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RollbackDocHistoryParams)
   * @returns Promise<RollbackDocHistoryResponse> 
   */
  export function rollbackDocHistory(params: RollbackDocHistoryParams): Promise<RollbackDocHistoryResponse>;

  /**
   * 将整个笔记本回滚到指定的历史版本。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RollbackNotebookHistoryParams)
   * @returns Promise<RollbackNotebookHistoryResponse> 
   */
  export function rollbackNotebookHistory(params: RollbackNotebookHistoryParams): Promise<RollbackNotebookHistoryResponse>;

  /**
   * 根据关键词、笔记本、类型等分页搜索历史记录。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (SearchHistoryParams)
   * @returns Promise<SearchHistoryResponse> 
   */
  export function searchHistory(params: SearchHistoryParams): Promise<SearchHistoryResponse>;

}

declare module './iconClient' {
  /**
   * 根据参数动态生成一个SVG格式的日期或文字图标。此接口直接返回 SVG 图像数据。
   * @param params Request parameters (GetDynamicIconParams)
   * @returns Promise<any> 此接口不返回 JSON。成功时直接返回 image/svg+xml 类型的 SVG 图像数据 (HTTP 200)。失败时可能返回其他 HTTP 错误状态码。
   */
  export function getDynamicIcon(params: GetDynamicIconParams): Promise<any>;

}

declare module './importClient' {
  /**
   * 导入完整的数据包备份 (.zip)。此操作会覆盖当前工作空间的数据。请求体为 FormData，必须包含 'file' 字段，值为 .zip 数据包文件。由于是 FormData，具体字段不在 Zod schema 中定义。代码实现详见 kernel/api/import.go:importData。导入过程会将文件暂存并在处理后删除。注意：此操作会覆盖当前工作空间。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<ImportDataResponse> 
   */
  export function importData(): Promise<ImportDataResponse>;

  /**
   * 导入 .sy 文件 (思源笔记的标准文档/子文档包) 到指定的笔记本和路径下。请求体为 FormData。必须包含 'file' 字段 (值为 .sy.zip 文件), 'notebook' 字段 (目标笔记本ID), 'toPath' 字段 (目标文档父路径，例如 '/' 表示笔记本根目录)。由于是 FormData，具体字段不在 Zod schema 中定义。代码实现详见 kernel/api/import.go:importSY。导入过程会将文件暂存并在处理后删除。后台会显示进度。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<ImportSYResponse> 
   */
  export function importSY(): Promise<ImportSYResponse>;

  /**
   * 从本地文件系统导入标准 Markdown 文件或包含 Markdown 文件的文件夹到指定的笔记本和路径下。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (ImportStdMdParams)
   * @returns Promise<ImportStdMdResponse> 
   */
  export function importStdMd(params: ImportStdMdParams): Promise<ImportStdMdResponse>;

}

declare module './inboxClient' {
  /**
   * 根据ID获取单个云端速记条目的详细内容。速记内容会从 Markdown 转换为 HTML。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (GetShorthandParams)
   * @returns Promise<GetShorthandResponse> 
   */
  export function getShorthand(params: GetShorthandParams): Promise<GetShorthandResponse>;

  /**
   * 分页获取云端速记条目列表。速记内容会从 Markdown 转换为 HTML，描述会做简化处理。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (GetShorthandsParams)
   * @returns Promise<GetShorthandsResponse> 
   */
  export function getShorthands(params: GetShorthandsParams): Promise<GetShorthandsResponse>;

  /**
   * 根据ID列表批量移除云端速记条目。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RemoveShorthandsParams)
   * @returns Promise<RemoveShorthandsResponse> 
   */
  export function removeShorthands(params: RemoveShorthandsParams): Promise<RemoveShorthandsResponse>;

}

declare module './luteClient' {
  /**
   * 将指定ID的块内容导出为标准 Markdown 格式的字符串。
   * (Requires authentication)
   * @param params Request parameters (CopyStdMarkdownParams)
   * @returns Promise<CopyStdMarkdownResponse> 
   */
  export function copyStdMarkdown(params: CopyStdMarkdownParams): Promise<CopyStdMarkdownResponse>;

  /**
   * 将输入的 HTML 字符串转换为思源笔记的块级 DOM 结构 (仍为HTML字符串，但经过Lute处理)。会处理本地资源路径、空列表项、单列表格转段落等情况。
   * (Requires authentication)
   * @param params Request parameters (Html2BlockDOMParams)
   * @returns Promise<Html2BlockDOMResponse> 
   */
  export function html2BlockDOM(params: Html2BlockDOMParams): Promise<Html2BlockDOMResponse>;

  /**
   * 对传入的块级 DOM 字符串执行 Lute 引擎的 SpinBlockDOM 处理，进行原生渲染相关的优化。
   * (Requires authentication)
   * @param params Request parameters (SpinBlockDOMParams)
   * @returns Promise<SpinBlockDOMResponse> 
   */
  export function spinBlockDOM(params: SpinBlockDOMParams): Promise<SpinBlockDOMResponse>;

}

declare module './miscClient' {
  /**
   * 通过 Server-Sent Events (SSE) 订阅一个或多个指定广播频道的消息。连接建立后，服务器会持续推送所订阅频道的消息。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (BroadcastSubscribeParams)
   * @returns Promise<Record<string, never>> 
   */
  export function broadcastSubscribe(params: BroadcastSubscribeParams): Promise<Record<string, never>>;

  /**
   * 通过 WebSocket 连接到指定的广播频道，用于双向实时通讯。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (BroadcastParams)
   * @returns Promise<Record<string, never>> 
   */
  export function broadcast(params: BroadcastParams): Promise<Record<string, never>>;

}

declare module './networkClient' {
  /**
   * 作为代理，将客户端构造的HTTP(S)请求转发到指定的目标URL，并返回目标服务器的响应。支持多种请求体编码方式。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (ForwardProxyParams)
   * @returns Promise<ForwardProxyResponse> 
   */
  export function forwardProxy(params: ForwardProxyParams): Promise<ForwardProxyResponse>;

}

declare module './notebookClient' {
  /**
   * 批量更改笔记本的显示顺序。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (ChangeSortNotebookParams)
   * @returns Promise<ChangeSortNotebookResponse> 
   */
  export function changeSortNotebook(params: ChangeSortNotebookParams): Promise<ChangeSortNotebookResponse>;

  /**
   * 关闭一个指定的笔记本。关闭后，笔记本内容将不再可访问，直到再次打开。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (CloseNotebookParams)
   * @returns Promise<CloseNotebookResponse> 
   */
  export function closeNotebook(params: CloseNotebookParams): Promise<CloseNotebookResponse>;

  /**
   * 创建一个新的笔记本。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (CreateNotebookParams)
   * @returns Promise<CreateNotebookResponse> 
   */
  export function createNotebook(params: CreateNotebookParams): Promise<CreateNotebookResponse>;

  /**
   * 获取指定笔记本的配置信息。
   * (Requires authentication)
   * @param params Request parameters (GetNotebookConfParams)
   * @returns Promise<GetNotebookConfResponse> 
   */
  export function getNotebookConf(params: GetNotebookConfParams): Promise<GetNotebookConfResponse>;

  /**
   * 获取指定笔记本的详细信息，包括其配置和统计数据。
   * (Requires authentication, Unavailable in read-only mode)
   * @param params Request parameters (GetNotebookInfoParams)
   * @returns Promise<GetNotebookInfoResponse> 
   */
  export function getNotebookInfo(params: GetNotebookInfoParams): Promise<GetNotebookInfoResponse>;

  /**
   * 获取当前工作空间中所有笔记本的列表，包含已打开和未打开的笔记本。
   * (Requires authentication)
   * @returns Promise<LsNotebooksResponse> 
   */
  export function lsNotebooks(): Promise<LsNotebooksResponse>;

  /**
   * 打开一个指定的笔记本。如果笔记本已经是打开状态，此操作可能仅刷新其状态。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (OpenNotebookParams)
   * @returns Promise<OpenNotebookResponse> 
   */
  export function openNotebook(params: OpenNotebookParams): Promise<OpenNotebookResponse>;

  /**
   * 删除一个指定的笔记本。此操作会从工作空间移除笔记本及其所有内容。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RemoveNotebookParams)
   * @returns Promise<RemoveNotebookResponse> 
   */
  export function removeNotebook(params: RemoveNotebookParams): Promise<RemoveNotebookResponse>;

  /**
   * 重命名一个指定的笔记本。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RenameNotebookParams)
   * @returns Promise<RenameNotebookResponse> 
   */
  export function renameNotebook(params: RenameNotebookParams): Promise<RenameNotebookResponse>;

  /**
   * 更新指定笔记本的配置信息。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetNotebookConfParams)
   * @returns Promise<SetNotebookConfResponse> 
   */
  export function setNotebookConf(params: SetNotebookConfParams): Promise<SetNotebookConfResponse>;

  /**
   * 设置指定笔记本的显示图标。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetNotebookIconParams)
   * @returns Promise<SetNotebookIconResponse> 
   */
  export function setNotebookIcon(params: SetNotebookIconParams): Promise<SetNotebookIconResponse>;

}

declare module './notificationClient' {
  /**
   * 向前端推送一条错误类型的消息通知，通常用于显示操作失败或异常情况。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (PushErrMsgParams)
   * @returns Promise<PushErrMsgResponse> 
   */
  export function pushErrMsg(params: PushErrMsgParams): Promise<PushErrMsgResponse>;

  /**
   * 向前端推送一条普通类型的消息通知，通常用于显示操作成功或提示信息。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (PushMsgParams)
   * @returns Promise<PushMsgResponse> 
   */
  export function pushMsg(params: PushMsgParams): Promise<PushMsgResponse>;

}

declare module './outlineClient' {
  /**
   * 获取指定文档块（通常是文档的根块ID）的层级大纲结构。
   * (Requires authentication)
   * @param params Request parameters (GetDocOutlineParams)
   * @returns Promise<GetDocOutlineResponse> 
   */
  export function getDocOutline(params: GetDocOutlineParams): Promise<GetDocOutlineResponse>;

}

declare module './petalClient' {
  /**
   * 加载指定前端界面的所有已启用且兼容的插件（Petals）及其代码和配置信息。
   * (Requires authentication)
   * @param params Request parameters (LoadPetalsParams)
   * @returns Promise<LoadPetalsResponse> 
   */
  export function loadPetals(params: LoadPetalsParams): Promise<LoadPetalsResponse>;

  /**
   * 设置指定前端界面中特定插件（由包名识别）的启用或禁用状态。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetPetalEnabledParams)
   * @returns Promise<SetPetalEnabledResponse> 
   */
  export function setPetalEnabled(params: SetPetalEnabledParams): Promise<SetPetalEnabledResponse>;

}

declare module './queryClient' {
  /**
   * 执行 SQL 查询语句，返回查询结果。思源笔记使用 SQLite 作为底层数据库，支持标准的 SQL 查询语法。
   * (Requires authentication)
   * @param params Request parameters (SQLParams)
   * @returns Promise<SQLResponse> 
   */
  export function SQL(params: SQLParams): Promise<SQLResponse>;

}

declare module './refClient' {
  /**
   * 获取指定块ID的反向链接和反向提及列表。此接口为旧版，建议使用 /api/ref/getBacklink2。
   * (Requires authentication)
   * @param params Request parameters (GetBacklinkParams)
   * @returns Promise<GetBacklinkResponse> 
   */
  export function getBacklink(params: GetBacklinkParams): Promise<GetBacklinkResponse>;

  /**
   * 获取指定块ID的反向链接和反向提及列表，支持排序。
   * (Requires authentication)
   * @param params Request parameters (GetBacklink2Params)
   * @returns Promise<GetBacklink2Response> 
   */
  export function getBacklink2(params: GetBacklink2Params): Promise<GetBacklink2Response>;

  /**
   * 获取指定 定义块 在某个特定 文档树 内的反向链接列表。用于在打开一个文档时，显示该文档中有哪些块引用了当前面板的文档。
   * (Requires authentication)
   * @param params Request parameters (GetBacklinkDocParams)
   * @returns Promise<GetBacklinkDocResponse> 
   */
  export function getBacklinkDoc(params: GetBacklinkDocParams): Promise<GetBacklinkDocResponse>;

  /**
   * 获取指定 定义块 在某个特定 文档树 内的反向提及列表 (提及了定义块的名称或别名，但未直接引用的块)。
   * (Requires authentication)
   * @param params Request parameters (GetBackmentionDocParams)
   * @returns Promise<GetBackmentionDocResponse> 
   */
  export function getBackmentionDoc(params: GetBackmentionDocParams): Promise<GetBackmentionDocResponse>;

  /**
   * 手动触发指定块的反向链接和提及关系的刷新计算。通常在数据发生变更后，系统会自动更新，但此接口可用于强制刷新。
   * (Requires authentication)
   * @param params Request parameters (RefreshBacklinkParams)
   * @returns Promise<RefreshBacklinkResponse> 
   */
  export function refreshBacklink(params: RefreshBacklinkParams): Promise<RefreshBacklinkResponse>;

}

declare module './repoClient' {
  /**
   * 将当前工作区内容回滚到指定的仓库快照版本。这是一个危险操作，会导致当前未保存的更改丢失，请谨慎操作。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (CheckoutRepoParams)
   * @returns Promise<CheckoutRepoResponse> 
   */
  export function checkoutRepo(params: CheckoutRepoParams): Promise<CheckoutRepoResponse>;

  /**
   * 为当前工作区创建一个新的快照。可以附带备注信息和标签。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (CreateSnapshotParams)
   * @returns Promise<CreateSnapshotResponse> 
   */
  export function createSnapshot(params: CreateSnapshotParams): Promise<CreateSnapshotResponse>;

  /**
   * 比较两个指定的本地快照之间的差异，列出新增、修改和删除的文档。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (DiffRepoSnapshotsParams)
   * @returns Promise<DiffRepoSnapshotsResponse> 
   */
  export function diffRepoSnapshots(params: DiffRepoSnapshotsParams): Promise<DiffRepoSnapshotsResponse>;

  /**
   * 从云端下载指定的快照到本地。如果本地已存在同名快照，可能会被覆盖或操作失败。下载的是标签快照时需要提供标签名。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (DownloadCloudSnapshotParams)
   * @returns Promise<DownloadCloudSnapshotResponse> 
   */
  export function downloadCloudSnapshot(params: DownloadCloudSnapshotParams): Promise<DownloadCloudSnapshotResponse>;

  /**
   * 分页获取当前用户在云端存储的所有普通快照列表。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (GetCloudRepoSnapshotsParams)
   * @returns Promise<GetCloudRepoSnapshotsResponse> 
   */
  export function getCloudRepoSnapshots(params: GetCloudRepoSnapshotsParams): Promise<GetCloudRepoSnapshotsResponse>;

  /**
   * 分页获取当前用户在云端存储的所有标签快照列表。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (GetCloudRepoTagSnapshotsParams)
   * @returns Promise<GetCloudRepoTagSnapshotsResponse> 
   */
  export function getCloudRepoTagSnapshots(params: GetCloudRepoTagSnapshotsParams): Promise<GetCloudRepoTagSnapshotsResponse>;

  /**
   * 获取指定快照中特定文件的原始内容。此接口直接返回文件数据流，不返回标准JSON结构。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (GetRepoFileParams)
   * @returns Promise<any> 此接口不返回标准 JSON。成功时直接返回文件数据流 (HTTP 200)，Content-Type 根据文件类型确定。失败时返回标准 JSON 错误结构。
   */
  export function getRepoFile(params: GetRepoFileParams): Promise<any>;

  /**
   * 分页获取当前工作区本地存储的所有普通快照列表。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (GetRepoSnapshotsParams)
   * @returns Promise<GetRepoSnapshotsResponse> 
   */
  export function getRepoSnapshots(params: GetRepoSnapshotsParams): Promise<GetRepoSnapshotsResponse>;

  /**
   * 分页获取当前工作区本地存储的所有标签快照列表。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (GetRepoTagSnapshotsParams)
   * @returns Promise<GetRepoTagSnapshotsResponse> 
   */
  export function getRepoTagSnapshots(params: GetRepoTagSnapshotsParams): Promise<GetRepoTagSnapshotsResponse>;

  /**
   * 导入仓库加密密钥。这是一个危险操作，错误的密钥可能导致数据无法解密。导入的密钥文件通常是 .sykey 后缀。此操作通过 FormData 接收文件。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<ImportRepoKeyResponse> 
   */
  export function importRepoKey(): Promise<ImportRepoKeyResponse>;

  /**
   * 为当前工作区初始化一个新的随机加密密钥。此操作通常在首次设置加密或重置密钥时使用。旧密钥将被覆盖。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<InitRepoKeyResponse> 
   */
  export function initRepoKey(): Promise<InitRepoKeyResponse>;

  /**
   * 通过用户提供的口令生成并初始化仓库加密密钥。旧密钥将被覆盖。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (InitRepoKeyFromPassphraseParams)
   * @returns Promise<InitRepoKeyFromPassphraseResponse> 
   */
  export function initRepoKeyFromPassphrase(params: InitRepoKeyFromPassphraseParams): Promise<InitRepoKeyFromPassphraseResponse>;

  /**
   * 获取并打开指定快照中特定文档的内容，用于预览历史版本。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (OpenRepoSnapshotDocParams)
   * @returns Promise<OpenRepoSnapshotDocResponse> 
   */
  export function openRepoSnapshotDoc(params: OpenRepoSnapshotDocParams): Promise<OpenRepoSnapshotDocResponse>;

  /**
   * 彻底删除用户在云端的所有仓库数据，包括所有快照和标签快照。这是一个非常危险且不可逆的操作，执行前通常会有二次确认。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<PurgeCloudRepoResponse> 
   */
  export function purgeCloudRepo(): Promise<PurgeCloudRepoResponse>;

  /**
   * 彻底删除当前工作区的本地仓库数据，包括所有快照和标签快照。这是一个非常危险且不可逆的操作，执行前通常会有二次确认。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<PurgeRepoResponse> 
   */
  export function purgeRepo(): Promise<PurgeRepoResponse>;

  /**
   * 从云端移除指定的标签快照。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RemoveCloudRepoTagSnapshotParams)
   * @returns Promise<RemoveCloudRepoTagSnapshotResponse> 
   */
  export function removeCloudRepoTagSnapshot(params: RemoveCloudRepoTagSnapshotParams): Promise<RemoveCloudRepoTagSnapshotResponse>;

  /**
   * 从本地仓库移除指定的标签快照。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RemoveRepoTagSnapshotParams)
   * @returns Promise<RemoveRepoTagSnapshotResponse> 
   */
  export function removeRepoTagSnapshot(params: RemoveRepoTagSnapshotParams): Promise<RemoveRepoTagSnapshotResponse>;

  /**
   * 重置本地仓库，会清空所有快照和标签，并重新初始化仓库密钥。这是一个危险操作，执行前通常会有二次确认。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<ResetRepoResponse> 
   */
  export function resetRepo(): Promise<ResetRepoResponse>;

  /**
   * 设置本地仓库快照索引的保留天数。过期的索引将被自动清理。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (SetRepoIndexRetentionDaysParams)
   * @returns Promise<SetRepoIndexRetentionDaysResponse> 
   */
  export function setRepoIndexRetentionDays(params: SetRepoIndexRetentionDaysParams): Promise<SetRepoIndexRetentionDaysResponse>;

  /**
   * 设置每日自动创建的快照在本地的保留数量。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (SetRetentionIndexesDailyParams)
   * @returns Promise<SetRetentionIndexesDailyResponse> 
   */
  export function setRetentionIndexesDaily(params: SetRetentionIndexesDailyParams): Promise<SetRetentionIndexesDailyResponse>;

  /**
   * 为指定的本地快照打上标签，使其成为一个标签快照。可以同时提供备注，如果提供会覆盖快照原有的备注。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (TagSnapshotParams)
   * @returns Promise<TagSnapshotResponse> 
   */
  export function tagSnapshot(params: TagSnapshotParams): Promise<TagSnapshotResponse>;

  /**
   * 将指定的本地快照上传到云端。如果是标签快照，需要提供标签名。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (UploadCloudSnapshotParams)
   * @returns Promise<UploadCloudSnapshotResponse> 
   */
  export function uploadCloudSnapshot(params: UploadCloudSnapshotParams): Promise<UploadCloudSnapshotResponse>;

}

declare module './riffClient' {
  /**
   * 将指定的块添加为闪卡到指定的闪卡包中。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (AddRiffCardsParams)
   * @returns Promise<AddRiffCardsResponse> 
   */
  export function addRiffCards(params: AddRiffCardsParams): Promise<AddRiffCardsResponse>;

  /**
   * 批量设置闪卡的到期时间。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (BatchSetRiffCardsDueTimeParams)
   * @returns Promise<BatchSetRiffCardsDueTimeResponse> 
   */
  export function batchSetRiffCardsDueTime(params: BatchSetRiffCardsDueTimeParams): Promise<BatchSetRiffCardsDueTimeResponse>;

  /**
   * 创建一个新的闪卡包。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (CreateRiffDeckParams)
   * @returns Promise<CreateRiffDeckResponse> 
   */
  export function createRiffDeck(params: CreateRiffDeckParams): Promise<CreateRiffDeckResponse>;

  /**
   * 获取指定笔记本下的所有闪卡块 ID，支持分页。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (GetNotebookRiffCardsParams)
   * @returns Promise<GetNotebookRiffCardsResponse> 
   */
  export function getNotebookRiffCards(params: GetNotebookRiffCardsParams): Promise<GetNotebookRiffCardsResponse>;

  /**
   * 获取指定笔记本下所有到期应复习的闪卡。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (GetNotebookRiffDueCardsParams)
   * @returns Promise<GetNotebookRiffDueCardsResponse> 
   */
  export function getNotebookRiffDueCards(params: GetNotebookRiffDueCardsParams): Promise<GetNotebookRiffDueCardsResponse>;

  /**
   * 获取指定闪卡包中的所有闪卡块 ID，支持分页。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (GetRiffCardsParams)
   * @returns Promise<GetRiffCardsResponse> 
   */
  export function getRiffCards(params: GetRiffCardsParams): Promise<GetRiffCardsResponse>;

  /**
   * 根据一组块 ID 批量获取它们对应的闪卡信息。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (GetRiffCardsByBlockIDsParams)
   * @returns Promise<GetRiffCardsByBlockIDsResponse> 
   */
  export function getRiffCardsByBlockIDs(params: GetRiffCardsByBlockIDsParams): Promise<GetRiffCardsByBlockIDsResponse>;

  /**
   * 获取当前工作空间中所有的闪卡包列表。
   * (Requires authentication, Requires admin role)
   * @returns Promise<GetRiffDecksResponse> 
   */
  export function getRiffDecks(): Promise<GetRiffDecksResponse>;

  /**
   * 获取指定闪卡包中所有到期应复习的闪卡。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (GetRiffDueCardsParams)
   * @returns Promise<GetRiffDueCardsResponse> 
   */
  export function getRiffDueCards(params: GetRiffDueCardsParams): Promise<GetRiffDueCardsResponse>;

  /**
   * 获取指定文档树（根块）下的所有闪卡块 ID，支持分页。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (GetTreeRiffCardsParams)
   * @returns Promise<GetTreeRiffCardsResponse> 
   */
  export function getTreeRiffCards(params: GetTreeRiffCardsParams): Promise<GetTreeRiffCardsResponse>;

  /**
   * 获取指定文档树（根块）下所有到期应复习的闪卡。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (GetTreeRiffDueCardsParams)
   * @returns Promise<GetTreeRiffDueCardsResponse> 
   */
  export function getTreeRiffDueCards(params: GetTreeRiffDueCardsParams): Promise<GetTreeRiffDueCardsResponse>;

  /**
   * 从指定的闪卡包中移除指定的闪卡。如果 deckID 为空字符串，则从所有闪卡包中移除。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RemoveRiffCardsParams)
   * @returns Promise<RemoveRiffCardsResponse> 
   */
  export function removeRiffCards(params: RemoveRiffCardsParams): Promise<RemoveRiffCardsResponse>;

  /**
   * 移除指定的闪卡包及其包含的所有闪卡。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RemoveRiffDeckParams)
   * @returns Promise<RemoveRiffDeckResponse> 
   */
  export function removeRiffDeck(params: RemoveRiffDeckParams): Promise<RemoveRiffDeckResponse>;

  /**
   * 重命名指定的闪卡包。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RenameRiffDeckParams)
   * @returns Promise<RenameRiffDeckResponse> 
   */
  export function renameRiffDeck(params: RenameRiffDeckParams): Promise<RenameRiffDeckResponse>;

  /**
   * 重置指定范围内的闪卡的学习进度。可以按笔记本、文档树或闪卡包进行重置，也可以指定具体的块 ID 列表。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (ResetRiffCardsParams)
   * @returns Promise<ResetRiffCardsResponse> 
   */
  export function resetRiffCards(params: ResetRiffCardsParams): Promise<ResetRiffCardsResponse>;

  /**
   * 对指定的闪卡进行一次复习，并根据评分更新其下次到期时间等学习状态。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (ReviewRiffCardParams)
   * @returns Promise<ReviewRiffCardResponse> 
   */
  export function reviewRiffCard(params: ReviewRiffCardParams): Promise<ReviewRiffCardResponse>;

  /**
   * 跳过当前闪卡的复习，通常是将其推迟到当前学习队列的末尾或稍后。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SkipReviewRiffCardParams)
   * @returns Promise<SkipReviewRiffCardResponse> 
   */
  export function skipReviewRiffCard(params: SkipReviewRiffCardParams): Promise<SkipReviewRiffCardResponse>;

}

declare module './searchClient' {
  /**
   * 在指定的块ID范围、路径、笔记本、类型中查找内容并进行替换。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (FindReplaceParams)
   * @returns Promise<FindReplaceResponse> 
   */
  export function findReplace(params: FindReplaceParams): Promise<FindReplaceResponse>;

  /**
   * 对资源文件内容进行全文搜索（此功能需要付费订阅）。
   * (Requires authentication)
   * @param params Request parameters (FullTextSearchAssetContentParams)
   * @returns Promise<FullTextSearchAssetContentResponse> 
   */
  export function fullTextSearchAssetContent(params: FullTextSearchAssetContentParams): Promise<FullTextSearchAssetContentResponse>;

  /**
   * 对块内容进行全文搜索，支持多种搜索方式和过滤条件。
   * (Requires authentication)
   * @param params Request parameters (FullTextSearchBlockParams)
   * @returns Promise<FullTextSearchBlockResponse> 
   */
  export function fullTextSearchBlock(params: FullTextSearchBlockParams): Promise<FullTextSearchBlockResponse>;

  /**
   * 获取资源文件内容中，与指定查询相关的片段。
   * (Requires authentication)
   * @param params Request parameters (GetAssetContentParams)
   * @returns Promise<GetAssetContentResponse> 
   */
  export function getAssetContent(params: GetAssetContentParams): Promise<GetAssetContentResponse>;

  /**
   * 获取指定嵌入块的渲染内容，支持包含其子块或显示面包屑。
   * (Requires authentication)
   * @param params Request parameters (GetEmbedBlockParams)
   * @returns Promise<GetEmbedBlockResponse> 
   */
  export function getEmbedBlock(params: GetEmbedBlockParams): Promise<GetEmbedBlockResponse>;

  /**
   * 分页列出在当前工作空间中所有无效的块引用（例如，引用的块已被删除）。
   * (Requires authentication)
   * @param params Request parameters (ListInvalidBlockRefsParams)
   * @returns Promise<ListInvalidBlockRefsResponse> 
   */
  export function listInvalidBlockRefs(params: ListInvalidBlockRefsParams): Promise<ListInvalidBlockRefsResponse>;

  /**
   * 根据路径移除指定的模板文件。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RemoveTemplateParams)
   * @returns Promise<RemoveTemplateResponse> 
   */
  export function removeTemplate(params: RemoveTemplateParams): Promise<RemoveTemplateResponse>;

  /**
   * 根据文件名关键词和可选的文件扩展名搜索资源文件。
   * (Requires authentication)
   * @param params Request parameters (SearchAssetParams)
   * @returns Promise<SearchAssetResponse> 
   */
  export function searchAsset(params: SearchAssetParams): Promise<SearchAssetResponse>;

  /**
   * 在指定的嵌入块（及其可能的子块）中使用 SQL 语句进行内容搜索。
   * (Requires authentication)
   * @param params Request parameters (SearchEmbedBlockParams)
   * @returns Promise<SearchEmbedBlockResponse> 
   */
  export function searchEmbedBlock(params: SearchEmbedBlockParams): Promise<SearchEmbedBlockResponse>;

  /**
   * 在输入引用（例如 `((` 或 `[[`）时，根据关键词动态搜索可能的引用块建议。
   * (Requires authentication)
   * @param params Request parameters (SearchRefBlockParams)
   * @returns Promise<SearchRefBlockResponse> 
   */
  export function searchRefBlock(params: SearchRefBlockParams): Promise<SearchRefBlockResponse>;

  /**
   * 根据关键词搜索已存在的标签。
   * (Requires authentication)
   * @param params Request parameters (SearchTagParams)
   * @returns Promise<SearchTagResponse> 
   */
  export function searchTag(params: SearchTagParams): Promise<SearchTagResponse>;

  /**
   * 根据关键词搜索模板（通常是模板文件名或内容）。
   * (Requires authentication)
   * @param params Request parameters (SearchTemplateParams)
   * @returns Promise<SearchTemplateResponse> 
   */
  export function searchTemplate(params: SearchTemplateParams): Promise<SearchTemplateResponse>;

  /**
   * 根据关键词搜索挂件块。
   * (Requires authentication)
   * @param params Request parameters (SearchWidgetParams)
   * @returns Promise<SearchWidgetResponse> 
   */
  export function searchWidget(params: SearchWidgetParams): Promise<SearchWidgetResponse>;

  /**
   * 更新指定**查询嵌入块（`query_embed` 类型）**的原始查询语句或脚本内容。此接口专门用于处理查询嵌入块，不适用于普通块的自定义属性更新。
   * (Requires authentication)
   * @param params Request parameters (UpdateEmbedBlockParams)
   * @returns Promise<UpdateEmbedBlockResponse> 
   */
  export function updateEmbedBlock(params: UpdateEmbedBlockParams): Promise<UpdateEmbedBlockResponse>;

}

declare module './settingClient' {
  /**
   * 将指定的关键字列表添加到虚拟块引用的全局排除列表中。这些关键字将不会用于生成虚拟引用。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (AddVirtualBlockRefExcludeParams)
   * @returns Promise<AddVirtualBlockRefExcludeResponse> 
   */
  export function addVirtualBlockRefExclude(params: AddVirtualBlockRefExcludeParams): Promise<AddVirtualBlockRefExcludeResponse>;

  /**
   * 将指定的关键字列表添加到虚拟块引用的全局包含列表中。只有这些关键字才可能用于生成虚拟引用（如果全局虚拟引用开关已打开）。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (AddVirtualBlockRefIncludeParams)
   * @returns Promise<AddVirtualBlockRefIncludeResponse> 
   */
  export function addVirtualBlockRefInclude(params: AddVirtualBlockRefIncludeParams): Promise<AddVirtualBlockRefIncludeResponse>;

  /**
   * 刷新并获取当前登录的思源云端账户信息。
   * (Requires authentication)
   * @param params Request parameters (GetCloudUserParams)
   * @returns Promise<GetCloudUserResponse> 
   */
  export function getCloudUser(params: GetCloudUserParams): Promise<GetCloudUserResponse>;

  /**
   * 获取当前的发布服务配置信息，包括端口和具体的发布设置。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<GetPublishResponse> 
   */
  export function getPublish(): Promise<GetPublishResponse>;

  /**
   * 使用令牌和两步验证码完成云端用户的登录过程。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (Login2faCloudUserParams)
   * @returns Promise<Login2faCloudUserResponse> 
   */
  export function login2faCloudUser(params: Login2faCloudUserParams): Promise<Login2faCloudUserResponse>;

  /**
   * 登出当前已登录的思源云端账户。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<LogoutCloudUserResponse> 
   */
  export function logoutCloudUser(): Promise<LogoutCloudUserResponse>;

  /**
   * 清除并重建虚拟块引用的缓存。当虚拟引用的相关配置（如包含/排除列表、编辑器中的开关）发生变化后，可能需要调用此接口。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<RefreshVirtualBlockRefResponse> 
   */
  export function refreshVirtualBlockRef(): Promise<RefreshVirtualBlockRefResponse>;

  /**
   * 更新AI相关的配置，主要针对OpenAI服务。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetAIParams)
   * @returns Promise<SetAIResponse> 
   */
  export function setAI(params: SetAIParams): Promise<SetAIResponse>;

  /**
   * 更新用户账户相关的显示配置。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetAccountParams)
   * @returns Promise<SetAccountResponse> 
   */
  export function setAccount(params: SetAccountParams): Promise<SetAccountResponse>;

  /**
   * 更新应用的外观相关配置，如主题、字体、语言等。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetAppearanceParams)
   * @returns Promise<SetAppearanceResponse> 
   */
  export function setAppearance(params: SetAppearanceParams): Promise<SetAppearanceResponse>;

  /**
   * 更新与集市相关的配置。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetBazaarParams)
   * @returns Promise<SetBazaarResponse> 
   */
  export function setBazaar(params: SetBazaarParams): Promise<SetBazaarResponse>;

  /**
   * 更新编辑器相关的各种配置。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetEditorParams)
   * @returns Promise<SetEditorResponse> 
   */
  export function setEditor(params: SetEditorParams): Promise<SetEditorResponse>;

  /**
   * 单独设置整个编辑器的只读状态。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetEditorReadOnlyParams)
   * @returns Promise<SetEditorReadOnlyResponse> 
   */
  export function setEditorReadOnly(params: SetEditorReadOnlyParams): Promise<SetEditorReadOnlyResponse>;

  /**
   * 更新编辑器配置中的常用表情列表。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetEmojiParams)
   * @returns Promise<SetEmojiResponse> 
   */
  export function setEmoji(params: SetEmojiParams): Promise<SetEmojiResponse>;

  /**
   * 更新与导出功能相关的配置。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetExportParams)
   * @returns Promise<SetExportResponse> 
   */
  export function setExport(params: SetExportParams): Promise<SetExportResponse>;

  /**
   * 更新文件树（文档列表）相关的配置。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetFiletreeParams)
   * @returns Promise<SetFiletreeResponse> 
   */
  export function setFiletree(params: SetFiletreeParams): Promise<SetFiletreeResponse>;

  /**
   * 更新与闪卡（FSRS算法）相关的配置。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetFlashcardParams)
   * @returns Promise<SetFlashcardResponse> 
   */
  export function setFlashcard(params: SetFlashcardParams): Promise<SetFlashcardResponse>;

  /**
   * 更新用户自定义的快捷键映射。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetKeymapParams)
   * @returns Promise<SetKeymapResponse> 
   */
  export function setKeymap(params: SetKeymapParams): Promise<SetKeymapResponse>;

  /**
   * 更新发布服务的配置，并尝试根据新配置初始化（或重启）发布服务。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetPublishParams)
   * @returns Promise<SetPublishResponse> 
   */
  export function setPublish(params: SetPublishParams): Promise<SetPublishResponse>;

  /**
   * 更新与搜索功能相关的配置，部分配置更改可能触发重建索引。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetSearchParams)
   * @returns Promise<SetSearchResponse> 
   */
  export function setSearch(params: SetSearchParams): Promise<SetSearchResponse>;

  /**
   * 更新代码片段（Snippets）的启用状态，如是否启用自定义CSS和JS。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetConfSnippetParams)
   * @returns Promise<SetConfSnippetResponse> 
   */
  export function setConfSnippet(params: SetConfSnippetParams): Promise<SetConfSnippetResponse>;

}

declare module './snippetClient' {
  /**
   * 获取已保存的代码片段列表。可以根据类型（js/css/all）、启用状态（0-禁用, 1-启用, 2-全部）和关键字进行过滤。
   * (Requires authentication)
   * @param params Request parameters (GetSnippetParams)
   * @returns Promise<GetSnippetResponse> 
   */
  export function getSnippet(params: GetSnippetParams): Promise<GetSnippetResponse>;

  /**
   * 设置全新的代码片段列表。这是一个全量替换操作，提供的 snippets 数组将完全覆盖当前所有的代码片段。如果只想修改或添加单个片段，需要先获取所有现有片段，在本地修改/添加后，将修改后的完整列表通过此API发送。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetSnippetParams)
   * @returns Promise<SetSnippetResponse> 
   */
  export function setSnippet(params: SetSnippetParams): Promise<SetSnippetResponse>;

  /**
   * 根据ID移除指定的代码片段。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RemoveSnippetParams)
   * @returns Promise<RemoveSnippetResponse> 
   */
  export function removeSnippet(params: RemoveSnippetParams): Promise<RemoveSnippetResponse>;

}

declare module './sqliteClient' {
  /**
   * 将内核中待处理的数据库事务队列立即刷新到磁盘。这通常用于确保在关键操作后数据被持久化。该接口不接收参数。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<FlushTransactionResponse> 
   */
  export function flushTransaction(): Promise<FlushTransactionResponse>;

}

declare module './storageClient' {
  /**
   * 获取所有用户已保存的搜索标准（过滤条件）列表。
   * (Requires authentication)
   * @returns Promise<GetCriteriaResponse> 
   */
  export function getCriteria(): Promise<GetCriteriaResponse>;

  /**
   * 获取浏览器 LocalStorage 中的所有键值对。
   * (Requires authentication)
   * @returns Promise<GetLocalStorageResponse> 
   */
  export function getLocalStorage(): Promise<GetLocalStorageResponse>;

  /**
   * 获取用户最近打开过的文档列表。这些文档按最近打开时间排序。
   * (Requires authentication)
   * @returns Promise<GetRecentDocsResponse> 
   */
  export function getRecentDocs(): Promise<GetRecentDocsResponse>;

  /**
   * 根据名称移除一个已保存的搜索标准（过滤条件）。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RemoveCriterionParams)
   * @returns Promise<RemoveCriterionResponse> 
   */
  export function removeCriterion(params: RemoveCriterionParams): Promise<RemoveCriterionResponse>;

  /**
   * 根据提供的键名列表，批量移除浏览器 LocalStorage 中的项目。同时会广播事件通知其他客户端同步移除。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RemoveLocalStorageValsParams)
   * @returns Promise<RemoveLocalStorageValsResponse> 
   */
  export function removeLocalStorageVals(params: RemoveLocalStorageValsParams): Promise<RemoveLocalStorageValsResponse>;

  /**
   * 保存或更新一个搜索标准（过滤条件）。搜索标准可用于后续的文档或内容搜索。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetCriterionParams)
   * @returns Promise<SetCriterionResponse> 
   */
  export function setCriterion(params: SetCriterionParams): Promise<SetCriterionResponse>;

  /**
   * 使用一个完整的对象来覆盖整个浏览器 LocalStorage 的内容。通常用于导入或恢复 LocalStorage 数据。同时会广播事件通知其他客户端同步设置。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetLocalStorageParams)
   * @returns Promise<SetLocalStorageResponse> 
   */
  export function setLocalStorage(params: SetLocalStorageParams): Promise<SetLocalStorageResponse>;

  /**
   * 设置浏览器 LocalStorage 中的单个键值对。同时会广播事件通知其他客户端同步设置。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetLocalStorageValParams)
   * @returns Promise<SetLocalStorageValResponse> 
   */
  export function setLocalStorageVal(params: SetLocalStorageValParams): Promise<SetLocalStorageValResponse>;

}

declare module './syncClient' {
  /**
   * 在云端存储中创建一个新的同步目录。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (CreateCloudSyncDirParams)
   * @returns Promise<CreateCloudSyncDirResponse> 
   */
  export function createCloudSyncDir(params: CreateCloudSyncDirParams): Promise<CreateCloudSyncDirResponse>;

  /**
   * 将会话中当前的 S3 同步配置加密并打包成 .zip 文件供导出。
   * (Requires authentication, Requires admin role)
   * @returns Promise<ExportSyncProviderS3Response> 
   */
  export function exportSyncProviderS3(): Promise<ExportSyncProviderS3Response>;

  /**
   * 将会话中当前的 WebDAV 同步配置加密并打包成 .zip 文件供导出。
   * (Requires authentication, Requires admin role)
   * @returns Promise<ExportSyncProviderWebDAVResponse> 
   */
  export function exportSyncProviderWebDAV(): Promise<ExportSyncProviderWebDAVResponse>;

  /**
   * 检查应用启动时数据同步是否成功完成。此接口仅在管理员角色下，且同步已启用且成功时返回特定提示。
   * (Requires authentication)
   * @returns Promise<GetBootSyncResponse> 
   */
  export function getBootSync(): Promise<GetBootSyncResponse>;

  /**
   * 获取当前的同步状态、最后同步时间、以及当前在线的内核实例等信息。
   * (Requires authentication, Requires admin role)
   * @returns Promise<GetSyncInfoResponse> 
   */
  export function getSyncInfo(): Promise<GetSyncInfoResponse>;

  /**
   * 通过上传的 .zip 或 .json 文件导入 S3 同步配置。导入的配置会经过解密和验证。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<ImportSyncProviderS3Response> 
   */
  export function importSyncProviderS3(): Promise<ImportSyncProviderS3Response>;

  /**
   * 通过上传的 .zip 或 .json 文件导入 WebDAV 同步配置。导入的配置会经过解密和验证。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<ImportSyncProviderWebDAVResponse> 
   */
  export function importSyncProviderWebDAV(): Promise<ImportSyncProviderWebDAVResponse>;

  /**
   * 列出当前配置的云端存储中可用的同步目录及其大小信息。
   * (Requires authentication, Requires admin role)
   * @returns Promise<ListCloudSyncDirResponse> 
   */
  export function listCloudSyncDir(): Promise<ListCloudSyncDirResponse>;

  /**
   * 执行启动时的数据同步流程。此接口会触发 model.BootSyncData()。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<PerformBootSyncResponse> 
   */
  export function performBootSync(): Promise<PerformBootSyncResponse>;

  /**
   * 执行数据同步操作。对于非云端同步模式 (mode != 3)，将触发 model.SyncData(true)。对于云端同步模式 (mode === 3)，需要明确指定同步方向 (upload: true/false)。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (PerformSyncParams)
   * @returns Promise<PerformSyncResponse> 
   */
  export function performSync(params: PerformSyncParams): Promise<PerformSyncResponse>;

  /**
   * 从云端存储中移除指定的同步目录。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RemoveCloudSyncDirParams)
   * @returns Promise<RemoveCloudSyncDirResponse> 
   */
  export function removeCloudSyncDir(params: RemoveCloudSyncDirParams): Promise<RemoveCloudSyncDirResponse>;

  /**
   * 设置当前内核实例使用的云端同步目录。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetCloudSyncDirParams)
   * @returns Promise<SetCloudSyncDirResponse> 
   */
  export function setCloudSyncDir(params: SetCloudSyncDirParams): Promise<SetCloudSyncDirResponse>;

  /**
   * 设置是否启用数据同步功能。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetSyncEnableParams)
   * @returns Promise<SetSyncEnableResponse> 
   */
  export function setSyncEnable(params: SetSyncEnableParams): Promise<SetSyncEnableResponse>;

  /**
   * 设置在数据同步过程中发生内容冲突时，是否自动生成冲突副本文件。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetSyncGenerateConflictDocParams)
   * @returns Promise<SetSyncGenerateConflictDocResponse> 
   */
  export function setSyncGenerateConflictDoc(params: SetSyncGenerateConflictDocParams): Promise<SetSyncGenerateConflictDocResponse>;

  /**
   * 设置自动数据同步的时间间隔（单位：分钟）。设置后会重置同步计时器。
   * (Requires authentication)
   * @param params Request parameters (SetSyncIntervalParams)
   * @returns Promise<SetSyncIntervalResponse> 
   */
  export function setSyncInterval(params: SetSyncIntervalParams): Promise<SetSyncIntervalResponse>;

  /**
   * 设置数据同步的模式。例如：0 表示自动同步，1 表示手动同步，3 表示云端双向同步时需手动触发单向同步。设置后会重置同步计时器。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetSyncModeParams)
   * @returns Promise<SetSyncModeResponse> 
   */
  export function setSyncMode(params: SetSyncModeParams): Promise<SetSyncModeResponse>;

  /**
   * 设置是否启用同步感知功能。启用后，当检测到远程数据更新时，可能会有相应的提示或行为。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetSyncPerceptionParams)
   * @returns Promise<SetSyncPerceptionResponse> 
   */
  export function setSyncPerception(params: SetSyncPerceptionParams): Promise<SetSyncPerceptionResponse>;

  /**
   * 设置当前使用的数据同步服务提供商，例如 S3、WebDAV 或本地文件夹。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetSyncProviderParams)
   * @returns Promise<SetSyncProviderResponse> 
   */
  export function setSyncProvider(params: SetSyncProviderParams): Promise<SetSyncProviderResponse>;

  /**
   * 设置当同步服务提供商为本地文件夹时，所使用的本地文件夹路径。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetSyncProviderLocalParams)
   * @returns Promise<SetSyncProviderLocalResponse> 
   */
  export function setSyncProviderLocal(params: SetSyncProviderLocalParams): Promise<SetSyncProviderLocalResponse>;

  /**
   * 设置使用 S3作为同步服务提供商时的详细配置信息，如 Access Key, Secret Key, Endpoint, Bucket 等。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetSyncProviderS3Params)
   * @returns Promise<SetSyncProviderS3Response> 
   */
  export function setSyncProviderS3(params: SetSyncProviderS3Params): Promise<SetSyncProviderS3Response>;

  /**
   * 设置使用 WebDAV 作为同步服务提供商时的详细配置信息，如 Endpoint, 用户名和密码。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetSyncProviderWebDAVParams)
   * @returns Promise<SetSyncProviderWebDAVResponse> 
   */
  export function setSyncProviderWebDAV(params: SetSyncProviderWebDAVParams): Promise<SetSyncProviderWebDAVResponse>;

}

declare module './systemClient' {
  /**
   * 将思源笔记相关目录添加到 Microsoft Defender 的排除项中，以避免潜在的性能问题或冲突。此操作仅在 Windows 系统上有效。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<AddMicrosoftDefenderExclusionResponse> 
   */
  export function addMicrosoftDefenderExclusion(): Promise<AddMicrosoftDefenderExclusionResponse>;

  /**
   * 获取思源笔记内核的启动进度。此接口也接受 POST 请求。
   * @returns Promise<BootProgressResponse> 
   */
  export function bootProgress(): Promise<BootProgressResponse>;

  /**
   * 获取思源笔记内核的启动进度。此接口也接受 GET 请求。
   * @returns Promise<BootProgressResponse> 
   */
  export function bootProgress(): Promise<BootProgressResponse>;

  /**
   * 检查思源笔记是否有新版本。
   * (Requires authentication, Requires admin role)
   * @param params Request parameters (CheckUpdateParams)
   * @returns Promise<CheckUpdateResponse> 
   */
  export function checkUpdate(params: CheckUpdateParams): Promise<CheckUpdateResponse>;

  /**
   * 检查指定路径是否可以作为思源笔记的工作空间目录。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (CheckWorkspaceDirParams)
   * @returns Promise<CheckWorkspaceDirResponse> 
   */
  export function checkWorkspaceDir(params: CheckWorkspaceDirParams): Promise<CheckWorkspaceDirResponse>;

  /**
   * 在指定路径创建一个新的思源笔记工作空间。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (CreateWorkspaceDirParams)
   * @returns Promise<CreateWorkspaceDirResponse> 
   */
  export function createWorkspaceDir(params: CreateWorkspaceDirParams): Promise<CreateWorkspaceDirResponse>;

  /**
   * 获取思源笔记服务器当前的 Unix 时间戳 (毫秒)。
   * @returns Promise<CurrentTimeResponse> 
   */
  export function currentTime(): Promise<CurrentTimeResponse>;

  /**
   * 关闭并退出思源笔记程序。
   * (Requires authentication, Requires admin role)
   * @returns Promise<ExitResponse> 
   */
  export function exit(): Promise<ExitResponse>;

  /**
   * 导出一份包含当前用户所有配置的 JSON 文件。
   * (Requires authentication, Requires admin role)
   * @returns Promise<ExportConfResponse> 
   */
  export function exportConf(): Promise<ExportConfResponse>;

  /**
   * 导出包含系统运行日志的压缩文件。
   * (Requires authentication, Requires admin role)
   * @returns Promise<ExportLogResponse> 
   */
  export function exportLog(): Promise<ExportLogResponse>;

  /**
   * 获取用于登录验证的图片验证码。
   * @returns Promise<GetCaptchaResponse> 
   */
  export function GetCaptcha(): Promise<GetCaptchaResponse>;

  /**
   * 获取当前版本的更新日志内容 (Markdown 格式转换为 HTML)。
   * (Requires authentication)
   * @returns Promise<GetChangelogResponse> 
   */
  export function getChangelog(): Promise<GetChangelogResponse>;

  /**
   * 获取思源笔记的全部配置信息。配置项繁多，具体结构请参考 `siyuan/kernel/conf/conf.go` 中的 `Conf` 结构体。
   * (Requires authentication)
   * @returns Promise<GetConfResponse> 
   */
  export function getConf(): Promise<GetConfResponse>;

  /**
   * 获取内置及自定义 Emoji 的配置信息，用于 Emoji 选择器等功能。
   * (Requires authentication)
   * @returns Promise<GetEmojiConfResponse> 
   */
  export function getEmojiConf(): Promise<GetEmojiConfResponse>;

  /**
   * 获取用于移动端同步的工作空间列表。
   * (Requires authentication, Requires admin role)
   * @returns Promise<GetMobileWorkspacesResponse> 
   */
  export function getMobileWorkspaces(): Promise<GetMobileWorkspacesResponse>;

  /**
   * 获取当前的网络代理等配置信息。
   * (Requires authentication, Requires admin role)
   * @returns Promise<GetNetworkResponse> 
   */
  export function getNetwork(): Promise<GetNetworkResponse>;

  /**
   * 获取当前操作系统上安装的可用字体列表。
   * (Requires authentication, Requires admin role)
   * @returns Promise<GetSysFontsResponse> 
   */
  export function getSysFonts(): Promise<GetSysFontsResponse>;

  /**
   * 获取当前打开的工作空间目录路径和思源版本号。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<GetWorkspaceInfoResponse> 
   */
  export function getWorkspaceInfo(): Promise<GetWorkspaceInfoResponse>;

  /**
   * 获取所有已配置或曾经打开过的工作空间列表。
   * (Requires authentication)
   * @returns Promise<GetWorkspacesResponse> 
   */
  export function getWorkspaces(): Promise<GetWorkspacesResponse>;

  /**
   * 设置不再提示用户添加 Microsoft Defender 排除项。此操作仅在 Windows 系统上有效。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<IgnoreAddMicrosoftDefenderExclusionResponse> 
   */
  export function ignoreAddMicrosoftDefenderExclusion(): Promise<IgnoreAddMicrosoftDefenderExclusionResponse>;

  /**
   * 通过上传 `conf.json` 文件来导入用户配置。导入成功后通常需要重启或刷新UI生效。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (ImportConfParams)
   * @returns Promise<ImportConfResponse> 
   */
  export function importConf(params: ImportConfParams): Promise<ImportConfResponse>;

  /**
   * 使用访问授权码或用户名密码进行登录验证。
   * @param params Request parameters (LoginAuthParams)
   * @returns Promise<LoginAuthResponse> 
   */
  export function LoginAuth(params: LoginAuthParams): Promise<LoginAuthResponse>;

  /**
   * 清除当前的登录授权状态。
   * @returns Promise<LogoutAuthResponse> 
   */
  export function LogoutAuth(): Promise<LogoutAuthResponse>;

  /**
   * 命令客户端重新加载思源笔记的用户界面。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<ReloadUIResponse> 
   */
  export function reloadUI(): Promise<ReloadUIResponse>;

  /**
   * 从工作空间列表中移除指定的目录（逻辑删除，不删除物理文件）。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RemoveWorkspaceDirParams)
   * @returns Promise<RemoveWorkspaceDirResponse> 
   */
  export function removeWorkspaceDir(params: RemoveWorkspaceDirParams): Promise<RemoveWorkspaceDirResponse>;

  /**
   * 从工作空间列表中移除并物理删除指定目录及其所有内容。这是一个危险操作！
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RemoveWorkspaceDirPhysicallyParams)
   * @returns Promise<RemoveWorkspaceDirPhysicallyResponse> 
   */
  export function removeWorkspaceDirPhysically(params: RemoveWorkspaceDirPhysicallyParams): Promise<RemoveWorkspaceDirPhysicallyResponse>;

  /**
   * 设置或清空 API 访问令牌 (token)。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetAPITokenParams)
   * @returns Promise<SetAPITokenResponse> 
   */
  export function setAPIToken(params: SetAPITokenParams): Promise<SetAPITokenResponse>;

  /**
   * 设置或清空访问思源笔记的授权码。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetAccessAuthCodeParams)
   * @returns Promise<SetAccessAuthCodeResponse> 
   */
  export function setAccessAuthCode(params: SetAccessAuthCodeParams): Promise<SetAccessAuthCodeResponse>;

  /**
   * 设置思源笔记的外观模式 (亮色/暗色)。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetAppearanceModeParams)
   * @returns Promise<SetAppearanceModeResponse> 
   */
  export function setAppearanceMode(params: SetAppearanceModeParams): Promise<SetAppearanceModeResponse>;

  /**
   * 设置思源笔记是否开机自启动 (仅对桌面客户端有效)。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetAutoLaunchParams)
   * @returns Promise<SetAutoLaunchResponse> 
   */
  export function setAutoLaunch(params: SetAutoLaunchParams): Promise<SetAutoLaunchResponse>;

  /**
   * 设置是否在检测到新版本后自动下载并安装更新包。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetDownloadInstallPkgParams)
   * @returns Promise<SetDownloadInstallPkgResponse> 
   */
  export function setDownloadInstallPkg(params: SetDownloadInstallPkgParams): Promise<SetDownloadInstallPkgResponse>;

  /**
   * 设置思源笔记是否在系统锁屏时自动锁定 (仅对桌面客户端有效)。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetFollowSystemLockScreenParams)
   * @returns Promise<SetFollowSystemLockScreenResponse> 
   */
  export function setFollowSystemLockScreen(params: SetFollowSystemLockScreenParams): Promise<SetFollowSystemLockScreenResponse>;

  /**
   * 启用或禁用 Google Analytics 数据追踪。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetGoogleAnalyticsParams)
   * @returns Promise<SetGoogleAnalyticsResponse> 
   */
  export function setGoogleAnalytics(params: SetGoogleAnalyticsParams): Promise<SetGoogleAnalyticsResponse>;

  /**
   * 设置网络连接时使用的代理服务器。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetNetworkProxyParams)
   * @returns Promise<SetNetworkProxyResponse> 
   */
  export function setNetworkProxy(params: SetNetworkProxyParams): Promise<SetNetworkProxyResponse>;

  /**
   * 配置思源笔记的网络服务，如服务端口、是否允许其他设备访问等。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetNetworkServeParams)
   * @returns Promise<SetNetworkServeResponse> 
   */
  export function setNetworkServe(params: SetNetworkServeParams): Promise<SetNetworkServeResponse>;

  /**
   * 设置用户界面的布局模式，例如左右布局、顶部分栏等。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetUILayoutParams)
   * @returns Promise<SetUILayoutResponse> 
   */
  export function setUILayout(params: SetUILayoutParams): Promise<SetUILayoutResponse>;

  /**
   * 切换到指定路径的工作空间。成功后通常需要重启或刷新 UI。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (SetWorkspaceDirParams)
   * @returns Promise<SetWorkspaceDirResponse> 
   */
  export function setWorkspaceDir(params: SetWorkspaceDirParams): Promise<SetWorkspaceDirResponse>;

  /**
   * （内部接口）用于桌面端添加 UI 进程的相关信息，如 PID。通常不由普通用户或第三方应用直接调用。
   * @param params Request parameters (AddUIProcessParams)
   * @returns Promise<AddUIProcessResponse> 
   */
  export function addUIProcess(params: AddUIProcessParams): Promise<AddUIProcessResponse>;

  /**
   * 获取当前思源笔记内核的版本号。此接口也接受 POST 请求。
   * @returns Promise<VersionResponse> 
   */
  export function version(): Promise<VersionResponse>;

  /**
   * 获取当前思源笔记内核的版本号。此接口也接受 GET 请求。
   * @returns Promise<VersionResponse> 
   */
  export function version(): Promise<VersionResponse>;

}

declare module './tagClient' {
  /**
   * 获取当前工作空间的所有标签列表。可以提供一个可选的排序参数来即时更新并应用全局标签排序设置。
   * (Requires authentication)
   * @param params Request parameters (GetTagParams)
   * @returns Promise<GetTagResponse> 
   */
  export function getTag(params: GetTagParams): Promise<GetTagResponse>;

  /**
   * 根据标签名称移除一个标签。这会从所有关联的块中移除该标签。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RemoveTagParams)
   * @returns Promise<RemoveTagResponse> 
   */
  export function removeTag(params: RemoveTagParams): Promise<RemoveTagResponse>;

  /**
   * 将一个旧标签名称重命名为一个新标签名称。所有关联块中的标签引用都会被更新。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RenameTagParams)
   * @returns Promise<RenameTagResponse> 
   */
  export function renameTag(params: RenameTagParams): Promise<RenameTagResponse>;

}

declare module './templateClient' {
  /**
   * 将指定 ID 的文档内容保存为一个模板。可以指定模板名称，以及是否覆盖同名模板。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (DocSaveAsTemplateParams)
   * @returns Promise<DocSaveAsTemplateResponse> 
   */
  export function docSaveAsTemplate(params: DocSaveAsTemplateParams): Promise<DocSaveAsTemplateResponse>;

  /**
   * 根据给定的模板文件路径和可选的上下文块ID，渲染模板内容。可以指定是否为预览模式。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (RenderTemplateParams)
   * @returns Promise<RenderTemplateResponse> 
   */
  export function renderTemplate(params: RenderTemplateParams): Promise<RenderTemplateResponse>;

  /**
   * 使用 Go 的 Sprig 模板函数库渲染给定的模板字符串。
   * (Requires authentication)
   * @param params Request parameters (RenderSprigParams)
   * @returns Promise<RenderSprigResponse> 
   */
  export function renderSprig(params: RenderSprigParams): Promise<RenderSprigResponse>;

}

declare module './transactionsClient' {
  /**
   * 执行一个或多个事务操作，每个事务可以包含多个具体的数据修改动作。这是思源笔记中进行数据修改最核心的接口之一。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (PerformTransactionsParams)
   * @returns Promise<PerformTransactionsResponse> 
   */
  export function performTransactions(params: PerformTransactionsParams): Promise<PerformTransactionsResponse>;

}

declare module './uiClient' {
  /**
   * 重新加载指定的属性视图。通常在属性视图的结构或数据发生变化后调用，以刷新显示。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (ReloadAttributeViewParams)
   * @returns Promise<ReloadAttributeViewResponse> 
   */
  export function reloadAttributeView(params: ReloadAttributeViewParams): Promise<ReloadAttributeViewResponse>;

  /**
   * 重新加载文件树。当文档结构发生变化（如创建、删除、移动文档或笔记本）后，调用此接口以刷新文件树显示。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<ReloadFiletreeResponse> 
   */
  export function reloadFiletree(): Promise<ReloadFiletreeResponse>;

  /**
   * 重新加载指定的 Protyle 编辑器实例。通常在编辑器内容或状态在后端被修改后调用，以刷新前端显示。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @param params Request parameters (ReloadProtyleParams)
   * @returns Promise<ReloadProtyleResponse> 
   */
  export function reloadProtyle(params: ReloadProtyleParams): Promise<ReloadProtyleResponse>;

  /**
   * 重新加载标签列表。当标签被创建、删除、重命名或引用发生变化后，调用此接口以刷新标签面板的显示。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<ReloadTagResponse> 
   */
  export function reloadTag(): Promise<ReloadTagResponse>;

  /**
   * 触发整个用户界面的重新加载。这是一个比较重的操作，通常在发生可能影响全局UI状态的重大变更后使用，或者作为一种通用的刷新手段。
   * (Requires authentication, Requires admin role, Unavailable in read-only mode)
   * @returns Promise<ReloadUIResponse> 
   */
  export function reloadUI(): Promise<ReloadUIResponse>;

}