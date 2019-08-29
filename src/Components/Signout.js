import React from 'react';

export default ({ onRouteChange }) => {
  return (
    <button
      className='link dim light-gray bg-transparent b--transparent f6 f5-l dib ttu mr3 mr3-l hover-orange'
      onClick={() => onRouteChange('signin')}
    >
      Sign out
    </button>
  );
};
