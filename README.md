
# Aggressive Rollerskater Landing Page

A modern, responsive landing page for an aggressive rollerskater featuring bio, competitions, videos, and sponsors.

## Features

- 🎨 Modern dark theme with red accents
- 📱 Fully responsive design
- 🎬 Video showcase section
- 🏆 Competition history with medal tracking
- 🤝 Sponsors display
- 📧 Contact information
- 🧭 Side navigation for easy browsing
- ⚡ Smooth animations and transitions

## Easy Content Management

All content can be easily modified in the `src/data/siteData.ts` file:

### Adding/Removing Videos
Edit the `videos` array in `siteData.ts`:
```typescript
export const videos: Video[] = [
  {
    id: 1,
    title: "Your Video Title",
    description: "Video description",
    thumbnail: "🎥", // Emoji or image path
    url: "https://youtube.com/watch?v=..."
  },
  // Add more videos here
];
```

### Adding/Removing Competitions
Edit the `competitions` array in `siteData.ts`:
```typescript
export const competitions: Competition[] = [
  {
    id: 1,
    name: "Competition Name",
    year: "2024",
    location: "City, State",
    placement: "1st Place",
    category: "Street",
    medal: "gold", // gold, silver, bronze, or none
    link: "https://competition-website.com"
  },
  // Add more competitions here
];
```

### Adding/Removing Sponsors
Edit the `sponsors` array in `siteData.ts`:
```typescript
export const sponsors: Sponsor[] = [
  {
    id: 1,
    name: "Sponsor Name",
    logo: "🛼", // Emoji or image path
    description: "Sponsor description",
    website: "https://sponsor-website.com",
    featured: true // true for main sponsors, false for others
  },
  // Add more sponsors here
];
```

### Updating Personal Information
Edit the `personalInfo` object in `siteData.ts` to update name, bio, contact info, and social links.

## GitHub Pages Deployment

### Method 1: Using GitHub Actions (Recommended)

1. Push your code to a GitHub repository
2. Go to your repository settings
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The site will automatically build and deploy on every push to main

### Method 2: Manual Deployment

1. Build the project locally:
   ```bash
   npm run build
   ```

2. Push the `dist` folder to the `gh-pages` branch:
   ```bash
   # Install gh-pages if not already installed
   npm install -g gh-pages
   
   # Deploy to gh-pages branch
   gh-pages -d dist
   ```

3. Enable GitHub Pages in your repository settings and select the `gh-pages` branch

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

## Customization

- **Colors**: The design uses a red accent color theme. To change colors, update the Tailwind classes in the components.
- **Content**: All content is centralized in `src/data/siteData.ts` for easy management.
- **Styling**: The project uses Tailwind CSS for styling. Modify the classes in the components to change the appearance.

## Built With

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## License

This project is open source and available under the [MIT License](LICENSE).
