import { createApp } from 'vue';
import { createPinia } from 'pinia'
import '../ui/style.css';
import App from '../ui/App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import { appRouter } from './router.ts';
const pinia = createPinia()
const app = createApp(App);
app.use(appRouter);
app.use(ElementPlus);
app.use(pinia);
app.mount('#app');
