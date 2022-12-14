import React, {useState}  from "react";
import AuthContext from "./AuthContext";
      
function AuthProvider(props){
    
    const [userLogin, setUserLogin] = useState(localStorage.getItem("login" || false))
    const [userInfo, setUserInfo] = useState({})

    const loginUser = (userInfo) =>{
        setUserLogin(true)
        setUserInfo(userInfo)
        localStorage.setItem("login", true)
    } 
    const logoutUser = () =>{
        setUserLogin(false)
        localStorage.removeItem("login")
    }
    return(
        <AuthContext.Provider value={{userLogin,userInfo,loginUser, logoutUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthProvider