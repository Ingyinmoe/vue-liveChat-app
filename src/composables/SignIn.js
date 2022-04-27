import { ref } from "vue";
import { auth } from '../firebase/config'

let error = ref(null);

let LogInAccount =async (email,pass)=>{
    try{
        let response = await auth.signInWithEmailAndPassword(email,pass)
        if(!response){
            throw new Error('Something went wrong !')
        }
        return response;
    }catch(err){
        error.value = err.message;
        console.log(err.message);
    }
}

let SignInFun = ()=>{
    return { error , LogInAccount }
}

export default SignInFun;