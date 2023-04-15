import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from "pinia-plugin-persistedstate";

import App from './App.vue'
import AmplifyVue from '@aws-amplify/ui-vue';
import router from './router'

import './assets/index.css'
import '@aws-amplify/ui-vue/styles.css';

const app = createApp(App)

const pinia = createPinia()
pinia.use(createPersistedState());
app.use(pinia)
app.use(router)
app.use(AmplifyVue)

app.mount('#app')
