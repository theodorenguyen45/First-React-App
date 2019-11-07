import React from 'react'

export default ({ imageUrl, boxes }) => (
  <div className='flex justify-center mb4 relative'>
    <img
      id='inputimage'
      src={imageUrl}
      width='300px'
      height='auto'
      alt=''
    />

    {boxes.map(box => (
      <Face key={box.topRow} box={box} />
    ))}
  </div>
)

const Face = ({ box }) => {
  return (
    <div
      className='bounding-box'
      style={{
        top: box.topRow,
        right: box.rightCol,
        bottom: box.bottomRow,
        left: box.leftCol
      }}
    ></div>
  )
}
