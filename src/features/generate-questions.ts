import Groq from 'groq-sdk';
require("dotenv").config();
import { getRoundStartPrompt } from '../../prompts';
const groq = new Groq({apiKey: process.env.GROQ_API_KEY});
export async function generateQuestion (promt: string, topic?: string, answer?: object, points?: number ):Promise<any> {
    try{
        console.log(process.env.GROQ_API_KEY); // Log the API key value

        answer = await groq.chat.completions.create({
            messages: [
        {
            role: "user",
            content: promt,
        },
        ],
        response_format: {
        type: "json_schema",
        json_schema: {
        name: "question",
        schema: {
            type: "object",
            properties: {
            question:{
                type:"string",
                description:"Task description for contenstants"
            },
            snippets:{
                type:"array",
                items:{
                    type:"object",
                    properties:{
                        title: {type: "string", title:"Title of snippet"},
                        code:{type:"string", content:"Snippet code"}
                    },
                    required: ["title", "code"],
                    additionalProperties: false
                }
            }
            },
            required: ["product_name", "rating", "sentiment", "key_features"],
            additionalProperties: false
        }
        }},
        model: "openai/gpt-oss-20b",
        
        })

        const content = answer.choices[0].message.content;
        console.log(content);

        const parsedResponse: QuestionResponse = JSON.parse(content || '{}');
        
        return parsedResponse;
        
    } catch(error){
        console.log(error);
        throw error;
    }

   
    
}

// Helper function specifically for generating round snippets
export async function generateRoundSnippets(
    topic: string, 
    task: string, 
    numSnippets: number
): Promise<any> {
    const prompt = getRoundStartPrompt(topic, task, numSnippets);
    return await generateQuestion(prompt);
}