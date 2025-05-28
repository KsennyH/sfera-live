import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// import { fetchUser } from './src/stores/auth'

// fetchUser()

createApp(App).use(router).use(createPinia()).mount('#app')
