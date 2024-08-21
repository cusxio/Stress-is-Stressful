'use client'

import Image from "next/image";
import { useState } from "react"

function Trashcan() {

    const [widgets, setWidgets] = useState<string[]>([]);

    function handleOnDrag(e: React.DragEvent, widgetType: string) {
        e.dataTransfer.setData("widgetType", widgetType);
    }

    function handleOnDrop(e: React.DragEvent) {
        const widgetType = e.dataTransfer.getData("widgetType") as string;
        console.log("widgetType", widgetType);
        setWidgets([...widgets, widgetType]);
    }

    function handleDragOver(e: React.DragEvent) {
        e.preventDefault();
    }

    return (
        <div className="h-screen">
            <div className="h-screen">
                <h1 className="font-pressstart2p bg-gradient-to-b from-orange-200 to-orange-600 inline-block text-transparent bg-clip-text decoration-solid decoration-20 text-8xl text-stroke z-10 drop-shadow-3xl">ARE YOU READY TO</h1>
                <h1 className="font-pressstart2p bg-gradient-to-b from-orange-200 to-orange-600 inline-block text-transparent bg-clip-text decoration-solid decoration-20 text-8xl text-stroke z-10 drop-shadow-3xl">TOSS YOUR STRESS AWAY?</h1>
            </div>

            <div>
                <Image src={"/paper.png"} alt={"crumpled paper"} width={50} height={50}/>
                <Image src={"/bin.png"} alt={"trash bin"} width={100} height={0}/>
            </div>
        </div>
    )
}

export default Trashcan