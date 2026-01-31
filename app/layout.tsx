import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "@/components/QueryProvider";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Mindhello - Simulate the World with AI",
  description: "Simulate the world with AI. Create stunning videos, images, and 3D models. The ultimate creative workspace powered by AI.",
  keywords: ["AI", "simulate", "video generation", "image generation", "3D models", "creative tools", "AI workspace"],
  openGraph: {
    title: "Mindhello - Simulate the World",
    description: "Simulate the world with AI. Create videos, images, and 3D models instantly.",
    siteName: "Mindhello",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindhello - Simulate the World",
    description: "Simulate the world with AI. Create videos, images, and 3D models instantly.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <QueryProvider>{children}</QueryProvider>
        <CookieBanner />
      </body>
    </html>
  );
}
