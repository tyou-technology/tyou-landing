import { useTranslations } from "next-intl"

type Step = { title: string; body: string }

export function LandingProcess() {
  const t = useTranslations("Landing.process")
  const steps = t.raw("steps") as Step[]

  return (
    <section id="processo" className="lp-process lp-page lp-section">
      <div className="lp-wrap">
        <p className="lp-eyebrow">{t("eyebrow")}</p>
        <h2 className="lp-h2">{t("title")}</h2>
        <div className="lp-steps">
          {steps.map((step, index) => (
            <div key={step.title} className="lp-step">
              <p className={index === 0 ? "ty-numeral ty-numeral-accent" : "ty-numeral"}>
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
