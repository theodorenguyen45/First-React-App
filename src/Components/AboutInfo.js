import React from 'react';

const AboutInfo = ({ image, timeFrame, title, className }) => {
  return (
    <li
      className={`flex temporary-l temporary items-center-l tl mb4-l ${className.li}`}
    >
      <div className={className.imageDiv}>
        <img className='br-100 image' src={image} alt='Marketing' />
      </div>

      <div className={className.textDiv}>
        <h2 className='orange'>{timeFrame}</h2>
        <h3>{title}</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          mollitia pariatur tenetur laudantium incidunt molestias voluptates
          illo iste error repudiandae labore modi voluptatem quasi officia
          dolor, nobis cumque! Fugiat, quidem?
        </p>
      </div>
    </li>
  );
};

export default AboutInfo;
