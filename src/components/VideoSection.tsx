
import { Play, ExternalLink } from "lucide-react";
import { videos, personalInfo } from "@/data/siteData";

const VideoSection = () => {
  const handleViewAllVideos = () => {
    window.open(personalInfo.contact.youtube, "_blank");
  };

  return (
    <section id="videos" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Video Showcase
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Watch the latest videos showcasing skills, competitions, and behind-the-scenes content
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div 
              key={video.id}
              className="group relative bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-600"
            >
              {/* Video Thumbnail */}
              <div className="aspect-video bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-400/5 to-red-600/5"></div>
                
                {video.thumbnailImage ? (
                  <img 
                    src={video.thumbnailImage} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="relative z-10 text-6xl">{video.thumbnail}</span>
                )}
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                  <button 
                    onClick={() => window.open(video.url, "_blank")}
                    className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300 hover:bg-red-400"
                  >
                    <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                  </button>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {video.description}
                </p>
                <a 
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-semibold transition-colors duration-300"
                >
                  Watch Video
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button 
            onClick={handleViewAllVideos}
            className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-full font-semibold hover:from-red-500 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            View All Videos
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
