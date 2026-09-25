import { useLocale, useTranslations } from "next-intl"
import { Link, locales } from "@/src/i18n/navigation"

const sections = ["idea", "process", "portfolio", "case", "audience"] as const

const anchors: Record<(typeof sections)[number], string> = {
  idea: "#ideia",
  process: "#processo",
  portfolio: "#portfolio",
  case: "#caso",
  audience: "#quem",
}

export function LandingHeader() {
  const t = useTranslations("Landing")
  const locale = useLocale()

  return (
    <header className="lp-header">
      <nav className="lp-nav">
        <a href="#topo" className="lp-logo" aria-label={t("meta.homeLabel")}>
          <img src="/landing/tyou-wordmark-white.png" alt="T_YOU" />
        </a>
        <div className="lp-nav-links">
          {sections.map((section) => (
            <a key={section} href={anchors[section]}>
              {t(`nav.${section}`)}
            </a>
          ))}
        </div>
        <div className="lp-nav-cta">
          <div className="lp-locale" role="group" aria-label={t("meta.language")}>
            {locales.map((code, index) => (
              <span key={code} style={{ display: "contents" }}>
                {index > 0 && <span aria-hidden="true">/</span>}
                <Link href="/" locale={code} aria-current={code === locale}>
                  {code}
                </Link>
              </span>
            ))}
          </div>
          <a href="#conversa" className="ty-btn ty-btn--md ty-btn--primary ty-btn--chamfer">
            {t("nav.cta")}
          </a>
        </div>
      </nav>
    </header>
  )
}
