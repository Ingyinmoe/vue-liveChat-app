import { ref } from "vue";
import { auth } from "../firebase/config"

let error = ref(null);

let SignOutAcc =async ()=>{
    try{
        await auth.signOut();
        console.log("sign out")
    }catch(err){
        error.value = err.message;
        console.log(error.value)
    }
};


let SignOutFun = ()=>{
    return { SignOutAcc , error }
};

export default SignOutFun;