<template>
  <div class="cm-view">
    <RoomNav></RoomNav>
    <ChatWindow></ChatWindow>
    <SendMessage></SendMessage>
  </div>
</template>

<script>

import ChatWindow from '../components/ChatWindow'
import SendMessage from '../components/SendMessage'
import RoomNav from '../components/RoomNav'
import GetUserFun from '../composables/GetUser'
import {useRouter} from 'vue-router'

export default {
  components: {
    ChatWindow,
    SendMessage, RoomNav },
  
}
</script>

<style>
.cm-view{
  background: #fff;
  margin: 0 auto;
  width: 80%;
  border-radius: 8px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
</style>