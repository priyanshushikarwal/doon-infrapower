import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getSolarAssessment = async (
  bill: number,
  city: string,
  roofSize: number
): Promise<string> => {
  if (!apiKey) {
    return "AI Advisor unavailable: API Key missing.";
  }

  try {
    const prompt = `
      Act as a senior solar engineer for Doon Infrapower (based in Jaipur, India).
      The user is in ${city}, pays roughly ₹${bill}/month, and has ${roofSize} sq ft of roof space.
      
      Provide a concise, 3-sentence assessment:
      1. Is this a good candidate for solar (mention PM Surya Ghar if relevant)?
      2. Estimated system size needed (kW).
      3. One specific environmental benefit or ROI tip relevant to Indian context.
      
      Tone: Professional, encouraging, expert. Do not use markdown formatting.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Could not generate assessment at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "We are currently experiencing high traffic on our assessment engine. Please try again later.";
  }
};