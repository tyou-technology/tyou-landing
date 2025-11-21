"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useTranslations } from "next-intl"

export function HowItWorksSection() {
  const t = useTranslations("TImob.HowItWorks")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const steps = [
    { number: "01", title: t("steps.1.title"), description: t("steps.1.description") },
    { number: "02", title: t("steps.2.title"), description: t("steps.2.description") },
    { number: "03", title: t("steps.3.title"), description: t("steps.3.description") },
    { number: "04", title: t("steps.4.title"), description: t("steps.4.description") },
    { number: "05", title: t("steps.5.title"), description: t("steps.5.description") },
  ]

  return (
    <section ref={ref} className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t("title")}</h2>
          <p className="text-lg text-muted leading-relaxed">{t("description")}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex gap-6 mb-8 last:mb-0"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {index < steps.length - 1 && <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-[#00a5b4]/30" />}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#00a5b4] flex items-center justify-center text-white font-bold text-lg z-10 relative">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 bg-background border border-border rounded-lg p-6 hover:border-[#00a5b4] transition-all">
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
