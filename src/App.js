import React, { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const XSpellCheck = () => {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);

    // Split text into words, ignoring punctuation
    const words = inputText.split(/\s+/);

    for (let word of words) {
      const lowerCaseWord = word.toLowerCase(); // Case-insensitive check

      if (customDictionary[lowerCaseWord]) {
        setSuggestion(`Did you mean: ${customDictionary[lowerCaseWord]}?`);
        return;
      }
    }

    // No misspelled word found, clear suggestion
    setSuggestion("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Spell Check and Auto-Correction</h2>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
        style={{
          width: "100%",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      {suggestion && (
        <p style={{ color: "red", marginTop: "10px" }}>{suggestion}</p>
      )}
    </div>
  );
};

export default XSpellCheck;
