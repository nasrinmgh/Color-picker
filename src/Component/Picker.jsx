import React from "react";
import { MdColorLens } from "react-icons/md";

export default function Picker({ baseColor, onShadeChange }) {
  const handleMove = (e) => {
    const calculatedShade = baseColor; // temporary placeholder

    onShadeChange(calculatedShade);
  };
  return (
    <div className="color-picker">
      <div className="container">
        <MdColorLens className="icon" />
        <p>Pick a color</p>
      </div>
      <div
        className="sm-box"
        style={{
          background: `linear-gradient(135deg, #ffffff, ${baseColor})`,
        }}
        onMouseMove={handleMove}
      >
        <div className="hue-circle"></div>
      </div>
    </div>
  );
}
