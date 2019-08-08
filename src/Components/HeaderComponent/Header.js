import React from 'react';
import Nav from './Nav';
import './Header.css';
import Footer from './Footer';

const Header = () => {
   return(
      <header className=''>
         <div>
            <Nav />
            <Footer />
         </div>
      </header>
   );
}

export default Header;