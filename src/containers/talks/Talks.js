import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Fade } from "react-reveal";
import TalkCard from "../../components/talkCard/TalkCard";
import StyleContext from "../../contexts/StyleContext";
import { talkSection } from "../../portfolio";
import "./Talks.scss";

export default function Talks() {
  const { t } = useTranslation();
  const {isDark} = useContext(StyleContext);
  if (!talkSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="talks">
        <div className="talk-header">
          <h1 className="talk-header-title">{t(talkSection.title)}</h1>
          <p
            className={
              isDark
                ? "dark-mode talk-header-subtitle"
                : "subTitle talk-header-subtitle"
            }
          >
            {t(talkSection.subtitle)}
          </p>
          {talkSection.talks.map((talk, i) => {
            return (
              <TalkCard
                key={i}
                talkDetails={{
                  title: t(talk.title),
                  subtitle: t(talk.subtitle),
                  slides_url: t(talk.slides_url),
                  event_url: t(talk.event_url),
                  image: t(talk.image),
                  isDark
                }}
              />
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
