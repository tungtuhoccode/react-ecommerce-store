import Products from "./pages/Products/Products"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import Product from "./pages/SingleProduct/Product"
import SwiperCore, { Autoplay } from 'swiper';
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import "./App.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom"
import CheckOut from "./pages/CheckOut/CheckOut"


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
        path:"/checkout",
        element:<CheckOut/>
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
