'use client';

import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { memo } from 'react';

type Props = {
  type: 'login' | 'signup' | 'resetpassword' | 'changepassword';
  message: string;
  onSubmit: (data: Partial<AuthFormData>) => Promise<void>;
};

type AuthFormData = {
  email?: string;
  password?: string;
  confirmPassword?: string;
  name?: string;
};

function AuthForm({ type, message, onSubmit }: Props) {
  const { register, handleSubmit } = useForm<AuthFormData>();

  const handleFormSubmit = async (data: AuthFormData): Promise<void> => {
    console.log('submit');
    await onSubmit(data);
  };

  const renderInputs = () => {
    switch (type) {
      case 'login':
        return (
          <>
            <input
              {...register('email')}
              placeholder="Email"
              type="email"
              required
              className="border-b p-2 focus:outline-none"
            />
            <input
              {...register('password')}
              type="password"
              required
              placeholder="Password"
              className="border-b p-2 focus:outline-none"
              autoComplete="current-password"
            />
          </>
        );
      case 'signup':
        return (
          <>
            <input
              {...register('email')}
              placeholder="Email"
              type="email"
              required
              className="border-b p-2 focus:outline-none"
            />
            <input
              {...register('name')}
              type="text"
              required
              placeholder="Name"
              className="border-b p-2 focus:outline-none"
            />
            <input
              {...register('password')}
              type="password"
              required
              placeholder="Password"
              className="border-b p-2 focus:outline-none"
              autoComplete="new-password"
            />
          </>
        );
      case 'resetpassword':
        return (
          <input
            {...register('email')}
            placeholder="Email"
            required
            type="email"
            className="border-b p-2 focus:outline-none"
          />
        );
      case 'changepassword':
        return (
          <>
            <input
              {...register('password')}
              type="password"
              required
              placeholder="New Password"
              className="border-b p-2 focus:outline-none"
              autoComplete="new-password"
            />
            <input
              {...register('confirmPassword')}
              type="password"
              required
              placeholder="Confirm Password"
              className="border-b p-2 focus:outline-none"
              autoComplete="new-password"
            />
          </>
        );
      default:
        return null;
    }
  };

  const titleMap = {
    login: 'Login',
    signup: 'Sign Up',
    resetpassword: 'Reset Password',
    changepassword: 'Change Password',
  };

  const buttonMap = {
    login: 'Login',
    signup: 'Sign Up',
    resetpassword: 'Send Reset Link',
    changepassword: 'Update Password',
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 bg-white dark:bg-black shadow-md rounded-lg">
      <h1 className="text-2xl mb-4 text-center">{titleMap[type]}</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-4 ">
        {renderInputs()}
        {
          type === "login" &&
          (
            <p className='text-[13px] mt-5'>
              <Link
              className='underline text-slate-200'
               href="/auth/forgot-password">Forgot password?</Link>
            </p>
          )}
        <button type="submit" className="border-blue-600 cursor-pointer border-2 text-white py-2 rounded-full my-2">
          {buttonMap[type]}
        </button>

        {message && <p className="text-rose-300 text-sm">{message}</p>}

        {(type === 'login' || type === 'signup') && (
          <Link
            className="text-sm text-center text-blue-500 cursor-pointer"
            href={type === 'login' ? '/auth/create-account' : '/auth/login'}
          >
            {type === 'login'
              ? "Don't have an account?"
              : 'Already have an account?'}
          </Link>
        )}
      </form>
    </div>
  );
}

export default memo(AuthForm);
