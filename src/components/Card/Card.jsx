import { Link } from "react-router-dom"
import "./Card.scss"

const Card = ({item}) =>{

    return (
        <div>
             <Link className="card-link" to={`/product/${item.id}`}>
                <div className="card">
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
                    <p className="title">{item.title}</p>

                    <div className="price">
                        <span style={{color: item.oldPrice?"red":"gray"}} className="current-price">${item.price}</span>
                        {item.oldPrice && <span className="sale-price">${item.oldPrice}</span>}
                    </div>
                </div>  
            </Link>
        </div>
       
    )
}

export default Card