import 'twin.macro';

const Navigation = () => {
  return (
    <ul tw='hidden space-x-4 lg:flex'>
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
        {'New & Popular'}
      </li>
      <li tw='cursor-pointer text-sm font-light text-[#E5E5E5] transition duration-[0.4s] hover:text-[#B3B3B3]'>
        My List
      </li>
      <li tw='cursor-pointer text-sm font-light text-[#E5E5E5] transition duration-[0.4s] hover:text-[#B3B3B3]'>
        {'Audio & Subtitles'}
      </li>
    </ul>
  );
};

export default Navigation;
