import 'twin.macro';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import useAuth from '../../hooks/useAuth';

const LoginForm = () => {
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
  );
};

export default LoginForm;
