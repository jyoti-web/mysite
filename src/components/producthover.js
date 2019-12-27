import React, { Component } from 'react';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import {Button} from 'react-bootstrap';

class Imghover extends Component{
    render(){
        return(
            <div id="cf" className="text-center container">
                <div className="bottom">
                <div className="content">

                     <img src={img1} alt="top" />
                     <h6>Lorem ipsum dolor sit...</h6>
                     <Button className="button">ADD TO CART</Button>
                </div>
                </div>
                <div className="top">
                    <div className="content">
                    <img src={img2} alt="bottom" />
                    <h6>Lorem ipsum dolor sit...</h6>
                    <div className="discount text-center">
                        <span className="regular-price">$74.90</span>
                        <span className="off">-35%</span>
                        <span className="price">$58.68</span>                                                
                    </div>
                    </div>
                    
                </div>
          </div>

        );
    }
}
export default Imghover;