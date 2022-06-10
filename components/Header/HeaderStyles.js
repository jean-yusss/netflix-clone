import tw, { styled } from 'twin.macro';
import { HiSearch, HiBell } from 'react-icons/hi';

export const HeaderContainer = styled.header`
	${({ $isScrolled }) => $isScrolled && tw`bg-[#141414]`}
`;

export const LeftContainer = tw.div`
  flex items-center space-x-2 md:space-x-10
`;

export const NetflixLogo = styled.img.attrs({
	src: 'https://rb.gy/ulxxee',
	alt: 'logo',
	width: 95,
	height: 95
})`
	${tw`cursor-pointer object-contain`}
`;

export const RightContainer = tw.div`
  flex items-center space-x-4 text-sm font-light
`;

export const SearchIcon = tw(HiSearch)`
  h-6 w-6
`;

export const BellIcon = tw(HiBell)`
  h-6 w-6
`;

export const HeaderText = tw.p`
  hidden lg:inline
`;

export const AccountIcon = styled.img.attrs({
	src: 'https://rb.gy/g1pwyx',
	alt: 'account'
})`
	${tw`cursor-pointer rounded h-7 w-7`}
`;
