'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import truck from '../../../public/truck.gif';

export default function Loading() {
  const router = useRouter();

  useEffect(() => {
    // Function to reset zoom and scroll position
    const resetViewport = () => {
      // Reset zoom level
      document.body.style.zoom = '100%';
      // For browsers that don't support zoom
      document.body.style.transform = 'scale(1)';
      document.body.style.transformOrigin = '0 0';
      
      // Scroll to top
      window.scrollTo(0, 0);
      
      // Attempt to fit content to viewport
      document.documentElement.style.height = '100%';
      document.body.style.height = '100%';
      document.body.style.overflow = 'hidden';
    };

    // Call resetViewport when component mounts
    resetViewport();

    // Set up the redirect timer
    const timer = setTimeout(() => {
      router.push('/content'); // Redirect to the content page after 3 seconds
    }, 3000);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      // Reset body styles when component unmounts
      document.body.style.height = '';
      document.body.style.overflow = '';
    };
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

          <h3 className="m-5 text-xs lg:text-sm 2xl:text-2xl text-center text-orange-200">We&apos;re tossing the stress out for you...</h3>
        
      </div>
      
    </main>
  );
}
