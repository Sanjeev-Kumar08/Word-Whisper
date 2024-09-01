import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function CheckAuth({children , authentication = "true"}) {

    const authStatus = useSelector((state) => state.auth.status) // false
    const [loader, setLoader] = useState(true)
    const navigate = useNavigate();

    useEffect(()=>{

        // false && (false === false) => true && false => false
        if(!(authentication && (authStatus === authentication))){
            if(children.type.name == "SignUpPage"){
                console.log("Sign Up Page is CLicked")
                navigate("/signup")
            }
            else if(children.type.name == "LogInPage"){
                console.log("Log In Page is CLicked")
                navigate("/login")
            }
            // else{
            //     navigate("/login")
            // }
        }
        setLoader(false)
    } , [authStatus, navigate, authentication])


    return (loader 
    ? <h1>Content is Loading... Please Wait!!</h1> 
    : <>{children}</>
    );
}

export default CheckAuth;