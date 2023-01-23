import "./CartItem.scss"

export default function CartItem(){
    return (
        <div className="item-wrapper">
            <div className="img-wrapper">
                <img src="/img/cartImg/hmgoepprod.jpeg"/>
            </div>
          <div className="item-info">
              <h3>Brown Coat</h3>
              <h4>$109.99</h4>
              <p><span className="w30">Quantity:</span> <span>1</span></p>
              <p><span className="w30">Color:</span> <span>Brown</span></p>
              <p><span className="w30">Size:</span> <span>S</span></p>
          </div>
        </div>
    )
}