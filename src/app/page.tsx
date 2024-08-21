import Image from "next/image";
import { inherits } from "util";
import Link from "next/link";
import Parallax from "./components/Parallax";


export default function Home() {

  return (
    
    <main className= "bg-dark-blue">
      <Parallax />         

      <div className="min-h-screen -mt-10">
        <p className="m-[20%] text-oren-4 font-montserrat text-base ">
        Have you ever done something bad or really stupid? Like, you know, stealing money from your granny as a child or laughing at an odd-looking homeless person?
        <br/><br/>
        Do you still remember the day when you failed the interview for your dream job or the night when you were too shy to tell her that you loved her? Maybe you hate yourself for some of your thoughts or feelings?
        <br/><br/>
        It’s time to get rid of shame and start a guilt-free life! Let us save your sanity with the ancient technique of ‘Indulgence’, which first appeared in Europe more than 1,000 years ago. 
        <br/><br/>
        Now go scroll for redemption!
        </p>
      </div>

      <div>
        <h1 className="font-pressstart2p bg-gradient-to-b from-orange-600 to-orange-200 inline-block text-transparent bg-clip-text decoration-solid decoration-20 text-4xl text-stroke text-justify z-10">are you ready to</h1>
        <h1 className="font-pressstart2p bg-gradient-to-b from-orange-600 to-orange-200 inline-block text-transparent bg-clip-text decoration-solid decoration-20 text-2xl text-stroke text-justify z-10">toss your stress away?</h1>
      </div>
      
    </main>
  );
}
