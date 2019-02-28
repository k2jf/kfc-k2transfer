import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import './styles/index.scss'
import 'iview/dist/styles/iview.css'
import 'dayjs/locale/zh-cn'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
