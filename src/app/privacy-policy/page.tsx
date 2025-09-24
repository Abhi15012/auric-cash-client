
import type { Metadata } from "next"
import { PrivacyPolicySidebar } from "./_components/privacy-policy-sidebar"
import { PrivacyPolicyContent } from "./_components/privacy-policy-content"



export const metadata: Metadata = {
  title: "Privacy Policy | Impact369",
  description: "Learn how Impact369 collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container relative mx-auto px-4 py-6 sm:py-8 md:py-12 lg:py-16 max-w-7xl">
      <div className="mb-6 text-center sm:mb-8 md:mb-12 lg:mb-16">
        <h1 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Privacy Policy</h1>
        <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground">
          At Impact369, we are committed to protecting your privacy and ensuring the security of your personal
          information. This policy outlines how we collect, use, and safeguard your data.
        </p>
      </div>

      {/* Mobile section navigation - only visible on small screens */}
      <div className="mb-6 sm:mb-8 lg:hidden">
        <div className="bg-blue-50 rounded-lg p-4">
          <h3 className="text-sm font-medium mb-3 text-center">Quick Navigation</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <a href="#data-collection" className="text-xs bg-white text-blue-600 px-3 py-1 rounded-full border">
              Data Collection
            </a>
            <a href="#data-usage" className="text-xs bg-white text-blue-600 px-3 py-1 rounded-full border">
              Data Usage
            </a>
            <a href="#third-party" className="text-xs bg-white text-blue-600 px-3 py-1 rounded-full border">
              Third-Party
            </a>
            <a href="#cookies" className="text-xs bg-white text-blue-600 px-3 py-1 rounded-full border">
              Cookies
            </a>
            <a href="#user-rights" className="text-xs bg-white text-blue-600 px-3 py-1 rounded-full border">
              User Rights
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:gap-12">
        <PrivacyPolicySidebar className="hidden lg:block" />
        <PrivacyPolicyContent />
      </div>
    </div>
  )
}
