import React, { useState } from 'react';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import PauseRoundedIcon from '@material-ui/icons/PauseRounded';
import './Multimedia.css';

export const Multimedia = props => {
	const [playing, setPlaying] = useState(false);

	const toggleSound = () => {
		setPlaying(!playing);
	};

	return (
		<div className='multimedia'>
			<span onClick={toggleSound}>
				{playing ? (
					<PauseRoundedIcon fontSize='large' className='icon_button' />
				) : (
					<PlayArrowRoundedIcon fontSize='large' className='icon_button' />
				)}
			</span>
			<EmojiObjectsIcon fontSize='large' className='bulb' />
		</div>
	);
};
