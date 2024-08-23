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

import Image from 'next/image';
import bin from '../../../public/bin.png';
import paper from '../../../public/paper.png';
import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

function Trashcan() {
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [isDropped, setIsDropped] = useState(false); // State to track if trash is dropped
    const trashRef = useRef<HTMLDivElement | null>(null);
    const binRef = useRef<HTMLDivElement | null>(null);
    const router = useRouter(); // Initialize the router

    useEffect(() => {
        const trash = trashRef.current;

        if (!trash) return;

        let startX = 0;
        let startY = 0;

        const mouseDown = (e: MouseEvent) => {
            startX = e.clientX;
            startY = e.clientY;

            document.addEventListener('mousemove', mouseMove);
            document.addEventListener('mouseup', mouseUp);
        };

        const mouseMove = (e: MouseEvent) => {
            const newX = startX - e.clientX;
            const newY = startY - e.clientY;

            startX = e.clientX;
            startY = e.clientY;

            setPosition((prevPosition) => ({
                top: prevPosition.top - newY,
                left: prevPosition.left - newX,
            }));
        };

        const mouseUp = () => {
            document.removeEventListener('mousemove', mouseMove);
            document.removeEventListener('mouseup', mouseUp);

            // Check for collision with the bin
            if (isTrashInBin()) {
                setIsDropped(true);
                router.push('/submit'); // Navigate to the /submit page
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

        trash.addEventListener('mousedown', mouseDown);

        return () => {
            trash.removeEventListener('mousedown', mouseDown);
            document.removeEventListener('mousemove', mouseMove);
            document.removeEventListener('mouseup', mouseUp);
        };
    }, [router]); // Adding router to the dependency array

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
            {/* Trash (Draggable Item) */}
            {!isDropped && (
                <div
                    ref={trashRef}
                    style={{
                        position: 'absolute',
                        top: `${position.top}px`,
                        left: `${position.left}px`,
                        cursor: 'grab',
                        width: '100px',
                        height: '100px',
                    }}
                >
                    <Image className="w-100 h-100" src={paper} alt="paper" />
                </div>
            )}

            {/* Bin (Drop Zone) */}
            <div
                ref={binRef}
                style={{
                    position: 'absolute',
                    bottom: '50px',
                    right: '50px',
                    width: '100px',
                    height: '100px',
                }}
            >
                <Image className="w-100 h-100" src={bin} alt="bin" />
            </div>
        </div>
    );
}

export default Trashcan;
