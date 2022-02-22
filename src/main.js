import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus, { ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/router/index.js'
import store from '@/store/index.js'
import 'vue-global-api'
import '@/assets/style/reset.css'
import components from '@/components/index'
import directive from '@/directive/index'

const app = createApp(App)

app.provide('$message',ElMessage)

app.use(components).use(directive).use(router).use(store).use(ElementPlus).mount('#app')
