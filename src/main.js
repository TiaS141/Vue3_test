import { createApp } from 'vue'
import './style.css'
import Root from './App.vue'
import maska from "maska";
// import phone from "./components/phone.vue";

const app = createApp(Root)

app.use(maska);
// app.component("phone", phone);

app.mount('#app')
