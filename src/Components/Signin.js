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

export default ({ onRouteChange }) => {
  return (
    <div className='background-gradient absolute h-100 w-100 flex items-center'>
      <Particles className='particeles' params={particlesOptions} />
      <article className="flex br3 b--black-10 mv4 w-80 w-50-m mw6 shadow-5 center justify-center">
        <main className="pa4 black-80 z-2">
          <form className="measure flex flex-column items-center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0 tc">
              <legend className="f4 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" for="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
                onClick={onRouteChange} />
            </div>
            <div className="lh-copy mt3">
              <a href="#0" className="f6 link dim black db">Register</a>
            </div>
          </form>
        </main>
      </article>
    </div>
  )
}