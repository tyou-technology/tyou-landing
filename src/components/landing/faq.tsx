import { useTranslations } from "next-intl"

type Question = { q: string; a: string }

export function LandingFaq() {
  const t = useTranslations("Landing.faq")
  const items = t.raw("items") as Question[]

  return (
    <section className="lp-faq lp-sunken lp-section">
      <div className="lp-wrap">
        <p className="lp-eyebrow lp-eyebrow--muted">{t("eyebrow")}</p>
        <div className="lp-faq-list">
          {items.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
