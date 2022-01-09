// StorePage.jsx
// Author: Link Jones
// Last modified: 15/09/2021
// Version: 1.0
// Component containing Store page content. Displays a ProductCardStore component for each product in the product list.

import React, { Component } from 'react';
import ProductCardStore from '../ProductCardStore';

export default class StorePage extends Component {

    render() {
       // if the products list is empty, display a message
        if (this.props.products.length === 0) {
            return (
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-8 mt-3 mx-auto">
                            <h1>Store</h1>
                            <p>Loading</p>
                        </div>
                    </div>
                </div>
            )
        }
        //otherwise display the products
        return (
            <div className="container py-4">
                <h1 className="text-center">Store</h1>
                <div className="row">
                    {/* Populate the list with ProductCardStore components */}
                    {this.props.products.map(
                        (p) => <div className="col-lg-4 col-md-6"> {/*3 rows for large screens, 2 for medium, 1 for small */}
                            <ProductCardStore
                                product={p}
                                increaseQuantity={this.props.increaseQuantity}
                            />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}