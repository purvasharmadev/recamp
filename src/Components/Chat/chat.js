import {useState,useEffect} from "react"
import "./chat.css";
import {db,auth} from "../../firebase-config";
import {
    addDoc,
    collection,
    getDocs,
    updateDoc,
    deleteDoc,
    doc,
    query,
    QueryDocumentSnapshot,
    onSnapshot,
  } from "firebase/firestore";
  

function Chat(){
    const [user,setUser] = useState();
    const MsgRef = collection(db, "messages");
    const [text,setText] = useState("")
    const [msg,setMsg] = useState([])

  // Create new Task
  async function createMsg() {
    if (text !== undefined) {
      const add = await addDoc(MsgRef, {
          userName:auth.currentUser.displayName,
          text:text
      });
      setMsg(" ");
      return add;
    } else {
      console.log("please add details");
    }
  }
  const sendMsg = () =>{
     {
         msg && createMsg()
     } 
  }
  //  get List Of task
  async function getMsg() {
    await getDocs(MsgRef);
    onSnapshot(MsgRef, (res) => {
      setMsg(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }

  useEffect(()=>{
      getMsg()
  },[])
  console.log("msg ", msg)

    return(
        <>
        <div className="chat container">
            <div>
                {msg.length !== 0 ?
                    msg.map((item)=>{
                      return(  <div className={`${auth.currentUser.displayName !== item.userName ? "reciever" :"sender" }`}>
                            <span>{item.userName.slice(" ")}</span>

                            <p>{item.text}</p>
                        </div>)
                    }):""
                }

            </div>

            <div className="flex">
        <input onChange={(e)=>setText(e.target.value)} type="text" placeholder="send a message"/>
        <button onClick={sendMsg}>Send</button>
        </div>


        </div>
            

        </>
    )
}

export {Chat}