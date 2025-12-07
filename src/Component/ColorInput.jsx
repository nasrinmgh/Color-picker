import React from "react";
import { FiType } from "react-icons/fi";

export default function ColorInput({ setColor }) {
  return (
    <div className="color-input">
      <div className="container">
        <FiType className="icon" />
        <p>Enter Color Code or Name</p>
      </div>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
    </div>
  );
}
