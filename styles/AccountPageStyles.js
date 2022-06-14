import tw, { styled } from 'twin.macro';

export const AccountPageHeader = tw.header`
  bg-[#141414]
`;

export const NetflixLogo = styled.img.attrs({
	src: 'https://rb.gy/ulxxee',
	alt: 'logo',
	width: 120,
	height: 120
})`
	${tw`cursor-pointer object-contain`}
`;

export const AccountIcon = styled.img.attrs({
	src: 'https://rb.gy/g1pwyx',
	alt: 'account'
})`
	${tw`cursor-pointer rounded`}
`;

export const MainContainer = tw.main`
  pt-24 mx-auto max-w-6xl px-5 pb-12 transition-all md:px-10
`;

export const AccountDetailsContainer = tw.div`
  flex flex-col gap-x-4 md:flex-row md:items-center
`;

export const AccountPageTitle = tw.h1`
  text-3xl md:text-4xl
`;

export const AccountDetails = tw.div`
  -ml-0.5 flex items-center gap-x-1.5
`;

export const MembershipIcon = styled.img.attrs({
	src: 'https://rb.gy/4vfk4r',
	alt: 'membership'
})`
	${tw`h-7 w-7`}
`;

export const CreatedAt = tw.p`
  text-xs font-semibold text-[#555]
`;

export const Section = tw.section`
  mt-6 grid grid-cols-1 gap-x-4 border p-4 md:grid-cols-4 md:border-l-0 md:border-r-0 md:border-t md:border-b-0 md:px-0 md:pb-0
`;

export const SectionTitle = tw.h2`
  text-lg text-[gray]
`;

export const PlanName = tw.div`
 col-span-2 font-medium
`;

export const ChangePlan = tw.p`
  cursor-pointer text-blue-500 hover:underline md:text-right
`;

export const SignOut = tw.p`
  col-span-3 cursor-pointer text-blue-500 hover:underline
`;
