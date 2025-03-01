# DSA Chat Assistant 

## 📌 Overview
This project is a **GPT-based Teaching Assistant** designed to help users understand **Data Structures and Algorithms (DSA)** problems. Users can input a **LeetCode problem link** along with their **doubt**, and the chatbot provides **guidance, hints, and insights** without giving direct answers.

## 🎯 Objective
- Develop a **user-friendly chat interface**.
- Integrate **GPT/Gemini AI** to assist users in understanding DSA problems.
- Provide **structured hints, guiding questions, and related examples**.

## 📜 Requirements
### 1️⃣ **User Interface**
- A simple and intuitive chat interface where users can:
  - ✅ Submit a **LeetCode problem URL**.
  - ✅ Enter **doubts or questions** about the problem.
  - ✅ Receive **AI-generated hints and insights**.
- Basic chat functionalities such as sending messages and displaying responses.

### 2️⃣ **Integration with GPT/Gemini AI**
- A **Node.js backend** that communicates with the **Google Gemini API**.
- AI responses provide **guidance** instead of direct solutions.
- Focus on **helpful hints** to encourage independent problem-solving.

### 3️⃣ **Quality of Prompts**
- The chatbot uses structured prompts to generate relevant responses.
- Prompts are designed to enhance understanding and critical thinking.
- The AI response follows this format:
  
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

## 🏗️ Backend Implementation
- Built using **Node.js** and **Express.js** for handling API requests.
- Integrates **Google Gemini API** for generating AI responses.
- Processes user queries and sends structured prompts to Gemini.
- Ensures **error handling** for API failures or invalid inputs.

## 🌐 Frontend Implementation
- Developed using **React.js** for an interactive user experience.
- Uses **useState** to manage chat state.
- Fetches responses from the backend using **Fetch API**.
- Displays messages in a structured chat format.
- Includes **loading indicators** while waiting for AI responses.

## 🔹 How to Use
1. **Enter a LeetCode problem link** in the input field.
2. **Type your doubt** related to the problem.
3. **Click 'Send'** to process the query.
4. The AI will provide **hints and key concepts** instead of direct solutions.
5. **Explore related problems** suggested by the chatbot for further practice.

## 🔗 Additional Features
- **⚠️ Error Handling**: Displays messages when the backend is unreachable.
- **🎨 Responsive UI**: Styled with CSS for a clean, modern look.
- **🚀 Future Enhancements**:
  - Add **dark mode** support.
  - Improve AI response formatting for clarity.
