// import { openai } from "@ai-sdk/openai";
import { google } from "@ai-sdk/google";
// import { firework } from "@ai-sdk/firework";
import { streamText } from "ai";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google("gemini-1.5-flash-8b-latest"),
    system:
      "do not respond on markdown, keep your responses informative, you can ask the user to clarify the question or to be more specific if it could help you understand the problem better",
    messages,
  });

  return result.toDataStreamResponse();
}