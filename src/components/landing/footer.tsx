import { useTranslations } from "next-intl"
import { SALES_EMAIL, SALES_PHONE_DISPLAY, SALES_WHATSAPP_URL } from "@/src/utils/constants"

export function LandingFooter() {
  const t = useTranslations("Landing.footer")

  return (
    <footer className="lp-footer">
      <div className="lp-footer-grid">
        <div>
          <img src="/landing/tyou-wordmark-gray.png" alt="T_YOU" />
          <p className="lp-footer-tagline">{t("tagline")}</p>
        </div>
        <div className="lp-footer-col">
          <p>{t("contact")}</p>
          <a href={`mailto:${SALES_EMAIL}`}>{SALES_EMAIL}</a>
          <a href={SALES_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            {SALES_PHONE_DISPLAY}
          </a>
        </div>
        <div className="lp-footer-col">
          <p>{t("social")}</p>
          <a href="https://instagram.com/tyoutecnologia" target="_blank" rel="noopener noreferrer">
            @tyoutecnologia
          </a>
          <a href="https://tyou.com.br">tyou.com.br</a>
        </div>
        <div className="lp-footer-col">
          <p>{t("onPage")}</p>
          <a href="#ideia">{t("idea")}</a>
          <a href="#caso">{t("case")}</a>
        </div>
      </div>
      <p className="lp-footer-bottom">{t("bottom")}</p>
    </footer>
  )
}
