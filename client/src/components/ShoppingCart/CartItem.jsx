import "./CartItem.scss"

export default function CartItem(props){
    return (
        <div className="item-wrapper">
            <div className="img-wrapper">
                <img src={props.imageSource}/>
            </div>
          <div className="item-info">
              <h3>{props.name}</h3>
              <h4>${props.price}</h4>
              <p><span className="w30">Quantity: </span> <span>{props.quantity}</span></p>
              <p><span className="w30">Color: </span> <span>{props.color}</span></p>
              <p><span className="w30">Size: </span> <span>{props.size}</span></p>
              {props.isNewItemAdded && <button onClick={props.closeCart}>CLOSE</button>}
          </div>

        </div>
    )
}