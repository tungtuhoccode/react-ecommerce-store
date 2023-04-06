import { Link } from "react-router-dom"
import { useRef, useEffect } from "react";
import "./Card.scss"

const Card = (props) =>{

    const priceColorStyle = {
        color: props.salePrice ? "red":"gray"
    }
    // console.log("old price: ", props.regularPrice)
    // console.log("new price: ", props.salePrice)

    function isOnSale(){
        return props.salePrice && props.salePrice != props.regularPrice
    }
    function getPriceDifference(){
        return Math.round(((props.regularPrice - props.salePrice)/props.regularPrice )*100)
    }

    return (
        <div>
            <Link className="card-link" to={`/product/${props.id}`}>
                <div className="card">
                    <div className="image">
                        <img src={props.img} alt="" className="main-image" />
                        { props.img2 && <img src={props.img2} alt="" className="second-image" />}
                        {(props.isNew) && <span className="new-season">New Season</span>}  

                        {isOnSale() && 
                        <div className="sale-percentage">
                            <span> -{getPriceDifference()}</span>
                            <span style={{fontWeight:"600"}}>%</span>
                        </div>
                        }
                    </div>  
                    <p className="title">{props.title}</p>

                    <div className="price">
                        <span style={priceColorStyle} className="current-price"> ${props.regularPrice} </span>
                        {isOnSale() && <span className="sale-price">${props.regularPrice}</span>}
                    </div>
                </div>  
            </Link>
        </div>
       
    )
}

export default Card