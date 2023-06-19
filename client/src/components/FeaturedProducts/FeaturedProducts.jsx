import "./FeaturedProducts.scss"
import Card from "../Card/Card"
import { useEffect, useState, useRef } from "react"
import CircularProgress from '@mui/material/CircularProgress';
import API_URL from "../../constant/routeConstants"


let count = 1
const ProductsList = (props) =>{
    const [data, setData] = useState([])

    const productTypeUrl = (props => {
        if(props.type === "featured"){
            return API_URL.FEATURED_PRODUCT
        }else{
            return API_URL.TRENDING_PRODUCT
        }
    })(props)

    useEffect( ()=>{
        const fetchProducts = async () => {
            
            try{
                const response = await fetch(productTypeUrl)
                const productData = await response.json()

                setData(productData)
            }
            catch(err){
                setData([])
                console.log(err)
            }
        }
        (async () => await fetchProducts())()
    },[])

    return (
        <div className="featured-products">

            <div>
                <div className="top">
                <h1 className="type">{props.type[0].toUpperCase() + props.type.slice(1, props.type.length)} <span className="control-display">products</span></h1>
                <p className="featured-product-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                </div>
                {data.length == 0 && <CircularProgress size= "50px" sx={{
                    display:"block",
                    color: "#ad7646", 
                    m: "auto",
                }}/>}
                {data.length > 0 &&
                    <div className="bottom">
                        {data.map(product => {
     
                            return (<Card
                                key ={ count++}
                                id = {product._id}
                                title = {product.name}
                                img ={ product.images[0].url}
                                img2 ={ product.images[1].url}
                                regularPrice ={product.price}
                                isNew = {true}
                                />)
                            })}
                    
                    </div>
                }
            </div>
            
        </div>
    )
}

export default ProductsList