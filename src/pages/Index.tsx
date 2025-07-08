
import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
import CompetitionsSection from "@/components/CompetitionsSection";
import VideoSection from "@/components/VideoSection";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";
import NavigationSidebar from "@/components/NavigationSidebar";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavigationSidebar />
      <div id="hero">
        <HeroSection />
      </div>
      <BioSection />
      <CompetitionsSection />
      <VideoSection />
      <SponsorsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
