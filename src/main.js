import Vue from 'vue'
import App from './App.vue'
import tachyons from 'tachyons'


Vue.use(tachyons)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
