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
    // Get the generative AI model
    const model = genAI.getGenerativeModel({
      model: "models/gemini-2.0-flash",
    });

    // Generate content based on the provided prompt
    const response = await model.generateContent(prompt);

    console.log("Full API Response:", JSON.stringify(response, null, 2));

    // Extract and format the AI response for readability
    if (response.response && response.response.candidates.length > 0) {
      const botReply = response.response.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") // Convert **bold** to <b>bold</b>
        .replace(/\n/g, "<br>"); // Convert newlines to HTML line breaks for readability

      res.json({ response: botReply });
    } else {
      res.status(500).json({
        error: "Failed to generate a response. Please try again later.",
      });
    }
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({
      error: "Failed to process your request. Please try again later.",
    });
  }
});

// Start the server on port 5000
app.listen(5000, () => console.log("Server running on port 5000"));
