import { Link } from "react-router-dom"
import "./ProductCards.scss"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProductsCard = (props) =>{
    const currentPriceColor = {
        color: isOnSale() ? "red":"gray"
    }

    function isOnSale(){
        return props.salePrice && props.salePrice != props.regularPrice
    }
    function getPriceDifference(){
        return Math.round(((props.regularPrice - props.salePrice)/props.regularPrice )*100)
    }
    return (
        <Link className="product-card-link" to={`/product/${props.id}`}>
            <div className="products-card">
                <div className="products-card-image">
                    <img src={props.img} alt="" className="pc-main-image" />

                    { props.img2 && <img src={props.img2} alt="" className="pc-second-image" />}
                    
                    {(props.isNew) && <span className="pc-new-season">New Season</span>}  
                    <FavoriteBorderIcon className="pc-favourite"/>
                    {isOnSale() && 
                    <div className="pc-sale-percentage">

                        <span> -{getPriceDifference()}</span>
                        <span style={{fontWeight:"600"}}>%</span>
                    </div>
                    }
                </div>  

                <p className="pc-title">{props.name}</p>
                
                <div className="pc-price">
                    <span style={currentPriceColor} className="pc-current-price">$ {props.regularPrice}</span>
                    {isOnSale() && <span className="pc-sale-price">$ {props.salePrice}</span>}
                </div>
            </div>  
        </Link>
    )
}

export default ProductsCard