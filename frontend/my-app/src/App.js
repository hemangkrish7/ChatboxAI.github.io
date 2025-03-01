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
            
            const data = await response.json();
            setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: data.response }]);
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h2>DSA Chat Assistant</h2>
            <input type='text' placeholder='LeetCode Link' value={problemLink} onChange={e => setProblemLink(e.target.value)} /><br />
            <input type='text' placeholder='Your Doubt' value={doubt} onChange={e => setDoubt(e.target.value)} /><br />
            <button onClick={sendMessage}>Send</button>
            <div>
                {messages.map((msg, index) => (
                    <p key={index}><b>{msg.sender}:</b> {msg.text}</p>
                ))}
            </div>
        </div>
    );
}

export default App;