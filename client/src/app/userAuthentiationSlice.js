import { createSlice } from '@reduxjs/toolkit';


export const cartSlice = createSlice({
    name: 'userAuthenticationSlice',
    initialState: {
        isSignedIn: false,
    },
    reducers:{
        setLogin: (state, action) => {
            state.isSignedIn = action.payload
        },


    }
});

export const {addToFavourite, removeFromFavourite} = cartSlice.actions;//export reducer function
export default cartSlice.reducer;