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
        .summary {{ ticket.summary }}
        .id {{ticket.id}}
        .status(v-if="ticket.status !='closed'" )
          img.shadow-icon(data-src="ticket-open")
          .txt Open
        .status(v-else)
          img.shadow-icon(data-src="ticket-closed")
          .txt Closed
      .button.lifecycle( @click="$emit('viewTicket', ticket.id)" v-bind:class="{ing:activeTicketId == ticket.id}") View
    .btn.basic(v-on:click="$emit('newTicket')" ) Create a New Ticket
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .ticket-list        {
    .lifecycle:before {margin-left:-15px; border: 1px solid rgba(#12AAE4, 0.2); border-left:1px solid #12AAE4;
    }
    .item             {position: relative;
      .name           {margin-top:-7px;}
      .id             {position: absolute;right:20px; top:13px; color:#166CA6;
        &:before      {content:"#"; }
      }
      .summary        {font-size:14px; color:#166CA6; margin-top:1px; text-overflow: ellipsis; width: 465px; white-space: nowrap; overflow: hidden; }
      .status         {display: flex; align-items: center; font-size:13px; color:#8CDDFF; text-transform: uppercase; margin-top:5px;
        .txt          {margin-left:8px; }
      }
      &.closed        {background: #99B0BA;
        .details      {color:#54646E;}
        .status       {color:white; }
        .id           {position: absolute;right:20px; top:10px; color:#54646E;}
      }
    }
  }
</style>
