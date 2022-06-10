import Image from 'next/image';
import { useSetRecoilState } from 'recoil';

import { ThumbnailContainer } from './ThumbnailStyles';

import { modalState, movieState } from '../../atoms/modalAtom';

const Thumbnail = ({ movie }) => {
	const setShowModal = useSetRecoilState(modalState);
	const setCurrentMovie = useSetRecoilState(movieState);

	return (
		<ThumbnailContainer
			onClick={() => {
				setCurrentMovie(movie);
				setShowModal(true);
			}}
		>
			<Image
				src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
				alt='thumbnail'
				className='image'
				layout='fill'
			/>
		</ThumbnailContainer>
	);
};

export default Thumbnail;
