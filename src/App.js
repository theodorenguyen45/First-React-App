import React, { Component } from 'react';
import Header from './services/Header';
import PeopleService from './services/PeopleService';
import About from './services/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import SmartBrain from './Components/SmartBrain'
import Signin from './Components/Signin';
import Register from './Components/Register';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      route: 'signin'
    }
  }

  onRouteChange = (route) => {
    this.setState({ route })
  }

  render() {
    return (
      this.state.route === 'home' ?
        <>
          <Header onRouteChange={this.onRouteChange} />
          <PeopleService />
          <SmartBrain />
          <About />
          <Contact />
          <Footer />
        </> :
        this.state.route === 'signin' ?
          <Signin onRouteChange={this.onRouteChange} />
          :
          <Register onRouteChange={this.onRouteChange} />

    );
  }
}