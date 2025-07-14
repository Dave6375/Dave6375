import { ObjectResult } from "../pages/home";
import { analyzeObjectImage } from "./openai";

// Configuration from environment variables
const CONFIG = {
  openaiApiKey: process.env.REACT_APP_OPENAI_API_KEY,
  useMockData: process.env.REACT_APP_USE_MOCK_DATA === 'true',
  aiService: process.env.REACT_APP_AI_SERVICE || 'openai'
};

// Mock data for demonstration
const generateMockResults = (imageData: string): ObjectResult[] => {
  const mockObjects = [
    {
      name: "Smartphone",
      category: "Electronics",
      history: "The smartphone evolved from early mobile phones in the 1970s. Modern smartphones combine communication, computing, and internet capabilities in a portable device. They revolutionized how we communicate, work, and access information.",
      chemicalCompound: "Primarily composed of glass (silicon dioxide), aluminum alloy frame, lithium-ion battery, and various rare earth elements including tantalum, tungsten, and gold in electronic components.",
      confidence: 92
    },
    {
      name: "Coffee Cup",
      category: "Kitchenware",
      history: "Coffee cups have been used since the 15th century when coffee consumption spread from Ethiopia to the Middle East and Europe. Modern ceramic cups were developed in the 18th century, providing better heat retention and durability.",
      chemicalCompound: "Typically made from ceramic (clay-based materials including silica, alumina, and feldspar), glazed with silicon dioxide-based coating. Some cups use porcelain (kaolin clay) or stoneware.",
      confidence: 88
    },
    {
      name: "Wooden Desk",
      category: "Furniture",
      history: "Writing desks emerged in medieval monasteries around the 14th century. Modern office desks developed during the Industrial Revolution to accommodate paperwork and later, computers and electronic equipment.",
      chemicalCompound: "Composed primarily of cellulose, hemicellulose, and lignin. Often treated with wood stains (organic solvents and pigments) and protective finishes like polyurethane or lacquer.",
      confidence: 85
    }
  ];

  // Return 1-2 random objects for demo
  const numObjects = Math.floor(Math.random() * 2) + 1;
  return mockObjects.slice(0, numObjects).map(obj => ({
    ...obj,
    confidence: Math.floor(Math.random() * 20 + 80) // Random confidence between 80-100
  }));
};

export class AIAnalysisService {
  private static instance: AIAnalysisService;

  public static getInstance(): AIAnalysisService {
    if (!AIAnalysisService.instance) {
      AIAnalysisService.instance = new AIAnalysisService();
    }
    return AIAnalysisService.instance;
  }

  public async analyzeImage(base64Image: string): Promise<ObjectResult[]> {
    // Check if we should use mock data
    if (CONFIG.useMockData) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      return generateMockResults(base64Image);
    }

    // Check if API key is available
    if (!CONFIG.openaiApiKey) {
      console.warn("No API key found, falling back to mock data");
      await new Promise(resolve => setTimeout(resolve, 1000));
      return generateMockResults(base64Image);
    }

    try {
      // Use real AI service
      switch (CONFIG.aiService) {
        case 'openai':
          return await analyzeObjectImage(base64Image);
        default:
          throw new Error(`Unsupported AI service: ${CONFIG.aiService}`);
      }
    } catch (error) {
      console.error("AI Analysis failed, falling back to mock data:", error);
      // Fallback to mock data if API fails
      return generateMockResults(base64Image);
    }
  }

  public isUsingMockData(): boolean {
    return CONFIG.useMockData || !CONFIG.openaiApiKey;
  }

  public getConfiguration() {
    return {
      hasApiKey: !!CONFIG.openaiApiKey,
      useMockData: CONFIG.useMockData,
      aiService: CONFIG.aiService
    };
  }
}

// Export singleton instance
export const aiAnalysisService = AIAnalysisService.getInstance();