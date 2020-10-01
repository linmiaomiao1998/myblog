import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone.ts'

Vue.use(Vuex)// 把 store 绑到 Vue.prototype.$store = store

const store = new Vuex.Store({
  state: { // data
    recordList: [] as RecordItem[]
  },
  mutations: { // methods
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
