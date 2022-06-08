import 'twin.macro';
import MuiModal from '@mui/material/Modal';
import { useRecoilState } from 'recoil';
import { HiOutlineX } from 'react-icons/hi';
import { useEffect, useState } from 'react';

import { modalState, movieState } from '../../atoms/modalAtom';
import ReactPlayer from 'react-player';

const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState('');
  const [genres, setGenres] = useState([]);
  const [muted, setMuted] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (!movie) return;

    const fetchMovie = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      )
        .then(res => res.json())
        .catch(err => console.error(err.message));

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          el => el.type === 'Trailer'
        );

        setTrailer(data.videos?.results[index]?.key);
      }

      if (data?.genres) {
        setGenres(data.genres);
      }
    };

    fetchMovie();
  }, [movie]);

  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <>
        <button
          onClick={handleClose}
          tw='flex items-center justify-center rounded-full transition absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818]'
        >
          <HiOutlineX tw='h-6 w-6' />
        </button>

        <div>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width='100%'
            height='100%'
            style={{ position: 'absolute', top: '0', left: '0' }}
            playing
            muted={muted}
          />
        </div>
      </>
    </MuiModal>
  );
};

export default Modal;
