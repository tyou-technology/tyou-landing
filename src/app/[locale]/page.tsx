import "@/src/styles/tyou-ds.css"
import "@/src/components/landing/landing.css"
import { LandingHeader } from "@/src/components/landing/header"
import { LandingHero } from "@/src/components/landing/hero"
import { LandingIdea } from "@/src/components/landing/idea"
import { LandingVersus } from "@/src/components/landing/versus"
import { LandingProcess } from "@/src/components/landing/process"
import { LandingCaseStudy } from "@/src/components/landing/case-study"
import { LandingAudience } from "@/src/components/landing/audience"
import { LandingPortfolio } from "@/src/components/landing/portfolio"
import { LandingFaq } from "@/src/components/landing/faq"
import { LandingContact } from "@/src/components/landing/contact"
import { LandingFooter } from "@/src/components/landing/footer"
import { useTranslations } from "next-intl"

export default function Home() {
  const t = useTranslations("Landing.meta")

  return (
    <div className="ty-landing">
      <a href="#conversa" className="ty-skip-link">
        {t("skipLink")}
      </a>
      <LandingHeader />
      <main>
        <LandingHero />
        <LandingIdea />
        <LandingVersus />
        <LandingProcess />
        <LandingCaseStudy />
        <LandingAudience />
        <LandingPortfolio />
        <LandingFaq />
        <LandingContact />
      </main>
      <LandingFooter />
    </div>
  )
}
