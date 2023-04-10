import { createApp } from 'vue'
import { Icon } from 'vant';
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/style/reset.css'

const app=createApp(App)
app.use(Icon)
app.use(Vant)
app.mount('#app')
