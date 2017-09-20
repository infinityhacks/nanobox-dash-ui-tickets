require('nanobox-core-styles/scss/_base.scss')
require("script-loader!../node_modules/shadow-icons/rel/app.js")

import Shim from './shim/shim'
import tickets from '../src/main.js'
import Vue from 'vue'

Vue.config.productionTip = false;

let callbacks = {
  getTicket(id,cb) {
    cb( shim.activeTicket )
  },
  addCommentToTicket(id, message, timeStamp, cb) {
    shim.addCommentToTicket(message, timeStamp)
    cb({})
  },
  createTicket(info, cb) {
    console.log( `Creating a ticket with this info` )
    console.log( info );
    cb({error:"hmm, some error"})
  }
}

window.shim = new Shim()

new Vue({
  el       : '#app',
  template : '<tickets :model="model" :callbacks="callbacks"/>',
  data     : {
    model     : shim.data,
    callbacks : callbacks
  },
  components:{ tickets }
})
