import tw from 'twin.macro';
import { useRef, useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import Thumbnail from '../Thumbnail/Thumbnail';

const Row = ({ title, movies }) => {
  const rowRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = direction => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div tw='h-40 space-y-0.5'>
      <h2 tw='w-56 cursor-pointer text-sm font-semibold text-[#E5E5E5] transition duration-200 hover:text-white md:text-lg'>
        {title}
      </h2>

      <div className='group' tw='relative md:-ml-2'>
        <HiOutlineChevronLeft
          onClick={() => handleClick('left')}
          css={[
            tw`absolute top-0 bottom-0 left-2 z-40 m-auto h-12 w-12 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`,
            !isMoved && tw`hidden`
          ]}
        />

        <div
          ref={rowRef}
          tw='flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-1 md:p-2'
        >
          {movies.map(movie => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <HiOutlineChevronRight
          onClick={() => handleClick('right')}
          tw='absolute top-0 bottom-0 right-2 z-40 m-auto h-12 w-12 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100'
        />
      </div>
    </div>
  );
};

export default Row;
