'use client';
import { useState } from 'react';
import AuthForm from '../../../components/AuthForm';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [msg, setMsg] = useState('');
  const router = useRouter();

  const handleSignup = async (data: { email?: string; name?: string, password?: string }) => {
    if (!data.password) {
      setMsg('Password error')
      throw new Error("Error on initializing password")
    }
    if (data?.password?.length <= 5) {
      setMsg("Internal server error")
    }
    const r = await fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
    const result = await r.json()
    console.log("received data", result)
    if (!r.ok) {
      setMsg(result.message || "SignUp failed")
      return
    }
    if (r.ok) {
      router.push("/me")
    }
    console.log("r", r)
  };

  return <AuthForm type="signup" message={msg} onSubmit={handleSignup} />;

}
