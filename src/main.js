import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// svg
import '@svg/index'
import SvgIcon from '@c/SvgIcon'
// import '@svg/icons/sprite/sprite.symbol.svg'

Vue.component('svgIcon', SvgIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
