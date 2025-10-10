import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import pt from "./locales/pt/translation.json";

const resources = {
  en: {translation: en},
  pt: {translation: pt}
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en"
});

const userLang = navigator?.language || navigator?.userLanguage;
const defaultLang = userLang?.split("-")[0];

if (["en", "pt"].indexOf(defaultLang) === -1) {
  i18n.changeLanguage("en");
} else {
  i18n.changeLanguage(defaultLang);
}

export default i18n;
