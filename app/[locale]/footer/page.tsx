"use client";
import { useTranslations } from "next-intl";

const mediaIcons = [
  { id: 1, icon: "./facebook.png" },
  { id: 2, icon: "./instagram.png" },
  { id: 3, icon: "./twitter.png" },
  { id: 4, icon: "./youtube.png" },
];

export default function ShowFooter() {

  const t = useTranslations(); // "Footer" namespace

  const icons = [
    { id: 1, image: "./home.png", value: "home" },
    { id: 2, image: "./user.png", value: "about" },
    { id: 3, image: "./phone.png", value: "contact" },
  ];

  return (
    <section id="four">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row gap-10 items-center">
          {icons.map((e) => (
            <div key={e.id} className="flex flex-row gap-2">
              <img src={e.image} width={15} height={15} className="object-cover" />
              <h4>{t(e.value)}</h4> 
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-5 mt-10 mb-10">
          {mediaIcons.map((e) => (
            <div key={e.id} className="rounded-full bg-gray-700 p-2">
              <img src={e.icon} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
