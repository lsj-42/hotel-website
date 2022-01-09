// Main.jsx
// Author: Link Jones
// Last modified: 16/09/2021
// Version: 1.0
// Main page that arranges nav bar, content and footer. Keeps the product list in state and handles the store and shopping cart functions

import React, { Component } from 'react'
import Navi from './layout/Navi';
import Footer from './layout/Footer';
import ShoppingCart from './pages/ShoppingCart';
import GallerySlider from './GallerySlider';
import StorePage from './pages/StorePage';
import News from './pages/News';
import { getProducts } from './ProductAPI';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Form from './pages/Form';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Main extends Component {

    state = {
        products: [] //list of available products - initially empty, to be fetched from API
    }

    increaseQuantity = (prod) => {
        //increase quantity of the given product
        const index = this.state.products.indexOf(prod);
        const products = [...this.state.products];
        products[index].quantity++;
        this.setState({ products });
        this.saveProducts(); //save state to local storage

    }

    decreaseQuantity = (prod) => {
        //decrease the quantity of the given product
        const index = this.state.products.indexOf(prod);
        const products = [...this.state.products];
        products[index].quantity--;
        this.setState({ products });
        this.saveProducts(); //save state to local storage

    }

    saveProducts = () => {
        //write products list to local storage 
        localStorage.setItem("products", JSON.stringify(this.state.products));
        console.log("Products updated");
    }


    componentDidMount() {
        //check local storage for products list, otherwise load from API component
        let products = localStorage.getItem("products");
        if (products !== null) {
            products = JSON.parse(products);
            this.setState({ products });
            console.log("Products loaded");
        }
        else {
            products = getProducts(); //load from API component
            this.setState({ products });
        }
    }

    render() {
        return (
         
                <Router>
                    {/* Navigation */}
                    <Navi
                        productsInCart={this.state.products.reduce((a, c) => (a + c.quantity), 0)} //count the quantity of products added to the cart
                    />
                       <div className="container-fluid">
                    {/* Gallery slider */}
                    <div className="gallery-container">
                        <GallerySlider />
                    </div>
                    {/* Page content - switch between pages based on URL*/}
                    <div className="col-md-12 pt-3">
                        <Switch>
                            <Route exact path='/shopping-cart'>
                                <ShoppingCart
                                    products={this.state.products.filter( //populate the shopping cart with only the items which have been added
                                        (p) => p.quantity > 0
                                    )}
                                    increaseQuantity={this.increaseQuantity}
                                    decreaseQuantity={this.decreaseQuantity}
                                />
                            </Route>
                            <Route exact path='/'>
                                <StorePage
                                    products={this.state.products}
                                    increaseQuantity={this.increaseQuantity}
                                />
                            </Route>
                            <Route exact path='/about' component={About} />
                            <Route exact path='/contact' component={Form} />
                            <Route exact path='/news' component={News} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                    </div>
                    {/* Footer */}
                    <Footer />
                </Router>
           
        )
    }
}

export default Main;