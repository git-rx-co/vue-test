import { createApp } from 'vue'
import App from './App.vue'
import Router from './Router/index'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "./assets/style.css"; 

import "./assets/css/animate.min.css"; 
import "./assets/css/aos.css"; 
import "./assets/css/default.css"; 
import "./assets/css/flaticon.css"; 
import "./assets/css/fontawesome-all.min.css"; 
import "./assets/css/style.css"; 
import "./assets/css/magnific-popup.css"; 
import "./assets/css/odometer.css"; 
import "./assets/css/responsive.css"; 
import "./assets/css/slick.css"; 
import "./assets/css/owl.carousel.min.css"; 
 

 createApp(App).use(Router).mount('#app')
 
