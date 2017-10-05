<script>
import md5 from 'blueimp-md5'
export default {
  name: 'profile-pic',
  props:{
    'email' : {type:String},
    round   : {type:Boolean, default:false},
    size    : {type:Number,  default:50}
  },
  data() {return{
    gravatarHash:md5(this.email)
  }},
  methods:{
    getGravatarUrl() { return `https://secure.gravatar.com/avatar/${this.gravatarHash}?d=retro&r=pg&size=${this.size}` }
  }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .profile-pic(v-bind:class="{round:round}")
    img(:src="getGravatarUrl()")
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .profile-pic {
    img        {margin-right:15px; }
    &.round    {
      img      {border-radius:50%}
    }
  }
</style>
