// ProductCardCart.jsx
// Author: Link Jones
// Last modified: 15/09/2021
// Version: 1.0
// Component that displays a product in card format for the shopping cart

import React, { Component } from 'react'

export default class ProductCard extends Component {

    render() {
        return (
            <div className="card mt-3 mx-auto">
                {/* product image */}
                <img className="card-img-top mt-3 p-5 mx-auto" src={this.props.product.imageSrc} alt={"Product: " + this.props.product.name} />
                {/* product information */}
                <div className="card-body p-5">
                    <h5 className="card-title">{this.props.product.name}</h5>
                    <p className="card-text">${this.props.product.price}</p>
                    {/* shopping cart controls - increase and decrease quantity */}
                    <button className="btn btn-secondary" onClick={() => this.props.decreaseQuantity(this.props.product)}>-</button>
                    <span className="badge badge-warning text-dark">{this.props.product.quantity}</span>
                    <button className="btn btn-secondary" onClick={() => this.props.increaseQuantity(this.props.product)}>+</button>
                </div>
            </div>
        )
    }
}
