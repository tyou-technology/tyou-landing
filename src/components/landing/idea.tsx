import { useTranslations } from "next-intl"

export function LandingIdea() {
  const t = useTranslations("Landing.idea")

  return (
    <section id="ideia" className="lp-idea lp-page lp-section">
      <div className="lp-wrap">
        <p className="lp-eyebrow">{t("eyebrow")}</p>
        <div className="lp-grid-2">
          <h2 className="lp-h2">{t("title")}</h2>
          <div className="lp-idea-body">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <p>{t.rich("p3", { strong: (chunks) => <strong>{chunks}</strong> })}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
