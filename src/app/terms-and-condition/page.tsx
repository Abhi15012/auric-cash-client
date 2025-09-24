import type { Metadata } from "next"
import { TermsSidebar } from "./_components/terms-sidebar"

export const metadata: Metadata = {
  title: "Policies | PRC Gold Buyers",
  description: "Read our privacy policy, terms & conditions, and refund policy for PRC Gold Buyers services.",
}

export default function PoliciesPage() {
  return (
    <div className="container mt-20 relative mx-auto px-4 py-6 sm:py-8 md:py-12 lg:py-16 max-w-7xl">
      <div className="mb-6 text-center sm:mb-8 md:mb-12 lg:mb-16">
        <h1 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Policies</h1>
        <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground">
          Please read our policies carefully before using PRC Gold Buyers services. By accessing or using our
          services, you agree to be bound by these policies.
        </p>
        <p className="mx-auto max-w-2xl text-xs sm:text-sm text-gray-500 mt-2">
          Last Updated: September 24, 2025
        </p>
      </div>      {/* Mobile section navigation - only visible on small screens */}
      <div className="mb-6 sm:mb-8 lg:hidden">
        <div className="bg-orange-50 rounded-lg p-4">
          <h3 className="text-sm font-medium mb-3 text-center">Quick Navigation</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <a href="#privacy-policy" className="text-xs bg-white text-orange-600 px-3 py-1 rounded-full border">
              Privacy Policy
            </a>
            <a href="#terms-conditions" className="text-xs bg-white text-orange-600 px-3 py-1 rounded-full border">
              Terms & Conditions
            </a>
            <a href="#refund-policy" className="text-xs bg-white text-orange-600 px-3 py-1 rounded-full border">
              Refund Policy
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:gap-12">
        <TermsSidebar className="hidden lg:block" />
        
        <div className="flex-1 space-y-6 sm:space-y-8">
          <section id="privacy-policy" className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
            <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm">
              <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">Privacy Policy</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>We collect your name, mobile number, and optionally your address.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>This data is used only for business and verification purposes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>We do not share or sell your personal information to any third party.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Your information is stored securely and used only to provide our services.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="terms-conditions" className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
            <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm">
              <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">Terms & Conditions</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>You confirm that the gold you sell or pledge release is legally owned by you.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Valuation is based on prevailing market rates at the time of transaction.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Once a transaction is completed, it is final and binding.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>PRC Gold Buyers may update terms at any time, and changes will be reflected on our website/app.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="refund-policy" className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
            <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm">
              <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">Refund Policy</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>All transactions are final and non-refundable.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Once gold is bought or pledged gold is released, no refunds or reversals will be made.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Customers should verify all details before completing a transaction.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <div className="rounded-lg border bg-orange-50 p-4 sm:p-6 text-center">
            <h3 className="text-base sm:text-lg font-medium">Have questions about our Policies?</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">Our support team is here to help you understand our policies.</p>
            <div className="mt-3 sm:mt-4">
              <a href="tel:+918142659346" className="inline-flex items-center justify-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg text-sm sm:text-base transition-colors">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
