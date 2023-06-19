import CartPageItem from "../../components/CartPageItem/CartPageItem";
import "./FavouritePage.scss"

import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavourite } from "../../app/favouriteSlice";


const FavouritePage = () => {
    const dispatch = useDispatch()
    const {favouriteItems} = useSelector( state => state.favourite)

    const favouriteItemsElement = function(){
        let elements = []
        for (let i=0;i<favouriteItems.length;i++){
            let currentItem = favouriteItems[i]
            elements.push(
                <div onClick= {() => {dispatch(removeFromFavourite(currentItem))}}>
                    <CartPageItem
                        key = {currentItem.id}
                        id = {currentItem.id}
                        name={currentItem.itemName} 
                        price = {currentItem.price} 
                        quantity = {currentItem.quantity}
                        color = {currentItem.color}
                        size = {"S"}
                        imageSource = { currentItem.imageSource}
                        index = {i}
                    />
                </div>
            )
        }
        return elements
    }()


    return (
        <div className="favourite-page">
            <h1 className="fg-header" >Favourite Page</h1>
            {favouriteItemsElement}
            <p className="fg-header">This page UI is currently being working on. The UI here is temporary for testing purposes</p>
        </div>
    )
}

export default FavouritePage;