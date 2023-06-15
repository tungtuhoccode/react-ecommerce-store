import "./CartPage.scss"

import { Link } from "react-router-dom"
import CartPageItem from "../../components/CartPageItem/CartPageItem"
import { useSelector, useDispatch } from "react-redux";


let countKey = 0
export default function Cart(){
    const {cartItems, totalCartPrice } = useSelector( state => state.cart)

    // const cartItemElement = [...cartItems].reverse().map( (itemData) => {
    //     countKey++;
    //     return (
    //             <CartPageItem
    //                 key = {countKey}
    //                 name={itemData.itemName} 
    //                 price = {itemData.price} 
    //                 quantity = {itemData.quantity}
    //                 color = {itemData.color}
    //                 size = {itemData.size}
    //                 imageSource = {itemData.imageSource}
    //             />
    //     )
    // })
    const cartItemElement = (() => {
        let cartItemElementList = []
        for(let i=cartItems.length-1;i >= 0;i--){
            let itemData = cartItems[i]
            cartItemElementList.push (
                <CartPageItem
                    key = {i}
                    id = {itemData.id}
                    name={itemData.itemName} 
                    price = {itemData.price} 
                    quantity = {itemData.quantity}
                    color = {itemData.color}
                    size = {itemData.size}
                    imageSource = {itemData.imageSource}
                    index = {i}
                />
            )
        }
        return cartItemElementList
    })()

    const nothing = () => {
        return (
        <div className="empty-cart"> 
            <h2>YOUR SHOPPING BAG IS EMPTY!</h2>
            <p></p>
        </div>
        )
    }

    return (
        <div className="cart-page">
            <div className="left">
                {cartItemElement.length > 0 ? cartItemElement : nothing()}

            </div>
            <div className="right">
                <div className="checkout-section">
                    <div className="discount">
                        <div style={{color:"gray"}} >Discounts</div>
                        <div style={{textDecoration:"underline"}}>Apply discount</div>
                    </div>
                    <div>
                        Log in to use your personal offers!
                    </div>
                    <Link style={{textDecoration:"none"}} to="/login">
                        <button className="login-button">
                            <span>Log in</span>
                        </button>
                    </Link>
                    <div className="order-value-wrapper">
                        <div className="order-value">
                            <span>Order value</span>
                            <span>${totalCartPrice.toFixed(2)}</span>
                        </div>
                        <div className="order-value">
                            <span>Delivery</span>
                            <span> {totalCartPrice > 50 ? "FREE":"Calculated at checkout"}</span>
                        </div>

                    </div>
                    <div className="total-value">
                            <span>Total</span>
                            <span>${(totalCartPrice * 113/100).toFixed(2)}</span>
                    </div>
                    <Link style={{textDecoration:"none"}} to="/checkout">
                        <button className="checkout-button">
                            Checkout
                        </button>
                    </Link>
                    <p>Powered by</p>
                    <img style={{width:"80%"}} src="/img/payment.png"/>
                </div>
            </div>

        </div>
    )
}