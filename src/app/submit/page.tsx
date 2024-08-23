import Image from "next/image";
import { inherits } from "util";



export default function SubmitYourStress() {
  return (
    <main className= "bg-gradient-to-br from-dark-blue to-light-blue h-screen">
      <div className="m-[10%]">
        <div>
          <h1 className="mt-20 font-pressstart2p bg-gradient-to-b from-oren-1 to-oren-3 inline-block text-transparent bg-clip-text text-4xl sm:text-6xl md:text-7xl 2xl:text-9xl text-stroke z-10 drop-shadow-3xlo sm:drop-shadow-4xlo 2xl:drop-shadow-5xlo">What&apos;s Stressing You Out?</h1>
          <Image
            src="/room.gif"
            width={500}
            height={20} alt={""}
          />
        </div>
        
        <div className="flex-col place-items-center ">
          <input className="bg-light-blue font-mono text-xs w-80 h-1/3 rounded-2xl p-5 text-wrap" placeholder="Things that&apos;s stressing me out..." />
          <input className="bg-light-blue font-mono text-xs w-80 h-5 rounded-2xl p-5 mt-5" placeholder="Name" />
          <button className="text-orange-200 text-xs justify-center mt-5">Toss It In The Trash</button>
        </div>
      </div>
      

    </main>
  );
}
