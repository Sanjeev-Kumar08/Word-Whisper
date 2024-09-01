import React, {useState} from 'react'
import authService from '../Service/Auth'
import Input from './Input'
import { useForm } from 'react-hook-form'
import Button from './Button'
import { logIn } from '../Store/authSlice'
import  { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Logo from './Logo'
import { Link } from 'react-router-dom'

function SignUp() {

    const [error, setError] = useState("") 
    const {register , handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const signUp = async(data)=>{
        setError("");
        console.log(data)
        try {
            if(data){
                const session = await authService.createAccount(data);
                if(session){
                    // User Created
                    const userData = await authService.getCurrentUser(session);
                    if(userData){
                        dispatch(logIn(data));
                    }
                navigate('/')
                }
            }
        } catch (error) {
            setError(error.message);
        }
    }

  return (
    <div className='flex items-center justify-center w-full'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>

        {/* Logo-Div */}
        <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-[100px]">
                <Logo width='100%'/>
            </span>
        </div>
        {/* Heading */}
        <h2 className="text-center text-2xl font-bold leading-tight">Sign Up to Create Account</h2>

        <p className="mt-2 text-center text-base text-black/60">
            Already have an account?&nbsp;
            <Link
                to="/login"
                className="font-medium text-primary transition-all duration-200 hover:underline"
            >
                Log-In
            </Link>
        </p>

        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        {/* Form */}
        <form onSubmit={handleSubmit(signUp)} className='mt-8'>

        <div className='space-y-5'>
            {/* Enter Name */}
            <Input
            label = "Full Name: "
            type = "text"
            placeholder="Enter your Name"
            {...register("text", {
                required : true,
            })}
            required
            />
                
            {/* Enter Email */}
            <Input
            label = "Email"
            type = "email"
            placeholder="Enter valid email address"
            {...register("email", {
                required : true,
                validate : {
                    matchPattern: (value) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                }
            })}
            required
            />

            {/* Enter Password */}
            <Input
            label = "Password"
            type = "password"
            placeholder = "Enter Password"
            {...register("password" , {
                required: true
            })}
            required
            />

            <Button 
            type='submit'
            buttonText = "Create Account"
            className='w-full hover:bg-green-700'
            />
        </div>
        </form>
    </div>
    </div>
  )
}

export default SignUp