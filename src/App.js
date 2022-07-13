import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import "./styles/styles.css"

export default function App() {
  return (
    <article className="card">
      <Info /> 
      <About />
      <Interests/>
      <Footer />
    </article>
  );
}
