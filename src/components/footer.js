import React, { Component } from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {Accordion, Card} from 'react-bootstrap';
import logo from './images/logo.jpg';
import Form  from 'react-bootstrap/Form';
import fast1 from './images/11.png';
import fast2 from './images/11 (1).png';
import fast3 from './images/11 (2).png';
import fast4 from './images/11 (3).png';
import card1 from './images/card1.png';
import card2 from './images/card2.png';
import card3 from './images/card3.png';
import card4 from './images/card4.png';
import card5 from './images/card5.png';
import card6 from './images/card6.png';
class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="footer">
                <div className="content">
                    <div className="row">
                        <div className="col-sm-3">
                            <img src={logo} alt="logo" className="logo-footer"></img>
                            <p className="footer-p">Sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                            <hr></hr>
                            <div className="newsletter text-left">
                            <h6>Newsletter</h6>
                            <p className="footer-p" style={{ color: 'grey' }}>Wants to get latest updates! sign up for free.</p>
                            <Form>
                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                <Col sm="10">
                                <Form.Control type="text" placeholder="Type your email here..." />
                                </Col>
                                <Col sm="2"><Button>GO</Button></Col>
                            </Form.Group>                   
                            </Form>
                            </div>
                        </div>
                        <div className="col-sm-9 footer-details text-center">
                          <Row>
                              <Col sm="3">
                              <img src={fast1} alt="fast1"></img>
                              <h6>FREE SHIPPING</h6>
                              <p>Orders Over $99</p>
                              </Col>
                              <Col sm="3">
                              <img src={fast2} alt="fast1"></img>
                              <h6>BIG SAVING</h6>
                              <p>Money Back Guarantee.</p></Col>
                              <Col sm="3">
                              <img src={fast3} alt="fast1"></img>
                              <h6>FGIFT VOUCHER</h6>
                              <p>Free Gift Vouchers</p></Col>
                              <Col sm="3">
                              <img src={fast4} alt="fast1"></img>
                              <h6>24X7 SUPPORT</h6>
                              <p>Free Online Support</p></Col>
                          </Row>
                          <hr></hr>
                          <Row className="footer-list text-left">
                              <Col sm="3">
                              <h6>PRODUCTS</h6>
                                <ul className="footer-p"><li>Prices drop</li>
                                <li>New products</li>
                                <li>Best sales</li>
                                <li>Contact us</li>
                                </ul>
                              </Col>
                              <Col sm="3">
                              <h6>OUR COMPANY</h6>
                              <ul className="footer-p"><li>About us</li>
                                <li>Secure payment</li>
                                <li>Sitemap</li>
                                <li>My account</li>
                                </ul></Col>

                              <Col sm="3">
                              <h6>YOUR ACCOUNT</h6>
                              <ul className="footer-p"><li>Personal info</li>
                                <li>Orders</li>
                                <li>Credit slips</li>
                                <li>Addresses</li>
                                </ul>
                              </Col>
                              <Col sm="3">
                              <h6>YOUR ACCOUNT</h6>
                              <ul className="footer-p"> <li> 
                                  <i className="fa fa-map-marker" aria-hidden="true"></i> Demo Shop</li>
                                <li> <i className="fa" style={{marginRight:"25px"}} aria-hidden="true"></i>United States</li>
                                <li><i className="fa fa-phone" aria-hidden="true"></i>+34 123-4567-890</li>
                                <li><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto: admin@gmail.com" >admin@gmail.com</a></li>
                                </ul>
                              </Col>
                          </Row>
                        </div>
                    </div>
                    </div>
                    <hr></hr>
                   
                    <div className="Mobile-footer">
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                            About US
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <img src={logo} alt="logo" className="logo-footer"></img>
                            <p className="footer-p">Sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt.</p></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                            Newsletter
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body><div className="newsletter text-left">
                            
                            <p className="footer-p" style={{ color: 'grey' }}>Wants to get latest updates! sign up for free.</p>
                            <Form>
                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                <Col sm="10">
                                <Form.Control type="text" placeholder="Type your email here..." />
                                </Col>
                                <Col sm="2"><Button>GO</Button></Col>
                            </Form.Group>                   
                            </Form>
                            </div></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                            Our Service
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                            <Card.Body><Row className="footer-details text-center">
                              <Col sm="3">
                              <img src={fast1} alt="fast1"></img>
                              <h6>FREE SHIPPING</h6>
                              <p>Orders Over $99</p>
                              </Col>
                              <Col sm="3">
                              <img src={fast2} alt="fast1"></img>
                              <h6>BIG SAVING</h6>
                              <p>Money Back Guarantee.</p></Col>
                              <Col sm="3">
                              <img src={fast3} alt="fast1"></img>
                              <h6>FGIFT VOUCHER</h6>
                              <p>Free Gift Vouchers</p></Col>
                              <Col sm="3">
                              <img src={fast4} alt="fast1"></img>
                              <h6>24X7 SUPPORT</h6>
                              <p>Free Online Support</p></Col>
                          </Row></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="3">
                            Products
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3">
                            <Card.Body><ul className="footer-p footer-list text-left"><li>Prices drop</li>
                                <li>New products</li>
                                <li>Best sales</li>
                                <li>Contact us</li>
                                </ul></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="4">
                            Our Company
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="4">
                            <Card.Body><ul className="footer-p footer-list text-left"><li>About us</li>
                                <li>Secure payment</li>
                                <li>Sitemap</li>
                                <li>My account</li>
                                </ul></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="5">
                            Your Account
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="5">
                            <Card.Body> <ul className="footer-p footer-list text-left"><li>Personal info</li>
                                <li>Orders</li>
                                <li>Credit slips</li>
                                <li>Addresses</li>
                                </ul></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="6">
                            Store Information
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="6">
                            <Card.Body> <ul className="footer-p footer-list text-left"> <li> 
                                  <i className="fa fa-map-marker" aria-hidden="true"></i> Demo Shop</li>
                                <li> <i className="fa" style={{marginRight:"25px"}} aria-hidden="true"></i>United States</li>
                                <li><i className="fa fa-phone" aria-hidden="true"></i>+34 123-4567-890</li>
                                <li><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto: admin@gmail.com" >admin@gmail.com</a></li>
                                </ul></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    </div>
                    <div className="copy">
                        <Row>
                            <Col sm="6" className="footer-p" style={{marginBottom:'15px'}}>
                            <a href="#copy" >© 2019 - Ecommerce Software By PrestaShop™</a>
                            </Col>
                            <Col sm="6">
                            <div className="payment-card text-right">
                            <Row>
                                <Col sm="12">
                                <img src={card1} alt="card" className="cardpay"></img>
                                <img src={card2} alt="card" className="cardpay"></img>
                                <img src={card3} alt="card" className="cardpay"></img>
                                <img src={card4} alt="card" className="cardpay"></img>
                                <img src={card5} alt="card" className="cardpay"></img>
                                <img src={card6} alt="card" className="cardpay"></img>

                                </Col>
                            </Row>
                            </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                
            </footer>
        );
    }
}

export default Footer;