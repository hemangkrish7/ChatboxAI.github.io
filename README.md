# DSA Chat Assistant

 
*A GPT-based assistant for understanding DSA problems through guided hints and insights.*

## 📌 Overview
This project is a **GPT-based Teaching Assistant** designed to help users understand **Data Structures and Algorithms (DSA)** problems. Users can input a **LeetCode problem link** along with their **doubt**, and the chatbot provides **guidance, hints, and insights** without giving direct answers.

## 🎯 Features
✅ Submit a **LeetCode problem URL**  
✅ Ask **doubts or questions** about the problem  
✅ Receive **AI-generated hints and insights**  
✅ Provides structured guidance instead of direct solutions  
✅ Error handling for better user experience  
✅ Responsive UI with modern design

## 🚀 Tech Stack
- **Frontend:** React.js, CSS
- **Backend:** Node.js, Express.js
- **AI Model:** Google Gemini API
- **Database:** (Optional) PostgreSQL/MongoDB for tracking user queries

## 📜 Installation
### 🛠️ Prerequisites
Ensure you have the following installed:
- **Node.js**
- **NPM**
- **Google Gemini API Key**

### 📥 Setup Instructions
#### 🔧 Clone the Repository
```sh
git clone https://github.com/hemangkrish7/ChatboxAI.github.io.git
cd ChatboxAI.github.io
```

#### 🏗 Backend Setup
```sh
cd backend
npm install
```
Create a `.env` file and add your API key:
```sh
GEMINI_API_KEY=your_api_key_here
```
Start the backend server:
```sh
node server.js
```

#### 🌐 Frontend Setup
```sh
cd my_react_app
npm install
npm start
```

#### 🔗 Proxy Configuration (Optional)
To avoid CORS issues, add this to `package.json` in your React app:
```json
"proxy": "http://localhost:5000"
```

## 💡 Usage
1. **Enter a LeetCode problem link** in the input field.
2. **Type your doubt** related to the problem.
3. **Click 'Send'** to process the query.
4. AI provides **hints and key concepts** instead of direct answers.
5. **Explore related problems** suggested by the chatbot.

## 📂 Project Structure
```plaintext
📦 DSA-Chat-Assistant
├── backend  # Node.js API
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── .env
├── my_react_app  # React Frontend
│   ├── src/
│   ├── components/
│   ├── App.js
├── README.md
```

## 🎨 Screenshots
![Chat Interface](https://your-image-url.com/chat-interface.png)

## 🤖 API Structure
### `POST /api/chat`
**Request Body:**
```json
{
  "problemUrl": "https://leetcode.com/problems/two-sum",
  "question": "How to approach this problem?"
}
```
**Response:**
```json
{
  "problemSummary": "Find two numbers that add up to target.",
  "keyConcepts": ["HashMap", "Two Pointer"],
  "hints": [
    "Try using a HashMap to store numbers you've seen so far.",
    "Can you solve it in O(n) time complexity?"
  ],
  "relatedProblems": ["Three Sum", "Two Sum II"]
}
```

## 🔥 Future Enhancements
- **Dark mode support**
- **Improved AI response formatting**
- **User authentication & history tracking**

## 📩 Contact
👤 **Hemang Krish**  
📧 [hemangkrish_co21a4-24@dtu.ac.in](mailto:hemangkrish_co21a4-24@dtu.ac.in)  



---
**⭐ Don't forget to star the repo if you find it useful!**

