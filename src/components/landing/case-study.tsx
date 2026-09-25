import { useTranslations } from "next-intl"

type Step = { label: string; title: string; body: string }

export function LandingCaseStudy() {
  const t = useTranslations("Landing.case")
  const steps = t.raw("steps") as Step[]

  return (
    <section id="caso" className="lp-case lp-dark lp-section">
      <img src="/landing/post-tech-dark.png" alt="" aria-hidden="true" className="lp-bg-img" />
      <div className="lp-wrap">
        <p className="lp-eyebrow lp-eyebrow--inverse">{t("eyebrow")}</p>
        <div className="lp-grid-2">
          <div style={{ minWidth: 0 }}>
            <p className="lp-case-name">{t("name")}</p>
            <h2>{t("title")}</h2>
            <p className="lp-case-lead">{t("lead")}</p>
          </div>
          <ol className="lp-case-steps">
            {steps.map((step) => (
              <li key={step.label}>
                <p className="lp-case-step-label">{step.label}</p>
                <p className="lp-case-step-title">{step.title}</p>
                <p className="lp-case-step-body">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
