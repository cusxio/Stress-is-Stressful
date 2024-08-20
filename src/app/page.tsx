import Image from "next/image";
import { inherits } from "util";
import Link from "next/link";
import Parallax from "./components/Parallax";


export default function Home() {

  return (
    
    <main className= "bg-gradient-to-br from-dark-blue to-light-blue">
    <Parallax />         

      <div className="min-h-screen text-white font-sans m-10">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nemo laudantium error iste tenetur temporibus expedita quae, labore omnis adipisci, provident modi vitae quisquam maiores laboriosam, corporis quasi reprehenderit. Corporis!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam aperiam obcaecati numquam accusamus magnam excepturi ex, totam quia? Reprehenderit dignissimos repellat minus blanditiis, aliquam id nemo saepe a. Amet, eligendi?
          Fugit ea eveniet necessitatibus blanditiis, laborum a, dignissimos distinctio quas beatae soluta odit similique? Iste quis odio ipsam aliquid nostrum. Laudantium rerum expedita sed, voluptates praesentium eaque amet optio qui?
          Qui, quasi repudiandae! Accusantium suscipit reiciendis error maxime dolore voluptatum. Deserunt tempore accusamus quis hic ipsam laudantium quasi quos blanditiis. Asperiores laboriosam iure sed dolor libero maxime quibusdam praesentium impedit.
          Corrupti reprehenderit accusamus commodi id in sapiente! Ad qui molestias sed reiciendis, quaerat enim aliquid repellat minima facere, exercitationem nemo quis neque consequatur suscipit voluptates odio ut. Voluptatum, impedit ab?
          Eveniet quia mollitia sed fugiat, cupiditate magnam repellat fuga quibusdam iusto rerum adipisci dignissimos labore veritatis nulla tenetur debitis, quos officiis provident tempore earum animi amet aliquam pariatur. Ad, possimus?
        </p>
      </div>

      <div>
        <h1 className="font-pressstart2p bg-gradient-to-b from-orange-600 to-orange-200 inline-block text-transparent bg-clip-text decoration-solid decoration-20 text-4xl text-stroke text-justify z-10">are you ready to</h1>
        <h1 className="font-pressstart2p bg-gradient-to-b from-orange-600 to-orange-200 inline-block text-transparent bg-clip-text decoration-solid decoration-20 text-2xl text-stroke text-justify z-10">toss your stress away?</h1>
      </div>
      
    </main>
  );
}
