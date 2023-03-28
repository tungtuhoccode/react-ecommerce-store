import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import Slider from "../../components/Slider/Slider"
import "./Home.scss"

function Home() {
    return (
      <div className="home-page">
        <Slider/>
        <FeaturedProducts type={"Featured"}/>
        <FeaturedProducts type={"Trending"}/>
      </div>
    )
  }
  
export default Home