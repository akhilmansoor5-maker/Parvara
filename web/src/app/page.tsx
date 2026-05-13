import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { MotionSection } from "@/components/MotionSection";
import { FeaturedGrid } from "@/components/FeaturedGrid";
import { AboutStrip } from "@/components/AboutStrip";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { PhilosophySection } from "@/components/PhilosophySection";
import { GalleryGrid } from "@/components/GalleryGrid";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <MotionSection>
          <FeaturedGrid />
        </MotionSection>
        <MotionSection>
          <AboutStrip />
        </MotionSection>
        <MotionSection>
          <UpcomingEvents />
        </MotionSection>
        <MotionSection>
          <PhilosophySection />
        </MotionSection>
        <MotionSection>
          <GalleryGrid />
        </MotionSection>
        <MotionSection>
          <NewsletterSection />
        </MotionSection>
      </main>
      <Footer />
    </>
  );
}
