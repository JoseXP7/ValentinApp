import './assets/style.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/sweetalert2/dist/sweetalert2.min.js'
import '../node_modules/sweetalert2/dist/sweetalert2.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import '../node_modules/aos/dist/aos.css'
import AOS from 'aos'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

AOS.init()
