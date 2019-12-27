import React, { Component } from 'react';
import email from './images/mail_email-37-512.png';
import help from './images/support_man-512.png';
import logo from './images/logo.jpg';

class Header extends Component {
  render() {    
    return (
        <header>
            <div className=" row header1 text-center">
                <div className="col-sm-3 option">
                    <form>
                        <select>
                            <option>English</option>
                            <option>Hindi</option>
                        </select>
                        <select>
                            <option>USD $</option>
                            <option>EUR €</option>
                        </select>
                    </form>
                </div>
                <div className="col-sm-6 text-center">
                <h6>
                    Welcome to Reactjs Website
                </h6>
                </div>
                <div className="col-sm-3 icon text-center">
                <i className="fa fa-search" aria-hidden="true"></i>
                <i className="fa fa-user-o" aria-hidden="true"></i>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>
            </div>
            <div className="row header2">
                <div className="col-sm-3 email text-left">
                    <span><img alt='icon' src={email}/>MAIL US:<p>admin@gmail.com</p></span>
                </div>
                <div className="col-sm-6 logo text-center">
                    <img alt='icon' src={logo}/>
                </div>  
                <div className="col-sm-3 query ">
                    <span><img alt='help' src={help}/>CALL US:<p>+91 0123-456-789</p></span>
                </div>
                
            </div>
         </header>
    );
  }
}

export default Header;