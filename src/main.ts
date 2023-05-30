import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// import router from './router'
import 'normalize.css' // 标准样式库
import './assets/css/index.less' // 自定义样式

const app = createApp(App)

app.use(createPinia())
// app.use(router)

app.mount('#app')
