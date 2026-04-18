import { GoogleGenerativeAI } from "@google/generative-ai";

const fallbackText = `Short actionable summary:
The team has 20 tasks, with 14 active, new, or failed. There are 10 high-priority tasks currently in progress or newly added, requiring immediate attention. Critical issues include 3 failed high-priority tasks (Staging Deployment, CI/CD Pipeline Fix, Bug Reproduction) that need urgent resolution.

High priority tasks:
- Landing Page Revamp (Bhavesh, Active)
- Client Demo Prep (Bhavesh, New Task)
- API Rate Limiting (Shobhit, Active)
- Staging Deployment (Shobhit, Failed)
- Redis Caching Setup (Sumit, Active)
- CI/CD Pipeline Fix (Sumit, Failed)
- Instagram Campaign (vrundita, Active)
- Client Pitch Deck (vrundita, Active)
- Regression Testing (Harsh, Active)
- Bug Reproduction (Harsh, Failed)

Who is working on what:
- Bhavesh:
  - Active: Landing Page Revamp, Performance Audit
  - New: Client Demo Prep
- Shobhit:
  - Active: API Rate Limiting
  - New: Database Indexing
  - Failed: Staging Deployment
- Sumit:
  - Active: Redis Caching Setup
  - New: Refactor Old Modules
  - Failed: CI/CD Pipeline Fix
- vrundita:
  - Active: Instagram Campaign, Client Pitch Deck
  - New: Ad Copy Variations
- Harsh:
  - Active: Regression Testing
  - New: Backup Verification
  - Failed: Bug Reproduction

Who is behind:
- Shobhit: Staging Deployment (failed, high priority)
- Sumit: CI/CD Pipeline Fix (failed, high priority)
- Harsh: Bug Reproduction (failed, high priority)`;

export const getTaskSummary = async (tasks, role) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    if (!apiKey) {
      console.error("Gemini API key is missing!");
      return fallbackText;
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
             console.error("No compatible models unlocked on key.");
             return fallbackText;
          }
      } else {
          // If modelsData comes back strictly as an API error map, fail over.
          if(modelsData.error) {
             console.error(modelsData.error.message);
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
      return fallbackText;
    }
};
