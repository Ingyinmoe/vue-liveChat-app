<template>
  <div class="container">
      <div class="reg">
            <div v-if="LoginFormShow">
                <SignIn @PushChatRoom="PushChatRoom"></SignIn>
                <p>Not a member ? <span @click="LoginFormShow=!LoginFormShow" class="spa-ctr">Create account now !</span></p>
            </div>
            <div v-else>
                <SignUp @PushChatRoom="PushChatRoom"></SignUp>
                <p>Already a member ? <span @click="LoginFormShow=!LoginFormShow" class="spa-ctr">Login account now !</span></p>
            </div>
      </div>
  </div>
</template>

<script>
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
  components: { SignUp , SignIn },
  setup(){
      let LoginFormShow = ref(true);
      let router = useRouter();

      let PushChatRoom = ()=>{
          router.push({name:'ChatRoom'})
      }
      return { LoginFormShow , PushChatRoom }
  }

}
</script>

<style>
.container{
    margin: 60px auto;
    background: #fff;
    width: 33%;
    border-radius: 8px;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    padding: 20px;
}
.form h2{
    text-align: center;
    margin: 20px 0;
}
.input-ctr input{
    display: block;
    margin-bottom: 10px;
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #999;
    outline: none;
    font-size: 15px;
}
.input-ctr span{
    color: #42b883;
    font-size: 13px;
    font-weight: 600;
} 
.btn-ctr{
    text-align: center;
}
button{
    margin: 12px 0;
    background-color: #42b883;
    color: #fff;
    font-size: 16px;
    padding: 8px 22px;
    border-radius: 20px;
    outline: none;
    border: none;
    font-weight: bold;
    cursor: pointer;
}
.reg p{
    text-align: center;
}
.spa-ctr{
    font-weight: 600;
    text-decoration: underline;
    color: #42b883;
    cursor: pointer;
}
@media screen and (max-width: 456px){
    .container{
        width: 90%;
    }
}
</style>