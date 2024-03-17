// AuthSlice is for to check the user if it is authenticated user or not!

import {createSlice} from "@reduxjs/toolkit";

// Inital State of the Store
const initialState = {
    status : false,
    userData: null
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers:{
        // Update the Status of user as it is Logged In
        logIn : (state , action) =>{
            state.status = true;
            state.userData = action.payload;
        },
        // Update the Status of user as it is Logged OUT
        logOut : (state) =>{
            state.status = false;
            state.userData = null;
        }
    }
})

export const {logIn, logOut} = authSlice.actions;

export default authSlice.reducer;