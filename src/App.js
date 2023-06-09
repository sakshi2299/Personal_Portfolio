import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { headerTabs } from "./config/routingconfig";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header
          brandName={"MY PORTFOLIO"}
          tabData={headerTabs}
          sx={{ fontFamily: "'Courgette', cursive" }}
        />
        <Routes>
          <Route index path="/" element={<Hero />} />
          <Route index path="/about" element={<About />} />
          <Route index path="/services" element={<Services />} />
          <Route index path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

































