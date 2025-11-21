"use client"

import { useLocale, useTranslations } from "next-intl"
import { usePathname, useRouter } from "../i18n/navigation"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Globe } from "lucide-react"
import { motion } from "framer-motion"

export function LanguageSwitcher() {
  const t = useTranslations("Navigation")
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-foreground hover:text-[#00a5b4] hover:bg-[#00a5b4]/5 cursor-pointer transition-all duration-300 relative group"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Globe className="h-5 w-5" />
          </motion.div>
          <span className="sr-only">{t("switchLanguage")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[150px]" sideOffset={8}>
        <DropdownMenuItem 
          onClick={() => handleLanguageChange("en")} 
          className={`cursor-pointer transition-all duration-200 hover:!bg-[#00a5b4]/10 hover:!text-[#00a5b4] ${
            locale === "en" 
              ? "text-[#00a5b4] font-medium" 
              : ""
          }`}
        >
          <span className="mr-2">🇺🇸</span>
          English
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleLanguageChange("pt")} 
          className={`cursor-pointer transition-all duration-200 hover:!bg-[#00a5b4]/10 hover:!text-[#00a5b4] ${
            locale === "pt" 
              ? "text-[#00a5b4] font-medium" 
              : ""
          }`}
        >
          <span className="mr-2">🇧🇷</span>
          Português
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
