import 'twin.macro';

import {
	HiOutlineCheck,
	HiOutlinePlus,
	HiOutlineThumbUp,
	HiOutlineVolumeOff,
	HiOutlineVolumeUp
} from 'react-icons/hi';

import { FaPlay } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import { useRecoilState, useRecoilValue } from 'recoil';
import { listState, movieState, mutedState } from '../../atoms/modalAtom';
import { db } from '../../lib/firebase';
import useAuth from '../../hooks/useAuth';

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
					{addedToList ? <HiOutlineCheck tw='h-7 w-7' /> : <HiOutlinePlus tw='h-7 w-7' />}
				</button>

				<button tw='flex h-11 w-11 items-center justify-center rounded-full border-2 border-[gray] bg-[#2A2A2A] bg-opacity-60 transition hover:border-white hover:bg-white/10'>
					<HiOutlineThumbUp tw='h-7 w-7' />
				</button>
			</div>

			<button
				onClick={() => setMuted(!muted)}
				tw='flex h-11 w-11 items-center justify-center rounded-full border-2 border-[gray] bg-[#2A2A2A] bg-opacity-60 transition hover:border-white hover:bg-white/10'
			>
				{muted ? <HiOutlineVolumeOff tw='h-6 w-6' /> : <HiOutlineVolumeUp tw='h-6 w-6' />}
			</button>
		</div>
	);
};

export default ModalController;
