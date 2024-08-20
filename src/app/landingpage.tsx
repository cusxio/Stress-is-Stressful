import Image from "next/image";
import { inherits } from "util";
import Parallax from "./components/Parallax";



export default function Home() {
  return (
    <main className="p-24 bg-gradient-to-br from-dark-blue to-light-blue">

      <Parallax />
      
      <div className="lg:flex">
        <div>
          <h1 className="font-pressstart2p bg-gradient-to-b from-orange-600 to-orange-200 inline-block text-transparent bg-clip-text decoration-solid decoration-20 text-6xl text-stroke">What's Stressing You Out?</h1>
          <Image
            src="/room.gif"
            width={500}
            height={20} alt={""}
          />
        </div>
        <div className="flex-col place-items-center ">
          <input className="bg-light-blue font-mono text-xs w-80 h-1/3 rounded-2xl p-5 text-wrap" placeholder="Things that’s stressing me out..." />
          <input className="bg-light-blue font-mono text-xs w-80 h-5 rounded-2xl p-5 mt-5" placeholder="Name" />
          <button className="text-orange-200 text-sm justify-center mt-5">Toss It In The Trash</button>
        </div>
      </div>
      

      <div className="h-screen flex-col place-self-center">
        <div>
          <div className="flex justify-center">
            <Image
              src="/truck.gif"
              width={400}
              height={20} alt={""}
              className=""
              />
          </div>
          <h3 className="text-xl text-orange-200">we're tossing the stress out for you...</h3>
            </div>
      
          </div>
    </main>
  );
}
