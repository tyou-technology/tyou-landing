"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/src/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO2-NuuKOoPyy1zX3wAtMANWzwrz4YyImz.png"
              alt="T-YOU"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {["Services", "About", "Projects", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted hover:text-[#00a5b4] transition-colors cursor-pointer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.nav>

          {/*<motion.div*/}
          {/*  className="hidden md:flex items-center gap-4"*/}
          {/*  initial={{ opacity: 0, x: 20 }}*/}
          {/*  animate={{ opacity: 1, x: 0 }}*/}
          {/*  transition={{ duration: 0.6, delay: 0.5 }}*/}
          {/*>*/}
          {/*  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>*/}
          {/*    <Button variant="ghost" size="sm" className="text-foreground hover:text-[#00a5b4] cursor-pointer">*/}
          {/*      Login*/}
          {/*    </Button>*/}
          {/*  </motion.div>*/}
          {/*  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>*/}
          {/*    <Button*/}
          {/*      size="sm"*/}
          {/*      className="bg-primary text-primary-foreground hover:bg-[#00a5b4] cursor-pointer transition-colors"*/}
          {/*    >*/}
          {/*      Get Started*/}
          {/*    </Button>*/}
          {/*  </motion.div>*/}
          {/*</motion.div>*/}

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-foreground cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden py-4 border-t border-border"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col gap-4">
                {["Services", "About", "Projects", "Contact"].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-muted hover:text-[#00a5b4] transition-colors cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.div
                  className="flex flex-col gap-2 pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-foreground hover:text-[#00a5b4] w-full cursor-pointer"
                    >
                      Login
                    </Button>
                  </motion.div>
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Button
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-[#00a5b4] w-full cursor-pointer transition-colors"
                    >
                      Get Started
                    </Button>
                  </motion.div>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
