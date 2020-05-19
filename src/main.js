import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import  router from './router'
import vuex from 'vuex'
import {store} from './store'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http=axios
Vue.use(vuex)
new Vue({
  axios,
  vuetify,
  router,
  vuex,
  store, //shallow copy (프로토타입 디자인패턴)
  render: h => h(App)
}).$mount('#app')
