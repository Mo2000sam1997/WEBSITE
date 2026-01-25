import { notFound } from "next/navigation";
import appsData from "@/data/apps.json";
import { App } from "@/types/app";
import AppDetailHero from "@/components/AppDetailHero";
import HowItWorksSection from "@/components/HowItWorksSection";
import ExampleGallery from "@/components/ExampleGallery";
import PricingSection from "@/components/PricingSection";
import FAQ from "@/components/FAQ";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return appsData.apps.map((app) => ({
    slug: app.slug,
  }));
}

export default function AppDetailPage({ params }: PageProps) {
  const app = appsData.apps.find((a) => a.slug === params.slug);

  if (!app) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <AppDetailHero app={app} />
      <HowItWorksSection app={app} />
      <ExampleGallery app={app} />
      <PricingSection app={app} />
      <FAQ app={app} />
    </main>
  );
}
