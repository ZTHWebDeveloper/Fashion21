import React, { Component } from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../img/boyshirt.jpg'
import image2 from '../img/banner-04.jpg'
import image3 from '../img/banner-05.jpg'
import image4 from '../img/babyshirt.jpg'
 class ImageSlider extends Component {
    render() {
        return (
            <div>
                <AliceCarousel autoPlay autoPlayInterval="2000">
                    <img src={image1}  className="img-fluid"/>
                    <img src={image2} className="img-fluid"/>
                    <img src={image3} className="img-fluid"/>
                    <img src={image4} className="img-fluid"/>
                </AliceCarousel>
            </div>
        )
    }
}

export default ImageSlider
