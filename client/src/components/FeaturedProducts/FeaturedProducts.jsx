import env from "react-dotenv";
import "./FeaturedProducts.scss"
import Card from "../Card/Card"
import { useEffect, useState } from "react"

const ProductsList = (props) =>{
    const [data, setData] = useState([])
    // const API_URL = env.REACT_APP_API_URL+"products"
    const API_URL = `${env.REACT_APP_API_URL}/products/trending`
    console.log(API_URL)
    console.log(env)

    useEffect( ()=>{
        const fetchProducts = async () => {
            try{
                const response = await fetch(API_URL)
                const productData = await response.json()

                setData(productData)
            }
            catch(err){
                console.log(err)
            }
        }
        (async () => await fetchProducts())()
    },[])

    console.log(data)

    return (
        <div className="featured-products">
            <div className="top">
            <h1>{props.type} <span className="control-display">products</span></h1>
            <p className="featured-product-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Riss commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.
            </p>
            </div>
            <div className="bottom">
                {data && data.map(product => {
                        return (<Card
                                id = { product.id}
                                title = {product.name}
                                img ={ product.images[0].url}
                                img2 ={ product.images[1].url}
                                regularPrice ={product.price}
                                isNew = {true}
                                key={product.id}
                                />)
        })}
            </div>
        </div>
    )
}

export default ProductsList