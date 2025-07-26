'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser || storedUser.role !== 'admin') {
      router.push('/login'); // 🔒 redirect non-admins
    } else {
      setUser(storedUser);
    }
  }, []);

  if (!user) return null; // or a loading spinner

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      <h1 className="text-4xl font-bold mb-4">Welcome Admin 👑</h1>
      <p className="text-xl">Hello, {user.username}! You are logged in as <strong>{user.role}</strong>.</p>
      <button
        onClick={() => {
            localStorage.removeItem('user');
            router.push('/login');
        }}
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
        Logout
        </button>

    </main>
  );
}
