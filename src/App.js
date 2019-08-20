import React, {Component} from 'react';
import Header from './services/Header';
import PeopleService from './services/PeopleService';
import About from './services/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import SmartBrain from './Components/SmartBrain'
import Signin from './Components/Signin';

export default class App extends Component{

  constructor(){
    super();
    this.state ={
      route: 'signin'
    }
  }

  onRouteChange = () => {
    this.setState({route: 'home'})
  }

  render(){
    return(
      this.state.route === 'signin' ? (
        <Signin onRouteChange={this.onRouteChange} />
      ) :
      <>
        <Header />
        <PeopleService />
        <SmartBrain />
        <About />
        <Contact />
        <Footer />
      </>
    );
  }
}