import React from 'react'
import Particles from 'react-particles-js'

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

export default ({ onRouteChange, loadUser }) => {
  const [userDetails, setUserDetails] = React.useState({
    email: '',
    password: '',
    name: ''
  })

  const [err, setErr] = React.useState('')

  const handleChange = event => {
    const { name, value } = event.target

    setUserDetails({ ...userDetails, [name]: value })
  }

  const validateEmail = email => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
  }

  const { name, email, password } = userDetails

  const onSubmit = e => {
    e.preventDefault()

    const validEmail = validateEmail(email)

    if (!validEmail) {
      return setErr('Please enter a valid email address')
    }

    fetch('https://guarded-spire-67673.herokuapp.com/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.toLowerCase(),
        name: name,
        password: password
      })
    })
      .then(res => res.json())
      .then(user => {
        if (user.id) {
          loadUser(user)
          onRouteChange('home')
        } else {
          setErr({ err: 'Incorrect form submission' })
        }
      })
      .catch(err => setErr(err))
  }

  return (
    <div className='background-gradient absolute h-100 w-100 flex items-center'>
      <Particles
        className='particeles'
        params={particlesOptions}
      />
      <article className='flex br3 b--black-10 mv4 w-80 w-50-m mw6 shadow-5 center justify-center'>
        <main className='pa4 black-80 z-2'>
          <form
            className='measure flex flex-column items-center'
            onSubmit={onSubmit}
          >
            <fieldset
              id='sign_up'
              className='ba b--transparent ph0 mh0 tc'
            >
              <legend className='f4 fw6 ph0 mh0'>
                Register
              </legend>
              {err && <p>{err}</p>}
              <div className='mt3'>
                <label className='db fw6 lh-copy f6'>Name</label>
                <input
                  onChange={handleChange}
                  className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                  type='text'
                  name='name'
                  id='name'
                />
              </div>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6'>
                  Email
                </label>
                <input
                  onChange={handleChange}
                  className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                  type='email'
                  name='email'
                  id='email-address'
                />
              </div>
              <div className='mv3'>
                <label className='db fw6 lh-copy f6'>
                  Password
                </label>
                <input
                  onChange={handleChange}
                  className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                  type='password'
                  name='password'
                  id='password'
                />
              </div>
            </fieldset>
            <div className=''>
              <button
                className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                type='submit'
              >
                Register
              </button>
            </div>
          </form>
        </main>
      </article>
    </div>
  )
}
