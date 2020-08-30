import React, { useState, useEffect } from 'react';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import PauseRoundedIcon from '@material-ui/icons/PauseRounded';
import { playTone } from './helper';
import './Multimedia.css';

let tone;
let timer;
export const Multimedia = props => {
	const [playing, setPlaying] = useState(false);

	useEffect(() => {
		if (playing) {
			const code = [1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1];
			let i = 0;
			timer = setInterval(() => {
				console.log(code[i]);
				if (code[i] === 1) {
					if (i === 0) {
						tone = playTone();
					} else if (code[i - 1] === 0) {
						tone = playTone();
					}
				} else if (code[i] === 0) {
					tone && tone.stop();
				} else {
					clearInterval(timer);
					setPlaying(false);
				}
				i++;
			}, 300);
		} else {
			tone && tone.stop();
			clearInterval(timer);
		}
	}, [playing]);

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
