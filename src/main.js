import Vue from 'vue'
import router from './router'
import App from './components/App'

new Vue({
  el: '#root',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App),
})