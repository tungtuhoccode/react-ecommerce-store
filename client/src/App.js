import Products from "./pages/Products/Products"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import Product from "./pages/SingleProduct/Product"
import Cart from "./pages/Cart/CartPage"
import Checkout from "./pages/Checkout/Checkout"
import Register from "./pages/Register/Register"
import Account from "./pages/Account/Account"



import SwiperCore, { Autoplay } from 'swiper';
import FavouritePage from "./pages/FavouritePage/FavouritePage"

import ErrorPage from "./pages/ErrorPage/ErrorPage"
import "./App.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom"
import LogIn from "./pages/LogIn/LogIn"




const Layout = () => {

  return (
    <div className="app" style={{}}>
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      // errorElement: <ErrorPage />,
      children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/women",
        element:<Products name={"women"}/>,
      },
      {
        path:"/men",
        element:<Products name={"men"}/>,
      },
      {
        path:"/children",
        element:<Products name={"children"}/>,
      },
      {
        path:"/product/:id",
        element:<Product/>
      },
      {
        path:"/favourite",
        element:<FavouritePage/>,
      },
      {
        path:"/checkout",
        element:<Checkout/>,
      },
      {
        path:"/login",
        element:<LogIn/>,
      },
      {
        path:"/register",
        element:<Register/>,
      },
      {
        path:"/account",
        element:<Account/>,
      },
      ]
    }
  
])



function App() {
  SwiperCore.use([Autoplay])

  //if not, try to get the data from the local storage

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
