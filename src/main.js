
require("./css/app.css");
require("./css/base.css");
require("./css/animate.css");

import Vue from 'vue'
import App from './App'
import router from './router'
import Resource from 'vue-resource'
import Vuex from 'vuex'

Vue.use(Vuex);
Vue.use(Resource)
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
