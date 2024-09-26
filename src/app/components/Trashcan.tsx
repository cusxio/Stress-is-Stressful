'use client';

import React, { useState, useRef } from "react";
import { useRouter } from 'next/navigation'; // For page navigation in Next.js
import Draggable from "react-draggable";
import Image from 'next/image';
import bin from '../../../public/bin.png';
import paper from '../../../public/paper.png';
import arrow from '../../../public/Arrow 1.png';

const Trashcan: React.FC = () => {
  const router = useRouter(); // Next.js router
  const binRef = useRef<HTMLDivElement>(null); // Reference to the bin
  const paperRef = useRef<HTMLDivElement>(null); // Reference to the paper
  const [dragged, setDragged] = useState(false);

  const handleStop = () => {
    // Get bounding boxes for paper and bin
    const paperRect = paperRef.current?.getBoundingClientRect();
    const binRect = binRef.current?.getBoundingClientRect();

    if (paperRect && binRect) {
      // Check for collision
      const isColliding =
        paperRect.right > binRect.left &&
        paperRect.left < binRect.right &&
        paperRect.bottom > binRect.top &&
        paperRect.top < binRect.bottom;

      if (isColliding) {
        // Redirect to /submit if paper is dropped in the bin
        router.push('/submit');
      }
    }
  };

  return (
    <div className="pl-[10%] pr-[10%] w-full align-middle lg:items-top z-50">
      <div className=" text-center lg:text-center z-0 m-auto">
        <h1 className="font-pressstart2p bg-gradient-to-b from-oren-1 to-oren-3 block text-transparent bg-clip-text decoration-solid decoration-20 text-lg md:text-2xl xl:text-4xl text-stroke z-10 drop-shadow-3xlo xl:leading-snug">
          ARE YOU READY TO
        </h1>
        <h1 className="font-pressstart2p bg-gradient-to-b from-oren-1 to-oren-3 block text-transparent bg-clip-text decoration-solid decoration-20 text-lg md:text-2xl xl:text-4xl text-stroke z-10 drop-shadow-3xlo leading-8 xl:leading-snug mt-1">
          TOSS YOUR STRESS AWAY?
        </h1>
      </div>

      <div className="relative lg:w-1/2 h-[50vh] mt-10 sm:mt-20 m-auto">
        <div className="flex align-top">
          <h1 className="inline-block text-[8px] text-white">Drag the paper</h1>
          <Image className="inline-block mt-[5%] -ml-[5%] md:-ml-[2%] md:mt-[3%] w-auto h-10 " src={arrow} alt="arrow"/>
        </div>
        <div>
          <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{ x: 0, y: 0 }}
            scale={1}
            onStop={handleStop} // Call handleStop when dragging stops
            >
          <div ref={paperRef} className="handle z-50 -mt-5 ml-5">
            <Image className="w-12 h-12 md:w-16 md:h-16 z-50" src={paper} alt="paper" draggable={false} />
          </div>
        </Draggable>
        </div>

          {/* Bin image */}
          <div ref={binRef} className="flex-row content-end absolute bottom-10 right-0 h-auto z-0 pr-0">
            <h1 className="text-[8px] text-white mb-3">Into the bin</h1>
            <Image className="w-16 xl:w-20 h-full m-auto z-0" src={bin} alt="bin" />
            
          </div>
        </div>
      </div>
    
  );
};

export default Trashcan;
