import 'twin.macro';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import useAuth from '../hooks/useAuth';

const LoginPage = () => {
  const [login, setLogin] = useState(false);
  const { signIn, signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    login ? await signIn(email, password) : await signUp(email, password);
  };

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

      <form
        onSubmit={handleSubmit(onSubmit)}
        tw='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14'
      >
        <h1 tw='text-4xl font-semibold'>Sign In</h1>

        <div tw='space-y-4'>
          <label tw='inline-block w-full'>
            <input
              type='email'
              placeholder='Email or phone number'
              {...register('email', { required: true })}
              tw='w-full rounded bg-[#333] px-5 py-3.5 placeholder-[gray] outline-none focus:bg-[#454545]'
            />
            {errors.email && (
              <p tw='p-1 text-[13px] font-light text-[#E87C03]'>
                Please enter a valid email or phone number.
              </p>
            )}
          </label>
          <label tw='inline-block w-full'>
            <input
              type='password'
              placeholder='Password'
              {...register('password', { required: true })}
              tw='w-full rounded bg-[#333] px-5 py-3.5 placeholder-[gray] outline-none focus:bg-[#454545]'
            />
            {errors.email && (
              <p tw='p-1 text-[13px] font-light text-[#E87C03]'>
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </label>
        </div>

        <button
          onClick={() => setLogin(true)}
          tw='w-full rounded bg-[#E50914] py-3 font-semibold'
        >
          Sign In
        </button>

        <div tw='text-[gray]'>
          {'New to Netflix? '}
          <button
            type='submit'
            onClick={() => setLogin(false)}
            tw='text-white hover:underline'
          >
            Sign up now
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
