import 'twin.macro';
import MuiModal from '@mui/material/Modal';
import { useRecoilState } from 'recoil';
import {
  HiOutlineCheck,
  HiOutlinePlus,
  HiOutlineThumbUp,
  HiOutlineVolumeOff,
  HiOutlineVolumeUp,
  HiOutlineX
} from 'react-icons/hi';

import { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

import { modalState, movieState } from '../../atoms/modalAtom';
import ReactPlayer from 'react-player';
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc
} from 'firebase/firestore';
import { db } from '../../lib/firebase';
import useAuth from '../../hooks/useAuth';

const Modal = () => {
  const { user } = useAuth();
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState('');
  const [genres, setGenres] = useState([]);
  const [muted, setMuted] = useState(true);
  const [addedToList, setAddedToList] = useState(false);
  const [movies, setMovies] = useState([]);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleList = async () => {
    if (addedToList) {
      await deleteDoc(
        doc(db, 'customers', user?.uid, 'myList', movie?.id.toString())
      );

      toast(
        `${movie?.title || movie?.original_name} has been removed from My List`,
        {
          duration: 3000
        }
      );
    } else {
      await setDoc(
        doc(db, 'customers', user?.uid, 'myList', movie?.id.toString()),
        {
          ...movie
        }
      );

      toast(
        `${movie?.title || movie?.original_name} has been added to My List`,
        {
          duration: 3000
        }
      );
    }
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

  // Find all of the movies in the user's list.
  useEffect(() => {
    if (user)
      return onSnapshot(
        collection(db, 'customers', user.uid, 'myList'),
        snapshot => setMovies(snapshot.docs)
      );
  }, [db, movie?.id]);

  //  Check if the movie is already in the user's list.
  useEffect(() => {
    setAddedToList(
      movies.findIndex(result => result.data().id === movie?.id) !== -1
    );
  }, [movies]);

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      tw='fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-4xl overflow-hidden overflow-y-scroll rounded-md'
    >
      <>
        <Toaster position='bottom-center' />
        <button
          onClick={handleClose}
          tw='flex items-center justify-center rounded-full transition absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818]'
        >
          <HiOutlineX tw='h-6 w-6' />
        </button>

        <div tw='relative pt-[56.25%]'>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width='100%'
            height='100%'
            style={{ position: 'absolute', top: '0', left: '0' }}
            playing
            muted={muted}
          />

          <div tw='absolute bottom-10 flex w-full items-center justify-between px-10'>
            <div tw='flex space-x-2'>
              <button tw='flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#E6E6E6]'>
                <FaPlay tw='h-7 w-7' />
                Play
              </button>

              <button
                onClick={handleList}
                tw='flex h-11 w-11 items-center justify-center rounded-full border-2 border-[gray] bg-[#2A2A2A] bg-opacity-60 transition hover:border-white hover:bg-white/10'
              >
                {addedToList ? (
                  <HiOutlineCheck tw='h-7 w-7' />
                ) : (
                  <HiOutlinePlus tw='h-7 w-7' />
                )}
              </button>

              <button tw='flex h-11 w-11 items-center justify-center rounded-full border-2 border-[gray] bg-[#2A2A2A] bg-opacity-60 transition hover:border-white hover:bg-white/10'>
                <HiOutlineThumbUp tw='h-7 w-7' />
              </button>
            </div>

            <button
              onClick={() => setMuted(!muted)}
              tw='flex h-11 w-11 items-center justify-center rounded-full border-2 border-[gray] bg-[#2A2A2A] bg-opacity-60 transition hover:border-white hover:bg-white/10'
            >
              {muted ? (
                <HiOutlineVolumeOff tw='h-6 w-6' />
              ) : (
                <HiOutlineVolumeUp tw='h-6 w-6' />
              )}
            </button>
          </div>
        </div>

        <div tw='flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8'>
          <div tw='space-y-6'>
            <h2 tw='text-2xl md:text-3xl'>{movie?.title || movie?.name}</h2>

            <div tw='flex items-center space-x-2'>
              <p tw='font-semibold text-[#46D369]'>
                {movie?.vote_average * 10}% Match
              </p>
              <p tw='font-light'>
                {movie?.release_date || movie?.first_air_date}
              </p>

              <div tw='flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs'>
                HD
              </div>
            </div>

            <div tw='flex flex-col gap-x-10 gap-y-4 font-light md:flex-row'>
              <p tw='w-5/6'>{movie?.overview}</p>
              <div tw='flex flex-col space-y-3 text-sm'>
                <div>
                  <span tw='text-[gray]'>Genres: </span>
                  {genres?.map(genre => genre.name).join(', ')}
                </div>

                <div>
                  <span tw='text-[gray]'>Original language: </span>
                  {movie?.original_language}
                </div>

                <div>
                  <span tw='text-[gray]'>Total votes: </span>
                  {movie?.vote_count}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  );
};

export default Modal;
