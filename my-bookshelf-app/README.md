# Object Identifier App

A React application that identifies objects in images using AI-powered analysis. Upload an image and get detailed information about objects including their name, category, historical background, and chemical composition.

## Features

- **Image Upload**: Drag and drop or click to upload images (JPG, PNG, GIF up to 10MB)
- **AI Analysis**: Uses OpenAI's GPT-4 Vision to analyze objects in images
- **Detailed Results**: Provides object name, category, history, and chemical composition
- **Confidence Scoring**: Shows confidence level for each identification
- **Modern UI**: Clean, responsive interface with Tailwind CSS

## Setup and Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. (Optional) Set up OpenAI API key:
   ```bash
   echo "OPENAI_API_KEY=your_api_key_here" > .env
   ```
   
   If no API key is provided, the app will use mock data for testing.

3. Run the application:
   ```bash
   npm run dev
   ```

   This will start both the backend server (port 5000) and frontend (port 3000).

## Usage

1. Open http://localhost:3000 in your browser
2. Upload an image by dragging and dropping or clicking the upload area
3. Click "Analyze Image" to get AI-powered object identification
4. View detailed results including historical background and chemical composition

## API Endpoints

- `GET /api/health` - Health check endpoint
- `POST /api/analyze` - Analyze uploaded image
  - Body: `{"image": "base64-encoded-image-string"}`
  - Returns: `{"results": [{"name": "", "category": "", "history": "", "chemicalCompound": "", "confidence": 0}]}`

## Fixed Issues

The following issues were resolved to get the app running:

1. **Invalid react-scripts version**: Changed from `0.0.0` to `5.0.1`
2. **Incomplete index.tsx**: Added missing ReactDOM.createRoot call
3. **CSS import case mismatch**: Fixed `./app.css` to `./App.css`
4. **Tailwind CSS configuration**: Fixed PostCSS plugin issues and downgraded to v3 for compatibility
5. **ESLint warnings**: Removed unused imports and fixed accessibility issues
6. **Missing API backend**: Created Express server with OpenAI integration
7. **Missing file cleanup**: Removed duplicate index.html from src directory

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, Wouter (routing)
- **Backend**: Express.js, OpenAI API
- **Build Tools**: React Scripts, PostCSS, Autoprefixer
- **Testing**: Jest, React Testing Library

## Development Commands

- `npm start` - Start frontend only
- `npm run server` - Start backend only  
- `npm run dev` - Start both frontend and backend
- `npm run build` - Build production bundle
- `npm test` - Run tests
