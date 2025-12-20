import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Books from "./pages/books";
import About from "./pages/about";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
