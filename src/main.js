import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from "vue-sweetalert2";
import { createPinia } from 'pinia'
const app = createApp(App);
const pinia = createPinia()
app.use(VueSweetalert2);
app.use(router);
app.use(pinia);
app.mount('#app')
