"use client"

import Image from 'next/image';
import room from '../../../public/room.gif';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabaseClient';
import { Switch } from '@/components/ui/switch';
import { Label } from "@/components/ui/label"

export default function SubmitYourStress() {
  const [stressInput, setStressInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const submittedName = isAnonymous ? 'Anonymous' : nameInput;

    // Insert data into Supabase
    const { data, error } = await supabase
      .from('stress_submissions')
      .insert([{ stress: stressInput, name: submittedName }]);

    if (error) {
      console.error('Error inserting data:', error);
    } else {
      // Redirect to Loading page
      router.push('/loading');
    }
  };

  return (
    <main className="bg-gradient-to-br from-light-blue to-dark-blue flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start p-6 pb-0 lg:p-[5%]">
        <h1 className="mt-7 font-pressstart2p bg-gradient-to-b from-oren-1 to-oren-3 inline-block text-transparent bg-clip-text text-4xl sm:text-6xl md:text-4xl lg:text-5xl 2xl:text-7xl text-stroke z-10 drop-shadow-3xlo sm:drop-shadow-3xlo lg:drop-shadow-4xlo 2xl:drop-shadow-5xlo leading-tight lg:leading-tight">
          What&apos;s Stressing You Out?
        </h1>
        <Image className="w-full content-center" src={room} alt={"a gif of a room"} />
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center pl-6 pr-6 pb-10 lg:p-[5%]">
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <input
            className="bg-light-blue font-mono text-xs w-full h-full text-oren-1 rounded-2xl p-5 text-wrap block mb-5"
            placeholder="Things that&apos;s stressing me out..."
            value={stressInput}
            onChange={(e) => setStressInput(e.target.value)}
          />
          <input
            className="bg-light-blue font-mono text-xs w-full h-5 rounded-2xl p-5 mb-5 text-oren-1"
            placeholder="Name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <div className="flex items-center mb-5">
            <Label htmlFor="Anonymous" className='text-oren-1 text-xs'>Anonymous</Label>
            <Switch
              checked={isAnonymous}
              onCheckedChange={setIsAnonymous}    
              className='ml-2'          
            />
          
          </div>
          <button type="submit" className="w-full text-oren-1 text-xs content-center justify-center mt-5 bg-light-blue hover:bg-dark-blue p-4 rounded-2xl">
            TOSS IT IN THE TRASH
          </button>
        </form>
      </div>
    </main>
  );
}
