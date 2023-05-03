import CartPageItem from "../../components/CartPageItem/CartPageItem";
import "./FavouritePage.scss"

import { useDispatch, useSelector } from 'react-redux';


const FavouritePage = () => {
    const {favouriteItems} = useSelector( state => state.favourite)
    console.log(favouriteItems)

    return (
        <div className="favourite-page">
            <div className="favourite-item-container">
                <CartPageItem
                key = {"642afeab800ea17aaaea3d67"}
                id = {"642afeab800ea17aaaea3d67"}
                name={"Lady Midi 2"} 
                price = {500} 
                quantity = {1}
                color = {"Beige"}
                size = {"S"}
                imageSource = { "/img/featuredProduct/lady_midi1.jpg"}
                index = {2}
                />
            </div>
           
        </div>
    )
}

export default FavouritePage;