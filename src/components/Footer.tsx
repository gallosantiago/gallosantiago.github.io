
import { Instagram, Youtube, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a 
                href="mailto:santiago.gallo96@outlook.com"
                className="flex items-center gap-3 text-gray-300 hover:text-red-400 transition-colors duration-300"
              >
                <Mail className="w-5 h-5 text-red-400" />
                <span>santiago.gallo96@outlook.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-red-400" />
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/santigangllo?igsh=bWtsdDdubmE1OHp0" // Replace with actual Instagram
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://m.youtube.com/watch?v=d2063AlK2Ug" // Replace with actual YouTube
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300 group"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('bio')}
                className="block text-gray-300 hover:text-red-400 transition-colors duration-300 text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('competitions')}
                className="block text-gray-300 hover:text-red-400 transition-colors duration-300 text-left"
              >
                Competitions
              </button>
              <button 
                onClick={() => scrollToSection('videos')}
                className="block text-gray-300 hover:text-red-400 transition-colors duration-300 text-left"
              >
                Videos
              </button>
              <button 
                onClick={() => scrollToSection('sponsors')}
                className="block text-gray-300 hover:text-red-400 transition-colors duration-300 text-left"
              >
                Sponsors
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Santiago Gallo. All rights reserved. Built with passion for roller freestyle.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
