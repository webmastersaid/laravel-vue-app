import './bootstrap'
import { createApp } from 'vue'
import App from './components/App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(router)
    .use(store)
    .mount('#app')
