//CSS
import "./Product.scss"

//MODULE
import {useEffect, useState} from "react"
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../../app/cartSlice";
import { useParams } from "react-router-dom";

//ICON
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BalanceIcon from '@mui/icons-material/Balance';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AddNotification from "../../components/AddNotification/AddNotification";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
//COMPONENT
import SizeBox from "../../components/SizeBox/SizeBox"
//API URL 
import API_URL from "../../constant/routeConstants"

let id = 0
var id2 = 0

function Product() {
    const productID = useParams().id
    const dispatch = useDispatch();
    
    //fetch product data
    const [productData, setProductData] = useState({})
    const [images, setImages] = useState([])
    const [sizes, setSizes] = useState([])


    const fetchProductData = async () => {
      const productURL = `${API_URL.SINGLE_PRODUCT}/${productID}`
      const response = await fetch(productURL)
      const data = await response.json()
      console.log("data images: "+data.images)
      setProductData(data)
      setImages(data.images)
      console.log(data.productVariant)
      setSizes(
        data.productVariant.map(variant => {
          return {
            size: variant.size,
            isActive: false
          }
        }))
    }

    useEffect(()=>{
      fetchProductData()
    },[])
    console.log(productData)

    //image area, quantity, favourite state

    const [mainImageIndex, setMainImageIndex] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [isFavorite, setIsFavorite] = useState(false)


    //notification and timer for notification
    const [show, setShow] = useState(false)
    const lastItemAdded = useSelector(state => state.cart.lastItemAdded) 

    function showNotification(idIn){
      setShow(true)
      
      setTimeout(() => {
        if(idIn === id2){
          setShow(false)
        }
      }, 2000);
      
    }

    function setNotificationStyle(){
      let offset = 0
      if(window.innerHeight < 800){
        offset = 5
      }else{
        offset = 20
      }
      document.documentElement.style.setProperty("--location-value", show? offset + "px" : "-300px")
    }

    setNotificationStyle(show ? "8px":"-300px")

    //size box 
    const [currentSize, setCurrentSize] = useState(-1)
    function handleClickSizeBox(index){
      let newSizes = []
      setCurrentSize(index)
      for (let i=0;i<sizes.length;i++){
        let size = sizes[i]
        newSizes.push({
          ...sizes[i],
          isActive: index == i ? true:false
        })
      }

      setSizes(newSizes)
    }

    function generateSizeBoxElements(){
      let sizeBoxElements = []

      for (let i=0;i<sizes.length;i++){
        let size = sizes[i]
        sizeBoxElements.push(<SizeBox handleClick={() => handleClickSizeBox(i)} value={size.size} isActive={size.isActive} />)
      }

      return sizeBoxElements

    }

    //handle adding to cart
    function addToCartFromProduct(){
      console.log(currentSize)
      if (currentSize == -1) return

      let thisProduct =  {
        id:  productData.name +" with size "+ sizes[currentSize].size,
        itemName: productData.name,
        price: productData.price,
        quantity: 1,
        color: productData.color,
        size: sizes[currentSize].size,
        imageSource: productData.images[1].url
      }

      console.log("this product is")
      console.log(thisProduct)
      dispatch(addToCart(thisProduct))
      showNotification(id+1)
      id2++
      id++
    }

    //data
    const cartTestData = [
      {
          id: 12,
          itemName:"Brown coat",
          price: 109.99,
          quantity:1,
          color: "Brown",
          size:"S",
          imageSource: "/img/cartImg/hmgoepprod.jpeg"
      },
      {
          id: 13,
          itemName:"Purple Sock",
          price: 39.99,
          quantity:1,
          color: "Brown",
          size:"S",
          imageSource: "/img/cartImg/hmgoepprod2.jpeg"
      },
      {
          id: 15,
          itemName:"Yellow Pant",
          price: 1.99,
          quantity:1,
          color: "Red",
          size:"M",
          imageSource: "https://lp2.hm.com/hmgoepprod?set=source[/f9/c3/f9c3f12b844b6e09bf4263406be48fcd783ab213.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]"
      },
    ]

    //image and other helper function
    function getNewMainImage(index){
      setMainImageIndex(index)
    }
    function decreaseQuantity(){
      if(quantity>1){
        setQuantity(prev => prev-1)
      }
    }
    function increaseQuantity(){
      setQuantity(prev => prev+1)
    }
    function toggleFavorite(){
      setIsFavorite(prev => !prev)
    }


    //JSX array element
    function initilizeSideImagesElement(){
      const imgElements = []
      for(let i=0;i<images.length;i++){
        imgElements.push(<img alt="side images" key={i} onClick={()=>getNewMainImage(i)} src={images[i].url}/>)
      }
      return imgElements
    }

    //RETURN JSX
    return (

      <div className="product-container">

        <div className="notification-container">
          {lastItemAdded &&  <AddNotification  close = {() => setShow(false)}/>}
        </div>
        
       <div className="left">
          <div className="image-container">
           
            
            <div className="main-image">
              <img src={images[mainImageIndex]?.url}/>
            </div>
            <div className="side-images">
                {initilizeSideImagesElement()}
            </div>
          </div>
       </div>

       <div className="right">
            <h1 className="title">{productData.name}</h1>
            <h2 className="price">${productData.price}</h2>

            <div className="sizes-container">
              <h5 className="size-title">Sizes </h5>
              <div className="sizes-wrapper">
                {generateSizeBoxElements()}
              </div>
            </div>
            <button onClick={() => addToCartFromProduct()}className="add-to-cart">
              <span style={{display:"flex", alignItems:"center",gap:"5px"}}><ShoppingBagOutlinedIcon></ShoppingBagOutlinedIcon>ADD TO CART</span>
            </button>
            <div className="desc">
              <p className="description">{productData.description}</p>
            </div>



          <div className="favorite-and-compare">
              <div className="favorite">
                {isFavorite && <FavoriteIcon onClick={toggleFavorite} className="icon-fav"/>}
                {!isFavorite && <FavoriteBorderIcon onClick={toggleFavorite} className="icon-fav"/>}
                <span>ADD TO WISH LIST</span>
              </div>
              <div className="compare"> 
                <BalanceIcon className="icon-fav"/>
                <span>ADD TO COMPARE</span>
              </div>
          </div>
            <div className="information">
              <p>Vender: Polo</p>
              <p>Product Type: T-Shirt</p>
              <p>Tags: T-Shirt, Man, Top</p>
            </div>
            <hr className="hr-break-section"/>
            <div className="information">
              <p>DESCRIPTION</p>
              <hr/>
              <p>ADDITIONAL INFORMATION</p>
              <hr/>
              <p>FAQ</p>

            </div>

       </div>
      </div>
    )
}


export default Product