"use client"; // Có thể thêm dòng này để rõ ràng hơn

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(LanguageDetector) // Chỉ dùng ở client
  .use(HttpApi)          // Chỉ dùng ở client
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "vi", "ko", "ja"],
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    detection: {
      order: ["cookie", "htmlTag"],
      caches: ["cookie"],
    },
    load: 'languageOnly',
    react: {
      useSuspense: false,
    },
  });

export default i18n;