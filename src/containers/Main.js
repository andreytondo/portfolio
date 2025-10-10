import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import LanguageContext from "../contexts/LanguageContext";
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import i18n from "../i18n";
import { splashScreen } from "../portfolio";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Education from "./education/Education";
import Greeting from "./greeting/Greeting";
import "./Main.scss";
import Podcast from "./podcast/Podcast";
import Profile from "./profile/Profile";
import Projects from "./projects/Projects";
import StackProgress from "./skillProgress/skillProgress";
import Skills from "./skills/Skills";
import SplashScreen from "./splashScreen/SplashScreen";
import StartupProject from "./StartupProjects/StartupProject";
import Talks from "./talks/Talks";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import WorkExperience from "./workExperience/WorkExperience";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [language, setLanguage] = useLocalStorage("language", "en");
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  // when app starts, sync i18n with stored language
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const changeLanguage = (code) => {
    setLanguage(code);       // update localStorage + state
    i18n.changeLanguage(code); // tell i18n to switch
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark, changeTheme }}>
        <LanguageContext.Provider value={{ language, changeLanguage }}>
          {isShowingSplashAnimation && splashScreen.enabled ? (
            <SplashScreen />
          ) : (
            <>
              <Header />
              <Greeting />
              <Skills />
              <StackProgress />
              <Education />
              <WorkExperience />
              <Projects />
              <StartupProject />
              <Achievement />
              <Blogs />
              <Talks />
              <Twitter />
              <Podcast />
              <Profile />
              <Footer />
              <ScrollToTopButton />
            </>
          )}
        </LanguageContext.Provider>
      </StyleProvider>
    </div>
  );
};

export default Main;
