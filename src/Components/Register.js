import React from 'react';
import Particles from 'react-particles-js';

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
};

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      err: ''
    };
  }

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  validateEmail = email => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  onSubmitRegister = () => {
    const validEmail = this.validateEmail(this.state.email);

    if (!validEmail) {
      return this.setState({ err: 'Please enter a valid email address' });
    }

    fetch('https://guarded-spire-67673.herokuapp.com/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email.toLowerCase(),
        name: this.state.name,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        } else {
          this.setState({ err: 'Incorrect form submission' });
        }
      });
  };
  render() {
    return (
      <div className='background-gradient absolute h-100 w-100 flex items-center'>
        <Particles className='particeles' params={particlesOptions} />
        <article className='flex br3 b--black-10 mv4 w-80 w-50-m mw6 shadow-5 center justify-center'>
          <main className='pa4 black-80 z-2'>
            <form className='measure flex flex-column items-center'>
              <fieldset id='sign_up' className='ba b--transparent ph0 mh0 tc'>
                <legend className='f4 fw6 ph0 mh0'>Register</legend>
                {this.state.err && <p>{this.state.err}</p>}
                <div className='mt3'>
                  <label className='db fw6 lh-copy f6'>Name</label>
                  <input
                    onChange={this.onNameChange}
                    className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                    type='text'
                    name='name'
                    id='name'
                  />
                </div>
                <div className='mt3'>
                  <label className='db fw6 lh-copy f6'>Email</label>
                  <input
                    onChange={this.onEmailChange}
                    className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                    type='email'
                    name='email-address'
                    id='email-address'
                  />
                </div>
                <div className='mv3'>
                  <label className='db fw6 lh-copy f6'>Password</label>
                  <input
                    onChange={this.onPasswordChange}
                    className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                    type='password'
                    name='password'
                    id='password'
                  />
                </div>
              </fieldset>
              <div className=''>
                <input
                  className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                  type='button'
                  value='Register'
                  onClick={this.onSubmitRegister}
                />
              </div>
            </form>
          </main>
        </article>
      </div>
    );
  }
}

export default Register;
