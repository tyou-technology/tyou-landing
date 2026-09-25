import { useTranslations } from "next-intl"

export function LandingVersus() {
  const t = useTranslations("Landing.versus")
  const factory = t.raw("factory.items") as string[]
  const tyou = t.raw("tyou.items") as string[]

  return (
    <section className="lp-sunken lp-section">
      <div className="lp-wrap">
        <p className="lp-eyebrow lp-eyebrow--muted">{t("eyebrow")}</p>
        <div className="lp-vs">
          <div className="lp-vs-card lp-vs-card--factory">
            <p className="lp-vs-label">{t("factory.label")}</p>
            <ul className="lp-list">
              {factory.map((item) => (
                <li key={item}>
                  <span aria-hidden="true" className="lp-bullet" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lp-vs-divider" aria-hidden="true">
            <span />
          </div>
          <div className="lp-vs-card lp-vs-card--tyou ty-chip-corner">
            <p className="lp-vs-label">{t("tyou.label")}</p>
            <ul className="lp-list">
              {tyou.map((item) => (
                <li key={item}>
                  <span aria-hidden="true" className="lp-bullet" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
