import React, { Fragment } from "react";
import { MdColorize } from "react-icons/md";

export default function Header() {
  return (
    <div className="header">
      <MdColorize className="color-icon" />
      <p>Color Picker</p>
    </div>
  );
}
