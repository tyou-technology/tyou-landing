"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Phone, MessageSquare, Calendar, Users, TrendingUp, Clock } from "lucide-react"
import { useTranslations } from "next-intl"

export function FeaturesSection() {
  const t = useTranslations("TImob.Features")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: Phone,
      title: t("items.capture.title"),
      description: t("items.capture.description"),
    },
    {
      icon: MessageSquare,
      title: t("items.conversations.title"),
      description: t("items.conversations.description"),
    },
    {
      icon: Calendar,
      title: t("items.scheduling.title"),
      description: t("items.scheduling.description"),
    },
    {
      icon: Users,
      title: t("items.qualification.title"),
      description: t("items.qualification.description"),
    },
    {
      icon: TrendingUp,
      title: t("items.crm.title"),
      description: t("items.crm.description"),
    },
    {
      icon: Clock,
      title: t("items.time.title"),
      description: t("items.time.description"),
    },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-background border border-border rounded-lg p-8 hover:border-[#00a5b4] transition-all cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.98 }}
            >
              <feature.icon className="h-12 w-12 text-[#00a5b4] mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
