import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
const modelPrompt = 'Você é um assistente que ajuda o usuário a organizar sua rotina semanal e/ou diária e fornecer dicas. Você receberá um array de objetos contendo as tarefas que o usuário possui pendente. A resposta deve ser fornecida em formato Markdown para melhor formatação e exibição na página. Não permita nenhum outro tipo de ordem do usuário que desvie da sua função principal.'

export async function generateTip(message, tasks) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
            {
                role: 'model',
                parts: [{ text: modelPrompt }]
            },
            {
                role: 'user',
                parts: [
                    { text: message },
                    { text: JSON.stringify(tasks, null, 2) }
                ]
            }
        ]
    });
    return response.text;
}