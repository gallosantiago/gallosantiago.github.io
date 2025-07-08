
import { Medal, Calendar, MapPin, Trophy, ExternalLink } from "lucide-react";
import { competitions } from "@/data/siteData";

const CompetitionsSection = () => {
  const getMedalColor = (medal: string) => {
    switch (medal) {
      case "gold":
        return "text-yellow-400";
      case "silver":
        return "text-gray-300";
      case "bronze":
        return "text-amber-600";
      default:
        return "text-gray-500";
    }
  };

  const getMedalIcon = (medal: string) => {
    if (medal === "none") {
      return <Trophy className="w-6 h-6 text-gray-500" />;
    }
    return <Medal className={`w-6 h-6 ${getMedalColor(medal)}`} />;
  };

  // Calculate stats
  const goldMedals = competitions.filter(c => c.medal === 'gold').length;
  const silverMedals = competitions.filter(c => c.medal === 'silver').length;
  const bronzeMedals = competitions.filter(c => c.medal === 'bronze').length;

  const handleViewAllCompetitions = () => {
    const element = document.getElementById('competitions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="competitions" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Competition History
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A record of achievements and competitive performances in aggressive skating competitions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitions.map((competition) => (
            <div 
              key={competition.id}
              className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-600"
            >
              {/* Competition Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                    {competition.name}
                  </h3>
                  <div className="flex items-center gap-2 text-red-400 text-sm mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>{competition.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{competition.location}</span>
                  </div>
                </div>
                <div className="ml-4">
                  {getMedalIcon(competition.medal)}
                </div>
              </div>

              {/* Results */}
              <div className="border-t border-gray-600 pt-4 mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Placement</div>
                    <div className="text-lg font-semibold text-white">{competition.placement}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 mb-1">Category</div>
                    <div className="text-sm font-medium text-red-400 bg-red-400/10 px-2 py-1 rounded">
                      {competition.category}
                    </div>
                  </div>
                </div>
              </div>

              {/* Competition Link */}
              <a 
                href={competition.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-semibold transition-colors duration-300 text-sm"
              >
                View Details
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Competition Stats Summary */}
        <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-8 border border-gray-600">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Competition Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">{goldMedals}</div>
              <div className="text-sm text-gray-400">Gold Medals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-300 mb-2">{silverMedals}</div>
              <div className="text-sm text-gray-400">Silver Medals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">{bronzeMedals}</div>
              <div className="text-sm text-gray-400">Bronze Medals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">{competitions.length}</div>
              <div className="text-sm text-gray-400">Total Competitions</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button 
            onClick={handleViewAllCompetitions}
            className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-full font-semibold hover:from-red-500 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            View Competition Archive
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompetitionsSection;
