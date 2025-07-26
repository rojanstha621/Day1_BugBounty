// ✅ /src/app/layout.js
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export const metadata = {
  title: 'Ethical HCK',
  description: 'A student-led cybersecurity community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="min-h-[80vh] px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}