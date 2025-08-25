import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const API_URL = `http://localhost:4000/api/auth/`;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const actionType = searchParams.get('action');

  if (!actionType) {
    return NextResponse.json({ message: "query is required" }, { status: 400 });
  }

  const token = req.cookies.get('token');

  if (!token && actionType !== 'delete') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const getMe = async (token: string) => {
    try {
      const res = await axios.get(`${API_URL}me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res;
    } catch (err: any) {
      console.log("Error response:", err);
      return err.response;
    }
  };

  switch (actionType) {
    case "verify": {
      const response = await getMe(token!.value);
      return NextResponse.json(response.data, { status: response.status });
    }

    case "delete": {
      const res = NextResponse.json({ message: "deleted successfully" }, { status: 201 });
      res.cookies.set('token', '', {
        httpOnly: true,
        secure: true,
        expires: new Date(0),
        path: '/',
      });
      return res;
    }

    default:
      return NextResponse.json({ message: "Internal server error" }, { status: 510 });
  }
}
