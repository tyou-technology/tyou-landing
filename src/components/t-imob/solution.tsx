"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2 } from "lucide-react"
import { useTranslations } from "next-intl"

export function SolutionSection() {
  const t = useTranslations("TImob.Solution")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    t("features.0"),
    t("features.1"),
    t("features.2"),
    t("features.3"),
    t("features.4"),
    t("features.5"),
  ]

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#00a5b4] text-sm font-medium tracking-wide uppercase mb-4 block">{t("badge")}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t("title")}</h2>
            <p className="text-lg text-muted mb-6 leading-relaxed">
              {t("description1")}
            </p>
            <p className="text-lg text-muted leading-relaxed">
              {t("description2")}
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-[#00a5b4]/20 to-transparent rounded-2xl p-8 border border-[#00a5b4]/30">
              <div className="space-y-4">
                {features.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-background/80 backdrop-blur rounded-lg p-4 flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#00a5b4] flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
