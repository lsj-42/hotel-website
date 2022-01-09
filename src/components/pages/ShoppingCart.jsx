// ShoppingCart.jsx
// Author: Link Jones
// Last modified: 15/09/2021
// Version: 1.0
// Component containing Shopping Cart page content. Displays a Product Card component for each product added to the cart.

import React, { Component } from 'react';
import { Fragment } from 'react';
import ProductCardCart from '../ProductCardCart';

export default class
    extends Component {
    render() {
        // if the cart is empty, display a message
        if (this.props.products.length === 0) {
            return (
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-8 mt-3 mx-auto">
                            <h1>Shopping cart</h1>
                            <p>Your cart is empty</p>
                        </div>
                    </div>
                </div>
            )
        }
        // otherwise display products
        else
            return (
                <Fragment>
                    <div className="container pt-4">
                            <h1 className="text-center mb-5">Shopping cart</h1>
                            {/* products list */}
                            <div className="row mb-5">
                                {this.props.products.map(
                                    (p) => <div className="col-lg-4 col-md-6">
                                        <ProductCardCart
                                            product={p}
                                            increaseQuantity={this.props.increaseQuantity}
                                            decreaseQuantity={this.props.decreaseQuantity}
                                        />
                                    </div>
                                )}
                            </div>
                       
                    </div>
                    {/* total and checkout button */}
                    <div className="bg-white py-5"> {/* full width white background */}
                        <div className="container "> 
                            <div className="row p-3">
                                <div className="col-sm-4">
                                    {/* displays the total - equal to the price times the quantity for each product in the cart */}
                                    <h3 className="border-top border-bottom p-1">Total: ${this.props.products.reduce((a, c) => (a + (c.quantity * c.price)), 0)}</h3>
                                </div>
                                <button className="btn btn-gold offset-sm-4 col-sm-4">Check Out</button>
                            </div>
                        </div>
                    </div>

                </Fragment>

            )
    }
}
