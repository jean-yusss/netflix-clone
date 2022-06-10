import tw from 'twin.macro';
import { HiSearch, HiBell } from 'react-icons/hi';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header css={isScrolled && tw`bg-[#141414]`}>
      <div tw='flex items-center space-x-2 md:space-x-10'>
        <img
          src='https://rb.gy/ulxxee'
          alt='logo'
          width={95}
          height={95}
          tw='cursor-pointer object-contain'
        />

        <DropdownMenu />

        <Navigation />
      </div>

      <div tw='flex items-center space-x-4 text-sm font-light'>
        <HiSearch tw='h-6 w-6' />
        <p tw='hidden lg:inline'>Kids</p>
        <p tw='hidden lg:inline'>DVD</p>
        <HiBell tw='h-6 w-6' />
        <Link href='/account'>
          <img
            src='https://rb.gy/g1pwyx'
            alt='account'
            tw='cursor-pointer rounded h-7 w-7'
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
