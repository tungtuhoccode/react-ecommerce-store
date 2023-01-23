import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import Slider from "../../components/Slider/Slider"
import "./Home.scss"

function Home() {
  const data = [
    {
      
        id: 1, 
        img: "/public/img/featuredProduct/wollblendCoat.jpeg",
        img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Long Sleeve Graphic T-shirt" ,
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
    {
        id: 2, 
        img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "coat" ,
        isNew: true,
        oldPrice: 30.99,
        price: 10.99,
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
        id: 4, 
        img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Hat",
        oldPrice: 19,
        price: 12,
    },
    {
        id: 1, 
        img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Long Sleeve Graphic T-shirt" ,
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
  ]

    return (
      <div className="home-page">
        <Slider/>
        <FeaturedProducts type={"Featured"}/>
        <FeaturedProducts type={"Trending"}/>

      </div>
    )
  }
  
export default Home