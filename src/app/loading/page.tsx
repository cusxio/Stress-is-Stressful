import Image from "next/image";
import { inherits } from "util";



export default function Loading() {
  return (
    <main className= "bg-gradient-to-br from-dark-blue to-light-blue">
      
      <div className="h-screen flex-col place-self-center">
        <div>
          <div className="flex justify-center">
            <Image
              src="/truck.gif"
              width={400}
              height={20} 
              alt={"truck"}
              />
          </div>

          <h3 className="text-xl text-orange-200">we're tossing the stress out for you...</h3>
          
          </div>
      
      </div>
    </main>
  );
}
