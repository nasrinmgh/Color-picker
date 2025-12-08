import React from "react";
import { useState } from "react";

export default function ColorUpdate({ shadeColor }) {
  return <div className="sm-box">Current Color: {shadeColor}</div>;
}
