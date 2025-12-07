import React from "react";
import { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export default function ColorPreview({ color }) {
  return (
    <div className="color-preview">
      <div className="container">
        <MdOutlineRemoveRedEye className="icon" />
        <p>Selected Color</p>
      </div>
      <div className="color-box" style={{ backgroundColor: color }}></div>
    </div>
  );
}
