import React from "react";
import { FiType } from "react-icons/fi";

export default function ColorInput({ onColorChange }) {
  return (
    <div className="color-input">
      <div className="container">
        <FiType className="icon" />
        <p>Enter Color Code or Name</p>
      </div>
      <input type="text" onChange={(e) => onColorChange(e.target.value)} />
    </div>
  );
}
