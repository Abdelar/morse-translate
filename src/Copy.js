import React, { useState } from 'react';
import FileCopyRoundedIcon from '@material-ui/icons/FileCopyRounded';
import Tooltip from '@material-ui/core/Tooltip';
import './Copy.css';

export const Copy = props => {
	const [tooltip, setTooltip] = useState('Copy');

	const onClick = () => {
		if (props.forwardedRef.current.innerHTML) {
			props.forwardedRef.current.select();
			document.execCommand('copy'); // copy to the clipboard
			setTooltip('Copied');
		}
	};

	const onMouseLeave = () => {
		setTooltip('Copy');
	};

	return (
		<span className='copy' onMouseLeave={onMouseLeave} onClick={onClick}>
			<Tooltip title={tooltip}>
				<FileCopyRoundedIcon className='copy_icon' />
			</Tooltip>
		</span>
	);
};
