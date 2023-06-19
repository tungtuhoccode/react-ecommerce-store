import ProductsCard from "../../components/ProductsCard/ProductsCard"
import "./products.scss"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import env from "react-dotenv";
import {useState, useEffect } from "react"
import { useParams, useLocation } from "react-router-dom"
import { CircularProgress } from "@mui/material";
import CATAGORY_LIST from "../../constant/catagoryConstant"
import API_URL from "../../constant/routeConstants"

let count = 0
function Products() {
  const location = useLocation()
  const [products, setProducts] = useState([])
  const [isProcessing, setIsProcessing] = useState(false)

  const GET_URL = `${API_URL.GENDER_CATEGORY}${location.pathname}`
  console.log("Products rendered")
  
  //fetch products data
  const fetchProducts = async () =>{
    try{
      setIsProcessing(true)
      const response = await fetch(GET_URL)
      const data = await response.json()
     
      setIsProcessing(false)

      setProducts(data)
    }
    catch(err){
      console.log(err)
    }
  }


  useEffect(()=>{
    fetchProducts()
  },[location])
  
  //generate jsx products card
  const productElement = products.map(product =>{
    return (
      <ProductsCard 
        id = { product._id}
        name = {product.name}
        price = {product.price}
        color = {product.color}
        img ={ product.images[0].url}
        img2 ={ product.images[1].url}
        regularPrice ={product.price}
        salePrice ={product.price}
        key = {count++}
        isNew = {true}
      />
    )
  })

  

  //return 
    return (
      <div className="products">
        <div className="left">
          <h2>Product Catagories</h2>
          <div className="filter-item">
            <div>
              <input
                type="checkbox"
                id="1"
                value={1}
              />
              <label htmlFor="1">Shoes</label>
            </div>
            <div>
                <input
                  type="checkbox"
                  id="2"
                  value={2}
                />
                <label htmlFor="2">Skirt</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="3"
                value={3}
              />
              <label htmlFor="3">Short</label>
            </div>
          </div>
          <div className="filter-item">
            <h2>Filter by price</h2>
            <div className="price-slider">
              <span>0</span>
              <input type="range" min={0} max={1000}/>
              <span>1000</span>
            </div>
          </div>

          <div className="filter-item">
            <h2>Sort by</h2>
            <div className="input-radio">
              <input type="radio" id="asc" value="asc" name="price"/>
              <label htmlFor="asc">Price(Lowest First)</label>
            </div>
            <div className="input-radio">
              <input type="radio" id="desc" value="desc" name="price"/>
              <label htmlFor="desc">Price(Highest First)</label>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="top">
              {location.pathname == "/men" && <img src="/img/featuredProduct/men_banner.jpeg" alt="" className="catagory-img" />}
              {location.pathname == "/women" &&<img src="/img/featuredProduct/women_banner.jpeg" alt="" className="catagory-img" />}
          </div>
          <h1 style={{textAlign:"center"}}>{location.pathname.split("/")[1].toUpperCase()}</h1>
          {isProcessing &&  <CircularProgress size= "50px" sx={{
                    display: "block",
                    m: "auto",
                    color: "#ad7646", 
            }}/>}
          <div className="bottom">
            {!isProcessing && productElement}
          </div>
          
        </div>
      </div>
    )
  }
  
export default Products
  