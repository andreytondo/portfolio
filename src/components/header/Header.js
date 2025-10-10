import { useContext } from "react";
import Headroom from "react-headroom";
import { useTranslation } from 'react-i18next';
import StyleContext from "../../contexts/StyleContext";
import {
  achievementSection,
  blogSection,
  greeting,
  openSource,
  resumeSection,
  skillsSection,
  talkSection,
  workExperiences
} from "../../portfolio";
import LanguageSelector from "../languageSelector/languageSelector";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Header.scss";

function Header() {
  const {isDark} = useContext(StyleContext);
  const { t } = useTranslation();
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/portfolio" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{t(greeting.username)}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">{t("menu.skills")}</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">{t("menu.experience")}</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">{t("menu.opensource")}</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">{t("menu.achievements")}</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">{t("menu.blogs")}</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">{t("menu.talks")}</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume">{t("menu.resume")}</a>
            </li>
          )}
          <li>
            <a href="#contact">{t("menu.contact")}</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <LanguageSelector />
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
