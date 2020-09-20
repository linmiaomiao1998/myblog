import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import tagListmodel from '@/models/tagListModel';
import Layout from'@/components/Layout.vue'
import Icon from'@/components/Icons.vue'

Vue.config.productionTip = false

Vue.component('Nav',Nav) 
Vue.component('Layout',Layout)
Vue.component('Icon',Icon)

window.tagList=tagListmodel.fetch();
new Vue({
  router:router,
  store,
  render: h => h(App)
}).$mount('#app')
