// ✅ /src/app/signup/page.js
export default function SignupPage() {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Signup</h2>
        <form action="/api/signup" method="POST" className="bg-white p-6 rounded shadow-md w-80">
          <input type="text" name="username" placeholder="Username" className="w-full mb-4 p-2 border rounded" required />
          <input type="email" name="email" placeholder="Email" className="w-full mb-4 p-2 border rounded" required />
          <input type="password" name="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" required />
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Signup</button>
        </form>
      </main>
    );
  }
  