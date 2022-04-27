import { ref } from "vue";
import { auth } from '../firebase/config'

let error= ref(null);

let CreateNewAccount =async (email,password,displayName) =>{
    try{
        let response = await auth.createUserWithEmailAndPassword(email,password)
        if(!response){
            throw new Error("Something went wrong !")
        }
        response.user.updateProfile({
            displayName
        })
        return response;
    }catch(err){
        error.value = err.message;
        console.log(error.value)
    }
}
let SignUpFun = () =>{
    return { error , CreateNewAccount}
}
export default SignUpFun;