import ProductsCard from "../../components/ProductsCard/ProductsCard"
import "./products.scss"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import env from "react-dotenv";
import {useState, useEffect } from "react"
import { useParams, useLocation } from "react-router-dom"
import CATAGORY_LIST from "../../constant/catagoryConstant"

function Products() {
  const location = useLocation()
  const [products, setProducts] = useState([])
  console.log(location.pathname)
  const API_URL = `${env.REACT_APP_API_URL}/products${location.pathname}`
  console.log(API_URL)
  
  useEffect(()=>{

      fetch(API_URL)
        .then((response) => response.json())
        .then((data)=>{
          console.log(location.pathname+" data")
          setProducts(data)
        })
        .catch((err) => {
          console.log(err)
        })
    
  },[])
  
  const productElement = products.map(product =>{
    console.log(product)
    return (
      <ProductsCard 
      id = { product._id}
      name = {product.name}
      img ={ product.images[0].url}
      img2 ={ product.images[1].url}
      regularPrice ={product.price}
      salePrice ={product.price - 10}
      key = {product.id}
      isNew = {true}
      />
    )
  })


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
              <img src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs-tinysrgb&w=1600" alt="" className="catagory-img" />
          </div>
          <h1 style={{textAlign:"center"}}>{location.pathname.split("/")[1]}</h1>
          <div className="bottom">
            {productElement}
          </div>
          
        </div>
      </div>
    )
  }
  
export default Products
  