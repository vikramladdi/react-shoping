import React from 'react'
import { Link } from 'react-router-dom';

export default function Products(props) {

  return (
    <div>
      <div className='container d-flex justify-content-center mt-50 mb-50'>
        <div className='row'>
          {
            props.products.map((products) => 
              <div key={products.id} className="col-md-4 mt-2">
                <div className='card'>
                  <div className="card-body">
                    <div className="card-img-actions">
                      <Link to={`/product/${products.id}`}><img src={products.thumbnail} className="card-img img-fluid" width="96" height="350" alt={products.brand} /></Link>
                    </div>
                  </div>
                  <div className="card-body bg-light text-center">
                    <div className="mb-2">
                      <h6 className="font-weight-semibold mb-2">
                        <Link to={`/product/${products.id}`} className="text-default mb-2" data-abc="true">{products.title}</Link>
                      </h6>

                      <Link to="#" className="text-muted" data-abc="true">{products.category}</Link>
                    </div>

                    <h3 className="mb-0 font-weight-semibold">{products.price}</h3>

                    <div>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                    </div>

                    <div className="text-muted mb-3">{products.rating}</div>
                    <button type="button" className="btn bg-cart" onClick={()=>props.handleCart(products)}><i className="fa fa-cart-plus mr-2"></i> Add to cart</button>
                  </div>
                </div>
              </div>
            
            )}
        </div>
      </div>
    </div>
  )
}

