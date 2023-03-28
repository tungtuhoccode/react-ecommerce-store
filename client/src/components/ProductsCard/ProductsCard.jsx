import { Link } from "react-router-dom"
import "./ProductCards.scss"

const ProductsCard = ({item}) =>{
    const currentPriceColor = {
        color: item.oldPrice ? "red":"gray"
    }
    return (
        <Link className="product-card-link" to={`/product/${item.id}`}>
            <div className="products-card">
                <div className="products-card-image">
                    <img src={item.img} alt="" className="pc-main-image" />
                    { item.img2 && <img src={item.img2} alt="" className="pc-second-image" />}
                    {(item.isNew) && <span className="pc-new-season">New Season</span>}  

                    {item.oldPrice && 
                    <div className="pc-sale-percentage">
                        <span> -{Math.round(((item.oldPrice - item.price)/item.oldPrice )*100)}</span>
                        <span style={{fontWeight:"600"}}>%</span>
                    </div>
                    }
                </div>  

                <p className="pc-title">{item.title}</p>
                
                <div className="pc-price">
                    <span style={currentPriceColor} className="pc-current-price">${item.price}</span>
                    {item.oldPrice && <span className="pc-sale-price">${item.oldPrice}</span>}
                </div>
            </div>  
        </Link>
    )
}

export default ProductsCard