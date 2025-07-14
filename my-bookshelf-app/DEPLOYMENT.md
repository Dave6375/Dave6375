# Deployment Guide - Object Identifier

This guide explains how to deploy the Object Identifier web app to various hosting platforms.

## Quick Start

Run the setup script for automatic configuration:
```bash
./setup.sh
```

## Manual Deployment

### 1. Build the Project
```bash
npm install
npm run build
```

### 2. Deploy to Hosting Platform

#### GitHub Pages
1. Go to your GitHub repository settings
2. Navigate to "Pages" section
3. Select "Deploy from a branch"
4. Choose "main" branch and "/build" folder
5. Your app will be available at `https://yourusername.github.io/repository-name`

#### Netlify
1. Login to [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Connect your repository
4. Set build command: `npm run build`
5. Set publish directory: `build`
6. Click "Deploy site"

#### Vercel
1. Login to [Vercel](https://vercel.com)
2. Click "New Project"
3. Import your repository
4. Vercel will automatically detect it's a Create React App
5. Click "Deploy"

#### AWS S3 + CloudFront
1. Create an S3 bucket
2. Enable static website hosting
3. Upload the contents of the `build` folder
4. Set up CloudFront distribution for HTTPS
5. Configure custom domain if needed

#### Azure Static Web Apps
1. Go to Azure Portal
2. Create a new Static Web App
3. Connect your GitHub repository
4. Set build location: `my-bookshelf-app`
5. Set app location: `build`
6. Deploy

### 3. PWA Installation

Once deployed, users can install the app:

**Desktop:**
- Chrome: Click the install button in the address bar
- Edge: Click the install button in the address bar
- Firefox: Use "Install" option from the menu

**Mobile:**
- Chrome: Use "Add to Home Screen" from the menu
- Safari: Use "Add to Home Screen" from the share menu
- Edge: Use "Install" from the menu

### 4. Custom Domain (Optional)

Most hosting platforms allow you to add a custom domain:
1. Purchase a domain from a registrar
2. Add CNAME record pointing to your hosting platform
3. Configure the domain in your hosting platform settings
4. Enable HTTPS (usually automatic)

## Environment Variables

If you need to configure API endpoints or other settings:

1. Create a `.env` file in the project root:
```
REACT_APP_API_BASE_URL=https://your-api-endpoint.com
REACT_APP_API_KEY=your-api-key
```

2. Use in your code:
```typescript
const apiUrl = process.env.REACT_APP_API_BASE_URL;
```

3. For production, configure environment variables in your hosting platform.

## Performance Optimization

The app is already optimized for production, but you can:

1. **Enable gzip compression** on your server
2. **Configure caching headers** for static assets
3. **Use a CDN** for faster global delivery
4. **Enable HTTP/2** for better performance
5. **Implement service worker** for offline functionality (already included)

## Monitoring

Consider adding analytics and monitoring:

1. **Google Analytics** - Add tracking code to `public/index.html`
2. **Sentry** - For error tracking
3. **LogRocket** - For user session recording
4. **Lighthouse** - For performance monitoring

## Security

For production deployment:

1. **HTTPS only** - Ensure all traffic is encrypted
2. **Content Security Policy** - Add CSP headers
3. **CORS configuration** - Configure API endpoints properly
4. **Rate limiting** - If using backend APIs
5. **Input validation** - Already implemented in the app

## Troubleshooting

**Build fails:**
- Check Node.js version (requires v16+)
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`

**App doesn't load:**
- Check console for errors
- Verify build folder contents
- Check routing configuration for SPA

**PWA not installing:**
- Ensure HTTPS is enabled
- Check manifest.json is accessible
- Verify service worker is registered

## Support

For issues with deployment or configuration, check:
1. The project README.md
2. Create React App documentation
3. Your hosting platform's documentation
4. GitHub Issues for this project