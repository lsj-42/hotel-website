// Gallery.jsx
// Author: Link Jones
// Last modified: 15/09/2021
// Version: 1.0
// Component containing image gallery slider
// source: https://react-bootstrap.github.io/components/carousel/

import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselImage1 from './images/carousel_1.jpg'; //header images from Parc Hotel's current site
import CarouselImage2 from './images/carousel_2.jpg';
import CarouselImage3 from './images/carousel_3.jpg';

class GallerySlider extends Component {
    render() {
        return (
            <div>
                <Carousel nextLabel="" prevLabel="">
                    {/* first image */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src= {CarouselImage1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    {/* second image */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={CarouselImage2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    {/* third image */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={CarouselImage3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default GallerySlider;