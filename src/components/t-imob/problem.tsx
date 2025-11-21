"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Phone, Clock, Users, MessageSquare } from "lucide-react"
import { useTranslations } from "next-intl"

export function ProblemSection() {
  const t = useTranslations("TImob.Problem")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const problems = [
    { icon: Phone, text: t("items.missedCalls") },
    { icon: Clock, text: t("items.capture") },
    { icon: Users, text: t("items.waste") },
    { icon: MessageSquare, text: t("items.slow") },
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
          <p className="text-lg text-muted leading-relaxed">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="bg-background border border-border rounded-lg p-8 hover:border-[#00a5b4] transition-all"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <problem.icon className="h-10 w-10 text-[#00a5b4] mb-4" />
              <p className="text-lg text-foreground">{problem.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
