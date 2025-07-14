import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.REACT_APP_OPENAI_API_KEY });

export async function analyzeBookshelf(base64Image: string) {
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