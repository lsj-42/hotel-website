// ProductCardStore.jsx
// Author: Link Jones
// Last modified: 15/09/2021
// Version: 1.0
// Component that displays a product in card format for the store page

import React, { Component } from 'react'

export default class ProductCardStore extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="card mt-3">
                    {/* product image */}
                    <img className="card-img-top mt-3 ml-5 p-5 mx-auto" src={this.props.product.imageSrc} alt={"Product: " + this.props.product.name} />
                    {/* product information */}
                    <div className="card-body mx-auto">
                        <h5 className="card-title">{this.props.product.name}</h5>
                        <div className="card-text">
                            <p>{this.props.product.description}</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <p>Price: ${this.props.product.price}</p>
                                </div>
                                {/* add to cart button - not yet functional */}
                                <div className="col-md-6">
                                    <button className="btn btn-gold" onClick={() => this.props.increaseQuantity(this.props.product)}>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
