


export default function ShowJumbo(){
    return (
      
        <div className="flex flex-row justify-between items-center mt-40 px-50  mb-15">


          <div className="flex flex-col">

            <h4 className="text-8xl text-white font-bold">Creative UI</h4>
            <h4 className="text-8xl text-[#00ADB5] font-bold">Designer</h4>
            <div className="flex flex-row gap-5 mt-10">

                <button className="bg-[#00ADB5] rounded-2xl px-5 py-1 text-white font-bold">Hire Me</button>
                <button className="bg-[#3e4247] rounded-2xl px-7 py-1 text-gray-200 font-bold">Download Cv</button>

            </div>


          </div>

          <img src="./image1.png" width={350} height={350} className="object-cover" />

        </div>

    );
}