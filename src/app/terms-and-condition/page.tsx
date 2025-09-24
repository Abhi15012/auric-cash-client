import type { Metadata } from "next"
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { TermsSidebar } from "./_components/terms-sidebar"

export const metadata: Metadata = {
  title: "Terms & Conditions | Impact369",
  description: "Read our terms and conditions for using Impact369 services.",
}

export default function TermsAndConditionsPage() {
  return (
    <div className="container relative mx-auto px-4 py-6 sm:py-8 md:py-12 lg:py-16 max-w-7xl">
      <div className="mb-6 text-center sm:mb-8 md:mb-12 lg:mb-16">
        <h1 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Terms &amp; Conditions</h1>
        <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground">
          Please read these terms and conditions carefully before using Impact369. By accessing or using our
          service, you agree to be bound by these terms.
        </p>
        <p className="mx-auto max-w-2xl text-xs sm:text-sm text-gray-500 mt-2">
          Last Updated: May 10, 2025
        </p>
      </div>      {/* Mobile section navigation - only visible on small screens */}
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
            <a href="#subscription" className="text-xs bg-white text-blue-600 px-3 py-1 rounded-full border">
              7. Payment
            </a>
            <a href="#governing-law" className="text-xs bg-white text-blue-600 px-3 py-1 rounded-full border">
              8. Law
            </a>
            <a href="#compliance" className="text-xs bg-white text-blue-600 px-3 py-1 rounded-full border">
              9. Compliance
            </a>
            <a href="#modifications" className="text-xs bg-white text-blue-600 px-3 py-1 rounded-full border">
              10. Modifications
            </a>
            <a href="#contact" className="text-xs bg-white text-blue-600 px-3 py-1 rounded-full border">
              11. Contact
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
          
          <section id="data-usage" className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
            <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm">
              <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">4. Data Usage and Privacy</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p>
                  Impact369 collects and processes data in accordance with our Privacy Policy and applicable
                  data protection laws, including but not limited to GDPR, CCPA, and other relevant
                  regulations.
                </p>
                <p>
                  We implement appropriate technical and organizational measures to ensure a level of
                  security appropriate to the risk, including encryption of sensitive data, regular security
                  assessments, and strict access controls.
                </p>
                <p>
                  Users retain ownership of any data they upload to the platform. By using our services, you
                  grant Impact369 a non-exclusive license to use, process, and display your data solely for 
                  the purpose of providing and improving our services.
                </p>
              </div>
            </div>
          </section>

          <section id="limitation" className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
            <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm">
              <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">5. Limitation of Liability</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p>
                  To the fullest extent permitted by law, Impact369 shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages, including but not limited to loss
                  of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Your access to or use of or inability to access or use the service</li>
                  <li>Any conduct or content of any third party on the service</li>
                  <li>Any content obtained from the service</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="termination" className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
            <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm">
              <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">6. Termination Clause</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p>
                  Impact369 reserves the right to terminate or suspend your account and access to the
                  service immediately, without prior notice or liability, for any reason, including but not
                  limited to a breach of these Terms.
                </p>
                <p>
                  Upon termination, your right to use the service will immediately cease. If you wish to
                  terminate your account, you may simply discontinue using the service or contact us to
                  request account deletion.
                </p>
              </div>
            </div>
          </section>

          <section id="subscription" className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
            <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm">
              <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">7. Subscription and Payment</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p>
                  Impact369 offers various subscription plans with different features and pricing. By
                  selecting a subscription plan, you agree to pay the applicable fees as described at the
                  time of purchase.
                </p>
                <p>
                  Subscription fees are billed in advance on a monthly or annual basis, depending on the
                  payment cycle you select. Unless otherwise stated, subscriptions automatically renew at
                  the end of each billing period.
                </p>
                <p>
                  All fees are exclusive of taxes, levies, or duties imposed by taxing authorities, and you
                  are responsible for payment of all such taxes, levies, or duties.
                </p>
              </div>
            </div>
          </section>

          <section id="governing-law" className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
            <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm">
              <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">8. Governing Law</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of
                  [Jurisdiction], without regard to its conflict of law provisions.
                </p>
                <p>
                  Any dispute arising from or relating to these Terms or your use of the service shall be
                  subject to the exclusive jurisdiction of the courts in [Jurisdiction].
                </p>
              </div>
            </div>
          </section>

          <section id="compliance" className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
            <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm">
              <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">9. Compliance and Regulatory Framework</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p>
                  Impact369 is committed to operating in full compliance with all applicable laws and
                  regulations, including but not limited to:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Data protection and privacy laws (GDPR, CCPA, etc.)</li>
                  <li>Electronic communication regulations</li>
                  <li>Consumer protection laws</li>
                  <li>Intellectual property laws</li>
                  <li>Anti-spam legislation</li>
                  <li>Information security standards</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="modifications" className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
            <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm">
              <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">10. Modifications to Terms</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p>
                  Impact369 reserves the right to modify or replace these Terms at any time at its sole
                  discretion. The most current version will be posted on our website with the effective
                  date.
                </p>
                <p>
                  Your continued use of the service after any such changes constitutes your acceptance of
                  the new Terms. It is your responsibility to check the Terms periodically for changes.
                </p>
              </div>
            </div>
          </section>

          <section id="contact" className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
            <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm">
              <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">11. Contact Information</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p>If you have any questions about these Terms, please contact us at:</p>
                <div className="p-3 bg-blue-50 rounded-md">
                  <p>Email: support@impact369.com</p>
                  <p>Phone: (555) 123-4567</p>
                  <p>Address: 123 Impact Street, Suite 369, San Francisco, CA 94103</p>
                </div>
                <p>
                  For legal notices, please contact our legal department at legal@impact369.com or send
                  correspondence to the address above, Attention: Legal Department.
                </p>
              </div>
            </div>
          </section>

          <div className="rounded-lg border bg-blue-50 p-4 sm:p-6 text-center">
            <h3 className="text-base sm:text-lg font-medium">Have questions about our Terms &amp; Conditions?</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">Our support team is here to help you understand our policies.</p>
            <div className="mt-3 sm:mt-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-sm sm:text-base cursor-pointer">Contact Support</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
