import "./CartPageItem.scss"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

//IMPORT REDUX
import { removeFromCart, setQuantity } from "../../app/cartSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

const CartPageItem = (props) =>{
    const dispatch = useDispatch()

    const [selectBoxValue, setSelectBoxValue] = useState(props.quantity)
    function handleSelectBoxChange(event){
        setSelectBoxValue(event.target.value)
        dispatch(setQuantity({
            index: props.index,
            quantity: event.target.value
        }))
    }

    function generateQuantityOption(){
        let options = []
        for(let i=1;i<21;i++){
            options.push(<option value={i}>{i}</option>)
        }
        return options
    }

    return (
        <div className="cart-page-container" >
            <div onClick={() => dispatch(removeFromCart(props.index))} className="delete-icon">
                <DeleteOutlineIcon/>
            </div>
            <div className = "left-card-page-item">

                <FavoriteBorderIcon className="favourite-button"/>

                <img className="product-image" src ={props.imageSource}/>
            
            </div>

            <div className="product-info">
               
                    <h4 className="product-name">
                        <Link className="link-element" to={`/product/${props.id}`}>
                            {props.name}
                        </Link>
                    </h4>
               
                <div className="price">
                        ${props.price}
                </div>
                <div className="variant-info">
                    {/* <div className="color-size"> */}
                        <div className="color">
                            <span className="w-30">Color:</span> <span>{props.color}</span>
                        </div>
                        <div className="size">
                            <span className="w-30">Size:</span> <span>{props.size}</span>
                        </div>
                    {/* </div> */}

                    <div className="total">
                        <span className="w-30">Total:</span> <span>${(props.price * props.quantity).toFixed(2)}</span>
                    </div>
                    <div className="size-selection">
                        <p className="w-30">Quantity: </p>
                        <select className="select-box" onChange={handleSelectBoxChange} value={selectBoxValue}>
                            {generateQuantityOption()}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPageItem;