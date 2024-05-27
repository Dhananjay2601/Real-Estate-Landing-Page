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

function App() {
  return (
    <div className="App  bg-primary w-full h-full">
      {/* Navbar */}
      <div className="">
        <Navbar />
      </div>
      {/* home */}
      <div>
        <Home />
      </div>
      {/* filter */}

      <Filter />

      {/* about */}
      <div>
        <About />
      </div>

      {/* services */}
      <div>
        <Services />
      </div>

      {/* projects */}
      <div>
        <Projects />
      </div>

      {/* testimonails */}
      <div>
        <Testimonail />
      </div>

      {/* contact */}
      <div>
        <Contact />
      </div>

      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
