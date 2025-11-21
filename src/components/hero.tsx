"use client"

import { Button } from "@/src/components/ui/button"
import { ArrowRight, Code2, Database, Layers } from "lucide-react"
import { GeometricBackground } from "@/src/components/geometric-background"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export function Hero() {
  const t = useTranslations("Hero")

  return (
    <section id={"hero"} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <GeometricBackground />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-sm font-mono tracking-wider uppercase" dangerouslySetInnerHTML={{ __html: t.raw("tagline") }} />
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              dangerouslySetInnerHTML={{ __html: t.raw("title") }}
            />

            <motion.p
              className="text-lg md:text-xl text-muted leading-relaxed max-w-xl text-pretty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t("description")}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.a href={"#services"} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-[#00a5b4] group cursor-pointer transition-colors"
                >
                  {t("ctaServices")}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.a>
              <motion.a href={"#projects"} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-muted text-foreground hover:bg-muted/10 hover:text-[#00a5b4] hover:border-[#00a5b4] bg-transparent cursor-pointer transition-all"
                >
                  {t("ctaProjects")}
                </Button>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8 border-t border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { value: "4+", label: t("stats.projects") },
                { value: "98%", label: t("stats.satisfaction") },
                { value: "24/7", label: t("stats.support") },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Abstract Visual */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-full h-[600px]">
              <motion.div
                className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-primary/30 rounded-lg"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-1/2 right-1/4 w-24 h-24 border-2 border-muted/30 rotate-45"
                animate={{
                  y: [0, 20, 0],
                  rotate: [45, 50, 45],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute bottom-1/4 left-1/3 w-40 h-40 border border-primary/20 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Code-like lines */}
              <div className="absolute top-1/3 left-0 right-0 space-y-4 opacity-20">
                {[0.75, 0.5, 0.66].map((width, index) => (
                  <motion.div
                    key={index}
                    className="h-1 ml-auto"
                    style={{ width: `${width * 100}%`, backgroundColor: index % 2 === 0 ? "#00a5b4" : "#767678" }}
                    initial={{ scaleX: 0, originX: 1 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1 + index * 0.2 }}
                  />
                ))}
              </div>

              {/* Tech icons */}
              {[
                { Icon: Code2, position: "top-1/4 right-1/3", delay: 0.8 },
                { Icon: Database, position: "bottom-1/3 left-1/4", delay: 1 },
                { Icon: Layers, position: "top-1/2 right-1/4", delay: 1.2 },
              ].map(({ Icon, position, delay }, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${position} bg-card p-4 rounded-lg border border-border shadow-lg`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon className="w-8 h-8 text-primary" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
