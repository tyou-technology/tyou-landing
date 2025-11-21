"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Phone,
  Calendar,
  MessageSquare,
  Clock,
  TrendingUp,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Bot,
  Zap,
} from "lucide-react"
import { Header } from "@/src/components/header"
import { Footer } from "@/src/components/footer"
import { Button } from "@/src/components/ui/button"
import { useTranslations } from "next-intl"
import { TImobHero } from "@/src/components/t-imob/hero"
import { ProblemSection } from "@/src/components/t-imob/problem"
import { SolutionSection } from "@/src/components/t-imob/solution"
import { CTASection } from "@/src/components/t-imob/cta"
import { FeaturesSection } from "@/src/components/t-imob/features"
import { HowItWorksSection } from "@/src/components/t-imob/how-it-works"
import { KPISection } from "@/src/components/t-imob/kpi"


export default function TImobPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <TImobHero />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <KPISection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </div>
  )
}
