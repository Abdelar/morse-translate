import React, { useState, useEffect } from 'react';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import PauseRoundedIcon from '@material-ui/icons/PauseRounded';
import { playTone, toBinary } from './helper';
import './Multimedia.css';

let tone;
let timer;
export const Multimedia = props => {
	const [playing, setPlaying] = useState(false);

	useEffect(() => {
		if (timer) {
			tone && tone.stop();
			clearInterval(timer);
			tone = null;
			timer = null;
			setPlaying(false);
			return;
		}
		if (playing) {
			const code = toBinary(props.encoded);
			let i = 0;
			timer = setInterval(() => {
				if (code[i] === 1) {
					if (i === 0 || code[i - 1] === 0) {
						tone = playTone();
					}
				} else if (code[i] === 0) {
					tone && tone.stop();
				} else {
					clearInterval(timer);
					setPlaying(false);
				}
				i++;
			}, 200);
		} else {
			tone && tone.stop();
			clearInterval(timer);
		}
	}, [playing, props.encoded]);

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
