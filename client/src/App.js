import Products from "./pages/Products/Products"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import Product from "./pages/SingleProduct/Product"
import SwiperCore, { Autoplay } from 'swiper';
import FavouritePage from "./pages/FavouritePage/FavouritePage"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import "./App.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom"
import Cart from "./pages/Cart/CartPage"
import Checkout from "./pages/Checkout/Checkout"


const Layout = () => {
  return (
    <div className="app">
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
        element:<Products/>,
      },
      {
        path:"/men",
        element:<Products/>,
      },
      {
        path:"/children",
        element:<Products/>,
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
      }
      ]
    }
  
])
function App() {
  SwiperCore.use([Autoplay])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
