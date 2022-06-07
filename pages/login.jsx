import 'twin.macro';
import Head from 'next/head';
import Image from 'next/image';

import LoginForm from '../components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div tw='relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
      <Head>
        <title>Netflix</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Image
        src='https://rb.gy/p2hphi'
        alt='background'
        layout='fill'
        tw='z-[-10] !hidden opacity-60 sm:!inline'
        objectFit='cover'
      />

      <img
        src='https://rb.gy/ulxxee'
        alt='logo'
        width={165}
        height={165}
        tw='absolute left-4 top-4 cursor-pointer object-contain md:top-6 md:left-6 lg:left-8 xl:left-10'
      />

      <LoginForm />
    </div>
  );
};

export default LoginPage;
