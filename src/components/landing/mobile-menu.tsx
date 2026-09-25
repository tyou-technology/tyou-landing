"use client"

import { useEffect, useId, useRef, useState, type MouseEvent, type ReactNode } from "react"
import { Menu, X } from "lucide-react"

type LandingMobileMenuProps = {
  openLabel: string
  closeLabel: string
  children: ReactNode
}

export function LandingMobileMenu({ openLabel, closeLabel, children }: LandingMobileMenuProps) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return
      setOpen(false)
      toggleRef.current?.focus()
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [open])

  // Any link in the panel navigates away or jumps to a section, so the menu closes behind it.
  const closeOnLink = (event: MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("a")) setOpen(false)
  }

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        className="lp-menu-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
      </button>
      <div id={panelId} className="lp-menu-panel" hidden={!open} onClick={closeOnLink}>
        {children}
      </div>
    </>
  )
}
