import toast from 'react-hot-toast';
import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import { useRecoilState, useRecoilValue } from 'recoil';

import { db } from '../../lib/firebase';
import useAuth from '../../hooks/useAuth';
import { listState, movieState, mutedState } from '../../atoms/modalAtom';

import * as S from './ModalControllerStyles';

const ModalController = () => {
	const { user } = useAuth();

	const movie = useRecoilValue(movieState);
	const addedToList = useRecoilValue(listState);
	const [muted, setMuted] = useRecoilState(mutedState);

	const handleList = async () => {
		if (addedToList) {
			await deleteDoc(doc(db, 'customers', user?.uid, 'myList', movie?.id.toString()));

			toast(`${movie?.title || movie?.original_name} has been removed from My List`, {
				duration: 3000
			});
		} else {
			await setDoc(doc(db, 'customers', user?.uid, 'myList', movie?.id.toString()), {
				...movie
			});

			toast(`${movie?.title || movie?.original_name} has been added to My List`, {
				duration: 3000
			});
		}
	};

	return (
		<S.ModalControllerContainer>
			<S.ButtonContainer>
				<S.PlayButton>
					<S.PlayIcon /> Play
				</S.PlayButton>

				<S.ModalButton onClick={handleList}>
					{addedToList ? <S.CheckIcon /> : <S.PlusIcon />}
				</S.ModalButton>

				<S.ModalButton>
					<S.ThumbsUpIcon />
				</S.ModalButton>
			</S.ButtonContainer>

			<S.ModalButton onClick={() => setMuted(!muted)}>
				{muted ? <S.MutedIcon /> : <S.VolumeUpIcon />}
			</S.ModalButton>
		</S.ModalControllerContainer>
	);
};

export default ModalController;
