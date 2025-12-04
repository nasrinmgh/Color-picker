import "./App.css";
import React from "react";
import Header from "./Component/Header";
import ColorPreview from "./Component/ColorPreview";
import Picker from "./Component/Picker";
import ColorInput from "./Component/ColorInput";
import ColorCode from "./Component/ColorCode";
import { IconName } from "react-icons/md";

function App() {
  return (
    <>
      <Header />
      <ColorPreview />
      <Picker />
      <ColorInput />
      <ColorCode />
    </>
  );
}

export default App;
