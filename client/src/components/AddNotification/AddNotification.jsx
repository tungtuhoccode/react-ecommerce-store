import CartItem from "../ShoppingCart/CartItem";
import { useSelector} from "react-redux";
import "./AddNotification.scss"

export default function AddNotification(props){
    let {lastItemAdded} = useSelector( state => state.cart)
    return (
        <div className="notification-container">
            <div className="adding-notification">
                <h2 className="notification-title">New Item Added</h2>
                <CartItem 
                        key = {1}
                        name={lastItemAdded.itemName} 
                        price = {lastItemAdded.price} 
                        quantity = {lastItemAdded.quantity}
                        color = {lastItemAdded.color}
                        size = {lastItemAdded.size}
                        imageSource = {lastItemAdded.imageSource}
                        isNewItemAdded = {true}
                        closeCart = {props.close}
                />
            </div>
        </div>
        
    )
}
