<template>
   <div class="form">
      <h2>Sign In</h2>

      <form @submit.prevent="SignIn">
            <div class="input-ctr">
                <input type="email" placeholder="Enter email" required v-model="email_data">
                <input type="password" placeholder="Enter password" required v-model="pass_data">
                <div v-if="error" class="error">{{error}}</div>
            </div>
            <div class="btn-ctr">
                <button>Sign In</button>
            </div>
      </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import SignInFun from '../composables/SignIn'

export default {
    setup(props,context){
        let email_data = ref("");
        let pass_data = ref("");

        let { error , LogInAccount }= SignInFun();

        let SignIn =async ()=>{
            let response = await LogInAccount(email_data.value,pass_data.value)    
            if(response){
                context.emit('PushChatRoom');
            }
        };

        return { email_data , pass_data , SignIn , error }
    }
}
</script>

<style>

</style>