import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Certifications />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;