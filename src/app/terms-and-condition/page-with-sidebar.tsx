import type { Metadata } from "next"
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "../../../components/ui/button"
import { TermsSidebar } from "./_components/terms-sidebar"

export const metadata: Metadata = {
  title: "Terms & Conditions | Impact369",
  description: "Read our terms and conditions for using Impact369 services.",
}

export default function TermsAndConditionsPage() {
  return (
    <div className="container relative mx-auto px-4 py-6 sm:py-8 md:py-12 lg:py-16">
      <div className="mb-6 text-center sm:mb-8 md:mb-12 lg:mb-16">
        <h1 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Terms &amp; Conditions</h1>
        <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground">
          Please read these terms and conditions carefully before using Impact369. By accessing or using our
          service, you agree to be bound by these terms.
        </p>
        <p className="mx-auto max-w-2xl text-xs sm:text-sm text-gray-500 mt-2">
          Last Updated: May 10, 2025
        </p>
      </div>

      {/* Mobile section navigation - only visible on small screens */}
      <div className="mb-6 sm:mb-8 lg:hidden">
        <div className="bg-blue-50 rounded-lg p-4">
          <h3 className="text-sm font-medium mb-3 text-center">Quick Navigation</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <a href="#acceptance" className="text-xs bg-white text-blue-600 px-3 py-1 rounded-full border">
              1. Terms
            </a>
            <a href="#user-obligations" className="text-xs bg-white text-blue-600 px-3 py-1 rounded-full border">
              2. Obligations
            </a>
            <a href="#intellectual-property" className="text-xs bg-white text-blue-600 px-3 py-1 rounded-full border">
              3. IP Rights
            </a>
            <a href="#data-usage" className="text-xs bg-white text-blue-600 px-3 py-1 rounded-full border">
              4. Data Usage
            </a>
            <a href="#limitation" className="text-xs bg-white text-blue-600 px-3 py-1 rounded-full border">
              5. Liability
            </a>
            <a href="#termination" className="text-xs bg-white text-blue-600 px-3 py-1 rounded-full border">
              6. Termination
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:gap-12">
        <TermsSidebar className="hidden lg:block" />
        
        <div className="flex-1 space-y-6 sm:space-y-8">
          <section id="acceptance" className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
            <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm">
              <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">1. Acceptance of Terms</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p>
                  By accessing or using the Impact369 platform, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms and Conditions. If you do not agree with
                  any part of these terms, you may not use our services.
                </p>
                <p>
                  These Terms constitute a legally binding agreement between you and Impact369 regarding
                  your use of the platform and services.
                </p>
                <p>
                  Impact369 reserves the right to update these Terms from time to time. Your continued use of the platform 
                  after such modifications will constitute your acknowledgment of the modified Terms.
                </p>
              </div>
            </div>
          </section>

          <section id="user-obligations" className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
            <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm">
              <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">2. User Obligations</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p>As a user of Impact369, you agree to:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Provide accurate and complete information when creating an account</li>
                  <li>Maintain the security and confidentiality of your account credentials</li>
                  <li>Use the platform in compliance with all applicable laws and regulations</li>
                  <li>
                    Not engage in any activity that could harm, disable, or impair the functioning of the
                    platform
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="intellectual-property" className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
            <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm">
              <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">3. Intellectual Property Rights</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p>
                  All content, features, and functionality of the Impact369 platform are the exclusive 
                  property of Impact369 and are protected by intellectual property laws.
                </p>
              </div>
            </div>
          </section>

          <div className="rounded-lg border bg-blue-50 p-4 sm:p-6 text-center">
            <h3 className="text-base sm:text-lg font-medium">Have questions about our Terms &amp; Conditions?</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">Our support team is here to help you understand our policies.</p>
            <div className="mt-3 sm:mt-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-sm sm:text-base">Contact Support</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
