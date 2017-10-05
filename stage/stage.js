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
    setTimeout( ()=> {
      shim.addCommentToTicket(message)
      cb({})
    }, 2000*Math.random() );
  },
  // Create a new ticket
  createTicket(info, cb) {
    setTimeout( ()=> {
      console.log( "creating a ticked with this info :" )
      console.log( info )
      shim.addTicketToList()
      cb({})
      // cb({error:"hmm, some error"})
    }, 1200*Math.random()+1000 );
  },
  // Stop viewing a ticket
  exitTicket() {
    shim.data.activeTicket = null
  },
  // Close Ticket
  closeTicket(id, cb) {
    setTimeout( ()=> {
      console.log( `Closing ticket with the id : ${id}` )
      cb({})
    }, 2000*Math.random() );
  },
  // Reopen a previously closed ticket
  reopenTicket(id, cb) {
    setTimeout( ()=> {
      console.log( `Reopening ticket with the id : ${id}` )
      shim.activeTicket.status = 'open'
      cb({})
    }, 2000*Math.random() );
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
