import { GoogleGenerativeAI } from "@google/generative-ai";

export const getTaskSummary = async (tasks, role) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    if (!apiKey) {
      console.error("Gemini API key is missing!");
      return "Error: Gemini API key is missing from environment variables.";
    }
  
    let systemPrompt = "";
    
    if (role === 'admin') {
      systemPrompt = `You are a team productivity assistant.
      
  Analyze these tasks.
  Return:
  - Short actionable summary
  - High priority tasks
  - Who is working on what
  - Who is behind
  
  Return plain text.`;
    } else if (role === 'employee') {
      systemPrompt = `You are a team productivity assistant.
      
What should I do now?
Based on the specific tasks provided:
- Prioritize tasks
- Suggest next steps

Return plain text.`;
    }
  
    const finalPrompt = `${systemPrompt}\n\nTask Data:\n${JSON.stringify(tasks, null, 2)}`;
  
    try {
      // 1. Dynamically scan the API Key's authorized Models to prevent 404 errors!
      const modelsResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
      const modelsData = await modelsResponse.json();
      
      let targetModelString = "gemini-1.5-flash"; // default fallback

      if (modelsData && modelsData.models) {
          const compatibleModels = modelsData.models.filter(m => 
              m.supportedGenerationMethods && m.supportedGenerationMethods.includes("generateContent")
          );
          if (compatibleModels.length > 0) {
              // Extract string safely e.g. "models/gemini-pro" -> "gemini-pro"
              targetModelString = compatibleModels[0].name.replace("models/", "");
          } else {
             return "Error: No compatible text-generation models unlocked on your Google API Key Tier.";
          }
      }

      // 2. Transmit to explicit dynamically bound Model
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: targetModelString });

      const result = await model.generateContent(finalPrompt);
      const response = await result.response;
      return response.text();
  
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Error reaching Gemini: " + error.message;
    }
};
