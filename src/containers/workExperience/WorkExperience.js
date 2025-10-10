import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Fade } from "react-reveal";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import StyleContext from "../../contexts/StyleContext";
import { workExperiences } from "../../portfolio";
import "./WorkExperience.scss";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  const { t } = useTranslation();
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">{t("work.title")}</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: t(card.company),
                        desc: t(card.desc),
                        date: t(card.date),
                        companylogo: t(card.companylogo),
                        role: t(card.role),
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
