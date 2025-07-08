
import { Zap, Trophy, Users } from "lucide-react";
import { personalInfo } from "@/data/siteData";

const BioSection = () => {
  return (
    <section id="bio" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            About The Athlete
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Text */}
          <div className="space-y-6">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <Trophy className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{personalInfo.stats.competitions}</div>
                <div className="text-sm text-gray-400">Competitions</div>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{personalInfo.stats.sponsors}</div>
                <div className="text-sm text-gray-400">Sponsors</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{personalInfo.stats.experience}</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Photo Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-red-400/10 to-red-600/10">
                📸
              </div>
            </div>
            {/* Reduced glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-red-400/5 to-red-600/5 rounded-2xl blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
