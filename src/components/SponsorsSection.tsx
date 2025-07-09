
import { ExternalLink, Star, Mail } from "lucide-react";
import { sponsors } from "@/data/siteData";

const SponsorsSection = () => {
  // Placeholder sponsor data
  const mainSponsors = sponsors.filter(sponsor => sponsor.featured);
  const supportSponsors = sponsors.filter(sponsor => !sponsor.featured);

  const handleSponsorshipInquiry = () => {
    // Open email client or contact form
    window.location.href = "mailto:santiago.gallo96@outlook.com?subject=Sponsorship Inquiry&body=Hi, I'm interested in discussing sponsorship opportunities...";
  };

  return (
    <section id="sponsors" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Sponsors & Partners
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Proud to be supported by these amazing brands that share our passion for roller freestyle 
          </p>
        </div>

        {/* Main Sponsors */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <h3 className="text-2xl font-bold text-white">Main Sponsors</h3>
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mainSponsors.map((sponsor) => (
              <div 
                key={sponsor.id}
                className="group bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-8 text-center hover:from-gray-700 hover:to-gray-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-gray-600 hover:border-red-400/30"
              >
                {/* Logo */}
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-400/10 to-red-600/10 rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  {sponsor.logo.startsWith('http') ? (
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span>{sponsor.logo}</span>
                  )}
                </div>

                {/* Sponsor Info */}
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                  {sponsor.name}
                </h4>
                <p className="text-gray-400 mb-6 text-sm">
                  {sponsor.description}
                </p>

                {/* Visit Website Link */}
                <a 
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-semibold transition-colors duration-300 group-hover:underline"
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Support Sponsors */}
        {supportSponsors.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-white text-center mb-8">Supporting Partners</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {supportSponsors.map((sponsor) => (
                <div 
                  key={sponsor.id}
                  className="group bg-gray-700 rounded-lg p-6 text-center hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-gray-600 rounded-full flex items-center justify-center text-2xl group-hover:bg-gray-500 transition-colors duration-300 overflow-hidden">
                    {sponsor.logo.startsWith('http') ? (
                      <img 
                        src={sponsor.logo} 
                        alt={sponsor.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <span>{sponsor.logo}</span>
                    )}
                  </div>

                  <h5 className="text-sm font-semibold text-white mb-2">{sponsor.name}</h5>
                  <a 
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-red-400 hover:text-red-300 transition-colors duration-300"
                  >
                    Visit
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sponsorship CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl border border-gray-600">
          <h3 className="text-2xl font-bold text-white mb-4">Interested in Sponsorship?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Looking to partner with a dedicated athlete who represents your brand with passion and professionalism? Get in touch to discuss sponsorship opportunities.
          </p>
          <button 
            onClick={handleSponsorshipInquiry}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-full font-semibold hover:from-red-500 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <Mail className="w-5 h-5" />
            Contact for Partnerships
          </button>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
