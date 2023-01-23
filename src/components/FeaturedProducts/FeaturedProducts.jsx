import "./FeaturedProducts.scss"
import Card from "../Card/Card"
const ProductsList = (props) =>{
    const data = [
        {
            id: 1, 
            img: "/img/featuredProduct/wollBlendCoatModel.jpeg",
            img2: "/img/featuredProduct/wollblendCoat.jpeg",
            title: "short Sleeve Graphic T-shirt" ,
            isNew: true,
            oldPrice: 22.99,
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
        <div className="featured-products">
            <div className="top">
            <h1>{props.type} <span className="control-display">products</span></h1>
            <p className="featured-product-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Riss commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.
            </p>
            </div>
            <div className="bottom">
               {data.map (item =>
                {
                  return(
                        <Card item={item} key={item.id}/>
                  )
                }

               )}
            </div>
        </div>
    )
}

export default ProductsList