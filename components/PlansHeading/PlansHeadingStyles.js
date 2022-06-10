import tw from 'twin.macro';
import { HiOutlineCheck } from 'react-icons/hi';

export const PlansTitle = tw.h1`
  mb-3 text-3xl font-medium
`;

export const List = tw.ul``;

export const CheckIcon = tw(HiOutlineCheck)`
  h-7 w-7 text-[#E50914]
`;

export const ListItem = tw.li`
  flex items-center gap-x-2 text-lg
`;
