'use client';
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function ProfilePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const id = searchParams.get('id'); // 👈 IDOR point

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch(`/api/profile?id=${id}`);
      if (res.ok) {
        const data = await res.json();
        setProfile(data);
      } else {
        setError('Profile not found');
      }
    };

    if (!id) {
      router.push('/dashboard');
    } else {
      fetchProfile();
    }
  }, [id]);

  if (error) return <div className="text-red-600 p-4">{error}</div>;
  if (!profile) return <div className="p-4">Loading profile...</div>;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-black">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <div className="bg-white p-6 rounded shadow-md w-80 text-left">
        <Suspense>
        <p><strong>Username:</strong> {profile.username}</p>
        <p><strong>Role:</strong> {profile.role}</p>
        <p><strong>User ID:</strong> {profile.id}</p>
        </Suspense>
       
      </div>
    </main>
  );
}
