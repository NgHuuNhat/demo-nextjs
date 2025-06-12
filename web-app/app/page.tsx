// call api Client Component
// 'use client';
// import { useEffect, useState } from 'react';

import { getBaseUrl } from "./lib/getBaseUrl";

// export default function Home() {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     fetch('/api/hello')
//       .then(res => res.json())
//       .then(data => setMessage(data.message));
//   }, []);

//   return (
//     <main style={{ padding: 20 }}>
//       <h1>Welcome to Next.js 13+</h1>
//       <p>API says: {message}</p>
//     </main>
//   );
// }

// call api Server Component
export default async function Home() {
  const res = await fetch('https://demo-nextjs-one.vercel/api/hello', { cache: 'no-store' });
  const { message } = await res.json();
  //  const res = await fetch(`${getBaseUrl()}/api/hello`, { cache: 'no-store' });
  // const { message } = await res.json();

  return (
    <main style={{ padding: 20 }}>
      <h1>Welcome to Next.js 13+</h1>
      <p>API says: {message}</p>
    </main>
  );
}
