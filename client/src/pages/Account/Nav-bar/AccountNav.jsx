import { useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom"
import "./AccountNav.css"

import { setLogin,login } from "../../../app/userSlice";
import API_URL from "../../../constant/routeConstants";

//for icons
import { CiSettings } from "react-icons/ci";
import { FiBox } from "react-icons/fi";
import { FaHandSparkles } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";


export default function AccountNav({email,path}){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logOut = () => {
        dispatch(setLogin(false))
        
        const payload =  {
            method: 'POST', // Specify the HTTP method
            credentials: 'include',

          }

        const response = fetch(`${API_URL.LOGOUT}`, payload)
        console.log(response)
    }
    
    return(
        <div className={path === "/account" ? "account-navbar" : "account-navbar section-navbar"}>
            <div className="account-navbar-first-half">
                <div className="account-navbar-greeting">Hi {email.replace("@gmail.com","")}<CiSettings size="2rem"/></div>
                <div className="user-points-container">
                    <div className="user-points">0 points</div>
                    <div className="user-point-description">
                        You’re 150 points away from reaching your next reward and 600 points are needed to become a Plus member. Vouchers are issued 30 days after they are earned.
                </div>
            </div>
            </div>


            <div className="account-navbar-second-half">
                <NavLink className={({isActive})=> isActive? "diffBackground isActive nav": "diffBackground nav"} to="/account/purchases">
                    <div className="individualNav-container">
                        <FiBox size="2rem"/>My purchases
                    </div>
                    <IoIosArrowForward className="icon-arrow" size="2rem"/>
                </NavLink>
                
                <NavLink className={({isActive})=> isActive? "isActive nav": "nav"} to="/account/settings">
                    <div className="individualNav-container">
                        <CiSettings size="2rem"/>Account settings
                    </div>
                    <IoIosArrowForward className="icon-arrow" size="2rem"/>
                </NavLink>

                <NavLink className={({isActive})=> isActive? "diffBackground isActive nav": "diffBackground nav"} to="/account/points-history">
                    <div className="individualNav-container">
                        <FaHandSparkles size="2rem"/>My points
                    </div>
                    <IoIosArrowForward className="icon-arrow" size="2rem"/>
                </NavLink>

                <NavLink className="nav" onClick={()=> {
                    logOut()
                    navigate('/login')}
                }>
                    <div className="individualNav-container">
                        <FaSignOutAlt size="2rem"/>Log Out
                    </div>
                </NavLink>

            </div>
        </div>
    );
}