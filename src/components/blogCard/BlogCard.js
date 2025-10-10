import { useTranslation } from "react-i18next";
import "./BlogCard.scss";

export default function BlogCard({blog, isDark}) {
  const { t } = useTranslation();

  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div onClick={() => openUrlInNewTab(blog.url, blog.title)}>
      <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
        <a
          className={
            isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"
          }
          href="#blog"
        >
          <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
            {t(blog.title)}
          </h3>
          <p className={isDark ? "small-dark small" : "small"}>
            {t(blog.description)}
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
}
