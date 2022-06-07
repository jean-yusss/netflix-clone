import Head from 'next/head';
import Image from 'next/image';
import 'twin.macro';

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

      <form tw='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14'>
        <h1 tw='text-4xl font-semibold'>Sign In</h1>

        <div tw='space-y-4'>
          <label tw='inline-block w-full'>
            <input
              type='email'
              placeholder='Email'
              tw='w-full rounded bg-[#333] px-5 py-3.5 placeholder-[gray] outline-none focus:bg-[#454545]'
            />
          </label>
          <label tw='inline-block w-full'>
            <input
              type='password'
              placeholder='Password'
              tw='w-full rounded bg-[#333] px-5 py-3.5 placeholder-[gray] outline-none focus:bg-[#454545]'
            />
          </label>
        </div>

        <button tw='w-full rounded bg-[#E50914] py-3 font-semibold'>
          Sign In
        </button>

        <div tw='text-[gray]'>
          {'New to Netflix? '}
          <button type='submit' tw='text-white hover:underline'>
            Sign up now
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
