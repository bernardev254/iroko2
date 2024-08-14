import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // Import the router
import store from './store'; // Import the router

createApp(App)
.use(router) // Register the router
.use(store)
.mount('#app')
