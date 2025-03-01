# DSA Chat Assistant

This project is a simple DSA chat assistant that helps users clarify their doubts about DSA problems using the Google Gemini API.

## Features
- Accepts a LeetCode problem link and a user query.
- Uses Gemini API to analyze the problem and provide hints.
- Avoids direct solutions to encourage problem-solving skills.
- Suggests related problems for further practice.

## Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (>= 14.x)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/dsa-chat-assistant.git
   cd dsa-chat-assistant
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up your environment variables:
   - Create a `.env` file in the root directory.
   - Add your Google Gemini API key:
     ```sh
     GEMINI_API_KEY=your_api_key_here
     ```

## Usage

### Running the Application
```sh
npm start
```

### Gemini API Integration

The assistant uses the Google Gemini API to generate responses based on the user's problem statement and doubts. The API is initialized as follows:

```javascript
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
```

### Prompt Used

The AI is prompted to provide structured hints and guidance without revealing the full solution:

```javascript
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
    - **Related Problems**: Suggest similar problems for further practice if applicable.

    Always encourage the user to explore the solution themselves.
`;
```

## Contributing
Feel free to submit issues and pull requests for improvements!

## Contact
For any questions or discussions, email or open an issue on GitHub.

