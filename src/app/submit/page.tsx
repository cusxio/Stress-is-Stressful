'use client'

import Image from 'next/image';
import room from '../../../public/room.gif';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Updated to use the router for navigation

export default function SubmitYourStress() {
  const [stressInput, setStressInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Get existing submissions from local storage
    const existingSubmissions = JSON.parse(localStorage.getItem('submissions') || '[]');

    // Create new submission object
    const newSubmission = {
      stress: stressInput,
      name: nameInput,
    };

    // Add new submission to existing submissions
    const updatedSubmissions = [...existingSubmissions, newSubmission];

    // Save updated submissions back to local storage
    localStorage.setItem('submissions', JSON.stringify(updatedSubmissions));

    // Redirect to Loading page
    router.push('/loading'); // This page will show the loading screen for 3 seconds
  };

  return (
    <main className="bg-gradient-to-br from-dark-blue to-light-blue pl-[10%] pr-[10%]">
      <div className="flex">
        <div className="w-[50%] content-center">
          <h1 className="mt-20 font-pressstart2p bg-gradient-to-b from-oren-1 to-oren-3 inline-block text-transparent bg-clip-text text-4xl sm:text-6xl md:text-7xl 2xl:text-7xl text-stroke z-10 drop-shadow-3xlo sm:drop-shadow-4xlo 2xl:drop-shadow-5xlo leading-relaxed">
            What&apos;s Stressing You Out?
          </h1>
          <Image className="w-full" src={room} alt={""} />
        </div>

        <form onSubmit={handleSubmit} className="flex-col content-center p-[10%]">
          <input
            className="bg-light-blue font-mono text-xs w-80 h-1/3 rounded-2xl p-5 text-wrap block"
            placeholder="Things that&apos;s stressing me out..."
            value={stressInput}
            onChange={(e) => setStressInput(e.target.value)}
          />
          <input
            className="bg-light-blue font-mono text-xs w-80 h-5 rounded-2xl p-5 mt-5 block"
            placeholder="Name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <button type="submit" className="text-orange-200 text-xs justify-center mt-5">
            Toss It In The Trash
          </button>
        </form>
      </div>
    </main>
  );
}
