import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

store.commit('INIT_JOKES', [{test_jokes_1: 'This jokes state type'}, {test_jokes_2: "this is jokes 2"}])

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
