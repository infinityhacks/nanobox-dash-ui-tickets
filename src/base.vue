<script>

import ticketList from './ticket-list'
import ticketView from './ticket-view'
import ticketNew  from './ticket-new'
import noTickets  from './no-tickets'
import {errors} from 'lexi'

export default {
  name: 'tickets',
  props:['model', 'callbacks'],
  components:{ticketList, ticketView, ticketNew, errors, noTickets},
  data() {
    return {
      state          : "list",
      error          : null,
      activeTicketId : null
    }
  },
  watch:{
    state() {this.clearError()} // Anytime the state changes, clear any errors
  },
  methods:{
    viewTicket(id) {
      this.activeTicketId = id
      this.callbacks.getTicket(id, (results)=>{
        if(results.error != null)
          this.error = results.error
      })
    },
    onError(error) {this.error=error},
    clearError()   {this.error=null},
    closeTicket(id) {
      this.callbacks.closeTicket(id, (results)=>{
        if(results.error)
          this.error = results.error
        else{
          this.exitTicket()
          this.state = 'list'
        }
      })
    },
    addCommentToTicket(id, comment) {
      this.callbacks.addCommentToTicket(id, comment, (results)=>{
        if(results.error)
          this.error = results.error
        else
          this.$refs.ticketView.clearInput()
      })
    },
    setListState() {
      if(this.model.tickets.length < 1)
        this.state = 'no-tickets'
      else if(this.model.activeTicket != null)
        this.state = 'ticket.view'
      else
        this.state = 'list';
    },
    exitTicket(){
      this.callbacks.exitTicket()
    }
  },
  computed:{
    activeTicket(){
      return this.model.activeTicket
    }
  },
  watch:{
    activeTicket(val){
      if(val == null)
        this.activeTicketId = null
      this.setListState()
    }
  },
  mounted(){
    this.setListState()
  },
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .tickets
    errors(:errors="error")
    no-tickets( v-if="state == 'no-tickets'"  @newTicket="state='ticket.new'" )
    ticket-list(v-if="state == 'list'" :activeTicketId="activeTicketId" :tickets="model.tickets" @viewTicket="viewTicket" @newTicket="state='ticket.new'" )
    ticket-view(v-if="state == 'ticket.view'" :model="model" :ticket="activeTicket" @exit="exitTicket" @onError="onError" @ticket-close="closeTicket" @ticket-comment="addCommentToTicket" ref="ticketView")
    ticket-new( v-if="state == 'ticket.new'" :model="model" @exit="setListState" :saveCb="callbacks.createTicket" @error="onError" )
</template>

<!--
  **** C S S ****
-->

<style lang="scss" >
  .tickets{
    @import "./scss/shared";
  }
</style>
