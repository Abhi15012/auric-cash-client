"use client"

import { useRef } from "react"

export function PrivacyPolicyContent() {
  const sectionRefs = {
    "data-collection": useRef<HTMLElement>(null),
    "data-usage": useRef<HTMLElement>(null),
    "third-party": useRef<HTMLElement>(null),
    cookies: useRef<HTMLElement>(null),
    "user-rights": useRef<HTMLElement>(null),
    "data-retention": useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  }
  return (
    <div className="flex-1 space-y-6 sm:space-y-8">
      <section id="data-collection" ref={sectionRefs["data-collection"]} className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
        <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm">
          <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">What Data We Collect</h2>
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
            <p>We collect the following types of information:</p>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <strong>Account Information:</strong> When you register, we collect your name, email address, and
                password.
              </li>
              <li>
                <strong>Profile Information:</strong> Any additional information you provide in your profile, such as
                job title, company, or profile picture.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our platform, including features accessed,
                time spent, and actions taken.
              </li>
              <li>
                <strong>Device Information:</strong> Information about the device you use to access our service,
                including device type, operating system, and browser.
              </li>
              <li>
                <strong>Log Data:</strong> Server logs, IP addresses, and other standard technical information.
              </li>
            </ul>
          </div>
        </div>
      </section>      <section id="data-usage" ref={sectionRefs["data-usage"]} className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
        <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm">
          <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">How We Use Your Data</h2>
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
            <p>We use your information for the following purposes:</p>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <strong>Providing Services:</strong> To deliver the features and functionality of our platform.
              </li>
              <li>
                <strong>Improving User Experience:</strong> To understand how users interact with our platform and make
                improvements.
              </li>
              <li>
                <strong>Communication:</strong> To send you important updates, notifications, and support messages.
              </li>
              <li>
                <strong>Security:</strong> To protect our platform and users from fraud, abuse, and unauthorized access.
              </li>
              <li>
                <strong>Legal Compliance:</strong> To comply with applicable laws and regulations.
              </li>
            </ul>
          </div>
        </div>
      </section>      <section id="third-party" ref={sectionRefs["third-party"]} className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
        <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm">
          <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">Third-Party Services</h2>
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
            <p>
              We work with trusted third-party service providers to help us operate our business and deliver services to
              you. These providers include:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <strong>Cloud Infrastructure:</strong> We use cloud hosting providers to store and process data
                securely.
              </li>
              <li>
                <strong>Analytics:</strong> We use analytics tools to understand how users interact with our platform.
              </li>
              <li>
                <strong>Payment Processing:</strong> We use payment processors to handle transactions securely.
              </li>
              <li>
                <strong>Communication:</strong> We use email and messaging services to communicate with users.
              </li>
            </ul>
            <p>
              All third-party providers are carefully selected and required to maintain appropriate security measures to
              protect your data.
            </p>
          </div>
        </div>
      </section>      <section id="cookies" ref={sectionRefs["cookies"]} className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
        <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm">
          <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">Cookie Usage</h2>
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
            <p>We use cookies and similar technologies to enhance your experience on our platform:</p>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Required for the platform to function properly.
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember your settings and preferences.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how users interact with our platform.
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track their
                effectiveness.
              </li>
            </ul>
            <p>
              You can manage your cookie preferences through your browser settings. However, disabling certain cookies
              may affect the functionality of our platform.
            </p>
          </div>
        </div>
      </section>      <section id="user-rights" ref={sectionRefs["user-rights"]} className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
        <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm">
          <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">Your Rights</h2>
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
            <p>Depending on your location, you may have certain rights regarding your personal data:</p>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <strong>Access:</strong> You can request a copy of the personal data we hold about you.
              </li>
              <li>
                <strong>Correction:</strong> You can request that we correct inaccurate or incomplete information.
              </li>
              <li>
                <strong>Deletion:</strong> You can request that we delete your personal data in certain circumstances.
              </li>
              <li>
                <strong>Restriction:</strong> You can request that we restrict the processing of your data in certain
                circumstances.
              </li>
              <li>
                <strong>Portability:</strong> You can request a copy of your data in a structured, commonly used, and
                machine-readable format.
              </li>
              <li>
                <strong>Objection:</strong> You can object to the processing of your personal data in certain
                circumstances.
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the information provided in the Contact section.
            </p>
          </div>
        </div>
      </section>      <section id="data-retention" ref={sectionRefs["data-retention"]} className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
        <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm">
          <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">Data Retention</h2>
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
            <p>
              We retain your personal data for as long as necessary to provide you with our services and for legitimate
              business purposes, such as:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Maintaining business records for financial, tax, and legal requirements</li>
              <li>Resolving disputes</li>
              <li>Enforcing our agreements</li>
              <li>Protecting against fraudulent or illegal activity</li>
            </ul>
            <p>
              When we no longer need your personal data, we will securely delete or anonymize it in accordance with our
              data retention policies and applicable laws.
            </p>
          </div>
        </div>
      </section>      <section id="contact" ref={sectionRefs["contact"]} className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
        <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm">
          <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">Contact Us</h2>
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
              please contact us at:
            </p>
            <div className="rounded-lg bg-muted p-4">
              <p>
                <strong>Email:</strong> privacy@impact369.com
              </p>
              <p>
                <strong>Address:</strong> Impact369 Privacy Team, 123 Innovation Street, Tech City, TC 12345
              </p>
              <p>
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
            </div>
            <p>
              We will respond to your inquiry as soon as possible and within the timeframe required by applicable law.
            </p>
          </div>
        </div>
      </section>      <div className="mt-6 sm:mt-8 rounded-lg border bg-muted p-3 sm:p-4 text-xs sm:text-sm text-muted-foreground">
        <p>This Privacy Policy was last updated on May 10, 2025.</p>
      </div>
    </div>
  )
}
