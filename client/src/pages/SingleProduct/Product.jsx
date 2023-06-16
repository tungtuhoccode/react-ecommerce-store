//CSS
import "./Product.scss"

//MODULE
import {useEffect, useState, useRef} from "react"


//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, setIsCartOnHover } from "../../app/cartSlice";
import { addToFavourite, removeFromFavourite } from "../../app/favouriteSlice";

import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

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
    const location = useLocation()
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
      // console.log("data images: "+data.images)
      setProductData(data)
      setImages(data.images)
      // console.log(data.productVariant)
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
      setShow(false)
    },[location])
    // console.log(productData)


    //image area, quantity, favourite state
    const {favouriteItems} = useSelector( state => state.favourite)
    
    function isFavourite(){

      for (let i = 0; i <favouriteItems.length; i++){
        if (productID === favouriteItems[i].id){
          return true
        }
      }
      return false
    }

    const [mainImageIndex, setMainImageIndex] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [isFavorite, setIsFavorite] = useState(() => {
      console.log(isFavourite())
      return isFavourite()
    })

    //notification and timer for notification
    const notifiaiton_tracker_ref = useRef(null)
    const [show, setShow] = useState(false)
    const lastItemAdded = useSelector(state => state.cart.lastItemAdded) 


    function showNotification(idIn){
      setShow(true)
      startAnimation() 
      
      setTimeout(() => {
        if(idIn === id2){
          setShow(false)
          endAnimation()
        }
      }, 650);
      
    }

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    
    // function setNotificationStyle(){
    //   let offset = 0
    //   if(window.innerHeight < 800){
    //     offset = 5
    //   }else{
    //     offset = 20
    //   }
    //   document.documentElement.style.setProperty("--location-value", show? offset + "px" : "-300px")
    // }

    // setNotificationStyle()
    // useEffect(() => {
    //   if (notifiaiton_tracker_ref && notifiaiton_tracker_ref.current) {
    //     notifiaiton_tracker_ref.current.classList.add("hide")
    //     console.log("use effect running");
    //   }
    // }, []);

    function startAnimation(){
      console.log("start");
      notifiaiton_tracker_ref.current.classList.remove("hide")
      notifiaiton_tracker_ref.current.classList.add("show")
      console.log(notifiaiton_tracker_ref.current.classList);

    }
    function endAnimation(){
      console.log("end");
      notifiaiton_tracker_ref.current.classList.remove("show")
      notifiaiton_tracker_ref.current.classList.add("hide")
      console.log(notifiaiton_tracker_ref.current.classList);
    }


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
    function addToCartFromProduct(){ //FromProduct is to avoid having the same name as reducer
      if (currentSize == -1) return

      let thisProduct =  {
        id: productID,
        itemName: productData.name,
        price: productData.price,
        quantity: 1,
        color: productData.color,
        size: sizes[currentSize].size,
        imageSource: productData.images[1].url
      }

      // console.log("this product is")
      // console.log(thisProduct)
      dispatch(addToCart(thisProduct))
      showNotification(id+1)
      id2++
      id++
    }

    //handle adding to favourites list
    function addToFavouriteFromProduct(){  //FromProduct is to avoid having the same name as reducer
      let thisProduct =  {
        id: productID,
        itemName: productData.name,
        price: productData.price,
        quantity: 1,
        color: productData.color,
        imageSource: productData.images[1].url
      }
      
      dispatch(addToFavourite(thisProduct))

    }

    function removeFromFavouriteFromProduct(){  //FromProduct is to avoid having the same name as reducer
      let thisProduct =  {
        id: productID,
        itemName: productData.name,
        price: productData.price,
        quantity: 1,
        color: productData.color,
        imageSource: productData.images[1].url
      }
      
      dispatch(removeFromFavourite(thisProduct))
    }


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

        <div ref={notifiaiton_tracker_ref} className="notification-container">
          {lastItemAdded &&  
            <Link style={{textDecoration:"none"}} to={`/cart`}>
                <AddNotification  close = {() => {
                  setShow(false)
                }} />
            </Link>
          }
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
                {isFavorite && 
                  <FavoriteIcon
                    onClick={() => {
                        toggleFavorite()
                        console.log("remove from favorites")
                        removeFromFavouriteFromProduct()
                      }} 
                    className="icon-fav"
                  />
                }
                {!isFavorite && 
                   <FavoriteBorderIcon
                    onClick={() => {
                        toggleFavorite()
                        console.log("adding to favorites")
                        addToFavouriteFromProduct()
                      }} 
                    className="icon-fav"
                  />
                }
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