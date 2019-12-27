import React, { Component } from 'react';
import {Card} from "react-bootstrap";
import latest1 from "./images/latest1.jpg";
import latest2 from "./images/latest2.jpg";
import latest3 from "./images/latest3.jpg";


class Latest extends Component {
    render() {    
      return (
          <div className="latest">
          <h2 className="h2-class">Latest news</h2><br></br>
            <div className=" desktop">
            <div className="row">
                <div className="col-sm-4">
                    <div className="news-img">
                        <div className="card-img-wrap"><img src={latest1} alt="news1" className="card-img-top"></img></div>
                        <Card style={{ width: '100%' }}>
                            <Card.Body >
                                <h6>Scelerisque vestibulum...</h6>
                                <Card.Text>
                                Lorem Ipsum is simply dummy text of...
                                </Card.Text>
                                <p> <i className="fa fa-calendar-minus-o" aria-hidden="true"></i> Sep 28 2019 <span className="stick"> | </span>  Admin:  Infinity</p>
                                
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="news-img">
                        <div className="card-img-wrap"><img src={latest2} alt="news1" className="card-img-top"></img></div>
                        <Card>
                        <Card.Body >
                                <h6>Scelerisque vestibulum...</h6>
                                <Card.Text>
                                Lorem Ipsum is simply dummy text of...
                                </Card.Text>
                                <p> <i className="fa fa-calendar-minus-o" aria-hidden="true"></i> Sep 28 2019 <span className="stick"> | </span>  Admin:  Infinity</p>
                                
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="news-img">
                        <div className="card-img-wrap"><img src={latest3} alt="news1" className="card-img-top"></img></div>
                        <Card>
                        <Card.Body >
                                <h6>Scelerisque vestibulum...</h6>
                                <Card.Text>
                                Lorem Ipsum is simply dummy text of...
                                </Card.Text>
                                <p> <i className="fa fa-calendar-minus-o" aria-hidden="true"></i> Sep 28 2019 <span className="stick"> | </span>  Admin:  Infinity</p>
                                
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>        
            </div>
             <div className="mobile-latest text-center" /*style={{ marginBottom:'100%' }} */> 
            <div className="row">
                <div className="col-sm-4">
                <Card >
                    <Card.Img variant="top" src={latest1} />
                    <Card.Body >
                        <h6>Scelerisque vestibulum...</h6>
                        <Card.Text>
                        Lorem Ipsum is simply dummy text of...
                        </Card.Text>
                        <p> <i className="fa fa-calendar-minus-o" aria-hidden="true"></i> Sep 28 2019 <span className="stick"> | </span>  Admin:  Infinity</p>
                                
                    </Card.Body>
                </Card>
                </div>
                <div className="col-sm-4">
                <Card >
                    <Card.Img variant="top" src={latest2} />
                    <Card.Body >
                        <h6>Scelerisque vestibulum...</h6>
                        <Card.Text>
                        Lorem Ipsum is simply dummy text of...
                        </Card.Text>
                        <p> <i className="fa fa-calendar-minus-o" aria-hidden="true"></i> Sep 28 2019 <span className="stick"> | </span>  Admin:  Infinity</p>
                                
                    </Card.Body>
                </Card>
                </div>
                <div className="col-sm-4">
                <Card >
                    <Card.Img variant="top" src={latest3} />
                    <Card.Body >
                        <h6>Scelerisque vestibulum...</h6>
                        <Card.Text>
                        Lorem Ipsum is simply dummy text of...
                        </Card.Text>
                        <p> <i className="fa fa-calendar-minus-o" aria-hidden="true"></i> Sep 28 2019 <span className="stick"> | </span>  Admin:  Infinity</p>
                                
                    </Card.Body>
                </Card>
                </div>
            </div>
            </div>
        </div>
      );
    }
}
export default Latest;

