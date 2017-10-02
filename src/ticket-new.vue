<script>
import {back, dropdown, saveSection} from 'lexi'
import commentor from './components/commentor'
export default {
  name       : 'ticket-new',
  components : {back, dropdown, saveSection, commentor},
  props      : ['saveCb', 'model'],
  data() {
    return{
      category : "general",
      appId    : "none",
      subject  : "",
      message  : "",
      creating : false
    }
  },
  methods:{
    onSave() {
      this.creating = true
      this.saveCb( this.getData(), (results)=>{
        this.creating = false
        if( results.error != null ){
          this.$emit('error', results.error )
        }else
          this.$emit('exit')
      })
    },
    getData() {
      return {
        category : this.category,
        appId    : this.appId,
        subject  : this.subject,
        message  : this.message
      }
    }
  }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .ticket-new
    back(@back="$emit('exit')")
    .row.pad-left
      dropdown(v-model="category")
        .option(value="general") General Support
        .option(value="app") App Specific Support
      dropdown(v-model="appId" v-if="category == 'app'" )
        .option(value="none") Select an app
        .option(v-for="app in model.apps" :value="app.id" :key="app.id") {{ app.name }}
    .pad-left
      input(v-model="subject" placeholder="Subject")
    commentor(:email="model.userEmail")
      textarea(v-model="message" placeholder="Ticket Details")
    save-section(@save="onSave" @cancel="$emit('exit')" save-text="Create Ticket" :cycling="creating")
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .ticket-new {display: flex; flex-direction: column;
    > *       {margin:10px 0; }
    .row      {display: flex;
      > *     {margin-right:15px; }
    }
    input     {width: 100%; }
  }
</style>
