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

type InputConfig = {
  name: keyof AuthFormData;
  type: string;
  placeholder: string;
  autoComplete?: string;
};

function InputField({
  register,
  name,
  type,
  placeholder,
  autoComplete,
}: InputConfig & { register: ReturnType<typeof useForm>['register'] }) {
  return (
    <input
      {...register(name)}
      type={type}
      placeholder={placeholder}
      required
      autoComplete={autoComplete}
      className="border-b p-2 focus:outline-none dark:border-gray-400 dark:text-white"
    />
  );
}

const formInputMap: Record<Props['type'], InputConfig[]> = {
  login: [
    { name: 'email', type: 'email', placeholder: 'Email' },
    { name: 'password', type: 'password', placeholder: 'Password', autoComplete: 'current-password' },
  ],
  signup: [
    { name: 'email', type: 'email', placeholder: 'Email' },
    { name: 'name', type: 'text', placeholder: 'Name' },
    { name: 'password', type: 'password', placeholder: 'Password', autoComplete: 'new-password' },
  ],
  resetpassword: [
    { name: 'email', type: 'email', placeholder: 'Email' },
  ],
  changepassword: [
    { name: 'password', type: 'password', placeholder: 'New Password', autoComplete: 'new-password' },
    { name: 'confirmPassword', type: 'password', placeholder: 'Confirm Password', autoComplete: 'new-password' },
  ],
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

function AuthForm({ type, message, onSubmit }: Props) {
  const { register, handleSubmit } = useForm<AuthFormData>();

  const handleFormSubmit = async (data: AuthFormData): Promise<void> => {
    await onSubmit(data);
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 bg-white dark:bg-black shadow-md rounded-lg">
      <h1 className="text-2xl mb-4 text-center">{titleMap[type]}</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-4">
        {formInputMap[type].map((input) => (
          <InputField key={input.name} {...input} register={register} />
        ))}

        {type === 'login' && (
          <p className="text-[13px] mt-5">
            <Link className="underline dark:text-slate-200" href="/auth/forgot-password">
              Forgot password?
            </Link>
          </p>
        )}

        <button type="submit" className="border-blue-600 cursor-pointer border-2 dark:text-white py-2 rounded-full my-2">
          {buttonMap[type]}
        </button>

        {message && <p className="text-rose-300 text-sm">{message}</p>}

        {(type === 'login' || type === 'signup') && (
          <Link
            className="text-sm text-center text-blue-500 cursor-pointer"
            href={type === 'login' ? '/auth/create-account' : '/auth/login'}
          >
            {type === 'login' ? "Don't have an account?" : 'Already have an account?'}
          </Link>
        )}
      </form>
    </div>
  );
}

export default memo(AuthForm);
