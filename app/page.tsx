import Image from "next/image";
import ShowTopSection from "./top_section/page";
import ShowJumbo from "./jumbo/page";
import ShowSecondJumbo from "./second_jumbo/page";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-[#222831]">
     
      <ShowTopSection />

      <ShowJumbo />

      <ShowSecondJumbo />


      

    </div>
   );
}
