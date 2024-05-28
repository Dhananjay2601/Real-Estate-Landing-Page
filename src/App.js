import "./App.css";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Testimonail from "./pages/Testimonial";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import { useRef } from "react";

function App() {
  const HomeRef = useRef(null);
  const AboutRef = useRef(null);
  const ProjectsRef = useRef(null);
  const ServicesRef = useRef(null);
  const ContactRef = useRef(null);
  const TestimonialRef = useRef(null);
  const FooterRef = useRef(null);

  const handleClick = (section) => {
    const refMapping = {
      home: HomeRef,
      about: AboutRef,
      aboutBurger: AboutRef,
      slider: ProjectsRef,
      services: ServicesRef,
      contact: ContactRef,
      footer: FooterRef,
      testimonial: TestimonialRef,
    };

    const scrollOptions = {
      behavior: "smooth",
      block:
        section === "home"
          ? "start"
          : "end" && section === "aboutBurger"
          ? "start"
          : "end",
    };

    refMapping[section]?.current?.scrollIntoView(scrollOptions);
    refMapping["home"]?.current?.scrollTo({ top: 0 });
  };

  return (
    <div className="App  bg-primary w-full h-full">
      <div ref={HomeRef}></div>
      {/* Navbar */}
      <div className="">
        <Navbar handler={handleClick} />
      </div>
      {/* home */}
      <div>
        <Home />
      </div>
      {/* filter */}
      <Filter />
      {/* about */}
      <div ref={AboutRef}>
        <About />
      </div>
      {/* services */}
      <div ref={ServicesRef}>
        <Services />
      </div>
      {/* projects */}
      <div ref={ProjectsRef}>
        <Projects />
      </div>
      {/* testimonails */}
      <div ref={TestimonialRef}>
        <Testimonail />
      </div>
      {/* contact */}
      <div ref={ContactRef}>
        <Contact />
      </div>
      {/* footer */}
      <div ref={FooterRef}>
        <Footer handler={handleClick} />
      </div>
    </div>
  );
}

export default App;
