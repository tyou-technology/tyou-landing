import { useLocale, useTranslations } from "next-intl"
import { Link, locales } from "@/src/i18n/navigation"
import { CORE_APP_PATH } from "@/src/utils/constants"
import { LandingMobileMenu } from "./mobile-menu"

const sections = ["idea", "process", "portfolio", "case", "audience"] as const

const anchors: Record<(typeof sections)[number], string> = {
  idea: "#ideia",
  process: "#processo",
  portfolio: "#portfolio",
  case: "#caso",
  audience: "#quem",
}

function LocaleSwitch() {
  const t = useTranslations("Landing")
  const locale = useLocale()

  return (
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
  )
}

export function LandingHeader() {
  const t = useTranslations("Landing")

  const sectionLinks = sections.map((section) => (
    <a key={section} href={anchors[section]}>
      {t(`nav.${section}`)}
    </a>
  ))

  return (
    <header className="lp-header">
      <nav className="lp-nav">
        <a href="#topo" className="lp-logo" aria-label={t("meta.homeLabel")}>
          <img src="/landing/tyou-wordmark-white.png" alt="T_YOU" />
        </a>
        <div className="lp-nav-links">{sectionLinks}</div>
        <div className="lp-nav-cta">
          <LocaleSwitch />
          <a href={CORE_APP_PATH} className="ty-btn ty-btn--md ty-btn--primary ty-btn--chamfer">
            {t("nav.signIn")}
          </a>
        </div>
        <LandingMobileMenu openLabel={t("nav.menuOpen")} closeLabel={t("nav.menuClose")}>
          <div className="lp-menu-links">{sectionLinks}</div>
          <div className="lp-menu-footer">
            <LocaleSwitch />
            <a
              href={CORE_APP_PATH}
              className="ty-btn ty-btn--lg ty-btn--primary ty-btn--chamfer ty-btn--block"
            >
              {t("nav.signIn")}
            </a>
          </div>
        </LandingMobileMenu>
      </nav>
    </header>
  )
}
