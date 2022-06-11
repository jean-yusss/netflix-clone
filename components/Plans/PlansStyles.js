import tw, { styled } from 'twin.macro';

export const Header = tw.header`
  border-b border-white/10 bg-[#141414]
`;

export const NetflixLogo = styled.img.attrs({
	src: 'https://rb.gy/ulxxee',
	alt: 'logo',
	width: 150,
	height: 90
})`
	${tw`cursor-pointer object-contain`}
`;

export const SignOutButton = tw.button`
  text-lg font-medium hover:underline
`;

export const PlansContainer = tw.main`
  pt-28 max-w-5xl px-5 pb-12 transition-all mx-auto md:px-10
`;

export const PlansBoxContainer = tw.div`
  mt-4 flex flex-col space-y-4
`;

export const PlansBox = tw.div`
  flex w-full items-center justify-center self-end md:w-3/5
`;

export const Plan = styled.div`
	${({ $selectedPlan, $plan }) =>
		$selectedPlan?.id === $plan.id ? tw`opacity-100` : tw`opacity-60`}

	${tw`relative mx-1.5 flex h-20 w-[calc(100%/3)] bg-[#E50914] cursor-pointer items-center justify-center rounded-sm font-semibold shadow after:absolute after:top-full after:left-1/2 after:block after:-translate-x-1/2 after:border-8 after:border-b-0 after:border-transparent after:border-t-[#E50914] after:content-[""] md:h-32 lg:mx-8`}
`;

export const SubscribeButton = styled.button`
	${({ $isStripeLoading }) => $isStripeLoading && tw`opacity-60`}

	${tw`mx-auto w-11/12 rounded bg-[#E50914] py-4 text-xl shadow hover:bg-[#F6121D] md:w-[420px]`}
`;
