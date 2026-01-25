"use client";

import DocsLayout from "@/components/DocsLayout";
import Link from "next/link";
import { ArrowRight, Mail, Lock, User } from "lucide-react";

export default function AccountPage() {
  return (
    <DocsLayout
      title="Create Account"
      description="Create a free Labobox account and get 750 credits to start immediately."
      tableOfContents={[
        { title: "Sign up", href: "#sign-up" },
        { title: "What you get", href: "#what-you-get" },
        { title: "Account settings", href: "#settings" },
      ]}
    >
      {/* Sign up */}
      <section id="sign-up" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Sign up</h2>
        <p className="text-text-secondary mb-6">
          Creating an account takes less than 30 seconds. No credit card required.
        </p>

        <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-6">
          <div className="aspect-video rounded-lg bg-white/5 flex items-center justify-center text-text-tertiary mb-6">
            [Screenshot: Sign up page]
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent-primary/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-accent-primary" />
              </div>
              <div>
                <h4 className="font-medium text-text-primary">Email</h4>
                <p className="text-sm text-text-secondary">Your email is used for login and notifications.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h4 className="font-medium text-text-primary">Password</h4>
                <p className="text-sm text-text-secondary">Minimum 8 characters. We recommend using a password manager.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h4 className="font-medium text-text-primary">Name (optional)</h4>
                <p className="text-sm text-text-secondary">Your name is displayed in the interface.</p>
              </div>
            </div>
          </div>
        </div>

        <Link href="/signup" className="inline-flex items-center gap-2 px-4 py-2 bg-accent-primary text-black rounded-lg font-medium hover:bg-accent-primary/90 transition-all">
          Create account <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* What you get */}
      <section id="what-you-get" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">What you get with a free account</h2>
        
        <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
          <ul className="grid md:grid-cols-2 gap-3">
            <li className="flex items-center gap-3 text-sm text-text-secondary">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              750 credits per month
            </li>
            <li className="flex items-center gap-3 text-sm text-text-secondary">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Access to Chat Models (15 AI)
            </li>
            <li className="flex items-center gap-3 text-sm text-text-secondary">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Access to Image Models (9 AI)
            </li>
            <li className="flex items-center gap-3 text-sm text-text-secondary">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Unlimited downloads
            </li>
          </ul>
          <p className="text-sm text-text-tertiary mt-4">
            Want more? Upgrade anytime to unlock all apps and more credits.
          </p>
        </div>
      </section>

      {/* Account settings */}
      <section id="settings">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Account settings</h2>
        <p className="text-text-secondary mb-4">
          After signing up, you can manage your account via the settings page.
        </p>

        <div className="space-y-3">
          <div className="p-4 rounded-xl border border-white/10">
            <h4 className="font-medium text-text-primary mb-1">Edit profile</h4>
            <p className="text-sm text-text-secondary">Change your name, email, or password.</p>
          </div>
          <div className="p-4 rounded-xl border border-white/10">
            <h4 className="font-medium text-text-primary mb-1">Manage subscription</h4>
            <p className="text-sm text-text-secondary">Upgrade to Basic, Pro, or Team for more credits and Premium Apps.</p>
          </div>
          <div className="p-4 rounded-xl border border-white/10">
            <h4 className="font-medium text-text-primary mb-1">View usage</h4>
            <p className="text-sm text-text-secondary">See your credit usage and generation history.</p>
          </div>
        </div>
      </section>
    </DocsLayout>
  );
}
