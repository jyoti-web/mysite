import React from 'react';
import slider1 from './images/kslider-1.jpg';
import slider2 from './images/kslider-2.jpg';
import slider3 from './images/kslider-3.jpg';

class Carousel extends React.Component{
    render(){
        return(
            <div id="slide03" className="carousel slide" data-ride="carousel" data-interval="500">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={slider1} alt="slider1"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" alt="slider1" src={slider2} />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" alt="slider1" src={slider3} />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#slide03" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#slide03" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}
export default Carousel;