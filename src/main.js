import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fasUser } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(fasUser)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

// 阻止启动时生成生产提示
Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

