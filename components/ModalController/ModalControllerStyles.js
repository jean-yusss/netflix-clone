import tw, { css, styled } from 'twin.macro';

import {
	HiOutlineCheck,
	HiOutlinePlus,
	HiOutlineThumbUp,
	HiOutlineVolumeOff,
	HiOutlineVolumeUp
} from 'react-icons/hi';

import { FaPlay } from 'react-icons/fa';

export const ModalControllerContainer = tw.div`
  absolute bottom-10 flex w-full items-center justify-between px-10
`;

export const ButtonContainer = tw.div`
  flex space-x-2
`;

export const PlayButton = tw.button`
  flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#E6E6E6]
`;

const iconStyles = css`
	${tw`w-7 h-7`}
`;

export const PlayIcon = styled(FaPlay)`
	${iconStyles}
`;

export const ModalButton = tw.button`
  flex h-11 w-11 items-center justify-center rounded-full border-2 border-[gray] bg-[#2A2A2A] bg-opacity-60 transition hover:border-white hover:bg-white/10
`;

export const CheckIcon = styled(HiOutlineCheck)`
	${iconStyles}
`;

export const PlusIcon = styled(HiOutlinePlus)`
	${iconStyles}
`;

export const ThumbsUpIcon = styled(HiOutlineThumbUp)`
	${iconStyles}
`;

const volumeIcons = css`
	${tw`w-6 h-6`}
`;

export const MutedIcon = styled(HiOutlineVolumeOff)`
	${volumeIcons}
`;

export const VolumeUpIcon = styled(HiOutlineVolumeUp)`
	${volumeIcons}
`;
