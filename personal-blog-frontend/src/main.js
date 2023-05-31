import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/js/iconfont.js'
import Particles from "particles.vue3"

createApp(App).use(store).use(router).use(ElementPlus).use(Particles).mount('#app')
