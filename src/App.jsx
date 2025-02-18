import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About/About.jsx";
import Home from "./Pages/Home/Home.jsx";
import "./App.css";

export default function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
         </Routes>
      </>
   );
}
