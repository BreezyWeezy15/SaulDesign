"use client";

import { NextIntlClientProvider } from "next-intl";
import { useState } from "react";

import ShowTopSection from "./[locale]/top_section/page";
import ShowJumbo from "./[locale]/jumbo/page";
import ShowSecondJumbo from "./[locale]/second_jumbo/page";
import ShowThirdJumbo from "./[locale]/third_jumbo/page";
import ShowContact from "./[locale]/contact/page";
import ShowFooter from "./[locale]/footer/page";

import frMessages from "../localization/fr.json";
import esMessages from "../localization/es.json";
import enMessages from "../localization/en.json";

export default function Home() {
  const [locale, setLocale] = useState("en");

  const messagesMap: any = {
    en: enMessages,
    fr: frMessages,
    es: esMessages,
  };

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messagesMap[locale]}
    >
      <div className="flex flex-col min-h-screen w-full bg-[#222831]">
        <ShowTopSection locale={locale} setLocale={setLocale} />

        <div className="w-full h-[0.5px] bg-gray-500"></div>
        <ShowJumbo locale={locale} setLocale={setLocale} />
        <div className="w-full h-[0.5px] bg-gray-500 mb-16"></div>
        <ShowSecondJumbo />
        <div className="w-full h-[0.5px] bg-gray-500 mb-16"></div>
        <ShowThirdJumbo />
        <div className="w-full h-[0.5px] bg-gray-500 mb-16"></div>
        <ShowContact />
        <div className="w-full h-[0.5px] bg-gray-500 mb-16"></div>
        <ShowFooter />
      </div>
    </NextIntlClientProvider>
  );
}
