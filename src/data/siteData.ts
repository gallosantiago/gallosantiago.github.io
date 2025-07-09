
export interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  thumbnailImage?: string;
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
  logoImage?: string;
  description: string;
  website: string;
  featured: boolean;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string[];
  profileImage?: string;
  bioImage?: string;
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
  title: "Roller Freestyle",
  subtitle: "Sponsored Athlete & Competitor",
  bio: [
    "Meet Santiago Gallo, a passionate inline freestyle skater who has been pushing the boundaries of what's possible on wheels. With years of dedication to the sport, he has evolved from a local skater to a sponsored athlete competing at the highest levels.",
    "His journey began in 2012 Buenos Aires, where he first discovered the thrill of freestyle rolling. Through countless hours of practice, determination, and an unwavering passion for progression, he has mastered technical tricks and developed his own unique style that sets him apart in competitions.",
    "Today, he continues to inspire the next generation of skaters while representing some of the industry's most respected brands as a sponsored athlete."
  ],
  profileImage: "https://github.com/gallosantiago/gallosantiago.github.io/blob/main/public/santi_profile.jpeg?raw=true",
  bioImage: "https://github.com/gallosantiago/gallosantiago.github.io/blob/main/public/Backroyale.jpg?raw=true",
  stats: {
    competitions: "20+",
    sponsors: "4+",
    experience: "15+"
  },
  contact: {
    email: "santiago.gallo96@outlook.com",
    location: "C.A.B.A, Argentina",
    instagram: "https://www.instagram.com/santigangllo",
    youtube: "https://m.youtube.com/watch?v=d2063AlK2Ug&fbclid=PAQ0xDSwLanq9leHRuA2FlbQIxMAABp66vjhNXjZ5xcZW9ySuKhP-Nn55dhYx5ZkulajQtULnu1uBGlwBSnJ_uKPnJ_aem_mPVcKyUFR1N3kUF8Lkekgg"
  }
};

// Videos Data - Easy to modify
export const videos: Video[] = [
  {
    id: 1,
    title: "USD introduce ",
    description: "A Part For a Big Brand",
    thumbnail: "",
    thumbnailImage: "https://github.com/gallosantiago/gallosantiago.github.io/blob/main/public/{Usdintro.jpg}?raw=true", // "https://github.com/gallosantiago/gallosantiago.github.io/blob/main/public/{Usdintro.jpg}?raw=true"
    url: "https://m.youtube.com/watch?v=d2063AlK2Ug&pp=0gcJCfwAo7VqN5tD"
  },
  {
    id: 2,
    title: "Cordoba Tour",
    description: "2 Weeks En Cordoba With Friends",
    thumbnail: "",
    thumbnailImage: "https://github.com/gallosantiago/gallosantiago.github.io/blob/main/public/{Caravanatour.jpg}?raw=true", // "https://github.com/gallosantiago/gallosantiago.github.io/blob/main/public/{Caravanatour.jpg}?raw=true"
    url: "https://m.youtube.com/watch?v=YN24nY5xiVQ&fbclid=PAQ0xDSwLaoYZleHRuA2FlbQIxMAABp_gn3uWXeloK0su9THa78Q9l35HjPpv5KK5b6nJZwT5L7_5oA-MGznTGPusu_aem_T1plfKtISbK0bRwNmm3Haw#menu"
  },
  {
    id: 3,
    title: "Rey Galactiko",
    description: "Clips From Buenos Aires With Lacru",
    thumbnail: "",
    thumbnailImage: "https://github.com/gallosantiago/gallosantiago.github.io/blob/main/public/{Reygalactiko.jpg}?raw=true", // "https://github.com/gallosantiago/gallosantiago.github.io/blob/main/public/{Reygalactiko.jpg}?raw=true"
    url: "https://m.youtube.com/watch?v=y8AMQW8u-VY&pp=ygUTUmV5IGdhbGFjdGlrbyBsYWNydQ%3D%3D"
  },
  {
    id: 4,
    title: "Leftovers ",
    description: "Leftover Street Clips",
    thumbnail: "",
    thumbnailImage: "https://github.com/gallosantiago/gallosantiago.github.io/blob/main/public/{Leftovers.jpg}?raw=true", // "https://github.com/gallosantiago/gallosantiago.github.io/blob/main/public/{Leftovers.jpg}?raw=true"
    url: "https://www.instagram.com/reel/DDx6Mr-s54-/?igsh=djduM25uNHZudHY2"
  }
];

// Competitions Data - Easy to modify
export const competitions: Competition[] = [
  {
    id: 1,
    name: "World Skate Games",
    year: "2019",
    location: "Barcelona España",
    placement: "20rd Place",
    category: "Park",
    medal: "none",
    link: "https://m.youtube.com/watch?v=RyUEj_n5OQQ&pp=ygUeV3JnIGJhcmNlbG9uYSByb2xsZXIgZnJlZXN0eWxl0gcJCcEJAYcqIYzv"
  },
  {
    id: 2,
    name: "Sudamericano",
    year: "2021",
    location: " San Juan Argentina",
    placement: "13 and 20 st Place",
    category: "Street and Park",
    medal: "none",
    link: ""
  },
  {
    id: 3,
    name: "World Skate Games",
    year: "2022",
    location: "Buenos Aires Argentina",
    placement: "13 and 29 st Place",
    category: "Street and Park",
    medal: "none",
    link: "https://m.youtube.com/watch?v=N1XTN5sksb0&pp=ygUoV29ybGQgIHNrYXRlIGdhbWVzICByb2xsZXIgZnJlc3R5bGUgMjAyMg%3D%3D"
  },
  {
    id: 4,
    name: "National championship ",
    year: "2023",
    location: "Merlo Buenos Aires Argentina",
    placement: "1st Place",
    category: "Street",
    medal: "gold",
    link: "https://www.instagram.com/reel/CtsWDwyg7cA/?igsh=MXUxeHFsenJkMjZjeQ=="
  },
  {
    id: 5,
    name: "Machetazo ",
    year: "2025",
    location: "Uruguay Montevideo",
    placement: "2th Place",
    category: "Street",
    medal: "silver",
    link: "https://example.com/competition5"
  },
  {
    id: 6,
    name: "National Championship",
    year: "2021",
    location: "Villa Marteli Argentina",
    placement: "1nd Place",
    category: "Park",
    medal: "gold",
    link: ""
  }
];

// Sponsors Data - Easy to modify
export const sponsors: Sponsor[] = [
  {
    id: 1,
    name: "USD",
    logo: "",
    logoImage: "https://github.com/gallosantiago/gallosantiago.github.io/blob/main/public/logo_usd.jpg?raw=true",
    description: "Premium inline skates and equipment",
    website: "https://powerslide.com/pages/usd-homepage?srsltid=AfmBOopx5JTK5azKMm4wuj9WtMsyFLWpY5KTnuK5g6NOpOW0nXBmI59j",
    featured: true
  },
  {
    id: 2,
    name: "Crazy People",
    logo: "",
    logoImage: "https://github.com/gallosantiago/gallosantiago.github.io/blob/main/public/logo_crazy_people.webp?raw=true",
    description: "Aggressive skating gear and apparel",
    website: "https://crazypeopleshop.com",
    featured: true
  },
  {
    id: 3,
    name: "Allu",
    logo: "",
    logoImage: "https://github.com/gallosantiago/gallosantiago.github.io/blob/main/public/Allu_logo.jpg?raw=true",
    description: "Wax and Bearing Maintenance ",
    website: "https://www.instagram.com/alluargentina?igsh=b2I3OXF4c2lmamRl",
    featured: false
  },
  {
    id: 4,
    name: "Top Soul",
    logo: "",
    logoImage: "",
    description: "Protection and Straps",
    website: "https://www.instagram.com/topsoulok?igsh=MWVmeHp1cGJqeThzYw==",
    featured: false
  },
];
