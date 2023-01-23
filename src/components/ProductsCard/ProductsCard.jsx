import { Link } from "react-router-dom"
import "./ProductCards.scss"

const ProductsCard = ({item}) =>{
    const currentPriceColor = {
        color: item.oldPrice ? "red":"gray"
    }
    return (
        <div>
             <Link className="link-products" to={`/product/${item.id}`}>
                <div className="card-products">
                    <div className="image">
                        <img src={item.img} alt="" className="main-image" />
                        { item.img2 && <img src={item.img2} alt="" className="second-image" />}
                        {(item.isNew) && <span className="new-season">New Season</span>}  

                        {item.oldPrice && 
                        <div className="sale-percentage">
                            <span> -{Math.round(((item.oldPrice - item.price)/item.oldPrice )*100)}</span>
                            <span style={{fontWeight:"600"}}>%</span>
                        </div>
                        }
                    </div>  

                    <div className="price-and-title">
                    <p className="title">{item.title}</p>
                    {/* {item.title.length <20 && <p style={{opacity:"0"}} className="invisible-text">p</p>} */}
                    <div className="price">
                        <span style={currentPriceColor} className="current-price">${item.price}</span>
                        {item.oldPrice && <span className="sale-price">${item.oldPrice}</span>}
                    </div>
                    </div>
                </div>  
            </Link>
        </div>
       
    )
}

export default ProductsCard