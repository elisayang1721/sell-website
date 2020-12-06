import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// svg
import '@svg/index'
import SvgIcon from '@com/svg/SvgIcon'
// import '@svg/icons/sprite/sprite.symbol.svg'

// css
import '@css/reset.scss'
import '@css/layout.scss'
// import '@css/_variable.scss'

// mock
if (process.env.NODE_ENV === 'development') {
  console.log('if')
  require('./mock/mock')
} else {
  console.log('else')
}

Vue.component('svgIcon', SvgIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
