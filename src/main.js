import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import store from '@/store/index.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'vue-global-api'
import '@/assets/style/reset.css'

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
