import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import router from './router/index'
import store from './store/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faLock, faEyeSlash, faEye, faMehRollingEyes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/styles/index.scss'
require('../mock/index.js')

library.add(faUser, faLock, faEyeSlash, faEye, faMehRollingEyes)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// 阻止启动时生成生产提示
Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.prototype.$http = axios;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

