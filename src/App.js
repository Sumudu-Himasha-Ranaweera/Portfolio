import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { Technologies } from "./components/Technologies";
import { Certifications } from "./components/Certifications";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Technologies />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
