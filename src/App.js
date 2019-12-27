import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './components/homepage';
import Navigation from "./components/navbar";
import Carousel from "./components/carousel";
// import MapContainer from './components/map';
// import Imghover from './components/producthover';
import Overlay from './components/overlay';


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
      {/* <Imghover /> */}
      <Overlay />
    </div>
    );
  }
}

export default App;