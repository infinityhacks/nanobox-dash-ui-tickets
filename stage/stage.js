require('nanobox-core-styles/scss/_base.scss')
require("script-loader!../node_modules/shadow-icons/rel/app.js")

import Shim from './shim/shim'
import tickets from '../src/main.js'
import Vue from 'vue'

Vue.config.productionTip = false;

let callbacks = {
  // Get ticket details from groove and call callback to display:
  getTicket(id, cb) {
    cb( shim.activeTicket )
  },
  // Add a comment to a ticket
  addCommentToTicket(id, message, cb) {
    shim.addCommentToTicket(message)
    cb({})
  },
  // Create a new ticket
  createTicket(info, cb) {
    console.log( `Creating a ticket with this info` )
    console.log( info );
    cb({error:"hmm, some error"})
  },
  // Close Ticket
  closeTicket(id, cb) {
    console.log( `Closing ticket with the id : ${id}` )
    cb({})
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
