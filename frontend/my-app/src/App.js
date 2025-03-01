import { useState } from 'react';

function App() {
    const [problemLink, setProblemLink] = useState('');
    const [doubt, setDoubt] = useState('');
    const [messages, setMessages] = useState([]);

    const sendMessage = async () => {
        if (!problemLink || !doubt) return;

        const userMessage = { sender: 'user', text: doubt };
        setMessages(prevMessages => [...prevMessages, userMessage]);

        console.log("Sending request to backend:", { problemLink, doubt });

        try {
            const response = await fetch('http://localhost:5000/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ problemLink, doubt })
            });

            if (!response.ok) throw new Error("Server error!");

            const data = await response.json();
            setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: data.response }]);

            // ✅ Clear doubt field after sending
            setDoubt('');
        } catch (error) {
            console.error("Error sending message:", error);
            setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: "⚠️ Error: Could not connect to server." }]);
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '500px', margin: 'auto' }}>
            <h2>DSA Chat Assistant</h2>
            <input 
                type='text' 
                placeholder='LeetCode Link' 
                value={problemLink} 
                onChange={e => setProblemLink(e.target.value)} 
                style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
            /><br />
            <input 
                type='text' 
                placeholder='Your Doubt' 
                value={doubt} 
                onChange={e => setDoubt(e.target.value)} 
                style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
            /><br />
            <button 
                onClick={sendMessage} 
                style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
                Send
            </button>
            <div style={{ marginTop: '20px' }}>
                {messages.map((msg, index) => (
                    <p key={index}><b>{msg.sender}:</b> {msg.text}</p>
                ))}
            </div>
        </div>
    );
}

export default App;
