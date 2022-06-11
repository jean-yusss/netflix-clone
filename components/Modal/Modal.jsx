import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Toaster } from 'react-hot-toast';
import { collection, onSnapshot } from 'firebase/firestore';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { db } from '../../lib/firebase';
import useAuth from '../../hooks/useAuth';
import ModalController from '../ModalController/ModalController';
import { listState, modalState, movieState, mutedState } from '../../atoms/modalAtom';

import * as S from './ModalStyles';

const Modal = () => {
	const { user } = useAuth();

	const movie = useRecoilValue(movieState);
	const muted = useRecoilValue(mutedState);
	const setAddedToList = useSetRecoilState(listState);
	const [showModal, setShowModal] = useRecoilState(modalState);

	const [genres, setGenres] = useState([]);
	const [movies, setMovies] = useState([]);
	const [trailer, setTrailer] = useState('');

	const handleClose = () => {
		setShowModal(false);
	};

	useEffect(() => {
		if (!movie) return;

		const fetchMovie = async () => {
			const data = await fetch(
				`https://api.themoviedb.org/3/${movie?.media_type === 'tv' ? 'tv' : 'movie'}/${
					movie?.id
				}?api_key=${
					process.env.NEXT_PUBLIC_API_KEY
				}&language=en-US&append_to_response=videos`
			)
				.then(res => res.json())
				.catch(err => console.error(err.message));

			if (data?.videos) {
				const index = data.videos.results.findIndex(el => el.type === 'Trailer');

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
			return onSnapshot(collection(db, 'customers', user.uid, 'myList'), snapshot =>
				setMovies(snapshot.docs)
			);
	}, [db, movie?.id]);

	//  Check if the movie is already in the user's list.
	useEffect(() => {
		setAddedToList(movies.findIndex(result => result.data().id === movie?.id) !== -1);
	}, [movies]);

	return (
		<S.ModalContainer open={showModal} onClose={handleClose}>
			<>
				<Toaster position='bottom-center' />

				<S.CloseButton onClick={handleClose}>
					<S.XIcon />
				</S.CloseButton>

				<S.PlayerContainer>
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${trailer}`}
						width='100%'
						height='100%'
						style={{ position: 'absolute', top: '0', left: '0' }}
						playing
						muted={muted}
					/>

					<ModalController />
				</S.PlayerContainer>

				<S.VideoInfoContainer>
					<S.VideoInfo>
						<S.VideoTitle>{movie?.title || movie?.name}</S.VideoTitle>

						<S.MetaData>
							<S.Match>{movie?.vote_average * 10}% Match</S.Match>
							<S.ReleaseDate>
								{movie?.release_date || movie?.first_air_date}
							</S.ReleaseDate>

							<S.HD>HD</S.HD>
						</S.MetaData>

						<S.MiscellaneousData>
							<S.Overview>{movie?.overview}</S.Overview>

							<S.VideoTags>
								<>
									<S.VideoTag>Genres: </S.VideoTag>
									{genres?.map(genre => genre.name).join(', ')}
								</>

								<>
									<S.VideoTag>Original language: </S.VideoTag>
									{movie?.original_language}
								</>

								<>
									<S.VideoTag>Total votes: </S.VideoTag>
									{movie?.vote_count}
								</>
							</S.VideoTags>
						</S.MiscellaneousData>
					</S.VideoInfo>
				</S.VideoInfoContainer>
			</>
		</S.ModalContainer>
	);
};

export default Modal;
