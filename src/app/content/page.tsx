'use client';

import { useEffect, useState } from 'react';

export default function ContentPage() {
  const [submissions, setSubmissions] = useState<{ stress: string; name: string }[]>([]);

  useEffect(() => {
    // Fetch submissions from local storage on component mount
    const storedSubmissions = JSON.parse(localStorage.getItem('submissions') || '[]');
    setSubmissions(storedSubmissions);
  }, []);


  return (
    <main className="bg-gradient-to-br from-dark-blue to-light-blue pl-[10%] pr-[10%] h-screen flex flex-col items-center justify-center">
      <div className="bg-white text-black p-10 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">Captured Data</h1>
        
          <ul className="space-y-4">
            {submissions.map((submission, index) => (

              <li key={index} className="border-b border-gray-300 pb-2">
              <p className="text-xl">Name: {submission.name}</p>
              <p className="text-xl">Stress: {submission.stress}</p>
            </li>
            ))}
          </ul>
        
      </div>
    </main>
  );
}


