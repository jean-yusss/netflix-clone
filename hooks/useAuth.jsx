import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut
} from 'firebase/auth';

import { auth } from '../lib/firebase';

const AuthContext = createContext({
	user: null,
	signUp: async () => {},
	signIn: async () => {},
	logout: async () => {},
	loading: false
});

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const [initialLoading, setInitialLoading] = useState(true);

	const router = useRouter();

	// Persists the user.
	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				setUser(user);
				setLoading(false);
			} else {
				setUser(null);
				setLoading(true);
				router.push('/login');
			}

			// Blocks the UI.
			setInitialLoading(false);
		});
	}, [auth]);

	const signUp = async (email, password) => {
		setLoading(true);

		await createUserWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				setUser(userCredential.user);
				router.push('/');
				setLoading(false);
			})
			.catch(err => toast.error(err.message))
			.finally(() => setLoading(false));
	};

	const signIn = async (email, password) => {
		setLoading(true);

		await signInWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				setUser(userCredential.user);
				router.push('/');
				setLoading(false);
			})
			.catch(err => toast.error(err.message))
			.finally(() => setLoading(false));
	};

	const logout = async () => {
		setLoading(true);

		signOut(auth)
			.then(() => {
				setUser(null);
			})
			.catch(err => toast.error(err.message))
			.finally(() => setLoading(false));
	};

	// Increase performance by memoizing values based on when a dependency is changed.
	const memoizedValue = useMemo(
		() => ({
			user,
			loading,
			signUp,
			signIn,
			logout
		}),
		[user, loading]
	);

	return (
		<AuthContext.Provider value={memoizedValue}>
			{!initialLoading && children}
		</AuthContext.Provider>
	);
};

export default function useAuth() {
	return useContext(AuthContext);
}
