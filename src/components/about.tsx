"use client"

import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { useTranslations } from "next-intl"

export function About() {
  const t = useTranslations("About")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    t("values.innovation"),
    t("values.agile"),
    t("values.transparent"),
    t("values.quality"),
    t("values.partnerships"),
    t("values.improvement"),
  ]

  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/5 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full border-l border-border/50" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="text-primary text-sm font-mono tracking-wider uppercase">{t("subtitle")}</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
                {t("title")}
              </h2>
            </div>

            <div className="space-y-4 text-lg text-muted leading-relaxed">
              <p className="text-pretty">
                {t("description1")}
              </p>
              <p className="text-pretty">
                {t("description2")}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Stats & Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "4+", label: t("stats.experience"), offset: "" },
                { value: "3+", label: t("stats.team"), offset: "mt-12" },
                { value: "4+", label: t("stats.companies"), offset: "-mt-6" },
                { value: "100%", label: t("stats.commitment"), offset: "mt-6" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className={`bg-card border border-border p-8 rounded-lg ${stat.offset}`}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: "#00a5b4" }}
                >
                  <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Decorative element */}
            <motion.div
              className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-3xl rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
