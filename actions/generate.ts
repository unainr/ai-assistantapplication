"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function generateContent(prompt: string) {
	if (!prompt) {
		throw new Error("Prompt is required");
	}
	if (!process.env.GOOGLE_API_KEY) {
		throw new Error("GOOGLE_API_KEY is required");
	}
	try {
		const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
		const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
		const result = await model.generateContent(prompt);
		return result.response.text();
	} catch (error) {
		throw new Error("Failed to generate content");
	}
}
