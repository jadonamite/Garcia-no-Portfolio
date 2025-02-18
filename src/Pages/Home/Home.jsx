import React from "react";
import "./Home.css";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";
import About from "../../Components/About/About";
import Featured from "../../Components/Featured/Featured";

export default function Home() {
   return (
      <>
         <Navbar />
         <Hero />

         <Featured />
         <About />

         <Footer />
      </>
   );
}
