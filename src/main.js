import Vue from 'vue'
import App from './App.vue'
import swallowui from "swallow-ui"
// import index from './index'
// Vue.use(index)
// import mjkui from 'mjkui'
Vue.use(swallowui)
console.log(swallowui)
// eventBus
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
