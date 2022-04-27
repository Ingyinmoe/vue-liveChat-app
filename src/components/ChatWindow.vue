<template>
  <div class="chat-window">
    <div class="message" ref="msgBox">
      <div class="each-message" v-for="message in formattedDate" :key="message.id">
        <p class="send-time" v-if="send_time">{{message.send_time}} ago</p>
        <span class="sender-message" @click="ShowTime">{{message.message_details}}</span>
        <p class="sender">sent by {{message.user_detail}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase/config'
import { ref } from '@vue/reactivity'
import { formatDistanceToNow } from 'date-fns'
import { computed, onUpdated } from '@vue/runtime-core'

export default {
  setup(){
    let messages = ref([]);
    let msgBox = ref(null);
    let send_time = ref(false);

    onUpdated(()=>{
      msgBox.value.scrollTop = msgBox.value.scrollHeight;
    });

    let formattedDate = computed(()=>{
      return messages.value.map((msg)=>{
        let formattedTime = formatDistanceToNow(msg.send_time.toDate())
        return { ...msg , send_time:formattedTime }
      })
    });

    db.collection("messages").orderBy("send_time").onSnapshot((snap)=>{
      let DocData = [];
      snap.docs.forEach((doc)=>{
        let document = {id:doc.id,...doc.data()};
        doc.data().send_time && DocData.push(document);
      })
      messages.value = DocData;
    });

    let ShowTime = ()=>{
      if(send_time.value === true){
        send_time.value = false
      }else{
        send_time.value = true
      }
    };

    return { messages , formattedDate , msgBox , send_time , ShowTime }
  }
}
</script>

<style scoped>
.message{
  margin: 10px 0;
  padding: 10px 20px;
  height: 60vh;
  overflow: scroll;
  overflow-x: hidden;
}
p{
  margin: 6px 0;
}
.send-time{
  color: #666;
  font-size: 16px;
  text-align: center;
}
.sender-message{
  background: #777;
  color: #fff;
  padding: 4px 6px;
  font-size: 14px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
}
.sender{
  font-size: 12px;
  color: #999;
}
</style>