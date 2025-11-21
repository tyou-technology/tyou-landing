"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useTranslations } from "next-intl"

export function KPISection() {
  const t = useTranslations("TImob.KPIs")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const kpis = [
    { value: "24/7", label: t("items.availability") },
    { value: "100%", label: t("items.coverage") },
    { value: "80%", label: t("items.saved") },
    { value: "3x", label: t("items.leads") },
  ]

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t("title")}</h2>
          <p className="text-lg text-muted leading-relaxed">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {kpis.map((kpi, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-5xl md:text-6xl font-bold text-[#00a5b4] mb-2">{kpi.value}</div>
              <div className="text-muted text-sm uppercase tracking-wide">{kpi.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
