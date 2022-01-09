// Navi.jsx
// Author: Link Jones
// Last modified: 15/09/2021
// Version: 1.0
// A navigation bar component with menu links

import React, { Component } from 'react'
import Logo from '../images/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

export default class Navi extends Component {
    render() {
        return (
            <Navbar id="nav" className="p-0 ml-auto" collapseOnSelect expand="lg" variant="dark" bg="dark">
                <Container fluid>
                    {/* Logo */}
                    <Navbar.Brand as="img" href="/" id="logo" src={Logo} className="order-lg-0 order-1"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    {/* Main navigation links */}
                    <Navbar.Collapse id="responsive-navbar-nav" className="order-0 mr-0">
                        <Nav className="me-auto text-light">
                            <Nav.Link className="text-light" href="/">Home</Nav.Link>
                            <Nav.Link className="text-light" href="/about">About</Nav.Link>
                            <Nav.Link className="text-light" href="/contact">Contact</Nav.Link>
                            <Nav.Link className="text-light" href="/news">News</Nav.Link>
                            </Nav>
                        {/* Shopping cart link is right-aligned but still part of the collapsible menu*/}
                        <Nav.Link className="text-light " href="/shopping-cart">Shopping Cart <span className="border badge rounded-circle bg-secondary text-light py-1">{this.props.productsInCart}</span></Nav.Link>           
                    </Navbar.Collapse>
                    {/* Check rates button */}
                    <Navbar.Brand as="button" className="btn btn-gold order-last" id="btn-check-rates">Check rates</Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}
