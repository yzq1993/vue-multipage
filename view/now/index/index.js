// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import {bus,toastr} from '../../js/public'


Vue.config.productionTip = false

//window.bus = bus
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
})