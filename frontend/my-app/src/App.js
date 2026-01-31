import { useState, useEffect, useRef } from "react";

function App() {
  const [problemLink, setProblemLink] = useState("");
  const [doubt, setDoubt] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  const sendMessage = async () => {
    if (!problemLink || !doubt || isLoading) return;

    setMessages((prev) => [...prev, { sender: "user", text: doubt }]);
    setIsLoading(true);
    setDoubt("");

    try {
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ problemLink, doubt }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.response || "No response received." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Something went wrong." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div style={styles.app}>
      <div style={styles.chatBox}>
        <h1 style={styles.title}>
          <span style={{ color: "#4fc3f7" }}>DSA</span>{" "}
          <span style={{ color: "#fff" }}>Chat</span>{" "}
          <span style={{ color: "#81c784" }}>Assistant</span>
        </h1>

        <input
          style={styles.input}
          placeholder="LeetCode Problem Link"
          value={problemLink}
          onChange={(e) => setProblemLink(e.target.value)}
        />

        <textarea
          style={styles.textarea}
          placeholder="Type your doubt here..."
          value={doubt}
          onChange={(e) => setDoubt(e.target.value)}
        />

        <button style={styles.button} onClick={sendMessage}>
          Send
        </button>

        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              ...styles.message,
              alignSelf: msg.sender === "bot" ? "flex-start" : "flex-end",
              background:
                msg.sender === "bot"
                  ? "rgba(255,255,255,0.92)"
                  : "linear-gradient(135deg, #42a5f5, #478ed1)",
              color: msg.sender === "bot" ? "#222" : "#fff",
            }}
          >
            <strong>{msg.sender}:</strong>
            {msg.sender === "bot" ? (
              <div
                dangerouslySetInnerHTML={{ __html: msg.text }}
                style={{ lineHeight: "1.7", fontSize: "14px" }}
              />
            ) : (
              <pre style={{ margin: 0 }}>{msg.text}</pre>
            )}
          </div>
        ))}

        {isLoading && (
          <div style={styles.thinking}>🤖 Bot is thinking…</div>
        )}

        <div ref={chatEndRef} />
      </div>
    </div>
  );
}

const styles = {
  app: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0b1d2a",
    overflow: "hidden",
    fontFamily: "Inter, system-ui",
  },

  chatBox: {
    height: "90vh",
    maxHeight: "720px",
    width: "92%",
    maxWidth: "850px",
    padding: "32px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(16px)",
    border: "1px solid rgba(255,255,255,0.25)",
    boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    overflowY: "auto", // ✅ ONLY scroll
  },

  title: {
    textAlign: "center",
    fontSize: "2.6rem",
    fontWeight: "800",
    marginBottom: "10px",
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.3)",
    background: "rgba(0,0,0,0.45)",
    color: "#fff",
  },

  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.3)",
    background: "rgba(0,0,0,0.45)",
    color: "#fff",
    height: "90px",
    resize: "none",
  },

  button: {
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    fontWeight: "600",
    cursor: "pointer",
    color: "#fff",
    background: "linear-gradient(135deg, #42a5f5, #478ed1)",
  },

  message: {
    padding: "14px 16px",
    borderRadius: "14px",
    maxWidth: "75%",
    boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
  },

  thinking: {
    background: "#fff3cd",
    padding: "10px",
    borderRadius: "10px",
    fontStyle: "italic",
    width: "fit-content",
  },
};

export default App;
