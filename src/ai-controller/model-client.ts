import Groq from "groq-sdk";
require("dotenv").config();
export const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });