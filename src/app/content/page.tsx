"use client"

import { useEffect, useState, useCallback } from 'react';
import { supabase } from '../../../lib/supabaseClient';
import { RealtimeChannel } from '@supabase/supabase-js';

interface Submission {
  id: number;
  stress: string;
  name: string;
  created_at: string;
}

export default function ContentPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchSubmissions = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('stress_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data);
    } catch (err) {
      console.error('Error fetching submissions:', err);
      setError('Failed to fetch submissions. Please try again later.');
    }
  }, []);

  useEffect(() => {
    fetchSubmissions();

    const channel: RealtimeChannel = supabase
      .channel('stress_submissions')
      .on('postgres_changes', 
        { event: 'INSERT', schema: 'public', table: 'stress_submissions' }, 
        (payload) => {
          setSubmissions(currentSubmissions => [payload.new as Submission, ...currentSubmissions]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchSubmissions]);

  return (
    <main className="bg-gradient-to-br from-dark-blue to-light-blue min-h-screen p-8 flex flex-col items-center justify-center">
      <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">Stress Submissions</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="space-y-4">
          {submissions.map(submission => (
            <div key={submission.id} className="border-b border-gray-200 pb-2">
              <p className="text-sm font-medium">{submission.stress}</p>
              <p className="mt-1 text-xs text-gray-500">{submission.name}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}


