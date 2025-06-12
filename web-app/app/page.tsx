// // call api Client Component
// 'use client';
// import { useEffect, useState } from 'react';

// export default function Home() {
//   const [data, setData] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch('/api/hello');
//         const data = await res.json();
//         setData(data);
//       } catch (error) {
//         console.error('Error fetching message:', error);
//         setData([]);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <main style={{ padding: 20 }}>
//       <h1>Welcome to Next.js 13+</h1>
//       <h2>Posts:</h2>
//       {data?.map((item: any, index: any) => (
//         <div key={item.id} style={{ marginBottom: 10 }}>
//           <h3>{index}</h3>
//           <h3>{item.title}</h3>
//           <p>{item.body}</p>
//         </div>
//       ))}
//     </main>
//   );
// }

// call api Server Component
import { getMessage } from "./lib/getMessage";

export default async function Home() {
  const data = await getMessage();

  return (
    <main style={{ padding: 20 }}>
      <h1>Welcome to Next.js 13+</h1>
      <h2>Posts:</h2>
      {data?.map((item: any, index: any) => (
        <div key={item.id} style={{ marginBottom: 10 }}>
          <h3>{index}</h3>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </main>
  );
}
