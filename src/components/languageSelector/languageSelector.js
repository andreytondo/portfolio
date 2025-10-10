import { useContext, useEffect, useRef, useState } from "react";
import LanguageContext from "../../contexts/LanguageContext";
import "./languageSelector.scss";

const languages = [
  {code: "en", label: "EN", flag: "🇺🇸"},
  {code: "pt", label: "PT", flag: "🇧🇷"}
];

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const {language, changeLanguage} = useContext(LanguageContext);

  const toggleDropdown = () => setOpen(!open);

  const handleSelect = lang => {
    changeLanguage(lang.code);
    setOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Get the currently selected language from context
  const selected =
    languages.find(lang => lang.code === language) || languages[0];

  return (
    <div ref={dropdownRef} className="language-selector">
      <button className="language-selector__button" onClick={toggleDropdown}>
        <span className="text-xl">{selected.flag}</span>
        <span>{selected.label}</span>
      </button>

      {open && (
        <div className="language-selector__dropdown">
          {languages.map(lang => (
            <button
              key={lang.code}
              className={`language-selector__option ${
                lang.code === language ? "active" : ""
              }`}
              onClick={() => handleSelect(lang)}
            >
              <span className="text-xl">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
