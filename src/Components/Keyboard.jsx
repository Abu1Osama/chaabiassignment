import React from "react";
import "../Styles/Keyboard.css";

const Keyboard = ({ onKeyClick }) => {
  const keys = [
    [
      { key: "1", label: "1" },
      { key: "2", label: "2" },
      { key: "3", label: "3" },
      { key: "4", label: "4" },
      { key: "5", label: "5" },
      { key: "6", label: "6" },
      { key: "7", label: "7" },
      { key: "8", label: "8" },
      { key: "9", label: "9" },
      { key: "0", label: "0" },
    ],
    [
      { key: "q", label: "Q" },
      { key: "w", label: "W" },
      { key: "e", label: "E" },
      { key: "r", label: "R" },
      { key: "t", label: "T" },
      { key: "y", label: "Y" },
      { key: "u", label: "U" },
      { key: "i", label: "I" },
      { key: "o", label: "O" },
      { key: "p", label: "P" },
    ],
    [
      { key: "a", label: "A" },
      { key: "s", label: "S" },
      { key: "d", label: "D" },
      { key: "f", label: "F" },
      { key: "g", label: "G" },
      { key: "h", label: "H" },
      { key: "j", label: "J" },
      { key: "k", label: "K" },
      { key: "l", label: "L" },
    ],
    [
      { key: "z", label: "Z" },
      { key: "x", label: "X" },
      { key: "c", label: "C" },
      { key: "v", label: "V" },
      { key: "b", label: "B" },
      { key: "n", label: "N" },
      { key: "m", label: "M" },
    ],
    [
      { key: "@", label: "@" },
      { key: "#", label: "#" },
      { key: "$", label: "$" },
      { key: "&", label: "&" },
      { key: "*", label: "*" },
      { key: "-", label: "-" },
      { key: "+", label: "+" },
      { key: "_", label: "_" },
    ],
    [
      { key: " ", label: "Space", span: 6 },
      { key: "enter", label: "Enter", span: 4 },
    ],
  ];

  const handleKeyPress = (key) => {
    // Handle key press event
    onKeyClick ()
    console.log("Key pressed:", key);
  };

  return (
    <div className="keyboard">
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((key, keyIndex) => (
            <button
              key={keyIndex}
              onClick={() => handleKeyPress(key.key)}
              style={{ gridColumn: `span ${key.span || 1}` }}
            >
              {key.label}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
