import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/js/iconfont.js'
import '@/assets/js/iconfont-message-board.js'
import Particles from "particles.vue3"
import * as echarts from 'echarts'

const app = createApp(App)

app.use(store).use(router).use(ElementPlus).use(Particles)

app.config.globalProperties.$echarts = echarts

app.mount('#app')