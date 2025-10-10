import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Fade } from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import StyleContext from "../../contexts/StyleContext";
import { contactInfo, illustration } from "../../portfolio";
import "./Contact.scss";

export default function Contact() {
  const { t } = useTranslation();
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{t(contactInfo.title)}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {t(contactInfo.subtitle)}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + t(contactInfo.number)}
                  >
                    {t(contactInfo.number)}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + t(contactInfo.email_address)}
              >
                {t(contactInfo.email_address)}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
