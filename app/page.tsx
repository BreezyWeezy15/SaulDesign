import ShowTopSection from "./top_section/page";
import ShowJumbo from "./jumbo/page";
import ShowSecondJumbo from "./second_jumbo/page";
import ShowThirdJumbo from "./third_jumbo/page";
import ShowContact from "./contact/page";

export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen w-full bg-[#222831]" >
      <ShowTopSection />

      <div className="w-full h-[0.5px] bg-gray-500"></div>

      <ShowJumbo />

      <div className="w-full h-[0.5px] bg-gray-500 mb-16"></div>

      <ShowSecondJumbo />

      <div className="w-full h-[0.5px] bg-gray-500 mb-16"></div>

      <ShowThirdJumbo />

      <div className="w-full h-[0.5px] bg-gray-500 mb-16"></div>

      <ShowContact />

    </div>
  );
}


