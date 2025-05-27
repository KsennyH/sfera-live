import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { fetchUser } from './src/stores/auth'

fetchUser()

createApp(App).use(router).mount('#app')