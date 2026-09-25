import { useTranslations } from "next-intl"

export function LandingAudience() {
  const t = useTranslations("Landing.audience")
  const yes = t.raw("yes") as string[]
  const no = t.raw("no") as string[]

  return (
    <section id="quem" className="lp-audience lp-page lp-section">
      <div className="lp-wrap">
        <p className="lp-eyebrow">{t("eyebrow")}</p>
        <div className="lp-audience-grid">
          <div>
            <h2>{t("yesTitle")}</h2>
            <ul className="lp-list">
              {yes.map((item) => (
                <li key={item}>
                  <span aria-hidden="true" className="lp-bullet" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lp-audience-no">
            <h2>{t("noTitle")}</h2>
            <ul className="lp-list">
              {no.map((item) => (
                <li key={item}>
                  <span aria-hidden="true" className="lp-bullet" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="lp-audience-note">{t("note")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
