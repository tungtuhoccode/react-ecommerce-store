import { createSlice } from '@reduxjs/toolkit';

const calculatePrice = (list) => {
    let price = 0
    list.forEach(element => {
        price+= element.price*element.quantity
    });
    return price
}


export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cartItems: [],
        cartItemSet: {}, //key: itemID, value: itemIndex (in cartItems)
        isOnHover: false,
        lastItemAdded: undefined, //this is use for Notificaiton only
        totalCartPrice: 0
    },
    reducers:{
        addToCart: (state, action) =>{
            let item = action.payload
            let cart = state.cartItems
            
            function isDuplicate(item1, item2){
                return item1.itemName === item2.itemName && item1.color === item2.color && item1.size == item2.size
            }
            let containDuplicate = false
            for(let i=0;i<cart.length;i++){
                if(isDuplicate(cart[i],item)){
                    cart[i].quantity += 1
                    containDuplicate = true
                    break
                }
            }
            if(!containDuplicate){
                cart.push(item)
            }

            state.lastItemAdded = action.payload
            state.totalCartPrice = state.totalCartPrice + state.lastItemAdded.price
            // state.totalCartPrice = calculatePrice(state.cartItems)
        },
        
        removeFromCart: (state, action) =>{
            console.log("removing index "+ action.payload)
            let index = action.payload
            let removedItem = state.cartItems[index]
            
            state.cartItems = [
                ...state.cartItems.slice(0, action.payload),
                ...state.cartItems.slice(action.payload + 1)
            ]
            console.log(removedItem)
            
            state.totalCartPrice = calculatePrice(state.cartItems)
            //handle special case when total price is < 0
            if(state.totalCartPrice < 0){
                state.totalCartPrice *= -1
            }

        },
        setQuantity: (state, action) => {
            let indexItemChange = action.payload.index
            let newQuantity = action.payload.quantity
            state.cartItems = state.cartItems.map( (item, index) => {
                if(indexItemChange == index){
                   return {...item, quantity : newQuantity}
                }
                else{
                    return item
                }
            })
            state.totalCartPrice = calculatePrice(state.cartItems)
        },
        
        setIsCartOnHover: (state, action) => {
            console.log("cart toggled")
            state.isOnHover = action.payload
        }

    }
});

export const {addToCart, removeFromCart, setIsCartOnHover, setQuantity} = cartSlice.actions;
export default cartSlice.reducer;