"use client"

import React from 'react'

interface MobileNavProps {
  className?: string
}

export function MobileNav({ className }: MobileNavProps) {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }
  
  return (
    <div className="lg:hidden mb-6 sm:mb-8">
      <div className="bg-blue-50 rounded-lg p-4">
        <h3 className="text-sm font-medium mb-3 text-center">Quick Navigation</h3>
        <div className="flex flex-wrap justify-center gap-2">
          <button onClick={() => scrollToSection("acceptance")} className="text-xs bg-white text-blue-600 px-3 py-1 rounded-full border">
            1. Terms
          </button>
          <button onClick={() => scrollToSection("user-obligations")} className="text-xs bg-white text-blue-600 px-3 py-1 rounded-full border">
            2. Obligations
          </button>
          <button onClick={() => scrollToSection("intellectual-property")} className="text-xs bg-white text-blue-600 px-3 py-1 rounded-full border">
            3. IP Rights
          </button>
          <button onClick={() => scrollToSection("data-usage")} className="text-xs bg-white text-blue-600 px-3 py-1 rounded-full border">
            4. Data
          </button>
          <button onClick={() => scrollToSection("limitation")} className="text-xs bg-white text-blue-600 px-3 py-1 rounded-full border">
            5. Liability
          </button>
          <button onClick={() => scrollToSection("termination")} className="text-xs bg-white text-blue-600 px-3 py-1 rounded-full border">
            6. Termination
          </button>
        </div>
      </div>
    </div>
  )
}
