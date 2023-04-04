import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import AmplifyVue from '@aws-amplify/ui-vue';
import router from './router'

import './assets/index.css'
import '@aws-amplify/ui-vue/styles.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(AmplifyVue)

app.mount('#app')
