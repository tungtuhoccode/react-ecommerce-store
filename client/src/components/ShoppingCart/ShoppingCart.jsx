import "./ShoppingCart.scss"
import CartItem from "./CartItem"
import {Link} from "react-router-dom"
import { Button } from "@mui/material"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y,Pagination } from 'swiper';
import { useEffect, useState } from "react";
import cartSlice from "../../app/cartSlice";
import { setIsCartOnHover } from "../../app/cartSlice";

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector, useDispatch } from "react-redux";

export default function ShoppingCart(props){
    //react function()
    const dispatch = useDispatch()

    //state from redux
    const {isOnHover, cartItems, lastItemAdded, totalCartPrice }= useSelector( state => state.cart)
    // const cartItems = useSelector( state => state.cart.cartItems)
    // const lastItemAdded = useSelector(state => state.cart.lastItemAdded)
    // const totalPrice = useSelector(state => state.cart.lastItemAdded)

    //css style control for responsiveness
    const displayControl = {
        display: isOnHover ? "":"none",
    }

    function getItemHeight() {
        let h = 0
        if(cartItems.length == 1) h = 150
        else if( cartItems.length >= 2 ) h = 300
        return h
    }

    const cartItemHeight = {
        height: ""+getItemHeight()+"px"
    }
    const swiperWrapperHeight = {
        height: getItemHeight() == 300 ? getItemHeight()+0+"px":getItemHeight()+"px"
    }

    //timer for adding notification
    const [show, setShow] = useState(false)

    function showNotification(){
        setShow(true)
        setTimeout(() => {
            setShow(false);
        }, 1000);
    }


    //helper variable
    let countKey = 0 //for uniqueID 

    //console.log
    console.log("on hover in cart"+ isOnHover)
    console.log("cart items count: "+cartItems.length)

    //sample data
    const data = [
        {
            itemName:"Brown coat",
            price: 109.99,
            quantity:1,
            color: "Brown",
            size:"S",
            imageSource: "/img/cartImg/hmgoepprod.jpeg"
        },
        {
            itemName:"Brown coat",
            price: 39.99,
            quantity:2,
            color: "Brown",
            size:"M",
            imageSource: "/img/cartImg/hmgoepprod2.jpeg"
        },
        {
            itemName:"Brown coat",
            price: 109.99,
            quantity:2,
            color: "Brown",
            size:"M",
            imageSource: "https://lp2.hm.com/hmgoepprod?set=source[/f9/c3/f9c3f12b844b6e09bf4263406be48fcd783ab213.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]"
        },

    ]
    
    //JSX component generated from data
    const cartItemElement = [...cartItems].reverse().map( itemData => {
            countKey++;
            return (
                <SwiperSlide> 
                    <CartItem 
                        key = {countKey}
                        name={itemData.itemName} 
                        price = {itemData.price} 
                        quantity = {itemData.quantity}
                        color = {itemData.color}
                        size = {itemData.size}
                        imageSource = {itemData.imageSource}
                    />
                </SwiperSlide>
            )
        })


    //FINAL COMPONENT
    return (
        <div  style={displayControl} onMouseLeave = {() => {dispatch(setIsCartOnHover(false))}} className="cart-hover-area">
            {/* For small screen */}


        <div className="adding-notification">
                <h2>New Item Added</h2>
            <CartItem 
                    key = {countKey}
                    name={lastItemAdded.itemName} 
                    price = {lastItemAdded.price} 
                    quantity = {lastItemAdded.quantity}
                    color = {lastItemAdded.color}
                    size = {lastItemAdded.size}
                    imageSource = {lastItemAdded.imageSource}
                    isNewItemAdded = {true}
                    closeCart = {() => {
                        dispatch(setIsCartOnHover(false)) 
                    }}
            />
            </div>
            

            {/* {for bigger screen} */}
            <div style={ swiperWrapperHeight } className="cart-item-area">
                {cartItems.length > 1 && <KeyboardArrowUpIcon className="prev2"/>}
                    <Swiper
                        direction={"vertical"}
                        modules={[Navigation, A11y]}
                        spaceBetween={0}
                        slidesPerView={cartItems.length > 1 ? 2:1}

                        style={cartItemHeight}
                        navigation={cartItems.length>1?{
                            nextEl: '.next2', 
                            prevEl: '.prev2', 
                        }:false}


                        className="cartItemSwiper"
                    >
                        {cartItemElement}
                    </Swiper>
                {cartItems.length > 1 && <ExpandMoreIcon className="next2"/>}
            </div>

            
            {/* <div className="card-area">

            <CartItem/>
            </div> */}

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
          
            <Link className="link-with-button" to="/checkout">
                <button className="white-button">
                    <span className="black-text">Shopping Bag</span>
            </button>
            </Link>
        </div>
    )
}