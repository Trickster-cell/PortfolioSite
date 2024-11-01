import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import FooterBottom from "./components/Footer/FooterBottom";
import Navbar from "./components/Navbar/Navbar";
import Navbar2 from "./components/Navbar/Navbar2";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
        {/* <Footer /> */}
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
