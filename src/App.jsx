import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/home";

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Header />
      <div>
        <Homepage />
      </div>
    </div>
  );
}

export default App;
