import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { modalState, movieState } from '../../atoms/modalAtom';

import * as S from './BannerStyles';

const Banner = ({ netflixOriginals }) => {
	const [movie, setMovie] = useState(null);

	const setShowModal = useSetRecoilState(modalState);
	const setCurrentMovie = useSetRecoilState(movieState);

	useEffect(() => {
		setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]);
	}, [netflixOriginals]);

	return (
		<S.BannerContainer>
			<S.BackgroundImage>
				<Image
					src={`https://image.tmdb.org/t/p/original/${
						movie?.backdrop_path || movie?.poster_path
					}`}
					alt='banner'
					layout='fill'
					objectFit='cover'
				/>
			</S.BackgroundImage>

			<S.MovieTitle>{movie?.title || movie?.name || movie?.original_name}</S.MovieTitle>
			<S.MovieOverview>{movie?.overview}</S.MovieOverview>

			<S.ButtonContainer>
				<S.PlayButton>
					<S.PlayIcon /> Play
				</S.PlayButton>
				<S.MoreInfoButton
					onClick={() => {
						setCurrentMovie(movie);
						setShowModal(true);
					}}
				>
					<S.MoreInfoIcon /> More Info
				</S.MoreInfoButton>
			</S.ButtonContainer>
		</S.BannerContainer>
	);
};

export default Banner;
