import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import router from '@/router';
import { createHead } from '@vueuse/head'; // 퍼블영역

const app = createApp(App);
const head = createHead();

app.use(createPinia());
app.use(router);
app.use(head); // 퍼블영역

app.mount('#app');
