"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { LanguageSwitcher } from "./language-switcher"
import { useTranslations } from "next-intl"
import { Link } from "../i18n/navigation"
import { PHONE_NUMBER } from "../utils/constants"

export function Header() {
  const t = useTranslations("Navigation")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { name: t("services"), href: "#services" },
    { name: t("about"), href: "#about" },
    { name: t("projects"), href: "#projects" },
    { name: t("timob"), href: "/t-imob" },
    { name: t("contact"), href: "#contact" },
  ]

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/" className="cursor-pointer">
                <Image  src="/logo2.png" alt="T-YOU" width={120} height={40} className="h-8 w-auto" />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav
              className="hidden md:flex items-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={item.href}
                    className="text-sm text-muted hover:text-[#00a5b4] transition-colors cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <motion.div
              className="hidden md:flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <LanguageSwitcher />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href={`https://wa.me/${PHONE_NUMBER}?text=${t("getStartedLinkMessage")}`} target="_blank">
                  <Button
                    size="sm"
                    className="bg-primary text-white hover:bg-[#00a5b4] cursor-pointer transition-colors"
                  >
                    {t("getStarted")}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <LanguageSwitcher />
              <motion.button
                className="text-foreground cursor-pointer"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile menu panel */}
            <motion.div
              className="fixed top-20 right-0 bottom-0 w-full max-w-sm bg-background border-l border-border z-40 md:hidden overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <nav className="flex flex-col p-6 gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-[#00a5b4] transition-colors cursor-pointer py-3 px-4 rounded-lg hover:bg-muted/50 block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  className="flex flex-col gap-3 pt-6 mt-6 border-t border-border"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                >
                  {/* Login button commented out in original, keeping consistent or adding if requested. User snippet had it. */}
                  {/* <motion.div whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="ghost"
                      size="lg"
                      className="text-foreground hover:text-[#00a5b4] w-full cursor-pointer text-base"
                    >
                      {t("login")}
                    </Button>
                  </motion.div> */}
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Link href={`https://wa.me/${PHONE_NUMBER}?text=${t("getStartedLinkMessage")}`} target="_blank" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-[#00a5b4] w-full cursor-pointer transition-colors text-base"
                      >
                        {t("getStarted")}
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

