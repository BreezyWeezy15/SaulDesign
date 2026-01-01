
"use client";
import { useTranslations } from "next-intl";



export default function ShowSecondJumbo() {

   const t = useTranslations();

  return (
    <section id="two">
      <div className="flex flex-row justify-between items-center px-50 gap-50 mb-40">
        <div className="flex flex-col gap-5">
          <h4 className="text-4xl text-white font-bold">
            {t("about")} <span className="text-[#00ADB5] font-bold text-4xl">{ t("me")}</span>
          </h4>
          <h4 className="text-lg text-gray-400 font-medium">
            {t("text")}
          </h4>
        </div>

        <img
          src="./image2.png"
          width={450}
          height={450}
          className="object-cover"
        />
      </div>
      F
    </section>
  );
}
