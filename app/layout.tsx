import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "@/components/QueryProvider";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Labobox - All the AI tools you need, in one place",
  description: "Flexible monthly plans. Browse 10+ AI apps for image generation, chat, 3D models, and more.",
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
