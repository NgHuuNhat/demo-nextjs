// call api Client Component
'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <main style={{ padding: 20 }}>
      <h1>Welcome to Next.js 13+</h1>
      <p>call api: {message}</p>
    </main>
  );
}

// call api Server Component
// export default async function Home() {
//   const res = await fetch('http://localhost:3001/api/hello', { cache: 'no-store' });
//   const { message } = await res.json();

//   return (
//     <main style={{ padding: 20 }}>
//       <h1>Welcome to Next.js 13+</h1>
//       <p>call api: {message}</p>
//     </main>
//   );
// }
