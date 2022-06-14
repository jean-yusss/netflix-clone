// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyASseCb0sxz_rBlUQIlr5bCohfoSkGJs1E',
	authDomain: 'netflix-clone-368ad.firebaseapp.com',
	projectId: 'netflix-clone-368ad',
	storageBucket: 'netflix-clone-368ad.appspot.com',
	messagingSenderId: '695879676708',
	appId: '1:695879676708:web:77970cbc2b67ed214839b1'
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
