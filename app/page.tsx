'use client'; // 👈 This is required to enable CSR in app router

import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState<string>('loading...');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/myapi', {
          method: 'POST',
          credentials: 'include', 
        });

        const result = await res.json();
        console.log(result);
        setData(result.test || 'not found');
      } catch (err) {
        console.error('Error fetching:', err);
        setData('error');
      }
    };

    fetchData();
  }, []);

  return <strong>{data}</strong>;
}
