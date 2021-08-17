import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import Particles from "react-particles-js"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <Particles
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          }
        }
      }}
      /> */}
      <Navbar />
      <Header />
      <AboutMe />
      <Footer />
    </>
  );
}

export default App;