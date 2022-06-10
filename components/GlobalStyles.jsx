import tw, { GlobalStyles as BaseStyles } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

const CustomStyles = createGlobalStyle`
  body {
    ${tw`bg-[#141414] text-white`}
  }

  header {
    ${tw`fixed top-0 z-50 flex w-full items-center justify-between px-8 py-2 transition-all lg:px-12 lg:py-5`}
  }

  .loader {
    ${tw`m-auto h-7 w-7 animate-spin text-gray-200 fill-[#E50914]`}
  }

  .menu {
    ${tw`md:hidden`}
  }

  .menu .MuiPaper-root {
    ${tw`!absolute !left-0 !rounded-none !border !border-[gray] !bg-black !text-white`}
  }

  .menu .MuiList-root {
    ${tw`!p-0`}
  }

  .menu .MuiMenuItem-root {
    ${tw`!block !w-72 !py-3.5 !text-center !text-sm !font-light !text-[#b3b3b3] !transition !duration-200 first:cursor-default first:!font-normal first:!text-white hover:!bg-[#11100F]`}
  }
`;

const GlobalStyles = () => (
	<>
		<BaseStyles />
		<CustomStyles />
	</>
);

export default GlobalStyles;
