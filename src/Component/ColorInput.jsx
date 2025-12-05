import React from "react";
import { FiType } from "react-icons/fi";

export default function ColorInput() {
  return (
    <div className="color-input">
      <div className="container">
        <FiType className="icon" />
        <p>Enter Color Code or Name</p>
      </div>
      <input type="text" />
    </div>
  );
}
