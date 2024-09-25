"use client";

import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

interface Submission {
  id: number;
  stress: string;
  name: string;
}

export default function ClientSideContent({ initialSubmissions }: { initialSubmissions: Submission[] | null }) {
  const [submissions, setSubmissions] = useState<Submission[]>(initialSubmissions || []);
  const supabase = createClientComponentClient();

  useEffect(() => {
    const channel = supabase
      .channel('stress_submissions_changes')
      .on('postgres_changes', 
        { event: 'INSERT', schema: 'public', table: 'stress_submissions' }, 
        (payload) => {
          console.log('New submission received:', payload.new);
          setSubmissions(currentSubmissions => [payload.new as Submission, ...currentSubmissions]);
        }
      )
      .subscribe((status) => {
        console.log('Realtime subscription status:', status);
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);

  return (
    <main className="bg-gradient-to-br from-dark-blue to-light-blue min-h-screen p-8 flex flex-col items-center justify-center">
      <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-2xl">
        {submissions.length === 0 ? (
          <p>No submissions yet.</p>
        ) : (
          <div className="space-y-4">
             <h1 className="text-2xl font-bold mb-4">Stress Submissions</h1>
            {submissions.map(submission => (
              <div key={submission.id} className="border-b border-gray-200 pb-2">
                <p className="text-sm font-medium">{submission.stress}</p>
                <p className="mt-1 text-xs text-gray-500">{submission.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}