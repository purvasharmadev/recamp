import { auth, provider } from "../firebase-config"
import {signInWithPopup,onAuthStateChanged, getAuth} from "firebase/auth"
import { useNotify } from "../Hooks/useNotify"
import {useState} from "react"

// SignIn
export const signInWithGoogle = () =>{
        signInWithPopup(auth,provider).then((result)=>{
            console.log(result)
            useNotify("login success","1","success")      
          }).catch((error)=>{
            console.log(error)
          })
      
    
  }


// SignOut
export const signOut= ()=>{
     auth.signOut().then(()=>
     {
         useNotify("logout success","1","success")

    })
     .catch((error)=>console.log("error ", error))

}