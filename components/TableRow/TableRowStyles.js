import tw, { styled } from 'twin.macro';
import { HiOutlineCheck } from 'react-icons/hi';

export const TableRowContainter = tw.tr`
  flex flex-wrap items-center font-medium
`;

export const TableRowTitle = tw.td`
  w-full p-2.5 text-center text-sm font-normal text-white md:w-2/5 md:p-3.5 md:text-left md:text-base
`;

export const TableData = styled.td`
	${({ $selectedPlan, $plan }) =>
		$selectedPlan.id === $plan.id ? tw`text-[#E50914]` : tw`text-[gray]`}

	${tw`w-[calc(100%/3)] p-2.5 text-center md:w-[calc(60%/3)] md:p-3.5`}
`;

export const CheckIcon = tw(HiOutlineCheck)`
  h-8 w-8 inline-block
`;
