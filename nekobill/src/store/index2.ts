import recordStore from './recordStore'
import tagListStore from './tagListStore'


const store={
   count:0,
   addCount(){
      this.count+=1
   },
   ...recordStore,
   ...tagListStore
};
console.log(store)
  export default store
  