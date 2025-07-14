const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Initialize OpenAI (but make it optional for testing)
let openai;
if (process.env.OPENAI_API_KEY) {
  openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

// API endpoint for object analysis
app.post('/api/analyze', async (req, res) => {
  try {
    const { image } = req.body;
    
    if (!image) {
      return res.status(400).json({ error: 'No image provided' });
    }

    // If no OpenAI API key, return mock data
    if (!openai) {
      console.log('No OpenAI API key found, returning mock data');
      const mockResults = [
        {
          name: "Coffee Mug",
          category: "Household Item",
          history: "Coffee mugs have been used since ancient times. The modern ceramic mug evolved from traditional cups and became popular in the 20th century as coffee consumption increased worldwide.",
          chemicalCompound: "Primarily composed of ceramic materials like clay (aluminum silicate), feldspar, and silica. Glazes may contain lead oxide, tin oxide, or other metal oxides for coloring.",
          confidence: 85
        }
      ];
      
      return res.json({ results: mockResults });
    }

    // Use OpenAI for real analysis
    const visionResponse = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are an expert object identification assistant. Analyze the image and identify the main objects. For each object, provide: name, category, historical background, and chemical composition. Return as JSON with an array of objects, each having name, category, history, chemicalCompound, and confidence (0-100) fields."
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Please analyze this image and identify the main objects with their historical background and chemical composition."
            },
            {
              type: "image_url",
              image_url: {
                url: `data:image/jpeg;base64,${image}`
              }
            }
          ],
        },
      ],
      response_format: { type: "json_object" }
    });

    const content = visionResponse.choices[0].message.content;
    if (!content) {
      throw new Error("No content received from OpenAI");
    }

    const result = JSON.parse(content);
    res.json({ results: result.objects || result.results || [] });
    
  } catch (error) {
    console.error('Error analyzing image:', error);
    res.status(500).json({ error: 'Failed to analyze image' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`OpenAI API Key: ${process.env.OPENAI_API_KEY ? 'Configured' : 'Not configured - using mock data'}`);
});