import {Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { removeFromCart, setQuantity } from "../../app/cartSlice";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import "./CartItem.scss"

export default function CartItem(props){
    const dispatch = useDispatch()

    return (  
        <div style={{color:"black"}} className="item-wrapper">
            {!props.isNewItemAdded &&
             <div onClick={() => dispatch(removeFromCart(props.index))} className="delete-icon-cart-item">
                <DeleteOutlineIcon/>
            </div>
            }
            <div className="img-wrapper">
                <img alt="new item image" src={props.imageSource}/>
            </div>

            <div className="item-info">
            <Link className="link-element" to={`/product/${props.id}`}>
                <h3 className="item-name">{props.name}</h3>
            </Link>
                <h4 className="item-price">${props.price}</h4>

                {!props.isNewItemAdded && <p className="p-element">
                    <span className="w30">Quantity: </span> 
                    <span>{props.quantity}</span>
                </p>}
                <p style={ props.isNewItemAdded ? {fontSize:"16px"}:{}} className="p-element">
                {!props.isNewItemAdded &&<span className="w30">Color: </span>}
                    <span> { props.color}</span>
                </p>
                
                <p style={ props.isNewItemAdded ? {fontSize:"16px"}:{}} className="p-element">
                    <span  className="w30">Size: </span> 
                    <span style={ props.isNewItemAdded ? {fontWeight:"600"}:{}} >{props.size}</span>
                </p>
                
            </div>

        </div>
    )
}