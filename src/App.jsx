import { BrowserRouter, Routes,Route } from "react-router-dom"; // Import BrowserRouter
import Navbar from "./Components/Navbar/Navbar"; // Import Navbar component
import HeroSection from "./Components/Hero/HeroSection";
import About from "./Pages/About";
import Home from "./Pages/Home";
// import Cources from "./Components/Cources";


function App() {
  return (
    <BrowserRouter> {/* Wrap everything inside Router */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
