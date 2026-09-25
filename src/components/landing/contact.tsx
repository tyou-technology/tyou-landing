"use client"

import { useState, type FormEvent } from "react"
import { useTranslations } from "next-intl"
import { SALES_EMAIL, SALES_WHATSAPP_URL } from "@/src/utils/constants"

export function LandingContact() {
  const t = useTranslations("Landing.contact")
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = new FormData(e.currentTarget)
    const field = (name: string) => String(data.get(name) ?? "").trim() || "-"

    const text = t("whatsappMessage", {
      name: field("nome"),
      company: field("empresa"),
      contact: field("contato"),
      problem: field("problema"),
    })

    window.open(`${SALES_WHATSAPP_URL}?text=${encodeURIComponent(text)}`, "_blank")
    setSent(true)
  }

  return (
    <section id="conversa" className="lp-contact lp-dark ty-glow ty-glow-br">
      <div className="lp-wrap lp-contact-grid">
        <div style={{ minWidth: 0 }}>
          <p className="lp-kicker ty-underscore-inline">{t("kicker")}</p>
          <h2>{t("title")}</h2>
          <p className="lp-contact-lead">{t("lead")}</p>
          <div className="lp-contact-links">
            <a href={SALES_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <i aria-hidden="true" />
              {t("whatsapp")}
            </a>
            <a href={`mailto:${SALES_EMAIL}`}>
              <i aria-hidden="true" />
              {SALES_EMAIL}
            </a>
          </div>
        </div>

        <div className="lp-contact-panel">
          {sent ? (
            <div className="lp-sent" role="status">
              <i aria-hidden="true" />
              <p className="lp-sent-title">{t("sent.title")}</p>
              <p className="lp-sent-body">{t("sent.body")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="lp-form">
              <div className="ty-field">
                <label className="ty-field__label" htmlFor="ty-nome">{t("form.name")}</label>
                <input className="ty-input" id="ty-nome" name="nome" type="text" autoComplete="name" required />
              </div>
              <div className="ty-field">
                <label className="ty-field__label" htmlFor="ty-empresa">{t("form.company")}</label>
                <input className="ty-input" id="ty-empresa" name="empresa" type="text" autoComplete="organization" required />
              </div>
              <div className="ty-field">
                <label className="ty-field__label" htmlFor="ty-contato">{t("form.contact")}</label>
                <input className="ty-input" id="ty-contato" name="contato" type="text" required />
              </div>
              <div className="ty-field">
                <label className="ty-field__label" htmlFor="ty-problema">{t("form.problem")}</label>
                <textarea
                  className="ty-textarea"
                  id="ty-problema"
                  name="problema"
                  rows={4}
                  placeholder={t("form.problemPlaceholder")}
                />
              </div>
              <button className="ty-btn ty-btn--lg ty-btn--primary ty-btn--chamfer ty-btn--block" type="submit">
                {t("form.submit")}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
