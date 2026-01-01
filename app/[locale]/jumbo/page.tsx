
"use client";
import { useTranslations } from "next-intl";



export default function ShowJumbo() {

  const t = useTranslations();

  return (
    <section id="one">
      <div className="flex flex-row justify-between items-center mt-40 px-50  mb-15">
        <div className="flex flex-col">
          <h4 className="text-8xl text-white font-bold">{ t("creative")}</h4>
          <h4 className="text-8xl text-[#00ADB5] font-bold">{ t("design")}</h4>
          <div className="flex flex-row gap-5 mt-10">
            <button className="bg-[#00ADB5] rounded-2xl px-5 py-1 text-white font-bold">
              { t("hire")}
            </button>
            <button className="bg-[#3e4247] rounded-2xl px-7 py-1 text-gray-200 font-bold">
              { t("download")}
            </button>
          </div>
        </div>

        <img
          src="./image1.png"
          width={350}
          height={350}
          className="object-cover"
        />
      </div>
    </section>
  );
}
