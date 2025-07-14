# Object Identifier - AI-Powered Image Analysis

A React web application that allows users to upload images and identify objects using AI-powered analysis. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Drag & Drop Upload**: Easy image upload with drag-and-drop functionality
- **Image Preview**: Preview uploaded images before analysis
- **Mock AI Analysis**: Demo functionality with simulated AI object identification
- **Responsive Design**: Works on desktop and mobile devices
- **PWA Ready**: Installable as a Progressive Web App
- **Accessibility**: Built with accessibility in mind

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd my-bookshelf-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To create a production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

### Deployment Options

#### Option 1: Static File Hosting
Upload the contents of the `build` folder to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Azure Static Web Apps

#### Option 2: Local Server
Install and run a local server:
```bash
npm install -g serve
serve -s build
```

#### Option 3: Docker (Optional)
Create a `Dockerfile` in the project root:
```dockerfile
FROM nginx:alpine
COPY build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t object-identifier .
docker run -p 80:80 object-identifier
```

### PWA Installation
Users can install this app on their devices:
- **Desktop**: Click the install button in the browser address bar
- **Mobile**: Use "Add to Home Screen" from the browser menu

## API Integration

The app currently uses mock data for demonstration. To integrate with a real AI service:

1. Uncomment the API call section in `src/pages/home.tsx`
2. Replace the mock endpoint with your actual API
3. Update the request format to match your API requirements

Example API integration:
```typescript
const response = await fetch('/api/analyze', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ image: base64 }),
});
```

## Available Scripts

### `npm start`
Runs the app in development mode. The page will reload when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm run eject`
**Note: This is a one-way operation!** 
Removes the single build dependency and copies configuration files.

## Technology Stack

- **React 19** - User interface framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Wouter** - Lightweight routing
- **React Query** - Data fetching and caching
- **Lucide React** - Icons
- **Framer Motion** - Animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is private and proprietary.