
import { ChevronDown } from "lucide-react";
import { personalInfo } from "@/data/siteData";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 overflow-hidden">
      {/* Background Pattern - more subtle */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 relative inline-block">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-red-500 to-red-700 p-1">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-6xl overflow-hidden">
              <img src="https://github.com/gallosantiago/gallosantiago.github.io/blob/main/public/santi.jpeg?raw=true" className="w-full h-full object-cover rounded-full"></img>
            </div>
          </div>
          {/* Reduced glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-red-600 rounded-full blur-lg opacity-10"></div>
        </div>

        {/* Main Content */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
          {personalInfo.name}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-2 font-light">
          {personalInfo.title}
        </p>
        
        <p className="text-lg text-red-400 mb-8 font-semibold">
          {personalInfo.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={() => scrollToSection('videos')}
            className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-full font-semibold hover:from-red-500 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Watch Videos
          </button>
          <button 
            onClick={() => scrollToSection('sponsors')}
            className="px-8 py-3 border-2 border-red-400 text-red-400 rounded-full font-semibold hover:bg-red-400 hover:text-gray-900 transition-all duration-300"
          >
            View Sponsors
          </button>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-red-400" />
      </div>
    </section>
  );
};

export default HeroSection;
