"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface PrivacyPolicySidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function PrivacyPolicySidebar({ className, ...props }: PrivacyPolicySidebarProps) {
  const [activeSection, setActiveSection] = useState("data-collection")

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
    { id: "data-collection", label: "Data Collection" },
    { id: "data-usage", label: "Data Usage" },
    { id: "third-party", label: "Third-Party Services" },
    { id: "cookies", label: "Cookie Usage" },
    { id: "user-rights", label: "User Rights" },
    { id: "data-retention", label: "Data Retention" },
    { id: "contact", label: "Contact Us" },
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
                activeSection === item.id ? "bg-blue-600 text-white hover:bg-blue-700 hover:text-white" : "text-foreground",
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
