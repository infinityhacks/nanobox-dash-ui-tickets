<script>

import ticketList from './ticket-list'
import ticketView from './ticket-view'
import ticketNew  from './ticket-new'
import {errors} from 'lexi'

export default {
  name: 'tickets',
  props:['model', 'callbacks'],
  data() {
    return {
      state        : "list",
      activeTicket : "",
      error        : null
    };
  },
  watch:{
    state() {this.clearError()} // Anytime the state changes, clear any errors
  },
  components:{ticketList, ticketView, ticketNew, errors},
  methods:{
    viewTicket(id) {
      this.state = "ticket.view"
      this.callbacks.getTicket(id, (ticket)=>{
        this.activeTicket = ticket
      })
    },
    onError(error) {this.error=error},
    clearError()   {this.error=null},
    closeTicket(id) {
      console.log( `close ticket : ${id}` )
    },
    addCommentToTicket(id, comment) {
      this.callbacks.addCommentToTicket(id, comment, new Date().getTime(), (results)=>{
        if(results.error)
          error = results.error
        else
          this.$refs.ticketView.clearInput()
      })
    }
  },
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .tickets
    errors(:errors="error")
    ticket-list(v-if="state == 'list'" :tickets="model.tickets" @viewTicket="viewTicket" @newTicket="state='ticket.new'" )
    ticket-view(v-if="state == 'ticket.view'" :model="model" :ticket="activeTicket" @exit="state='list'" @onError="onError" @ticket-close="closeTicket" @ticket-comment="addCommentToTicket" ref="ticketView")
    ticket-new( v-if="state == 'ticket.new'" :model="model" @exit="state='list'" :saveCb="callbacks.createTicket" @error="onError" )
</template>

<!--
  **** C S S ****
-->

<style lang="scss" >
  .tickets{
    @import "./scss/shared";
  }
</style>
