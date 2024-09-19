
// // import { useRef, useEffect, useState } from 'react';
// // import { useRouter } from 'next/navigation';

// //   useEffect(() => {
// //     const trash = trashRef.current;

// //     if (!trash) return;

// //     let startX = 0;
// //     let startY = 0;

// //     const handleStart = (e: MouseEvent | TouchEvent) => {
// //       const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
// //       const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
// //       startX = clientX;
// //       startY = clientY;

// //       document.addEventListener('mousemove', handleMove);
// //       document.addEventListener('touchmove', handleMove, { passive: false });
// //       document.addEventListener('mouseup', handleEnd);
// //       document.addEventListener('touchend', handleEnd);
// //     };

// //     const handleMove = (e: MouseEvent | TouchEvent) => {
// //       e.preventDefault(); // Prevent scrolling on touch devices

// //       const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
// //       const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

// //       const newX = startX - clientX;
// //       const newY = startY - clientY;

// //       startX = clientX;
// //       startY = clientY;

// //       setPosition((prevPosition) => ({
// //         top: prevPosition.top - newY,
// //         left: prevPosition.left - newX,
// //       }));
// //     };

// //     const handleEnd = () => {
// //       document.removeEventListener('mousemove', handleMove);
// //       document.removeEventListener('touchmove', handleMove);
// //       document.removeEventListener('mouseup', handleEnd);
// //       document.removeEventListener('touchend', handleEnd);

// //       if (isTrashInBin()) {
// //         setIsDropped(true);
// //         router.push('/submit');
// //       }
// //     };

// //     const isTrashInBin = () => {
// //       const trash = trashRef.current;
// //       const bin = binRef.current;

// //       if (trash && bin) {
// //         const trashRect = trash.getBoundingClientRect();
// //         const binRect = bin.getBoundingClientRect();

// //         return (
// //           trashRect.left < binRect.right &&
// //           trashRect.right > binRect.left &&
// //           trashRect.top < binRect.bottom &&
// //           trashRect.bottom > binRect.top
// //         );
// //       }
// //       return false;
// //     };

// //     trash.addEventListener('mousedown', handleStart);
// //     trash.addEventListener('touchstart', handleStart, { passive: false });

// //     return () => {
// //       trash.removeEventListener('mousedown', handleStart);
// //       trash.removeEventListener('touchstart', handleStart);
// //       document.removeEventListener('mousemove', handleMove);
// //       document.removeEventListener('touchmove', handleMove);
// //       document.removeEventListener('mouseup', handleEnd);
// //       document.removeEventListener('touchend', handleEnd);
// //     };
// //   }, [router]);

// //   return (
// //     <div className="flex flex-col pl-[10%] pr-[10%] w-full lg:flex-row justify-items-center align-middle lg:items-top">
// //       <div className="flex flex-col lg:w-1/2 text-center align-middle lg:text-left">
// //         <h1 className="font-pressstart2p bg-gradient-to-b from-oren-1 to-oren-3 block text-transparent bg-clip-text decoration-solid decoration-20 text-lg md:text-2xl xl:text-4xl text-stroke z-10 drop-shadow-3xlo xl:leading-snug">
// //           ARE YOU READY TO
// //         </h1>

// //         <h1 className="font-pressstart2p bg-gradient-to-b from-oren-1 to-oren-3 block text-transparent bg-clip-text decoration-solid decoration-20 text-lg md:text-2xl xl:text-4xl text-stroke z-10 drop-shadow-3xlo leading-8 xl:leading-snug mt-1">
// //           TOSS YOUR STRESS AWAY?
// //         </h1>

// //         <p className="text-white text-[8px] md:text-xs mt-2">Drag the paper ball into the bin</p>
// //       </div>

// //       <div className="relative lg:w-1/2 h-[50vh] mt-5 md:mt-10">
// //         {!isDropped && (
// //           <div
// //             ref={trashRef}
// //             style={{
// //               top: `${position.top}px`,
// //               left: `${position.left}px`,
// //             }}
// //             className="absolute cursor-grab w-12 h-12 md:w-16 md:h-16"
// //           >
// //             <Image className="w-full h-full" src={paper} alt="paper" />
// //           </div>
// //         )}

// //         <div ref={binRef} className="absolute bottom-10 right-0 w-24 h-24">
// //           <Image className="w-full h-full" src={bin} alt="bin" />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Trashcan;

// 'use client';

// import React from "react";
// import Draggable from "react-draggable";
// import Image from 'next/image';
// import bin from '../../../public/bin.png';
// import paper from '../../../public/paper.png';

// class Trashcan extends React.Component {
//   render() {
//     return (

//       <div className="flex flex-col pl-[10%] pr-[10%] w-full lg:flex-row justify-items-center align-middle lg:items-top">
//             <div className="flex flex-col lg:w-1/2 text-center align-middle lg:text-left">
//               <h1 className="font-pressstart2p bg-gradient-to-b from-oren-1 to-oren-3 block text-transparent bg-clip-text decoration-solid decoration-20 text-lg md:text-2xl xl:text-4xl text-stroke z-10 drop-shadow-3xlo xl:leading-snug">
//                 ARE YOU READY TO
//               </h1>
      
//               <h1 className="font-pressstart2p bg-gradient-to-b from-oren-1 to-oren-3 block text-transparent bg-clip-text decoration-solid decoration-20 text-lg md:text-2xl xl:text-4xl text-stroke z-10 drop-shadow-3xlo leading-8 xl:leading-snug mt-1">
//                 TOSS YOUR STRESS AWAY?
//              </h1>
      
//              <p className="text-white text-[8px] md:text-xs mt-2">Drag the paper ball into the bin</p>
//            </div>
      
//            <div className="relative lg:w-1/2 h-[50vh] mt-5 md:mt-10">
             
//               <Draggable
//                   axis="both"
//                   handle=".handle"
//                   defaultPosition={{ x: 0, y: 0 }}
//                   scale={1}
//                   onStart={this.handleStart}
//                   onDrag={this.handleDrag}
//                   onStop={this.handleStop}
//                 >
//                   <div className="handle w-12 h-12 md:w-16 md:h-16 z-50">
//                     <Image className="w-full h-full" src={paper} alt="paper" draggable={false}/>
//                   </div>
                
//                 </Draggable>
//             </div>  
              
      
//               <div className="bottom-10 right-0 w-24 h-24">
//                 <Image className="w-full h-full" src={bin} alt="bin" />
//               </div>
//             </div>
      
//     );
//   }
// }

// export default Trashcan;

'use client';

import React, { useState, useRef } from "react";
import { useRouter } from 'next/navigation'; // For page navigation in Next.js
import Draggable from "react-draggable";
import Image from 'next/image';
import bin from '../../../public/bin.png';
import paper from '../../../public/paper.png';

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
    <div className="flex flex-col pl-[10%] pr-[10%] w-full lg:flex-row justify-items-center align-middle lg:items-top z-50">
      <div className="flex flex-col lg:w-1/2 text-center align-middle lg:text-left z-0">
        <h1 className="font-pressstart2p bg-gradient-to-b from-oren-1 to-oren-3 block text-transparent bg-clip-text decoration-solid decoration-20 text-lg md:text-2xl xl:text-4xl text-stroke z-10 drop-shadow-3xlo xl:leading-snug">
          ARE YOU READY TO
        </h1>
        <h1 className="font-pressstart2p bg-gradient-to-b from-oren-1 to-oren-3 block text-transparent bg-clip-text decoration-solid decoration-20 text-lg md:text-2xl xl:text-4xl text-stroke z-10 drop-shadow-3xlo leading-8 xl:leading-snug mt-1">
          TOSS YOUR STRESS AWAY?
        </h1>
        <p className="text-white text-[8px] md:text-xs mt-2">Drag the paper ball into the bin</p>
      </div>

      <div className="relative lg:w-1/2 h-[50vh] mt-5 md:mt-10">
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          scale={1}
          onStop={handleStop} // Call handleStop when dragging stops
        >
          <div ref={paperRef} className="handle w-12 h-12 md:w-16 md:h-16 z-50">
            <Image className="w-full h-full" src={paper} alt="paper" draggable={false} />
          </div>
        </Draggable>

          {/* Bin image */}
          <div ref={binRef} className="absolute bottom-20 right-20 w-24 h-24">
            <Image className="w-full h-full" src={bin} alt="bin" />
          </div>
        </div>
      </div>
  );
};

export default Trashcan;
