"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { useTranslations } from "next-intl"
import { PHONE_NUMBER } from "@/src/utils/constants"
import Link from "next/link"

export function CTASection() {
  const t = useTranslations("TImob.CTA")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#00a5b4]/10 to-transparent border border-[#00a5b4]/30 rounded-2xl p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t("title")}</h2>
          <p className="text-lg text-muted mb-10 leading-relaxed">
            {t("description")}
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={`https://wa.me/${PHONE_NUMBER}?text=${t("ctaLinkMessage")}}`}>
            <Button size="lg" className="bg-[#00a5b4] hover:bg-[#00a5b4]/90 text-white cursor-pointer px-10">
              {t("button")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
