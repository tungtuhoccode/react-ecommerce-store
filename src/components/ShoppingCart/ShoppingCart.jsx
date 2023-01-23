import "./ShoppingCart.scss"
import CartItem from "./CartItem"
import {Link} from "react-router-dom"
import { Button } from "@mui/material"
export default function ShoppingCart(props){
    const displayControl = {
        display: props.isOnHover? "":"none",
    }
    console.log("on hover in cart"+ props.isOnHover)
    return (
        <div  style={displayControl} onMouseLeave = {props.mouseLeave} className="cart-hover-area">
            <CartItem/>
            <hr/>
            <div className="info">
                <span>Order Value</span>
                <span>$79.98</span>
            </div>
            <div className="info">
                <span>Delivery</span>
                <span>Free</span>
            </div>
            <hr/>
            <div className="info">
                <span className="total">Total</span>
                <span className="total">$100</span>
            </div>
          
            <Link className="link-with-button" to="/checkout">
                <button className="black-button">
                    <span className="white-text">Checkout</span>
                </button>
            </Link>
          
            <Link className="link-with-button" to="/checkout">
                <button className="white-button">
                    <span className="black-text">Shopping Bag</span>
            </button>
            </Link>
        </div>
    )
}