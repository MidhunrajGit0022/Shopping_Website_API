import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
     {/* <Home /> */}
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart/:id" element={<Cart />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
