import React from 'react'

export default ({
  index,
  people: { name, gender, height, hair_color }
}) => {
  const [isClicked, setIsClicked] = React.useState(false)

  const handleClick = e => {
    setIsClicked(!isClicked)
  }

  return (
    <li
      className='flex items-center bg-light-green dib pa3 ma2 grow shadow-5 ba b--orange pointer relative'
      onClick={handleClick}
    >
      <img
        src={`https://robohash.org/${index}`}
        alt='robot'
        style={{ height: '100px', width: '100px', order: '2' }}
      />
      <div className='tl'>
        <h4>
          <label className='orange'>Name: </label>
          {name}
        </h4>
        <p>
          <label className='orange'>Gender: </label>
          {gender}
        </p>
        <p>
          <label className='orange'>Height: </label>
          {height}
        </p>
        <p>
          <label className='orange'>Hair Color: </label>
          {hair_color}
        </p>
      </div>
    </li>
  )
}
