<script>
export default {
  name: 'ticket-list',
  props: ['tickets']
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
      .button(@click="$emit('viewTicket', ticket.id)" ) View
    .btn.basic(v-on:click="$emit('newTicket')" ) Create a New Ticket
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .ticket-list {}
</style>
