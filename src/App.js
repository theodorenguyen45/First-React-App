import React, {Component} from 'react';
import Header from './Components/HeaderComponent/Header';
import Service from './Components/ServiceComponent/Service';
import About from './Components/AboutComponent/About';
import Contact from './Components/ContactComponent/Contact';
import Footer from './Components/FooterComponent/Footer';

export default class App extends Component{
  // constructor() {
  //   super();
  // }

  render(){
    return(
      <div>
        <Header />
        <Service />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}