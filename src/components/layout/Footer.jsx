// Footer.jsx
// Author: Link Jones
// Last modified: 15/09/2021
// Version: 1.0
// A footer component with a subscribe form, contact information and site links

import React, { Component } from 'react'
import FbIcon from '../images/facebook2.png';
import InstaIcon from '../images/instagram2.png';

export default class Footer extends Component {
    render() {
        return (
            <footer className="container-fluid bg-dark text-light">
                
                {/* subscribe to newsletter */}
                <section className="row border-top text-center p-2">
                    <div className="container">
                        <p>Subscribe to newsletter</p>
                            <label HTMLfor="input-email" className="mr-2">Email:</label>
                            <input id="input-email" name="input-email" type="text" className="mx-2"></input>
                            <button className="btn btn-gold m-1 ">Subscribe</button>
                    </div>
                </section>

                {/* contact */}
                <section className="border-top p-2 text-left">
                    <div className="container">
                        <div className="row">
                            {/* contact information */}
                            <div className="col-10">
                                <p>1091 Plenty RD Bundoora , Melbourne VIC 3083 Australia</p>
                                <p>Tel: (03) 9002 5100</p>
                                <p>Email: reservations@parchotel.com.au</p>
                            </div>
                            {/* social buttons - not currently functional */}
                            <div className="col-2 d-flex flex-column justify-content-evenly align-items-end" >
                                    <img src={FbIcon} alt="facebook" className="" style={{ maxWidth: "50px", maxHeight: "50px"}} />
                                    <img src={InstaIcon} alt="instagram" className="" style={{ maxWidth: "50px", maxHeight: "50px"}} />  
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* sitemap - not currently functional */}
                <section className="border-top">
                <div className="container mt-3 pb-3"> 
                        <ul className="row p-0" style={{ listStyle: "none" }}>
                            {/* List items are in 3 columns aligned left, center and right, but collapse to one central column below small screen size */}
                            <div className="col-sm-4 d-flex flex-column align-items-center align-items-sm-start">
                                <li>Term of Service</li>
                                <li>Privacy Policy</li>
                                <li>Contact Us</li>
                            </div>
                            <div className="col-sm-4 d-flex flex-column align-items-center">
                                <li>Careers</li>
                                <li>Apartments</li>
                                <li>Facilities</li>
                            </div>
                            <div className="col-sm-4 d-flex flex-column align-items-center align-items-sm-end">
                                <li>Parc Vue Social</li>
                                <li>Business Travel</li>
                                <li>Sitemap</li>
                            </div>
                        </ul>
                    </div>
                </section>         
            </footer>
        )
    }
}
