// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

import JDatePicker from 'vue-jlunar-datepicker';
import DatePicker from 'vue2-datepicker'
import $ from 'jquery'
import fieldValidation from 'vue-bootstrap-validate'
import verify from "vue-verify-plugin";


Vue.component('field-validation', fieldValidation);
Vue.component("j-date-picker",JDatePicker);
Vue.component("date-picker",DatePicker);
Vue.use(verify,{
  blur:true
});

Vue.config.productionTip = false

Vue.prototype.$ajax = axios
axios.defaults.baseURL = process.env.BASE_API;

axios.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
