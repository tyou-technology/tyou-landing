"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { useTranslations } from "next-intl"
import { PHONE_NUMBER } from "@/src/utils/constants"
import Link from "next/link"

export function TImobHero() {
  const t = useTranslations("TImob.Hero")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-[#00a5b4]/5 to-background" />
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-[#00a5b4]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#00a5b4]/10 border border-[#00a5b4]/30 rounded-full px-4 py-2 mb-8"
          >
            <Sparkles className="h-4 w-4 text-[#00a5b4]" />
            <span className="text-[#00a5b4] text-sm font-medium">{t("badge")}</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            dangerouslySetInnerHTML={{ __html: t.raw("title") }}
          />

          <motion.p
            className="text-xl md:text-2xl text-muted mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {t("description")}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href={`https://wa.me/${PHONE_NUMBER}?text=${t("ctaStartLinkMessage")}}`}>
              <Button
                size="lg"
                className="bg-[#00a5b4] hover:bg-[#00a5b4]/90 text-white cursor-pointer px-8 h-14 text-lg"
              >
                {t("ctaStart")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                disabled
                variant="outline"
                className="border-[#00a5b4] text-[#00a5b4] hover:bg-[#00a5b4] hover:text-white cursor-pointer px-8 h-14 text-lg bg-transparent disabled:bg-transparent disabled:text-gray-400 disabled:border-gray-400"
              >
                {t("ctaDemo")}
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats - simplified and centered */}
          <motion.div
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {[
              { value: "24/7", label: t("stats.availability") },
              { value: "3x", label: t("stats.leads") },
              { value: "80%", label: t("stats.saved") },
            ].map((stat, index) => (
              <motion.div key={index} className="text-center" whileHover={{ scale: 1.1 }}>
                <div className="text-4xl md:text-5xl font-bold text-[#00a5b4] mb-2">{stat.value}</div>
                <div className="text-sm text-muted uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
