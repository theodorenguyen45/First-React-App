import React from 'react';

const ServiceCard = ({height, name, gender, haircolor}) => {
	return(
		<div className='bg-light-green dib pa3 ma2 grow shadow-5 ba b--orange pointer'>
			<div className='flex flex-row items-center justify-around'>
				<img src={`https://robohash.org/${height}`} alt='robot' style={{height:'100px', width:'100px', order: '2'}}/>
				<div className='tl'>
					<h4><label className='orange'>Name: </label>{name}</h4>
					<p><label className='orange'>Gender: </label>{gender}</p>
					<p><label className='orange'>Height: </label>{height}</p>
					<p><label className='orange'>Hair Color: </label>{haircolor}</p>
				</div>
			</div>
		</div>
	);
}

export default ServiceCard;