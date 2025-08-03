'use client';
import { useCallback, useState } from 'react';
import AuthForm from '../../../components/AuthForm';
import { signup } from '../../../lib/auth';
import { redirect, useSearchParams } from 'next/navigation';

export default function SignupPage() {
  const [msg, setMsg] = useState('');
  const [userId, setUserId] = useState('')
    const role = useSearchParams()

  const handleSignup = async (data: { email: string; name: string, password: string }) => {
    if (data.password.length <= 5) {
      setMsg("password must be more than 5 char")
    }
    const r = await signup(data);
    console.log("r", r)
    if (r.status === 400 && r.data.message) {
      console.log()
      setMsg(r.data.message);
      return;
    }

    if (r.status === 201) {
      setUserId(r.data.id)
      redirect(`/dashboard/user?user=${userId}`);
    }
  };

  return <AuthForm type="signup" message={msg} onSubmit={handleSignup} />;

}
