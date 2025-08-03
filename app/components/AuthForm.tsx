'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { memo } from 'react';

type Props = {
  type: 'login' | 'signup';
  message: string;
  onSubmit: (data: { email: string; name: string; password: string }) => Promise<void>;
};
type AuthFormData = {
  email: string;
  password: string;
  name: string;
};
function AuthForm({ type, message, onSubmit }: Props) {
  const { register, handleSubmit } = useForm<AuthFormData>();

  const handleFormSubmit = async (data: { email: string; name: string; password: string }): Promise<void> => {
    console.log("submit")
    await onSubmit(data);
    // router.push('/dashboard');
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 bg-white dark:bg-black shadow-md rounded-lg">
      <h1 className="text-2xl mb-4 text-center">
        {type === 'login' ? 'Login' : 'Sign Up'}
      </h1>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-4">
        <input
          {...register('email')}
          placeholder="email"
          type='email'
          className="border-b p-2 focus:outline-none"
        />
        {
          type === 'signup' && (
            <input
              {...register('name')}
              type="text"
              placeholder="Name"
              className="border-b p-2 focus:outline-none"
            />
          )
        }
        <input
          {...register('password')}
          type="password"
          placeholder="Password"
          className="border-b p-2 focus:outline-none"
          autoComplete={type === 'login' ? 'current-password' : 'new-password'}
        />

        <button type="submit" className="bg-blue-600 text-white py-2 rounded">
          {type === 'login' ? 'Login' : 'Sign Up'}
        </button>
        {
          <p className='text-rose-300 text-sm'>{message}</p>
        }
        {type === 'login'
          ? <Link className='text-sm text-center text-blue-500 cursor-pointer' href={'/auth/signup'}>Don't have an account ?</Link>
          : <Link className='text-sm text-center text-blue-500 cursor-pointer' href={'/auth/login'}>Do you have an account ?</Link>
        }
      </form>
    </div>
  );
}

export default AuthForm