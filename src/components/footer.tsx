"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer className="border-t border-border bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO2-NuuKOoPyy1zX3wAtMANWzwrz4YyImz.png"
              alt="T-YOU"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
            <p className="text-sm text-muted leading-relaxed">Getting you <strong><span className={"text-[#00a5b4]"}>on</span>line</strong></p>
            <p className="text-sm text-muted leading-relaxed">
              Transforming visions into digital reality through innovative software development.
            </p>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-sm text-muted">
              {["Custom Development", "Mobile Apps", "Cloud Solutions", "Consulting"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                >
                  <motion.a
                    href="#"
                    className="hover:text-[#00a5b4] transition-colors cursor-pointer inline-block"
                    whileHover={{ x: 4, scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-muted">
              {[
                { label: "About Us", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "#contact" },
              ].map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                >
                  <motion.a
                    href={item.href}
                    className="hover:text-[#00a5b4] transition-colors cursor-pointer inline-block"
                    whileHover={{ x: 4, scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted">
              {[
                { label: "tyou.contato@gmail.com", href: "mailto:tyou.contato@gmail.com" },
                { label: "+55 (18) 99797-0919", href: "tel:+5518997970919" },
                { label: "tyou.com.br", href: "https://tyou.com.br" },
                { label: "@tyoutecnologia", href: "https://instagram.com/tyoutecnologia" },
              ].map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                >
                  <motion.a
                    href={item.href}
                    className="hover:text-[#00a5b4] transition-colors cursor-pointer inline-block"
                    whileHover={{ x: 4, scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-sm text-muted">© {new Date().getFullYear()} T<span className={"text-primary"}>_</span>YOU. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted">
            <motion.a
              href="#"
              className="hover:text-[#00a5b4] transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-[#00a5b4] transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
