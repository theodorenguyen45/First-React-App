import React from 'react';

export default ({ name, entries }) => {
  return <h3 className='mt5'>{`${name}. your entry count is ${entries}`}</h3>;
};
