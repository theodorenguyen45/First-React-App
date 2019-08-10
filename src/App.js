import React, {Component} from 'react';
import Header from './services/Header';
import PeopleService from './services/PeopleService';
import About from './services/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

export default class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <PeopleService />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}