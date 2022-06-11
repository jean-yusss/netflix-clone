import { atom } from 'recoil';

export const modalState = atom({
	key: 'modalState',
	default: false
});

export const movieState = atom({
	key: 'movieState',
	default: null
});

export const listState = atom({
	key: 'listState',
	default: false
});

export const mutedState = atom({
	key: 'mutedState',
	default: false
});
