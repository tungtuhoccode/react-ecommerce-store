import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cartItems: [],
        cartItemSet: {},
        orderValue: 0,
        isOnHover: false,
        newItem: undefined
    },
    reducers:{
        addToCart: (state, action) =>{
            let cartItemSet = state.cartItemSet
            if(action.payload.id in cartItemSet){
                console.log("cart item is: "+cartItemSet[action.payload.id])
                state.cartItems[cartItemSet[action.payload.id]].quantity += 1
            }else{
                cartItemSet[action.payload.id] = state.cartItems.length
                state.cartItems.push(action.payload)
            }
            state.newItem = action.payload
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