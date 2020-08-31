import React from 'react';
import FileCopyRoundedIcon from '@material-ui/icons/FileCopyRounded';
import './Copy.css';

export const Copy = props => {
	const onClick = () => {
		props.forwardedRef.current.select();
		document.execCommand('copy'); // copy to the clipboard
	};

	return (
		<span className='copy'>
			<FileCopyRoundedIcon onClick={onClick} className='copy_icon' />
		</span>
	);
};
