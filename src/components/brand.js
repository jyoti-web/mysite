import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import brand1 from './images/brand1.jpg';
import brand2 from './images/brand2.jpg';
import brand3 from './images/brand3.jpg';
import brand4 from './images/brand4.jpg';
import brand5 from './images/brand5.jpg';
import brand6 from './images/brand6.jpg';
import brand7 from './images/brand7.jpg';
class Brand extends Component{
    render(){
        return(
            <div className="brand">
                             <>

                <div className="row">
                    <Carousel className="col-sm-12">
                    <Carousel.Item><img src={brand1} alt="brand1" className="img-fluid"></img></Carousel.Item>
                    <Carousel.Item><img src={brand2} alt="brand1" className="img-fluid"></img></Carousel.Item>
                    <Carousel.Item><img src={brand3} alt="brand1" className="img-fluid"></img></Carousel.Item>
                    <Carousel.Item><img src={brand4} alt="brand1" className="img-fluid"></img></Carousel.Item>
                    <Carousel.Item><img src={brand5} alt="brand1" className="img-fluid"></img></Carousel.Item>
                    <Carousel.Item><img src={brand6} alt="brand1" className="img-fluid"></img></Carousel.Item>
                    <Carousel.Item><img src={brand7} alt="brand1" className="img-fluid"></img></Carousel.Item>

                    </Carousel>
                </div>
                </>

            </div>
        );
    }
}
export default Brand;