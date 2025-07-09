
import { Mail, MapPin } from "lucide-react";
import { personalInfo } from "@/data/siteData";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to connect? Reach out for collaborations, sponsorship opportunities, or just talk about skating!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-8 border border-gray-600">
            <Mail className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <a 
              href={`mailto:${personalInfo.contact.email}`}
              className="text-red-400 hover:text-red-300 transition-colors duration-300"
            >
              {personalInfo.contact.email}
            </a>
          </div>

          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-8 border border-gray-600">
            <MapPin className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Location</h3>
            <p className="text-gray-300">{personalInfo.contact.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
