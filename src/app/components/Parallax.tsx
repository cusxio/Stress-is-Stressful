'use client'

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


function Parallax() {

    const [background, setBackground] = useState(20)

    const parallaxRef = useRef(null);
    const mountain3 = useRef(null);
    const mountain2 = useRef(null);
    const mountain1 = useRef(null);
    const cloud1 = useRef(null);
    const cloud2 = useRef(null);
    const cloud3 = useRef(null);
    const cloud4 = useRef(null);
    const cloud5 = useRef(null);
    const cloud6 = useRef(null);
    const sun = useRef(null);
    const copy = useRef(null);
    const btn = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            var tl = gsap.timeline({
                defaults: { duration: 1 },
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: "top top",
                    end: "5000 bottom",
                    scrub: true,
                    pin: true,
                    onUpdate: (self) => {
                        setBackground(Math.ceil(self.progress * 100 + 20))
                    },
                },
            });
            tl.to(
                mountain3.current,
                {
                    y: "+=1200",
                },
                0
            );
            tl.to(
                mountain2.current,
                {
                    y: "+=700",
                },
                0
            );
            tl.to(
                mountain1.current,
                {
                    y: "-=100",
                },
                0
            );
            
            tl.to(
                cloud1.current,
                {
                    x:"-=500",
                    y: "-=500"
                },
                0
            );
            tl.to(
                cloud2.current,
                {
                    x: "+=500",
                },
                0
            );
            tl.to(
                cloud3.current,
                {
                    x: "+=500",
                },
                0
            );
            tl.to(
                cloud4.current,
                {
                    x: "-=500",
                    y: "+=500"
                },
                0
            );
            tl.to(
                cloud5.current,
                {
                    x: "-=500",
                    y: "+=500"
                },
                0
            );
            tl.to(
                cloud6.current,
                {
                    x: "-=500",
                    y: "+=500"
                },
                0
            );
            tl.to(
                sun.current,
                {
                    y: "+=2000",
                },
                0
            );
            tl.to(
                copy.current,
                {
                    y: "+=1600",
                },
                0
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="overflow-hidden relative bg-oren-4">
            <div className='w-max h-screen overflow-hidden'>
                <img ref={mountain3} className='w-full absolute z-10' src="/sunset/mountain-3.png" />
                <img ref={mountain2} className='w-full absolute z-20' src="/sunset/mountain-2.png" />
                <img ref={mountain1} className='w-full absolute z-30' src="/sunset/mountain-1.png" />
                <img ref={sun} className='w-3/12 absolute left-1/2 top-72 z-0' src="/sunset/sun.png" />
                <img ref={cloud1} className='absolute w-60 left-64 top-6 z-0' src="/sunset/cloud-1.png" />
                <img ref={cloud2} className='absolute w-60 right-80 top-10 z-0' src="/sunset/cloud-2.png" />
                <img ref={cloud3} className='absolute w-60 right-6 top-28 z-0' src="/sunset/cloud-3.png" />
                <img ref={cloud4} className='absolute w-60 left-96 top-32 z-0' src="/sunset/cloud-4.png" />
                <img ref={cloud5} className='absolute w-36 left-52 top-64 z-0' src="/sunset/cloud-5.png" />
                <img ref={cloud6} className='absolute w-60 top-20' src="/sunset/cloud-6.png" />
                <div ref={copy} className="absolute flex-col left-1/2 bottom-1/4 z-10 items-center justify-center -translate-x-1/2 -translate-y-1/2">
                    <h1 className="font-pressstart2p bg-gradient-to-b from-orange-200 to-orange-600 inline-block text-transparent bg-clip-text decoration-solid decoration-20 text-8xl text-stroke z-10 drop-shadow-3xl">STRESS IS</h1>
                    <h1 className="mt-2 font-pressstart2p bg-gradient-to-b from-orange-200 to-orange-600 inline-block text-transparent bg-clip-text decoration-solid decoration-20 text-8xl text-stroke z-10 drop-shadow-3xl">STRESSFUL</h1>
                </div>
                
            </div>
        </div>
    )
}

export default Parallax