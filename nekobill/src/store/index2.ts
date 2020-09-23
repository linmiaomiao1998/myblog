import recordStore from './recordStore'
import tagListStore from './tagListStore'


const store={
   ...recordStore,
   ...tagListStore
};
  export default store
  