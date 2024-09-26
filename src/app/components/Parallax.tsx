'use client'

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import m1 from '../../../public/sunset/mountain-1.png';
import m2 from '../../../public/sunset/mountain-2.png';
import m3 from '../../../public/sunset/mountain-3.png';
import c1 from '../../../public/sunset/cloud-1.png';
import c2 from '../../../public/sunset/cloud-2.png';
import c3 from '../../../public/sunset/cloud-3.png';
import c4 from '../../../public/sunset/cloud-4.png';
import c5 from '../../../public/sunset/cloud-5.png';
import c6 from '../../../public/sunset/cloud-6.png';
import sunI from '../../../public/sunset/sun.png';



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
                    y: "-=0",
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
        <div className="overflow-hidden h-screen relative bg-oren-4 z-0">
            <div className='h-[110vh] w-full relative'>
                <Image ref={mountain3} className='w-full absolute z-10 bottom-[9%] ' src={m3} alt={"mountain3"}/>
                <Image ref={mountain2} className='w-full absolute z-20 bottom-[9%] ' src={m2} alt={"mountain2"}/>
                <Image ref={mountain1} className='w-full absolute z-30 bottom-[9%] ' src={m1} alt={"mountain1"}/>
                <Image ref={sun} className='w-[25%] sm:w-[20%] absolute left-[50%] md:left-[53%] bottom-[18%] sm:bottom-[20%] md:bottom-[23%] lg:bottom-[24%] xl:bottom-[33%] z-0 2xl:bottom-[40%]' src={sunI} alt={"sun"}/>
                <Image ref={cloud1} className='absolute w-[30%] sm:w-[20%] md:w-[15%] lg:w-[20%] 2xl:w-[10%] left-[60%] top-[5%] z-0' src={c1} alt={"cloud1"}/>
                <Image ref={cloud2} className='absolute w-[30%] sm:w-[20%] md:w-[15%] lg:w-[20%] 2xl:w-[10%] left-[10%] top-[30%] md:top-[25%] z-0' src={c2}alt={"cloud2"}/>
                <Image ref={cloud3} className='absolute w-[30%] sm:w-[20%] md:w-[15%] lg:w-[20%] 2xl:w-[10%] left-[60%] md:left-[35%] top-[15%] z-0' src={c3}alt={"cloud3"}/>
                <Image ref={cloud4} className='absolute w-[30%] sm:w-[20%] md:w-[15%] lg:w-[20%] 2xl:w-[10%] left-[80%] top-[30%] md:top-[20%] z-0' src={c4} alt={"cloud4"}/>
                <Image ref={cloud5} className='absolute w-[20%] sm:w-[15%] md:w-[10%] lg:w-[20%] 2xl:w-[8%] left-[52%] sm:left-[80%] md:left-[90%] bottom-[35%] md:bottom-[40%] lg:bottom-[50%] 2xl:bottom-[60%] z-20' src={c5} alt={"clound5"}/>
                <Image ref={cloud6} className='absolute w-[30%] sm:w-[20%] md:w-[15%] lg:w-[20%] 2xl:w-[8%] top-20' src={c6} alt={"cloud6"}/>
                <div ref={copy} className="absolute flex-col left-1/2 top-1/2 md:top-[45%] z-10 items-center justify-center -translate-x-1/2 -translate-y-1/2 2xl:z-20">
                    <h1 className="font-pressstart2p bg-gradient-to-b from-orange-200 to-orange-600 inline-block text-transparent bg-clip-text text-4xl sm:text-6xl md:text-7xl 2xl:text-9xl text-stroke z-10 drop-shadow-3xlb sm:drop-shadow-4xlb 2xl:drop-shadow-5xlb">STRESS IS</h1>
                    <h1 className="mt-2 font-pressstart2p bg-gradient-to-b from-orange-200 to-orange-600 inline-block text-transparent bg-clip-text text-4xl sm:text-6xl md:text-7xl 2xl:text-9xl text-stroke z-10 drop-shadow-3xlb sm:drop-shadow-4xlb 2xl:drop-shadow-5xlb">STRESSFUL</h1>
                </div>
                
            </div>
        </div>
    )
}

export default Parallax