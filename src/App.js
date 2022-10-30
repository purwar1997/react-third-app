import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./App.css";

// function name can be anything but has to start with a capital letter
// all the components are bundled inside App() function
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
