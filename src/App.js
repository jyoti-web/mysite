import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './components/homepage';
import Navigation from "./components/navbar";
import Carousel from "./components/carousel";
// import MapContainer from './components/map';



class App extends Component {
  render() {
    return (
    <div className="App">

      <Header />
      <Navigation />
      <Carousel />
      <Homepage />
      <Footer />
      {/* <MapContainer /> */}
    
    </div>
    );
  }
}

export default App;