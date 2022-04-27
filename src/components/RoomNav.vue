<template>
  <div class="container-2" v-if="UserInfo">
    <div class="room-nav">
        <div>
            <p>Hello {{UserInfo.displayName}} !</p>
            <span>Singed as {{UserInfo.email}}</span>
        </div>
        <button class="btn-ctr" @click="SignOut">SignOut</button>
    </div>
    <hr>
  </div>
</template>

<script>

import SendMessage from './SendMessage'
import SignOutFun from '../composables/SignOut'
import GetUserFun from '../composables/GetUser'
import router from '@/router';

export default {
  components: { SendMessage },
    setup(){

        let { SignOutAcc , error } = SignOutFun();
        let { UserInfo } = GetUserFun();

        let SignOut =async ()=>{
            await SignOutAcc();
            router.push('/')
        }

        return { SignOut , UserInfo }
    }
}
</script>

<style>
.container-2{
    background-color: #fff;
    margin: 60px auto 6px auto;
    border-radius: 8px;
    padding: 20px;
}
.room-nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.room-nav p{
    color: #000;
    font-size: 16px;
    letter-spacing: 2px;
    font-weight: 600;
}
.room-nav span{
    color: #777;
    font-size: 14px;
}
.room-nav button{
    background-color: #ff0000;
}
</style>