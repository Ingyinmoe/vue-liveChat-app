<template>
  <div class="form">
      <h2>Sign Up</h2>

      <form @submit.prevent="SignUp">
            <div class="input-ctr">
                <input type="text" placeholder="Enter username" v-model="username_data">
                <input type="email" placeholder="Enter email" required v-model="email_data">
                <input type="password" placeholder="Enter password" required v-model="pass_data">
                <div v-if="error" class="error">{{error}}</div>
            </div>
            <div class="btn-ctr">
                <button>Sign Up</button>
            </div>
      </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import SignUpFun from '../composables/SignUp';

export default {
        setup(props,context){
        let username_data = ref("");
        let email_data = ref("");
        let pass_data = ref("");

        let { error , CreateNewAccount } = SignUpFun();

        let SignUp =async ()=>{
            let response = await CreateNewAccount(email_data.value,pass_data.value,username_data.value);
            if(response){
                context.emit('PushChatRoom');
            }
        };

        return { email_data , pass_data , SignUp , username_data , error }
    }
}
</script>

<style>
.error{
    color: #ff0000;
    font-size: 12px;
}
</style>