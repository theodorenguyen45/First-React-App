import React from 'react';


const ServiceCard = ({index, people}) => {
	return(
		<div className='bg-light-green dib pa3 ma2 grow shadow-5 ba b--orange pointer'>
			<div className='flex flex-row items-center justify-around'>
				<img src={`https://robohash.org/${index}`} alt='robot' style={{height:'100px', width:'100px', order: '2'}}/>
				<div className='tl'>
					<h4><label className='orange'>Name: </label>{people.name}</h4>
					<p><label className='orange'>Gender: </label>{people.gender}</p>
					<p><label className='orange'>Height: </label>{people.height}</p>
					<p><label className='orange'>Hair Color: </label>{people.hair_color}</p>
				</div>
			</div>
		</div>
	);
}

export default ServiceCard;