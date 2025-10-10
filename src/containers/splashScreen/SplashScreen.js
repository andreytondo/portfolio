import { useContext } from "react";
import { useTranslation } from "react-i18next";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import { greeting, splashScreen } from "../../portfolio";
import "./SplashScreen.css";

export default function SplashScreen() {
  const { t } = useTranslation();
  const {isDark} = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      <div className="splash-title-container">
        <span className="grey-color"> &lt;</span>
        <span className="splash-title">{t(greeting.username)}</span>
        <span className="grey-color">/&gt;</span>
      </div>
    </div>
  );
}
