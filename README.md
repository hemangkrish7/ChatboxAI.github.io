# Software Engineering Intern Assignment

## 📌 Overview
This project is a **GPT-based Teaching Assistant** that helps users understand **Data Structures and Algorithms (DSA)** problems. Users can submit a **LeetCode problem link** along with their **doubt**, and the chatbot will provide **guidance, hints, and insights** without giving direct answers.

## 🎯 Objective
- Build an interactive and **user-friendly chat interface**.
- Use **GPT/Gemini AI** to help users think critically about DSA problems.
- Provide **structured hints, guiding questions, and related examples**.

## 📜 Requirements
### 1️⃣ **User Interface**
- A **clean and intuitive chat interface** where users can:
  - ✅ Submit a **LeetCode problem URL**.
  - ✅ Type **doubts or questions** about the problem.
  - ✅ View **GPT-based responses** with hints and insights.
- The interface supports **basic chat functionalities** like sending messages and receiving responses.

### 2️⃣ **Integration with GPT/Gemini AI**
- A **Node.js backend** that communicates with **Google Gemini API**.
- AI responses **guide users** rather than provide direct answers.
- The chatbot focuses on **thought-provoking hints** instead of solutions.

### 3️⃣ **Quality of Prompts**
- A **set of structured prompts** that GPT/Gemini uses to interact with users.
- Prompts encourage **deeper understanding and independent problem-solving**.
- The AI must return responses in the following format:
  
```plaintext
**Problem Summary**: A brief explanation of the problem.
**Key Concepts**:
- 🔹 List of key algorithms or techniques.
**Hints**:
1. 🤔 Thought-provoking hint 1.
2. 💡 Thought-provoking hint 2.
**Related Problems**:
- 🔗 Similar problem for further practice.
```

---
## 🔧 Setup Instructions
### 🛠️ **Prerequisites**
Ensure you have:
- **Node.js** installed
- **NPM** package manager
- **Google Gemini API Key**

### 📥 **Installation Steps**
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/dsa-chat-assistant.git
   cd dsa-chat-assistant
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up environment variables:**
   - Create a `.env` file and add:
     ```sh
     GEMINI_API_KEY=your_api_key_here
     ```
4. **Start the application:**
   ```sh
   npm start
   ```

---
## 📤 Submission Guidelines
- Submit this project as a **GitHub repository**.
- Share the repo with: **[Naman Bhalla](https://github.com/Naman-Bhalla/)**.
- The repository should include:
  - ✅ **All necessary code files**.
  - ✅ **README with setup, architecture, and usage details**.
  - ✅ **Example prompts used in the chatbot**.

---
## 🏆 Evaluation Criteria
Your project will be judged on:
1. **Functionality**: Does the chatbot meet the requirements?
2. **Code Quality**: Is the code **clean, well-structured, and documented**?
3. **Prompt Effectiveness**: How well do the AI-generated prompts **engage and guide** users?

---
## 📝 Notes
- You can use **Gemini API** instead of OpenAI's GPT.
- Ensure the chatbot **does not give direct answers** but focuses on guiding users.
