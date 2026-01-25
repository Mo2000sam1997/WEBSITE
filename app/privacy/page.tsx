"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
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
            Privacy Policy
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
              <h2 className="text-xl font-semibold text-text-primary mb-4">Introduction</h2>
              <p>
                Labobox (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy 
                Policy describes how we collect, use, disclose, and safeguard your information when you 
                visit our website and use our services (collectively, the &quot;Services&quot;).
              </p>
              <p className="mt-4">
                Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge 
                that you have read, understood, and agree to be bound by this Privacy Policy. If you do not 
                agree with the terms of this Privacy Policy, please do not access or use our Services.
              </p>
            </section>

            {/* 1. Information We Collect */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">1. Information We Collect</h2>
              
              <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">1.1 Information You Provide to Us</h3>
              <p>We collect information you provide directly to us, including:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Account Information:</strong> When you create an account, we collect your name, 
                    email address, and password.</li>
                <li><strong>Payment Information:</strong> When you make a purchase, our payment processor 
                    collects your payment card details. We do not store complete payment card information 
                    on our servers.</li>
                <li><strong>User Content:</strong> We collect content you upload or generate through our 
                    Services, including images, text prompts, and other materials.</li>
                <li><strong>Communications:</strong> When you contact us, we collect information contained 
                    in your communications, including email addresses and message content.</li>
              </ul>

              <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">1.2 Information Collected Automatically</h3>
              <p>When you access or use our Services, we automatically collect:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Log Data:</strong> We collect log information, including your IP address, browser 
                    type, operating system, referring URLs, access times, and pages viewed.</li>
                <li><strong>Device Information:</strong> We collect information about the device you use to 
                    access our Services, including device type, unique device identifiers, and device settings.</li>
                <li><strong>Usage Information:</strong> We collect information about your use of our Services, 
                    including features used, actions taken, and time spent on the Services.</li>
                <li><strong>Cookies and Similar Technologies:</strong> We use cookies and similar tracking 
                    technologies to collect information about your interactions with our Services. See our 
                    Cookie Policy for more information.</li>
              </ul>
            </section>

            {/* 2. How We Use Your Information */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Provide, maintain, and improve our Services</li>
                <li>Process transactions and manage your account</li>
                <li>Send you technical notices, updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our Services</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Personalize and improve your experience with our Services</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-4">
                We process your personal information for these purposes based on our legitimate business 
                interests, to perform our contract with you, with your consent, and/or for compliance with 
                our legal obligations.
              </p>
            </section>

            {/* 3. How We Share Your Information */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">3. How We Share Your Information</h2>
              <p>We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Service Providers:</strong> We may share your information with third-party 
                    vendors, consultants, and other service providers who perform services on our behalf, 
                    such as payment processing, data hosting, and customer support.</li>
                <li><strong>Business Transfers:</strong> We may share or transfer your information in 
                    connection with a merger, acquisition, reorganization, sale of assets, or bankruptcy.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required to 
                    do so by law or in response to valid requests by public authorities.</li>
                <li><strong>Protection of Rights:</strong> We may disclose your information to protect the 
                    rights, property, or safety of Labobox, our users, or others.</li>
              </ul>
              <p className="mt-4 font-medium text-text-primary">
                We do not sell your personal information to third parties.
              </p>
            </section>

            {/* 4. Data Retention */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">4. Data Retention</h2>
              <p>
                We retain your personal information for as long as your account is active or as needed to 
                provide you with our Services. We will also retain and use your information as necessary 
                to comply with our legal obligations, resolve disputes, and enforce our agreements.
              </p>
              <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">4.1 User Content</h3>
              <p>
                Content you upload for processing (such as images for AI generation) is temporarily stored 
                only for the duration necessary to complete the requested operation. After processing, 
                uploaded content is deleted from our active systems within 24 hours.
              </p>
              <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">4.2 Generated Content</h3>
              <p>
                Content generated through our Services may be stored in association with your account to 
                allow you to access your generation history. You may delete generated content through your 
                account settings.
              </p>
            </section>

            {/* 5. Data Security */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect the security of 
                your personal information. However, please be aware that no method of transmission over 
                the Internet or method of electronic storage is 100% secure. While we strive to use 
                commercially acceptable means to protect your personal information, we cannot guarantee 
                its absolute security.
              </p>
              <p className="mt-4">
                We use industry-standard encryption for data transmission and storage, maintain secure 
                server infrastructure, and regularly review our security practices.
              </p>
            </section>

            {/* 6. International Data Transfers */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">6. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country 
                of residence. These countries may have data protection laws that are different from the 
                laws of your country.
              </p>
              <p className="mt-4">
                When we transfer your information to other countries, we will protect that information as 
                described in this Privacy Policy and in accordance with applicable law. We use appropriate 
                safeguards for international transfers, including Standard Contractual Clauses approved by 
                the European Commission.
              </p>
            </section>

            {/* 7. Your Rights */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">7. Your Rights and Choices</h2>
              
              <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">7.1 Account Information</h3>
              <p>
                You may update, correct, or delete your account information at any time by logging into 
                your account settings. If you wish to delete your account, please contact us at 
                support@labobox.app.
              </p>

              <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">7.2 European Users (GDPR)</h3>
              <p>If you are located in the European Economic Area (EEA), you have certain rights under the 
                 General Data Protection Regulation (GDPR), including:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Right of Access:</strong> You have the right to request access to your personal data.</li>
                <li><strong>Right to Rectification:</strong> You have the right to request correction of inaccurate data.</li>
                <li><strong>Right to Erasure:</strong> You have the right to request deletion of your personal data.</li>
                <li><strong>Right to Restrict Processing:</strong> You have the right to request restriction of processing.</li>
                <li><strong>Right to Data Portability:</strong> You have the right to receive your data in a portable format.</li>
                <li><strong>Right to Object:</strong> You have the right to object to processing of your personal data.</li>
                <li><strong>Right to Withdraw Consent:</strong> Where we rely on consent, you have the right to withdraw it.</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at support@labobox.app. You also have the right to 
                lodge a complaint with your local data protection authority.
              </p>

              <h3 className="text-lg font-medium text-text-primary mt-6 mb-3">7.3 California Users (CCPA)</h3>
              <p>
                If you are a California resident, you have certain rights under the California Consumer 
                Privacy Act (CCPA), including the right to know what personal information we collect, the 
                right to delete your personal information, and the right to opt-out of the sale of personal 
                information. We do not sell personal information.
              </p>
            </section>

            {/* 8. Cookies */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">8. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect and use information about you 
                and your interaction with our Services. For detailed information about the cookies we use 
                and your choices regarding cookies, please see our Cookie Policy.
              </p>
            </section>

            {/* 9. Third-Party Services */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">9. Third-Party Services</h2>
              <p>
                Our Services may contain links to third-party websites or services that are not operated 
                by us. If you click on a third-party link, you will be directed to that third party&apos;s site. 
                We strongly advise you to review the privacy policy of every site you visit.
              </p>
              <p className="mt-4">
                We have no control over and assume no responsibility for the content, privacy policies, 
                or practices of any third-party sites or services.
              </p>
            </section>

            {/* 10. Children's Privacy */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">10. Children&apos;s Privacy</h2>
              <p>
                Our Services are not intended for individuals under the age of 18. We do not knowingly 
                collect personal information from children under 18. If we become aware that we have 
                collected personal information from a child under 18, we will take steps to delete such 
                information from our servers.
              </p>
            </section>

            {/* 11. Changes */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">11. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the 
                top of this Privacy Policy.
              </p>
              <p className="mt-4">
                For material changes, we will provide additional notice, such as adding a statement to our 
                homepage or sending you an email notification. We encourage you to review this Privacy 
                Policy periodically for any changes.
              </p>
            </section>

            {/* 12. Contact */}
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4">12. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 p-4 bg-white/5 rounded-lg">
                <p className="text-accent-primary">support@labobox.app</p>
              </div>
            </section>

          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
