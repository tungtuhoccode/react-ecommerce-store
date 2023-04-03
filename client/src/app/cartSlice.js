import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cartItems: [],
        cartItemSet: {}, //key: itemID, value: itemIndex (in cartItems)
        orderValue: 0,
        isOnHover: true,
        lastItemAdded: undefined,
        totalCartPrice: 0
    },
    reducers:{
        addToCart: (state, action) =>{
            let itemID = action.payload.id
            let itemSize = action.payload.size
            let cartItemSet = state.cartItemSet

            if(itemID in cartItemSet){
                // console.log("cart item is: "+cartItemSet[action.payload.id])
                state.cartItems[cartItemSet[itemID]].quantity += 1

                let temp = state.cartItems[state.cartItems.length-1]
                state.cartItems[state.cartItems.length-1] = state.cartItems[cartItemSet[itemID]]
                state.cartItems[cartItemSet[itemID]] = temp


            }else{
                cartItemSet[itemID] = state.cartItems.length
                state.cartItems.push(action.payload)
            }

            state.lastItemAdded = action.payload
            state.totalCartPrice += action.payload.price 
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