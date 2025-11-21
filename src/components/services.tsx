"use client"

import { Code, Smartphone, Cloud, Shield, Zap, Users } from "lucide-react"
import { Card } from "@/src/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { useTranslations } from "next-intl"

export function Services() {
  const t = useTranslations("Services")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Code,
      title: t("items.customDev.title"),
      description: t("items.customDev.description"),
    },
    {
      icon: Smartphone,
      title: t("items.mobileApps.title"),
      description: t("items.mobileApps.description"),
    },
    {
      icon: Cloud,
      title: t("items.cloud.title"),
      description: t("items.cloud.description"),
    },
    {
      icon: Shield,
      title: t("items.security.title"),
      description: t("items.security.description"),
    },
    {
      icon: Zap,
      title: t("items.api.title"),
      description: t("items.api.description"),
    },
    {
      icon: Users,
      title: t("items.consulting.title"),
      description: t("items.consulting.description"),
    },
  ]

  return (
    <section id="services" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-mono tracking-wider uppercase">{t("subtitle")}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">{t("title")}</h2>
          <p className="text-lg text-muted leading-relaxed text-pretty">
            {t("description")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                <Card className="group p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 h-full">
                  <div className="mb-6">
                    <motion.div
                      className="inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="w-6 h-6" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted leading-relaxed text-pretty">{service.description}</p>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
