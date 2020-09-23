import recordListmodel from '@/models/recordList';
import tagListmodel from '@/models/tagListModel';

const store={
    //record stroe
  recordList:recordListmodel.fetch(),
  createRecord : (record: RecordItem) =>recordListmodel.create(record),
  //tag stroe
  tagList : tagListmodel.fetch(),
  findTag(id: string) {
    return this.tagList.filter((t) => t.id === id)[0];
  },
  createTag:(name: string) => {
    const message = tagListmodel.create(name);
    if (message === 'duplicated') {
      window.alert('标签名重复');
    } else if (message === 'success') {
      window.alert('添加成功');
    }
  },
  removeTag:(id: string) => {
    return tagListmodel.remove(id)
  
  },
  updateTag:(id: string, name: string) => {
    return tagListmodel.update(id, name);
  }
  }

  export default store
  