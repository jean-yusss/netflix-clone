import 'twin.macro';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Thumbnail from '../Thumbnail/Thumbnail';

const Row = ({ title, movies }) => {
  return (
    <div tw='h-40 space-y-0.5'>
      <h2 tw='w-56 cursor-pointer text-sm font-semibold text-[#E5E5E5] transition duration-200 hover:text-white md:text-lg'>
        {title}
      </h2>

      <div className='group' tw='relative md:-ml-2'>
        <HiChevronLeft tw='absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100' />

        <div tw='flex items-center space-x-0.5 overflow-x-scroll md:space-x-1 md:p-2'>
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <HiChevronRight tw='absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100' />
      </div>
    </div>
  );
};

export default Row;
