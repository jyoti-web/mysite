import React, { Component } from 'react';
import CountdownTimer from './timer';
import Latest from './latest-news';
import {Carousel} from 'react-bootstrap';
import overimg1 from './images/kbanner-1.jpg';
import overimg2 from './images/kbanner-2.jpg';
import overimg3 from './images/kbanner-3.jpg';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';
import img7 from './images/7.jpg';
import img8 from './images/8.jpg';
import img9 from './images/9.jpg';
import img10 from './images/10.jpg';
import half1 from './images/half1.jpg';
import half2 from './images/half2.jpg';
import testimonal from './images/testimonial-1.jpg';
import Brand from './brand';
// import Link from 'react-dom';



class Homepage extends Component{
    render(){
        return(
                <div className="overlay1" id="over">
                    <div className="row">
                        <div className="col-sm-4 container">
                            <img alt="img1" src={overimg1} className="img-fluid"/>
                            <div className="overlay">
                            </div>
                        </div>
                        <div className="col-sm-4 container">
                            <img alt="img2" src={overimg2} className="img-fluid"/>
                            <div className="overlay">
                            </div>  
                        </div>
                        <div className="col-sm-4 container">
                            <img alt="img3" src={overimg3} className="img-fluid"/>
                            <div className="overlay">
                            </div>
                        </div>
                    </div>
                    <div className="product" id="product">
                        <h2 className="h2-class">Tranding Products</h2>
                        <ul className="productnav text-center">
                            <li className="pink">Featured</li>
                            <li className="white">Latest</li>
                            <li className="white">Best Sellers</li>
                        </ul>
                        <div className="item">
                            <div className="row">
                                <div className="col-sm-12">
                                    <img src={img1} alt="1" className="img-responsive" />
                                    <img src={img2} alt="2" className="img-responsive" />
                                    <img src={img3} alt="3" className="img-responsive" />
                                    <img src={img4} alt="4" className="img-responsive" />
                                    <img src={img5} alt="15" className="img-responsive" />
                                </div>
                            </div>
                        </div>
                        <div className="item1">
                            <div className="row">
                                <div className="col-sm-12">  
                                    <img src={img6} alt="1" className="img-fluid" />
                                    <img src={img7} alt="2" className="img-fluid" />
                                    <img src={img8} alt="3" className="img-fluid" />
                                    <img src={img9} alt="4" className="img-fluid" />
                                    <img src={img10} alt="15" className="img-fluid" /> 
                                </div>
                            </div>   
                        </div>
                    </div>
                    <div className="banner">
                            <div className="text2 text-center">
                                <h2>Beauty & Cosmetic</h2>
                                <p>Massage oils and creams containing<br></br> only  Natural Products</p>
                                <button>SHOP NOW</button>
                            </div>
                    </div>
                    <h2 className="h2-class margintb">SPECIAL PRODUCTS</h2>
                    <div className="item1">
                        <div className="row">
                            <div className="col-sm-12">  
                                <img src={img6} alt="1" className="img-fluid" />
                                <img src={img7} alt="2" className="img-fluid" />
                                <img src={img8} alt="3" className="img-fluid" />
                                <img src={img9} alt="4" className="img-fluid" />
                                <img src={img10} alt="15" className="img-fluid" /> 
                            </div>
                        </div>   
                    </div>
                    <div className="half-half margintb">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="colorgrey text-center">
                                <Carousel>
                                    <Carousel.Item>
                                        <img className="rounded-circle" src={testimonal} alt="First slide" />
                                        <h2> TAMMY JSON</h2>
                                        <p>Web Designer / Consultant</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="rounded-circle" src={testimonal} alt="Third slide"/>
                                        <h2> TAMMY JSON</h2>
                                        <p>Web Designer / Consultant</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className=" rounded-circle" src={testimonal} alt="Third slide"/>
                                        <h2> TAMMY JSON</h2>
                                        <p>Web Designer / Consultant</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    </Carousel.Item>
                                </Carousel>
                                </div>
                            </div>
                            <div className="col-sm-3 container add">  
                                <img src={half1} alt="1" className="img-fluid" />
                                <div className="overlay">
                                </div>
                            </div>
                            <div className="col-sm-3 container add">  
                                <img src={half2} alt="2" className="img-fluid" />
                                <div className="overlay">
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="deal">
                        <h2 className="h2-class">deal of the day</h2><br></br>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="border-deal">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <img src={img1} alt="deal1" className="img-fluid"></img>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="deal-des">
                                                <h6>Pellentesque augue</h6>
                                                <div className="discount">
                                                    <span className="regular-price">$64.90</span>
                                                    <span className="off">-25%</span>
                                                    <span className="price">$48.68</span>                                                
                                                </div>
                                               <CountdownTimer />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="border-deal">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <img src={img2} alt="deal1" className="img-fluid"></img>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="deal-des">
                                                <h6>Vivamus Elementum Semper</h6>
                                                <div className="discount">
                                                    <span className="regular-price">$94.90</span>
                                                    <span className="off">-45%</span>
                                                    <span className="price">$38.68</span>                                                
                                                </div>
                                               <CountdownTimer/> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="border-deal">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <img src={img3} alt="deal1" className="img-fluid"></img>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="deal-des">
                                                <h6>Lorem ipsum dolor sit...</h6>
                                                <div className="discount">
                                                    <span className="regular-price">$74.90</span>
                                                    <span className="off">-35%</span>
                                                    <span className="price">$58.68</span>                                                
                                                </div>
                                               <CountdownTimer/> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Latest />
                    <Brand />
                </div>     
        );
    }
}

export default Homepage;