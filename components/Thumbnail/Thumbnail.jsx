import 'twin.macro';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../../atoms/modalAtom';

const Thumbnail = ({ movie }) => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  return (
    <div
      onClick={() => {
        setCurrentMovie(movie);
        setShowModal(true);
      }}
      tw='relative h-28 min-w-[200px] cursor-pointer transition duration-200 ease-out md:h-32 md:min-w-[230px] md:hover:scale-105'
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        alt='thumbnail'
        tw='rounded-sm object-cover'
        layout='fill'
      />
    </div>
  );
};

export default Thumbnail;
