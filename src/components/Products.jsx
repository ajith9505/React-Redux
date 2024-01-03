import React from 'react'
import { connect } from 'react-redux';
import { increaseQuantity, decreaseQuantity, updatePricce } from '../../actions';
import 'bootstrap/dist/css/bootstrap.css'


function Products({ products, quantity, increaseQuantity, decreaseQuantity }) {

    return (
        <div className='container bg-secondary-subtle'>
            {
                //map fuction for itrates the data 
                products.map((product, index) => (
                    <div key={product.id} className="card mb-3 bg-primary-subtle" style={{ fontSize: "13px" }}>
                        <div className="row g-0">
                            <div className="col-md-4 p-5">
                                <img src={product.thumbnail} className="img-fluid rounded" alt="Loading..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <div className='container-fluid'>
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <p className="card-text"><small className="text-body-secondary">Rating : {product.rating}</small></p>
                                        </div>
                                        <div className='container-fluid text-end w-25'>
                                            <div>
                                                <button className='btn btn-primary-subtle d-inline' onClick={() => decreaseQuantity(product.id)}>-</button>
                                                <p className="card-text d-inline">    {quantity}</p>
                                                <button className='btn btn-primary-subtle d-inline' onClick={() => increaseQuantity(product.id)}>+</button>
                                                
                                                <br />
                                                <button className='btn btn-danger' style={{ fontSize: '10px', marginTop: '3rem' }}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex">
                                        <div className="container-fluid text-subtle">
                                            <div>Sub Total</div>
                                            <div>Shipping</div>
                                        </div>
                                        <div className='container-fluid text-end'>
                                            <div>${product.price}</div>
                                            <div>free</div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='d-flex'>
                                        <div className='container-fluid'>Total</div>
                                        <strong className='container-fluid text-end'>${product.price}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

const mapStateToProps = state => ({
    products:state.products,
    quantity:state.quantity
})

const mapDispatchToProps = {
    increaseQuantity,
    decreaseQuantity,
    updatePricce
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)