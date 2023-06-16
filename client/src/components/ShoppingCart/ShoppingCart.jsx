import "./ShoppingCart.scss"
import CartItem from "./CartItem"
import {Link} from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y,Pagination } from 'swiper';
import { setIsCartOnHover } from "../../app/cartSlice";

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const getCartItemsLocalStorage = () => {
    const cartItems = localStorage.getItem('cartItems')
    if(!cartItems) {
        return []
    }
    
    return JSON.parse(cartItems)
}

export default function ShoppingCart(props){
    //react function()
    const dispatch = useDispatch()

    //state from redux
    const {isOnHover, cartItems, totalCartPrice } = useSelector( state => state.cart)
    const {isLoggedIn} = useSelector( state => state.user)

    console.log(cartItems)
    //check and set the cart items

    //set new state of the cart to local storage and to server whenever the cart items change
    useEffect( () => {

    },[cartItems])

    //css style control for responsiveness
    const displayControl = {
        display: isOnHover ? "":"none",
    }

    function getItemHeight() {
        let h = 0
        if(cartItems.length === 1) h = 150
        else if( cartItems.length >= 2 ) h = 300
        return h
    }

    const cartItemHeight = {
        height: ""+getItemHeight()+"px"
    }
    const swiperWrapperHeight = {
        height: getItemHeight() === 300 ? getItemHeight()+0+"px":getItemHeight()+"px"
    }

    //helper variable
    let countKey = 0 //for uniqueID 

    const cartItemElement = (() => {
        let cartItemElementList = []
        for(let i=cartItems.length-1;i >= 0;i--){
            let itemData = cartItems[i]
            cartItemElementList.push (
                <SwiperSlide> 
                    <CartItem
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
                </SwiperSlide>
            )
        }
        return cartItemElementList
    })()



    //FINAL COMPONENT
    return (
        <div  style={displayControl} onMouseLeave = {() => {dispatch(setIsCartOnHover(false))}} className="cart-hover-area">
            <div style={ swiperWrapperHeight } className="cart-item-area">
                {cartItems.length > 2 && <KeyboardArrowUpIcon className="prev2"/>}
                    <Swiper
                        direction={"vertical"}
                        modules={[Navigation, A11y, Pagination]}
                        pagination = {{ clickable: true }}
                        spaceBetween={0}
                        slidesPerView={cartItems.length > 1 ? 2:1}
                        loop={true}
                        style={cartItemHeight}
                        navigation={cartItems.length>2?{
                            nextEl: '.next2', 
                            prevEl: '.prev2', 
                        }:false}

                        className="cartItemSwiper"
                    >
                        {cartItemElement}
                    </Swiper>
                {cartItems.length > 2 && <ExpandMoreIcon className="next2"/>}
            </div>

            <hr/>
            <div className="info">
                <span>Order Value</span>
                <span>${totalCartPrice.toFixed(2)}</span>
            </div>
            <div className="info">
                <span>Delivery</span>
                <span>{totalCartPrice > 50? "Free":"Calculated at checkout"}</span>
            </div>
            <hr/>
            <div className="info">
                <span className="total">Total</span>
                <span className="total">${(totalCartPrice*113/100).toFixed(2)}</span>
            </div>
          
            <Link className="link-with-button" to="/checkout">
                <button className="black-button">

                    <span className="white-text">Checkout</span>
                </button>
            </Link>
          
            <Link onClick={() => dispatch(setIsCartOnHover(false))} className="link-with-button" to="/cart">
                <div className="white-button">
                    {/* <ShoppingBagOutlinedIcon className="black-text"></ShoppingBagOutlinedIcon> */}
                    <span className="black-text">Shopping Bag</span>
                </div>
            </Link>
        </div>
    )
}