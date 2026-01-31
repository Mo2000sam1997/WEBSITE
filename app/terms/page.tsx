"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-8 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-text-primary mb-4"
          >
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary"
          >
            Last updated: January 2026
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto prose prose-invert prose-sm"
        >
          <div className="space-y-8 text-text-secondary">
            
            {/* 1. Acceptance */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">1. Acceptance of Terms</h2>
              <p>
                Welcome to Mindhello.ai. These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Mindhello.ai 
                website and any related services, features, content, or applications offered by Mindhello.ai 
                (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) (collectively, the &quot;Services&quot;).
              </p>
              <p className="mt-4">
                By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. 
                If you do not agree to these Terms, you may not access or use the Services. We reserve the right 
                to modify these Terms at any time. Your continued use of the Services following the posting of 
                revised Terms constitutes your acceptance of such changes.
              </p>
            </section>

            {/* 2. Eligibility */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">2. Eligibility</h2>
              <p>
                You must be at least 18 years of age, or the age of legal majority in your jurisdiction 
                (whichever is greater), to use our Services. By using the Services, you represent and warrant 
                that you meet these eligibility requirements and that you have the right, authority, and 
                capacity to enter into these Terms.
              </p>
              <p className="mt-4">
                If you are using the Services on behalf of an organization, you represent and warrant that 
                you are authorized to bind that organization to these Terms, and references to &quot;you&quot; will 
                include that organization.
              </p>
            </section>

            {/* 3. Account Registration */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">3. Account Registration and Security</h2>
              <p>
                To access certain features of the Services, you must create an account. When you create an 
                account, you agree to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your password and account credentials</li>
                <li>Accept responsibility for all activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
              <p className="mt-4">
                You may not share your account credentials with others or allow others to access your account. 
                We reserve the right to suspend or terminate accounts that we reasonably believe are being 
                shared or accessed by multiple individuals.
              </p>
            </section>

            {/* 4. Services and Credits */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">4. Services and Credit System</h2>
              <p>
                Mindhello.ai provides access to various artificial intelligence tools and services through a 
                credit-based system. Credits are the virtual currency used to access and utilize our AI 
                services.
              </p>
              <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">4.1 Credit Purchases and Usage</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Credits may be obtained through subscription plans or one-time purchases</li>
                <li>Credit costs for each service are displayed before usage</li>
                <li>Credits are non-transferable between accounts</li>
                <li>Unused credits do not expire unless your account is terminated</li>
              </ul>
              <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">4.2 Subscription Terms</h3>
              <p>
                If you purchase a subscription, your subscription will automatically renew at the end of 
                each billing period unless you cancel before the renewal date. You may cancel your subscription 
                at any time through your account settings. Cancellation will take effect at the end of your 
                current billing period.
              </p>
              <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">4.3 Refunds</h3>
              <p>
                Credits that have been used are non-refundable. For failed generations due to technical 
                issues on our end, credits will be automatically refunded to your account. For other refund 
                requests, please contact support@mindhello.ai.
              </p>
            </section>

            {/* 5. Acceptable Use */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">5. Acceptable Use Policy</h2>
              <p>
                You agree to use the Services only for lawful purposes and in accordance with these Terms. 
                You agree not to use the Services to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Generate, upload, or distribute content that is illegal, harmful, threatening, abusive, 
                    harassing, defamatory, vulgar, obscene, or otherwise objectionable</li>
                <li>Generate content that exploits, harms, or attempts to exploit or harm minors in any way</li>
                <li>Generate content that infringes any patent, trademark, trade secret, copyright, or other 
                    intellectual property rights of any party</li>
                <li>Impersonate any person or entity or falsely state or misrepresent your affiliation with 
                    a person or entity</li>
                <li>Attempt to circumvent any technical measures we use to provide the Services</li>
                <li>Use the Services to develop competing products or services</li>
                <li>Use automated means (bots, scrapers, etc.) to access the Services without our express 
                    written permission</li>
                <li>Interfere with or disrupt the integrity or performance of the Services</li>
                <li>Attempt to gain unauthorized access to any systems or networks connected to the Services</li>
              </ul>
              <p className="mt-4">
                We reserve the right to investigate and take appropriate legal action against anyone who, 
                in our sole discretion, violates this provision, including removing offending content, 
                suspending or terminating accounts, and reporting violators to law enforcement authorities.
              </p>
            </section>

            {/* 6. Intellectual Property */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">6. Intellectual Property Rights</h2>
              <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">6.1 Our Intellectual Property</h3>
              <p>
                The Services and all content, features, and functionality thereof, including but not limited 
                to all information, software, code, text, displays, graphics, photographs, video, audio, 
                design, presentation, selection, and arrangement, are owned by Mindhello.ai, its licensors, or 
                other providers and are protected by copyright, trademark, patent, trade secret, and other 
                intellectual property laws.
              </p>
              <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">6.2 Your Content</h3>
              <p>
                You retain ownership of any content you submit, upload, or generate through the Services 
                (&quot;User Content&quot;). By using our Services to generate content, you are granted a worldwide, 
                non-exclusive, royalty-free license to use, reproduce, modify, and distribute the generated 
                content for any purpose, subject to these Terms.
              </p>
              <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">6.3 License to Us</h3>
              <p>
                By submitting User Content to the Services, you grant us a non-exclusive, worldwide, 
                royalty-free license to use, store, and process such content solely for the purpose of 
                providing and improving the Services.
              </p>
            </section>

            {/* 7. Disclaimers */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">7. Disclaimers</h2>
              <p className="uppercase text-xs tracking-wider mb-4">
                THE SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS, WITHOUT ANY WARRANTIES 
                OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, 
                WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES 
                OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
              </p>
              <p>
                We do not warrant that the Services will be uninterrupted, timely, secure, or error-free, 
                that defects will be corrected, or that the Services are free of viruses or other harmful 
                components. We do not guarantee the accuracy, completeness, or usefulness of any content 
                generated through the Services.
              </p>
              <p className="mt-4">
                AI-generated content may contain errors, inaccuracies, or inappropriate material. You are 
                solely responsible for reviewing and validating any content generated through the Services 
                before use.
              </p>
            </section>

            {/* 8. Limitation of Liability */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">8. Limitation of Liability</h2>
              <p className="uppercase text-xs tracking-wider mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL LABOBOX, ITS AFFILIATES, 
                OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, PUNITIVE, 
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES 
                FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR 
                RELATING TO YOUR USE OF, OR INABILITY TO USE, THE SERVICES.
              </p>
              <p>
                IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO 
                THESE TERMS OR YOUR USE OF THE SERVICES EXCEED THE GREATER OF (A) THE AMOUNT YOU HAVE PAID 
                TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED EUROS (€100).
              </p>
            </section>

            {/* 9. Indemnification */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">9. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Mindhello.ai and its officers, directors, 
                employees, agents, affiliates, successors, and assigns from and against any and all claims, 
                damages, obligations, losses, liabilities, costs, and expenses (including but not limited 
                to attorney&apos;s fees) arising from: (a) your use of the Services; (b) your violation of these 
                Terms; (c) your violation of any third-party right, including any intellectual property, 
                property, or privacy right; or (d) any claim that your User Content caused damage to a 
                third party.
              </p>
            </section>

            {/* 10. Termination */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">10. Termination</h2>
              <p>
                We may terminate or suspend your access to the Services immediately, without prior notice 
                or liability, for any reason, including if you breach these Terms. Upon termination, your 
                right to use the Services will immediately cease. All provisions of these Terms which by 
                their nature should survive termination shall survive, including ownership provisions, 
                warranty disclaimers, indemnity, and limitations of liability.
              </p>
              <p className="mt-4">
                You may terminate your account at any time by contacting us at support@mindhello.ai or through 
                your account settings. Upon termination, any unused credits will be forfeited.
              </p>
            </section>

            {/* 11. Governing Law */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">11. Governing Law and Dispute Resolution</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Belgium, 
                without regard to its conflict of law provisions. Any dispute arising from or relating to 
                these Terms or the Services shall be subject to the exclusive jurisdiction of the courts 
                located in Belgium.
              </p>
              <p className="mt-4">
                For users in the European Union, nothing in these Terms affects your rights under applicable 
                consumer protection legislation. You may also have the right to bring disputes before your 
                local courts.
              </p>
            </section>

            {/* 12. Changes */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">12. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms 
                taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p className="mt-4">
                By continuing to access or use our Services after those revisions become effective, you 
                agree to be bound by the revised terms. If you do not agree to the new terms, please stop 
                using the Services.
              </p>
            </section>

            {/* 13. General */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">13. General Provisions</h2>
              <p>
                <strong>Entire Agreement:</strong> These Terms, together with the Privacy Policy and any 
                other agreements expressly incorporated by reference, constitute the entire agreement 
                between you and Mindhello.ai concerning the Services.
              </p>
              <p className="mt-4">
                <strong>Severability:</strong> If any provision of these Terms is held to be invalid or 
                unenforceable, such provision shall be struck and the remaining provisions shall be enforced.
              </p>
              <p className="mt-4">
                <strong>Waiver:</strong> Our failure to enforce any right or provision of these Terms will 
                not be considered a waiver of those rights.
              </p>
              <p className="mt-4">
                <strong>Assignment:</strong> You may not assign or transfer these Terms without our prior 
                written consent. We may assign or transfer these Terms without restriction.
              </p>
            </section>

            {/* 14. Contact */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">14. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-white/5 rounded-lg">
                <p className="text-accent-primary">support@mindhello.ai</p>
              </div>
            </section>

          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
