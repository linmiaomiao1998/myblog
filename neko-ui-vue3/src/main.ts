import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router';
import neko from './components/neko.vue';
import neko2 from './components/neko2.vue'
const history = createWebHashHistory()
const router =createRouter(
    {
        history : history,
        routes: [
            {path: '/' ,component: neko},
            {path:'/xxxx' , component: neko2}
        ]
    })

const app=createApp(App)
app.use(router)
app.mount('#app')