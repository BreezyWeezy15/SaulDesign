
const variants = [
    {
        "id" : 1,
        "category" : "All"
    },
     {
        "id" : 2,
        "category" : "UI"
    },
     {
        "id" : 3,
        "category" : "UX"
    },
     {
        "id" : 4,
        "category" : "Web Design"
    },
]

const images = [
    {
        "id" : 1,
        "image" : "./img1.png"
    },
    {
        "id" : 2,
        "image" : "./img2.png"
    },
    {
        "id" : 3,
        "image" : "./img3.png"
    },
];

export default function ShowThirdJumbo(){
    return (
      
        <div className="flex flex-col px-50 py-30 mb-15 bg-cover"
             style={ { backgroundImage : "url('./sample_bg.png')" } }>


             <h4 className="text-white text-4xl font-bold">My Recent <span
             className="text-[#00ADB5] text-4xl font-bold">Works</span></h4>*

             <div className="flex flex-row gap-5">

                {variants.map((e) => (
                 
                   <h4 
                   key={e.id}
                   className="bg-[#00ADB5] text-white font-bold px-5 py-1 rounded-2xl">{e.category}</h4>

                ))}

             </div>

            <div className="flex flex-row gap-5 mt-15 bg-transparent">

                {images.map((e) => (
                 
                   <img src={e.image} height={100} className="w-full object-cover p-3 rounded-2xl"/>

                ))}

             </div>


        </div>

    );
}