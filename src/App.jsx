import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Your Home Page
import Destinations from "./pages/DestinationPage";
import About from "./pages/About";
import Package from "./pages/Package";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
return (
<Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/destinations" element={<Destinations />} />
    <Route path="/about" element={<About />} />
    <Route path="/package" element={<Package />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/admin" element={<Admin />} />
  </Routes>
  <Footer />
</Router>
);
}

export default App;