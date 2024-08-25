'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import truck from '../../../public/truck.gif';

export default function Loading() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/content'); // Redirect to the content page after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, [router]);

  return (
    <main className="bg-gradient-to-br from-dark-blue to-light-blue h-screen">
      
      
      <div className='flex flex-col items-center align-middle py-[40vh]'>

          <div className='align-middle'>

            <Image
              src={truck}
              alt={"truck"}
              className='w-[200px] lg:w-[300px] 2xl:w-[20vw]'
              />

          </div>

          <h3 className="text-xs lg:text-sm 2xl:text-2xl text-center text-orange-200">We&apos;re tossing the stress out for you...</h3>
        
      </div>
      
    </main>
  );
}
