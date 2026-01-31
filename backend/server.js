const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config(); // Load environment variables from a .env file

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors()); // Enable CORS to allow requests from different origins

// Initialize the AI model using the API key stored in environment variables
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Endpoint to handle user doubts related to LeetCode problems
app.post("/chat", async (req, res) => {
  const { problemLink, doubt } = req.body;

  // Validate if both problemLink and doubt are provided in the request
  if (!problemLink || !doubt) {
    return res.status(400).json({ error: "Problem link and doubt are required" });
  }

  // Ensure the provided problem link is a valid LeetCode URL
  if (
    !problemLink.startsWith("https://leetcode.com/problems/") &&
    !problemLink.startsWith("https://www.leetcode.com/problems/")
  ) {
    return res.status(400).json({ error: "Invalid LeetCode problem link." });
  }

  console.log("Received request:", { problemLink, doubt });

  // Create a prompt that will guide the AI to generate a helpful response
  const prompt = `
    The user has provided a DSA problem: ${problemLink}.
    They have the following doubt: "${doubt}".
    
    Your task is to:
    1. Identify the key concepts or algorithms required (e.g., dynamic programming, graph traversal, etc.).
    2. Offer hints or guiding questions to help the user think critically.
    3. Avoid giving the direct solution.

    

    Always encourage the user to explore the solution themselves.
  `;
  // Additional prompts that can be added according to the demand of the set 
  /*Always format your response as follows:
    - **Problem Summary**: Briefly summarize the problem in 1-2 sentences.
    - **Key Concepts**: List the relevant concepts or algorithms in bullet points.
    - **Hints**: Provide hints as a numbered list, encouraging critical thinking.*/

  try {
  const model = genAI.getGenerativeModel({
    model: "models/gemini-3-flash-preview",
  });

  const response = await model.generateContent(prompt);

  console.log("Full API Response:", JSON.stringify(response, null, 2));

  const text =
    response?.response?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    return res.status(500).json({
      error: "Failed to generate a response.",
    });
  }

  const cleanedText = text
  // 🔥 remove LaTeX math like $O(n)$, $O(n^2)$
  .replace(/\$[^$]*\$/g, "")

  // remove escaped LaTeX
  .replace(/\\\(|\\\)/g, "")
  .replace(/\\\[|\\\]/g, "")

  // clean extra spaces
  .replace(/\s{2,}/g, " ");

const botReply = cleanedText
  .replace(/^### (.*$)/gim, "<h3>$1</h3>")
  .replace(/^#### (.*$)/gim, "<h4>$1</h4>")
  .replace(/^\* (.*$)/gim, "<li>$1</li>")
  .replace(/\n<li>/g, "<ul><li>")
  .replace(/(<\/li>)(?!<li>)/g, "$1</ul>")
  .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
  .replace(/\n/g, "<br>");


} catch (error) {
  console.error("Error processing request:", error);
  res.status(500).json({
    error: "Failed to process your request. Please try again later.",
  });
  if (error.status === 429) {
  return res.status(429).json({
    response: "⚠️ Too many requests. Please wait a minute and try again.",
  });
}
}
}); 



// Start the server on port 5000
app.listen(5000, () => console.log("Server running on port 5000")); 

