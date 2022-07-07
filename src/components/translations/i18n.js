import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
 
import { TRANSLATIONS_UA } from "./ua/translations";
import { TRANSLATIONS_EN } from "./en/translations";
import { TRANSLATIONS_RU } from "./ru/translations";
 
i18n
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
   resources: {
     en: {
       translation: TRANSLATIONS_EN
     },
     ua: {
       translation: TRANSLATIONS_UA
     },
     ru: {
        translation: TRANSLATIONS_RU
      }
   }
 });
 
// i18n.changeLanguage("en");

// export default i18n;
