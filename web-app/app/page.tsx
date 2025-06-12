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
      <p>API says: {message}</p>
    </main>
  );
}
