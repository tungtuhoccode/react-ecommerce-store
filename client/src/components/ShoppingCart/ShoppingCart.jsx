import "./ShoppingCart.scss"
import CartItem from "./CartItem"
import {Link} from "react-router-dom"
import { Button } from "@mui/material"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y,Pagination } from 'swiper';
import { useEffect, useState } from "react";
import cartSlice from "../../app/cartSlice";

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector } from "react-redux";

export default function ShoppingCart(props){
    const isOnHover = useSelector( state => state.cart.isOnHover)
    const displayControl = {
        display: isOnHover ? "":"none",
    }
    
    console.log("on hover in cart"+ isOnHover)
    const cartItems = useSelector( state => state.cart.cartItems)

    console.log("cart items count: "+cartItems.length)
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
    

    const cartItemElement = cartItems.map( itemData => {
        return (
            <SwiperSlide> 
                <CartItem 
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


    return (
        <div  style={displayControl} onMouseLeave = {props.mouseLeave} className="cart-hover-area">
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