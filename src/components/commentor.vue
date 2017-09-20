<script>
import profilePic from './profile-pic'
export default {
  name       : 'commentor',
  props      : ['email'],
  components : {profilePic}
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .commentor
    profile-pic(:email="email")
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
