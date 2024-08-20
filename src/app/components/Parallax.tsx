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
    const clouds1 = useRef(null);
    const clouds2 = useRef(null);
    const clouds3 = useRef(null);
    const clouds4 = useRef(null);
    const clouds5 = useRef(null);
    const clouds6 = useRef(null);
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
                    y: "-=300",
                },
                0
            );
            tl.to(
                mountain2.current,
                {
                    y: "-=200",
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
                clouds1.current,
                {
                    opacity: 0,
                    duration: 0.5
                },
                0
            );
            tl.to(
                clouds2.current,
                {
                    x: "-20%",
                    opacity: 0,
                },
                0
            );
            tl.to(
                clouds3.current,
                {
                    x: "20%",
                    opacity: 0,
                },
                0
            );
            tl.to(
                sun.current,
                {
                    y: "+=210",
                },
                0
            );
            tl.to(
                copy.current,
                {
                    y: "-250%",
                    opacity: 1
                },
                0
            );
            tl.to(
                btn.current,
                {
                    opacity: 1,
                },
                1.5
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="overflow-hidden">
            <div className='w-max h-screen bg-red'>
                <img className='w-full absolute z-10' src="/sunset/mountain-3.png" />
                <img className='w-full absolute z-20' src="/sunset/mountain-2.png" />
                <img className='w-full absolute z-30' src="/sunset/mountain-1.png" />
                <img className='w-3/12 absolute left-1/2 top-72 z-0' src="/sunset/sun.png" />
                <img className='absolute w-60 left-64 top-6 z-0' src="/sunset/cloud-1.png" />
                <img className='absolute w-60 right-80 top-10 z-0' src="/sunset/cloud-2.png" />
                <img className='absolute w-60 right-6 top-28 z-0' src="/sunset/cloud-3.png" />
                <img className='absolute w-60 left-96 top-32 z-0' src="/sunset/cloud-4.png" />
                <img className='absolute w-36 left-52 top-64 z-0' src="/sunset/cloud-5.png" />
                <img className='absolute w-60 top-20' src="/sunset/cloud-6.png" />

                <div className="absolute flex-col left-1/2 bottom-1/2 z-30 items-center justify-center">
                    <h1 className="">STRESS IS</h1>
                </div>
                <div>
                    <h1 className="">STRESSFUL</h1>
                </div>
            </div>
        </div>
    )
}

export default Parallax