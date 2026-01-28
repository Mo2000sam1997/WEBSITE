"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, HelpCircle } from "lucide-react";
import DocsNavbar from "@/components/DocsNavbar";
import DocsFooter from "@/components/DocsFooter";

const sidebarNav = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Quickstart", href: "/docs/quickstart" },
      { title: "Create Account", href: "/docs/account" },
    ],
  },
  {
    title: "Standard Apps",
    items: [
      { title: "Chat Models", href: "/docs/apps/chat-models" },
      { title: "Image Models", href: "/docs/apps/image-models" },
    ],
  },
  {
    title: "Premium Apps",
    items: [
      { title: "CleanShot", href: "/docs/apps/cleanshot" },
      { title: "Adshot", href: "/docs/apps/adshot" },
      { title: "3D Studio", href: "/docs/apps/3d-studio" },
    ],
  },
  {
    title: "Billing",
    items: [
      { title: "Understanding Credits", href: "/docs/credits" },
      { title: "Pricing Plans", href: "/docs/pricing" },
      { title: "Top-Up Credits", href: "/docs/top-up" },
    ],
  },
];

interface DocsLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  tableOfContents?: { title: string; href: string }[];
}

export default function DocsLayout({ children, title, description, tableOfContents }: DocsLayoutProps) {
  const pathname = usePathname();

  return (
    <main className="min-h-screen bg-bg-primary">
      <DocsNavbar />

      <div className="pt-20 flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0 border-r border-white/5 h-[calc(100vh-80px)] sticky top-20 overflow-y-auto bg-[#0a0a0a]">
          <div className="p-6">
            {/* Quick Links */}
            <div className="mb-6 space-y-1">
              <Link href="/docs" className={`flex items-center gap-2 text-sm py-1.5 transition-colors ${pathname === "/docs" ? "text-accent-primary" : "text-text-secondary hover:text-text-primary"}`}>
                <Home className="w-4 h-4" />
                Home
              </Link>
              <Link href="/contact" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary py-1.5 transition-colors">
                <HelpCircle className="w-4 h-4" />
                Support
              </Link>
            </div>

            <div className="h-px bg-white/5 mb-6" />

            {/* Navigation Sections */}
            {sidebarNav.map((section) => (
              <div key={section.title} className="mb-6">
                <h3 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.title}>
                        <Link
                          href={item.href}
                          className={`block text-sm py-1.5 px-3 rounded-lg transition-all ${
                            isActive
                              ? "bg-accent-primary/10 text-accent-primary border-l-2 border-accent-primary -ml-0.5 pl-[14px]"
                              : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                          }`}
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-6 py-12">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Content */}
              <div className="lg:col-span-3">
                <h1 className="text-3xl font-bold text-text-primary mb-4">{title}</h1>
                {description && (
                  <p className="text-lg text-text-secondary mb-8">{description}</p>
                )}
                <div className="prose prose-invert prose-sm max-w-none">
                  {children}
                </div>
              </div>

              {/* Table of Contents */}
              {tableOfContents && tableOfContents.length > 0 && (
                <div className="hidden lg:block">
                  <div className="sticky top-24">
                    <h4 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-4">
                      On this page
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {tableOfContents.map((item) => (
                        <li key={item.href}>
                          <a href={item.href} className="text-text-secondary hover:text-accent-primary transition-colors">
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          <DocsFooter />
        </div>
      </div>
    </main>
  );
}
