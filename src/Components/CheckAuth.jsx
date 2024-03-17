import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function CheckAuth({children , authentication = "true"}) {

    const authStatus = useSelector((state) => state.auth.status)
    console.log(`AuthStatus : ${authStatus}`)
    const [loader, setLoader] = useState(true)
    const navigate = useNavigate();

    useEffect(()=>{
        /* agar user logged In hai to use Redirect kro us component pr || agr nahi hai logged In to use LogIn page dikhao*/

        // false && (false === false) => true && false => false
        if(!(authentication && (authStatus === authentication))){
            // navigate("/login")
            if(children.type.name == "SignUpPage"){
                console.log("Sign Up Page is CLicked")
            }
            else if(children.type.name == "LogInPage"){
                console.log("Log In Page is CLicked")
                // navigate("/login")
            }
            else{
                navigate("/login")
            }
        }
        setLoader(false)
    } , [authStatus, navigate, authentication])


    return (loader 
    ? <h1>Content is Loading... Please Wait!!</h1> 
    : <>{children}</>
    );

    // return (
    //     <div>
    //         <h1>Hey I'm Auth Checker</h1>
    //         {children}
    //     </div>
    // )
}

export default CheckAuth;