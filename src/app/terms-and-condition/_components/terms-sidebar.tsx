"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"


type TermsSidebarProps = {
  className?: string;
};
// interface TermsSidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TermsSidebar({ className, ...props }: TermsSidebarProps) {
  const [activeSection, setActiveSection] = useState("privacy-policy")
  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const sectionId = section.getAttribute("id")

        if (sectionTop < 200 && sectionId) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { id: "privacy-policy", label: "Privacy Policy" },
    { id: "terms-conditions", label: "Terms & Conditions" },
    { id: "refund-policy", label: "Refund Policy" },
  ]

  return (
    <div className={cn("w-full lg:w-64 lg:flex-shrink-0", className)} {...props}>
      <div className="sticky top-16 sm:top-20 md:top-24 rounded-lg border bg-card p-4 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold">On this page</h3>
        <nav className="flex flex-col space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-muted cursor-pointer",
                activeSection === item.id ? "bg-orange-600 text-white hover:bg-orange-700 hover:text-white" : "text-foreground",
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
