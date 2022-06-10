import tw from 'twin.macro';

export const NavigationContainer = tw.ul`
  hidden space-x-4 lg:flex
`;

export const NavigationItem = tw.li`
  cursor-pointer text-sm font-light text-[#E5E5E5] transition duration-[0.4s] hover:text-[#B3B3B3]
`;
