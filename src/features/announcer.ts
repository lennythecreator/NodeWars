import Groq from "groq-sdk";
import { gameOpenerPrompt } from "../../prompts";
require("dotenv").config();
import { groq } from "../ai-controller/model-client";

export async function announcerOpener(){
    const opener = gameOpenerPrompt;
    const message = await groq.chat.completions.create(
        {
            messages:[{role:"user",content: opener}],
            model: "openai/gpt-oss-20b",
            response_format: {type:"text",},
        }
    )
    return message.choices[0].message.content
    
} 
