import React from 'react'
import { Link } from 'react-router-dom'

export default function Cart(props) {

  const { cartItems,removeFromCart, handleCart } = props

  return (
    <div>
      <div  className="card">
        <div className="row">
          <div className="col-md-8 cart">
            {cartItems.length === 0 ?
              <div className="title">
                <div className="row">
                  <div className="col"><h4><b>Shopping Cart is Empty</b></h4></div>
                  <div className="col align-self-center text-right text-muted">0 items</div>
                </div>
              </div> :
              <div className="title">
                <div className="row">
                  <div className="col"><h4><b>Shopping Cart</b></h4></div>
                  <div className="col align-self-center text-right text-muted">3 items</div>
                </div>
              </div>
            }

            {cartItems.map((item) => (
              <div key={item.id} className="row border-top border-bottom">
                <div className="row main align-items-center">
                  <div className="col-2"><img className="img-fluid" src={item.thumbnail} alt={item.id} /></div>
                  <div className="col">
                    <div className="row text-muted">{item.brand}</div>
                    <div className="row">{item.title}</div>
                  </div>
                  <div className="col">
                    <button className='btn btn-primary quantity_remove' onClick={()=>removeFromCart(item)}>-</button>
                    <span className='mx-2'>{item.quantity}</span>
                    <button className='btn btn-primary quantity_increase' onClick={()=>handleCart(item)}>+</button>
                  </div>
                  <div className="col">&euro; {item.price}*{item.quantity}</div>
                  <div className="col">&euro; {item.price*item.quantity}</div>
                </div>
              </div>
            ))}


            <div className="back-to-shop"><Link to='/'>Back to shop</Link></div>
          </div>
        </div>

      </div>
    </div>
  )
}
