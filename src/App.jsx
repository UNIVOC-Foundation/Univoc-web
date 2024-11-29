import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Courses from "./Components/Courses";
import Footer from "./Components/Footer/Footer";
import ContactForm from "./Components/Contacts/ContactForm";

function App() {
  return (<>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
     <ContactForm/>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
