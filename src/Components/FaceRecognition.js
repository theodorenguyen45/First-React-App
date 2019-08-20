import React from 'react';

export default ({ imageUrl, box }) => {
  return (
    <div className='flex justify-center mb4 relative'>
      <img id='inputimage' src={imageUrl} width='300px' height='auto' alt='' />
      <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
    </div>
  )
}