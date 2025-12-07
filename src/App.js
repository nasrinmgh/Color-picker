import "./App.css";
import React from "react";
import Header from "./Component/Header";
import ColorPreview from "./Component/ColorPreview";
import Picker from "./Component/Picker";
import ColorInput from "./Component/ColorInput";
import { IconName } from "react-icons/md";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("#ffffff");

  return (
    <>
      <Header />
      <ColorPreview color={color} />
      <Picker />
      <ColorInput setColor={setColor} />
    </>
  );
}

export default App;
