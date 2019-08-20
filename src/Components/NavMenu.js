import React from 'react';
import Signout from './Signout'

const NavMenu = ({onRouteChange}) => {
  return(
    <div className='db dtc-l v-mid w-100 w-75-l tc tr-l menu-collapse'>
        <a className='link dim light-gray f6 f5-l dib ttu mr3 mr3-l hover-orange' href='#Service' title='Service'>Service</a>
        <a className='link dim light-gray f6 f5-l dib ttu mr3 mr3-l hover-orange' href='#SmartBrain' title='Smart Brain'>Smart Brain</a>
        <a className='link dim light-gray f6 f5-l dib ttu mr3 mr3-l hover-orange' href='#About' title='About'>About</a>
        <a className='link dim light-gray f6 f5-l dib ttu hover-orange' href='#Contact' title='Contact'>Contact</a>
        <Signout onRouteChange={onRouteChange} />
    </div>
  )
}

export default NavMenu;