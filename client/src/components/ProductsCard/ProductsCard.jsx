import { Link } from "react-router-dom"
import "./ProductCards.scss"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from "react";
import { useDispatch } from "react-redux";
import {addToFavourite, removeFromFavourite} from "../../app/favouriteSlice"


const ProductsCard = (props) =>{
    const dispatch = useDispatch()
    const currentPriceColor = {
        color: isOnSale() ? "red":"black"
    }

    function isOnSale(){
        return props.salePrice && props.salePrice != props.regularPrice
    }
    function getPriceDifference(){
        return Math.round(((props.regularPrice - props.salePrice)/props.regularPrice )*100)
    }
    let size = "23"
    const [isOnHover, setIsOnHover] = useState(false)
    const [isFavourite, setIsFavourite] = useState(false)
    
    let thisProduct =  {
        id: props.id,
        itemName: props.name,
        price: props.price,
        quantity: 1,
        color: props.color,
        imageSource: props.img
    }

    function toggleFavourite(){  //FromProduct is to avoid having the same name as reducer
 
    }
    const getFavouriteIconColor = () => {
        if (isOnHover || isFavourite) {
        return {
            innerColor: "red",
            outerColor: "red"
        }
    }
    
        return {
            innerColor: "white",
            outerColor: "black"
        }
    }
    return (
        <div className="products-card-link" >
            <div className="products-card" >
                <div className="products-card-image">
                    <Link to={`/product/${props.id}`}>
                    <img src={props.img} alt="" className="pc-main-image" />

                    { props.img2 && <img src={props.img2} alt="" className="pc-second-image" />}
                    
                    {(props.isNew) && <span className="pc-new-season">New Season</span>}  
                    </Link>

                    <div onMouseEnter={() => setIsOnHover(true)} onMouseLeave={() => setIsOnHover(false)} >
                        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={{zIndex:"10"}} 
                            fill={getFavouriteIconColor().outerColor} 
                            className="pc-favourite2" 
                            viewBox="0 0 16 16" 
                            onClick={() => {
                                if(!isFavourite) dispatch(addToFavourite(thisProduct))
                                else dispatch(removeFromFavourite(thisProduct))
                                setIsFavourite(isFavourite => !isFavourite)
                                setIsOnHover(false)
                            }
                           
                        }>
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={{zIndex:"9"}} fill={getFavouriteIconColor().innerColor} className="pc-favourite" viewBox="0 0 16 16">
                            <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>
                    </div>

                    {isOnSale() && 
                    <div className="pc-sale-percentage">

                        <span> -{getPriceDifference()}</span>
                        <span style={{fontWeight:"600"}}>%</span>
                    </div>
                    }
                </div>  

                <Link className="link" to={`/product/${props.id}`}>
                    {/* <hr className="pc-hr" style={{
                        height:"1px",
                        marginTop: "9px",
                        marginBottom:"-10px",
                        marginLeft: "10px",
                        border:"none",
                        backgroundColor: "#ad7646",
                        width:"60%"
                    }}
                    ></hr> */}
                    <p className="pc-title">{props.name}</p>
                </Link>
                <div className="pc-price">
                    <span style={currentPriceColor} className="pc-current-price">$ {props.regularPrice}</span>
                    {isOnSale() && <span className="pc-sale-price">$ {props.salePrice}</span>}
                </div>
            </div>  
        </div>
    )
}

export default ProductsCard