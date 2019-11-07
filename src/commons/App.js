import React from 'react'
import Header from 'services/Header'
import PeopleService from 'services/PeopleService'
import About from 'services/About'
import Contact from 'Components/Contact'
import Footer from 'Components/Footer'
import SmartBrain from 'Components/SmartBrain'
import Signin from 'Components/Signin'
import Register from 'Components/Register'

export default () => {
  const [route, setRoute] = React.useState('signin')

  const [user, setUser] = React.useState({
    id: '',
    email: '',
    name: '',
    entries: 0,
    join: ''
  })

  const loadUser = data => {
    setUser({
      id: data.id,
      email: data.email,
      name: data.name,
      entries: data.entries,
      join: data.join
    })
  }

  const updateEntry = count => {
    setUser({
      ...user,
      entries: count
    })
  }

  const onRouteChange = route => {
    setRoute(route)
  }

  if (route === 'home')
    return (
      <div>
        <Header onRouteChange={onRouteChange} />
        <PeopleService />
        <SmartBrain user={user} updateEntry={updateEntry} />
        <About />
        <Contact />
        <Footer />
      </div>
    )

  if (route === 'signin')
    return (
      <Signin
        onRouteChange={onRouteChange}
        loadUser={loadUser}
      />
    )

  return (
    <Register
      onRouteChange={onRouteChange}
      loadUser={loadUser}
    />
  )
}
