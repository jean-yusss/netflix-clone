import tw, { styled } from 'twin.macro';

export const LoginPageContainer = tw.div`
  relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent
`;

export const NetflixLogo = styled.img.attrs({
	src: 'https://rb.gy/ulxxee',
	alt: 'logo',
	width: 165,
	height: 165
})`
	${tw`absolute left-4 top-4 cursor-pointer object-contain md:top-6 md:left-6 lg:left-8 xl:left-10`}
`;
