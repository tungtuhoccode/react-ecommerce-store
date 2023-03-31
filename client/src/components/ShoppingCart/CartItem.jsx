import {Link } from "react-router-dom"

import "./CartItem.scss"

export default function CartItem(props){
    return (
        <Link onClick={props.close} style={{textDecoration:"none", color:"black"}} to={`/checkout`}>
            <div className="item-wrapper">
                <div className="img-wrapper">
                    <img alt="new item image" src={props.imageSource}/>
                </div>

                <div className="item-info">
                    <h3>{props.name}</h3>
                    <h4>${props.price}</h4>
                    <p>
                        <span className="w30">Quantity: </span> 
                        <span>{props.quantity}</span>
                    </p>
                    <p><span className="w30">Color: </span> <span>{props.color}</span></p>
                    <p><span className="w30">Size: </span> <span>{props.size}</span></p>
                    
                </div>

            </div>
        </Link>
    )
}