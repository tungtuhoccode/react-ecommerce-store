import { createSlice } from '@reduxjs/toolkit';


export const cartSlice = createSlice({
    name: 'userSlice',
    initialState: {
        isLoggedIn: false,
    },
    reducers:{
        setLogin: (state, action) => {
            state.isLoggedIn = action.payload
        },


    }
});

export const {setLogin} = cartSlice.actions;//export reducer function
export default cartSlice.reducer;