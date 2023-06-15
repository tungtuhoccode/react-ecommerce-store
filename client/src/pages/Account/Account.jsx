import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {setLogin, login} from "../../app/userSlice";
import API_URL from "../../constant/routeConstants"


const Account = () => {
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

    return (
        <div style={{
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems:'center',
            gap:"10px"
        }}>
            <h1 style={{textAlign:"center"}}>
                YOU ARE LOGGED IN!
            </h1>
            <button onClick={() => {
                logOut()
                navigate('/login')
                }} style={{width:"100px"}}>
                LOG OUT
            </button>
        </div>
    )
}

export default Account;