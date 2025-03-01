const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/chat", async (req, res) => {
  const { problemLink, doubt } = req.body;

  // Validate input
  if (!problemLink || !doubt) {
    return res
      .status(400)
      .json({ error: "Problem link and doubt are required" });
  }

  // Validate LeetCode problem link
  if (
    !problemLink.startsWith("https://leetcode.com/problems/") &&
    !problemLink.startsWith("https://www.leetcode.com/problems/")
  ) {
    return res.status(400).json({ error: "Invalid LeetCode problem link." });
  }

  console.log("Received request:", { problemLink, doubt });

  // AI Prompt
  const prompt = `
    The user has provided a DSA problem: ${problemLink}.
    They have the following doubt: "${doubt}".
    Your task is to:

    1. Identify the key concepts or algorithms required (e.g., dynamic programming, graph traversal, etc.).
    2. Offer hints or guiding questions to help the user think critically.

    3. Avoid giving the direct solution.

    Always format your response as follows:
    - **Problem Summary**: Briefly summarize the problem in 1-2 sentences.
    - **Key Concepts**: List the relevant concepts or algorithms in bullet points.
    - **Hints**: Provide hints as a numbered list, encouraging critical thinking.
   

    Always encourage the user to explore the solution themselves.
        
    `;
  /*const prompt = `
The user has provided a DSA problem: ${problemLink}.
They have the following doubt: "${doubt}".

Your task is to:
1. Provide a brief summary of the problem (avoid copying the exact problem statement).
2. Identify the key concepts or algorithms required (e.g., dynamic programming, graph traversal, etc.).
3. Offer hints or guiding questions to help the user think critically.
4. Provide examples of similar, simpler problems if applicable.
5. Avoid giving the direct solution.

Always format your response as follows:
- **Problem Summary**: Briefly summarize the problem in 1-2 sentences.
- **Key Concepts**: List the relevant concepts or algorithms in bullet points.
- **Hints**: Provide hints as a numbered list, encouraging critical thinking.
- **Related Problems**: If applicable, suggest similar problems for further practice.

Always encourage the user to explore the solution themselves.
`;*/

  try {
    const model = genAI.getGenerativeModel({
      model: "models/gemini-2.0-flash",
    });
    const response = await model.generateContent(prompt);

    console.log("Full API Response:", JSON.stringify(response, null, 2));

    // Extract and send the response
    if (response.response && response.response.candidates.length > 0) {
      const botReply = response.response.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
        .replace(/\n/g, "<br>");
      res.json({ response: botReply });
    } else {
      res
        .status(500)
        .json({
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

app.listen(5000, () => console.log("Server running on port 5000"));
