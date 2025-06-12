export const getBaseUrl = () => {
  if (typeof window !== 'undefined') return ''; // Nếu client-side
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // Khi deploy Vercel
  return 'http://localhost:3001'; // Khi chạy local
};