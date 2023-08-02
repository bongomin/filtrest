import { createApp } from 'vue';
import { createPinia } from 'pinia'; // Import createPinia from Pinia
import './style.css';
import App from './App.vue';

const pinia = createPinia(); // Initialize Pinia and get the Pinia instance

const app = createApp(App);
app.use(pinia); // Use the Pinia instance in the app

app.mount('#app');