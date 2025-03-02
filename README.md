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
   git clone https://github.com/hemangkrish7/ChatboxAI.github.io.git
   cd ChatboxAI.github.io
   ```
Backend Setup:

Navigate to the backend folder:
sh
Copy
Edit
cd backend
Install backend dependencies:
sh
Copy
Edit
npm install
Create a .env file and add your Gemini API Key:
sh
Copy
Edit
GEMINI_API_KEY=your_api_key_here
Start the backend server:
sh
Copy
Edit
node server.js
Frontend Setup:

Navigate to the my_react_app folder:
sh
Copy
Edit
cd my_react_app
Install frontend dependencies:
sh
Copy
Edit
npm install
Start the React frontend server:
sh
Copy
Edit
npm start
Proxy Configuration (Optional but recommended):

In your React app’s package.json, add the following proxy configuration to avoid needing to manually specify the backend URL:
json
Copy
Edit
"proxy": "http://localhost:5000"

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

## 📩 Contact
For any queries, feel free to reach out:

👤 **Hemang Krish**  
📧 **hemangkrish_co21a4-24@dtu.ac.in**  
   

## 🔗 Additional Features
- **⚠️ Error Handling**: Displays messages when the backend is unreachable.
- **🎨 Responsive UI**: Styled with CSS for a clean, modern look.
- **🚀 Future Enhancements**:
  - Add **dark mode** support.
  - Improve AI response formatting for clarity.
