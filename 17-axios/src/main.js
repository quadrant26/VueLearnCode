import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import axios from 'axios'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }).then( res => {
//   console.log(res);
// })

// axios.get('http://123.207.32.32:8000/home/multidata').then( res => {
//   console.log(res);
// })
