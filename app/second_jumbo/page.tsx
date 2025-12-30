export default function ShowSecondJumbo() {
  return (
    <div className="flex flex-row justify-between items-center px-50 gap-50 mb-40">
      

      <div className="flex flex-col gap-5">
        <h4 className="text-4xl text-white font-bold">About <span className="text-[#00ADB5] font-bold text-4xl">Me</span></h4>
        <h4 className="text-lg text-gray-400 font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.... Read more</h4>
      </div>

      <img
        src="./image2.png"
        width={450}
        height={450}
        className="object-cover"
      />
    </div>
  );
}
