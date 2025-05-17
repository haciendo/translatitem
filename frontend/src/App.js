import React, { useState } from "react";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [translated, setTranslated] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    setLoading(true);
    setTranslated("");
    try {
      const res = await fetch("http://localhost:8000/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });
      const data = await res.json();
      setTranslated(data.translated);
    } catch (e) {
      setTranslated("Error translating");
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Translatitem</h2>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to translate"
          style={{ padding: 8, fontSize: 16, marginBottom: 12, width: 250 }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !loading && input) {
              handleTranslate();
            }
          }}
        />
        <button
          onClick={handleTranslate}
          style={{ padding: "8px 16px", fontSize: 16, marginLeft: 8 }}
          disabled={loading || !input}
        >
          {loading ? "Translating..." : "Translate"}
        </button>
        {translated && (
          <div style={{ marginTop: 20, fontSize: 18 }}>
            <strong>Result:</strong> {translated}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
