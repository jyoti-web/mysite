import React, { Component } from 'react';
import overimg1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';
import img7 from './images/7.jpg';
import img8 from './images/8.jpg';
import img9 from './images/9.jpg';
import img10 from './images/10.jpg';


class Overlay extends Component{
    render(){
        return(
        <div className="col-md-8 col-md-offset-2">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Bootstrap Client Slider</h3>
          </div>
        <div className="panel-body">
            <div id="myCarousel" className="carousel slide" >       
              <div className="carousel-inner" role="listbox">
                <div className="item active">
                  <div className="col-md-12">
                    <div className="col-md-4 profile">
                      <a className="thumbnail" href="#">
                      <img alt="img1" src={overimg1} className="img-fluid"/>
                        <h5>John doe</h5>
                        <p>CEO</p>
                      </a>
                    </div>          
                    <div className="col-md-4 profile">
                      <a className="thumbnail" href="#">
                      <img alt="img1" src={img2} className="img-fluid"/>
                        <h5>Milan kumar panigrahi</h5>
                        <p>Software Developer</p>
                      </a> 
                    </div>
                    <div className="col-md-4 profile">
                      <a className="thumbnail" href="#">
                      <img alt="img1" src={img3} className="img-fluid"/>
                        <h5>Satyaban Rath</h5>
                        <p>Software Developer</p>
                      </a> 
                    </div>        
                  </div>
                  <div className="col-md-12">
                    <div className="col-md-4 profile">
                      <a className="thumbnail" href="#">
                      <img alt="img1" src={img4} className="img-fluid"/>
                        <h5>Pragyan Patra</h5>
                        <p>Manager</p>
                      </a>
                    </div>          
                    <div className="col-md-4 profile">
                      <a className="thumbnail" href="#">
                      <img alt="img1" src={img5} className="img-fluid"/>
                        <h5>Barsa amirta Guru</h5>
                        <p>Web Designer</p>
                      </a>
                    </div>
                    <div className="col-md-4 profile">
                      <a className="thumbnail" href="#">
                      <img alt="img1" src={img5} className="img-fluid"/>
                        <h5>Nisitha Mohanty</h5>
                        <p>Software Developer</p>
                      </a>
                    </div>        
                  </div>
                </div>
                <div className="item">
                  <div className="col-md-12">
                    <div className="col-md-4 profile">
                      <a className="thumbnail" href="#">
                      <img alt="img1" src={img6} className="img-fluid"/>
                        <h5>Gyana Ranjan Patra</h5>
                        <p>Project lead</p>
                      </a> 
                    </div>          
                    <div className="col-md-4 profile">
                      <a className="thumbnail" href="#">
                      <img alt="img1" src={img7} className="img-fluid"/>
                        <h5>Lipsa Patra</h5>
                        <p>Software Developer</p>
                      </a> 
                    </div>
                    <div className="col-md-4 profile">
                      <a className="thumbnail" href="#">
                      <img alt="img1" src={img8} className="img-fluid"/>
                        <h5>Divya Ramachandra</h5>
                        <p>Software Developer</p>
                      </a> 
                    </div>        
                  </div>
                  <div className="col-md-12">
                    <div className="col-md-4 profile">
                      <a className="thumbnail" href="#">
                      <img alt="img1" src={img9} className="img-fluid"/>
                        <h5>Neha padhee</h5>
                        <p>Software Developer</p>
                      </a> 
                    </div>          
                    <div className="col-md-4 profile">
                      <a className="thumbnail" href="#">
                      <img alt="img1" src={img10} className="img-fluid"/>

                        <h5>abc</h5>
                        <p>Sales manager</p>
                      </a>
                    </div>
                    <div className="col-md-4 profile">
                      <a className="thumbnail" href="#">
                      <img alt="img1" src={overimg1} className="img-fluid"/>
                        <h5>xyz</h5>
                        <p>HR manager</p>
                      </a>
                    </div>        
                  </div>
                </div>
              </div>
              <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
               </div>
           </div>
        </div> 
        </div>
        );
    }
}
export default Overlay;