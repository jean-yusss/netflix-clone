import tw from 'twin.macro';
import { HiSearch, HiBell } from 'react-icons/hi';
import Link from 'next/link';
import { useState, useEffect } from 'react';

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
          width={100}
          height={100}
          tw='cursor-pointer object-contain'
        />

        <ul tw='hidden space-x-4 md:flex'>
          <li tw='cursor-pointer text-sm font-light text-[#E5E5E5] transition duration-[0.4s] hover:text-[#B3B3B3]'>
            Home
          </li>
          <li tw='cursor-pointer text-sm font-light text-[#E5E5E5] transition duration-[0.4s] hover:text-[#B3B3B3]'>
            TV Shows
          </li>
          <li tw='cursor-pointer text-sm font-light text-[#E5E5E5] transition duration-[0.4s] hover:text-[#B3B3B3]'>
            Movies
          </li>
          <li tw='cursor-pointer text-sm font-light text-[#E5E5E5] transition duration-[0.4s] hover:text-[#B3B3B3]'>
            New & Popular
          </li>
          <li tw='cursor-pointer text-sm font-light text-[#E5E5E5] transition duration-[0.4s] hover:text-[#B3B3B3]'>
            My List
          </li>
        </ul>
      </div>

      <div tw='flex items-center space-x-4 text-sm font-light'>
        <HiSearch tw='hidden h-6 w-6 sm:inline' />
        <p tw='hidden lg:inline'>Kids</p>
        <HiBell tw='h-6 w-6' />
        <Link href='/account'>
          <img
            src='https://rb.gy/g1pwyx'
            alt='account'
            tw='cursor-pointer rounded'
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
