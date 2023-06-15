import { createSlice } from '@reduxjs/toolkit';
import API_URL from "../constant/routeConstants"

function getLoginStatus(){
    if(!localStorage.getItem('loginStatus')){
        return false
    }
    if(localStorage.getItem('loginStatus')){
        const loginStatus = JSON.parse(localStorage.getItem('loginStatus')).isLoggedIn
        return loginStatus
    }
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        isLoggedIn: getLoginStatus(),
    },
    reducers:{
        setLogin: (state, action) => {
            state.isLoggedIn = action.payload
            if(action.payload){
                localStorage.setItem('loginStatus', JSON.stringify({isLoggedIn: true}))
            }else{
                localStorage.setItem('loginStatus',  JSON.stringify({isLoggedIn: false}))
            }
        },

    }
});

export const {setLogin, login} = userSlice.actions;//export reducer function
export default userSlice.reducer;