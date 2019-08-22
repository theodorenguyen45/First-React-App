import React from 'react';
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


class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value })
  }
  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value })
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:4000/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(res => res.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        } else {
          alert('Wrong username or password');
        }
      })
  }

  render() {
    return (
      <div className='background-gradient absolute h-100 w-100 flex items-center'>
        <Particles className='particeles' params={particlesOptions} />
        <article className="flex br3 b--black-10 mv4 w-80 w-50-m mw6 shadow-5 center justify-center">
          <main className="pa4 black-80 z-2">
            <form className="measure flex flex-column items-center">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0 tc">
                <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6">Email</label>
                  <input
                    onChange={this.onEmailChange}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address" />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6">Password</label>
                  <input
                    onChange={this.onPasswordChange}
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password" />
                </div>
              </fieldset>
              <div className="">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type='button'
                  value="Sign in"
                  onClick={this.onSubmitSignIn} />
              </div>
              <div className="lh-copy mt3">
                <p className="f6 link dim black db" onClick={() => this.props.onRouteChange('register')}>Register</p>
              </div>
            </form>
          </main>
        </article>
      </div>
    )
  }
}

export default Signin;