import { useState } from 'react';

function App() {
    const [problemLink, setProblemLink] = useState('');
    const [doubt, setDoubt] = useState('');
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = async () => {
        if (!problemLink || !doubt) return;

        const userMessage = { sender: 'user', text: doubt };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        setIsLoading(true); // Show "thinking" message
        console.log("Sending request to backend:", { problemLink, doubt });

        try {
            const response = await fetch('http://localhost:5000/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ problemLink, doubt }),
            });

            const data = await response.json();
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'bot', text: data.response },
            ]);
        } catch (error) {
            console.error("Error sending message:", error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'bot', text: 'Something went wrong. Please try again later.' },
            ]);
        } finally {
            setIsLoading(false); // Hide "thinking" message
        }
    };

    return (
        <div style={styles.app}>
            <h2 style={styles.title}>DSA Chat Assistant</h2>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="LeetCode Problem Link"
                    value={problemLink}
                    onChange={(e) => setProblemLink(e.target.value)}
                    style={styles.input}
                />
                <textarea
                    placeholder="Type your doubt here..."
                    value={doubt}
                    onChange={(e) => setDoubt(e.target.value)}
                    style={styles.textarea}
                />
                <button onClick={sendMessage} style={styles.button}>Send</button>
            </div>
            <div style={styles.chatContainer}>
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.message,
                            backgroundColor: msg.sender === 'bot' ? '#F0F8FF' : '#D1E7FF',
                            alignSelf: msg.sender === 'bot' ? 'flex-start' : 'flex-end',
                        }}
                    >
                        <strong style={styles.sender}>{msg.sender}:</strong>
                        {msg.sender === 'bot' ? (
                            <div
                                style={styles.messageText}
                                dangerouslySetInnerHTML={{ __html: msg.text }}
                            />
                        ) : (
                            <pre style={styles.messageText}>{msg.text}</pre>
                        )}
                    </div>
                ))}
                {isLoading && (
                    <div style={styles.thinkingMessage}>
                        <strong>Bot:</strong> 🤖Bot is thinking...
                    </div>
                )}
            </div>
        </div>
    );
}

const styles = {
    app: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        borderRadius: '10px',
        background: 'linear-gradient(135deg, #f3f4f6, #e3eaf5)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    title: {
        textAlign: 'center',
        color: '#007BFF',
        marginBottom: '20px',
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    input: {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        fontSize: '16px',
    },
    textarea: {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        fontSize: '16px',
        height: '80px',
        resize: 'none',
    },
    button: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#007BFF',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    chatContainer: {
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    message: {
        padding: '10px 15px',
        borderRadius: '10px',
        maxWidth: '70%',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    sender: {
        fontWeight: 'bold',
        display: 'block',
        marginBottom: '5px',
        color: '#333',
    },
    messageText: {
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        fontSize: '14px',
        color: '#555',
    },
    thinkingMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#FFF3CD',
        color: '#856404',
        padding: '10px 15px',
        borderRadius: '10px',
        maxWidth: '70%',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        fontStyle: 'italic',
    },
};

export default App;