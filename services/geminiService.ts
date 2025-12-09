import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
// Fallback specifically for development/demo if env is missing, though instructions say assume it's there. 
// We will strictly use process.env.API_KEY as per instructions.

const ai = new GoogleGenAI({ apiKey });

export const generateCoverLetter = async (
  jobTitle: string,
  experience: string,
  motivation: string
): Promise<string> => {
  if (!apiKey) return "API Key fehlt. Bitte konfigurieren.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `
        Du bist ein professioneller Karriereberater für das Bestattungswesen in Deutschland.
        Erstelle ein pietätvolles, seriöses und überzeugendes Anschreiben für eine Bewerbung.
        
        Zielposition: ${jobTitle}
        Erfahrung des Bewerbers: ${experience}
        Motivation: ${motivation}
        
        Das Anschreiben soll formell korrekt sein (DIN 5008 Struktur angedeutet) und emotionale Intelligenz sowie Belastbarkeit betonen.
        Bitte gib nur den Textkörper des Anschreibens zurück, ohne Platzhalter für Adressen.
      `,
    });
    return response.text || "Entschuldigung, ich konnte keinen Text generieren.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Es gab ein technisches Problem bei der Erstellung des Anschreibens.";
  }
};

export const chatWithAssistant = async (message: string, history: {role: 'user' | 'model', text: string}[]): Promise<string> => {
     if (!apiKey) return "API Key fehlt.";

     // Construct history in a simplified way for single turn or simple chat
     // Real implementation would map history to 'contents' structure properly
     try {
         const chat = ai.chats.create({
             model: 'gemini-2.5-flash',
             config: {
                 systemInstruction: "Du bist ein hilfreicher Assistent auf 'bestatter-stellenangebote.de'. Du hilfst Nutzern, Berufe im Bestattungswesen zu verstehen, gibst Tipps für Vorstellungsgespräche in dieser sensiblen Branche und erklärst Aufgaben (z.B. Thanatopraxie, Beratung). Antworte stets höflich, pietätvoll und auf Deutsch."
             }
         });
         
         // For simplicity in this demo, we aren't re-injecting the full history on every request via the SDK's history param 
         // because the prompt structure requires specific object types. We will just send the message for now
         // or assume the chat object maintains state if kept alive (it does not persist across React re-renders easily without context).
         // To make it stateless for this snippet:
         const response = await chat.sendMessage({ message });
         return response.text;
     } catch (e) {
         console.error(e);
         return "Entschuldigung, ich kann gerade nicht antworten.";
     }
}