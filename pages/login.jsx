import Head from 'next/head';
import Image from 'next/image';
import { Toaster } from 'react-hot-toast';

import LoginForm from '../components/LoginForm/LoginForm';

import * as S from '../styles/LoginPageStyles';

const LoginPage = () => (
	<S.LoginPageContainer>
		<Toaster position='top-center' />
		<Head>
			<title>Netflix</title>
			<link rel='icon' href='/favicon.ico' />
		</Head>

		<Image
			src='https://rb.gy/p2hphi'
			alt='background'
			layout='fill'
			className='login-bg'
			objectFit='cover'
		/>

		<S.NetflixLogo />

		<LoginForm />
	</S.LoginPageContainer>
);

export default LoginPage;
