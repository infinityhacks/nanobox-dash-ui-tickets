<script>
import {gravatar} from 'lexi'
export default {
  name       : 'commentor',
  props      : ['email'],
  components : {gravatar}
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .commentor
    gravatar(:email="email")
    slot
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .commentor {display: flex; align-items:flex-end;
    textarea {resize: vertical; height:125px; width:100%; min-height: 50px; }
  }
</style>
