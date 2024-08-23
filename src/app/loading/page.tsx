'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Loading() {
  const router = useRouter();

  useEffect(() => {
    // Set a timeout to redirect after 3 seconds
    const timer = setTimeout(() => {
      router.push('/content'); // Redirect to the ContentPage
    }, 2500); // 3000 milliseconds = 3 seconds

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="bg-gradient-to-br from-dark-blue to-light-blue">
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="flex justify-center">
          <Image src="/truck.gif" width={400} height={20} alt={"truck"} />
        </div>
        <h3 className="text-xl text-orange-200">We&apos;re tossing the stress out for you...</h3>
      </div>
    </main>
  );
}
