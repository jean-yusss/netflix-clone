import tw, { css, styled } from 'twin.macro';
import { FaPlay } from 'react-icons/fa';
import { IoIosInformationCircleOutline } from 'react-icons/io';

export const BannerContainer = tw.div`
  flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12
`;

export const BackgroundImage = tw.div`
  absolute top-0 left-0 h-[95vh] w-screen z-[-10]
`;

export const MovieTitle = tw.h1`
  text-2xl font-bold md:text-4xl lg:text-5xl
`;

export const MovieOverview = tw.p`
  max-w-xs text-xs md:max-w-sm lg:max-w-md lg:text-base
`;

export const ButtonContainer = tw.div`
  flex space-x-3
`;

const buttonStyles = css`
	${tw`flex items-center gap-x-2 rounded px-4 py-1.5 text-sm font-semibold transition hover:opacity-75 md:px-5 lg:px-6 lg:text-lg`}
`;

export const PlayButton = styled.button`
	${buttonStyles}
	${tw`bg-white text-black`}
`;

export const PlayIcon = tw(FaPlay)`
  h-4 w-4 text-black md:h-5 md:w-5 lg:h-6 lg:w-6
`;

export const MoreInfoButton = styled.button`
	${buttonStyles}
	${tw`bg-[gray] bg-opacity-70`}
`;

export const MoreInfoIcon = tw(IoIosInformationCircleOutline)`
  h-5 w-5 md:h-7 md:w-7 lg:h-8 lg:w-8
`;
