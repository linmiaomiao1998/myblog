import tagListmodel from '@/models/tagListModel';


export default{
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