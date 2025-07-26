'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [message, setMessage] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const username = formData.get('username');
    const password = formData.get('password');

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      // Store id along with username and role
      localStorage.setItem('user', JSON.stringify({
        id: data.id,          // <-- Add this line
        username: data.username,
        role: data.role,
      }));

      setMessage(`✅ Welcome ${data.username}! Redirecting...`);

      if (data.role === 'admin') {
        router.push('/admin');
      } else {
        router.push('/dashboard');
      }
    } else {
      setMessage(`❌ ${data.message}`);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="username" placeholder="Username" className="w-full p-3 border rounded-lg" required />
          <input type="password" name="password" placeholder="Password" className="w-full p-3 border rounded-lg" required />
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">Login</button>
        </form>
        {message && (
          <div className="mt-4 text-center text-lg font-medium text-gray-800">
            {message}
          </div>
        )}
      </div>
    </main>
  );
}
