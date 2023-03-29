import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from "react-router-dom"
import "./Navbar.scss"
import React from "react"
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { setIsCartOnHover } from '../../app/cartSlice';
import { useDispatch, useSelector } from 'react-redux';


function NavBar() {
    const [mQuery, setMQuery] = React.useState({
        matches: window.innerWidth > 1000 ? true : false,
    });

    const isOnSmallScreen = mQuery && !mQuery.matches
    React.useEffect(() => {
        let mediaQuery = window.matchMedia("(min-width: 1000px)");
        mediaQuery.addListener(setMQuery);
        // this is the cleanup function to remove the listener
        return () => mediaQuery.removeListener(setMQuery);
    }, []);

    const [isUsingNavMenu, setIsUsingNavMenu] = React.useState(false)
    const isCartHover = useSelector(state => state.cart.isOnHover)

    const numberOfCartItem = useSelector(state => state.cart.cartItems.length)
    const dispatch = useDispatch()

    React.useEffect(()=>{
        setIsUsingNavMenu(false)
    },        
    [mQuery])

    const navigationMenuOpen = {
        // left: !isUsingNavMenu ? "-400px":"0px",
        width:!isUsingNavMenu? "100":"180px",
        left: !isUsingNavMenu? "-250px":"0px",
        transition:"ease",
        transitionDuration: "250ms",
    }
    const navBarDisplay ={
        display: isUsingNavMenu ? "flex":"flex"
    }

    function handleOpenMenu(){
        setIsUsingNavMenu(prevIsUsing => !prevIsUsing)
    }
    function handleCloseCart(){
        if(!isUsingNavMenu){
            dispatch(setIsCartOnHover(false))
        }
    }
    function handleOpenCart(){

        if(!isUsingNavMenu){
            dispatch(setIsCartOnHover(true))
        }
     
    }

    console.log("is using nav: "+!(mQuery && !mQuery.matches))
    console.log("is cart hover: "+isCartHover)


    return (
        <div className="navbar">
            {/*If the two media query match*/}
            {!(mQuery && !mQuery.matches) ? 
            (
            <div>
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src="/img/en.png" alt="language image" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/1">Women</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/2">Men</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/3">Children</Link>
                    </div>
                </div>
                <div className="center">
                <Link className="link"  to="/"><span className='center-logo'>3TStore</span></Link>
                </div>
                <div className="right">
                    <div className="item">Homepage</div>
                    <div className="item">About</div>
                    <div className="item">Contact</div>
                    <div onMouseLeave={handleCloseCart}  className="icons">
                    <SearchIcon/>
                    <PersonOutlineIcon/>
                    
                    <FavoriteBorderIcon/>
                    <div onMouseOver={handleOpenCart} className="cart">
                        <div className="cart-icon">
                            <ShoppingCartOutlinedIcon/>
                            <span className="cart-item-count">{numberOfCartItem}</span>
                        </div>
                        <ShoppingCart isOnHover={isCartHover} mouseLeave={()=>handleCloseCart()}/>
                    </div>
                    
                    </div>
                </div>
            </div>
           
        </div>
      ) : (
          
        <div >
            {
                isUsingNavMenu && 
                <div className="nav-menu-wrapper" onClick={handleOpenMenu}>
                </div>
            }
           <div className="mobile-wrapper">

           
            <div style={navigationMenuOpen} className="navigation-menu">
                <div className="item">
                    <img src="/img/en.png" alt="language image" />
                    <KeyboardArrowDownIcon className='keyboardDown--hover'/>
                </div>
                <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon className='keyboardDown--hover'/>
                </div>
                <div className="item">
                    <Link onClick={handleOpenMenu} className="link" to="/products/1">Women</Link>
                </div>
                <div className="item">
                    <Link onClick={handleOpenMenu} className="link" to="/products/2">Men</Link>
                </div>
                <div className="item">
                <Link onClick={handleOpenMenu} className="link" to="/products/3">Children</Link>
                </div>
                <div className="item">
                    <Link onClick={handleOpenMenu} className="link" to="/" >Homepage</Link>
                </div>
                <div className="item">About</div>
                <div className="item">Contact</div>
                <div className="item">
                <h1 style={{cursor:"pointer"}} onClick={handleOpenMenu}>CLOSE</h1>
            </div>


        </div>
        <ShoppingCart/>
        <div style={navBarDisplay} className="mobile">
            <div className="left">
                <img style={{cursor:"pointer"}} onClick={handleOpenMenu} src="/img/icons8-menu-rounded-30.png"/>
                <Link className="link"  to="/"><span className='center-logo'>3TStore</span></Link>
            </div>
            <div className="right">
                
            <div onMouseLeave={handleCloseCart}  className="icons">
                    <SearchIcon/>
                    <PersonOutlineIcon/>
                    <FavoriteBorderIcon/>
                    <Link style={{textDecoration:"none", color:"grey"}} to="/checkout">
                    <div className="cart-icon">
                        <ShoppingCartOutlinedIcon/>
                        <span>{numberOfCartItem}</span>
                    </div>
                    </Link>

            </div>
            </div>
        </div>
        </div>
        </div>
      )}
            
            
           
        </div>
        
    )
  }
  
export default NavBar