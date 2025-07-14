#!/bin/bash

# Object Identifier - Quick Setup Script
# This script helps you quickly deploy the Object Identifier web app

echo "🚀 Object Identifier - Quick Setup"
echo "================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v16 or higher."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "❌ Node.js version is too old. Please install Node.js v16 or higher."
    exit 1
fi

echo "✅ Node.js $(node --version) found"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Build the project
echo "🏗️  Building production version..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Production build completed successfully"

# Check if serve is available globally
if ! command -v serve &> /dev/null; then
    echo "📦 Installing serve globally..."
    npm install -g serve
fi

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "To run the app:"
echo "1. Development mode: npm start"
echo "2. Production mode: serve -s build"
echo ""
echo "The build folder is ready for deployment to any static hosting service."
echo "You can upload the contents of the 'build' folder to:"
echo "- GitHub Pages"
echo "- Netlify"
echo "- Vercel"
echo "- AWS S3"
echo "- Azure Static Web Apps"
echo ""
echo "For PWA installation, users can:"
echo "- Desktop: Click the install button in the browser"
echo "- Mobile: Use 'Add to Home Screen' from the browser menu"