import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Books from "./pages/books";
import About from "./pages/about";
import Header from "./components/Header.jsx";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import About from "./pages/about.jsx";
import { useState, useEffect } from "react";

import Books from "./pages/books.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
