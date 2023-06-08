import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {setLogin} from "../../app/userSlice";


const Account = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

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
                dispatch(setLogin(false))
                navigate('/login')
                }} style={{width:"100px"}}>
                LOG OUT
            </button>
        </div>
    )
}

export default Account;