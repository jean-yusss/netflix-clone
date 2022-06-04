import tw, { GlobalStyles as BaseStyles } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

const CustomStyles = createGlobalStyle`
  body {
    ${tw`bg-[#141414] text-white`}
  }

  header {
    ${tw`fixed top-0 z-50 flex w-full items-center justify-between p-4 transition-all lg:px-10 lg:py-6`}
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;