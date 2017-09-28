<script type="text/babel">
export default {
  name: 'no-tickets',
  mounted(){ castShadows(this.$el[0]); }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .no-tickets
    img.shadow-icon(data-src="big-tickets-icon")
    .btn.basic(@click="$emit('newTicket')" ) Create a New Ticket
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .no-tickets { display: flex; align-items: center; flex-direction: column; padding-top:70px; 
    .btn      { margin:30px 0 0; }
  }
</style>
