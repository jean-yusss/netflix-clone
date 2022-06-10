import { useRef, useState } from 'react';

import Thumbnail from '../Thumbnail/Thumbnail';

import * as S from './RowStyles';

const Row = ({ title, movies }) => {
	const rowRef = useRef(null);
	const [isMoved, setIsMoved] = useState(false);

	const handleClick = direction => {
		setIsMoved(true);

		if (rowRef.current) {
			const { scrollLeft, clientWidth } = rowRef.current;

			const scrollTo =
				direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;

			rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
		}
	};

	return (
		<S.RowContainer>
			<S.RowTitle>{title}</S.RowTitle>

			<S.CarouselContainer>
				<S.LeftArrow onClick={() => handleClick('left')} $isMoved={isMoved} />

				<S.Carousel ref={rowRef}>
					{movies.map(movie => (
						<Thumbnail key={movie.id} movie={movie} />
					))}
				</S.Carousel>

				<S.RightArrow onClick={() => handleClick('right')} />
			</S.CarouselContainer>
		</S.RowContainer>
	);
};

export default Row;
