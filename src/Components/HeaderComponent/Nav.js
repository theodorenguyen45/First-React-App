import React from 'react';
import Logo from './Logo';
import './Header.css';

const Nav = () => {    
    return(
        <div className='flex justify-center'>
            <nav className='tc db dt-ns w-80-l border-box pa3 ph5-l ph3-ns header-nav'>
                <Logo />
                <div className='db dtc-l v-mid w-100 w-75-l tc tr-l menu-collapse'>
                    <a className='link dim light-gray f6 f5-l dib ttu mr3 mr3-l hover-orange' href='#Service' title='Service'>Service</a>
                    <a className='link dim light-gray f6 f5-l dib ttu mr3 mr3-l hover-orange' href='#About' title='About'>About</a>
                    <a className='link dim light-gray f6 f5-l dib ttu hover-orange' href='#Contact' title='Contact'>Contact</a>
                </div>
            </nav>
        </div>
    );
}

export default Nav;