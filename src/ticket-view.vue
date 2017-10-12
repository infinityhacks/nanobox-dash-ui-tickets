<script>
import {x, lifecycler, gravatar} from 'lexi'
import commentor                    from './components/commentor'
import timeAgo                      from 'javascript-time-ago'
timeAgo.locale(require('javascript-time-ago/locales/en'))

export default {
  name: 'ticket-view',
  props:['ticket', 'model'],
  components:{x, lifecycler, gravatar, commentor},
  data() {return{
    newComment : "",
    cycler     : ""
  }},
  methods:{
    comment() {
      if(this.newComment.length > 0){
        this.cycler = 'comment'
        this.$emit('ticket-comment', this.ticket.id, this.newComment)
      }
    },
    close() {
      this.cycler = 'close'
      this.comment()
      this.$emit('ticket-close', this.ticket.id)
    },
    reOpen() {
      this.cycler = 'reopen'
      this.$emit('ticket-reopen', this.ticket.id)
    },
    clearInput(){
      this.newComment = ""
    },
    getTime(timeStamp) {
      let date = new Date(timeStamp)
      let timeAgoEnglish = new timeAgo('en-US')
      return timeAgoEnglish.format( new Date(timeStamp) )
    }
  },
  computed:{
    comments(){return this.ticket.comments},
  },
  // any time the total number of comments changes, reset any cycler
  watch:{
    comments(){this.cycler = ""}
  },
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .ticket-view
    x.stretch(@click="$emit('exit')") Back
    .id {{ ticket.id }}
    .header.push-left
      .txt {{ ticket.title }}
      .status {{ ticket.status }}
    .message(v-for="(comment, i) in ticket.comments" )
      .info.pad-left
        .user {{ comment.user }}
        .time {{ getTime(comment.time) }}
      .body
        gravatar(:email="comment.email")
        .txt(v-html="comment.text")
    .rule.push-left
    commentor(:email="model.userEmail" v-if="ticket.status != 'closed'")
      textarea(v-model="newComment" placeholder="Add a comment")
    .actions.save-section
      lifecycler.close.lifecycle(v-if="ticket.status != 'closed'" @click="close" :cycle="cycler == 'close'") Close Ticket
      lifecycler.open.lifecycle(v-else @click="reOpen" :cycle="cycler == 'reopen'") Re-Open Ticket
      lifecycler(v-if="ticket.status != 'closed'" @click="comment" :cycle="cycler == 'comment'") Comment
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .ticket-view            {
    .id                   {text-align: right; margin-top:40px; color:#002F3C; font-style:italic; margin-bottom:8px; color:#476873;
      &:before            {content:"Ticket #"; }
    }
    .header               {display: flex; color:#002F3C; font-size:18px; border:solid 3px white; padding:10px 15px; margin-bottom:20px; align-items: baseline; justify-content: space-between;
      .status             {font-size: 12px; color:#11A7ED; text-transform: uppercase; }
    }
    .message              {
      .info               {display: flex; align-items: baseline; margin-bottom:6px; font-size:13px;
        .user             {color:#4F7180; font-weight: $semibold}
        .time             {color:#A1AEB3; font-style: italic; margin-left:6px; }
      }
      .body               {display: flex; align-items: flex-end;
        .txt              {background: white; flex-grow: 1; min-height: 50px; padding:12px 18px; box-sizing: border-box;}
      }
      &:not(last-of-type) {margin-bottom: 30px;}
    }
    .rule                 {border-bottom:solid 1px #CBD5DB; margin:20px 0 20px 65px; }
    .actions              {display: flex; justify-content: flex-end; margin-top:20px;
      .button             {margin-left:12px;
        &.close           {background:#51CAFD;
          &:hover         {background: #0297DF}
        }
      }
    }
  }
</style>
