# API Integration Setup Guide

This guide will help you integrate the Object Identifier app with real AI services.

## Quick Start with OpenAI

### 1. Get Your OpenAI API Key

1. Visit [OpenAI API Keys](https://platform.openai.com/api-keys)
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy the key (starts with `sk-`)
5. **Important**: Keep this key secure and never share it publicly

### 2. Configure the App

1. **Copy the environment template**:
   ```bash
   cp .env.example .env
   ```

2. **Edit the `.env` file**:
   ```env
   # Replace with your actual API key
   REACT_APP_OPENAI_API_KEY=sk-your-actual-api-key-here
   
   # Set to false to use real AI analysis
   REACT_APP_USE_MOCK_DATA=false
   
   # AI service to use (currently supports: openai)
   REACT_APP_AI_SERVICE=openai
   ```

3. **Restart the development server**:
   ```bash
   npm start
   ```

### 3. Test the Integration

1. Open the app in your browser
2. Click the settings icon (⚙️) next to the title
3. Verify the configuration shows:
   - ✅ API Key: Configured
   - ✅ Mode: Real AI Analysis
   - ✅ AI Service: openai

4. Upload an image and click "Analyze Image"
5. The app will now use OpenAI's GPT-4 Vision API for real object analysis!

## Configuration Options

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `REACT_APP_OPENAI_API_KEY` | Your OpenAI API key | (none) |
| `REACT_APP_USE_MOCK_DATA` | Use mock data instead of real AI | `true` |
| `REACT_APP_AI_SERVICE` | AI service to use | `openai` |

### Mock Data Mode

When `REACT_APP_USE_MOCK_DATA=true` or no API key is configured, the app uses mock data. This is useful for:
- Testing the UI without API costs
- Demonstrating functionality
- Development without requiring API keys

## Production Deployment

### Option 1: Environment Variables at Build Time

```bash
REACT_APP_OPENAI_API_KEY=sk-your-key \
REACT_APP_USE_MOCK_DATA=false \
npm run build
```

### Option 2: Production Environment File

Create `.env.production`:
```env
REACT_APP_OPENAI_API_KEY=sk-your-key-here
REACT_APP_USE_MOCK_DATA=false
REACT_APP_AI_SERVICE=openai
```

Then build:
```bash
npm run build
```

### Option 3: Platform-Specific Configuration

#### Netlify
Add environment variables in your Netlify dashboard:
- `REACT_APP_OPENAI_API_KEY`: Your API key
- `REACT_APP_USE_MOCK_DATA`: `false`

#### Vercel
Add environment variables in your Vercel dashboard:
- `REACT_APP_OPENAI_API_KEY`: Your API key
- `REACT_APP_USE_MOCK_DATA`: `false`

#### GitHub Pages
Use GitHub Secrets and GitHub Actions:
1. Add `REACT_APP_OPENAI_API_KEY` to repository secrets
2. Update your GitHub Actions workflow to use the secret

## Security Considerations

⚠️ **Important Security Notes**:

1. **Client-side API keys are visible to users** - This is a limitation of React apps
2. **For production use**, consider implementing a backend API that:
   - Stores API keys securely on the server
   - Handles AI service requests server-side
   - Implements rate limiting and usage monitoring
   - Provides authentication and authorization

3. **Never commit API keys to version control**
4. **Monitor your API usage** to prevent unexpected charges
5. **Set up usage limits** in your OpenAI account

## Troubleshooting

### Common Issues

1. **"No API key found" error**:
   - Ensure your `.env` file is in the project root
   - Check that the variable name is exactly `REACT_APP_OPENAI_API_KEY`
   - Restart the development server after changing `.env`

2. **"OpenAI API error"**:
   - Verify your API key is correct
   - Check your OpenAI account has sufficient credits
   - Ensure your API key has the necessary permissions

3. **Build fails**:
   - Make sure all environment variables are set correctly
   - Check that the OpenAI package is installed: `npm install openai`

4. **Mock data still showing with API key**:
   - Ensure `REACT_APP_USE_MOCK_DATA=false` in your `.env`
   - Clear your browser cache and restart the server

### Getting Help

If you encounter issues:
1. Check the browser console for error messages
2. Verify your API key is valid in your OpenAI dashboard
3. Test with `REACT_APP_USE_MOCK_DATA=true` to isolate API issues
4. Check your OpenAI account usage and limits

## Cost Considerations

- GPT-4 Vision API costs vary based on image size and complexity
- Each analysis typically costs $0.01-$0.03 per image
- Consider implementing usage limits for production deployments
- Monitor your OpenAI usage dashboard regularly

## Next Steps

Once you have the basic integration working, you can:
1. Implement server-side API for better security
2. Add rate limiting and caching
3. Support multiple AI services
4. Add user authentication
5. Implement usage analytics and monitoring