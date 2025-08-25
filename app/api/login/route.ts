import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { cookies } from 'next/headers';

const API_URL = `http://localhost:4000/api/auth/login`;

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const res = await axios.post(API_URL, body);
    const token: string = res.data.token;
    if (res.status === 200) {
      (await cookies()).set('token', token, {
        httpOnly: false,
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      });
      return NextResponse.json({ user: res.data.token }, { status: 200 });
    }
  } catch (err: any) {
    console.error('Login error:', err.response?.data || err.message);
    return NextResponse.json(
      { message: err.response?.data.message || 'Login failed' },
      { status: err.response?.status || 500 }
    );
  }
}