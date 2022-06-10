import tw, { css, styled } from 'twin.macro';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

export const RowContainer = tw.div`
  h-40 space-y-0.5
`;

export const RowTitle = tw.h2`
  w-56 cursor-pointer text-sm font-semibold text-[#E5E5E5] transition duration-200 hover:text-white md:text-lg
`;

export const CarouselContainer = styled.div.attrs({ className: 'group' })`
	${tw`relative md:-ml-2`}
`;

const iconStyles = css`
	${tw`absolute top-0 bottom-0 z-40 m-auto h-12 w-12 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`}
`;

export const LeftArrow = styled(HiOutlineChevronLeft)`
	${({ $isMoved }) => !$isMoved && tw`hidden`}

	${iconStyles}
  ${tw`left-2`}
`;

export const Carousel = tw.div`
  flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-1 md:p-2
`;

export const RightArrow = styled(HiOutlineChevronRight)`
	${iconStyles}
	${tw`right-2`}
`;
