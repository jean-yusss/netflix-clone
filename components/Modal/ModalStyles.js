import tw, { styled } from 'twin.macro';
import MuiModal from '@mui/material/Modal';
import { HiOutlineX } from 'react-icons/hi';

export const ModalContainer = styled(MuiModal)`
	${tw`fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-4xl overflow-hidden overflow-y-scroll scrollbar-hide rounded-md`}
`;

export const CloseButton = tw.button`
  flex items-center justify-center rounded-full transition absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818]
`;

export const XIcon = tw(HiOutlineX)`
  w-6 h-6
`;

export const PlayerContainer = tw.div`
  relative pt-[56.25%]
`;

export const VideoInfoContainer = tw.div`
  flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8
`;

export const VideoInfo = tw.div`
  space-y-6
`;

export const VideoTitle = tw.h2`
  text-2xl md:text-3xl
`;

export const MetaData = tw.div`
  flex items-center space-x-2
`;

export const Match = tw.p`
  font-semibold text-[#46D369]
`;

export const ReleaseDate = tw.p`
  font-light
`;

export const HD = tw.div`
  flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs
`;

export const Overview = tw.p`
  w-5/6
`;

export const MiscellaneousData = tw.div`
  flex flex-col gap-x-10 gap-y-4 font-light md:flex-row
`;

export const VideoTags = tw.div`
  flex flex-col space-y-3 text-sm
`;

export const Div = tw.div``;

export const VideoTag = tw.span`
  text-[gray]
`;
