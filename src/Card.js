import React from 'react';

const getSource = (name) => {
    if (name === 'Shawn') {
        return require( './shawn.jpg' );
    } 
    else {
        return require( './user.png' );
    }
}

const Card = ({name, image, time}) => {

	return (
		<div className='tc ma2 shadow-5 bw5 bg-light-yellow br3 w5 pa2'>
			<h3>{name}</h3>
			<img src={getSource(name)} alt={'Photo of ' + name} height='200px' className='br-100'/>
			<h4>Time: &nbsp; {time}</h4>
		</div>
	);
}

export default Card;