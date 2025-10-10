import { useContext } from "react";
import emoji from "react-easy-emoji";
import { useTranslation } from "react-i18next";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import "./Footer.scss";

export default function Footer() {
  const { t } = useTranslation();
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {/* <small>{emoji(t("footer.madeby"))}</small> */}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          <small>{emoji(t("footer.copy"))}</small>
        </p>
      </div>
    </Fade>
  );
}
