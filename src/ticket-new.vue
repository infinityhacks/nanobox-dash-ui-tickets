<script>
import {back, dropdown, saveSection, checkbox, gravatar} from 'lexi'
import commentor from './components/commentor'
export default {
  name       : 'ticket-new',
  components : {back, dropdown, saveSection, commentor, checkbox, gravatar},
  props      : ['saveCb', 'model'],
  data() {
    let data = {
      category   : "general",
      appId      : "none",
      subject    : "",
      message    : "",
      creating   : false,
      sendEmails : false,
      showTeam   : false,
      users      : {}
    }
    for ( let key in this.model.users ) {
      data.users[this.model.users[key].user] = this.model.users[key].email == this.model.userEmail
    }
    return data
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
      let selectedUsers = []
      for ( let key in this.users ) {
        if( this.users[key] )
          selectedUsers.push(key)
      }
      return {
        category     : this.category,
        appId        : this.appId,
        subject      : this.subject,
        message      : this.message,
        users        : selectedUsers,
        doSendEmails : this.sendEmails
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
    .push-left.border
      checkbox( v-model='sendEmails')
        .label email ticket updates
    .push-left.border
      .add(@click="showTeam=!showTeam" v-if="!showTeam") Add Team Members to Ticket
      .team(v-if="showTeam" )
        .member(v-for="user in model.users" v-bind:class="{'active-user':user.email == model.userEmail}")
          checkbox(v-model='users[user.user]' :id="user.user")
            gravatar(:email="user.email" :round="true" :size="30")
            .name {{ user.user }}
    save-section(@save="onSave" @cancel="$emit('exit')" save-text="Create Ticket" :cycling="creating")
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .ticket-new        {display: flex; flex-direction: column;
    > *              {margin:10px 0; }
    .row             {display: flex;
      > *            {margin-right:15px; }
    }
    input            {width: 100%; }
    .border          {border-top:solid 1px #DFDADA; padding-top:10px; margin-bottom:0; }
    .add             {font-size: 16px; font-weight: 600; font-style: italic; color: #00a2ed; padding-left: 6px; cursor: pointer; display: inline;
      &:hover        {color:#0077D7}
    }
    .team            {margin-top:5px; display: flex; flex-direction: column;
      .member        {margin:2px 0; display: flex; align-items: center; font-size: 16px; font-weight: 600; font-style: italic;
        &.active-user{opacity: 0.4; pointer-events: none; order:-1; }
        .gravatar    {margin-left:10px;   }
      }
    }
  }
</style>
