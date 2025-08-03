'use client'

import { useState } from 'react';
import AuthForm from '../../../components/AuthForm';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [msg, setMsg] = useState('');
  const router = useRouter();

  const handleLogin = async (data: { email: string; name: string; password: string }) => {
    try {
      const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log("res from login",res)

      const result = await res.json();

      if (!res.ok) {
        setMsg(result.message || 'Login failed');
        return;
      }

      // ✅ Navigate on success
      router.push('/pannle/user');
    } catch (err) {
      console.error('Login error:', err);
      setMsg('Something went wrong.');
    }
  };

  return <AuthForm message={msg} type="login" onSubmit={handleLogin} />;
}
