import React, { useState }  from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logIn as storeLogin } from '../Store/authSlice'
import { useForm } from 'react-hook-form'
import authService from "../Service/Auth"
import Logo from './Logo'
import Button from "./Button"
import Input from "./Input"



function LogIn() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register , handleSubmit} = useForm();
    const [error , setError] = useState("");

    const login = async(data)=>{
        setError("");
        try {
            // If user log in, then first Create a Log-In session. 
            const session = await authService.logIn(data);
            // Now check if user has succesffuly logged in ie, session is created or not.
            if(session){
                // if session is created then get Current User Data using getCurrentUser() 
                console.log(`session: ${session}`)
                let userData = await authService.getCurrentUser(); // Now userData is actually a Object that holds the user data inside it.

                // IF userData is not null ie, user exist then dispatch the data to update the status of the user in Store (Redux Toolkit).
                if(userData) {
                    dispatch(storeLogin(userData));
                }
                // userData ? dispatch(storeLogin(userData)) :  console.log('Failed to fetch the current user data');

                // If all done Successfuly Navigate the User to the Page.
                console.log('Naviagte to Home Page')
                navigate("/")

            }
        } catch (error) {
            setError(error.message);
        }
    }

  return (
    <div className='flex items-center justify-center w-full'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>

        <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-[100px]">
                <Logo width='100%'/>
            </span>
        </div>

        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
            Don't have any account?&nbsp;
            <Link
                to="/signup"
                className="font-medium text-primary transition-all duration-200 hover:underline"
            >
                Sign Up
            </Link>
        </p>
        
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(login)} className='mt-8'>

            <Input
            label = "Email"
            type = "email"
            placeholder = "Enter Your Email "
            {...register("email" , {
                required : true,
                validate : {
                    matchPattern: (value) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                }
            })}
            required = "true"
            />
            <Input
            label= "Password"
            type="password"
            placeholder ="Enter Your Password "
            {...register("password" , {
                required: true,
            })}
            required = "true"
            />

            <Button
            buttonText="Log-In"
            type='submit'
            className='w-full hover:bg-green-700'
            />
        </form>
        </div>
    </div>
  )
}

export default LogIn