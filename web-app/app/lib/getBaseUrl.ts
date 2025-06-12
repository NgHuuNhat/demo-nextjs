export function getBaseUrl() {
  if (typeof window !== 'undefined') return ''; // client
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // server on Vercel
  return 'http://localhost:3001'; // server dev local
}
