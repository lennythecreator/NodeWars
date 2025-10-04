import OpenAI from "openai";
import { playAudio } from "openai/helpers/audio";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
require("dotenv").config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function textToSpeech(prompt: string){
    const response = await openai.audio.speech.create({
        model: "gpt-4o-mini-tts",
        voice: "coral",
        input: prompt,
        instructions: "Speak in a cheerful and positive tone.",
        response_format: "wav",
    })


    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const outputPath = path.resolve("output.wav");
    fs.writeFileSync(outputPath, buffer);
    console.log("✅ Audio saved to:", outputPath);

}