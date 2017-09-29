<script>
export default {
  name: 'ticket-list',
  props: ['tickets', 'active-ticket-id'],
  mounted(){ castShadows(this.$el[0]); }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .ticket-list.blue-list
    .item(v-for="ticket in tickets" v-bind:class="[ticket.status]")
      .info
        .name {{ticket.title}}
        .details(v-if="ticket.status =='open'" )
          img.shadow-icon(data-src="ticket-open")
          .txt Open
        .details(v-if="ticket.status =='closed'" )
          img.shadow-icon(data-src="ticket-closed")
          .txt Closed
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
    .item{
      &.closed{background: #99B0BA;}
      .details{display: flex; align-items: center;
        .txt  {margin-left:8px; }
      }
    }
  }
</style>
