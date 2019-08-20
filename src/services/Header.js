import React from 'react';
import Nav from '../Components/Nav';
import '../Components/Header.css';
import TellMeMore from '../Components/TellMeMore';

const Header = ({onRouteChange}) => {
   return(
      <header className=''>
         <div>
            <Nav onRouteChange={onRouteChange} />
            <div className='tc mt5-m mt6-l ph3'>
              <h1 className='f1-l fw2 white ttc mb0 lh-title'>Welcome to my landing page!</h1>
              <h2 className='f1-l fw5 white mt3-l ttu mb4-l'>It's nice to see you</h2>
              <TellMeMore />
            </div>
         </div>
      </header>
   );
}

export default Header;