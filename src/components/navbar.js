import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Col, Row} from "react-bootstrap";

class Navigation extends React.Component {
  render() {
    return (
      <Navbar expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    
      <div className="dropdown">
        <button className="dropbtn nav-link nav-link-ltr ">Clothes</button>
        <div className="dropdown-content">
          <Row>
            <Col sm="6">
            <h6>MEN</h6>
            <ul>
              <li>Outlook</li>
              <li>T-Shirt</li>
              <li>Jackets</li>
              </ul></Col>
            <Col sm="6"><h6>WOMEN</h6>
            <ul>
              <li>Handbags</li>
              <li>Loungewear</li>
              <li>Sports Wear</li>
              </ul></Col>

          </Row>
          
        </div>
      </div>               
      <Nav.Link className="nav-link-ltr" href="#home">Outlook</Nav.Link>
      <div className="dropdown">
        <button className="dropbtn nav-link nav-link-ltr ">Accessories</button>
        <div className="dropdown-content">
        <Row>
            <Col sm="6">
            <h6>STATIONERY</h6>
            <ul>
              <li>Sunglasses</li>
              <li>Wallets & Belts</li>
              <li>Jackets</li>
              </ul></Col>
            <Col sm="6"><h6>HOME ACCESSORIES</h6>
            <ul>
              <li>Trendy Dresses</li>
              <li>Traditional Dresses</li>
              </ul></Col>

          </Row>
        </div>
      </div>  
      <Nav.Link className="nav-link-ltr" href="#link">Handbags</Nav.Link>
      <Nav.Link className="nav-link-ltr" href="#link">Sports Wear</Nav.Link>
      <Nav.Link className="nav-link-ltr" href="#link">Sunglasses</Nav.Link>
      <Nav.Link className="nav-link-ltr" href="#link">Art</Nav.Link>



    </Nav>
    
  </Navbar.Collapse>
</Navbar>
     
    )
  }
}

export default Navigation;