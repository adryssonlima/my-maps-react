import React, { Component } from 'react';
import Menu from './Menu';
import Map from './Map';
import Footer from './Footer';
import logo from '../img/logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Map />
        <Footer />
      </div>
    )
  }
}

export default App;
