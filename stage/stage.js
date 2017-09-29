require('nanobox-core-styles/scss/_base.scss')
require("script-loader!../node_modules/shadow-icons/rel/app.js")

import Shim from './shim'
import tickets from '../src/main.js'
import Vue from 'vue'

Vue.config.productionTip = false;

let callbacks = {
  // Get ticket details from groove and call callback to display:
  getTicket(id, cb) {
    // Simulate request delay..
    setTimeout( ()=> {
      shim.data.activeTicket = shim.activeTicket
      cb({})
    }, 1200*Math.random() );
  },
  // Add a comment to a ticket
  addCommentToTicket(id, message, cb) {
    shim.addCommentToTicket(message)
    cb({})
  },
  // Create a new ticket
  createTicket(info, cb) {
    setTimeout( ()=> {
      shim.addTicketToList()
      cb({})
      // cb({error:"hmm, some error"})
    }, 1200*Math.random() );
  },
  // Stop viewing a ticket
  exitTicket() {
    shim.data.activeTicket = null
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
