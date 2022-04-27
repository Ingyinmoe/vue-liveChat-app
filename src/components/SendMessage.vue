<template>
  <div class="containerr">
      <form>
          <textarea placeholder="some message ... " v-model="message"></textarea>
          <img src="../assets/send.png" @click="SendMessage">
      </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import GetUserFun from '../composables/GetUser'
import { timestamp } from '../firebase/config'
import SendMessageFun from '../composables/SendMessage'

export default {
    setup(){
        let message = ref("");
        let { UserInfo } = GetUserFun();
        let { error , SendDoc } = SendMessageFun("messages");
        
        let SendMessage =async ()=>{
            let messageInfo = {
                message_details:message.value,
                user_detail:UserInfo.value.displayName,
                send_time:timestamp()
            }

            if(message.value){
                await SendDoc(messageInfo);
            }
            message.value = "";
        }

        return { SendMessage , message }
    }
}
</script>

<style scoped>
.containerr{
    margin: 2px auto;
    border-radius: 8px;
    padding: 12px;
}
.containerr form{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.containerr form textarea{
    width: 100%;
    border: 1px solid #999;
    outline: none;
    border-radius: 20px;
    font-size: 15px;
    color: #666;
    padding: 10px;
}
.containerr form img{
    width: 36px;
    margin: 4px 8px;
    cursor: pointer;
}
</style>