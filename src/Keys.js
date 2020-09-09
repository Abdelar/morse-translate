import React from 'react';
import './Keys.css';

export const Keys = props => {
	return (
		<div className='keys'>
			<div className='collection'>
				<div onClick={() => props.clicked('•')}>
					<span>•</span>
				</div>
				<div onClick={() => props.clicked('−')}>
					<span>−</span>
				</div>
				<div onClick={() => props.clicked('/')}>
					<span>/</span>
				</div>
				<div onClick={() => props.clicked(' ')}>
					<span>␣</span>
				</div>
			</div>
		</div>
	);
};
