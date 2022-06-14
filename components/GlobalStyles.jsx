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

  .image {
    ${tw`rounded-sm object-cover`}
  }

  .login-bg {
    ${tw`z-[-10] !hidden opacity-60 sm:!inline`}
  }
`;

const GlobalStyles = () => (
	<>
		<BaseStyles />
		<CustomStyles />
	</>
);

export default GlobalStyles;
