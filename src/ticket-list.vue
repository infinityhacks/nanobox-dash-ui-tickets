<script>
export default {
  name: 'ticket-list',
  props: ['tickets', 'active-ticket-id']
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .ticket-list.blue-list
    .item(v-for="ticket in tickets" )
      .info
        .name {{ticket.title}}
        .details Details
      .button.lifecycle( @click="$emit('viewTicket', ticket.id)" v-bind:class="{ing:activeTicketId == ticket.id}") View
    .btn.basic(v-on:click="$emit('newTicket')" ) Create a New Ticket
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .ticket-list {
    .lifecycle:before{margin-left:-15px;
      border: 1px solid rgba(#12AAE4, 0.2);
      border-left:1px solid #12AAE4;
    }
  }
</style>
