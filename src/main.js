import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "../public/main.css";
import 'simple-notify/dist/simple-notify.css'

createApp(App).use(store).use(router).mount('#app')
