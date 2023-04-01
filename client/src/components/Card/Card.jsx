import { Link } from "react-router-dom"
import "./Card.scss"

const Card = (props) =>{

    const priceColorStyle = {
        color: props.oldPrice != props.newPrice ? "red":"gray"
    }


    return (
        <div>
            <Link className="card-link" to={`/product/${props.id}`}>
                <div className="card">
                    <div className="image">
                        <img src={props.img} alt="" className="main-image" />
                        { props.img2 && <img src={props.img2} alt="" className="second-image" />}
                        {(props.isNew) && <span className="new-season">New Season</span>}  
                        {props.oldPrice != props.newPrice && 
                        <div className="sale-percentage">
                            <span> -{Math.round(((props.oldPrice - props.newPrice)/props.oldPrice )*100)}</span>
                            <span style={{fontWeight:"600"}}>%</span>
                        </div>
                        }
                    </div>  
                    <p className="title">{props.title}</p>

                    <div className="price">
                        <span style={priceColorStyle} className="current-price"> ${props.newPrice} </span>
                        {props.oldPrice != props.newPrice && <span className="sale-price">${props.oldPrice}</span>}
                    </div>
                </div>  
            </Link>
        </div>
       
    )
}

export default Card