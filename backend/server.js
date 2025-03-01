const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/chat', async (req, res) => {
    const { problemLink, doubt } = req.body;
    
    if (!problemLink || !doubt) {
        return res.status(400).json({ error: 'Problem link and doubt are required' });
    }
    
    console.log("Received request:", { problemLink, doubt });
    
    const prompt = `User's DSA problem: ${problemLink}\nDoubt: ${doubt}\nGive hints without providing a direct solution.`;
    
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const response = await model.generateContent(prompt);
        console.log("Generated response:", response.candidates[0].content);
        res.json({ response: response.candidates[0].content });
    } catch (error) {
        console.error("Error processing request:", error);
        res.status(500).json({ error: error.message || 'Failed to fetch response' });
    }
});

app.listen(5000, () => console.log('Server running on port 5000'));