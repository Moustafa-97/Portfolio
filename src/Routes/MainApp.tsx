import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import HomePage from "../components/aaHomePage/HomePage";
import About from "../components/about/About";
import Education from "../components/education/Education";
import Services from "../components/services/Services";
import Contact from "../components/contact/Contact";
import Projects from "../components/projects/Projects";
import AboutSection from "./about/AboutSection";
import Footer from "../components/footer/Footer";

export default function MainApp() {
  return (
    <BrowserRouter>
      <Header>
        <>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
      </Header>
          <Footer />
    </BrowserRouter>
  );
}
