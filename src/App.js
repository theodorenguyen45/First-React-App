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
      route: 'signin',
      user: {
        id: '',
        email: '',
        name: '',
        entries: 0,
        join: '',
      }
    }
  }

  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        email: data.email,
        name: data.name,
        entries: data.entries,
        join: data.join
      }
    })
  }

  updateEntry = count => {
    this.setState(Object.assign(this.state.user, {
      entries: count
    }))
  }

  onRouteChange = route => {
    this.setState({ route })
  }

  render() {
    return (
      this.state.route === 'home' ?
        <>
          <Header onRouteChange={this.onRouteChange} />
          <PeopleService />
          <SmartBrain user={this.state.user} updateEntry={this.updateEntry} />
          <About />
          <Contact />
          <Footer />
        </> :
        this.state.route === 'signin' ?
          <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
          :
          <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />

    );
  }
}