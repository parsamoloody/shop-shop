import { NextRequest, NextResponse } from 'next/server';
import { getMe } from '@/lib/auth'; 

export async function GET(req: NextRequest) {
  const token = req.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const response = await getMe(token);
  return NextResponse.json(response.data, { status: response.status });
}
  