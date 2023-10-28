import './bootstrap'
import { createApp } from 'vue'
import router from './router'
import App from './components/App.vue'
import Index from './components/Index.vue'

const app = createApp(Index)
app.use(router)
app.mount('#app')
