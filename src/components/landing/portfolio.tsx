import { useTranslations } from "next-intl"

type Project = {
  key: "recruiting" | "brasoul" | "ra" | "oliveto"
  title?: string
  logo?: string
  href: string
}

const projects: Project[] = [
  { key: "recruiting", href: "#caso" },
  { key: "brasoul", title: "Brasoul Beauty Care", logo: "/projects/brasoul.png", href: "https://www.brasoulbeautycare.com/" },
  { key: "ra", title: "RA Automóveis", logo: "/projects/raautomoveis.png", href: "https://www.raautomoveis.com.br/" },
  { key: "oliveto", title: "Oliveto Contabilidade", logo: "/projects/oliveto.png", href: "https://olivetocontabilidade.com/" },
]

export function LandingPortfolio() {
  const t = useTranslations("Landing.portfolio")

  return (
    <section id="portfolio" className="lp-page lp-section">
      <div className="lp-wrap">
        <div className="lp-portfolio-head">
          <p className="lp-eyebrow">{t("eyebrow")}</p>
          <p>{t("aside")}</p>
        </div>
        <div className="lp-portfolio-grid">
          {projects.map((project) => {
            const isCase = project.href.startsWith("#")
            const title = project.title ?? t(`items.${project.key}.title`)

            return (
              <a
                key={project.key}
                href={project.href}
                className="lp-project"
                {...(isCase ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              >
                <span className="lp-project-logo">
                  {project.logo ? (
                    <img src={project.logo} alt={title} />
                  ) : (
                    <span className="lp-project-wordmark">{title}</span>
                  )}
                </span>
                <span className="lp-project-body">
                  <span className="lp-project-category">{t(`items.${project.key}.category`)}</span>
                  <span className="lp-project-title">{title}</span>
                  <span className="lp-project-desc">{t(`items.${project.key}.description`)}</span>
                  <span className="lp-project-link">
                    {isCase ? t("viewCase") : t("viewSite")}
                    <i aria-hidden="true" />
                  </span>
                </span>
              </a>
            )
          })}
        </div>
        <p className="lp-portfolio-note">{t("note")}</p>
      </div>
    </section>
  )
}
