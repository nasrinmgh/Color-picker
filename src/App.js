import "./App.css";
import React from "react";
import Header from "./Component/Header";
import ColorPreview from "./Component/ColorPreview";
import Picker from "./Component/Picker";
import ColorInput from "./Component/ColorInput";
import ColorUpdate from "./Component/ColorUpdate";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("#ffffff");
  const [shadeColor, setShadeColor] = useState("#ffffff");

  return (
    <>
      <Header />
      <ColorPreview color={shadeColor} />
      <Picker baseColor={color} onShadeChange={setShadeColor} />
      <ColorInput onColorChange={setColor} />
      <ColorUpdate shadeColor={shadeColor} />
    </>
  );
}

export default App;
