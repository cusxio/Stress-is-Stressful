// 'use client'

// import Image from "next/image";
// import bin from '../../../public/bin.png';
// import paper from '../../../public/paper.png';
// import { useRef, useState } from "react"

// function Trashcan() {
    
//     let newX = 0, newY=0, startX=0, startY=0;

//     const trash = useRef(null);


//     trash.current.addEventListener('mousedown', mouseDown)

//     function mouseDown(e) {
//       startX = e.clientX
//       startY = e.clientY

//       document.addEventListener('mousemove', mouseMove)
//       document.addEventListener('mouseup', mouseUp)

//     }

//     function mouseMove(e) {
//         newX = startX - e.clientX
//         newY = startY - e.clientY

//         startX = e.clientX
//         startY = e.clientY

//         trash.style.top = (trash.offsetTop - newY) + 'px'
//         trash.style.left = (trash.offsetLeft - newX) + 'px'
//     }

//     function mouseUp(e){
//         document.removeEventListener('mousemove', mouseMove)
//     }

//     return (
    
//             <div>
//                 <Image ref={trash} className="w-100, h-100 fixed" src={paper} alt={"paper"}/>
//                 <Image className="w-100, h-100" src={bin} alt={"bin"}/>
//             </div>


//     )
// }

// export default Trashcan

'use client';

'use client';

import Image from 'next/image';
import bin from '../../../public/bin.png';
import paper from '../../../public/paper.png';
import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

function Trashcan() {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isDropped, setIsDropped] = useState(false);
  const trashRef = useRef<HTMLDivElement | null>(null);
  const binRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    const trash = trashRef.current;

    if (!trash) return;

    let startX = 0;
    let startY = 0;

    const handleStart = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      startX = clientX;
      startY = clientY;

      document.addEventListener('mousemove', handleMove);
      document.addEventListener('touchmove', handleMove, { passive: false });
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchend', handleEnd);
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      e.preventDefault(); // Prevent scrolling on touch devices

      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const newX = startX - clientX;
      const newY = startY - clientY;

      startX = clientX;
      startY = clientY;

      setPosition((prevPosition) => ({
        top: prevPosition.top - newY,
        left: prevPosition.left - newX,
      }));
    };

    const handleEnd = () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchend', handleEnd);

      if (isTrashInBin()) {
        setIsDropped(true);
        router.push('/submit');
      }
    };

    const isTrashInBin = () => {
      const trash = trashRef.current;
      const bin = binRef.current;

      if (trash && bin) {
        const trashRect = trash.getBoundingClientRect();
        const binRect = bin.getBoundingClientRect();

        return (
          trashRect.left < binRect.right &&
          trashRect.right > binRect.left &&
          trashRect.top < binRect.bottom &&
          trashRect.bottom > binRect.top
        );
      }
      return false;
    };

    trash.addEventListener('mousedown', handleStart);
    trash.addEventListener('touchstart', handleStart, { passive: false });

    return () => {
      trash.removeEventListener('mousedown', handleStart);
      trash.removeEventListener('touchstart', handleStart);
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [router]);

  return (
    <div className="flex flex-col pl-[10%] pr-[10%] w-full lg:flex-row justify-items-center align-middle lg:items-top">
      <div className="flex flex-col lg:w-1/2 text-center align-middle lg:text-left">
        <h1 className="font-pressstart2p bg-gradient-to-b from-oren-1 to-oren-3 block text-transparent bg-clip-text decoration-solid decoration-20 text-lg md:text-2xl xl:text-4xl text-stroke z-10 drop-shadow-3xlo xl:leading-snug">
          ARE YOU READY TO
        </h1>

        <h1 className="font-pressstart2p bg-gradient-to-b from-oren-1 to-oren-3 block text-transparent bg-clip-text decoration-solid decoration-20 text-lg md:text-2xl xl:text-4xl text-stroke z-10 drop-shadow-3xlo leading-8 xl:leading-snug mt-1">
          TOSS YOUR STRESS AWAY?
        </h1>

        <p className="text-white text-[8px] md:text-xs mt-2">Drag the paper ball into the bin</p>
      </div>

      <div className="relative lg:w-1/2 h-[50vh] mt-5 md:mt-10">
        {!isDropped && (
          <div
            ref={trashRef}
            style={{
              top: `${position.top}px`,
              left: `${position.left}px`,
            }}
            className="absolute cursor-grab w-12 h-12 md:w-16 md:h-16"
          >
            <Image className="w-full h-full" src={paper} alt="paper" />
          </div>
        )}

        <div ref={binRef} className="absolute bottom-10 right-0 w-24 h-24">
          <Image className="w-full h-full" src={bin} alt="bin" />
        </div>
      </div>
    </div>
  );
}

export default Trashcan;
