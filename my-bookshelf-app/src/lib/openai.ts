import OpenAI from "openai";
import { ObjectResult } from "../pages/home";

// Initialize OpenAI client with API key from environment
const getOpenAIClient = () => {
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OpenAI API key not found. Please set REACT_APP_OPENAI_API_KEY in your environment variables.");
  }
  return new OpenAI({ 
    apiKey,
    dangerouslyAllowBrowser: true // Required for client-side usage
  });
};

export async function analyzeObjectImage(base64Image: string): Promise<ObjectResult[]> {
  const openai = getOpenAIClient();
  
  const visionResponse = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: `You are an expert object identification AI. Analyze the image and identify the main objects present. 
        For each object, provide:
        - name: The specific name of the object
        - category: The general category it belongs to
        - history: Brief historical background or interesting facts about the object
        - chemicalCompound: Information about the material composition or chemical properties
        - confidence: A number between 0 and 100 indicating your confidence level
        
        Return the results as a JSON object with an 'objects' array containing these fields.
        Focus on the most prominent and identifiable objects in the image.`
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Please analyze this image and identify the main objects present."
          },
          {
            type: "image_url",
            image_url: {
              url: `data:image/jpeg;base64,${base64Image}`
            }
          }
        ],
      },
    ],
    response_format: { type: "json_object" },
    max_tokens: 1000
  });

  const content = visionResponse.choices[0].message.content;
  if (!content) {
    throw new Error("No content received from OpenAI");
  }

  const result = JSON.parse(content);
  return result.objects || [];
}

// Legacy function for backward compatibility
export async function analyzeBookshelf(base64Image: string) {
  const openai = getOpenAIClient();
  
  const visionResponse = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "You are a book identification expert. Analyze the image and identify individual books visible in the bookshelf. For each book, extract the title, author, and if possible, the genre. Return the results as a JSON array with each book having title, author, genre (optional), and confidence fields. The confidence should be a number between 0 and 1 indicating how sure you are about the identification."
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Please analyze this bookshelf image and identify the books."
          },
          {
            type: "image_url",
            image_url: {
              url: `data:image/jpeg;base64,${base64Image}`
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
  return result.books;
}