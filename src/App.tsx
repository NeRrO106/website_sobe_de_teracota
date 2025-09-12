import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
