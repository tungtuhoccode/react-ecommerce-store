import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cartItems: [],
        orderValue: 0,
        isOnHover: false
    },
    reducers:{
        addToCart: (state, action) =>{
            state.cartItems.push(action.payload)
        },

        removeFromCart: (state, action) =>{
            console.log("trying to remove")
        },
        setIsCartOnHover: (state, action) => {
            console.log("cart toggled")
            state.isOnHover = action.payload
        }

    }
});

export const {addToCart, removeFromCart, setIsCartOnHover} = cartSlice.actions;
export default cartSlice.reducer;