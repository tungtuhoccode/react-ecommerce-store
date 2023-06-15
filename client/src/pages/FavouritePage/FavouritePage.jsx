import CartPageItem from "../../components/CartPageItem/CartPageItem";
import "./FavouritePage.scss"

import { useDispatch, useSelector } from 'react-redux';


const FavouritePage = () => {
    const {favouriteItems} = useSelector( state => state.favourite)

    const favouriteItemsElement = function(){
        let elements = []
        for (let i=0;i<favouriteItems.length;i++){
            let currentItem = favouriteItems[i]
            elements.push(
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
            )
        }
        return elements
    }()


    return (
        <div className="favourite-page">
            <h1>Favourite Page</h1>
            {favouriteItemsElement}
        </div>
    )
}

export default FavouritePage;