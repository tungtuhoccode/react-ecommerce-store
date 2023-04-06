import "./FeaturedProducts.scss"
import Card from "../Card/Card"
import { useEffect, useState, useRef } from "react"

import API_URL from "../../constant/routeConstants"


let count = 1
const ProductsList = (props) =>{
    const [data, setData] = useState([])
    useEffect( ()=>{
        const fetchProducts = async () => {
            try{
                const response = await fetch(API_URL.FEATURED_PRODUCT)
                const productData = await response.json()

                setData(productData)
            }
            catch(err){
                console.log(err)
            }
        }
        (async () => await fetchProducts())()
    },[])

    return (
        <div className="featured-products">
            <div className="top">
            <h1 className="type">{props.type} <span className="control-display">products</span></h1>
            <p className="featured-product-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Riss commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.
            </p>
            </div>
            <div className="bottom">
                {data && data.map(product => {
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
        </div>
    )
}

export default ProductsList