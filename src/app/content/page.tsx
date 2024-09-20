"use client"

import { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';

interface Submission {
  id: number;
  stress: string;
  name: string;
  created_at: string;
}

export default function ContentPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    // Fetch initial data
    fetchSubmissions();

    // Set up real-time listener
    const channel = supabase
      .channel('stress_submissions')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'stress_submissions' }, payload => {
        setSubmissions(currentSubmissions => [...currentSubmissions, payload.new as Submission]);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchSubmissions = async () => {
    const { data, error } = await supabase
      .from('stress_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching submissions:', error);
    } else {
      setSubmissions(data);
    }
  };


  return (
    <main className="bg-gradient-to-br from-dark-blue to-light-blue pl-[10%] pr-[10%] h-screen flex flex-col items-center justify-center">
      <div className="bg-white text-black p-10 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">Captured Data</h1>
        
        <div className="space-y-4">
        {submissions.map(submission => (
          <div key={submission.id} className="bg-white p-4 rounded shadow">
            <p className="font-bold">{submission.name}</p>
            <p>{submission.stress}</p>
          </div>
        ))}
        
      </div>
      </div>
    </main>
  );
}


