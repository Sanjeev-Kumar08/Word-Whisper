import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {logOut} from '../../Store/authSlice'
import authService from "../../Service/Auth"
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Handle the Log-Out as User Clicks Log-Out Button
    const handleLogOut = () =>{
        // Call the logOut() in Appwrite Services(../../Service/Auth)
        authService.logOut().then(() => {
            dispatch(logOut())// if  logged out successfully, then call the logOut action to update the state of Redux Store
        })
        // if not Display an Error Message!!
        .catch(() => `Error in LogOut`)
        navigate("/");
    }

  return (
    <button className='inline-block sm:px-6 sm:py-2 px-4 py-2 duration-200 hover:bg-gray-600 hover:text-white hover:shadow-md text-red-600 font-semibold text-lg rounded-full transition-all ease-in-out'
    onClick={handleLogOut}>Log Out</button>
  )
}

export default LogoutBtn;