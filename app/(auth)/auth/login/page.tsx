'use client'

import { useState } from 'react';
import AuthForm from '../../../components/AuthForm';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [msg, setMsg] = useState('');
  const router = useRouter();

  const handleLogin = async (data: { email?: string; password?: string }) => {
    try {
      if (!data.email && !data.password) {
        setMsg('Error on initializing ')
      }
      const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
      });

      const result = await res.json();

      if (!res.ok) {
        setMsg(result.message || 'Login failed');
        return;
      }
     if (res.ok) {
       router.push("/me");
     }
    } catch (err) {
      setMsg('Something went wrong.');
    }
  };

  return <AuthForm message={msg} type="login" onSubmit={handleLogin} />;
}