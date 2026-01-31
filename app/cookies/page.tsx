"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CookiesPage() {
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
            Cookie Policy
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
            
            {/* Introduction */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you 
                visit a website. They are widely used to make websites work more efficiently and to provide 
                information to the owners of the site. Cookies allow the website to recognize your device 
                and remember information about your visit, such as your preferences and settings.
              </p>
              <p className="mt-4">
                This Cookie Policy explains how Mindhello.ai (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies and similar 
                tracking technologies when you visit our website (the &quot;Site&quot;).
              </p>
            </section>

            {/* Types of Cookies */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">Types of Cookies We Use</h2>
              
              <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">Strictly Necessary Cookies</h3>
              <p>
                These cookies are essential for the website to function properly. They enable basic 
                functions like page navigation, secure areas access, and authentication. The website 
                cannot function properly without these cookies, and they cannot be disabled.
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 pr-4 text-text-primary font-medium">Cookie Name</th>
                      <th className="text-left py-2 pr-4 text-text-primary font-medium">Purpose</th>
                      <th className="text-left py-2 text-text-primary font-medium">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-white/5">
                      <td className="py-2 pr-4 font-mono text-xs">session_token</td>
                      <td className="py-2 pr-4">Maintains user session state</td>
                      <td className="py-2">Session</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 pr-4 font-mono text-xs">auth_token</td>
                      <td className="py-2 pr-4">Authentication token</td>
                      <td className="py-2">7 days</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 pr-4 font-mono text-xs">csrf_token</td>
                      <td className="py-2 pr-4">Security - prevents cross-site request forgery</td>
                      <td className="py-2">Session</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">Functional Cookies</h3>
              <p>
                These cookies enable enhanced functionality and personalization, such as remembering your 
                preferences and settings. They may be set by us or by third-party providers whose services 
                we have added to our pages.
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 pr-4 text-text-primary font-medium">Cookie Name</th>
                      <th className="text-left py-2 pr-4 text-text-primary font-medium">Purpose</th>
                      <th className="text-left py-2 text-text-primary font-medium">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-white/5">
                      <td className="py-2 pr-4 font-mono text-xs">cookies-accepted</td>
                      <td className="py-2 pr-4">Remembers your cookie consent choice</td>
                      <td className="py-2">1 year</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 pr-4 font-mono text-xs">theme</td>
                      <td className="py-2 pr-4">Stores your theme preference</td>
                      <td className="py-2">1 year</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 pr-4 font-mono text-xs">locale</td>
                      <td className="py-2 pr-4">Stores your language preference</td>
                      <td className="py-2">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">Analytics Cookies</h3>
              <p>
                We do not currently use analytics cookies that track individual users. We may collect 
                aggregate, anonymized usage statistics to improve our services, but this data cannot be 
                used to identify you personally.
              </p>

              <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">Advertising Cookies</h3>
              <p>
                We do not use advertising cookies. We do not display third-party advertisements on our 
                website, and we do not share your data with advertising networks.
              </p>
            </section>

            {/* Third-Party Cookies */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">Third-Party Cookies</h2>
              <p>
                We use the following third-party services that may set cookies:
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 pr-4 text-text-primary font-medium">Provider</th>
                      <th className="text-left py-2 pr-4 text-text-primary font-medium">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-white/5">
                      <td className="py-2 pr-4">Stripe</td>
                      <td className="py-2 pr-4">Payment processing and fraud prevention</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 pr-4">Firebase</td>
                      <td className="py-2 pr-4">Authentication and database services</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Managing Cookies */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">Managing Cookies</h2>
              <p>
                Most web browsers allow you to control cookies through their settings. You can usually 
                find these settings in the &quot;Options&quot; or &quot;Preferences&quot; menu of your browser. The following 
                links may help you understand how to manage cookies in common browsers:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline">Apple Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline">Microsoft Edge</a></li>
              </ul>
              <p className="mt-4">
                Please note that if you disable or delete cookies, some features of our website may not 
                function properly.
              </p>
            </section>

            {/* Do Not Track */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">Do Not Track Signals</h2>
              <p>
                Some browsers include a &quot;Do Not Track&quot; (DNT) feature that signals to websites that you 
                do not want your online activity tracked. We honor Do Not Track signals and do not track 
                users who have DNT enabled.
              </p>
            </section>

            {/* Updates */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">Updates to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. We encourage you to periodically 
                review this page for the latest information on our cookie practices.
              </p>
              <p className="mt-4">
                The &quot;Last updated&quot; date at the top of this Cookie Policy indicates when it was last revised.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">Contact Us</h2>
              <p>
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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
