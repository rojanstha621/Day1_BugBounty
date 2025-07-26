"use client";
import { useState } from "react";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [submittedTerm, setSubmittedTerm] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedTerm(searchTerm); // ❌ Intentionally unsanitized
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Search Page</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for something..."
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Search
          </button>
        </form>

        {submittedTerm && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Search Results for:</h2>
            {/* ❌ This is where XSS occurs */}
            <div
              className="p-4 bg-gray-100 border border-gray-300 rounded"
              dangerouslySetInnerHTML={{ __html: submittedTerm }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
