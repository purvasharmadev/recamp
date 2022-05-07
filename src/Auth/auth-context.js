import { createContext, useContext, useState, useEffect } from "react";
import { getDataFromLocal } from "../Hooks/useLocalStorage";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    getDataFromLocal("isLoggedIn", false)
  );
  const [error, setError] = useState("");
  const [response,setResponse] = useState("")
  const [userDetail,setUserDetail] = useState(
    getDataFromLocal("userData",{
        name:"",
        isAnonymous:true,
        emailVerfied:false,
        email:""
        
    })
)

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setIsLoggedIn(() => true);
        setResponse("Successfully Logged In!")
        setUserDetail({
            ...userDetail,name:result.user.displayName,isAnonymous:result.user.isAnonymous,emailVerified:result.user.emailVerfied,email:result.user.email
        })
      })
      .catch((error) => {
        setError("Something Went Wrong! ",error);
      })
  };

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        setIsLoggedIn(() => false);
        setResponse("Successfully Logged Out!")
      })
      .catch((error) => {
        setError("Something Went Wrong! ", error);
      });
  };

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    localStorage.setItem("userData",JSON.stringify(userDetail))
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, signInWithGoogle, signOut,error,response,setResponse,userDetail }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
