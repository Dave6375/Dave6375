import OpenAI from "openai";
import { ObjectResult } from "../pages/home";


  const visionResponse = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "You are an expert object identification and analysis system. Analyze the image and identify individual objects visible in the image. For each object, provide: the name, category, historical background about how it came to be, and chemical composition. Return the results as a JSON array with each object having name, category, history, chemicalCompound, and confidence fields. The confidence should be a number between 0 and 100 indicating how sure you are about the identification. Be detailed in the history and chemical composition explanations."
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Please analyze this image and identify the objects, providing their history and chemical composition."
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
  return result.objects;
}