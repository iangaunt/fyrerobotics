import "../css/style.css";

import React from "react";
import { createRoot } from "react-dom/client";

import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Robots from "./components/sections/Robots";
import Title from "./components/sections/Title";

function App() {
    return (
        <div className="container"> 
            <Header />
            <Title />

            <About />
            <Robots />
            <Contact />

            <Footer />
        </div>
    )
}

const root = createRoot(document.getElementById("main"));
root.render(<App />);

function hello() {
    return "Hello!";
}
console.log(hello());