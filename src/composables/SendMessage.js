import { ref } from "vue"
import { db } from "../firebase/config"

let SendMessageFun = (collection)=>{
    let error = ref(null);

    let SendDoc =async (doc)=>{
        try{
            await db.collection(collection).add(doc);
        }catch(err){
            console.log(err.message);
            error.value = "Message cannot send";
        }
    }

    return { error , SendDoc }
}

export default SendMessageFun;