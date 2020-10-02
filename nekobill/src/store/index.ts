import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone.ts'
import createId from '../lib/createid';

Vue.use(Vuex)// 把 store 绑到 Vue.prototype.$store = store
type RootState = {
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?: Tag
}

const store = new Vuex.Store({
  state: { // data
    recordList: [],
    tagList: [],
    currentTag: undefined
  } as RootState,
  mutations: { // methods
    setCurrentTag(state, id: string) {
      state.currentTag = state.tagList.filter(t => t.id === id)[0];
    },
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('localStorageKeyName') || '[]') as RecordItem[];
    },
    createRecord(state, record) {
      const record2: RecordItem = clone(record);
      record2.createdAt = new Date();
      state.recordList.push(record2);///可调换成this.record?.push(record2)
      // recordStore.saveRecords();}
      store.commit('saveRecords')
    },
    saveRecords(state) {
      window.localStorage.setItem
        ('recordList', JSON.stringify(state.recordList))
    },
    fetchTags(state) {
      return state.tagList= JSON.parse(window.localStorage.getItem('tagList') || '[]');;
    },
    createTag(state,name: string) {
      const names = state.tagList.map(item => item.name);//data里面每一项的name收集起来产生一个新的names
      if (names.indexOf(name) >= 0) {
        window.alert('标签名重复');
        return 'duplicated';
      }
      const id = createId().toString();
      state.tagList.push({ id, name: name });
      store.commit('saveTags');
      window.alert('添加成功');
      return 'success';
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList))
    }
  }
}
)

export default store;

// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
