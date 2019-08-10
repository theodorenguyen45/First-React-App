import React from 'react';
import marketing from '../assets/marketing.jpg';
import dev from '../assets/dev.jpg';
import coding from '../assets/coding.jpg';
import './About.css';
import AboutInfo from '../Components/AboutInfo';


const About = () => {
  const styleLeft = {
    li: 'tr-l',
    imageDiv: 'tc order-2-l',
    textDiv: ''
  }

  const styleRight = {
    li: '',
    imageDiv: 'tc grid-column-start-2',
    textDiv: 'order-3-l',
  }

	return(
		<div className='flex flex-wrap items-center justify-around bg-washed-green'>
			<div id='About' className='tc mv5 w-80-l flex-column justify-around items-center'>
				<h1 className='ttu'>About</h1>
				<h3 className='i fw1'>Loren ipsum dorlor sit amet consectetur</h3>
				<ul className='flex flex-column list pa0 ma3'>
            <AboutInfo image={marketing} timeFrame='2013 - 2015' title='English - Marketing' className={styleLeft}/>
            <AboutInfo image={dev} timeFrame='2015 - 2018' title='BIT' className={styleRight}/>
            <AboutInfo image={coding} timeFrame='2018 - Present' title='Graduate Developer' className={styleLeft}/>
				</ul>
			</div>
		</div>
	);
}

export default About; 