import React from 'react';
import Logo from './Logo';
import '../services/Header.css';
import NavMenu from './NavMenu';

const Nav = () => {    
    return(
        <div className='flex justify-center'>
            <nav className='tc db dt-ns w-80-l border-box pa3 ph5-l ph3-ns header-nav'>
                <Logo />
                <NavMenu />
            </nav>
        </div>
    );
}

export default Nav;