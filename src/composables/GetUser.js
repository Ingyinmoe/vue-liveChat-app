import { auth } from '../firebase/config'
import { ref } from '@vue/reactivity'

let UserInfo = ref(auth.currentUser);

auth.onAuthStateChanged(change => {
    UserInfo.value = change;
})

let GetUserFun = ()=>{
    return { UserInfo }
}

export default GetUserFun;