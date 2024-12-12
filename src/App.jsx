import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Courses from "./Components/Courses";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import HomePage from "./Components/Home/HomePage";
import Signup from "./Components/Signup";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login></Login>} />
        <Route path="/Signup" element={<Signup></Signup>} />
        <Route path="/HomePage" element={<HomePage></HomePage>} />
      </Routes>   
      <Footer/>  
    </BrowserRouter>
  );
}

export default App;