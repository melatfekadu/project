/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify';

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.config.productionTip = false

// eslint-disable-next-line one-var

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
