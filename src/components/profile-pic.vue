<script>
import md5 from 'blueimp-md5'
export default {
  name: 'profile-pic',
  props:['email'],
  data() {return{
    gravatarHash:md5(this.email)
  }},
  methods:{
    getGravatarUrl() { return `https://secure.gravatar.com/avatar/${this.gravatarHash}?d=retro&r=pg&size=50` }
  }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  img(:src="getGravatarUrl()")
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  img{margin-right:15px; }
</style>
