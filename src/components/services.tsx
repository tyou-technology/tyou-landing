"use client"

import { Code, Smartphone, Cloud, Shield, Zap, Users } from "lucide-react"
import { Card } from "@/src/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Tailored solutions built from the ground up to meet your unique business requirements and scale with your growth.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services to optimize performance and reduce operational costs.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security audits and implementation to protect your digital assets and customer data.",
  },
  {
    icon: Zap,
    title: "API Development",
    description: "Robust and well-documented APIs that enable seamless integration and data exchange between systems.",
  },
  {
    icon: Users,
    title: "Consulting & Strategy",
    description:
      "Expert guidance on technology decisions, architecture design, and digital transformation initiatives.",
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
          <span className="text-primary text-sm font-mono tracking-wider uppercase">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">Comprehensive Technology Services</h2>
          <p className="text-lg text-muted leading-relaxed text-pretty">
            From concept to deployment, we provide end-to-end software development services that transform your ideas
            into powerful digital solutions.
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
