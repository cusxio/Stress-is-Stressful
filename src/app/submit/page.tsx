import Image from "next/image";
import { inherits } from "util";



export default function SubmitYourStress() {
  return (
    <main className= "bg-gradient-to-br from-dark-blue to-light-blue">
      
      
      <div className="p-24 lg:flex">
        <div>
          <h1 className="font-pressstart2p bg-gradient-to-b from-orange-600 to-orange-200 inline-block text-transparent bg-clip-text decoration-solid decoration-20 text-6xl text-stroke">What&apos;s Stressing You Out?</h1>
          <Image
            src="/room.gif"
            width={500}
            height={20} alt={""}
          />
        </div>
        <div className="flex-col place-items-center ">
          <input className="bg-light-blue font-mono text-xs w-80 h-1/3 rounded-2xl p-5 text-wrap" placeholder="Things that&apos;s stressing me out..." />
          <input className="bg-light-blue font-mono text-xs w-80 h-5 rounded-2xl p-5 mt-5" placeholder="Name" />
          <button className="text-orange-200 text-sm justify-center mt-5">Toss It In The Trash</button>
        </div>
      </div>
      

    </main>
  );
}
