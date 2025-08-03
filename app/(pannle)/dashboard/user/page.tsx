import { getMe } from '../../../lib/auth';
import userPlaceHolder from '../../../../public/assets/images/Portrait_Placeholder.png'
import Image from 'next/image';
import { redirect } from 'next/navigation';
type User = {
  id: string,
  email: string,
  role: string,
  name: string
}
export default async function DashboardPage() {

  const response = await fetch('http://localhost:3000/api/me')
  if (!response.ok) {
    redirect('/auth/login')
  }
  const data = await response.json()
  
  console.log(data)
  return (
    <div className="max-w-md mx-auto mt-20">
      <h1 className="text-2xl">Dashboard</h1>
      {data && (
        <div className="mt-4 p-4 rounded-lg border-[#47464c] border-2 h-80 relative">
          <Image
            src={userPlaceHolder}
            alt={data.name}
            width={80}
            height={80}
            className='absolute -mt-15 rounded-full overflow-hidden right-0 mr-6'
          />
          <div className=''>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Username:</strong> {data.email}</p>
          </div>
        </div>
      )}
    </div>
  );
}
