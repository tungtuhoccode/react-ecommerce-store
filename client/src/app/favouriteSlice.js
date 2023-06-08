import { createSlice } from '@reduxjs/toolkit';


export const cartSlice = createSlice({
    name: 'favouriteSlice',
    initialState: {
        favouriteItems: [],
    },
    reducers:{
        addToFavourite: (state, action) => {
            let item = action.payload

            state.favouriteItems = [...state.favouriteItems , item]

            console.log("favourite items array: ")
            console.log(state.favouriteItems)
        },
        
        removeFromFavourite: (state, action) =>{
            let item = action.payload

            const removedItemIndex = function(){
                for (let i = 0;i < state.favouriteItems.length; i++){
                    if(state.favouriteItems[i].id === item.id){
                        return i
                    }
                }
            }()
            
            state.favouriteItems = [
                ...state.favouriteItems.slice(0, removedItemIndex),
                ...state.favouriteItems.slice(removedItemIndex + 1)
            ]

        },

    }
});

export const {addToFavourite, removeFromFavourite} = cartSlice.actions;//export reducer function
export default cartSlice.reducer;