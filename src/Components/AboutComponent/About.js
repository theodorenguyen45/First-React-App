import React from 'react';
import marketing from './marketing.jpg';
import dev from './dev.jpg';
import coding from './coding.jpg';
import './About.css';


const About = () => {
	return(
		<div className='flex flex-wrap items-center justify-around bg-washed-green'>
			<div id='About' className='tc mv5 w-80-l flex-column justify-around items-center'>
				<h1 className='ttu'>About</h1>
				<h3 className='i fw1'>Loren ipsum dorlor sit amet consectetur</h3>
				<ul className='flex flex-column list pa0 ma3'>
					<li className='flex temporary-l temporary items-center-l tr-l tl mb4-l'>
            <div className='tc order-2-l'>
              <img className='br-100 image' src={marketing} alt='Marketing' />
            </div>

            <div>
              <h2 className='orange'>2013-2015</h2>
              <h3>English - Marketing</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi mollitia pariatur tenetur laudantium incidunt molestias voluptates illo iste error repudiandae labore modi voluptatem quasi officia dolor, nobis cumque! Fugiat, quidem?</p>
            </div>
					</li>

          <li className='flex temporary-l temporary items-center-l tl mb4-l'>
            
            <div className='tc grid-column-start-2'>
              <img className='br-100 image' src={coding} alt='IT' />
            </div>
            <div className='order-3-l'>
              <h2 className='orange'>2015-2018</h2>
              <h3>BIT</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi mollitia pariatur tenetur laudantium incidunt molestias voluptates illo iste error repudiandae labore modi voluptatem quasi officia dolor, nobis cumque! Fugiat, quidem?</p>
            </div>

					</li>

          <li className='flex temporary-l temporary items-center-l tr-l tl mb4-l'>
            <div className='tc order-2-l'>
              <img className='br-100 image' src={dev} alt='Developer' />
            </div>

            <div>
              <h2 className='orange'>2018-Present</h2>
              <h3>Graduate Developer</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi mollitia pariatur tenetur laudantium incidunt molestias voluptates illo iste error repudiandae labore modi voluptatem quasi officia dolor, nobis cumque! Fugiat, quidem?</p>
            </div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default About; 