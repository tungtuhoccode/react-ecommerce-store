import ProductsCard from "../../components/ProductsCard/ProductsCard"
import "./products.scss"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"

function Products() {
  const data = [
    {
      id: 1, 
      img: "/img/featuredProduct/wollBlendCoatModel.jpeg",
      img2: "/img/featuredProduct/wollblendCoat.jpeg",
      title: "Long Sleeve Graphic T-shirt" ,
      isNew: true,
      price: 10,
  },
  {
      
      id: 2, 
      img: "/img/featuredProduct/DenimOvershirt.jpeg",
      img2: "/img/featuredProduct/DenimOvershirt2.jpeg",
      title: "Denim Overshirt" ,
      isNew: true,
      price: 39.99,
  },

  {
      id: 3, 
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Skirt",
      oldPrice: 22.99,
      price: 11.99,
  },
  {
    id: 1, 
    img: "/img/featuredProduct/wollBlendCoatModel.jpeg",
    img2: "/img/featuredProduct/wollblendCoat.jpeg",
    title: "Long Sleeve Graphic T-shirt" ,
    isNew: true,
    price: 10,
},
{
    
    id: 2, 
    img: "/img/featuredProduct/DenimOvershirt.jpeg",
    img2: "/img/featuredProduct/DenimOvershirt2.jpeg",
    title: "Denim Overshirt" ,
    isNew: true,
    price: 39.99,
},

{
    id: 3, 
    img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Skirt",
    oldPrice: 22.99,
    price: 11.99,
},
{
  id: 1, 
  img: "/img/featuredProduct/wollBlendCoatModel.jpeg",
  img2: "/img/featuredProduct/wollblendCoat.jpeg",
  title: "Long Sleeve Graphic T-shirt" ,
  isNew: true,
  price: 10,
},
{
  
  id: 2, 
  img: "/img/featuredProduct/DenimOvershirt.jpeg",
  img2: "/img/featuredProduct/DenimOvershirt2.jpeg",
  title: "Denim Overshirt" ,
  isNew: true,
  price: 39.99,
},

{
  id: 3, 
  img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
  img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
  title: "Skirt",
  oldPrice: 22.99,
  price: 11.99,
},

]
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
          <h1 style={{textAlign:"center"}}>WOMEN</h1>
          <div className="bottom">
          {data.map (item =>
                {
                  return(
                    <div className="card-item">
                      <ProductsCard item={item} key={item.id}/>
                    </div>
                  )
                }

          )}

          </div>
          
        </div>
      </div>
    )
  }
  
export default Products
  