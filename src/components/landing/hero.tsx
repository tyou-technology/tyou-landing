import { useTranslations } from "next-intl"

const tapeWidths = [38, 26, 14]

export function LandingHero() {
  const t = useTranslations("Landing.hero")
  const tape = t.raw("tape") as string[]

  return (
    <section id="topo" className="lp-hero ty-glow ty-glow-drift">
      <img src="/landing/wallpaper-desktop.png" alt="" aria-hidden="true" className="lp-bg-img" />
      <div className="lp-hero-grid">
        <div className="lp-hero-copy lp-rise">
          <p className="lp-kicker ty-underscore-inline">{t("kicker")}</p>
          <h1>{t("title")}</h1>
          <p className="lp-hero-lead">{t("lead")}</p>
          <div className="lp-hero-actions">
            <a href="#conversa" className="ty-btn ty-btn--lg ty-btn--primary ty-btn--chamfer">
              {t("ctaPrimary")}
            </a>
            <a href="#caso" className="ty-btn ty-btn--lg lp-btn-ghost">
              {t("ctaSecondary")}
            </a>
          </div>
        </div>

        <div className="lp-tape" aria-hidden="true">
          {tape.map((mark, index) => (
            <div key={mark}>
              <i style={{ width: tapeWidths[index] }} />
              <span>{mark}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
