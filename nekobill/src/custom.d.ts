type RootState = {
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?: Tag
}
type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;//数据类型
  createdAt?: string;//类、构造函数
};
type Tag = {
  id: string;
  name: string;
}
type TagListmodel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated'//联合类型//success表示成功，duplicated表示内容重复
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  save: () => void
  remove: (id: string) => boolean
}
interface Window {
  
  }
  