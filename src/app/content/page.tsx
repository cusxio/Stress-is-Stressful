'use client';

import { Suspense } from 'react'; // Import Suspense from React
import { useSearchParams } from 'next/navigation'; // Correct import from next/navigation

function ContentPage() {
  const searchParams = useSearchParams(); // useSearchParams hook to access query parameters

  const stress = searchParams.get('stress');
  const name = searchParams.get('name');

  return (
    <main className="bg-gradient-to-br from-dark-blue to-light-blue pl-[10%] pr-[10%] h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">Captured Data</h1>
        {stress && name ? (
          <ul className="space-y-4">
            <li className="border-b border-gray-300 pb-2">
              <p className="text-xl">Name: {name}</p>
              <p className="text-xl">Stress: {stress}</p>
            </li>
          </ul>
        ) : (
          <p className="text-xl">No submissions yet. Be the first to share what&apos;s stressing you out!</p>
        )}
      </div>
    </main>
  );
}

// Wrapping ContentPage in Suspense boundary
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContentPage />
    </Suspense>
  );
}
