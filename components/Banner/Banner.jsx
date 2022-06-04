import 'twin.macro';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';
import { IoIosInformationCircleOutline } from 'react-icons/io';

const Banner = ({ netflixOriginals }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, []);

  return (
    <div tw='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
      <div tw='absolute top-0 left-0 h-[95vh] w-screen z-[-10]'>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie?.backdrop_path || movie?.poster_path
          }`}
          alt='banner'
          layout='fill'
          objectFit='cover'
        />
      </div>

      <h1 tw='text-2xl font-bold md:text-4xl lg:text-5xl'>
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p tw='max-w-xs text-xs md:text-sm md:max-w-lg lg:text-base'>
        {movie?.overview}
      </p>

      <div tw='flex space-x-3'>
        <button tw='flex items-center gap-x-2 rounded px-4 py-1.5 text-sm font-semibold transition hover:opacity-75 md:px-6 md:text-lg bg-white text-black'>
          <FaPlay tw='h-4 w-4 text-black md:h-6 md:w-6' /> Play
        </button>
        <button tw='flex items-center gap-x-2 rounded px-4 py-1.5 text-sm font-semibold transition hover:opacity-75 md:px-6 md:text-lg bg-[gray] bg-opacity-70'>
          <IoIosInformationCircleOutline tw='h-5 w-5 md:h-8 md:w-8' />
          More Info
        </button>
      </div>
    </div>
  );
};

export default Banner;
