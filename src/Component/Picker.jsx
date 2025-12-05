import React from "react";
import { MdColorLens } from "react-icons/md";

export default function Picker() {
  return (
    <div className="color-picker">
      <div className="container">
        <MdColorLens className="icon" />
        <p>Pick a color</p>
      </div>
      <div className="sm-box"></div>
    </div>
  );
}
