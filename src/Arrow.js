import React from 'react';

const Arrow = ({distance}) => {
	return (
		<span className='flex'>
			<div className='bg-red w1 h1 br-100 ma3'></div>
			<div className='bg-red w1 h1 br-100 ma3'></div>
			<div className='bg-red w1 h1 br-100 ma3'></div>
			<p className='white f2 ma1'> {distance + 'km'} </p>
			<div className='bg-red w1 h1 br-100 ma3'></div>
			<div className='bg-red w1 h1 br-100 ma3'></div>
			<div className='bg-red w1 h1 br-100 ma3'></div>
		</span>
	);
}

export default Arrow;