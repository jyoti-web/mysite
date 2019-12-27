import React, {Component} from 'react';
import brand1 from './images/brand1.jpg';
import brand2 from './images/brand2.jpg';
import brand3 from './images/brand3.jpg';
import brand4 from './images/brand4.jpg';
import brand5 from './images/brand5.jpg';
import brand6 from './images/brand6.jpg';
class Brand extends Component{
    render(){
        return(
            <div className="brand text-center">
                             

                <div className="row">
                    <div className="col-sm-2">
                    <img src={brand1} alt="brand1" className="img-fluid"></img>
                    </div>
                    <div className="col-sm-2">
                    <img src={brand2} alt="brand1" className="img-fluid"></img>
                    </div>
                    <div className="col-sm-2">
                    <img src={brand3} alt="brand1" className="img-fluid"></img>
                    </div>
                    <div className="col-sm-2">
                    <img src={brand4} alt="brand1" className="img-fluid"></img>
                    </div>
                    <div className="col-sm-2">
                    <img src={brand5} alt="brand1" className="img-fluid"></img>
                    </div>
                    <div className="col-sm-2">
                    <img src={brand6} alt="brand1" className="img-fluid"></img>
                    </div>

                </div>
                

            </div>
        );
    }
}
export default Brand;