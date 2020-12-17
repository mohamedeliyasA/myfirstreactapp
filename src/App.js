import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Happy",
  "😞": "Sad",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function inputChangeHandler(event) {
    var tempmeaning = emojiDictionary[event.target.value];

    if (tempmeaning === undefined) {
      tempmeaning = "We dont have it";
    }
    setMeaning(tempmeaning);
  }

  function emojiClickHander(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>my First react Program</h1>
      <input onChange={inputChangeHandler}></input>
      <div>{meaning}</div>
      <h3>emojis we know </h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHander(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
