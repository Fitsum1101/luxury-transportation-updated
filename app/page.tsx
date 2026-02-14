"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Preloader } from "@/components/preloader";
import { HeroSection } from "@/components/sections/hero-section";
import { IntroSection } from "@/components/sections/intro-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ServicesSection } from "@/components/sections/services-section";
import { FleetSection } from "@/components/sections/fleet-section";
import { ContactSection } from "@/components/sections/contact-section";
import data from "@/lib/data.json";
import ChatBot from "@/components/sections/chatbot/ChatBot";
import { TrustedClients } from "@/components/sections/TrustedClients";
import { Experience } from "@/components/sections/Experience";
import { SafetyConvenience } from "@/components/sections/SafetyConvenience";

export default function Home() {
  const {
    pages: { home, services, contact, fleet },
  } = data;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Preloader />
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        headline={home.hero.headline}
        subheadline={home.hero.subheadline}
        primaryCta={home.hero.primaryCta}
        secondaryCta={home.hero.secondaryCta}
      />

      {/* Intro Section */}
      <IntroSection text={home.intro.text} cta={home.intro.cta} />

      <Experience />

      <SafetyConvenience />

      {/* Features Grid */}
      <FeaturesSection features={home.features} />

      {/* Services Section */}
      <ServicesSection
        title={services.title}
        servicesList={services.servicesList}
      />

      {/* Fleet Section */}
      <section id="fleet">
        <FleetSection fleet={fleet} />
      </section>

      {/* Contact Section */}
      <ContactSection
        title={contact.title}
        phone={contact.phone}
        email={contact.email}
        address={contact.address}
      />

      {/* Footer */}
      <TrustedClients />
      <Footer />
      <ChatBot />
    </main>
  );
}
