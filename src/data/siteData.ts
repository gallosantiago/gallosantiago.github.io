
export interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
}

export interface Competition {
  id: number;
  name: string;
  year: string;
  location: string;
  placement: string;
  category: string;
  medal: 'gold' | 'silver' | 'bronze' | 'none';
  link: string;
}

export interface Sponsor {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
  featured: boolean;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string[];
  stats: {
    competitions: string;
    sponsors: string;
    experience: string;
  };
  contact: {
    email: string;
    location: string;
    instagram: string;
    youtube: string;
  };
}

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Santiago Gallo",
  title: "Aggressive Rollerskater",
  subtitle: "Sponsored Athlete & Competitor",
  bio: [
    "Meet Santiago Gallo, a passionate aggressive rollerskater who has been pushing the boundaries of what's possible on wheels. With years of dedication to the sport, he has evolved from a local skater to a sponsored athlete competing at the highest levels.",
    "His journey began in 2012 Buenos Aires, where he first discovered the thrill of aggressive skating. Through countless hours of practice, determination, and an unwavering passion for progression, he has mastered technical tricks and developed his own unique style that sets him apart in competitions.",
    "Today, he continues to inspire the next generation of skaters while representing some of the industry's most respected brands as a sponsored athlete."
  ],
  stats: {
    competitions: "6+",
    sponsors: "4+",
    experience: "11+"
  },
  contact: {
    email: "santiago.gallo96@outlook.com",
    location: "C.A.B.A, Aregentina",
    instagram: "https://www.instagram.com/santigangllo",
    youtube: "https://www.youtube.com/@YourBrothersChannel"
  }
};

// Videos Data - Easy to modify
export const videos: Video[] = [
  {
    id: 1,
    title: "Competition Highlights 2024",
    description: "Video 1",
    thumbnail: "🎥",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Street Skating Session",
    description: "Technical tricks in urban environment",
    thumbnail: "🛹",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Park Session",
    description: "Flow and creativity at the skate park",
    thumbnail: "🏟️",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 4,
    title: "Training Montage",
    description: "Behind the scenes training footage",
    thumbnail: "💪",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];

// Competitions Data - Easy to modify
export const competitions: Competition[] = [
  {
    id: 1,
    name: "World Aggressive Skating Championships",
    year: "2024",
    location: "Los Angeles, CA",
    placement: "3rd Place",
    category: "Street",
    medal: "bronze",
    link: "https://example.com/competition1"
  },
  {
    id: 2,
    name: "National Street Championships",
    year: "2024",
    location: "New York, NY",
    placement: "1st Place",
    category: "Street",
    medal: "gold",
    link: "https://example.com/competition2"
  },
  {
    id: 3,
    name: "Regional Vert Competition",
    year: "2023",
    location: "San Francisco, CA",
    placement: "2nd Place",
    category: "Vert",
    medal: "silver",
    link: "https://example.com/competition3"
  },
  {
    id: 4,
    name: "Summer Street Series",
    year: "2023",
    location: "Chicago, IL",
    placement: "1st Place",
    category: "Street",
    medal: "gold",
    link: "https://example.com/competition4"
  },
  {
    id: 5,
    name: "International Blade Games",
    year: "2023",
    location: "Miami, FL",
    placement: "4th Place",
    category: "Park",
    medal: "none",
    link: "https://example.com/competition5"
  },
  {
    id: 6,
    name: "West Coast Championships",
    year: "2022",
    location: "Seattle, WA",
    placement: "2nd Place",
    category: "Street",
    medal: "silver",
    link: "https://example.com/competition6"
  }
];

// Sponsors Data - Easy to modify
export const sponsors: Sponsor[] = [
  {
    id: 1,
    name: "Rollerblade",
    logo: "🛼",
    description: "Premium inline skates and equipment",
    website: "https://www.rollerblade.com",
    featured: true
  },
  {
    id: 2,
    name: "Aggressive Mall",
    logo: "🏬",
    description: "Aggressive skating gear and apparel",
    website: "https://www.aggressivemall.com",
    featured: true
  },
  {
    id: 3,
    name: "USD Skates",
    logo: "⚡",
    description: "High-performance aggressive skates",
    website: "https://www.usdskates.com",
    featured: false
  },
  {
    id: 4,
    name: "Kaltik",
    logo: "🔧",
    description: "Innovative frames and hardware",
    website: "https://www.kaltik.com",
    featured: false
  },
  {
    id: 5,
    name: "Undercover Wheels",
    logo: "🎯",
    description: "Premium wheels for street skating",
    website: "https://www.underwheels.com",
    featured: false
  },
  {
    id: 6,
    name: "Oysi Frames",
    logo: "⚙️",
    description: "Professional skating frames",
    website: "https://www.oysi.eu",
    featured: false
  }
];
