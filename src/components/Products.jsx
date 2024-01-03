import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeProduct } from '../productsSlice';
import 'bootstrap/dist/css/bootstrap.css'


function Products() {

    const productsList = useSelector((state) => state.products);
    const dispatch = useDispatch();

    return (
        <div className='container bg-secondary-subtle'>
            {
                //map fuction for itrates the data 
                productsList.products.map((product) => (
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
                                                <button className="btn bg-warning-subtle d-inline py-0" onClick={() => dispatch(decreaseQuantity(product.id))}>-</button>
                                                <span className="p-2">{product.quantity}</span>
                                                <button className="btn bg-warning-subtle d-inline py-0" onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
                                                <p className="card-text mt-2">    ${product.price}</p>
                                                <br />
                                                <button className='btn btn-danger' onClick={() => dispatch(removeProduct(product.id))} style={{ fontSize: '10px', marginTop: '3rem' }}>Remove</button>
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
                                            <div>${product.total_price}</div>
                                            <div>free</div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='d-flex'>
                                        <div className='container-fluid'>Total</div>
                                        <strong className='container-fluid text-end'>${product.total_price}</strong>
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

export default Products;