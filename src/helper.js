import { map } from './map';

export const encode = str => {
	const temp = str.trim().split('');
	for (const i in temp) {
		temp[i] = map[temp[i].toUpperCase()] || '?';
	}
	return temp.join(' ');
};

const decodeCharacter = char => {
	if (!char) return '';
	for (const i in map) {
		if (map[i] === char) {
			return i;
		}
	}
	return '?';
};

export const decode = str => {
	const temp = str.trim().split(' ');
	for (const i in temp) {
		temp[i] = decodeCharacter(temp[i]);
	}
	return temp.join('');
};
