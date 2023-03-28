import { Navigation, A11y } from 'swiper';
import { Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { EffectFade } from 'swiper';


import "./Slider.scss"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


const data = [
  {
    img: "https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/TOOLBOX/PRE_SEASON/2022_s06/december_2022/TCM6026_3x2.jpg]&scale=size[960]&sink=format[jpeg],quality[80]",
    title: "Streetwear new arrivals",
    description: "Casual layers alongside quality, silhouettes exude the perfect street style mood.",
  },
  {
    img: "https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/TOOLBOX/LOCAL%20ACTIVITIES/2022_s06/december_2022/0788297003-small-glass-vase-3x2.jpg]&scale=size[960]&sink=format[jpeg],quality[80]",
    title: "Trending now: decorative vases from $5.99",
    description: "Trendy vases that make the perfect additon to any decor style.",
  },
  {
    img:  "https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/divided_s06/december_2022/5096c/5096C-3x2.jpg]&scale=size[960]&sink=format[jpeg],quality[80]",
    title: "Hello new season and new fits",
    description: "Find your fave pants.",
  }
  ,
];

const sliderElements = data.map(item => {
  return (
    <SwiperSlide>
    <div className='swiper-item-container'>
      <img className='img' src={item.img}/>
      <div className="text-container">
        <h2>{item.title}</h2>
        <h5>{item.description}</h5>
        <button>Shop now</button>
      </div>
    </div>

  </SwiperSlide>
  )
})

const buttonLeft = <WestOutlinedIcon/>
const buttonRight = <EastOutlinedIcon/>

export default () => {
  return (
      <div className="swiper-container">
        <Swiper
            // install Swiper modules
            className='slider-wrapper'
            modules={[Navigation, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={
              { 
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            }
            navigation={{
                prevEl: '.prev', 
                nextEl: '.next', 
            }}
            speed={900}
            loop={true}
            >
            {sliderElements}
            {/* <SwiperSlide>
              <div className='swiper-item-container'>
                <img className='img' src={data[0].img}/>
                <div className="text-container">
                  <h2>Streetwear new arrivals</h2>
                  <h5><span>Casual layers alongside quality, silhouettes exude </span><span> the perfect street style mood</span></h5>
                  <button>Shop now</button>
                </div>
              </div>
               
            </SwiperSlide> */}
            {/* <SwiperSlide>
                <img className='img' src={data[1]}/>
            </SwiperSlide>
            <SwiperSlide>
                <img className='img' src={data[2]}/>
                <h2>Streetwear new arrivals</h2>
            </SwiperSlide> */}
        </Swiper>
        <div className="button-container">
          <ArrowCircleLeftIcon className="prev" />
          <ArrowCircleRightIcon className="next" />
        </div>
       
      </div>
  );
};