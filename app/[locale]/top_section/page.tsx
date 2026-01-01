"use client";

import { useTranslations } from "next-intl";

type Props = {
  locale: string;
  setLocale: (value: string) => void;
};

export default function ShowTopSection({ locale, setLocale }: Props) {
  const t = useTranslations();

  function scrollToPage(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row px-10 py-5 justify-between items-center">
        <h4 className="text-gray-400 font-bold text-md">SaulDesign</h4>

        <div className="flex flex-row gap-5 text-gray-300 font-semibold text-md items-center">
          {/* Language Select */}
          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value)}
            className="bg-transparent border border-gray-500 rounded px-2 py-1 text-gray-300"
          >
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="es">ES</option>
          </select>

          <h4 className="cursor-pointer" onClick={() => scrollToPage("one")}>
            {t("home")}
          </h4>
          <h4 className="cursor-pointer" onClick={() => scrollToPage("two")}>
            {t("about")}
          </h4>
          <h4 className="cursor-pointer" onClick={() => scrollToPage("three")}>
            {t("works")}
          </h4>
          <h4 className="cursor-pointer" onClick={() => scrollToPage("four")}>
            {t("contact")}
          </h4>
        </div>
      </div>

      <div className="w-full h-0.5 bg-gray-600"></div>
    </div>
  );
}
