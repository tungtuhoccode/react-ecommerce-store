

import { Link,useLocation, Outlet} from "react-router-dom";

import "./Account.css"



//for component 
import AccountNav from "./Nav-bar/AccountNav";

import React from "react";





import { useSelector, useDispatch } from "react-redux";

const Context = React.createContext();
const Account = () => {
    const {cartItems, totalCartPrice } = useSelector( state => state.cart)
   
    const location = useLocation()
  
   const email = location.state?.key ? location.state.key : "Member"
    console.log(cartItems)
   
    return (
        <div className="page-container">
            <div className="mainpage-container">
                <AccountNav  path={location.pathname} email={email}/>
                    {location.pathname === "/account" ? 
                        <div className="account-right-side">
                            <div className="main-interface-container-first-half">
                                <div>My offers</div>
                                <div>Here is where list of offers is gonna be </div>
                            </div>
                            <div className="main-interface-container-second-half">
                                <div>Current Cart Items</div>
                                <div className="all-purchases-container">
                                    <div>
                                        {
                                            cartItems.length>0? 
                                            cartItems.map((item)=>{
                                                return <div>{item.itemName} {item.size}</div>
                                            })
                                            : 
                                            "Your cart is empty"}</div>
                                    <Link to="/">Continue Shopping</Link>
                                </div>
                            </div>
                        </div> 
                    :
                        <Outlet/>
                    }
               
            </div>
        
            
     
            
        </div>
    
    )
}

export default Account;